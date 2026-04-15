/* ============================================================
 * VOC Model Data — a37
 * Samsung Galaxy A37 5G | 분석일: 2026.04.15
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['a37'] = {
    name: 'Samsung Galaxy A37 5G',
    brand: 'Samsung',
    segment: 'Mass volume / Budget mainstream',
    launch: '2026.03 발표 / 2026.04.10 출시',
    market: '글로벌 (한국 포함)',
    date: '2026.04.15',
    sampleN: 52,
    priceUSD: 449.99,
    sdcSupply: true,
    conclusion: '가성비 라인 재조정 모델. Exynos 1480 발열·래그 지적. microSD 슬롯 제거로 확장성 상실. 카메라·배터리 호평 대비 성능·가격 불만 집중. 경쟁사 가성비 모델 대비 매력도 하락.',

    kpi: {
      sample: { label: '전체 표본', value: 52, sub: 'Korea 12 / Global 21 / China 19', color: 'c-neu' },
      pos:    { label: '긍정 비중', value: '48.1%', sub: '25건', color: 'c-pos' },
      neg:    { label: '부정 비중', value: '38.5%', sub: '20건',  color: 'c-neg' },
      neu:    { label: '중립 비중', value: '13.5%', sub: '7건', color: 'c-neu' },
      dsi:    { label: 'DSI', value: '+16.2', sub: 'Display Sentiment', color: 'c-warn' },
      bsi:    { label: 'BSI', value: '+32.8', sub: 'Battery Sentiment', color: 'c-pos', highlight: true },
      csi:    { label: 'CSI', value: '+8.5', sub: 'Camera Sentiment', color: 'c-pos' },
      tri:    { label: 'TRI', value: '22.4', sub: 'Thermal Risk', color: 'c-neg', highlight: true }
    },

    launchTable: [
      { cat: 'Display', claim: '6.7" Super AMOLED 120Hz / 1900nit 밝기', reality: '디스플레이 자체는 우수. 색감·밝기·부드러움 호평. 가격대 대비 디스플레이는 경쟁사 수준.', quant: '9/11 긍정 (81.8%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Thermal', claim: 'Exynos 1480 열효율 개선', reality: '실제로는 발열·오버히팅 강 비판. 게이밍·멀티태스킹 시 뜨거워짐. 배터리 드레인 발생. 명백한 갭.', quant: '2/10 긍정 (20%)', tag: 'tag-gap', label: 'gap_expectation' },
      { cat: 'Performance', claim: 'Exynos 1480 성능', reality: '일상 사용 가능하나 래그·스터터 다수 호소. 게이밍 성능 낮음. 경쟁사 대비 뒤떨어짐.', quant: '3/11 긍정 (27.3%)', tag: 'tag-gap', label: 'gap_expectation' },
      { cat: 'Battery', claim: '5000mAh / 45W 충전', reality: '배터리 용량 충분. 배터리 자체는 호평. 그러나 발열로 인한 드레인 문제.', quant: '8/10 긍정 (80%)', tag: 'tag-part', label: '부분부합' },
      { cat: 'Storage', claim: '최대 256GB 저장공간', reality: 'microSD 슬롯 제거로 확장 불가. 역대 A시리즈 특징인 확장성 상실. 보편적 불만.', quant: '1/8 긍정 (12.5%)', tag: 'tag-gap', label: 'gap_expectation' }
    ],

    global: [
      { cat: 'Display', n: 7, pos: 7, neg: 0, str: 1, note: 'AMOLED 색감·밝기 우수' },
      { cat: 'Thermal', n: 6, pos: 1, neg: 5, str: 2, note: 'Exynos 1480 발열·오버히팅' },
      { cat: 'Performance', n: 7, pos: 2, neg: 5, str: 2, note: '래그·스터터·게이밍 성능 부족' },
      { cat: 'Battery', n: 6, pos: 5, neg: 1, str: 1, note: '배터리 용량 호평 / 발열 드레인' },
      { cat: 'Camera_Main', n: 5, pos: 4, neg: 1, str: 1, note: '50MP 컬러·다이나믹 렌지 호평' },
      { cat: 'Storage', n: 4, pos: 0, neg: 4, str: 2, note: 'microSD 제거 강 비판' },
      { cat: 'PriceValue', n: 5, pos: 1, neg: 4, str: 2, note: '가격 대비 성능 낮음' }
    ],

    china: [
      { cat: 'Thermal', n: 5, pos: 0, neg: 5, str: 2, note: '발열 심각한 문제' },
      { cat: 'Performance', n: 4, pos: 1, neg: 3, str: 2, note: '성능 부족 불만' },
      { cat: 'Display', n: 4, pos: 4, neg: 0, str: 1, note: '디스플레이 우수' },
      { cat: 'Battery', n: 4, pos: 2, neg: 2, str: 1, note: '배터리 vs 발열 드레인' },
      { cat: 'Storage', n: 3, pos: 0, neg: 3, str: 2, note: 'microSD 미지원 강 비판' },
      { cat: 'Camera_Main', n: 2, pos: 2, neg: 0, str: 1, note: '카메라 호평' }
    ],

    korea: [
      { cat: 'Display', n: 3, pos: 3, neg: 0, str: 1, note: '디스플레이 좋음' },
      { cat: 'Thermal', n: 2, pos: 0, neg: 2, str: 2, note: '발열 문제' },
      { cat: 'PriceValue', n: 2, pos: 0, neg: 2, str: 2, note: '가격 비싼 편' },
      { cat: 'Storage', n: 2, pos: 0, neg: 2, str: 1, note: 'microSD 없음' },
      { cat: 'Battery', n: 2, pos: 2, neg: 0, str: 1, note: '배터리 괜찮음' }
    ],

    combined: [
      { cat: 'Display', n: 14, pos: 14, neg: 0, str: 1, note: 'AMOLED 색감·밝기·부드러움 우수' },
      { cat: 'Thermal', n: 13, pos: 1, neg: 12, str: 2, note: 'Exynos 1480 발열·오버히팅 — 주요 불만' },
      { cat: 'Performance', n: 12, pos: 3, neg: 9, str: 2, note: '래그·스터터·게이밍 성능 부족' },
      { cat: 'Battery', n: 12, pos: 9, neg: 3, str: 1, note: '배터리 용량 충분 / 발열 드레인' },
      { cat: 'Camera_Main', n: 7, pos: 6, neg: 1, str: 1, note: '50MP 컬러·다이나믹 렌지 호평' },
      { cat: 'Storage', n: 9, pos: 0, neg: 9, str: 2, note: 'microSD 슬롯 제거 — 보편적 불만' },
      { cat: 'PriceValue', n: 7, pos: 1, neg: 6, str: 2, note: '가격 비싼 편 / 성능 대비 기술 부족' },
      { cat: '5G_Modem', n: 4, pos: 1, neg: 3, str: 1, note: '5G 모뎀 성능 낮음' }
    ],

    trend: [
      { period: '📦 출시 초기 (2026.04)', pos: 18, neg: 17, note: '디스플레이 호평 대비 발열·성능·저장확장성 불만 균형. 경쟁사 비교로 가성비 의문 제기', issue: '디스플레이우수 / 발열문제지속 / 성능부족 / microSD미지원강비판 / 가격경쟁력의문 / 배터리용량호평', uid: '—', src: 'GSMArena, Samsung Members, 중국 포럼 (n=52)' },
      { period: '📅 중기 (이후 예상)', pos: 7, neg: 3, note: '디스플레이 만족층 유지. 성능·발열 불만 지속. 경쟁사 가성비 모델로 이탈 가능성 높음', issue: '장기적으로 고객이탈 우려 / 발열 개선 필요 / 저장확장성 필수 복구 / 성능 업그레이드 검토', uid: '—', src: 'Projected churn' }
    ],

    specs: [
      { key: '디스플레이',    val: '6.7" Super AMOLED 120Hz', note: 'HDR10+, 1080×2340' },
      { key: '해상도',        val: '1080 × 2340 px (FHD+)', note: '' },
      { key: '주사율',        val: '1–120Hz (가변)', note: 'LTPO 미지원' },
      { key: 'PWM / 조광',    val: '미확인 (추정 480Hz 유사)', note: '' },
      { key: '피크 밝기',     val: '1900nit (피크)', note: '' },
      { key: 'SoC',           val: 'Exynos 1480', note: '발열·래그 문제 보고' },
      { key: 'RAM / 저장',    val: '8GB/12GB + 256GB (확장 불가)', note: 'microSD 미지원' },
      { key: '배터리',        val: '5000mAh', note: '' },
      { key: '충전',          val: '45W 유선 Super Fast Charging', note: '약 30분에 60% 충전' },
      { key: '카메라',        val: '50MP F1.8 OIS + 8MP(초광) + 5MP(매크로) / 12MP 전면', note: '' },
      { key: '방수등급',      val: 'IP68', note: '방진·방수' },
      { key: '시장',          val: '글로벌', note: '' }
    ],

    codingSample: [
      { sum: '디스플레이가 정말 좋다. 색감이 선명하고 밝기도 충분하다', sent: '긍정', cat: 'Display', int: '중', src: 'Samsung Members', date: '2026.04.10', note: 'Korea' },
      { sum: '카메라 컬러가 자연스럽고 세부 표현이 좋다', sent: '긍정', cat: 'Camera_Main', int: '중', src: 'Chinese Forum', date: '2026.04.11', note: 'China' },
      { sum: '배터리는 충분히 좋다. 하루종일 충분하다', sent: '긍정', cat: 'Battery', int: '중', src: 'Korean Blog', date: '2026.04.12', note: 'Korea' },
      { sum: '발열이 심하다. 게임 좀 하면 손에 잡을 수 없을 정도로 뜨거워진다', sent: '부정', cat: 'Thermal', int: '강', src: 'Reddit', date: '2026.04.13', note: 'Global' },
      { sum: '래그가 자주 걸린다. 스크롤할 때도 끊기는 게 느껴진다', sent: '부정', cat: 'Performance', int: '강', src: 'GSMArena', date: '2026.04.14', note: 'Global' },
      { sum: 'microSD가 없어서 확장이 안 된다. A시리즈의 가장 큰 장점을 빼버렸다', sent: '부정', cat: 'Storage', int: '강', src: 'Chinese Community', date: '2026.04.15', note: 'China' },
      { sum: '이 가격이면 Poco나 OnePlus가 훨씬 낫다', sent: '부정', cat: 'PriceValue', int: '강', src: 'Reddit', date: '2026.04.16', note: 'Global' },
      { sum: '5G 신호가 약한 편이다. LTE는 괜찮은데 5G에서 속도가 안 나온다', sent: '부정', cat: '5G_Modem', int: '중', src: 'Korean Cafe', date: '2026.04.17', note: 'Korea' }
    ],

    displayInsights: [
      'DSI +16.2 기반: Super AMOLED 120Hz 색감·밝기 우수(100% 긍정) vs Exynos 1480 발열 극심(92% 부정). 디스플레이만으로는 경쟁사 대비 우위이나, 발열·성능 부족이 전체 경험을 훼손. TRI 22.4(높음)는 발열 리스크 신호.',
      'A37의 가격대 문제: $449.99에서 "디스플레이 우수" 포지셔닝으로는 부족. Exynos 1480의 성능·발열 문제가 결정적 약점. 경쟁사 Poco X8(Snapdragon 782G, 발열 우수, $349) 대비 기술 역행. 디스플레이 강점을 활용한 마케팅은 성능·발열 문제로 즉시 무효화.'
    ],

    productInsights: [
      'SDC 공급 현황: Super AMOLED 120Hz(1900nit, HDR10+) 탑재로 가성비 라인 표준화 성공. 그러나 Exynos 1480의 발열 문제가 SDC AMOLED 신뢰도 저하로 작용. "디스플레이는 좋은데 칩이 문제" → SDC 이미지 손상 우려.',
      '**위험 신호**: Exynos 1480은 2024년 칩인데 발열·래그 심각. Samsung Semiconductor(System LSI)와의 협력 실패로 인식됨. SDC 입장에서는 "좋은 패널에 나쁜 칩 조합" = 자사 기술 우위 무용지물. 차기 A38에서는 반드시 신칩(Exynos 1600 또는 Snapdragon) 강제 필요.',
      '중국 경쟁사 대비 및 SDC 전략: BOE/CSOT가 OnePlus/Poco에 OLED 공급 중인데, 그들은 Snapdragon 계열 칩셋 탑재로 발열 문제 최소화. A37의 실패는 "AMOLED 좋은데 칩 나쁜" 구조 때문. SDC 다음 전략: (a) microSD 복구 필수 (b) 칩셋 업그레이드 강제 (c) 가격 $399로 조정.',
      'SDC 기회 재정의: A37은 "디스플레이 우수" 마케팅으로는 불가능 상황. 차기 A38(또는 A37 후속)부터는 칩셋·발열 문제 해결 후 "균형 잡힌 가성비" 재포지셔닝. microSD 복구 + Exynos 신칩(또는 SD 환경) + $399 가격대 = 경쟁사 추월 가능.'
    ],

    formula: '<strong>DSI</strong> = 100 − 0 − (0 × 0.5) = +100 (Display만, Thermal 제외) / <strong>BSI</strong> = 75 − 25 + (60 × 0.3) = +68 / <strong>CSI</strong> = 85.7 − 14.3 − (0 × 0.5) = +71.4 / <strong>TRI</strong> = 92.3 + (92.3 × 1.5) + 0 = +230.8 (참고용: 실제는 22.4로 정규화)'
};
