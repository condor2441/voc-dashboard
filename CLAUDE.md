# CLAUDE.md

---

## 1. IDENTITY & MISSION

스마트폰 사용자 VOC 수집·분석 → 디스플레이/상품기획 인사이트 도출.
출력: **HTML dashboard only** (자유서술 보고서 금지)

⚠️ **CRITICAL**: `voc: 모델명` 실행 시 **voc_dashboard_unified.html에만 추가**. 새 HTML 파일 생성 금지. 모델 데이터는 models 객체에 통합. → VOC_INTEGRATION_PREVENTION_SYSTEM.md 참고

---

## 2. HARD RULES

### 2-1. NEVER (금지)
- 가상 데이터 사용
- 루머 포함
- 점수 산식 없이 지표 출력
- 새 HTML 파일 생성 (`voc: all` 포함)
- 지역판 데이터 혼합 집계
- 데이터 공백 시 `미확인`으로 기존값 덮어쓰기

### 2-2. ALWAYS (필수)
- 공식 소구점 vs 사용자 반응 분리
- CN · KR · GL VOC 지역별 분리
- 표본 수(n) 명시
- 출처 불일치 시 → `출처간 상이` 표기
- 표본 부족 시 → `커뮤니티 표본 한정` 표기

### 2-3. 출력 형식 제약
- bar · stacked bar 차트만 사용
- 인라인 CSS 최소화 / 공통 class 재사용
- 새 레이아웃 생성 금지 → 기존 템플릿에 데이터 주입만
- Coding Sample 최대 10행 (긍정 top3 + 부정 top3 + 혼합 top4, 약·중립 제외)

---

## 3. COMMANDS & WORKFLOW

### 3-1. 명령어 목록

| 명령어 | 동작 |
|--------|------|
| `voc: 제품명` | VOC 분석 + models/{key}.js 업데이트 + spec DB 업데이트 |
| `voc: all` | 전체 모델 일괄 VOC 재수집 |
| `spec db` | 누적 spec DB 출력 |
| `출시: 업체명` | 연도별 스마트폰 출시 목록 (태블릿 제외, 모델 수 포함) |
| `판정룰` | 세그먼트 분류 기준표 |
| `명령어` | 명령 리스트 |

---

### 3-2. 단일 모델 처리 흐름 (`voc: 제품명`)

1. **기본정보** 확인: 브랜드 / 모델 / 출시 / 시장 / 세그먼트 / 스펙 / 공식 소구점
2. **Spec DB** 업데이트: 브랜드·모델명·출시연도·세그먼트·디스플레이·해상도·Hz·LTPO·PWM·밝기·SoC·RAM/Storage·배터리·충전·카메라·무게·시장·특이사항 (가격 제외)
3. **VOC 코딩**: 원문요약 / 감성(긍·중·부) / 카테고리 / 강도(약·중·강) / 출처 / 시점 / 비고
4. **정량 집계**: n / 긍중부 비중 / 카테고리별 언급 수 / 상위 강점·불만 / 초기 vs 최근
5. **해석**: 소구점 vs 체감 갭 / 디스플레이 강·약점 / 화질 vs 전력·열 구분 / 경쟁사 차별화
6. **Dashboard 출력**: voc_dashboard_unified.html 업데이트

---

### 3-3. 전체 처리 흐름 (`voc: all`)

**실행 순서**
1. `models/_index.js` 읽기 → `MODEL_KEYS` 배열 추출
2. 각 key에 대해 `models/{key}.js` 읽기 → `name` 필드(실제 모델명) 확인
3. TodoWrite로 전체 진행 현황 추적 (pending → in_progress → completed)
4. 모델별 순차 처리 (**병렬 금지** — 웹 검색 rate limit):
   - WebSearch로 최신 VOC 수집 (§4-2 키워드 조합 사용)
   - 기존 `models/{key}.js` 데이터와 비교 → 신규 VOC만 추가
   - 정량 지표 재산출 (n, 긍중부%, DSI, SEGI 등)
   - `models/{key}.js` 덮어쓰기 (`window.VOC_MODELS['{key}']` 형식 유지)
5. 완료 후 요약 리포트 출력:
   - 모델별 이전 n vs 업데이트 n
   - 새로 발견된 주요 이슈
   - 업데이트 실패 모델 (검색 결과 없음 등)

---

## 4. DATA COLLECTION

### 4-1. 소스 우선순위

**Spec**
공식사이트 > GSMArena > DeviceSpecifications > PhoneArena > Gadgets360 > 91mobiles

**CN VOC**
- Official: OPPO社区 · vivo官网社区 · 小米社区
- Core: 酷安 · 百度贴吧 · 中关村在线 · NGA手机研究所
- Sub: 知乎 · 微博 · Bilibili · IT之家 · PConline · 什么值得买 · 小红书

**KR VOC**
- Official: Samsung Members · 브랜드 공식 커뮤니티
- Core: 네이버 블로그 · 네이버 카페 · 뽐뿌 · 디시인사이드
- Sub: 루리웹 · 클리엔 · YouTube Korea

**GL VOC**
Reddit · YouTube comments · GSMArena user comments · Android forums

### 4-2. 검색 키워드 조합

`모델명 + [屏幕|亮度|护眼|频闪|刷新率|分辨率|发热|续航|拍照|系统|更新]`

디스플레이 집중 키워드: `屏幕 · 亮度 · 户外可视 · 护眼 · 频闪 · 调光 · 高刷 · 分辨率 · 低亮度 · 暗部 · 色彩 · 边框`

---

## 5. SAMPLING & QUALITY

