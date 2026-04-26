import yfinance as yf
import requests
from concurrent.futures import ThreadPoolExecutor

# 한국 + 미국 통합 검색 (Yahoo Finance)
def search_kr_stock(query: str) -> list[dict]:
    """한국 주식 검색 — KS/KQ 티커 필터링"""
    try:
        url = f"https://query2.finance.yahoo.com/v1/finance/search?q={requests.utils.quote(query)}&lang=ko-KR&region=KR&quotesCount=15&newsCount=0"
        res = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=5)
        data = res.json()
        results = []
        for q in data.get("quotes", []):
            ticker = q.get("symbol", "")
            if ticker.endswith(".KS") or ticker.endswith(".KQ"):
                results.append({
                    "ticker": ticker,
                    "name":   q.get("shortname") or q.get("longname", ticker),
                    "market": "KR",
                    "currency": "KRW",
                })
        return results[:10]
    except Exception:
        return []

# 미국 주식 검색 (Yahoo Finance)
def search_us_stock(query: str) -> list[dict]:
    try:
        url = f"https://query2.finance.yahoo.com/v1/finance/search?q={requests.utils.quote(query)}&lang=en-US&region=US&quotesCount=10&newsCount=0"
        res = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=5)
        data = res.json()
        results = []
        for q in data.get("quotes", []):
            if q.get("quoteType") in ("EQUITY", "ETF"):
                results.append({
                    "ticker": q.get("symbol", ""),
                    "name":   q.get("shortname") or q.get("longname", ""),
                    "market": "US",
                })
        return results[:10]
    except Exception:
        return []

def get_current_price(ticker: str, currency: str) -> dict:
    """yfinance로 현재가 + 전일가 조회"""
    try:
        t = yf.Ticker(ticker)
        hist = t.history(period="2d")
        if hist.empty:
            return {"price": None, "prev_price": None, "error": "가격 조회 실패"}
        price = round(float(hist["Close"].iloc[-1]), 4)
        prev  = round(float(hist["Close"].iloc[-2]), 4) if len(hist) >= 2 else price
        return {"price": price, "prev_price": prev, "currency": currency}
    except Exception as e:
        return {"price": None, "prev_price": None, "error": str(e)}

def get_valuation(holdings: list[dict]) -> list[dict]:
    """보유 종목 현재가 + 수익률 + 일간변화 계산 (병렬)"""
    def fetch_one(h):
        price_data = get_current_price(h["ticker"], h["currency"])
        cur_price  = price_data.get("price")
        prev_price = price_data.get("prev_price")
        if cur_price:
            profit     = (cur_price - h["avg_price"]) * h["quantity"]
            profit_pct = round((cur_price - h["avg_price"]) / h["avg_price"] * 100, 2)
            cur_value  = round(cur_price * h["quantity"], 2)
            buy_value  = round(h["avg_price"] * h["quantity"], 2)
            daily_chg  = round((cur_price - prev_price) * h["quantity"], 2) if prev_price else 0
            daily_pct  = round((cur_price - prev_price) / prev_price * 100, 2) if prev_price else 0
        else:
            profit = profit_pct = cur_value = buy_value = daily_chg = daily_pct = None
        return {
            **h,
            "cur_price":  cur_price,
            "cur_value":  cur_value,
            "buy_value":  buy_value,
            "profit":     round(profit, 2) if profit is not None else None,
            "profit_pct": profit_pct,
            "daily_chg":  daily_chg,
            "daily_pct":  daily_pct,
        }

    with ThreadPoolExecutor(max_workers=8) as ex:
        return list(ex.map(fetch_one, holdings))

def get_overview(accounts: list[dict], all_holdings: list[dict]) -> dict:
    """전체 계좌 종합 현황"""
    total_cash  = sum(a.get("cash", 0) for a in accounts)
    total_buy   = sum(h["buy_value"]  or 0 for h in all_holdings) + total_cash
    total_cur   = sum(h["cur_value"]  or 0 for h in all_holdings) + total_cash
    total_daily = sum(h["daily_chg"] or 0 for h in all_holdings)
    total_profit = round(total_cur - total_buy, 2)
    total_pct   = round(total_profit / total_buy * 100, 2) if total_buy else 0
    daily_pct   = round(total_daily / (total_cur - total_daily) * 100, 2) if (total_cur - total_daily) else 0

    # 계좌별 요약 (예수금 포함)
    acct_map = {a["id"]: {"id": a["id"], "name": a["name"], "cash": a.get("cash", 0), "buy": 0, "cur": 0} for a in accounts}
    for h in all_holdings:
        aid = h.get("account_id")
        if aid in acct_map:
            acct_map[aid]["buy"] += h["buy_value"] or 0
            acct_map[aid]["cur"] += h["cur_value"] or 0
    acct_summary = []
    for a in acct_map.values():
        pct = round((a["cur"] - a["buy"]) / a["buy"] * 100, 2) if a["buy"] else 0
        total_assets = a["cur"] + a["cash"]
        acct_summary.append({**a, "profit_pct": pct, "profit": round(a["cur"] - a["buy"], 2), "total_assets": round(total_assets, 2)})

    # 수익률 순 정렬
    sorted_holdings = sorted(
        [h for h in all_holdings if h["profit_pct"] is not None],
        key=lambda x: x["profit_pct"], reverse=True
    )

    return {
        "total_buy":    round(total_buy, 2),
        "total_cur":    round(total_cur, 2),
        "total_profit": total_profit,
        "total_pct":    total_pct,
        "daily_chg":    round(total_daily, 2),
        "daily_pct":    daily_pct,
        "accounts":     acct_summary,
        "holdings":     sorted_holdings,
    }

def get_holding_history(ticker: str, avg_price: float, quantity: float) -> dict:
    """일간/월간 주가 변화 + 보유 수익률 히스토리"""
    try:
        t    = yf.Ticker(ticker)
        hist = t.history(period="1mo")
        if hist.empty:
            return {"error": "데이터 없음"}

        prices = hist["Close"].round(2)
        dates  = [str(d.date()) for d in hist.index]

        cur    = float(prices.iloc[-1])
        prev1  = float(prices.iloc[-2])  if len(prices) >= 2  else cur
        prev5  = float(prices.iloc[-6])  if len(prices) >= 6  else cur
        prev20 = float(prices.iloc[0])

        def pct(a, b): return round((a - b) / b * 100, 2) if b else 0
        def val_pct(p): return round((p - avg_price) / avg_price * 100, 2) if avg_price else 0

        return {
            "ticker":    ticker,
            "cur_price": cur,
            "daily":   {"price_chg": round(cur-prev1,2),  "price_pct": pct(cur,prev1),  "return_pct": val_pct(cur)},
            "weekly":  {"price_chg": round(cur-prev5,2),  "price_pct": pct(cur,prev5),  "return_pct": val_pct(cur)},
            "monthly": {"price_chg": round(cur-prev20,2), "price_pct": pct(cur,prev20), "return_pct": val_pct(cur)},
            "chart": {
                "dates":  dates,
                "prices": [float(p) for p in prices],
                "values": [round(float(p) * quantity, 0) for p in prices],
            },
            "avg_price": avg_price,
            "quantity":  quantity,
        }
    except Exception as e:
        return {"error": str(e)}
