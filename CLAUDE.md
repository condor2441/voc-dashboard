# CLAUDE.md

## Mission
스마트폰 사용자 VOC 수집·분석 → 디스플레이/상품기획 인사이트 도출.
출력: **HTML dashboard only** (자유서술 보고서 금지)

⚠️ **CRITICAL**: `voc: 모델명` 실행 시 **voc_dashboard_unified.html에만 추가**. 새 HTML 파일 생성 금지. 모델 데이터는 models 객체에 통합. → VOC_INTEGRATION_PREVENTION_SYSTEM.md 참고

## Core Rules
가상 데이터 금지 / 루머 제외 / 공식 vs 사용자 반응 분리 / CN·KR·GL VOC 분리 / 표본 수(n) 필수 / 점수는 산식 있을 때만 / 출처 불일치→`출처간 상이` / 표본 부족→`커뮤니티 표본 한정`

## Priority Brands
Samsung · Apple · Huawei · Xiaomi · Honor · vivo · OPPO · OnePlus · realme · iQOO

## Source Priority
**Spec**: 공식사이트 > GSMArena > DeviceSpecifications > PhoneArena > Gadgets360 > 91mobiles

**CN VOC (Official)**: OPPO社区 · vivo官网社区 · 小米社区
**CN VOC (Core)**: 酷安 · 百度贴吧 · 中关村在线 · NGA手机研究所
**CN VOC (Sub)**: 知乎 · 微博 · Bilibili · IT之家 · PConline · 什么值得买 · 小红书

**KR VOC (Official)**: Samsung Members · 브랜드 공식 커뮤니티
**KR VOC (Core)**: 네이버 블로그 · 네이버 카페 · 뽐뿌 · 디시인사이드
**KR VOC (Sub)**: 루리웹 · 클리엔 · YouTube Korea

**GL VOC**: Reddit · YouTube comments · GSMArena user comments · Android forums

## Spec Check Items
디스플레이 크기 / 패널 타입 / 해상도 / LTPO / 주사율 / PWM·디밍 / 피크 밝기 / SoC / 배터리 / 충전 / 카메라 구성 / 무게 / 방수등급

## Search Rules
검색 시 `모델명 + [屏幕|亮度|护眼|频闪|刷新率|分辨率|发热|续航|拍照|系统|更新]` 조합 사용.
디스플레이 키워드: 屏幕·亮度·户外可视·护眼·频闪·调光·高刷·分辨率·低亮度·暗部·色彩·边框

## Segment Rules
- **Imaging flagship**: 카메라/이미지/실감 화질
- **Performance gaming**: 게임/성능/고Hz
- **Premium volume**: 프리미엄 대중형 밸런스
- **Mass volume**: 가성비/배터리/실사용

보조 태그: Compact / Foldable / Camera-centric / Gaming-centric / Value-centric / China-only / India-only / Global

## Sampling & Quality Rules
**Sample size**: min n≥30 / rec n≥50 / opt n≥100
**Region split**: CN 40-60% / KR 10-20% / GL 10-20% / min per region n≥5
**Time split**: Launch 0-30d ≥20% / Mid 30-180d ≥40% / Mature 180d+ ≥20%
**Stop**: n≥50 AND all categories ≥2 mentions OR category churn <5% for last 20 samples
**Dedup**: 동일 source 7일내 중복 제거 / 유사도 >90% 병합

**Quality tier**:
- High: n≥50 AND regional split 정상 AND temporal ≥3 periods
- Medium: n=30-49 AND temporal ≥2 periods
- Low: n<30 OR region >70% OR single period

**Bias flags**: source >40%→`source_bias` / region >70%→`regional_bias` / period >60%→`temporal_bias`
**Saturation**: churn <5% AND category coverage ≥80%

**Output limit**: coding sample max 10 rows (pos top3 + neg top3 + mixed top4, 약·중립 제외)

## Workflow
1. **기본정보**: 브랜드/모델/출시/시장/세그먼트/스펙/공식 소구점
2. **Spec DB**: 브랜드·모델명·출시연도·세그먼트·디스플레이·해상도·Hz·LTPO·PWM·밝기·SoC·RAM/Storage·배터리·충전·카메라·무게·시장·특이사항 (가격 제외)
3. **VOC 코딩**: 원문요약 / 감성(긍·중·부) / 카테고리 / 강도(약·중·강) / 출처 / 시점 / 비고
4. **정량 집계**: n / 긍중부 비중 / 카테고리별 언급 수 / 상위 강점·불만 / 초기 vs 최근
5. **해석**: 소구점 vs 체감 갭 / 디스플레이 강·약점 / 화질vs전력·열 구분 / 경쟁사 차별화