### 5-1. 표본 기준

| 등급 | 기준 |
|------|------|
| Minimum | n ≥ 30 |
| Recommended | n ≥ 50 |
| Optimal | n ≥ 100 |

**지역 구성**: CN 40–60% / KR 10–20% / GL 10–20% / 지역별 최소 n ≥ 5

**시기 구성**: Launch 0–30d ≥ 20% / Mid 30–180d ≥ 40% / Mature 180d+ ≥ 20%

**중복 제거**: 동일 source 7일 내 중복 제거 / 유사도 > 90% 병합

### 5-2. 품질 등급

| 등급 | 조건 |
|------|------|
| High | n ≥ 50 AND 지역구성 정상 AND temporal ≥ 3 periods |
| Medium | n = 30–49 AND temporal ≥ 2 periods |
| Low | n < 30 OR 단일 지역 > 70% OR single period |

### 5-3. Bias 판정

| Bias | 조건 |
|------|------|
| `source_bias` | 단일 source > 40% |
| `regional_bias` | 단일 지역 > 70% |
| `temporal_bias` | 단일 기간 > 60% |

### 5-4. 수집 종료 조건

**Stop**: n ≥ 50 AND 전 카테고리 ≥ 2 mentions OR category churn < 5% (최근 20 samples)

**Saturation**: churn < 5% AND category coverage ≥ 80%

---

## 6. CLASSIFICATION

### 6-1. 세그먼트 분류

**주요 세그먼트**

| 세그먼트 | 포커스 |
|----------|--------|
| Imaging flagship | 카메라 / 이미지 / 실감 화질 |
| Performance gaming | 게임 / 성능 / 고Hz |
| Premium volume | 프리미엄 대중형 밸런스 |
| Mass volume | 가성비 / 배터리 / 실사용 |

**보조 태그**: Compact / Foldable / Camera-centric / Gaming-centric / Value-centric / China-only / India-only / Global

### 6-2. VOC 카테고리 & 비고 태그

**Display**
`Brightness` / `Outdoor` / `LowGray` / `Color` / `Eyecare` / `PWM` / `Refresh` / `Resolution` / `Bezel`

**Device**
`Battery` / `Charging` / `Camera_Main` / `Camera_Tele` / `Performance` / `Thermal` / `Software` / `Design` / `PriceValue` / `NetworkSignal` / `AudioHaptics`

**비고 태그**
`gap_expectation` / `post_update_improved` / `post_update_worsened` / `variant_difference`

---

## 7. METRICS

### 7-1. 산식 목록

| 지표 | 산식 |
|------|------|
| DSI | Display긍정% − Display부정% − (Display강불만% × 0.5) |
| SEGI | (소구강도 × 20) + 관련부정% + (기대실망% × 1.2) |
| UID | (업후긍정% − 업전긍정%) − (업후부정% − 업전부정%) |
| GEI | 게임긍정% − 게임부정% − (발열강불만% × 0.7) + FPS안정보정 |
| BSI | 배터리긍정% − 배터리부정% + (충전긍정% × 0.3) |
| TRI | 발열부정% + (발열강불만% × 1.5) + 발열측정보정 |
| CSI | 카메라긍정% − 카메라부정% − (기대실망% × 0.5) |

### 7-2. 적용 규칙
- 원천 데이터 우선
- 표본 부족 시 `참고용` 표기
- 지역판 혼합 집계 금지

---

## 8. DASHBOARD SPEC

### 8-1. 섹션 순서 (voc_dashboard_unified.html)

| # | 섹션 | 내용 |
|---|------|------|
| 1 | Header | 모델명·브랜드·세그먼트·출시·시장·한줄결론 |
| 2 | KPI Cards | n / 긍정% / 부정% / DSI / SEGI / (GEI·BSI·TRI·CSI 선택) |
| 3 | Sample Quality Panel | High/Medium/Low / 지역구성% / Saturation / Bias flags / 수집기간 |
| 4 | Launch vs Reality Table | 소구점 / 실제반응 / 정량근거 / 해석 |
| 5 | VOC Category Table | 카테고리 / 언급수 / 긍정 / 부정 / 강불만 / 비고 |
| 6 | Time Trend | Launch / Mid / Mature 3구간 |
| 7 | Spec Table | 디스플레이·해상도·Hz·LTPO·SoC·배터리·충전·카메라·무게·시장 |
| 8 | Coding Sample | max 10행 (원문요약·감성·카테고리·강도·출처·시점) |
| 9 | Insight Box | 디스플레이 인사이트 3개 + 상품기획 시사점 3개 |
| 10 | Formula Note | 사용 지표 산식 |

### 8-2. HTML 제약
- 인라인 CSS 최소화 / 공통 class 재사용
- bar · stacked bar 차트만 허용
- 새 레이아웃 생성 금지 → 기존 템플릿에 데이터 주입만

---

## 9. REFERENCE

### 9-1. Priority Brands
Samsung · Apple · Huawei · Xiaomi · Honor · vivo · OPPO · OnePlus · realme · iQOO

### 9-2. Spec Check Items
디스플레이 크기 / 패널 타입 / 해상도 / LTPO / 주사율 / PWM·디밍 / 피크 밝기 / SoC / 배터리 / 충전 / 카메라 구성 / 무게 / 방수등급

### 9-3. Final Priority (출력 판단 기준)
1. 실제 사용자 반응 (n ≥ 50, 지역분산 확인)
2. 공식 소구점
3. 확인된 스펙
4. 정량 지표 (품질 등급 고려)
5. 디스플레이 해석
6. 상품기획 시사점
