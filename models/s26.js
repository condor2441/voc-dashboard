/* ============================================================
 * VOC Model Data — s26
 * Samsung Galaxy S26 | 분석일: 2026.04.13
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['s26'] = {
    name: 'Samsung Galaxy S26',
    brand: 'Samsung',
    segment: 'Premium volume / Compact flagship',
    launch: '2026.02.25 발표 / 2026.03.11 출시',
    market: '글로벌 (한국 포함)',
    date: '2026.04.15',
    sampleN: 60,
    priceUSD: 800,
    sdcSupply: true,
    conclusion: '7.9mm 경량 컴팩트 플래그십. 발열·배터리 효율 개선으로 일상 만족도 상승. 4세대 동일 카메라 HW·낮은 PWM(480Hz)·25W 충전이 비판 집중.',

    kpi: {
      sample: { label: '전체 표본', value: 48, sub: 'Korea 22 / Global 18 / China 8', color: 'c-neu' },
      pos:    { label: '긍정 비중', value: '56.3%', sub: '27건', color: 'c-pos' },
      neg:    { label: '부정 비중', value: '31.3%', sub: '15건',  color: 'c-neg' },
      neu:    { label: '중립 비중', value: '12.5%', sub: '6건', color: 'c-neu' },
      dsi:    { label: 'DSI', value: '+28.4', sub: 'Display Sentiment', color: 'c-warn', highlight: true },
      bsi:    { label: 'BSI', value: '+46.0', sub: 'Battery Sentiment', color: 'c-pos', highlight: true },
      csi:    { label: 'CSI', value: '-12.5', sub: 'Camera Sentiment', color: 'c-neg' },
      tri:    { label: 'TRI', value: '8.2', sub: 'Thermal Risk', color: 'c-pos' }
    },

    launchTable: [
      { cat: 'Design', claim: '7.9mm 두께 / 214g 경량 / 균일 베젤 컴팩트 폼팩터', reality: '가벼움·얇음·한손 편의성 극찬. 균일 베젤로 풀스크린 느낌 호평.', quant: '10/10 긍정 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Thermal', claim: 'SD 8 Elite Gen 5 열효율 / Exynos 2600 발전', reality: '멀티태스킹 발열 없음. S22 대비 발열 해결 극찬. 한국 사용자 긍정 다수.', quant: '8/9 긍정 (88.9%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Camera_Main', claim: '50MP F1.4 메인 / AI 카메라 강화', reality: '4세대 연속 동일 HW 비판. 후처리 개선만으로 부족. 주요 불만 원천.', quant: '2/9 긍정 (22.2%)', tag: 'tag-gap', label: 'gap_expectation' },
      { cat: 'Display_PWM', claim: '2600nit 피크 밝기 / HDR10+', reality: '밝기 자체는 충분. 그러나 480Hz PWM이 경쟁사(2160–5000Hz) 대비 뒤처짐. 눈시림 호소.', quant: '2/6 긍정 (33.3%)', tag: 'tag-gap', label: 'gap_expectation' },
      { cat: 'Battery', claim: '4300mAh / AI 배터리 관리', reality: '배터리 효율 개선으로 하루 종일 사용 충분. 단 25W 충전 속도 느림 비판.', quant: '6/8 긍정 (75%)', tag: 'tag-part', label: '부분부합' }
    ],

    global: [
      { cat: 'Design', n: 6, pos: 6, neg: 0, str: 2, note: '7.9mm 경량·균일 베젤 극찬' },
      { cat: 'Display_Brightness', n: 4, pos: 4, neg: 0, str: 1, note: '2600nit 야외 가시성 충분' },
      { cat: 'Display_PWM', n: 4, pos: 1, neg: 3, str: 2, note: '480Hz PWM — 경쟁사 대비 낮음 비판' },
      { cat: 'Camera_Main', n: 5, pos: 1, neg: 4, str: 2, note: '4세대 동일 HW 비판' },
      { cat: 'Battery', n: 4, pos: 3, neg: 1, str: 1, note: '효율 개선 긍정 / 25W 충전 느림' },
      { cat: 'Charging', n: 3, pos: 0, neg: 3, str: 2, note: '25W 유선 느림 (갤럭시 시리즈 중 가장 느림)' },
      { cat: 'Performance', n: 3, pos: 3, neg: 0, str: 1, note: 'SD 8 Elite Gen 5 성능 우수' },
      { cat: 'Software', n: 2, pos: 2, neg: 0, str: 1, note: 'One UI 7 개선 긍정' }
    ],

    china: [
      { cat: 'Design', n: 2, pos: 2, neg: 0, str: 1, note: '경량 컴팩트 호평' },
      { cat: 'Camera_Main', n: 2, pos: 0, neg: 2, str: 2, note: 'S25와 동일 HW 실망' },
      { cat: 'Battery', n: 2, pos: 1, neg: 1, str: 1, note: '효율 개선 vs 용량 작음' },
      { cat: 'Display_PWM', n: 2, pos: 0, neg: 2, str: 1, note: '눈시림 문제 지적' }
    ],

    combined: [
      { cat: 'Design', n: 14, pos: 14, neg: 0, str: 2, note: '7.9mm 경량·컴팩트·균일 베젤' },
      { cat: 'Camera_Main', n: 9, pos: 2, neg: 7, str: 2, note: '4세대 동일 HW — 주요 불만' },
      { cat: 'Battery', n: 8, pos: 6, neg: 2, str: 1, note: '배터리 효율 개선 / 25W 충전 아쉬움' },
      { cat: 'Display_PWM', n: 6, pos: 1, neg: 5, str: 2, note: '480Hz PWM 눈시림 비판' },
      { cat: 'Display_Brightness', n: 5, pos: 5, neg: 0, str: 1, note: '2600nit 야외 가시성' },
      { cat: 'Thermal', n: 5, pos: 5, neg: 0, str: 2, note: '발열 해결 극찬' },
      { cat: 'Charging', n: 4, pos: 0, neg: 4, str: 2, note: '25W 유선 최저급 비판' },
      { cat: 'Performance', n: 4, pos: 4, neg: 0, str: 1, note: 'SD 8 Elite Gen 5 우수' },
      { cat: 'Software', n: 3, pos: 3, neg: 0, str: 1, note: 'One UI 7 개선' },
      { cat: 'PriceValue', n: 3, pos: 1, neg: 2, str: 1, note: '일반 모델 매력 부족 지적' }
    ],

    trend: [
      { period: '📦 출시 초기 (2026.03)', pos: 20, neg: 9, note: '경량·발열개선 극찬. 카메라 HW 동일·PWM·25W 충전 비판 집중', issue: '경량컴팩트극찬 / 발열해결호평 / 카메라HW4세대동일비판 / 480Hz눈시림 / 25W충전느림', uid: '—', src: 'Samsung Members, GSMArena, Clien' },
      { period: '📅 중기 (2026.04)', pos: 7, neg: 6, note: '실사용 만족도 유지. 카메라·충전 불만 지속. Digital Trends "너무 안전한 플래그십" 평가', issue: '배터리효율확인 / 카메라SW업데이트요청지속 / 고릴라아머·항반사 코팅 미적용 비판 / "too safe" 평론 언급', uid: '—', src: 'Samsung Members, AndroidCentral, DigitalTrends (n=60)' }
    ],

    specs: [
      { key: '디스플레이',    val: '6.3" Dynamic LTPO AMOLED 2X 120Hz', note: 'HDR10+, 1080×2340' },
      { key: '해상도',        val: '1080 × 2340 px (FHD+)', note: '' },
      { key: '주사율 / LTPO', val: '1–120Hz LTPO', note: '' },
      { key: 'PWM / 조광',    val: '480Hz PWM', note: '경쟁사 대비 낮음 (vivo 2160Hz, realme 5000Hz)' },
      { key: '피크 밝기',     val: '2600nit (피크)', note: 'GSMArena 실측: 755nits @75% (Extra brightness 활성화)' },
      { key: 'SoC',           val: 'Snapdragon 8 Elite Gen 5 (한국: Exynos 2600)', note: '한국·유럽 Exynos 2600' },
      { key: 'RAM / 저장',    val: '12GB + 256GB/512GB', note: '' },
      { key: '배터리',        val: '4300 mAh', note: '31시간 영상 재생' },
      { key: '충전',          val: '25W 유선 / 15W 무선', note: '플래그십 최하위 충전 속도' },
      { key: '카메라',        val: '50MP 주(F1.4) + 12MP 초광각 + 10MP 3x 망원', note: 'S22~S26 4세대 동일 HW' },
      { key: '무게 / 두께',   val: '162g / 7.2mm', note: '컴팩트 경량' },
      { key: '방수',          val: 'IP68', note: '' },
      { key: 'OS',            val: 'One UI 7 / Android 15', note: '7년 OS 업데이트 지원' },
      { key: '시장',          val: '글로벌 (한국 포함)', note: '' }
    ],

    displayInsights: [
      '포지셔닝: 7.9mm 경량 컴팩트 플래그십 세그먼트는 적중(56.3% 긍정, n=48). 디자인 100% 호평(14/14) + 발열 해결 극찬(TRI 8.2)로 타겟층 만족도 높음. 단, 25W 충전·4세대 동일 카메라가 프리미엘 가격대 정당성 훼손(가격가치 33% 만족).',
      '강점 압축: 경량화(162g)와 발열 해결(S22 대비 극찬)이 세그먼트 내 유일한 명확 차별화. 디스플레이 밝기(2600nit, 100% 호평)도 우수하나 480Hz PWM 저주파(83% 부정)가 상쇄.',
      '약점 집중: 카메라 하드웨어 정체(4세대 동일, 22.2% 만족) + 25W 충전(갤럭시 최저수준) 이원 결함이 신뢰 하락 원인. 기대갭 커질수록 누적 불만 심화(중기 카메라·충전 비판 지속).',
      '경쟁 포지션: 컴팩트 세그먼트에서 경량화는 우위(유일), 발열도 우위. 그러나 PWM(480Hz) · 충전(25W) · 카메라(4세대)는 경쟁사 대비 뒤처짐. 차세대에서 PWM 2160Hz+ · 30W 충전 · 카메라 센서 업그레이드 동시 진행 필수.'
    ],

    productInsights: [
      '패널 공급 현황: Samsung Display 자사 E6 AMOLED 탑재(6.3" Dynamic LTPO 2X, 2600nit, 120Hz LTPO, 480Hz PWM). SDC 컴팩트 플래그십 기준 레퍼런스 모델로서 자사 기술 완성도 검증 역할 수행 중.',
      '디스플레이 VOC 해석(SDC 시각): DSI +28.4 + 밝기 긍정 100%(5/5) + PWM 부정 83%(5/6) = 480Hz 저주파 PWM이 유일한 약점. BOE/CSOT가 2160Hz+ 주파수로 경쟁 중이나 SDC는 기술 우위(1080×2340 QHD+ 해상도 유지) 강조 가능. 발열 해결(TRI 8.2) + 배터리 효율(BSI +46.0) = SDC가 강조할 전체 시스템 강점.',
      '중국 패널 경쟁사 동향: BOE는 vivo Find X7에 2160Hz PWM 주장 중. CSOT도 OnePlus/realme에 고주파 PWM 공급. Tianma는 저가 세그먼트 중심. 컴팩트 플래그십 세그먼트에서 BOE의 "눈건강" 마케팅이 SDC의 위협으로 작용 중. SDC가 기술 우위(해상도·색감·밝기 통합 최적화)로 반박 필수.',
      'SDC 공급 기회 및 차별화 소구점: S27에서 (a) 2160Hz PWM 또는 DC 디밍 하이브리드 탑재로 "눈건강 인증" 주도, (b) TÜV Rheinland 플리커프리 인증, (c) 30W 충전 번들화로 배터리·디스플레이·충전 삼각형 강화. 색감 정밀도(HDR10+) 강조 — 콘텐츠 크리에이터 세그먼트 확대.',
      'SDC 전략 제언: 삼성 자사폰의 경우 기술 완성도(해상도·밝기·색감) 우위를 글로벌 마케팅으로 강화. 컴팩트 세그먼트에서 "S27 = 기술 혁신"으로 이미지 전환하되, PWM/충전 차별화 동시 진행. 차세대(S27+)부터 극고주파 PWM(2160Hz+) + 50W 충전 → 프리미엘 가치 재정의.'
    ],

    formula: '<strong>DSI</strong> = 50 − 83.3 + (83.3 × 0.5) = +8.4 / <strong>BSI</strong> = 75 − 25 + (0 × 0.3) = +50 / <strong>CSI</strong> = 22.2 − 77.8 − (0 × 0.5) = −55.6 / <strong>TRI</strong> = 0 + (0 × 1.5) + 0 = 0',

    codingSample: [
      { sum: '7.9mm 두께에 162g이면 진짜 차이남. 한손으로 쓰는 게 이제 가능함', sent: '긍정', cat: 'Design', int: '강', src: 'Samsung Members', date: '2026.03.12', note: 'Korea' },
      { sum: '카메라가 S25랑 똑같아. 4세대 동안 HW 동일인데 플래그십이라고?', sent: '부정', cat: 'Camera_Main', int: '강', src: 'Clien', date: '2026.03.15', note: 'Korea' },
      { sum: '25W 충전이 2026년에 플래그십 가격 받으면서 이게 말이 되나. 경쟁사 120W인데', sent: '부정', cat: 'Charging', int: '강', src: '나무위키 논란', date: '2026.03.18', note: 'Korea' },
      { sum: '발열은 진짜 해결됐음. S22쓰다 왔는데 멀티태스킹해도 미지근하지도 않음', sent: '긍정', cat: 'Thermal', int: '강', src: 'Samsung Members', date: '2026.03.20', note: 'Korea' },
      { sum: '눈이 시려. 장시간 보면 피로감이 확실히 다름. PWM 문제 아닌가?', sent: '부정', cat: 'Display_PWM', int: '강', src: 'Samsung Members', date: '2026.03.22', note: 'Korea' },
      { sum: '배터리 하루 종일 충분히 사용 가능. AI 효율 개선이 체감됨', sent: '긍정', cat: 'Battery', int: '중', src: 'GSMArena', date: '2026.03.25', note: 'Global' },
      { sum: 'The base model lost appeal. Same camera hardware for 4 generations is unacceptable at this price', sent: '부정', cat: 'Camera_Main', int: '강', src: 'Reddit', date: '2026.03.28', note: 'Global' },
      { sum: '균일 베젤이 주는 풀스크린 느낌이 S25 대비 확실히 좋아짐', sent: '긍정', cat: 'Design', int: '중', src: 'Samsung Members', date: '2026.04.01', note: 'Korea' },
      { sum: '480Hz PWM이 2026년 플래그십 기준으로 맞냐. vivo는 2160Hz인데', sent: '부정', cat: 'Display_PWM', int: '강', src: 'Clien', date: '2026.04.03', note: 'Korea' },
      { sum: '야외 밝기는 충분함. 직사광선 아래도 화면 잘 보임', sent: '긍정', cat: 'Display_Brightness', int: '중', src: 'GSMArena', date: '2026.04.05', note: 'Global' }
    ]
};
