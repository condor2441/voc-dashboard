/* ============================================================
 * VOC Model Data — vivox300ultra
 * Auto-generated. Do NOT edit manually.
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['vivox300ultra'] = {
    name: 'vivo X300 Ultra',
    brand: 'vivo',
    segment: 'Imaging Flagship',
    launch: '2026.03.30 (중국) / 2026 Q2 (글로벌)',
    market: '중국 + 글로벌',
    date: '2026.04.15',
    sampleN: 59,
    conclusion: 'Zeiss 협업 카메라 성능 우수(CSI +28.8), 2K 디스플레이 야외 가시성 최강(DSI +21.5), 배터리 충분(BSI +24.5). 카메라 모듈 두께와 글로벌 가격 전략 보완 필요.',

    kpi: {
      sample: { label: '전체 표본', value: 48, sub: '중국 25 / 글로벌 23', color: 'c-neu' },
      pos: { label: '긍정 비중', value: '56.3%', sub: '27건', color: 'c-pos' },
      neg: { label: '부정 비중', value: '27.1%', sub: '13건', color: 'c-neg' },
      neu: { label: '중립 비중', value: '16.7%', sub: '8건', color: 'c-neu' },
      dsi: { label: 'DSI', value: '+21.5', sub: 'Display Sentiment', color: 'c-pos', highlight: true },
      csi: { label: 'CSI', value: '+28.8', sub: 'Camera Sentiment', color: 'c-pos', highlight: true },
      bsi: { label: 'BSI', value: '+24.5', sub: 'Battery Sentiment', color: 'c-pos' },
      segi: { label: 'SEGI', value: '+18.2', sub: 'Segment Expectation', color: 'c-pos' }
    },

    launchTable: [
      { cat: 'Display', claim: 'Zeiss Master Color 2K AMOLED, 1946nit 야외, 2160Hz PWM', reality: '2K + 1946nit 조합으로 야외 가시성 극찬. 색감 정확도 우수', quant: '15/17 긍정 (88%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Camera_Main', claim: '200MP Sony LYT-901, f/1.9, 1/1.12" 센서', reality: '저조도 성능 극찬. 노이즈 처리 우수. 알고리즘 간섭 우려 일부', quant: '20/23 긍정 (87%)', tag: 'tag-gap', label: '부분' },
      { cat: 'Camera_Tele', claim: '200MP Samsung HPB 망원 렌즈, 손떨림 보정', reality: '망원 안정화 성능 최고 평가. 4배 줌 우수', quant: '19/19 긍정 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Battery', claim: '6,600-7,000mAh + 100W 유선 충전', reality: '18시간 이상 일상 사용 가능. 100W 충전 빠름', quant: '10/13 긍정 (77%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Design', claim: '8.19mm, Armor glass, IP69', reality: '카메라 모듈 두께 불만. 케이스 호환성 문제', quant: '3/13 긍정 (23%)', tag: 'tag-neg', label: '미달' }
    ],

    global: [
      { cat: 'Camera_Main', n: 12, pos: 11, neg: 1, str: 9, note: '200MP Sony 저조도 극찬' },
      { cat: 'Camera_Tele', n: 10, pos: 10, neg: 0, str: 8, note: '망원 성능 최고' },
      { cat: 'Display_Brightness', n: 8, pos: 7, neg: 1, str: 5, note: '1946nit 야외 최강' },
      { cat: 'Display_Color', n: 6, pos: 5, neg: 1, str: 3, note: 'Zeiss 색감 정확' },
      { cat: 'Battery', n: 7, pos: 5, neg: 2, str: 2, note: '6600mAh 충분' },
      { cat: 'PriceValue', n: 8, pos: 1, neg: 7, str: 4, note: '€600 카메라킷 비쌈' },
      { cat: 'Design', n: 6, pos: 1, neg: 5, str: 3, note: '두께로 불만' },
      { cat: 'Performance', n: 5, pos: 4, neg: 1, str: 2, note: 'SD8 Elite' }
    ],

    china: [
      { cat: 'Display_Brightness', n: 9, pos: 8, neg: 1, str: 6, note: '야외 가시성 우수' },
      { cat: 'Display_Eyecare', n: 7, pos: 7, neg: 0, str: 4, note: '2160Hz PWM 우수' },
      { cat: 'Camera_Main', n: 11, pos: 9, neg: 2, str: 7, note: '저조도 성능 극찬' },
      { cat: 'Camera_Tele', n: 9, pos: 9, neg: 0, str: 6, note: '망원 혁신' },
      { cat: 'Battery', n: 6, pos: 5, neg: 1, str: 2, note: '일상 18시간' },
      { cat: 'Charging', n: 5, pos: 5, neg: 0, str: 2, note: '100W 초고속' },
      { cat: 'Thermal', n: 4, pos: 1, neg: 3, str: 1, note: '고부하 발열' },
      { cat: 'Design', n: 7, pos: 2, neg: 5, str: 3, note: '두께 불편' }
    ],

    combined: [
      { cat: 'Camera_Main', n: 23, pos: 20, neg: 3, str: 16, note: '200MP Sony 저조도 극찬' },
      { cat: 'Camera_Tele', n: 19, pos: 19, neg: 0, str: 14, note: '망원 성능 최고' },
      { cat: 'Display_Brightness', n: 17, pos: 15, neg: 2, str: 11, note: '1946nit 야외 최강' },
      { cat: 'Battery', n: 13, pos: 10, neg: 3, str: 4, note: '6600mAh 충분' },
      { cat: 'Design', n: 13, pos: 3, neg: 10, str: 6, note: '카메라 모듈 두께' },
      { cat: 'Display_Eyecare', n: 7, pos: 7, neg: 0, str: 4, note: '2160Hz PWM' },
      { cat: 'PriceValue', n: 8, pos: 1, neg: 7, str: 4, note: '글로벌 가격' },
      { cat: 'Charging', n: 5, pos: 5, neg: 0, str: 2, note: '100W 충전' }
    ],

    trend: [
      { period: '📦 출시 초기 (2026.03.30~04.07)', pos: 58, neg: 24, note: '기대 높음+카메라 극찬', issue: 'Zeiss 협업 / 200MP 저조도 / 4K120 HDR', uid: '—', src: '知乎, 酷安, 百度贴吧' },
      { period: '📅 사용 누적 (2026.04.08~04.12)', pos: 54, neg: 30, note: '평가 분산+디자인 불만 증가', issue: '알고리즘 간섭 / 두께 불편 / 글로벌 가격', uid: '—', src: 'GSMArena, Reddit, YouTube' },
      { period: '📅 성숙기 (2026.04.13~)', pos: 36, neg: 18, note: '14일 장기 사용 후기 Bilibili 8.6만뷰. 쌍2억 화소 카메라 강점 재확인. 배터리 용량 아쉬움 신규 언급. 발열은 정상 범위 확인', issue: '쌍200MP카메라강점 / 배터리용량아쉬움 / 발열30.7°C정상수준 / 케이스호환문제지속', uid: '—', src: 'Bilibili, 知乎, AnTuTu (n=59)' }
    ],

    specs: [
      { key: '디스플레이', val: '6.8" BOE Q10 Plus AMOLED', note: 'Zeiss Master Color' },
      { key: '해상도', val: '2K (1440×3200)', note: '510ppi' },
      { key: '주사율 / LTPO', val: '144Hz LTPO (8T 백플레인)', note: '적응형' },
      { key: 'PWM / 조광', val: '2160Hz@1-120Hz / DC+PWM', note: '듀얼 디밍' },
      { key: '피크 밝기', val: '1946nit (global) / 4500nit (local)', note: 'Ultra XDR' },
      { key: 'SoC', val: 'Snapdragon 8 Elite Gen 5', note: '4nm' },
      { key: 'RAM / 저장', val: '12GB LPDDR6X / 512GB', note: 'UFS 4.0' },
      { key: '배터리', val: '6,600~7,000 mAh', note: '18시간 일상' },
      { key: '충전', val: '100W 유선 / 무선 없음', note: '<40분 80%' },
      { key: '카메라', val: '200MP Sony(f/1.9)+200MP Samsung(f/2.2)+50MP(f/2.2)', note: '4K120 Dolby' },
      { key: '영상', val: '4K120 Dolby Vision, 10-bit Log', note: 'Pro LUT 지원' },
      { key: '무게 / 두께', val: '~215g / 8.19mm', note: 'Armor glass, IP69' },
      { key: 'OS / 시장', val: 'Android 16 + OriginOS 6', note: '중국 2026.03.30' }
    ],

    displayInsights: [
      '🎯 2K + 1946nit 조합이 야외 가시성 최고 수준. 배터리 효율성 대비 명제 선택',
      '🎯 2160Hz PWM + DC 듀얼 조광으로 전문가 워크플로우 최적화',
      '🎯 Zeiss Master Color 색감 보정 디스플레이 기대 상회'
    ],

    productInsights: [
      '🎯 출시 소구점(Zeiss, 카메라) 실제 평가 일치도 높음. 카메라 리더십 명확',
      '🎯 카메라 모듈 두께(-16%) 사용 만족도 저해. 다음 세대 모듈화 검토 필요',
      '🎯 글로벌 가격 저항감 높음(€600 카메라킷). 프리미엄 전략 또는 가격 재검토 필요'
    ],

    formula: 'DSI=(Display긍정-Display부정-강불만×0.5) | SEGI=(소구강도×20+부정+실망×1.2) | CSI=(카메라긍정-카메라부정-기대불만×0.5) | BSI=(배터리긍정-배터리부정+충전×0.3)',

    codingSample: [
      { sum: '2K AMOLED 1946nit 야외 밝기 완벽. Zeiss 색감 자연스러움', sent: '긍정', cat: 'Display_Brightness', int: '강', src: '知乎', date: '2026.03.31', note: 'China' },
      { sum: '200MP Sony 저조도 성능 뛰어남. 노이즈 적음. 야경 전문가급', sent: '긍정', cat: 'Camera_Main', int: '강', src: '酷安', date: '2026.04.01', note: 'China' },
      { sum: '망원 렌즈 손떨림 보정 우수. 4배 줌 안정적', sent: '긍정', cat: 'Camera_Tele', int: '강', src: '百度贴吧', date: '2026.04.02', note: 'China' },
      { sum: '4K120 Dolby Vision 녹화 인상적. 시네마 같은 색감', sent: '긍정', cat: 'Performance', int: '강', src: '中关村在线', date: '2026.04.01', note: 'China' },
      { sum: '카메라 알고리즘 간섭 심함. 자연스러운 표현 어려움', sent: '부정', cat: 'Camera_Main', int: '중', src: '知乎', date: '2026.04.03', note: 'China' },
      { sum: '카메라 모듈 두껍고 무거움. 케이스 호환 문제', sent: '부정', cat: 'Design', int: '중', src: '酷安', date: '2026.04.02', note: 'China' },
      { sum: '€600 카메라킷 너무 비쌈. 가성비 떨어짐', sent: '부정', cat: 'PriceValue', int: '중', src: 'YouTube', date: '2026.04.04', note: 'Global' },
      { sum: 'Best camera phone of 2026. 200MP main sensor incredible', sent: '긍정', cat: 'Camera_Main', int: '강', src: 'GSMArena', date: '2026.04.01', note: 'Global' },
      { sum: 'Telephoto rivals DSLR lenses. Stabilization exceptional', sent: '긍정', cat: 'Camera_Tele', int: '강', src: 'Reddit', date: '2026.04.02', note: 'Global' },
      { sum: 'Design thickness limits portability. Needs slimmer version', sent: '부정', cat: 'Design', int: '중', src: 'AndroidCentral', date: '2026.04.04', note: 'Global' }
    ]
  };
