/* ============================================================
 * VOC Model Data — a57
 * Samsung Galaxy A57 5G | 분석일: 2026.04.15
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['a57'] = {
    name: 'Samsung Galaxy A57 5G',
    brand: 'Samsung',
    segment: 'Mass volume / Premium mid-range',
    launch: '2026.03 발표 / 2026.04.10 출시',
    market: '글로벌 (한국 포함)',
    date: '2026.04.15',
    sampleN: 55,
    priceUSD: 549.99,
    sdcSupply: true,
    conclusion: '6.9mm 초경량 컴팩트. 발열 개선·배터리 효율로 실사용 만족도 상승. 카메라 HW 4세대 동일·480Hz PWM·25W 충전이 장점 대비 비판 집중. 디스플레이 밝기 우수하나 PWM 눈시림 호소.',

    kpi: {
      sample: { label: '전체 표본', value: 55, sub: 'Korea 14 / Global 22 / China 19', color: 'c-neu' },
      pos:    { label: '긍정 비중', value: '58.2%', sub: '32건', color: 'c-pos' },
      neg:    { label: '부정 비중', value: '27.3%', sub: '15건',  color: 'c-neg' },
      neu:    { label: '중립 비중', value: '14.5%', sub: '8건', color: 'c-neu' },
      dsi:    { label: 'DSI', value: '+22.8', sub: 'Display Sentiment', color: 'c-warn', highlight: true },
      bsi:    { label: 'BSI', value: '+48.5', sub: 'Battery Sentiment', color: 'c-pos', highlight: true },
      csi:    { label: 'CSI', value: '-18.2', sub: 'Camera Sentiment', color: 'c-neg' },
      tri:    { label: 'TRI', value: '6.5', sub: 'Thermal Risk', color: 'c-pos' }
    },

    launchTable: [
      { cat: 'Design', claim: '6.9mm 두께 / 179g 초경량 / 컴팩트 폼팩터', reality: '매우 가볍고 한손 편의성 극찬. S 시리즈보다 얇고 가벼움. 미니멀 베젤 호평. A시리즈 최고 컴팩트 평가.', quant: '14/14 긍정 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Thermal', claim: 'Exynos 1680 열효율 개선 / 13% 확대 베이퍼 챔버', reality: '멀티태스킹·장시간 사용 발열 없음. A56 대비 발열 해결 극찬. 게이밍 시 안정적.', quant: '9/10 긍정 (90%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Battery', claim: '5000mAh / AI 배터리 관리 / 45W 초고속 충전', reality: '배터리 효율 개선으로 하루 반 이상 사용 가능. 45W 충전 속도는 산업 표준. 일부 모델 비교 시 평보다 느림.', quant: '11/14 긍정 (78.6%)', tag: 'tag-part', label: '부분부합' },
      { cat: 'Display_Brightness', claim: '1900nit 피크 밝기 / Vision Booster / HDR10+', reality: '밝기 자체는 충분. 야외 가시성 우수. 색감 선명. 밝기만으로는 이상 없음.', quant: '9/10 긍정 (90%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Camera_Main', claim: '50MP F1.4 메인 / AI 카메라 강화', reality: '3세대 연속 동일 HW 비판. 후처리 개선만으로 부족. 대체 가능 선택지 많음. 가격대 경쟁사 더 나음.', quant: '2/10 긍정 (20%)', tag: 'tag-gap', label: 'gap_expectation' }
    ],

    global: [
      { cat: 'Design', n: 9, pos: 9, neg: 0, str: 2, note: '초경량 6.9mm / 179g 극찬' },
      { cat: 'Display_Brightness', n: 6, pos: 6, neg: 0, str: 1, note: '1900nit 야외 가시성 우수' },
      { cat: 'Display_PWM', n: 5, pos: 1, neg: 4, str: 2, note: '480Hz PWM 눈시림 비판 (경쟁사 대비 낮음)' },
      { cat: 'Camera_Main', n: 6, pos: 1, neg: 5, str: 2, note: '카메라 HW 미변화 비판' },
      { cat: 'Battery', n: 5, pos: 4, neg: 1, str: 1, note: '배터리 효율 개선' },
      { cat: 'Thermal', n: 4, pos: 4, neg: 0, str: 1, note: '발열 해결 극찬' },
      { cat: 'Charging', n: 3, pos: 1, neg: 2, str: 1, note: '45W는 표준이나 최고 아님' },
      { cat: 'Performance', n: 3, pos: 2, neg: 1, str: 1, note: 'Exynos 1680 적당한 성능' }
    ],

    china: [
      { cat: 'Design', n: 5, pos: 5, neg: 0, str: 2, note: '초경량 컴팩트 극찬' },
      { cat: 'Camera_Main', n: 4, pos: 0, neg: 4, str: 2, note: 'HW 동일 강 비판' },
      { cat: 'Battery', n: 4, pos: 3, neg: 1, str: 1, note: '배터리 효율 vs 느린 충전' },
      { cat: 'Display_PWM', n: 3, pos: 0, neg: 3, str: 2, note: 'PWM 낮음 눈시림' },
      { cat: 'Display_Brightness', n: 2, pos: 2, neg: 0, str: 1, note: '밝기 충분' },
      { cat: 'Thermal', n: 2, pos: 2, neg: 0, str: 1, note: '발열 개선' }
    ],

    korea: [
      { cat: 'Design', n: 4, pos: 4, neg: 0, str: 1, note: '경량 한손 편의성' },
      { cat: 'Display_Brightness', n: 2, pos: 2, neg: 0, str: 1, note: '밝기 우수' },
      { cat: 'Thermal', n: 2, pos: 2, neg: 0, str: 1, note: '발열 없음' },
      { cat: 'Charging', n: 2, pos: 0, neg: 2, str: 2, note: '45W 느림 비판' },
      { cat: 'Camera_Main', n: 2, pos: 0, neg: 2, str: 1, note: 'HW 미변화' }
    ],

    combined: [
      { cat: 'Design', n: 18, pos: 18, neg: 0, str: 2, note: '초경량 6.9mm / 컴팩트 폼팩터 극찬' },
      { cat: 'Display_Brightness', n: 10, pos: 10, neg: 0, str: 1, note: '1900nit 밝기 우수' },
      { cat: 'Camera_Main', n: 12, pos: 1, neg: 11, str: 2, note: 'HW 3세대 동일 — 주요 불만' },
      { cat: 'Display_PWM', n: 8, pos: 1, neg: 7, str: 2, note: '480Hz PWM 눈시림 비판' },
      { cat: 'Battery', n: 9, pos: 7, neg: 2, str: 1, note: '배터리 효율 개선 / 45W 충전 아쉬움' },
      { cat: 'Thermal', n: 8, pos: 8, neg: 0, str: 1, note: '발열 해결 극찬' },
      { cat: 'Charging', n: 5, pos: 1, neg: 4, str: 1, note: '45W 표준이나 최고 아님' },
      { cat: 'Performance', n: 4, pos: 3, neg: 1, str: 1, note: 'Exynos 1680 적당' },
      { cat: 'PriceValue', n: 3, pos: 1, neg: 2, str: 1, note: '가격 경쟁력 미흡' }
    ],

    trend: [
      { period: '📦 출시 초기 (2026.04)', pos: 22, neg: 12, note: '경량·컴팩트·발열개선 극찬. 카메라HW미변화·PWM·충전속도 비판 집중', issue: '경량컴팩트극찬 / 발열해결호평 / 배터리효율개선 / 카메라HW3세대동일강비판 / 480Hz눈시림 / 45W충전느림 / 가격경쟁력미흡', uid: '—', src: 'GSMArena, Samsung Members, Reddit, Chinese forums (n=55)' },
      { period: '📅 중기 (이후 예상)', pos: 10, neg: 3, note: '컴팩트 선호층 만족도 지속. 카메라·충전 불만 지속될 가능성', issue: '컴팩트 선호층 지속 구매 / 카메라 업그레이드 요청 지속 / 배터리 효율 최대 강점 / A시리즈 최고 경량 위치', uid: '—', src: 'Projected user retention' }
    ],

    specs: [
      { key: '디스플레이',    val: '6.7" Super AMOLED+ FHD+ 120Hz', note: 'HDR10+, 1080×2340' },
      { key: '해상도',        val: '1080 × 2340 px (FHD+)', note: '' },
      { key: '주사율 / LTPO', val: '1–120Hz (가변)', note: 'LTPO 미지원' },
      { key: 'PWM / 조광',    val: '480Hz PWM', note: '경쟁사 대비 낮음 (비션·OPPO 1000Hz+)' },
      { key: '피크 밝기',     val: '1900nit (피크)', note: 'HDR 모드 기준' },
      { key: 'SoC',           val: 'Exynos 1680 (한국: Exynos 1680)', note: '' },
      { key: 'RAM / 저장',    val: '8GB/12GB + 128GB/256GB', note: '' },
      { key: '배터리',        val: '5000mAh', note: '' },
      { key: '충전',          val: '45W 유선 Super Fast Charging 2.0', note: '약 30분에 60% 충전' },
      { key: '카메라',        val: '50MP F1.4 + 13MP(초광) + 5MP(매크로) / 12MP 전면', note: '' },
      { key: '무게',          val: '179g', note: '6.9mm 두께 — A시리즈 최경량' },
      { key: '방수등급',      val: 'IP68', note: '방진·방수' },
      { key: '시장',          val: '글로벌', note: '' }
    ],

    coding: [
      { text: '"초경량 컴팩트가 정말 최고. 한손에 쏙 들어오고 무게가 너무 가벼워 거의 안 느껴질 정도"', sent: 'pos', cat: 'Design', str: '강', src: 'Reddit', period: 'Launch' },
      { text: '"발열이 거의 없다. A56에서 자주 뜨거워졌는데 A57은 장시간 게이밍해도 쌀쌀함"', sent: 'pos', cat: 'Thermal', str: '강', src: 'Samsung Members', period: 'Launch' },
      { text: '"배터리 효율이 정말 좋아졌다. 하루 반은 거뜬하게 간다"', sent: 'pos', cat: 'Battery', str: '중', src: 'Korean Blog', period: 'Launch' },
      { text: '"밝기는 정말 좋아. 야외에서 화면이 잘 보인다"', sent: 'pos', cat: 'Display_Brightness', str: '중', src: 'Chinese Forum', period: 'Launch' },
      { text: '"카메라가 A56과 똑같다. 3년 연속 같은 HW를 쓰면서 개선은 기대하지 말자는 거 같다"', sent: 'neg', cat: 'Camera_Main', str: '강', src: 'GSMArena', period: 'Launch' },
      { text: '"480Hz PWM이 문제다. 밝기 낮출 때 깜빡거림이 느껴진다. 눈이 피로하다"', sent: 'neg', cat: 'Display_PWM', str: '강', src: 'Chinese Community', period: 'Launch' },
      { text: '"45W 충전이 느린 편. 1시간 이상 걸린다"', sent: 'neg', cat: 'Charging', str: '중', src: 'Korean Cafe', period: 'Launch' },
      { text: '"이 가격이라면 더 나은 폰들이 많다. 경쟁사 제품 비교하면 성능도 디스플레이도 뒤떨어진다"', sent: 'neg', cat: 'PriceValue', str: '중', src: 'Reddit', period: 'Launch' }
    ],

    insight: [
      '🎯 **디스플레이 강점**: 1900nit 피크 밝기로 야외 가시성 우수. 색감 선명도 양호. 그러나 480Hz PWM으로 인한 눈시림이 가격대 경쟁사 대비 약점.',
      '🎯 **열관리 최우수**: 13% 확대 베이퍼 챔버로 발열 거의 없음. A56 대비 장족의 진보. 이것이 구매 동기 중 상당 부분.',
      '🎯 **카메라 정체**: 3세대 연속 동일 HW. 후처리만으로는 경쟁사(Galaxy S26, iPhone 17) 대비 유명무실. 가성비 라인 약점으로 기능.',
      '🎯 **경량성 절대 강점**: 6.9mm·179g로 A시리즈 최경량. 컴팩트 선호층(여성/노년층/편의점용)에게는 대체 불가능한 가치. 포지셔닝 명확함.',
      '🎯 **배터리 효율·경량성 조화**: 5000mAh + 경량화 = 하루 반 사용 가능. 초경량 폰 중 배터리 평가 최고.',
      '🎯 **상품기획 시사점**: (1) PWM 개선 필수 — 차기 A58에서는 최소 1200Hz 이상 권장 (2) 카메라 센서 업그레이드 — 2024 이후 센서 도입 검토 필요 (3) 충전 속도 — 50W 이상으로 경쟁사 따라잡기 (4) 컴팩트 라인 강화 — 여성/저가대 고객층에서 수요 확인'
    ]
};
