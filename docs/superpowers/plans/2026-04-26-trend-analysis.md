# 스마트폰 트렌드 분석 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 업무 페이지에 "트렌드 분석" 탭을 추가하여 선택한 스마트폰들의 스펙 트렌드 차트와 Claude AI 인사이트를 함께 제공한다.

**Architecture:** 백엔드에 `trend.py` 모듈을 새로 만들어 스펙 파싱/집계와 Claude 인사이트 생성을 담당한다. `main.py`에 2개의 엔드포인트를 추가하고 `database.py`에 `segment` 컬럼 마이그레이션을 추가한다. 프론트엔드는 기존 `work/index.html` 단일 파일 패턴을 따르며 Chart.js CDN을 추가한다.

**Tech Stack:** FastAPI, SQLite, anthropic SDK (claude-sonnet-4-6), Chart.js CDN, vanilla JS

---

## File Map

| 파일 | 변경 유형 | 역할 |
|------|---------|------|
| `backend/database.py` | 수정 | phones 테이블에 segment 컬럼 마이그레이션 추가 |
| `backend/trend.py` | 신규 생성 | 세그먼트 추론, 스펙 파싱, Claude 인사이트 생성 |
| `backend/main.py` | 수정 | PATCH /phones/{id}/segment, POST /trend/analyze 엔드포인트 추가 |
| `work/index.html` | 수정 | 트렌드 분석 탭, 선택 UI, Chart.js 차트, AI 인사이트 표시 |

---

## Task 1: DB segment 컬럼 추가

**Files:**
- Modify: `backend/database.py`

- [ ] **Step 1: `init_db()` 마이그레이션 블록에 segment 컬럼 추가**

`database.py`의 기존 마이그레이션 블록 (cash 컬럼 추가 코드 아래) 에 추가:

```python
    try:
        conn.execute("ALTER TABLE phones ADD COLUMN segment TEXT DEFAULT NULL")
        conn.commit()
    except Exception:
        pass  # 이미 존재하면 무시
```

- [ ] **Step 2: 직접 실행으로 마이그레이션 적용 확인**

```bash
cd backend && python database.py
```

Expected: `DB 초기화 완료` 출력, 오류 없음

- [ ] **Step 3: 컬럼 추가 확인**

```bash
cd backend && python -c "
from database import get_conn
conn = get_conn()
cols = [r[1] for r in conn.execute('PRAGMA table_info(phones)').fetchall()]
print(cols)
assert 'segment' in cols, 'segment 컬럼 없음'
print('OK')
"
```

Expected: `[..., 'segment']` 포함 출력, `OK`

- [ ] **Step 4: Commit**

```bash
git add backend/database.py
git commit -m "feat: phones 테이블에 segment 컬럼 추가"
```

---

## Task 2: trend.py — 세그먼트 추론 + 스펙 파싱

**Files:**
- Create: `backend/trend.py`

- [ ] **Step 1: `trend.py` 파일 생성 — 세그먼트 자동 추론 함수**

```python
# backend/trend.py
import re
import os
import anthropic
from database import get_conn

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

SEGMENT_FLAGSHIP = "flagship"
SEGMENT_MIDRANGE = "midrange"
SEGMENT_BUDGET   = "budget"


def infer_segment(name: str) -> str:
    n = name.lower()
    # Apple
    if "iphone" in n:
        return SEGMENT_FLAGSHIP if any(x in n for x in ["pro max", " pro"]) else SEGMENT_MIDRANGE
    # Samsung
    if "galaxy" in n:
        if any(x in n for x in ["ultra", "z fold", "z flip"]):
            return SEGMENT_FLAGSHIP
        if re.search(r'galaxy\s+s\d', n):
            return SEGMENT_FLAGSHIP
        if re.search(r'galaxy\s+a\d', n):
            return SEGMENT_MIDRANGE
        if re.search(r'galaxy\s+[mf]\d', n):
            return SEGMENT_BUDGET
    # Google
    if "pixel" in n:
        if any(x in n for x in ["pro", "fold"]):
            return SEGMENT_FLAGSHIP
        if " a" in n:
            return SEGMENT_MIDRANGE
        return SEGMENT_MIDRANGE
    # OnePlus
    if "oneplus" in n:
        return SEGMENT_FLAGSHIP if any(x in n for x in ["pro", "ultra"]) else SEGMENT_MIDRANGE
    # Xiaomi
    if "xiaomi" in n or "redmi" in n or "poco" in n:
        if any(x in n for x in ["ultra", "pro+"]):
            return SEGMENT_FLAGSHIP
        if "redmi note" in n or "poco x" in n:
            return SEGMENT_MIDRANGE
        if "redmi" in n:
            return SEGMENT_BUDGET
    return SEGMENT_MIDRANGE
```

