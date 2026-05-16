"""
NotebookCheck 스마트폰 리뷰 스크래퍼
- collect_review_list(): 목록 수집 (Smartphone + Tests 필터)
- scrape_review_detail(): 개별 리뷰 세부 데이터
"""
import re
import asyncio
from playwright.async_api import async_playwright
from playwright_stealth import Stealth

NBC_LIST_URL = "https://www.notebookcheck.net/Reviews.55.0.html"

# ── 목록 수집 ──────────────────────────────────────────────
async def collect_review_list(pages: int = 2) -> list[dict]:
    """Smartphone + Tests 필터 적용 후 리뷰 목록 수집"""
    results = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
            viewport={"width": 1280, "height": 800},
            locale="en-US",
        )
        page = await context.new_page()
        await Stealth().apply_stealth_async(page)

        for pg in range(1, pages + 1):
            url = NBC_LIST_URL if pg == 1 else f"{NBC_LIST_URL}?p={pg}"
            await page.goto(url, timeout=40000, wait_until="domcontentloaded")
            await page.wait_for_timeout(2500)

            # Smartphone + Tests 필터 클릭 (첫 페이지에서만)
            if pg == 1:
                await _apply_filters(page)
                await page.wait_for_timeout(1500)

            items = await page.evaluate("""() => {
                const results = [];
                // NBC 리뷰 목록은 테이블 행 또는 article 단위
                const anchors = Array.from(document.querySelectorAll('a[href]'))
                    .filter(a => /\\.\\d{6,}\\.0\\.html$/.test(a.href)
                             && a.innerText.trim().length > 15
                             && !a.href.includes('Reviews.55'));

                for (const a of anchors) {
                    const title = a.innerText.trim();
                    const url   = a.href;

                    // 이미지: a 태그 내부 img 우선 → 부모에서 가장 가까운 img
                    let thumbnail = null;
                    const imgInLink = a.querySelector('img');
                    if (imgInLink && imgInLink.src && imgInLink.src.includes('notebookcheck')) {
                        thumbnail = imgInLink.src;
                    } else {
                        // tr 행 단위로 올라가서 찾기 (다른 행과 공유 방지)
                        const tr = a.closest('tr');
                        if (tr) {
                            const img = tr.querySelector('img[src*="notebookcheck"]');
                            if (img) thumbnail = img.src;
                        }
                    }

                    // 날짜
                    const row = a.closest('tr, li, article');
                    const dateEl = row ? row.querySelector('time, [class*="date"]') : null;
                    const pub_date = dateEl ? (dateEl.getAttribute('datetime') || dateEl.innerText.trim()) : null;

                    results.push({ title, url, thumbnail, pub_date });
                }
                // URL 기준 중복 제거
                return results.filter((v, i, arr) => arr.findIndex(x => x.url === v.url) === i);
            }""")

            # 스마트폰 리뷰만 필터
            # 폰 전용 브랜드 (노트북/PC 라인 없음)
            PHONE_ONLY = {
                'iphone', 'pixel', 'xiaomi', 'redmi', 'poco',
                'oneplus', 'oppo', 'vivo', 'iqoo', 'realme', 'honor',
                'huawei', 'nothing', 'tecno', 'infinix', 'itel',
                'meizu', 'nubia', 'blackview', 'ulefone', 'doogee',
                'cubot', 'oukitel', 'fairphone', 'zte',
            }
            # 복합 브랜드 — "smartphone" or "phone" 키워드 필수
            MIXED_BRANDS = {
                'samsung', 'apple', 'google', 'motorola', 'sony',
                'asus', 'lenovo', 'nokia', 'lg',
            }
            # 비스마트폰 키워드 — 하나라도 있으면 제외
            EXCLUDE_KW = [
                'laptop', 'notebook', 'macbook', 'thinkpad', 'ideapad',
                'legion ', 'yoga ', 'zenbook', 'vivobook', 'expertbook',
                'tablet', 'ipad', 'earbuds', 'earphone', 'headphone',
                'speaker', 'printer', 'camera ', 'drone', 'router',
                'glasses', ' watch', 'monitor', 'lawnmow', 'robot',
                'mini pc', 'chromebook', 'ultrabook', 'workstation',
                'power bank', 'dock ', 'stream deck', 'elgato',
                'gamer ', 'gaming laptop', 'slim ', 'aura edition',
                'g11 ', 'g9 ', 'g10 ', '14 g', '15 g', '16 g',
                'dashcam', 'dash cam', 'dash-cam', 'projector', 'hands-on',
            ]
            for item in items:
                title_l = item['title'].lower()
                # 제외 키워드 체크
                if any(kw in title_l for kw in EXCLUDE_KW):
                    continue
                # 스마트폰 판별
                has_phone_only_brand = any(b in title_l for b in PHONE_ONLY)
                has_mixed_brand = any(b in title_l for b in MIXED_BRANDS)
                has_phone_kw = 'smartphone' in title_l or ' phone' in title_l or 'mobile' in title_l
                is_phone = has_phone_only_brand or (has_mixed_brand and has_phone_kw)
                if is_phone:
                    results.append(item)

            print(f"  페이지 {pg}: {len(items)}개 파싱, 스마트폰 {len(results)}개 누적")

        await context.close()
        await browser.close()

    # 중복 제거
    seen = set()
    unique = []
    for r in results:
        if r['url'] not in seen:
            seen.add(r['url'])
            unique.append(r)
    return unique


