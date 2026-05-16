import requests
from bs4 import BeautifulSoup
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/124.0.0.0 Safari/537.36"
}

def get(url):
    time.sleep(1)
    res = requests.get(url, headers=HEADERS, timeout=10)
    res.raise_for_status()
    return BeautifulSoup(res.text, "html.parser")

def translate_to_ko(text: str) -> str:
    """구글 번역 비공식 API로 한국어 번역"""
    if not text or not text.strip():
        return ""
    try:
        url = "https://translate.googleapis.com/translate_a/single"
        params = {"client": "gtx", "sl": "auto", "tl": "ko", "dt": "t", "q": text[:500]}
        res = requests.get(url, params=params, timeout=5)
        data = res.json()
        return "".join(part[0] for part in data[0] if part[0])
    except Exception:
        return ""

def translate_opinions(opinions: list[dict]) -> list[dict]:
    """의견 목록 병렬 번역"""
    def translate_one(op):
        op["text_ko"] = translate_to_ko(op["text"])
        return op
    with ThreadPoolExecutor(max_workers=5) as ex:
        results = list(ex.map(translate_one, opinions))
    return results

# ─── GSMArena ────────────────────────────────────────────────

BRANDS = {
    "samsung": "samsung-phones-9.php",
    "galaxy":  "samsung-phones-9.php",
    "apple":   "apple-phones-48.php",
    "iphone":  "apple-phones-48.php",
    "ipad":    "apple-phones-48.php",
    "google":  "google-phones-107.php",
    "pixel":   "google-phones-107.php",
    "xiaomi":  "xiaomi-phones-80.php",
    "redmi":   "xiaomi-phones-80.php",
    "poco":    "xiaomi-phones-80.php",
    "oneplus": "oneplus-phones-95.php",
    "oppo":    "oppo-phones-82.php",
    "vivo":    "vivo-phones-98.php",
    "iqoo":    "vivo-phones-98.php",
    "realme":  "realme-phones-118.php",
    "honor":   "honor-phones-121.php",
    "huawei":  "huawei-phones-58.php",
}

# 별칭 → 실제 브랜드 키 매핑
BRAND_ALIAS = {
    "galaxy": "samsung", "iphone": "apple", "ipad": "apple", "pixel": "google",
    "redmi": "xiaomi", "poco": "xiaomi",
}

BRAND_DISPLAY = {
    "samsung": "Samsung", "apple": "Apple", "google": "Google",
    "xiaomi": "Xiaomi", "redmi": "Xiaomi", "poco": "Xiaomi",
    "oneplus": "OnePlus", "oppo": "OPPO", "vivo": "Vivo",
    "iqoo": "iQOO", "realme": "Realme", "honor": "Honor",
    "huawei": "Huawei",
}

def _normalize(text: str) -> str:
    """검색어 정규화: 특수문자를 텍스트로 변환"""
    return (text.lower()
            .replace("+", " plus ")
            .replace("ultra", " ultra ")
            .replace("  ", " ")
            .strip())

def _parse_items(items, keywords, brand_key=None, limit=10):
    """makers li 목록에서 키워드 일치 항목 파싱"""
    results = []
    for item in items:
        a = item.find("a")
        if not a:
            continue
        img = a.find("img")
        span = item.find("span")
        href = a.get("href", "")
        # href에서 숫자 ID 제거 (예: oneplus_13-13610.php → oneplus_13)
        href_slug = href.rsplit("-", 1)[0].replace("_", " ")
        span_text = span.get_text(strip=True) if span else ""
        img_title = (img.get("title", "") if img else "").split(".")[0]
        match_text = _normalize(href_slug + " " + span_text + " " + img_title)
        if not all(kw in match_text for kw in keywords):
            continue
        # 이름 조립: 브랜드 + span 텍스트
        short_name = " ".join(span_text.split()) or img_title.strip()
        prefix = BRAND_DISPLAY.get(brand_key, "") if brand_key else ""
        if prefix and not short_name.lower().startswith(prefix.lower()):
            short_name = prefix + " " + short_name
        results.append({
            "name":  short_name,
            "url":   "https://www.gsmarena.com/" + href,
            "image": img["src"] if img else "",
        })
        if len(results) >= limit:
            break
    return results