- [ ] **Step 2: 스펙 파싱 유틸리티 함수 추가 (같은 파일)**

```python
def _parse_float(value: str, pattern: str) -> float | None:
    m = re.search(pattern, value or "")
    return float(m.group(1)) if m else None

def _parse_int(value: str, pattern: str) -> int | None:
    m = re.search(pattern, value or "")
    return int(m.group(1)) if m else None

def parse_display_size(value: str) -> float | None:
    return _parse_float(value, r'(\d+\.?\d*)\s*inches')

def parse_panel_type(value: str) -> str:
    v = (value or "").upper()
    if "LTPO" in v: return "LTPO"
    if "AMOLED" in v: return "AMOLED"
    if "OLED" in v: return "OLED"
    if "LCD" in v: return "LCD"
    return "Other"

def parse_refresh_rate(value: str) -> int | None:
    return _parse_int(value, r'(\d+)Hz')

def parse_ap_brand(value: str) -> str:
    v = value or ""
    for brand in ["Snapdragon", "Exynos", "Dimensity", "Apple", "Kirin"]:
        if brand in v: return brand
    if "Helio" in v or "MediaTek" in v: return "MediaTek"
    return "Other"

def parse_process_node(value: str) -> int | None:
    return _parse_int(value, r'(\d+)\s*nm')

def parse_ram(value: str) -> int | None:
    return _parse_int(value, r'(\d+)\s*GB\s*RAM')

def parse_camera_mp(value: str) -> int | None:
    return _parse_int(value, r'(\d+)\s*MP')

def parse_battery(value: str) -> int | None:
    return _parse_int(value, r'(\d+)\s*mAh')

def parse_year(announced: str) -> int | None:
    m = re.search(r'(\d{4})', announced or "")
    return int(m.group(1)) if m else None
```

- [ ] **Step 3: 파싱 함수 단위 검증**

```bash
cd backend && python -c "
from trend import (parse_display_size, parse_panel_type, parse_refresh_rate,
                   parse_ap_brand, parse_process_node, parse_ram, parse_camera_mp,
                   parse_battery, parse_year, infer_segment)

assert parse_display_size('6.8 inches, 113.9 cm2') == 6.8
assert parse_panel_type('Dynamic AMOLED 2X, 120Hz') == 'AMOLED'
assert parse_panel_type('LTPO OLED') == 'LTPO'
assert parse_refresh_rate('120Hz, 1-120Hz adaptive') == 120
assert parse_ap_brand('Qualcomm SM8650 Snapdragon 8 Gen 3 (4 nm)') == 'Snapdragon'
assert parse_process_node('Qualcomm SM8650 Snapdragon 8 Gen 3 (4 nm)') == 4
assert parse_ram('12 GB RAM') == 12
assert parse_camera_mp('200 MP, f/1.7') == 200
assert parse_battery('5000 mAh, non-removable') == 5000
assert parse_year('2025, January 22') == 2025
assert infer_segment('Samsung Galaxy S25 Ultra') == 'flagship'
assert infer_segment('Samsung Galaxy A55') == 'midrange'
assert infer_segment('iPhone 17 Pro Max') == 'flagship'
assert infer_segment('iPhone 17') == 'midrange'
print('All assertions passed')
"
```

Expected: `All assertions passed`

- [ ] **Step 4: Commit**

```bash
git add backend/trend.py
git commit -m "feat: trend.py 세그먼트 추론 + 스펙 파싱 유틸리티"
```

---

## Task 3: trend.py — 스펙 집계 함수

**Files:**
- Modify: `backend/trend.py`

- [ ] **Step 1: DB에서 폰 스펙을 파싱하여 집계하는 함수 추가**

