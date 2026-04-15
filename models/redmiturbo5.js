/* ============================================================
 * VOC Model Data — redmiturbo5
 * Auto-generated. Do NOT edit manually.
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['redmiturbo5'] = {
    name: 'Xiaomi Redmi Turbo 5',
    brand: 'Xiaomi',
    segment: 'Performance Gaming',
    launch: '2026년 1월 29일 (중국)',
    market: '중국 + 글로벌',
    date: '2026.04.15',
    sampleN: 86,
    conclusion: '3500nits DC+3840Hz 무깜빡임 디스플레이와 7560mAh+100W 초급속충전으로 게이밍·배터리 성능 최강. 카메라 약점과 극한 게이밍 발열이 단점',

    kpi: {
      sample: { label: '전체 표본', value: 72, sub: 'China 45 / Global 27', color: 'c-neu' },
      pos:    { label: '긍정 비중', value: '68%', sub: '49건', color: 'c-pos' },
      neg:    { label: '부정 비중', value: '16%', sub: '11건',  color: 'c-neg' },
      neu:    { label: '중립 비중', value: '16%', sub: '12건', color: 'c-neu' },
      dsi:    { label: 'DSI', value: '0.80', sub: 'Display Sentiment', color: 'c-pos', highlight: true },
      gei:    { label: 'GEI', value: '0.76', sub: 'Gaming Sentiment', color: 'c-pos', highlight: true },
      bsi:    { label: 'BSI', value: '0.71', sub: 'Battery Sentiment', color: 'c-pos' }
    },

    launchTable: [
      { cat: 'Display_Brightness', claim: '3500nits 피크 + 2000nits 전화면', reality: '정오 햇빛 속 콘텐츠 완벽 가독. 경쟁사 대비 우위 확실.', quant: '8/8 긍정 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Display_Eyecare', claim: 'DC+3840Hz 무깜빡임 + TÜV 3중 인증', reality: '저밝기에서 무깜빡임 달성. 눈피로 현저 감소. 기대 초과.', quant: '6/6 긍정 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Performance', claim: '게이밍 최적화 Dimensity 9300', reality: 'Genshin 60fps 안정, 4W 저전력 유지. 게이밍 성능 우수.', quant: '6/9 긍정 (67%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Battery', claim: '7560mAh + 100W 충전', reality: '2.5일 사용, 30분 충전 가능. 배터리 기대 충족.', quant: '6/6 긍정 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Camera_Main', claim: '50MP IMX882 + AI 고도화', reality: '저광량 환경 노이즈 심함. 8MP 초광각 낡음. 기대 미달.', quant: '2/10 긍정 (20%)', tag: 'tag-gap', label: 'gap_expectation' }
    ],

    global: [
      { cat: 'Display_Brightness', n: 5, pos: 5, neg: 0, str: 1, note: '3500nits 야외 극찬' },
      { cat: 'Battery', n: 6, pos: 5, neg: 1, str: 1, note: '2.5일 배터리 극찬' },
      { cat: 'Display_Eyecare', n: 4, pos: 4, neg: 0, str: 0, note: '무깜빡임 눈피로 감소' },
      { cat: 'Performance', n: 5, pos: 3, neg: 2, str: 0, note: '게이밍 성능 우수' },
      { cat: 'Charging', n: 2, pos: 2, neg: 0, str: 1, note: '100W 초고속충전' },
      { cat: 'Camera_Main', n: 5, pos: 1, neg: 4, str: 1, note: '저광량 노이즈' },
      { cat: 'Thermal', n: 3, pos: 1, neg: 2, str: 1, note: '극한 게이밍 발열' },
      { cat: 'NetworkSignal', n: 1, pos: 0, neg: 1, str: 1, note: '글로벌 ROM 5G 미지원' }
    ],

    china: [
      { cat: 'Display_Brightness', n: 8, pos: 8, neg: 0, str: 1, note: '3500nits 야외 극찬' },
      { cat: 'Display_Eyecare', n: 6, pos: 6, neg: 0, str: 1, note: '무깜빡임 TÜV 인증' },
      { cat: 'Battery', n: 7, pos: 6, neg: 1, str: 1, note: '7560mAh 장시간' },
      { cat: 'Performance', n: 5, pos: 4, neg: 1, str: 1, note: 'Dimensity 9300 우수' },
      { cat: 'Charging', n: 3, pos: 3, neg: 0, str: 0, note: '100W 고속충전' },
      { cat: 'Camera_Main', n: 6, pos: 1, neg: 5, str: 2, note: '저광량 노이즈 불만' },
      { cat: 'Thermal', n: 4, pos: 2, neg: 2, str: 1, note: '게이밍 발열 이슈' },
      { cat: 'PriceValue', n: 4, pos: 4, neg: 0, str: 0, note: '가성비 우수' }
    ],

    combined: [
      { cat: 'Display_Brightness', n: 13, pos: 13, neg: 0, str: 1, note: '3500nits 피크 극찬' },
      { cat: 'Display_Eyecare', n: 10, pos: 10, neg: 0, str: 1, note: '무깜빡임 기술 호평' },
      { cat: 'Battery', n: 13, pos: 11, neg: 2, str: 1, note: '7560mAh 장시간 극찬' },
      { cat: 'Performance', n: 10, pos: 7, neg: 3, str: 1, note: '게이밍 성능 우수' },
      { cat: 'Charging', n: 5, pos: 5, neg: 0, str: 1, note: '100W 초고속충전 극찬' },
      { cat: 'Camera_Main', n: 11, pos: 2, neg: 9, str: 2, note: '저광량 약점 명확' },
      { cat: 'Thermal', n: 7, pos: 3, neg: 4, str: 1, note: '극한 게이밍 발열' },
      { cat: 'PriceValue', n: 4, pos: 4, neg: 0, str: 0, note: '가성비 우수' },
      { cat: 'Display_Outdoor', n: 3, pos: 3, neg: 0, str: 0, note: '야외 가시성 우수' },
      { cat: 'Design', n: 2, pos: 2, neg: 0, str: 0, note: '디자인 개선' }
    ],

    trend: [
      { period: '📦 출시 초기 (1월 29-2월 중순)', pos: 72, neg: 14, note: '높은 기대감, 디스플레이 극찬', issue: '3500nits 극찬 / 무깜빡임 호평 / 배터리 극찬 / 게이밍 성능 우수', uid: '—', src: '小米社区, 知乎, YouTube' },
      { period: '📅 중기 (2월 중순-3월 초)', pos: 67, neg: 18, note: '카메라·발열 이슈 부상', issue: '카메라 저광량 약점 지적 / 극한 게이밍 발열 / 냉각 케이스 권장 / 배터리는 지속 호평', uid: '—', src: '酷安, GSMArena, 中关村在线' },
      { period: '📅 성숙기 (2026.03~04)', pos: 65, neg: 20, note: '카메라 약점 지속, 배터리 강점 유지', issue: '카메라 개선 필수 / 발열 극한 상황 명확 / 배터리·디스플레이 강점 입증 / 가성비 우위', uid: '—', src: '百度贴吧, Reddit, IT之家' }
    ],

    specs: [
      { key: '디스플레이', val: '6.67" 1.5K AMOLED', note: '460ppi' },
      { key: '해상도', val: '1440 × 3200', note: '' },
      { key: '주사율', val: '120Hz 적응형', note: 'LTPO' },
      { key: '밝기', val: '1000 nits (일반) / 3500 nits (피크) / 2000 nits (전화면)', note: '' },
      { key: 'PWM / 조광', val: 'DC + 3840Hz PWM 혼합', note: 'TÜV 3중 인증' },
      { key: 'SoC', val: 'MediaTek Dimensity 9300 Ultra', note: '' },
      { key: '메모리 / 저장', val: '12GB / 16GB + 256GB / 512GB UFS 4.0', note: '' },
      { key: '배터리', val: '7560mAh', note: '초대용량' },
      { key: '충전', val: '100W 유선 (30분 완충) / 50W 무선', note: '' },
      { key: '냉각', val: '7500mm² 증기실 냉각', note: '69mA/℃' },
      { key: '카메라', val: '50MP IMX882 f/1.6 + 8MP 초광각 + 2MP 매크로', note: '' },
      { key: '무게 / 방수', val: '약 217g / IP68 (최대 1.5m, 30분)', note: '' },
      { key: '5G', val: '중국 ROM 전국 5G / 글로벌 ROM 4G', note: '' },
      { key: '출시', val: '2026년 1월 29일', note: '중국' }
    ],

    displayInsights: [
      '배터리: BSI 0.71 · 7560mAh 초대용량 · 2.5일 배터리 지속력 극찬 · 100W 30분 완충 · 50W 무선 · 배터리 강점 명확(긍정 85%).',
      '게이밍: GEI 0.76 · Dimensity 9300 게이밍 성능 우수 · Genshin 60fps 안정 · 극한 고화질 게이밍 시 49.9°C 도달. 냉각 케이스 권장 사전 안내 필수.',
      '카메라: 약점 명확 · 50MP IMX882 저광량 노이즈 심함 · 8MP 초광각 "낡음" 평가(neg 82%) · 카메라만 유일 부정 이슈. 다음 세대 64MP 초광각 + 망원렌즈 추가.',
      '가격: 가성비 극강(긍정 100%) · Dimensity 9300 + 7560mAh + 3500nit 스펙 대비 가격 경쟁력 업계 최우수.',
      'SoC: MediaTek Dimensity 9300 Ultra · 게이밍 성능 우수 · Genshin 60fps 안정 · 저전력(4W) 특징 · 차세대 AI 성능 강화 기대.'
    ],

    productInsights: [
      '패널 공급 현황: 공급사 미공개(BOE/CSOT 추정). 6.67" 1.5K AMOLED·460ppi·120Hz LTPO·3500nit 피크·2000nit 전화면·DC + 3840Hz PWM 혼합·TÜV 3중 인증. Dimensity 9300 Ultra 탑재. SDC 미공급 → 고성능 가성비 세그먼트 신규 진입 기회. 극한 밝기 요구는 iQOO/realme 대비 낮으나 무깜빡임 기술 강조.',
      '디스플레이 VOC 해석(SDC 시각): DSI 0.80(양호~높음) · 3500nit 극밝음 100% 긍정(n=13/13) · 무깜빡임 기술 100% 긍정(n=10/10 Display_Eyecare) = 가성비 세그먼트 디스플레이 호평 극우수. 저밝기 무깜빡임(DC+3840Hz PWM) 기술이 차별화 핵심. 그러나 n=72 중 중국편중(63%) · 글로벌 VOC 상대적 낮음(n=27) → 글로벌 신뢰성 데이터 확대 필요. 극한 게이밍 발열(49.9°C) = 디스플레이 저전력 기술 가치 높음.',
      '중국 패널 경쟁사 동향: BOE·CSOT의 3000-4000nit 가성비 세그먼트 주력. Visionox·Tianma의 고주파 PWM(3000Hz+) 보급화. 무깜빡임 인증(TÜV) 경합 심화. SDC "초고주파 PWM(3840Hz+) + 극저밝기(1nit 이하) + DC 하이브리드" 조합이 차별화 가능.',
      'SDC 공급 기회 및 차별화: Redmi Turbo 시리즈 차기 모델(Turbo 6 예상 2026년 하반) 수주 전략: (1) 3500nit 유지 시 "저밝기 무깜빡임(0.5nit) + 초고주파 PWM(4000Hz 이상)" 극대화, (2) 120Hz LTPO 저전력 최적화로 Dimensity 극한 성능 환경에서 배터리 효율 15~20% 개선, (3) 중국·글로벌 시장별 맞춤형 튜닝(글로벌은 아이케어 강조). 가성비 게이밍 최대 수량 세그먼트.',
      'SDC 전략 제언: Redmi Turbo는 "성능 최강 + 배터리 극대 + 게이밍 최적화" 가성비 플래그십 포지셔닝 → 디스플레이는 "발열 환경 저전력 + 무깜빡임 안정성" 강점 소구로 차별화. Dimensity 9300 게이밍 성능 극한 환경(49.9°C 도달)에서 SDC의 "저전력 LTPO + 고주파 PWM" 기술이 장시간 안정성 보장. BOE/CSOT 공급 구조 중 SDC "가성비 세그먼트 아이케어 기술 선도" 포지셔닝으로 수주 확률 높음 → 중국 게이밍폰 최대 수량 카테고리 공략.'
    ],

    formula: {
      'DSI': 'Display 긍정% - Display 부정% - (강불만% × 0.5)',
      'GEI': '게임 긍정% - 게임 부정% - (발열 강불만% × 0.7)',
      'BSI': '배터리 긍정% - 배터리 부정% + (충전 긍정% × 0.3)'
    },

    codingSample: [
      { sum: '태양 아래서도 화면이 완벽히 읽혀. 3500nits 진짜 필요함을 느껴', sent: '긍정', cat: 'Display_Brightness', int: '강', src: '酷安', date: '2026.02.05', note: 'China' },
      { sum: '밤에 어두운 모드에서 눈이 아프지 않음. 무깜빡임 기술이 진짜 차이 나는구나', sent: '긍정', cat: 'Display_Eyecare', int: '강', src: '小米社区', date: '2026.02.08', note: 'China' },
      { sum: '2.5일 배터리. 정말 오래 간다. 게이밍을 많이 해도 부족하지 않음', sent: '긍정', cat: 'Battery', int: '강', src: '知乎', date: '2026.02.12', note: 'China' },
      { sum: '100W 충전으로 30분이면 거의 다 찼다. 급할 때 진짜 좋음', sent: '긍정', cat: 'Charging', int: '중', src: '百度贴吧', date: '2026.02.15', note: 'China' },
      { sum: 'Genshin Impact 60fps 안정적으로 유지. 게이밍폰으로 최고의 선택', sent: '긍정', cat: 'Performance', int: '중', src: 'YouTube', date: '2026.02.18', note: 'Global' },
      { sum: '저광량 환경에서 카메라 노이즈가 심함. 이건 진짜 아쉬운 부분', sent: '부정', cat: 'Camera_Main', int: '중', src: '中关村在线', date: '2026.02.20', note: 'China' },
      { sum: '극한 게이밍 1시간 후 49.9도. 뜨겁지는 않지만 냉각 케이스 권장', sent: '중립', cat: 'Thermal', int: '중', src: 'GSMArena', date: '2026.02.25', note: 'Global' },
      { sum: '초광각 8MP는 정말 낡았음. 다음 세대는 반드시 업그레이드 필요', sent: '부정', cat: 'Camera_Main', int: '강', src: '酷安', date: '2026.03.02', note: 'China' },
      { sum: 'Dimensity 9300으로 모든 게임이 원활함. 성능 부분은 불만 없음', sent: '긍정', cat: 'Performance', int: '중', src: 'Reddit', date: '2026.03.05', note: 'Global' },
      { sum: '이 가격대에 이 성능이면 진짜 가성비 최고다. Redmi가 맞춤형 게이밍폰', sent: '긍정', cat: 'PriceValue', int: '강', src: 'IT之家', date: '2026.03.08', note: 'China' }
    ]
  };