def gsmarena_search(query: str) -> list[dict]:
    """모델명 검색 — 브랜드 감지 시 해당 브랜드 페이지에서 필터링"""
    keywords = [kw for kw in _normalize(query).split() if kw]

    # 브랜드 감지
    for brand_key, brand_path in BRANDS.items():
        if brand_key not in keywords:
            continue

        display_key = BRAND_ALIAS.get(brand_key, brand_key)
        base = brand_path.replace(".php", "")
        brand_id = base.split("-")[-1]
        brand_slug = "-".join(base.split("-")[:-1])

        brand_only = (len(keywords) == 1)  # 브랜드명만 입력 vs 모델명 포함

        if brand_only:
            # 브랜드 전체 탐색 → 최대 30개 수집
            results = []
            for page in range(1, 5):
                page_url = f"https://www.gsmarena.com/{brand_path}" if page == 1 \
                           else f"https://www.gsmarena.com/{brand_slug}-f-{brand_id}-0-p{page}.php"
                soup = get(page_url)
                items = soup.select(".makers li")
                if not items:
                    break
                results += _parse_items(items, keywords, display_key, limit=30)
                if len(results) >= 30:
                    break
            return results[:30]
        else:
            # 특정 모델 검색 → 일치하는 페이지에서 즉시 반환
            for page in range(1, 5):
                page_url = f"https://www.gsmarena.com/{brand_path}" if page == 1 \
                           else f"https://www.gsmarena.com/{brand_slug}-f-{brand_id}-0-p{page}.php"
                soup = get(page_url)
                items = soup.select(".makers li")
                if not items:
                    break
                results = _parse_items(items, keywords, display_key, limit=10)
                if results:
                    return results
        break

    # 브랜드 미감지 → 일반 검색 페이지
    soup = get(f"https://www.gsmarena.com/results.php3?sQuickSearch={requests.utils.quote(query)}")
    return _parse_items(soup.select(".makers li"), keywords)

def gsmarena_by_brand(brand: str) -> list[dict]:
    """브랜드별 최신 폰 목록"""
    path = BRANDS.get(brand.lower())
    if not path:
        return []
    soup = get(f"https://www.gsmarena.com/{path}")
    results = []
    for item in soup.select(".makers li")[:20]:
        a = item.find("a")
        if not a:
            continue
        img = a.find("img")
        span = a.find("span")
        results.append({
            "name":  span.get_text(strip=True) if span else (img["title"].split(".")[0] if img and img.get("title") else ""),
            "url":   "https://www.gsmarena.com/" + a["href"],
            "image": img["src"] if img else "",
        })
    return [r for r in results if r["name"]]

def gsmarena_specs(phone_url: str) -> dict:
    """스펙 페이지 스크래핑"""
    soup = get(phone_url)
    specs = {}

    current_category = "기타"
    for row in soup.select("#specs-list tr"):
        th     = row.find("th")
        key_el = row.find("td", class_="ttl")
        val_el = row.find("td", class_="nfo")

        if th:
            current_category = th.get_text(strip=True)
            specs.setdefault(current_category, {})
        if key_el and val_el:
            key = key_el.get_text(strip=True)
            val = val_el.get_text(" ", strip=True)
            if key:
                specs.setdefault(current_category, {})[key] = val

    # 가격
    price_el = soup.select_one(".price-item span")
    price = price_el.get_text(strip=True) if price_el else None

    # 이미지
    img_el = soup.select_one(".specs-photo-main img")
    image = img_el["src"] if img_el else None

    return {"specs": specs, "price": price, "image": image}