async def _apply_filters(page):
    """Smartphone 태그 체크박스 활성화 (ID 패턴: introa_outer_cbox_tag_smartphone_*)"""
    try:
        # Smartphone 체크박스 — ID 패턴 매칭
        checked = await page.evaluate("""() => {
            const el = Array.from(document.querySelectorAll('input[type=checkbox]'))
                .find(i => i.id.includes('tag_smartphone'));
            if (!el) return 'not_found';
            if (el.checked) return 'already_checked';
            el.click();
            // change 이벤트 발생
            el.dispatchEvent(new Event('change', {bubbles: true}));
            return 'clicked';
        }""")
        print(f"  Smartphone 필터: {checked}")
        if checked == 'clicked':
            await page.wait_for_timeout(1500)
    except Exception as e:
        print(f"  필터 적용 실패 (무시): {e}")


# ── 세부 리뷰 스크래핑 ─────────────────────────────────────
async def scrape_review_detail(url: str) -> dict:
    """개별 리뷰 페이지에서 평점·pros/cons·항목별 평점·발열 등 추출"""
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
            viewport={"width": 1280, "height": 900},
            locale="en-US",
        )
        page = await context.new_page()
        await Stealth().apply_stealth_async(page)

        await page.goto(url, timeout=40000, wait_until="domcontentloaded")
        await page.wait_for_timeout(2500)

        data = await page.evaluate("""() => {
            const clean = s => s.replace(' - Notebookcheck Review','').replace(' - NotebookCheck.net','').trim();

            // 종합 평점 — 제목 앞 "86% ..." 패턴에서 추출 (DOM 선택자는 비신뢰)
            const titleRaw = document.title;
            const scoreMatch = titleRaw.match(/^(\d{2,3})%\s/);
            const score = scoreMatch ? parseInt(scoreMatch[1]) : null;

            // pros / cons
            const pros = Array.from(document.querySelectorAll('.pro_eintrag')).map(e => e.innerText.trim()).filter(Boolean);
            const cons = Array.from(document.querySelectorAll('.contra_eintrag')).map(e => e.innerText.trim()).filter(Boolean);

            // 항목별 평점
            const subRatings = {};
            document.querySelectorAll('.rating_line').forEach(line => {
                const label = line.querySelector('.rating_label');
                const pct   = line.querySelector('.rating_percent, .subrating');
                if (label && pct) {
                    const match = pct.innerText.match(/\\d+(?:\\.\\d+)?(?:\\s*\\/\\s*\\d+)?\\s*(?:→\\s*(\\d+))?%/);
                    const val = match ? parseInt(match[1] || match[0]) : null;
                    if (val) subRatings[label.innerText.trim()] = val;
                }
            });

            // 발열: °C 포함 테이블에서 3×3 그리드 추출
            const tempTables = [];
            document.querySelectorAll('table').forEach(tbl => {
                if (!tbl.innerText.includes('°')) return;
                const rows = Array.from(tbl.querySelectorAll('tr'))
                    .filter(tr => tr.innerText.includes('°C') && !tr.innerText.includes('Maximum'));
                const vals = [];
                rows.forEach(tr => {
                    Array.from(tr.querySelectorAll('td')).forEach(td => {
                        // 정수/소수 모두 허용: "37 °C" or "41.7 °C"
                        const m = td.innerText.match(/^(\\d+(?:\\.\\d+)?)\\s*°C/);
                        if (m) vals.push(parseFloat(m[1]));
                    });
                });
                if (vals.length === 9) tempTables.push(vals);
            });
            // 온도 범위로 idle(<30°C) / load(>=30°C) 자동 구분
            const idleTables = tempTables.filter(t => Math.max(...t) < 30);
            const loadTables = tempTables.filter(t => Math.max(...t) >= 30);
            const tempData = {
                idle_front:  idleTables[0] || [],
                idle_back:   idleTables[1] || [],
                load_front:  loadTables[0] || [],
                load_back:   loadTables[1] || [],
                load_front_max: loadTables[0]?.length ? Math.max(...loadTables[0]) : null,
                load_back_max:  loadTables[1]?.length ? Math.max(...loadTables[1]) : null,
            };

            // 디스플레이 — 전체 지표
            const brightness = {};
            document.querySelectorAll('table tr').forEach(tr => {
                const cells = Array.from(tr.querySelectorAll('td')).map(c => c.innerText.trim());
                if (cells[0] === 'Brightness middle (cd/m²)')       brightness.typical    = parseInt(cells[1]);
                if (cells[0] === 'Brightness (cd/m²)')               brightness.avg        = parseInt(cells[1]);
                if (cells[0] === 'Brightness Distribution (%)')      brightness.uniformity = parseInt(cells[1]);
                if (cells[0] === 'Colorchecker dE 2000 *')           brightness.de2000     = parseFloat(cells[1]);
                if (cells[0] === 'Colorchecker dE 2000 max. *')      brightness.de2000_max = parseFloat(cells[1]);
                if (cells[0] === 'Greyscale dE 2000 *')              brightness.grey_de    = parseFloat(cells[1]);
                if (cells[0] === 'Gamma') {
                    const m = cells[1].match(/([\\d.]+)\\s*(\\d+)%/);
                    if (m) { brightness.gamma = parseFloat(m[1]); brightness.gamma_acc = parseInt(m[2]); }
                }
                if (cells[0] === 'CCT') {
                    const m = cells[1].match(/([\\d.]+)\\s*(\\d+)%/);
                    if (m) { brightness.cct = parseInt(m[1]); brightness.cct_acc = parseInt(m[2]); }
                }
                if (cells[0] === 'Screen flickering / PWM detected') {
                    brightness.pwm_hz  = parseFloat(cells[1]);
                    const am = cells[1].match(/Amplitude:\\s*([\\d.]+)/);
                    if (am) brightness.pwm_amp = parseFloat(am[1]);
                }
            });

            // 밝기 3×3 균일도 그리드
            const brightGridTbl = Array.from(document.querySelectorAll('table'))
                .find(t => t.innerText.includes('cd/m²') && t.querySelectorAll('td').length > 8);
            const brightGrid = [];
            if (brightGridTbl) {
                brightGridTbl.querySelectorAll('td').forEach(td => {
                    const m = td.innerText.match(/^(\\d{3,4})\\n?\\s*cd\\/m/);
                    if (m) brightGrid.push(parseInt(m[1]));
                });
            }
            if (brightGrid.length === 9) brightness.grid = brightGrid;

            // 응답 시간 (빠른 값 / 일반 값)
            const respTimes = [];
            document.querySelectorAll('table tr').forEach(tr => {
                const text = tr.innerText;
                if ((text.includes('rise') || text.includes('fall')) && text.includes('ms')) {
                    const m = text.match(/^([\\d.]+)\\s*ms/);
                    if (m) respTimes.push(parseFloat(m[1]));
                }
            });
            if (respTimes.length >= 1) brightness.resp_fast = respTimes[0];
            if (respTimes.length >= 2) brightness.resp_slow = respTimes[1];

            // 피크 밝기 (경쟁사 비교 테이블에서 자기 행)
            document.querySelectorAll('table tr').forEach(tr => {
                const text = tr.innerText;
                if (text.includes('OnePlus 15T') || text.includes('SD 8 Elite') || text.includes('Adreno 840')) {
                    const m = text.match(/(\\d{3,4})\\s*cd\\/m²/g);
                    if (m && m.length > 0) {
                        const vals = m.map(v => parseInt(v)).filter(v => v > (brightness.typical || 0));
                        if (vals.length) brightness.peak = Math.max(...vals);
                    }
                }
            });

            // 스토리지
            const storage = {};
            document.querySelectorAll('table tr').forEach(tr => {
                const cells = Array.from(tr.querySelectorAll('td')).map(c => c.innerText.trim());
                if (cells[0] === 'Sequential Read 256KB (MB/s)')  storage['Seq. Read 256KB']  = parseFloat(cells[1]);
                if (cells[0] === 'Sequential Write 256KB (MB/s)') storage['Seq. Write 256KB'] = parseFloat(cells[1]);
                if (cells[0] === 'Random Read 4KB (MB/s)')        storage['Rand. Read 4KB']   = parseFloat(cells[1]);
                if (cells[0] === 'Random Write 4KB (MB/s)')       storage['Rand. Write 4KB']  = parseFloat(cells[1]);
            });

            // 배터리 지속 시간
            let battery_life = null;
            document.querySelectorAll('table tr').forEach(tr => {
                const cells = Array.from(tr.querySelectorAll('td')).map(c => c.innerText.trim());
                if (cells[0] && cells[0].includes('WiFi') && cells[1]) {
                    const m = cells[1].match(/([\\d.]+)/);
                    if (m) battery_life = parseFloat(m[1]);
                }
            });

            // 요약 단락
            const paras = Array.from(document.querySelectorAll('p'))
                .map(p => p.innerText.trim()).filter(t => t.length > 80).slice(0, 4);

            // OG 이미지
            const ogImg = document.querySelector('meta[property="og:image"]');
            const ogDesc = document.querySelector('meta[property="og:description"]');

            return {
                title:        clean(document.title),
                score,
                pros, cons,
                sub_ratings:  subRatings,
                thermal:      tempData,
                display:      brightness,
                storage:      Object.keys(storage).length ? storage : null,
                battery_life: battery_life,
                paras,
                thumbnail:    ogImg ? ogImg.content : null,
                description:  ogDesc ? ogDesc.content : null,
                url:          window.location.href,
            };
        }""")

        await context.close()
        await browser.close()
        return data


