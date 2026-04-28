from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from database import init_db, get_conn
from briefing import generate_briefing, get_market_data
from trend import infer_segment, aggregate_phones, generate_trend_insights
from portfolio import search_kr_stock, search_us_stock, get_valuation, get_holding_history, get_overview, get_portfolio_performance
from lotto_recommender import LottoRecommender

def _lotto_history_from_db() -> list[list[int]]:
    conn = get_conn()
    rows = conn.execute(
        "SELECT n1,n2,n3,n4,n5,n6 FROM lotto_draws ORDER BY round DESC LIMIT 200"
    ).fetchall()
    conn.close()
    return [sorted([r['n1'],r['n2'],r['n3'],r['n4'],r['n5'],r['n6']]) for r in rows]
from scraper import (
    gsmarena_search, gsmarena_specs,
    gsmarena_opinions, reddit_opinions, ithome_opinions, translate_opinions,
    gsmarena_global_prices,
    gsmarena_by_brand, BRANDS,
    phonearena_search, phonearena_review,
)

app = FastAPI(title="KooVIS Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup():
    init_db()

# ─── 검색 ─────────────────────────────────────────────────────

@app.get("/search")
def search(q: str):
    """GSMArena + PhoneArena 검색 결과 반환"""
    gsm = gsmarena_search(q)
    try:
        pa = phonearena_search(q)
    except Exception:
        pa = []
    return {"gsmarena": gsm, "phonearena": pa}

@app.get("/brands")
def list_brands():
    return list(BRANDS.keys())

@app.get("/brands/{brand}")
def phones_by_brand(brand: str):
    results = gsmarena_by_brand(brand)
    if not results:
        raise HTTPException(404, f"브랜드를 찾을 수 없어요: {brand}")
    return results

# ─── 폰 등록 ─────────────────────────────────────────────────

class AddPhoneRequest(BaseModel):
    name: str
    gsmarena_url: str
    phonearena_url: str = ""

@app.post("/phones")
def add_phone(req: AddPhoneRequest):
    """스펙 + 리뷰 스크래핑 후 DB 저장"""
    # 중복 체크
    with get_conn() as conn:
        existing = conn.execute("SELECT id FROM phones WHERE gsmarena_url = ?", (req.gsmarena_url,)).fetchone()
    if existing:
        return {"id": existing["id"], "message": "이미 등록된 기기입니다"}

    # 스크래핑 (DB 연결 없이 먼저 수행)
    gsm_data = gsmarena_specs(req.gsmarena_url)

    BRAND_MAP = {
        "samsung": "Samsung", "apple": "Apple", "google": "Google",
        "xiaomi": "Xiaomi", "redmi": "Xiaomi", "poco": "Xiaomi",
        "oneplus": "OnePlus", "oppo": "OPPO", "realme": "Realme",
        "vivo": "Vivo", "iqoo": "Vivo",
        "sony": "Sony", "motorola": "Motorola", "nothing": "Nothing",
        "asus": "Asus", "honor": "Honor", "huawei": "Huawei",
    }
    name_lower = req.name.lower()
    brand = next((v for k, v in BRAND_MAP.items() if name_lower.startswith(k)), req.name.split()[0])
    announced = gsm_data["specs"].get("Launch", {}).get("Announced", "")
    year = announced[:4] if announced and announced[:4].isdigit() else None

    reviews = []
    try:
        reviews = gsmarena_opinions(req.gsmarena_url)
    except Exception:
        pass

    # 모든 데이터 수집 완료 후 DB에 한 번에 저장
    conn = get_conn()
    conn.execute("PRAGMA journal_mode=WAL")
    cur = conn.cursor()

    cur.execute(
        "INSERT INTO phones (name, brand, gsmarena_url, phonearena_url, image_url) VALUES (?,?,?,?,?)",
        (req.name, brand, req.gsmarena_url, req.phonearena_url, gsm_data.get("image"))
    )
    phone_id = cur.lastrowid

    for category, items in gsm_data["specs"].items():
        for key, value in items.items():
            cur.execute(
                "INSERT INTO specs (phone_id, category, key, value) VALUES (?,?,?,?)",
                (phone_id, category, key, value)
            )

    for r in reviews:
        cur.execute(
            "INSERT INTO reviews (phone_id, source, type, rating, text, reviewer, date) VALUES (?,?,?,?,?,?,?)",
            (phone_id, r["source"], r["type"], r["rating"], r["text"], r["reviewer"], r["date"])
        )

    conn.commit()
    conn.close()
    return {"id": phone_id, "message": f"{req.name} 등록 완료"}

# ─── 조회 ─────────────────────────────────────────────────────

@app.get("/phones")
def list_phones():
    conn = get_conn()
    phones = conn.execute("SELECT * FROM phones ORDER BY created_at DESC").fetchall()
    result = []
    for p in phones:
        row = dict(p)
        announced = conn.execute(
            "SELECT value FROM specs WHERE phone_id=? AND category='Launch' AND key='Announced'",
            (p["id"],)
        ).fetchone()
        row["year"] = announced["value"][:4] if announced and announced["value"][:4].isdigit() else None
        result.append(row)
    conn.close()
    return result

@app.get("/phones/{phone_id}")
def get_phone(phone_id: int):
    conn = get_conn()
    phone   = conn.execute("SELECT * FROM phones WHERE id=?", (phone_id,)).fetchone()
    if not phone:
        raise HTTPException(404, "기기를 찾을 수 없어요")
    specs   = conn.execute("SELECT * FROM specs WHERE phone_id=?", (phone_id,)).fetchall()
    reviews = conn.execute("SELECT * FROM reviews WHERE phone_id=?", (phone_id,)).fetchall()
    prices  = conn.execute("SELECT * FROM prices WHERE phone_id=?", (phone_id,)).fetchall()
    conn.close()
    return {
        "phone":   dict(phone),
        "specs":   [dict(s) for s in specs],
        "reviews": [dict(r) for r in reviews],
        "prices":  [dict(p) for p in prices],
    }

@app.get("/phones/{phone_id}/prices")
def get_prices(phone_id: int):
    """글로벌 가격 비교 (환율 적용)"""
    conn = get_conn()
    phone = conn.execute("SELECT * FROM phones WHERE id=?", (phone_id,)).fetchone()
    conn.close()
    if not phone:
        raise HTTPException(404, "기기를 찾을 수 없어요")
    return gsmarena_global_prices(phone["gsmarena_url"])

@app.delete("/phones/{phone_id}")
def delete_phone(phone_id: int):
    conn = get_conn()
    conn.execute("DELETE FROM specs   WHERE phone_id=?", (phone_id,))
    conn.execute("DELETE FROM reviews WHERE phone_id=?", (phone_id,))
    conn.execute("DELETE FROM prices  WHERE phone_id=?", (phone_id,))
    conn.execute("DELETE FROM phones  WHERE id=?",       (phone_id,))
    conn.commit()
    conn.close()
    return {"ok": True}

@app.get("/phones/{phone_id}/opinions")
def get_opinions(phone_id: int):
    """GSMArena + IT之家 + Reddit 커뮤니티 의견 실시간 수집"""
    conn = get_conn()
    phone = conn.execute("SELECT * FROM phones WHERE id=?", (phone_id,)).fetchone()
    conn.close()
    if not phone:
        raise HTTPException(404, "기기를 찾을 수 없어요")

    gsm, ithome, reddit = [], [], []
    try:
        gsm = gsmarena_opinions(phone["gsmarena_url"])
    except Exception:
        pass
    try:
        ithome = ithome_opinions(phone["name"])
    except Exception:
        pass
    try:
        reddit = reddit_opinions(phone["name"])
    except Exception:
        pass

    # 병렬 번역
    gsm    = translate_opinions(gsm)
    ithome = translate_opinions(ithome)
    reddit = translate_opinions(reddit)

    return {"gsmarena": gsm, "ithome": ithome, "reddit": reddit}

# ─── 비교 ─────────────────────────────────────────────────────

@app.get("/invest/market")
def market_data():
    """실시간 시장 데이터"""
    return get_market_data()

@app.get("/invest/briefing")
def briefing():
    """Claude AI 시황 브리핑 생성 + DB 저장"""
    try:
        market = get_market_data()
        text   = generate_briefing()

        import json
        conn = get_conn()
        conn.execute(
            "INSERT INTO briefings (content, market) VALUES (?, ?)",
            (text, json.dumps(market, ensure_ascii=False))
        )
        conn.commit()
        conn.close()

        return {"briefing": text, "market": market}
    except Exception as e:
        raise HTTPException(500, f"브리핑 생성 실패: {str(e)}")

@app.get("/invest/briefings")
def list_briefings():
    """저장된 브리핑 목록"""
    conn = get_conn()
    rows = conn.execute(
        "SELECT id, created_at, substr(content,1,100) as preview FROM briefings ORDER BY created_at DESC LIMIT 30"
    ).fetchall()
    conn.close()
    return [dict(r) for r in rows]

@app.get("/invest/briefings/{bid}")
def get_briefing(bid: int):
    """브리핑 상세"""
    conn = get_conn()
    row = conn.execute("SELECT * FROM briefings WHERE id=?", (bid,)).fetchone()
    conn.close()
    if not row:
        raise HTTPException(404, "브리핑을 찾을 수 없어요")
    return dict(row)

# ─── 포트폴리오 ────────────────────────────────────────────────

@app.get("/invest/overview/chart")
def portfolio_chart():
    """전체 포트폴리오 주간 수익률 추이"""
    conn = get_conn()
    accounts = [dict(r) for r in conn.execute("SELECT * FROM accounts").fetchall()]
    all_raw  = [dict(r) for r in conn.execute("SELECT * FROM portfolio").fetchall()]
    conn.close()
    if not all_raw:
        return []
    return get_portfolio_performance(all_raw, accounts)

@app.get("/invest/stock/search")
def stock_search(q: str, market: str = "all"):
    kr = search_kr_stock(q) if market in ("all", "kr") else []
    us = search_us_stock(q) if market in ("all", "us") else []
    return {"kr": kr, "us": us}

class AccountRequest(BaseModel):
    name: str
    cash: float = 0

@app.get("/invest/accounts")
def list_accounts():
    conn = get_conn()
    rows = conn.execute("SELECT * FROM accounts ORDER BY created_at").fetchall()
    conn.close()
    return [dict(r) for r in rows]

@app.post("/invest/accounts")
def create_account(req: AccountRequest):
    conn = get_conn()
    cur = conn.execute("INSERT INTO accounts (name, cash) VALUES (?,?)", (req.name, req.cash))
    conn.commit()
    aid = cur.lastrowid
    conn.close()
    return {"id": aid, "name": req.name, "cash": req.cash}

@app.patch("/invest/accounts/{aid}/cash")
def update_cash(aid: int, body: dict):
    """예수금 직접 설정"""
    cash = body.get("cash", 0)
    conn = get_conn()
    conn.execute("UPDATE accounts SET cash=? WHERE id=?", (cash, aid))
    conn.commit()
    conn.close()
    return {"ok": True, "cash": cash}

@app.get("/invest/overview")
def portfolio_overview():
    """전체 계좌 종합 현황"""
    conn = get_conn()
    accounts = [dict(r) for r in conn.execute("SELECT * FROM accounts").fetchall()]
    all_raw  = [dict(r) for r in conn.execute("SELECT * FROM portfolio").fetchall()]
    divs = conn.execute("SELECT account_id, SUM(amount) as total FROM dividends GROUP BY account_id").fetchall()
    div_map = {d["account_id"]: d["total"] for d in divs}
    for a in accounts:
        a["total_dividends"] = div_map.get(a["id"], 0)
    conn.close()
    if not accounts or not all_raw:
        return {"total_buy": 0, "total_cur": 0, "total_profit": 0, "total_pct": 0,
                "daily_chg": 0, "daily_pct": 0, "total_dividends": 0, "accounts": [], "holdings": []}
    all_holdings = get_valuation(all_raw)
    result = get_overview(accounts, all_holdings)
    result["total_dividends"] = sum(a.get("total_dividends", 0) for a in accounts)
    return result

@app.delete("/invest/accounts/{aid}")
def delete_account(aid: int):
    conn = get_conn()
    conn.execute("DELETE FROM portfolio WHERE account_id=?", (aid,))
    conn.execute("DELETE FROM accounts WHERE id=?", (aid,))
    conn.commit()
    conn.close()
    return {"ok": True}

class HoldingRequest(BaseModel):
    account_id: int
    ticker:     str
    name:       str
    quantity:   float
    avg_price:  float
    currency:   str = "KRW"

@app.get("/invest/portfolio/{account_id}")
def get_portfolio(account_id: int):
    conn = get_conn()
    rows = conn.execute(
        "SELECT * FROM portfolio WHERE account_id=? ORDER BY created_at",
        (account_id,)
    ).fetchall()
    conn.close()
    holdings = [dict(r) for r in rows]
    return get_valuation(holdings)

@app.post("/invest/portfolio")
def add_holding(req: HoldingRequest):
    conn = get_conn()
    existing = conn.execute(
        "SELECT id, quantity, avg_price FROM portfolio WHERE account_id=? AND ticker=?",
        (req.account_id, req.ticker)
    ).fetchone()

    # 매수 금액만큼 예수금 차감
    buy_amount = req.avg_price * req.quantity
    conn.execute(
        "UPDATE accounts SET cash = MAX(0, cash - ?) WHERE id=?",
        (buy_amount, req.account_id)
    )

    if existing:
        old_qty   = existing["quantity"]
        old_price = existing["avg_price"]
        new_qty   = old_qty + req.quantity
        new_avg   = (old_price * old_qty + req.avg_price * req.quantity) / new_qty
        conn.execute(
            "UPDATE portfolio SET quantity=?, avg_price=? WHERE id=?",
            (new_qty, round(new_avg, 4), existing["id"])
        )
        conn.commit()
        conn.close()
        return {"id": existing["id"], "merged": True, "quantity": new_qty, "avg_price": round(new_avg, 4)}
    else:
        cur = conn.execute(
            "INSERT INTO portfolio (account_id, ticker, name, quantity, avg_price, currency) VALUES (?,?,?,?,?,?)",
            (req.account_id, req.ticker, req.name, req.quantity, req.avg_price, req.currency)
        )
        conn.commit()
        hid = cur.lastrowid
        conn.close()
        return {"id": hid, "merged": False}

@app.delete("/invest/portfolio/{hid}")
def delete_holding(hid: int):
    conn = get_conn()
    conn.execute("DELETE FROM portfolio WHERE id=?", (hid,))
    conn.commit()
    conn.close()
    return {"ok": True}

@app.get("/invest/portfolio/holding/{hid}/history")
def holding_history(hid: int):
    conn = get_conn()
    row = conn.execute("SELECT * FROM portfolio WHERE id=?", (hid,)).fetchone()
    conn.close()
    if not row:
        raise HTTPException(404, "종목을 찾을 수 없어요")
    h = dict(row)
    return get_holding_history(h["ticker"], h["avg_price"], h["quantity"])

class SellRequest(BaseModel):
    quantity:   float
    sell_price: float

@app.post("/invest/portfolio/{hid}/sell")
def sell_holding(hid: int, req: SellRequest):
    """매도 — 수량 감소 + 예수금 환입 + 매도 이력 저장"""
    conn = get_conn()
    row = conn.execute("SELECT * FROM portfolio WHERE id=?", (hid,)).fetchone()
    if not row:
        raise HTTPException(404, "종목을 찾을 수 없어요")
    h = dict(row)

    if req.quantity > h["quantity"]:
        raise HTTPException(400, "매도 수량이 보유 수량을 초과해요")

    profit     = (req.sell_price - h["avg_price"]) * req.quantity
    sell_value = req.sell_price * req.quantity
    new_qty    = h["quantity"] - req.quantity

    # 매도 이력 저장
    conn.execute(
        "INSERT INTO sell_history (account_id,ticker,name,quantity,sell_price,avg_price,profit,currency) VALUES (?,?,?,?,?,?,?,?)",
        (h["account_id"], h["ticker"], h["name"], req.quantity, req.sell_price, h["avg_price"], round(profit,2), h["currency"])
    )
    # 예수금 환입
    conn.execute("UPDATE accounts SET cash = cash + ? WHERE id=?", (sell_value, h["account_id"]))

    if new_qty <= 0:
        conn.execute("DELETE FROM portfolio WHERE id=?", (hid,))
    else:
        conn.execute("UPDATE portfolio SET quantity=? WHERE id=?", (new_qty, hid))

    conn.commit()
    conn.close()
    return {"ok": True, "profit": round(profit, 2), "remaining": new_qty}

class DividendRequest(BaseModel):
    account_id: int
    ticker:     str
    name:       str
    amount:     float

@app.post("/invest/dividends")
def add_dividend(req: DividendRequest):
    """배당 기록 + 예수금 환입"""
    conn = get_conn()
    conn.execute(
        "INSERT INTO dividends (account_id, ticker, name, amount) VALUES (?,?,?,?)",
        (req.account_id, req.ticker, req.name, req.amount)
    )
    conn.execute("UPDATE accounts SET cash = cash + ? WHERE id=?", (req.amount, req.account_id))
    conn.commit()
    conn.close()
    return {"ok": True}

@app.get("/invest/dividends/{account_id}")
def get_dividends(account_id: int):
    """계좌별 배당 이력"""
    conn = get_conn()
    rows = conn.execute(
        "SELECT * FROM dividends WHERE account_id=? ORDER BY received_at DESC",
        (account_id,)
    ).fetchall()
    conn.close()
    return [dict(r) for r in rows]

@app.get("/invest/sell_history/{account_id}")
def get_sell_history(account_id: int):
    """계좌별 매도 이력"""
    conn = get_conn()
    rows = conn.execute(
        "SELECT * FROM sell_history WHERE account_id=? ORDER BY sold_at DESC",
        (account_id,)
    ).fetchall()
    conn.close()
    return [dict(r) for r in rows]

class LottoDrawRequest(BaseModel):
    round:   int
    date:    str
    n1: int; n2: int; n3: int; n4: int; n5: int; n6: int
    bonus:   int
    winners: Optional[int] = None
    prize:   Optional[int] = None

@app.get("/lotto/draws")
def lotto_draws(limit: int = 20):
    conn = get_conn()
    rows = conn.execute(
        "SELECT * FROM lotto_draws ORDER BY round DESC LIMIT ?", (limit,)
    ).fetchall()
    conn.close()
    return [dict(r) for r in rows]

@app.post("/lotto/draws")
def lotto_add_draw(req: LottoDrawRequest):
    conn = get_conn()
    try:
        conn.execute(
            "INSERT OR REPLACE INTO lotto_draws (round,date,n1,n2,n3,n4,n5,n6,bonus,winners,prize) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
            (req.round,req.date,req.n1,req.n2,req.n3,req.n4,req.n5,req.n6,req.bonus,req.winners,req.prize)
        )
        conn.commit()
    finally:
        conn.close()
    return {"ok": True}

@app.delete("/lotto/draws/{round_no}")
def lotto_delete_draw(round_no: int):
    conn = get_conn()
    conn.execute("DELETE FROM lotto_draws WHERE round=?", (round_no,))
    conn.commit()
    conn.close()
    return {"ok": True}

@app.get("/lotto/recommend")
def lotto_recommend(logic_id: int = 6, num_sets: int = 5):
    history = _lotto_history_from_db()
    recommender = LottoRecommender(historical_draws=history)
    result = recommender.recommend(logic_id=logic_id, num_sets=num_sets)
    return result.to_dict()

@app.get("/lotto/import-history")
def lotto_import_history():
    """GitHub CSV에서 과거 전체 이력 import (중복 무시)"""
    import requests as _req, io, csv
    from datetime import date as _date, timedelta

    url = "https://raw.githubusercontent.com/ioahKwon/Korean-Lottery-games-Analysis/master/data/lotto.csv"
    try:
        r = _req.get(url, timeout=15)
        r.raise_for_status()
    except Exception as e:
        raise HTTPException(500, f"CSV 다운로드 실패: {e}")

    origin = _date(2002, 12, 7)
    rows = [line.strip() for line in r.text.strip().splitlines() if line.strip()]

    conn = get_conn()
    imported = 0
    skipped = 0
    for i, row in enumerate(rows):
        nums = [int(x) for x in row.lstrip('﻿').split(',')]
        if len(nums) != 7:
            continue
        n1,n2,n3,n4,n5,n6,bonus = nums
        round_no = i + 1
        draw_date = str(origin + timedelta(weeks=i))
        try:
            conn.execute(
                "INSERT OR IGNORE INTO lotto_draws (round,date,n1,n2,n3,n4,n5,n6,bonus) VALUES (?,?,?,?,?,?,?,?,?)",
                (round_no, draw_date, n1, n2, n3, n4, n5, n6, bonus)
            )
            if conn.execute("SELECT changes()").fetchone()[0]:
                imported += 1
            else:
                skipped += 1
        except Exception:
            skipped += 1
    conn.commit()
    conn.close()
    return {"imported": imported, "skipped": skipped, "total": len(rows)}

@app.get("/lotto/logics")
def lotto_logics():
    return LottoRecommender.list_logics()

@app.get("/rss")
def rss_proxy(url: str):
    """RSS 피드 서버사이드 프록시 (CORS 우회)"""
    import requests as req_lib
    from fastapi.responses import Response
    try:
        headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36"}
        r = req_lib.get(url, headers=headers, timeout=8)
        return Response(content=r.content, media_type="application/xml")
    except Exception as e:
        raise HTTPException(500, f"RSS 가져오기 실패: {str(e)}")

@app.get("/compare")
def compare(ids: str):
    """ids=1,2,3 형태로 전달"""
    id_list = [int(i) for i in ids.split(",")]
    conn = get_conn()
    result = []
    for pid in id_list:
        phone = conn.execute("SELECT * FROM phones WHERE id=?", (pid,)).fetchone()
        if not phone:
            continue
        specs = conn.execute("SELECT * FROM specs WHERE phone_id=?", (pid,)).fetchall()
        result.append({"phone": dict(phone), "specs": [dict(s) for s in specs]})
    conn.close()
    return result

# ─── 세그먼트 ───────────────────────────────────────────────────

class SegmentRequest(BaseModel):
    segment: str  # "flagship" | "midrange" | "budget"

@app.patch("/phones/{phone_id}/segment")
def update_segment(phone_id: int, req: SegmentRequest):
    if req.segment not in ("flagship", "midrange", "budget"):
        raise HTTPException(400, "segment는 flagship/midrange/budget 중 하나")
    conn = get_conn()
    conn.execute("UPDATE phones SET segment=? WHERE id=?", (req.segment, phone_id))
    conn.commit()
    conn.close()
    return {"ok": True}

# ─── 트렌드 분석 ────────────────────────────────────────────────

class TrendRequest(BaseModel):
    ids: list[int]

@app.post("/trend/analyze")
def trend_analyze(req: TrendRequest):
    if not req.ids:
        raise HTTPException(400, "ids가 비어 있음")
    phones = aggregate_phones(req.ids)
    if not phones:
        raise HTTPException(404, "선택한 폰을 찾을 수 없음")
    insights = generate_trend_insights(phones)
    import json
    conn = get_conn()
    conn.execute(
        "INSERT INTO trend_analyses (phones_json, insights) VALUES (?, ?)",
        (json.dumps(phones, ensure_ascii=False), insights)
    )
    conn.commit()
    conn.close()
    return {"phones": phones, "insights": insights}

@app.get("/trend/analyses")
def list_trend_analyses():
    import json
    conn = get_conn()
    rows = conn.execute(
        "SELECT id, phones_json, insights, created_at FROM trend_analyses ORDER BY created_at DESC LIMIT 20"
    ).fetchall()
    conn.close()
    return [
        {
            "id": r["id"],
            "phones": json.loads(r["phones_json"]),
            "insights": r["insights"],
            "created_at": r["created_at"]
        }
        for r in rows
    ]