```python
def aggregate_phones(ids: list[int]) -> list[dict]:
    conn = get_conn()
    result = []
    for pid in ids:
        phone = conn.execute("SELECT * FROM phones WHERE id=?", (pid,)).fetchone()
        if not phone:
            continue
        specs = conn.execute("SELECT category, key, value FROM specs WHERE phone_id=?", (pid,)).fetchall()
        spec_map: dict[tuple, str] = {(s["category"], s["key"]): s["value"] for s in specs}

        def sv(cat, key): return spec_map.get((cat, key), "") or ""

        announced   = sv("Launch", "Announced")
        display_raw = sv("Display", "Size")
        type_raw    = sv("Display", "Type")
        chip_raw    = sv("Platform", "Chipset")
        ram_raw     = sv("Memory", "RAM")
        # 메인 카메라는 "Main Camera" 또는 "Camera" 카테고리의 첫 번째 값에서 MP 추출
        cam_raw = ""
        for (cat, key), val in spec_map.items():
            if "camera" in cat.lower() and "mp" in val.lower():
                cam_raw = val
                break
        bat_raw = sv("Battery", "Type")

        segment = phone["segment"] or infer_segment(phone["name"])

        result.append({
            "id":           phone["id"],
            "name":         phone["name"],
            "brand":        phone["brand"] or "Unknown",
            "segment":      segment,
            "year":         parse_year(announced),
            "display_size": parse_display_size(display_raw),
            "panel_type":   parse_panel_type(type_raw) if type_raw else None,
            "refresh_rate": parse_refresh_rate(type_raw) if type_raw else None,
            "ap_brand":     parse_ap_brand(chip_raw) if chip_raw else None,
            "process_node": parse_process_node(chip_raw) if chip_raw else None,
            "ram":          parse_ram(ram_raw) if ram_raw else None,
            "camera_mp":    parse_camera_mp(cam_raw) if cam_raw else None,
            "battery":      parse_battery(bat_raw) if bat_raw else None,
        })
    conn.close()
    return result
```

- [ ] **Step 2: Commit**

```bash
git add backend/trend.py
git commit -m "feat: trend.py aggregate_phones 스펙 집계 함수"
```

---

## Task 4: trend.py — Claude 인사이트 + main.py 엔드포인트

**Files:**
- Modify: `backend/trend.py`
- Modify: `backend/main.py`

- [ ] **Step 1: trend.py에 Claude 인사이트 생성 함수 추가**

```python
def generate_trend_insights(phones: list[dict]) -> str:
    lines = []
    for p in phones:
        lines.append(
            f"- {p['name']} ({p['brand']}, {p['year']}년, {p['segment']}): "
            f"디스플레이 {p.get('display_size') or '?'}인치 "
            f"{p.get('panel_type') or '?'} {p.get('refresh_rate') or '?'}Hz, "
            f"AP {p.get('ap_brand') or '?'} {p.get('process_node') or '?'}nm, "
            f"RAM {p.get('ram') or '?'}GB, "
            f"카메라 {p.get('camera_mp') or '?'}MP, "
            f"배터리 {p.get('battery') or '?'}mAh"
        )
    summary = "\n".join(lines)

    prompt = f"""다음 스마트폰 {len(phones)}개 모델의 데이터를 분석하여 트렌드 인사이트를 제공하세요.

## 분석 대상
{summary}

## 요청 분석 항목
1. **브랜드별 트렌드** - 각 브랜드의 스펙 진화 방향과 특징 (브랜드당 2-3문장)
2. **세그먼트별 패턴** - 플래그십/미드레인지/보급형 간 스펙 격차와 변화
3. **주목할 이상치/특이점** - 급격한 스펙 점프, 이례적인 선택, 눈에 띄는 패턴

간결하고 실용적으로 마크다운 형식으로 작성하세요."""

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1500,
        system="당신은 스마트폰 시장 전문 애널리스트입니다. 한국어로 답변하세요.",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.content[0].text
```

- [ ] **Step 2: main.py에 import 추가 및 엔드포인트 2개 추가**

`main.py` 상단 import 블록에 추가:
```python
from trend import infer_segment, aggregate_phones, generate_trend_insights
```

`main.py` 끝 (`# 파일 끝`) 전에 추가:

```python
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
    return {"phones": phones, "insights": insights}
```

