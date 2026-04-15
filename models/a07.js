/* ============================================================
 * VOC Model Data — a07
 * Samsung Galaxy A07 5G | 분석일: 2026.04.15
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['a07'] = {
    name: 'Samsung Galaxy A07 5G',
    brand: 'Samsung',
    segment: 'Entry-level mass volume',
    launch: '2026.01.12 발표 / 2026.01.30 출시',
    market: '글로벌 (인도·동남아 중심)',
    date: '2026.04.15',
    sampleN: 48,
    priceUSD: 199.99,
    sdcSupply: true,
    conclusion: '초저가 5G 대중형. 6000mAh 초대형 배터리로 다중 백업 체감. 6년 OS 지원 강점. LCD 화질 낮음·충전 느림·성능 보통이 가격대 대비 큰 약점. 초저가 시장 가성비 리더로 포지셔닝.',

    kpi: {
      sample: { label: '전체 표본', value: 48, sub: 'Korea 8 / Global 18 / India+SEA 22', color: 'c-neu' },
      pos:    { label: '긍정 비중', value: '56.3%', sub: '27건', color: 'c-pos' },
      neg:    { label: '부정 비중', value: '27.1%', sub: '13건',  color: 'c-neg' },
      neu:    { label: '중립 비중', value: '16.7%', sub: '8건', color: 'c-neu' },
      dsi:    { label: 'DSI', value: '-8.2', sub: 'Display Sentiment', color: 'c-neg', highlight: true },
      bsi:    { label: 'BSI', value: '+72.1', sub: 'Battery Sentiment', color: 'c-pos', highlight: true },
      csi:    { label: 'CSI', value: '+15.3', sub: 'Camera Sentiment', color: 'c-pos' },
      tri:    { label: 'TRI', value: '12.8', sub: 'Thermal Risk', color: 'c-pos' }
    },

    launchTable: [
      { cat: 'Battery', claim: '6000mAh 초대형 배터리 / 120Hz 디스플레이 대비 최적 효율', reality: '사용자 체감 다중 백업 가능. 가벼운 사용 3일 가능. 무거운 사용 2일. 배터리 관리 AI 호평. 이 가격대 배터리는 최고.', quant: '15/16 긍정 (93.8%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Support', claim: '6년 OS + 6년 보안 업데이트', reality: '초저가 시장에서 매우 드문 장기 지원. 사용자 신뢰도 상승. 가치 인식 상승.', quant: '10/10 긍정 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Display', claim: 'LCD 120Hz / 800nit HBM 밝기', reality: '발색 낮음·야외 가시성 떨어짐·색감 바래 보임. AMOLED 대비 저급 느낌. 이 가격대 하한선.', quant: '2/9 긍정 (22.2%)', tag: 'tag-gap', label: 'gap_expectation' },
      { cat: 'Performance', claim: 'MediaTek Dimensity 6300 / 일상 충분 성능', reality: '가볍운 앱은 무난. 게이밍·멀티태스킹 시 버벅임. "그냥 쓸 만한 수준" 평가. 가격대 기준 타당.', quant: '5/7 긍정 (71.4%)', tag: 'tag-part', label: '부분부합' },
      { cat: 'Charging', claim: '25W 충전 / 슈퍼 고속 충전', reality: '실제로는 느림. 1시간 이상 필요. 다른 초저가 폰과 비슷하거나 느림. "초고속"이라 불리기엔 미흡.', quant: '3/8 긍정 (37.5%)', tag: 'tag-gap', label: 'gap_expectation' }
    ],

    global: [
      { cat: 'Battery', n: 8, pos: 8, neg: 0, str: 2, note: '6000mAh 다중 백업 극찬' },
      { cat: 'Support', n: 6, pos: 6, neg: 0, str: 1, note: '6년 OS/보안 극찬' },
      { cat: 'Display', n: 5, pos: 1, neg: 4, str: 1, note: 'LCD 화질 낮음 / 야외 가시성 떨어짐' },
      { cat: 'Performance', n: 4, pos: 3, neg: 1, str: 1, note: '일상 무난 / 게이밍 안 됨' },
      { cat: 'Charging', n: 3, pos: 1, neg: 2, str: 1, note: '25W 느림' },
      { cat: 'Design', n: 3, pos: 2, neg: 1, str: 1, note: '두께·무게 준수' }
    ],

    india_sea: [
      { cat: 'Battery', n: 9, pos: 9, neg: 0, str: 2, note: '6000mAh 다중 백업 극찬' },
      { cat: 'Support', n: 5, pos: 5, neg: 0, str: 1, note: '6년 지원 호평' },
      { cat: 'Display', n: 4, pos: 0, neg: 4, str: 1, note: 'LCD 화질 불만' },
      { cat: 'Camera_Main', n: 3, pos: 3, neg: 0, str: 1, note: '50MP 괜찮음' },
      { cat: 'Performance', n: 2, pos: 1, neg: 1, str: 1, note: '일상 가능 / 게임 안 됨' }
    ],

    korea: [
      { cat: 'Battery', n: 2, pos: 2, neg: 0, str: 1, note: '배터리 우수' },
      { cat: 'PriceValue', n: 2, pos: 1, neg: 1, str: 1, note: '저가 모델' },
      { cat: 'Display', n: 2, pos: 0, neg: 2, str: 1, note: 'LCD 화질 문제' },
      { cat: 'Support', n: 1, pos: 1, neg: 0, str: 1, note: '6년 지원' }
    ],

    combined: [
      { cat: 'Battery', n: 19, pos: 19, neg: 0, str: 2, note: '6000mAh 다중 백업 — 절대 강점' },
      { cat: 'Support', n: 12, pos: 12, neg: 0, str: 1, note: '6년 OS/보안 업데이트 — 초저가 유일 경쟁우위' },
      { cat: 'Display', n: 11, pos: 1, neg: 10, str: 1, note: 'PLS LCD HD+ 화질 낮음 / 야외 가시성 떨어짐' },
      { cat: 'Performance', n: 8, pos: 5, neg: 3, str: 1, note: '일상 무난 / 게이밍·멀티태스킹 부족' },
      { cat: 'Charging', n: 6, pos: 2, neg: 4, str: 1, note: '25W 느림' },
      { cat: 'Camera_Main', n: 4, pos: 3, neg: 1, str: 1, note: '50MP 초저가 기준 경쟁력' },
      { cat: 'Design', n: 3, pos: 2, neg: 1, str: 1, note: '6.7" 큰 화면' },
      { cat: 'PriceValue', n: 3, pos: 2, neg: 1, str: 1, note: '초저가 시장 리더' }
    ],

    trend: [
      { period: '📦 출시 초기 (2026.01)', pos: 18, neg: 9, note: '배터리·장기지원 극찬. LCD 화질·충전속도 불만 수용범위 내. 초저가 타겟층(학생·저소득층·개발국) 만족도 높음', issue: '배터리극찬 / 6년지원호평 / LCD화질감내 / 충전속도불만수용 / 성능기대치낮음', uid: '—', src: '인도·동남아 주도, GSMArena (n=48)' },
      { period: '📅 중기 (2026.02-04)', pos: 9, neg: 4, note: '배터리·지원 강점 지속. LCD 스크린 시간 경과 시 개선감 보고. 초저가 시장 점유율 확대. 경쟁사(Moto, Infinix) 대비 우위 확인', issue: '배터리 강점 지속 / 6년지원 경쟁우위 / LCD 내구성 확인 / 초저가 시장 리더 위치 공고화 / 차기 A08 개발 가속화 시사', uid: '—', src: 'Carrier feedback (India, SEA)' }
    ],

    specs: [
      { key: '디스플레이',    val: '6.7" PLS LCD HD+ 120Hz', note: '720×1600, Infinity-U 노치' },
      { key: '해상도',        val: '720 × 1600 px (HD+)', note: '' },
      { key: '주사율',        val: '1–120Hz', note: 'LTPO 미지원' },
      { key: 'PWM / 조광',    val: '미확인', note: '' },
      { key: '피크 밝기',     val: '800nit (HBM)', note: 'LCD 기준 중상' },
      { key: 'SoC',           val: 'MediaTek Dimensity 6300', note: '2024년 칩셋' },
      { key: 'RAM / 저장',    val: '4GB/6GB/8GB + 64GB/128GB/256GB', note: 'microSD 지원' },
      { key: '배터리',        val: '6000mAh', note: '초저가 최대' },
      { key: '충전',          val: '25W 유선 (선택사항)', note: '약 60분 풀충전' },
      { key: '카메라',        val: '50MP + 2MP(깊이) / 8MP 전면', note: '' },
      { key: 'IP 등급',       val: 'IP54', note: '제한적 방수/방진' },
      { key: '시장',          val: '글로벌 (인도·동남아 주도)', note: '' }
    ],

    coding: [
      { text: '"6000mAh 배터리 덕분에 2일은 쓸 수 있다. 이게 핵심이다"', sent: 'pos', cat: 'Battery', str: '강', src: '인도 커뮤니티', period: 'Launch' },
      { text: '"6년 동안 OS 업데이트가 나온다니 믿기지 않는다. 이 가격에?"', sent: 'pos', cat: 'Support', str: '강', src: 'Reddit', period: 'Launch' },
      { text: '"화면 화질이 떨어진다. LCD라서 색감이 바래 보인다"', sent: 'neg', cat: 'Display', str: '중', src: '동남아 블로그', period: 'Launch' },
      { text: '"야외에서 화면이 안 보인다. 밝기가 부족하다"', sent: 'neg', cat: 'Display', str: '중', src: 'GSMArena', period: 'Launch' },
      { text: '"충전이 1시간 이상 걸린다. 25W인데 빠른 것도 아니다"', sent: 'neg', cat: 'Charging', str: '중', src: '인도 포럼', period: 'Launch' },
      { text: '"게임은 할 수 없다. SNS와 인터넷 정도만 가능하다"', sent: 'neu', cat: 'Performance', str: '중', src: '동남아 유저', period: 'Launch' },
      { text: '"이 가격대로는 배터리가 정말 최고다"', sent: 'pos', cat: 'Battery', str: '중', src: 'YouTube 리뷰', period: 'Launch' },
      { text: '"카메라는 나쁘지 않다. 초저가 폰 치고는 50MP도 있고"', sent: 'pos', cat: 'Camera_Main', str: '중', src: 'Reddit', period: 'Launch' }
    ],

    insight: [
      '🎯 **배터리 절대 강점**: 6000mAh로 다중 백업 가능. 사용자 체감 3일(라이트) ~ 2일(헤비). 초저가 시장에서 경쟁 불가능한 강점. 주된 구매 동기.',
      '🎯 **OS 지원 차별화**: 6년 OS + 6년 보안은 초저가 시장에서 유일. 삼성의 강한 포지셔닝. 신뢰도·선호도 상승의 원동력.',
      '🎯 **디스플레이 약점**: PLS LCD HD+는 그 시대의 저급 화질. 야외 가시성 떨어짐, 색감 바래 보임. 이 가격대에서는 AMOLED 경쟁사(Poco) 대비 약점이지만, 가격대 기준 타당.',
      '🎯 **성능 보통**: MediaTek Dimensity 6300은 일상 무난. 게이밍·멀티태스킹은 버벅임. 가격대 기준 타당한 성능.',
      '🎯 **충전 느림**: 25W는 초저가 표준이나, "초고속 충전"이라 마케팅하기엔 미흡. 1시간 이상 소요.',
      '🎯 **카메라 합리**: 50MP + 2MP 조합은 초저가 기준 가성비. 실사용 품질 중상.',
      '🎯 **지역별 만족도**: 인도·동남아에서는 배터리·지원으로 강세. 한국·글로벌 선진국에서는 디스플레이 저급 느낌으로 평가 낮음. 타겟 시장 명확.',
      '🎯 **상품기획 시사점**: (1) A07은 초저가 리더로 포지셔닝 성공 — 유지 필요 (2) A37/A57과의 포트폴리오 간극 명확 — 차기 A17 신규 세그먼트 검토 (3) LCD → OLED 마이그레이션 — A08+ 부터 OLED 추가 권장 (4) 인도·동남아 시장 집중 — 현지화 기능(eSIM, 5G 특화) 추가'
    ]
};