## VOC Categories
Display: Brightness / Outdoor / LowGray / Color / Eyecare / PWM / Refresh / Resolution / Bezel
Device: Battery / Charging / Camera_Main / Camera_Tele / Performance / Thermal / Software / Design / PriceValue / NetworkSignal / AudioHaptics

비고 태그: `gap_expectation` / `post_update_improved` / `post_update_worsened` / `variant_difference`

## Derived Metrics (산식 있을 때만)
- **DSI** = Display긍정% - Display부정% - (Display강불만% × 0.5)
- **SEGI** = (소구강도 × 20) + 관련부정% + (기대실망% × 1.2)
- **UID** = (업후긍정% - 업전긍정%) - (업후부정% - 업전부정%)
- **GEI** = 게임긍정% - 게임부정% - (발열강불만% × 0.7) + FPS안정보정
- **BSI** = 배터리긍정% - 배터리부정% + (충전긍정% × 0.3)
- **TRI** = 발열부정% + (발열강불만% × 1.5) + 발열측정보정
- **CSI** = 카메라긍정% - 카메라부정% - (기대실망% × 0.5)

규칙: 원천 데이터 우선 / 표본 작으면 `참고용` / 지역판 혼합 금지

## Dashboard Sections (voc_dashboard_unified.html 내 순서)
1. Header: 모델명·브랜드·세그먼트·출시·시장·한줄결론
2. KPI Cards: n / 긍정% / 부정% / DSI / SEGI / (GEI·BSI·TRI·CSI 선택)
3. Sample Quality Panel: High/Medium/Low / 지역구성% / Saturation 상태 / Bias flags / 수집기간
4. Launch vs Reality Table: 소구점 / 실제반응 / 정량근거 / 해석
5. VOC Category Table: 카테고리 / 언급수 / 긍정 / 부정 / 강불만 / 비고
6. Time Trend: Launch / Mid / Mature 3구간
7. Spec Table: 디스플레이·해상도·Hz·LTPO·SoC·배터리·충전·카메라·무게·시장
8. Coding Sample: max 10 rows (요약·감성·카테고리·강도·출처·시점)
9. Insight Box: 디스플레이 인사이트 3개 + 상품기획 시사점 3개
10. Formula Note: 사용 지표 산식

## HTML Rules
인라인 CSS 최소화 / 공통 class 재사용 / bar·stacked bar만 / 새 레이아웃 금지 / 기존 템플릿에 데이터 주입만

## Commands
- `voc: 제품명` → VOC 분석 + models/{key}.js 업데이트 + spec DB 업데이트
- `voc: all` → 전체 모델 일괄 VOC 재수집 (아래 절차 필수 준수)
- `spec db` → 누적 spec DB 출력
- `출시: 업체명` → 연도별 스마트폰 출시 목록 (태블릿 제외, 모델 수 포함)
- `판정룰` → 세그먼트 분류 기준표
- `명령어` → 명령 리스트

## voc: all 실행 절차
1. `models/_index.js` 읽기 → `MODEL_KEYS` 배열 추출
2. 각 key에 대해 `models/{key}.js` 읽기 → `name` 필드(실제 모델명) 확인
3. TodoWrite로 전체 진행 현황 추적 (pending → in_progress → completed)
4. 모델별 순차 처리 (병렬 금지 — 웹 검색 rate limit):
   a. WebSearch로 최신 VOC 수집 (Search Rules 키워드 조합 사용)
   b. 기존 models/{key}.js 데이터와 비교 → 신규 VOC만 추가
   c. 정량 지표 재산출 (n, 긍중부%, DSI, SEGI 등)
   d. models/{key}.js 덮어쓰기 (window.VOC_MODELS['{key}'] 형식 유지)
5. 전체 완료 후 요약 리포트 출력:
   - 모델별 이전 n vs 업데이트 n
   - 새로 발견된 주요 이슈
   - 업데이트 실패 모델 (검색 결과 없음 등)

**voc: all 규칙**
- 새 HTML 파일 생성 금지 (voc_dashboard_unified.html은 models/*.js 자동 로드)
- 각 models/{key}.js는 기존 포맷(window.VOC_MODELS[key] = {...}) 유지
- 데이터 공백 발생 시 기존 값 보존 (`미확인`으로 덮어쓰기 금지)
- 수집 기간(date 필드)을 오늘 날짜로 갱신

## Final Priority
1. 실제 사용자 반응 (n≥50, 지역분산 확인)
2. 공식 소구점
3. 확인된 스펙
4. 정량 지표 (품질 고려)
5. 디스플레이 해석
6. 상품기획 시사점