- [ ] **Step 3: 서버 재시작 후 엔드포인트 동작 확인**

```bash
cd backend && uvicorn main:app --reload --port 8001
```

새 터미널에서:
```bash
# 저장된 폰 ID 확인
curl -s http://localhost:8001/phones | python -m json.tool | grep '"id"' | head -5

# 실제 ID로 세그먼트 업데이트 테스트 (예: id=1)
curl -s -X PATCH http://localhost:8001/phones/1/segment \
  -H "Content-Type: application/json" \
  -d '{"segment":"flagship"}' | python -m json.tool
# Expected: {"ok": true}

# 트렌드 분석 테스트 (예: id=1,2)
curl -s -X POST http://localhost:8001/trend/analyze \
  -H "Content-Type: application/json" \
  -d '{"ids":[1,2]}' | python -m json.tool | head -30
# Expected: {"phones":[...], "insights":"## 브랜드별..."}
```

- [ ] **Step 4: Commit**

```bash
git add backend/trend.py backend/main.py
git commit -m "feat: 트렌드 분석 API - segment PATCH + /trend/analyze POST"
```

---

## Task 5: 프론트엔드 — 트렌드 탭 + 폰 선택 UI + 세그먼트 수정

**Files:**
- Modify: `work/index.html`

- [ ] **Step 1: Chart.js CDN 추가 (`<head>` 내 SheetJS 스크립트 아래)**

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

- [ ] **Step 2: CSS 추가 — 트렌드 탭 전용 스타일 (`</style>` 바로 위에 삽입)**

```css
    /* 트렌드 분석 */
    .trend-phones-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-bottom: 24px; }
    .trend-card { background:#fff; border:1px solid #e8e8ec; border-radius:12px; padding:16px; cursor:pointer; position:relative; transition:box-shadow 0.15s,border-color 0.15s; }
    .trend-card:hover { box-shadow:0 4px 16px rgba(0,0,0,0.08); }
    .trend-card.selected { border-color:#6366f1; box-shadow:0 0 0 2px #6366f120; }
    .trend-card-check { position:absolute;top:10px;right:10px;width:20px;height:20px;border-radius:50%;background:#6366f1;color:#fff;font-size:0.65rem;display:none;align-items:center;justify-content:center; }
    .trend-card.selected .trend-card-check { display:flex; }
    .trend-card-name { font-size:0.82rem;font-weight:700;margin-bottom:4px; }
    .trend-card-brand { font-size:0.72rem;color:#999;margin-bottom:8px; }
    .segment-tag { display:inline-block;font-size:0.65rem;font-weight:700;padding:2px 8px;border-radius:10px;cursor:pointer;transition:opacity 0.15s; }
    .segment-tag:hover { opacity:0.75; }
    .seg-flagship  { background:#fef3c7;color:#92400e; }
    .seg-midrange  { background:#e0e7ff;color:#3730a3; }
    .seg-budget    { background:#dcfce7;color:#166534; }
    .trend-action-bar { display:flex;align-items:center;gap:12px;margin-bottom:24px;flex-wrap:wrap; }
    .trend-select-count { font-size:0.85rem;color:#999; }
    .chart-grid { display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px; }
    .chart-card { background:#fff;border:1px solid #e8e8ec;border-radius:12px;padding:20px; }
    .chart-card-title { font-size:0.75rem;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:16px; }
    .insights-card { background:#fff;border:1px solid #e8e8ec;border-radius:12px;padding:24px;margin-bottom:24px; }
    .insights-card h2 { font-size:0.75rem;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:16px; }
    .insights-body { font-size:0.85rem;line-height:1.8;color:#1a1a1a; }
    .insights-body h2,.insights-body h3 { font-size:0.92rem;font-weight:700;margin:16px 0 8px; }
    .insights-body strong { font-weight:700; }
    .insights-body ul { padding-left:18px;margin:6px 0; }
    .insights-body li { margin-bottom:4px; }
    @media(max-width:640px){
      .trend-phones-grid{grid-template-columns:repeat(2,1fr);}
      .chart-grid{grid-template-columns:1fr;}
    }
```

- [ ] **Step 3: nav에 "트렌드 분석" 탭 버튼 추가**

기존:
```html
    <button class="tab" onclick="switchTab('dashboard')">스마트폰 DB</button>
```

