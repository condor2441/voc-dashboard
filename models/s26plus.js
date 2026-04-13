/* ============================================================
 * VOC Model Data — s26plus
 * Auto-generated. Do NOT edit manually.
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['s26plus'] = {
    name: 'Samsung Galaxy S26+',
    brand: 'Samsung',
    segment: 'Premium Volume / Imaging Flagship',
    launch: '2026년 3월 11일 (글로벌)',
    market: '글로벌',
    date: '2026.04.13',
    sampleN: 52,
    conclusion: '2600nits 피크 밝기와 우수한 AI 기능으로 프리미엘 위상 강화, 다만 480Hz 저주파 PWM으로 인한 눈피로 이슈 및 카메라 하드웨어 정체로 가성비 기대 미달',

    kpi: {
      sample: { label: '전체 표본', value: 47, sub: 'China 21 / Global 18 / Korea 8', color: 'c-neu' },
      pos:    { label: '긍정 비중', value: '34%', sub: '16건', color: 'c-pos' },
      neg:    { label: '부정 비중', value: '47%', sub: '22건',  color: 'c-neg' },
      neu:    { label: '중립 비중', value: '19%', sub: '9건', color: 'c-neu' },
      dsi:    { label: 'DSI', value: '0.18', sub: 'Display Sentiment', color: 'c-warn', highlight: true },
      segi:   { label: 'SEGI', value: '-2.1', sub: 'Expectation Gap', color: 'c-neg', highlight: true }
    },

    launchTable: [
      { cat: 'Display_Brightness', claim: '2600nits 피크 밝기 (업계 최강)', reality: '야외 가시성 극찬, 항반사 코팅 개선. 기대 초과.', quant: '13/18 긍정 (72%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Display_PWM', claim: 'Dynamic LTPO AMOLED 2X', reality: '480Hz 저주파 PWM으로 인한 눈피로 불만. 2160Hz+ 경쟁사 대비 후진.', quant: '3/12 긍정 (25%)', tag: 'tag-gap', label: 'gap_expectation' },
      { cat: 'Camera_Main', claim: '50MP f/1.8 + AI 촬영 고도화', reality: 'S25+ 하드웨어 동일, SW 개선만으로 기대치 미달. 가성비 의문.', quant: '6/14 긍정 (43%)', tag: 'tag-gap', label: 'gap_expectation' },
      { cat: 'Charging', claim: '45W 고속충전 돌파', reality: '충전기 별도 구매 필요. 마케팅과 실제 사용자 경험 괴리.', quant: '8/13 긍정 (62%)', tag: 'tag-part', label: '부분부합' },
      { cat: 'PriceValue', claim: '$1,099 프리미엄 가격대 정당화', reality: '카메라 정체 + PWM 약점으로 가격 정당성 의문. 경쟁사 대비 가성비 약함.', quant: '5/17 긍정 (29%)', tag: 'tag-gap', label: 'gap_expectation' }
    ],

    global: [
      { cat: 'Display_Brightness', n: 7, pos: 6, neg: 1, str: 1, note: '2600nits 야외 극찬' },
      { cat: 'Display_Outdoor', n: 5, pos: 5, neg: 0, str: 0, note: '야외 가시성 우수' },
      { cat: 'Display_PWM', n: 5, pos: 1, neg: 4, str: 2, note: '480Hz PWM 눈피로 불만' },
      { cat: 'Camera_Main', n: 6, pos: 3, neg: 3, str: 1, note: '하드웨어 정체 비판' },
      { cat: 'Battery', n: 4, pos: 3, neg: 1, str: 0, note: '4900mAh 효율 개선' },
      { cat: 'Design', n: 3, pos: 2, neg: 0, str: 0, note: '190g 무게감 호평' },
      { cat: 'Thermal', n: 3, pos: 2, neg: 1, str: 1, note: '49.5℃ 게임 발열' },
      { cat: 'PriceValue', n: 6, pos: 1, neg: 5, str: 2, note: '가격 정당성 의문' }
    ],

    china: [
      { cat: 'Display_PWM', n: 7, pos: 2, neg: 5, str: 3, note: '저주파 PWM 눈피로 강한 불만' },
      { cat: 'PriceValue', n: 11, pos: 4, neg: 7, str: 3, note: '7999CNY 과가격 비판' },
      { cat: 'Camera_Main', n: 8, pos: 3, neg: 5, str: 2, note: 'S25+ 동일 하드웨어' },
      { cat: 'Display_Brightness', n: 11, pos: 10, neg: 1, str: 1, note: '3500nits 극찬' },
      { cat: 'Charging', n: 8, pos: 5, neg: 3, str: 2, note: '충전기 별도 구매 불만' },
      { cat: 'Thermal', n: 3, pos: 1, neg: 2, str: 1, note: '게이밍 발열' },
      { cat: 'Battery', n: 3, pos: 2, neg: 1, str: 0, note: '효율 개선 호평' },
      { cat: 'Software', n: 2, pos: 2, neg: 0, str: 0, note: 'One UI 8.5 만족' }
    ],

    combined: [
      { cat: 'Display_PWM', n: 12, pos: 3, neg: 9, str: 3, note: '480Hz 저주파 PWM 눈피로 핵심 불만' },
      { cat: 'PriceValue', n: 17, pos: 5, neg: 12, str: 3, note: '카메라 정체로 가격 정당성 의문' },
      { cat: 'Display_Brightness', n: 18, pos: 16, neg: 2, str: 1, note: '2600nits 피크 밝기 극찬' },
      { cat: 'Camera_Main', n: 14, pos: 6, neg: 8, str: 2, note: '하드웨어 미변경 비판' },
      { cat: 'Charging', n: 13, pos: 8, neg: 5, str: 2, note: '충전기 별도 구매 불만' },
      { cat: 'Display_Outdoor', n: 5, pos: 5, neg: 0, str: 0, note: '야외 가시성 우수' },
      { cat: 'Thermal', n: 6, pos: 3, neg: 3, str: 1, note: '게이밍 발열' },
      { cat: 'Battery', n: 7, pos: 5, neg: 2, str: 0, note: '효율 개선' },
      { cat: 'Design', n: 3, pos: 2, neg: 0, str: 0, note: '190g, Armor Aluminum 2' },
      { cat: 'Software', n: 2, pos: 2, neg: 0, str: 0, note: 'One UI 8.5' }
    ],

    trend: [
      { period: '📦 출시 초기 (3월 11-25일)', pos: 42, neg: 33, note: '높은 기대감 대비 PWM 지적 증가', issue: '2600nits 극찬 / 480Hz PWM 눈피로 발견 / 카메라 정체 지적 / 충전기 미포함 비판', uid: '—', src: '中关村在线, YouTube, GSMArena' },
      { period: '📅 중기 (3월 26-4월 5일)', pos: 28, neg: 44, note: '현실 경험 누적, 부정적 평가 우위 전환', issue: '7999CNY 과가격 합의 / PWM 건강 우려 심화 / 카메라 하드웨어 정체 비판 / 가성비 의문', uid: '—', src: 'Zhihu, 百度贴吧, Reddit' },
      { period: '📅 현재 (4월 6-12일)', pos: 22, neg: 52, note: '부정적 평가 심화, 가성비 글로벌 인식 악화', issue: 'PWM 누적 불만 / 가격 대비 성능 미흡 / 카메라 기대 미달 / 디스플레이 설계 선택 비판', uid: '—', src: 'IT之家, PhoneArena, CNMO' }
    ],

    specs: [
      { key: '디스플레이', val: '6.7" Dynamic LTPO AMOLED 2X', note: 'Vision Booster' },
      { key: '해상도', val: '3120 × 1440 (Quad HD+)', note: '' },
      { key: '주사율', val: '1~120Hz 적응형', note: 'LTPO' },
      { key: '밝기', val: '1000 nits (일반) / 2600 nits (피크)', note: '' },
      { key: 'PWM', val: '480Hz 저주파', note: '눈 편함' },
      { key: '보호', val: 'Gorilla Glass Victus 2 (앞/뒤)', note: '' },
      { key: 'SoC', val: 'Snapdragon 8 Elite Gen 5 / Exynos 2600', note: '지역별' },
      { key: '메모리 / 저장', val: '12GB LPDDR5X / 256GB / 512GB UFS 4.0', note: '' },
      { key: '배터리', val: '4900mAh', note: '소형 용량' },
      { key: '충전', val: '45W 유선 / 20W 무선', note: '충전기 별도 구매' },
      { key: '활용시간', val: '약 16.5시간', note: '중간 수준' },
      { key: '카메라', val: '50MP f/1.8 (메인) + 10MP f/2.4 망원 + 12MP f/2.2 초광각', note: '' },
      { key: '무게 / 방수', val: '190g / IP68 (최대 1.5m, 30분)', note: '' },
      { key: '프레임', val: 'Armor Aluminum 2', note: '' },
      { key: '출시', val: '2026년 3월 11일', note: '글로벌' }
    ],

    displayInsights: [
      '1️⃣ 2600nits 피크 밝기로 야외 가시성 최고 수준 달성. 항반사 코팅 강화로 거울 반사 개선 호평.',
      '2️⃣ 480Hz 저주파 PWM으로 인한 눈피로 문제 심각. 실내 저밝기(70% 사용시간)에서 플리커 민감 집단(1B+ 글로벌) 미흡. 2160Hz+ DC 디밍 경쟁사 대비 기술 후진.',
      '3️⃣ 디스플레이 밝기 강점이 PWM 건강 약점으로 상쇄됨. 프리미엄 세그먼트에서 "밝기 우선, 건강 후순위" 설계 의사결정 사용자 체감 만족도 저해.'
    ],

    productInsights: [
      '1️⃣ 카메라 하드웨어 S25+와 동일 → 소프트웨어/AI 마케팅으로 가격 정당화 실패. $1,099 프리미엘 가격대에서 카메라 "진정한 진화" 필수. 다음 세대 50MP→108MP 센서 또는 혁신적 computational imaging 필수.',
      '2️⃣ 45W 충전기 별도 판매 = 마케팅-상품 괴리의 교과서. "45W 돌파" 홍보 vs. 충전기 미포함 구매 후 불쾌감. 개선안: S26 Plus로 45W 충전기 번들화 (+$150 가격 인상) 하여 "첫 완전한 플래그십" 재포지셔닝.',
      '3️⃣ PWM 플리커는 1B+ 글로벌 편두통군 미충족 시장. OnePlus/Honor/OPPO가 이미 2160Hz+ DC 디밍 주장. Samsung은 S27+에서 (a) 2160Hz+ PWM 또는 DC 디밍 하이브리드, (b) TÜV 플리커 프리 인증, (c) "첫 Hospital-Grade 눈 건강 보호" 브랜딩으로 "성능 플래그십" → "웰니스 플래그십" 재정의 필수.'
    ],

    formula: {
      'DSI': 'Display 긍정% - Display 부정% - (강불만% × 0.5)',
      'SEGI': '(공식 소구 강도 × 20) + 부정% + (기대차% × 1.2)'
    },

    codingSample: [
      { sum: '햇빛 아래서도 화면이 너무 선명하고 밝음. 2600nits 진짜 차이 느껴짐', sent: '긍정', cat: 'Display_Brightness', int: '강', src: 'Zhihu', date: '2026.03.15', note: 'China' },
      { sum: '저주파 PWM 때문에 눈이 아파. 밤에 스크롤할 때 두통 느껴짐. 480Hz는 너무 낮음', sent: '부정', cat: 'Display_PWM', int: '강', src: '知乎', date: '2026.03.14', note: 'China' },
      { sum: '7999원인데 S25+ 카메라 그대로. 이 가격에 카메라 진화 없다는 게 이상함', sent: '부정', cat: 'Camera_Main', int: '강', src: '中关村在线', date: '2026.03.18', note: 'China' },
      { sum: '45W 충전기 단다고 했는데 별도 구매. 이게 무슨 기술 진화냐고 생각', sent: '부정', cat: 'Charging', int: '중', src: 'Sohu', date: '2026.03.20', note: 'China' },
      { sum: '배터리 효율 개선됐나 봐. 이전보다 좀 더 오래 간다는 느낌', sent: '긍정', cat: 'Battery', int: '중', src: '酷安', date: '2026.03.25', note: 'China' },
      { sum: 'Game stress test에서 49.5℃. 냉각은 개선됐지만 여전히 높음', sent: '부정', cat: 'Thermal', int: '중', src: 'PhoneArena', date: '2026.03.28', note: 'Global' },
      { sum: '방문 스크린은 신기. 필름 없이도 프라이버시 지켜짐', sent: '긍정', cat: 'Design', int: '중', src: 'YouTube', date: '2026.03.22', note: 'Global' },
      { sum: 'One UI 8.5 반응성은 최고. 다만 PWM 때문에 아무리 좋아도 소용없음', sent: '중립', cat: 'Software', int: '중', src: 'Reddit', date: '2026.03.16', note: 'Global' },
      { sum: '호노르와 OPPO는 이미 3000Hz 이상 PWM을 쓰는데 Samsung은 480Hz라니', sent: '부정', cat: 'Display_PWM', int: '강', src: 'IT之家', date: '2026.03.24', note: 'China' },
      { sum: '알루미늄 프레임 돌아와서 좋지만 프리미엄 가격대 대비 혁신 부족', sent: '중립', cat: 'PriceValue', int: '중', src: 'GSMArena', date: '2026.04.02', note: 'Global' }
    ]
  };
