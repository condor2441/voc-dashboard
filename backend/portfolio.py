import yfinance as yf
import requests
import time
from concurrent.futures import ThreadPoolExecutor

# ── 가격 캐시 (5분 TTL) ──────────────────────────────────
_price_cache: dict = {}
_CACHE_TTL = 300  # 5분

def _cached_price(ticker: str, currency: str) -> dict:
    now = time.time()
    if ticker in _price_cache:
        cached, ts = _price_cache[ticker]
        if now - ts < _CACHE_TTL:
            return cached
    result = _fetch_price(ticker, currency)
    _price_cache[ticker] = (result, now)
    return result

def _fetch_price(ticker: str, currency: str) -> dict:
    try:
        t = yf.Ticker(ticker)
        hist = t.history(period="2d", timeout=8)
        if hist.empty:
            return {"price": None, "prev_price": None}
        price = round(float(hist["Close"].iloc[-1]), 4)
        prev  = round(float(hist["Close"].iloc[-2]), 4) if len(hist) >= 2 else price
        return {"price": price, "prev_price": prev, "currency": currency}
    except Exception:
        return {"price": None, "prev_price": None}

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
    """캐시 적용 현재가 조회 (5분 TTL)"""
    return _cached_price(ticker, currency)

def get_valuation(holdings: list[dict]) -> list[dict]:
    """보유 종목 현재가 + 수익률 + 일간변화 계산 (병렬, 캐시)"""
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

    with ThreadPoolExecutor(max_workers=4) as ex:
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
    acct_map = {a["id"]: {"id": a["id"], "name": a["name"], "cash": a.get("cash", 0), "buy": 0, "cur": 0, "daily": 0} for a in accounts}
    for h in all_holdings:
        aid = h.get("account_id")
        if aid in acct_map:
            acct_map[aid]["buy"] += h["buy_value"] or 0
            acct_map[aid]["cur"] += h["cur_value"] or 0
            acct_map[aid]["daily"] += h["daily_chg"] or 0
    acct_summary = []
    for a in acct_map.values():
        pct = round((a["cur"] - a["buy"]) / a["buy"] * 100, 2) if a["buy"] else 0
        total_assets = a["cur"] + a["cash"]
        acct_summary.append({**a, "profit_pct": pct, "profit": round(a["cur"] - a["buy"], 2), "total_assets": round(total_assets, 2), "daily_chg": round(a["daily"], 2)})

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

_perf_cache: dict = {'data': None, 'ts': 0}
_PERF_TTL = 300

def get_portfolio_performance(all_raw: list[dict], accounts: list[dict]) -> list[dict]:
    """전체 포트폴리오 주간 수익률 추이 (5거래일, 5분 캐시)"""
    global _perf_cache
    now = time.time()
    if _perf_cache['data'] and now - _perf_cache['ts'] < _PERF_TTL:
        return _perf_cache['data']

    if not all_raw:
        return []

    total_cash = sum(a.get('cash', 0) for a in accounts)
    base = sum(h['avg_price'] * h['quantity'] for h in all_raw) + total_cash
    tickers = list(set(h['ticker'] for h in all_raw))

    def fetch_hist(ticker):
        try:
            hist = yf.Ticker(ticker).history(period="7d", timeout=8)
            return ticker, hist["Close"] if not hist.empty else None
        except Exception:
            return ticker, None

    with ThreadPoolExecutor(max_workers=4) as ex:
        results = list(ex.map(fetch_hist, tickers))
    hists = {t: h for t, h in results if h is not None}

    if not hists:
        return []

    date_sets = [set(v.index.date) for v in hists.values()]
    common = sorted(date_sets[0].intersection(*date_sets[1:]) if len(date_sets) > 1 else date_sets[0])[-5:]

    out = []
    for date in common:
        total_val = total_cash
        for h in all_raw:
            tk = h['ticker']
            if tk not in hists:
                total_val += h['avg_price'] * h['quantity']
                continue
            matching = [float(v) for k, v in hists[tk].items() if k.date() == date]
            price = matching[-1] if matching else h['avg_price']
            total_val += h['quantity'] * price
        pct = round((total_val - base) / base * 100, 2) if base else 0
        out.append({'date': str(date), 'value': round(total_val), 'pct': pct})

    _perf_cache = {'data': out, 'ts': now}
    return out

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