변경 후:
```html
    <button class="tab" onclick="switchTab('dashboard')">스마트폰 DB</button>
    <button class="tab" onclick="switchTab('trend')">트렌드 분석</button>
```

- [ ] **Step 4: `#section-trend` HTML 추가 (`</main>` 바로 위에 삽입)**

```html
  <!-- 트렌드 분석 섹션 -->
  <div id="section-trend" class="section">
    <div class="section-header">
      <div class="section-title">트렌드 분석</div>
    </div>

    <div class="trend-action-bar">
      <span class="trend-select-count" id="trendSelectCount">0개 선택됨</span>
      <button class="btn btn-dark" onclick="startTrendAnalysis()" id="trendAnalyzeBtn" disabled>분석 시작</button>
      <button class="btn btn-outline" onclick="clearTrendSelection()">선택 초기화</button>
    </div>

    <div class="trend-phones-grid" id="trendPhonesGrid">
      <div style="grid-column:span 3;text-align:center;padding:40px;color:#bbb">
        <div class="spinner"></div>불러오는 중...
      </div>
    </div>

    <div id="trendResult" style="display:none">
      <div class="chart-grid">
        <div class="chart-card"><div class="chart-card-title">디스플레이 크기 (인치)</div><canvas id="chartDisplaySize"></canvas></div>
        <div class="chart-card"><div class="chart-card-title">패널 타입 분포</div><canvas id="chartPanelType"></canvas></div>
        <div class="chart-card"><div class="chart-card-title">주사율 (Hz)</div><canvas id="chartRefreshRate"></canvas></div>
        <div class="chart-card"><div class="chart-card-title">AP 브랜드 분포</div><canvas id="chartApBrand"></canvas></div>
        <div class="chart-card"><div class="chart-card-title">공정 노드 (nm)</div><canvas id="chartProcessNode"></canvas></div>
        <div class="chart-card"><div class="chart-card-title">RAM (GB)</div><canvas id="chartRam"></canvas></div>
        <div class="chart-card"><div class="chart-card-title">메인 카메라 (MP)</div><canvas id="chartCameraMP"></canvas></div>
        <div class="chart-card"><div class="chart-card-title">배터리 용량 (mAh)</div><canvas id="chartBattery"></canvas></div>
      </div>
      <div class="insights-card">
        <h2>AI 인사이트</h2>
        <div class="insights-body" id="trendInsightsBody"></div>
      </div>
    </div>
  </div>
```

- [ ] **Step 5: `switchTab` 함수에 trend 탭 처리 추가**

기존:
```javascript
    if (tab === 'dashboard') loadPhones();
```

변경 후:
```javascript
    if (tab === 'dashboard') loadPhones();
    if (tab === 'trend') loadTrendPhones();
```

- [ ] **Step 6: 트렌드 선택 UI JS 추가 (기존 `// ── 초기화` 블록 바로 위에)**