def gsmarena_global_prices(phone_url: str) -> dict:
    """GSMArena 스펙 페이지에서 현지 출시가격 파싱"""
    import re
    soup = get(phone_url)

    # 스펙 테이블에서 Price 행 찾기
    price_text = ""
    for row in soup.select("#specs-list tr"):
        key_el = row.find("td", class_="ttl")
        val_el = row.find("td", class_="nfo")
        if key_el and val_el and "price" in key_el.get_text(strip=True).lower():
            price_text = val_el.get_text(" ", strip=True)
            break

    if not price_text:
        return {"error": "가격 정보 없음", "raw": ""}

    # 통화별 파싱
    patterns = {
        ("미국",  "USD", "$"):  r"\$\s*([\d,]+\.?\d*)",
        ("유럽",  "EUR", "€"):  r"€\s*([\d,]+\.?\d*)",
        ("영국",  "GBP", "£"):  r"£\s*([\d,]+\.?\d*)",
        ("인도",  "INR", "₹"):  r"₹\s*([\d,]+\.?\d*)",
        ("중국",  "CNY", "¥"):  r"CN¥\s*([\d,]+\.?\d*)",
    }

    # USD 환율 가져오기
    try:
        er_res = requests.get("https://open.er-api.com/v6/latest/USD", timeout=5)
        rates = er_res.json()["rates"]
    except Exception:
        rates = {"EUR": 0.92, "GBP": 0.79, "INR": 83, "CNY": 7.2}

    result = []
    for (region, currency, symbol), pattern in patterns.items():
        m = re.search(pattern, price_text)
        if not m:
            continue
        val = float(m.group(1).replace(",", ""))
        if currency == "USD":
            usd = val
        else:
            usd = round(val / rates.get(currency, 1), 0)
        result.append({
            "region":    region,
            "currency":  currency,
            "symbol":    symbol,
            "price":     val,
            "price_str": f"{symbol}{val:,.0f}",
            "usd":       usd,
            "usd_str":   f"${usd:,.0f}" if currency != "USD" else "",
        })

    return {"prices": result, "raw": price_text}

def gsmarena_opinions(phone_url: str) -> list[dict]:
    """GSMArena 유저 의견 스크래핑 (opinions 페이지)"""
    import re
    opinion_url = re.sub(r'-(\d+)\.php$', r'-opinions-\1.php', phone_url)
    soup = get(opinion_url)
    opinions = []
    for thread in soup.select(".user-thread")[:15]:
        user_el = thread.select_one(".uname b, .uname2")
        date_el = thread.select_one(".upost time")
        text_el = thread.select_one(".uopin")
        if not text_el:
            continue
        opinions.append({
            "source":   "gsmarena",
            "type":     "community",
            "rating":   None,
            "text":     text_el.get_text(strip=True),
            "reviewer": user_el.get_text(strip=True) if user_el else "익명",
            "date":     date_el.get_text(strip=True) if date_el else "",
            "url":      opinion_url,
        })
    return opinions

def reddit_opinions(phone_name: str) -> list[dict]:
    """Reddit 커뮤니티 의견 수집 (공개 JSON 엔드포인트)"""
    import json
    q = requests.utils.quote(f"{phone_name} review")
    url = f"https://www.reddit.com/search.json?q={q}&sort=relevance&limit=8&type=link"
    res = requests.get(url, headers=HEADERS, timeout=10)
    data = res.json()
    opinions = []
    for post in data.get("data", {}).get("children", []):
        p = post["data"]
        if p.get("score", 0) < 10:
            continue
        opinions.append({
            "source":   "reddit",
            "type":     "community",
            "rating":   None,
            "text":     p["title"],
            "reviewer": f"r/{p['subreddit']}",
            "date":     "",
            "url":      f"https://reddit.com{p['permalink']}",
            "score":    p["score"],
        })
    return opinions

# ─── PhoneArena ──────────────────────────────────────────────

def phonearena_search(query: str) -> list[dict]:
    """모델명으로 검색"""
    url = f"https://www.phonearena.com/phones/search?search={requests.utils.quote(query)}"
    soup = get(url)
    results = []
    for item in soup.select(".widget_listItem")[:10]:
        a   = item.select_one("a.widget_title")
        img = item.select_one("img")
        if not a:
            continue
        results.append({
            "name":  a.get_text(strip=True),
            "url":   "https://www.phonearena.com" + a["href"],
            "image": img["src"] if img else "",
        })
    return results

def phonearena_review(phone_url: str) -> dict:
    """전문가 리뷰 요약 스크래핑"""
    soup = get(phone_url)

    score_el   = soup.select_one(".scoreWrapper .scoreNum")
    summary_el = soup.select_one(".verdict p, .review-summary p")

    return {
        "source":  "phonearena",
        "type":    "expert",
        "rating":  float(score_el.get_text(strip=True)) if score_el else None,
        "text":    summary_el.get_text(strip=True) if summary_el else "",
        "reviewer": "PhoneArena",
        "date":    "",
    }