# ── 폰 DB 매칭 ────────────────────────────────────────────
def match_phone(title: str, phones: list[dict]) -> int | None:
    """리뷰 제목과 등록된 폰 이름 매칭 → phone_id 반환 (엄격 매칭)"""
    # 제목에서 % 점수 앞부분 제거 (예: "86% OnePlus 15T Review: ...")
    title_clean = re.sub(r'^\d+%\s*', '', title).lower()

    # 일반적인 단어 (매칭에서 제외)
    GENERIC = {'pro', 'max', 'ultra', 'plus', 'lite', 'mini', 'air', 'review',
               'smartphone', 'phone', 'series', 'edition', 'the', 'and', 'for'}

    for phone in phones:
        name = phone['name'].lower()
        name_parts = [p for p in name.split() if len(p) > 1 and p not in GENERIC]
        if not name_parts:
            continue

        # 브랜드(첫 단어)가 반드시 제목에 포함돼야 함
        brand = name_parts[0]
        if brand not in title_clean:
            continue

        # 모델 번호/고유 식별자: 숫자 포함 토큰 또는 4자 이상 고유 단어
        identifiers = [p for p in name_parts[1:] if any(c.isdigit() for c in p) or len(p) >= 4]
        if not identifiers:
            # 브랜드만 있는 경우 (예: "Apple") 스킵
            continue

        # 식별자 중 하나라도 제목에 정확히 포함되면 매칭
        matched_ids = sum(1 for ident in identifiers if ident in title_clean)
        if matched_ids >= max(1, len(identifiers) // 2):
            return phone['id']

    return None


if __name__ == "__main__":
    items = asyncio.run(collect_review_list(pages=1))
    print(f"\n수집 결과: {len(items)}개")
    for it in items[:5]:
        print(f"  {it['title'][:60]}")