```javascript
  // ── 트렌드 분석 ──────────────────────────────────────────────
  let trendSelected = new Set();
  let trendAllPhones = [];
  const SEGMENT_LABEL = { flagship: '플래그십', midrange: '미드레인지', budget: '보급형' };
  const SEGMENT_CLS   = { flagship: 'seg-flagship', midrange: 'seg-midrange', budget: 'seg-budget' };

  async function loadTrendPhones() {
    const grid = document.getElementById('trendPhonesGrid');
    try {
      const res = await fetch(`${API}/phones`);
      trendAllPhones = await res.json();
      renderTrendCards();
    } catch(e) {
      grid.innerHTML = '<div style="color:#f87;padding:20px">서버 연결 실패</div>';
    }
  }

  function renderTrendCards() {
    const grid = document.getElementById('trendPhonesGrid');
    if (!trendAllPhones.length) {
      grid.innerHTML = '<div style="grid-column:span 3;text-align:center;padding:40px;color:#bbb">등록된 폰이 없어요</div>';
      return;
    }
    grid.innerHTML = trendAllPhones.map(p => {
      const seg = p.segment || 'midrange';
      const label = SEGMENT_LABEL[seg] || seg;
      const cls = SEGMENT_CLS[seg] || 'seg-midrange';
      return `
        <div class="trend-card ${trendSelected.has(p.id) ? 'selected' : ''}" onclick="toggleTrendCard(${p.id})">
          <div class="trend-card-check">✓</div>
          <div class="trend-card-name">${p.name}</div>
          <div class="trend-card-brand">${p.brand || ''} · ${p.year || '연도 미상'}</div>
          <span class="segment-tag ${cls}" onclick="event.stopPropagation();openSegmentEdit(${p.id},this)"
            title="클릭해서 수정">${label} ✎</span>
        </div>`;
    }).join('');
  }

  function toggleTrendCard(id) {
    if (trendSelected.has(id)) trendSelected.delete(id);
    else trendSelected.add(id);
    document.getElementById('trendSelectCount').textContent = `${trendSelected.size}개 선택됨`;
    document.getElementById('trendAnalyzeBtn').disabled = trendSelected.size === 0;
    renderTrendCards();
  }

  function clearTrendSelection() {
    trendSelected.clear();
    document.getElementById('trendSelectCount').textContent = '0개 선택됨';
    document.getElementById('trendAnalyzeBtn').disabled = true;
    document.getElementById('trendResult').style.display = 'none';
    renderTrendCards();
  }

  function openSegmentEdit(id, tagEl) {
    const current = tagEl.className.includes('flagship') ? 'flagship'
                  : tagEl.className.includes('budget')   ? 'budget' : 'midrange';
    const options = ['flagship', 'midrange', 'budget'];
    const next = options[(options.indexOf(current) + 1) % 3];
    fetch(`${API}/phones/${id}/segment`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ segment: next })
    }).then(() => {
      const phone = trendAllPhones.find(p => p.id === id);
      if (phone) phone.segment = next;
      renderTrendCards();
    });
  }
```

- [ ] **Step 7: Commit**

```bash
git add work/index.html
git commit -m "feat: 트렌드 분석 탭 - 폰 선택 UI + 세그먼트 수정"
```

---

## Task 6: 프론트엔드 — Chart.js 차트 렌더링

**Files:**
- Modify: `work/index.html`

- [ ] **Step 1: 차트 인스턴스 관리 + 색상 팔레트 변수 추가 (트렌드 JS 블록 상단)**

기존 `let trendSelected = new Set();` 바로 위에:

```javascript
  let _trendCharts = {};
  const BRAND_COLORS = ['#6366f1','#f59e0b','#10b981','#ef4444','#3b82f6','#8b5cf6','#ec4899','#14b8a6'];
  function destroyCharts() {
    Object.values(_trendCharts).forEach(c => c.destroy());
    _trendCharts = {};
  }
```

- [ ] **Step 2: 차트 렌더링 함수 추가 (`clearTrendSelection` 함수 아래에)**

