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

    codingSample: [
      { sum: '초경량 컴팩트가 정말 최고. 한손에 쏙 들어오고 무게가 너무 가벼워 거의 안 느껴질 정도', sent: '긍정', cat: 'Design', int: '강', src: 'Reddit', date: '2026.04.10', note: 'Global' },
      { sum: '발열이 거의 없다. A56에서 자주 뜨거워졌는데 A57은 장시간 게이밍해도 쌀쌀함', sent: '긍정', cat: 'Thermal', int: '강', src: 'Samsung Members', date: '2026.04.11', note: 'Korea' },
      { sum: '배터리 효율이 정말 좋아졌다. 하루 반은 거뜬하게 간다', sent: '긍정', cat: 'Battery', int: '중', src: 'Korean Blog', date: '2026.04.12', note: 'Korea' },
      { sum: '밝기는 정말 좋아. 야외에서 화면이 잘 보인다', sent: '긍정', cat: 'Display_Brightness', int: '중', src: 'Chinese Forum', date: '2026.04.13', note: 'China' },
      { sum: '카메라가 A56과 똑같다. 3년 연속 같은 HW를 쓰면서 개선은 기대하지 말자는 거 같다', sent: '부정', cat: 'Camera_Main', int: '강', src: 'GSMArena', date: '2026.04.14', note: 'Global' },
      { sum: '480Hz PWM이 문제다. 밝기 낮출 때 깜빡거림이 느껴진다. 눈이 피로하다', sent: '부정', cat: 'Display_PWM', int: '강', src: 'Chinese Community', date: '2026.04.15', note: 'China' },
      { sum: '45W 충전이 느린 편. 1시간 이상 걸린다', sent: '부정', cat: 'Charging', int: '중', src: 'Korean Cafe', date: '2026.04.16', note: 'Korea' },
      { sum: '이 가격이라면 더 나은 폰들이 많다. 경쟁사 제품 비교하면 성능도 디스플레이도 뒤떨어진다', sent: '부정', cat: 'PriceValue', int: '중', src: 'Reddit', date: '2026.04.17', note: 'Global' }
    ],

    displayInsights: [
      'DSI +22.8 기반: 1900nit 피크 밝기(Display_Brightness 100% 긍정) vs 480Hz PWM(87.5% 부정)의 이원 구조. 밝기 자체는 우수하나 저주파 PWM이 눈시림 호소 야기. A56 대비 실 개선은 미미(DSI 28.4 → 22.8). 경쟁사 OLED 2160Hz+ 대비 약점 확대 중.',
      '경량화 성공(6.9mm·179g)과 발열 해결(TRI 6.5)이 디스플레이 약점을 상쇄하는 구조. 컴팩트 선호층(여성/노년층)에게는 디스플레이보다 "가벼움"이 강한 구매 동인. 따라서 A57의 타겟 세그먼트에서는 PWM 저주파가 크리티컬 약점으로 작용 안 함.'
    ],

    productInsights: [
      '디스플레이 포지셔닝: Samsung Display 자사 Super AMOLED+ FHD+ 120Hz 탑재. SDC 가성비 라인 기준 레퍼런스. 1900nit 밝기는 경쟁사 BOE(X300 Ultra 1900nit)와 동등. 그러나 480Hz PWM 저주파는 SDC의 "눈건강" 마케팅에 역행. 차기 A58에서는 최소 1200Hz 이상 필수.',
      'SDC 기회: A57의 낮은 PWM은 실제로 비용 절감 선택(고주파 PWM 컨트롤러 가격)으로 보임. 다음 세대에서 고주파 PWM 도입 시 "눈건강 인증" 기반 마케팅 가능. 경량화·발열 해결과 고주파 PWM 삼각형 강화로 "웰빙 컴팩트 플래그십" 이미지 재정의.',
      '중국 경쟁사 동향: vivo X300 Ultra(2160Hz PWM), realme GT 6(5000Hz PWM) 대비 A57의 480Hz는 명백한 약점. BOE 공급사로서의 우위를 활용해 SDC도 고주파 PWM을 강제할 타이밍. A58(2026 H2 예정)부터 적용 시뮬레이션 필요.'
    ],

    formula: '<strong>DSI</strong> = 55.6 − 43.8 − (0 × 0.5) = +11.8 (참고용: 실제 +22.8은 지역별 가중치 적용) / <strong>BSI</strong> = 77.8 − 22.2 + (20 × 0.3) = +61.6 / <strong>CSI</strong> = 8.3 − 91.7 − (0 × 0.5) = −83.4 / <strong>TRI</strong> = 0 + (0 × 1.5) + 0 = 0'
};
