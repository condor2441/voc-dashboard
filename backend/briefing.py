import os
import yfinance as yf
import requests
import time
from bs4 import BeautifulSoup
from dotenv import load_dotenv
import anthropic
from datetime import datetime
from concurrent.futures import ThreadPoolExecutor

load_dotenv()

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

# ── 시장 데이터 캐시 (3분 TTL) ───────────────────────────────
_market_cache = {"data": None, "ts": 0}
_MARKET_TTL = 180

# ── 시장 데이터 수집 ─────────────────────────────────────────

def get_market_data() -> dict:
    now = time.time()
    if _market_cache["data"] and now - _market_cache["ts"] < _MARKET_TTL:
        return _market_cache["data"]

    tickers = {
        "KOSPI":   "^KS11",
        "KOSDAQ":  "^KQ11",
        "S&P500":  "^GSPC",
        "NASDAQ":  "^IXIC",
        "USD/KRW": "USDKRW=X",
        "삼성전자": "005930.KS",
    }

    def fetch_one(item):
        name, ticker = item
        try:
            t = yf.Ticker(ticker)
            hist = t.history(period="2d", timeout=8)
            if len(hist) >= 2:
                prev  = hist["Close"].iloc[-2]
                cur   = hist["Close"].iloc[-1]
                chg   = round(cur - prev, 2)
                chg_p = round((chg / prev) * 100, 2)
                return name, {"price": round(cur,2), "change": chg, "pct": chg_p,
                              "arrow": "▲" if chg >= 0 else "▼"}
        except Exception:
            pass
        return name, None

    result = {}
    with ThreadPoolExecutor(max_workers=4) as ex:
        for name, data in ex.map(fetch_one, tickers.items()):
            if data:
                result[name] = data

    _market_cache["data"] = result
    _market_cache["ts"]   = now
    return result

def get_finance_news() -> list[str]:
    feeds = [
        "https://www.hankyung.com/feed/finance",
        "https://feeds.reuters.com/reuters/businessNews",
    ]
    headlines = []
    headers = {"User-Agent": "Mozilla/5.0"}
    for url in feeds:
        try:
            res = requests.get(url, headers=headers, timeout=5)
            soup = BeautifulSoup(res.text, "xml")
            for item in soup.select("item")[:5]:
                title = item.find("title")
                if title:
                    headlines.append(title.get_text(strip=True))
        except Exception:
            pass
    return headlines[:10]

# ── Claude API 브리핑 생성 ───────────────────────────────────

def generate_briefing() -> str:
    market = get_market_data()
    news   = get_finance_news()

    # 시장 데이터 텍스트 정리
    market_text = "\n".join([
        f"{name}: {d['price']:,} ({d['arrow']} {abs(d['pct'])}%)"
        for name, d in market.items()
    ])

    news_text = "\n".join([f"- {h}" for h in news]) if news else "뉴스 없음"

    now = datetime.now().strftime("%Y년 %m월 %d일 %H:%M")

    prompt = f"""당신은 전문 투자 애널리스트입니다. 아래 실시간 시장 데이터와 주요 뉴스를 바탕으로 간결하고 통찰력 있는 시황 브리핑을 작성해주세요.

[기준 시각]
{now}

[시장 데이터]
{market_text}

[주요 뉴스 헤드라인]
{news_text}

다음 형식으로 작성하세요:
1. **오늘의 시장 요약** (2-3문장)
2. **주요 이슈 및 원인 분석** (핵심 2-3가지)
3. **투자자 관점 시사점** (주목할 포인트 2-3가지)
4. **이번 주 체크포인트** (1-2가지)

간결하고 실용적으로 작성해주세요."""

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1024,
        system="당신은 한국 시장에 정통한 투자 전문가입니다. 한국어로 답변하세요.",
        messages=[{"role": "user", "content": prompt}]
    )

    return response.content[0].text