```javascript
  function renderCharts(phones) {
    destroyCharts();
    const years = [...new Set(phones.map(p => p.year).filter(Boolean))].sort();
    const brands = [...new Set(phones.map(p => p.brand))];

    // 브랜드별 컬러 매핑
    const brandColor = {};
    brands.forEach((b, i) => brandColor[b] = BRAND_COLORS[i % BRAND_COLORS.length]);

    // ① 디스플레이 크기 (연도별 브랜드 선 그래프)
    _trendCharts.displaySize = new Chart(document.getElementById('chartDisplaySize'), {
      type: 'line',
      data: {
        labels: years,
        datasets: brands.map(brand => ({
          label: brand,
          data: years.map(y => {
            const pts = phones.filter(p => p.brand === brand && p.year === y && p.display_size);
            return pts.length ? (pts.reduce((s,p) => s + p.display_size, 0) / pts.length).toFixed(1) : null;
          }),
          borderColor: brandColor[brand], backgroundColor: brandColor[brand] + '33',
          tension: 0.3, spanGaps: true, pointRadius: 4
        }))
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } }, scales: { y: { title: { display: true, text: '인치' } } } }
    });

    // ② 패널 타입 분포 (연도별 스택 막대)
    const panelTypes = [...new Set(phones.map(p => p.panel_type).filter(Boolean))];
    const panelColors = { LTPO:'#6366f1', AMOLED:'#f59e0b', OLED:'#10b981', LCD:'#94a3b8', Other:'#e2e8f0' };
    _trendCharts.panelType = new Chart(document.getElementById('chartPanelType'), {
      type: 'bar',
      data: {
        labels: years,
        datasets: panelTypes.map(pt => ({
          label: pt,
          data: years.map(y => phones.filter(p => p.year === y && p.panel_type === pt).length),
          backgroundColor: panelColors[pt] || '#ccc'
        }))
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } }, scales: { x: { stacked: true }, y: { stacked: true, ticks: { stepSize: 1 } } } }
    });

    // ③ 주사율 (연도별 브랜드 선 그래프)
    _trendCharts.refreshRate = new Chart(document.getElementById('chartRefreshRate'), {
      type: 'line',
      data: {
        labels: years,
        datasets: brands.map(brand => ({
          label: brand,
          data: years.map(y => {
            const pts = phones.filter(p => p.brand === brand && p.year === y && p.refresh_rate);
            return pts.length ? Math.max(...pts.map(p => p.refresh_rate)) : null;
          }),
          borderColor: brandColor[brand], backgroundColor: brandColor[brand] + '33',
          tension: 0.3, spanGaps: true, pointRadius: 4
        }))
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } }, scales: { y: { title: { display: true, text: 'Hz' } } } }
    });

    // ④ AP 브랜드 분포 (연도별 스택 막대)
    const apBrands = [...new Set(phones.map(p => p.ap_brand).filter(Boolean))];
    const apColors = { Snapdragon:'#ef4444', Exynos:'#3b82f6', Dimensity:'#f59e0b', Apple:'#6366f1', Kirin:'#10b981', MediaTek:'#8b5cf6', Other:'#94a3b8' };
    _trendCharts.apBrand = new Chart(document.getElementById('chartApBrand'), {
      type: 'bar',
      data: {
        labels: years,
        datasets: apBrands.map(ab => ({
          label: ab,
          data: years.map(y => phones.filter(p => p.year === y && p.ap_brand === ab).length),
          backgroundColor: apColors[ab] || '#ccc'
        }))
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } }, scales: { x: { stacked: true }, y: { stacked: true, ticks: { stepSize: 1 } } } }
    });

    // ⑤ 공정 노드 (연도별 브랜드 선, nm이 낮을수록 좋으므로 y축 반전)
    _trendCharts.processNode = new Chart(document.getElementById('chartProcessNode'), {
      type: 'line',
      data: {
        labels: years,
        datasets: brands.map(brand => ({
          label: brand,
          data: years.map(y => {
            const pts = phones.filter(p => p.brand === brand && p.year === y && p.process_node);
            return pts.length ? Math.min(...pts.map(p => p.process_node)) : null;
          }),
          borderColor: brandColor[brand], backgroundColor: brandColor[brand] + '33',
          tension: 0.3, spanGaps: true, pointRadius: 4
        }))
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } },
        scales: { y: { reverse: true, title: { display: true, text: 'nm (낮을수록 최신)' } } } }
    });

    // ⑥ RAM (연도별 브랜드 선)
    _trendCharts.ram = new Chart(document.getElementById('chartRam'), {
      type: 'line',
      data: {
        labels: years,
        datasets: brands.map(brand => ({
          label: brand,
          data: years.map(y => {
            const pts = phones.filter(p => p.brand === brand && p.year === y && p.ram);
            return pts.length ? Math.max(...pts.map(p => p.ram)) : null;
          }),
          borderColor: brandColor[brand], backgroundColor: brandColor[brand] + '33',
          tension: 0.3, spanGaps: true, pointRadius: 4
        }))
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } }, scales: { y: { title: { display: true, text: 'GB' } } } }
    });

    // ⑦ 카메라 (연도별 브랜드 선)
    _trendCharts.cameraMP = new Chart(document.getElementById('chartCameraMP'), {
      type: 'line',
      data: {
        labels: years,
        datasets: brands.map(brand => ({
          label: brand,
          data: years.map(y => {
            const pts = phones.filter(p => p.brand === brand && p.year === y && p.camera_mp);
            return pts.length ? Math.max(...pts.map(p => p.camera_mp)) : null;
          }),
          borderColor: brandColor[brand], backgroundColor: brandColor[brand] + '33',
          tension: 0.3, spanGaps: true, pointRadius: 4
        }))
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } }, scales: { y: { title: { display: true, text: 'MP' } } } }
    });

    // ⑧ 배터리 (연도별 브랜드 선)
    _trendCharts.battery = new Chart(document.getElementById('chartBattery'), {
      type: 'line',
      data: {
        labels: years,
        datasets: brands.map(brand => ({
          label: brand,
          data: years.map(y => {
            const pts = phones.filter(p => p.brand === brand && p.year === y && p.battery);
            return pts.length ? Math.round(pts.reduce((s,p) => s + p.battery, 0) / pts.length) : null;
          }),
          borderColor: brandColor[brand], backgroundColor: brandColor[brand] + '33',
          tension: 0.3, spanGaps: true, pointRadius: 4
        }))
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } }, scales: { y: { title: { display: true, text: 'mAh' } } } }
    });
  }
```

- [ ] **Step 2: Commit**

```bash
git add work/index.html
git commit -m "feat: 트렌드 분석 Chart.js 8개 차트 렌더링"
```

---

## Task 7: 프론트엔드 — 분석 실행 + AI 인사이트 표시

**Files:**
- Modify: `work/index.html`

- [ ] **Step 1: `startTrendAnalysis` 함수 추가 (`openSegmentEdit` 함수 아래에)**

```javascript
  async function startTrendAnalysis() {
    const pw = prompt('분석을 시작하려면 비밀번호를 입력하세요');
    if (pw !== '2441') { if (pw !== null) alert('비밀번호가 틀렸어요'); return; }
    if (trendSelected.size === 0) return;

    const btn = document.getElementById('trendAnalyzeBtn');
    btn.disabled = true;
    btn.textContent = '분석 중...';
    document.getElementById('trendResult').style.display = 'none';

    try {
      const res = await fetch(`${API}/trend/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: [...trendSelected] })
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();

      renderCharts(data.phones);

      // 인사이트 마크다운 → HTML (간단 변환)
      const html = data.insights
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>(\n|$))+/g, m => `<ul>${m}</ul>`)
        .replace(/\n{2,}/g, '<br><br>');
      document.getElementById('trendInsightsBody').innerHTML = html;

      document.getElementById('trendResult').style.display = 'block';
      document.getElementById('trendResult').scrollIntoView({ behavior: 'smooth' });
    } catch(e) {
      alert('분석 실패: ' + e.message);
    }

    btn.disabled = false;
    btn.textContent = '분석 시작';
  }
```

- [ ] **Step 2: 브라우저에서 전체 흐름 확인**

1. `http://localhost:5500/work/index.html` (또는 로컬 서버) 접속
2. "트렌드 분석" 탭 클릭 → 폰 카드 목록 표시 확인
3. 세그먼트 태그 클릭 → 태그가 순환 변경되는지 확인 (플래그십→미드레인지→보급형)
4. 폰 2개 이상 선택 → "분석 시작" 버튼 활성화 확인
5. "분석 시작" 클릭 → 비번 입력 → 차트 8개 + AI 인사이트 렌더링 확인

- [ ] **Step 3: Commit**

```bash
git add work/index.html
git commit -m "feat: 트렌드 분석 - 분석 실행 + AI 인사이트 표시 완성"
```

---

## Self-Review

**Spec coverage 확인:**
- [x] 업무 페이지 새 탭 → `switchTab('trend')` + `#section-trend`
- [x] 폰 선택 UI → `trendPhonesGrid` + `toggleTrendCard`
- [x] 세그먼트 자동추론 → `infer_segment()` in trend.py
- [x] 세그먼트 수정 → `openSegmentEdit()` + `PATCH /phones/{id}/segment`
- [x] 차트 8종 → Task 6 `renderCharts()`
- [x] AI 인사이트 → `generate_trend_insights()` + `POST /trend/analyze`
- [x] 분석 버튼 비번 `2441` → `startTrendAnalysis()` prompt 확인

**타입 일관성:**
- `aggregate_phones()` 반환 타입 → `phones` 배열로 프론트엔드 `renderCharts(phones)` 사용 ✓
- `trendAllPhones`의 `p.year`, `p.brand` → `/phones` API의 phones 배열 필드와 일치 ✓
- `PATCH /phones/{id}/segment` 요청 body → `SegmentRequest(segment: str)` ✓
