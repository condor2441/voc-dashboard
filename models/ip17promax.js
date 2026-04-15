/* ============================================================
 * VOC Model Data — ip17promax
 * Apple iPhone 17 Pro Max | 분석일: 2026.04.15
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['ip17promax'] = {
    name: 'Apple iPhone 17 Pro Max',
    brand: 'Apple',
    segment: 'Imaging flagship',
    launch: '2025.09.09 발표 / 2025.09.19 출시',
    market: '글로벌 (한국·미국·유럽·중국)',
    date: '2026.04.15',
    sampleN: 55,
    priceUSD: 1199,
    sdcSupply: true,
    conclusion: '역대 최강 아이폰 배터리·베이퍼챔버 발열 개선 극찬. 3000nit 야외 가시성·Ceramic Shield 2 안티리플렉션 호평. 5x→4x 망원 후퇴·알루미늄 Scratchgate가 최대 약점. AI 기능 기대 이하. 완성도 높은 플래그십이나 카메라 기대실망(CSI -8.0) 존재.',

    kpi: {
      sample: { label: '전체 표본', value: 55, sub: 'KR 14 / GL 28 / CN 13', color: 'c-neu' },
      pos:    { label: '긍정 비중', value: '63.6%', sub: '35건', color: 'c-pos' },
      neg:    { label: '부정 비중', value: '25.5%', sub: '14건', color: 'c-neg' },
      neu:    { label: '중립 비중', value: '10.9%', sub: '6건',  color: 'c-neu' },
      dsi:    { label: 'DSI', value: '+35.0', sub: 'Display Sentiment', color: 'c-pos', highlight: true },
      bsi:    { label: 'BSI', value: '+81.4', sub: 'Battery Sentiment', color: 'c-pos', highlight: true },
      csi:    { label: 'CSI', value: '-8.0',  sub: 'Camera Sentiment',  color: 'c-neg' },
      tri:    { label: 'TRI', value: '5.2',   sub: 'Thermal Risk',      color: 'c-pos' }
    },

    launchTable: [
      { cat: 'Battery',     claim: '39시간 영상 재생 / 역대 최장 아이폰 배터리 / Silicon-Carbon 고밀도 셀',                                      reality: '사용자 전반 극찬. 하루 이상 거뜬히 사용. 16 Pro Max 대비 확실한 체감 개선. NotebookCheck "배터리 기록 경신" 평가.',              quant: '12/14 긍정 (85.7%)', tag: 'tag-ok',   label: '부합' },
      { cat: 'Display',     claim: '3000nit peak 야외 밝기 / Ceramic Shield 2 3x 내스크래치 / 안티리플렉션 코팅',                                reality: '야외 가시성·안티리플렉션 체감 극찬. 실측 manual 804nit (광고 1000nit 미달), peak 2652nit (15% patch). 전반 야외 경험은 우수.',   quant: '7/10 긍정 (70.0%)',  tag: 'tag-part', label: '부분부합' },
      { cat: 'Camera',      claim: '48MP 트리플 카메라 / 8x 광학품질 줌 / 40x 디지털 줌',                                                       reality: '48MP 화질·야간 호평. 디지털 줌 품질 개선. 단 5x→4x 광학 후퇴 강한 불만. 인물 사진 야간모드 삭제 비판.',                         quant: '10/19 긍정 (52.6%)', tag: 'tag-gap',  label: 'gap_expectation' },
      { cat: 'Durability',  claim: 'Aluminum unibody 방열 최적화 / Ceramic Shield 2 전면 강화유리',                                             reality: '"Scratchgate" — 카메라 범프 모서리 아노다이징 벗겨짐 논란. 평면부는 괜찮으나 예각 모서리 취약. 티타늄 대비 내구성 하락 비판.',     quant: '1/6 긍정 (16.7%)',   tag: 'tag-gap',  label: 'gap_expectation' },
      { cat: 'Performance', claim: 'A19 Pro (3nm 2세대) / 베이퍼 챔버 열관리 강화',                                                             reality: '성능·발열 모두 호평. 게임·4K 편집 시 16 Pro Max 대비 발열 확실히 감소. 단 Apple Intelligence(AI) 기대 이하 지적.',              quant: '7/7 긍정 (100%)',    tag: 'tag-part', label: '부분부합' }
    ],

    global: [
      { cat: 'Battery',      n: 7, pos: 6, neg: 1, str: 1, note: '역대 최장 아이폰 배터리 극찬' },
      { cat: 'Display',      n: 6, pos: 4, neg: 2, str: 1, note: '야외 밝기·안티리플렉션 호평 / 실측치 광고 대비 낮음' },
      { cat: 'Camera_Main',  n: 5, pos: 3, neg: 2, str: 1, note: '48MP 화질 호평 / 인물 야간모드 삭제 비판' },
      { cat: 'Camera_Tele',  n: 5, pos: 2, neg: 3, str: 2, note: '5x→4x 망원 후퇴 강한 불만 / 100mm 포트레이트 어색' },
      { cat: 'Performance',  n: 4, pos: 4, neg: 0, str: 1, note: 'A19 Pro 벤치마크 극찬' },
      { cat: 'Design',       n: 4, pos: 1, neg: 3, str: 2, note: 'Scratchgate 카메라 범프 모서리 스크래치' },
      { cat: 'Charging',     n: 4, pos: 2, neg: 2, str: 1, note: '50% 20분 호평 / 경쟁사 대비 40W 느림' },
      { cat: 'Thermal',      n: 3, pos: 3, neg: 0, str: 1, note: '베이퍼 챔버 발열 개선 극찬' }
    ],

    korea: [
      { cat: 'Battery',      n: 4, pos: 4, neg: 0, str: 1, note: '하루 이상 사용 극찬' },
      { cat: 'Display',      n: 4, pos: 3, neg: 1, str: 0, note: '야외 밝기 호평 / PWM 민감자 일부' },
      { cat: 'Camera_Main',  n: 3, pos: 2, neg: 1, str: 0, note: '48MP 전반 호평' },
      { cat: 'Thermal',      n: 3, pos: 3, neg: 0, str: 1, note: '16 Pro Max 대비 발열 확실히 감소' },
      { cat: 'Charging',     n: 2, pos: 0, neg: 2, str: 1, note: '삼성·중국폰 대비 40W 느림' },
      { cat: 'Software',     n: 2, pos: 0, neg: 2, str: 1, note: 'Apple Intelligence 기대 이하' },
      { cat: 'PriceValue',   n: 2, pos: 1, neg: 1, str: 0, note: '프리미엄 가치 인정 / 고가 부담' }
    ],

    china: [
      { cat: 'Camera_Main',  n: 3, pos: 2, neg: 1, str: 0, note: '48MP 화질 호평' },
      { cat: 'Camera_Tele',  n: 3, pos: 1, neg: 2, str: 1, note: '5x→4x 후퇴 불만' },
      { cat: 'Battery',      n: 3, pos: 2, neg: 1, str: 0, note: '배터리 호평 / 충전 느림' },
      { cat: 'Performance',  n: 3, pos: 3, neg: 0, str: 0, note: 'A19 Pro 성능 호평' },
      { cat: 'Design',       n: 2, pos: 0, neg: 2, str: 1, note: 'Scratchgate 알루미늄 내구성' }
    ],

    combined: [
      { cat: 'Battery',      n: 14, pos: 12, neg: 2,  str: 1, note: '역대 최장 아이폰 배터리 — 글로벌 극찬' },
      { cat: 'Camera_Main',  n: 11, pos: 7,  neg: 4,  str: 1, note: '48MP 트리플 호평 / 인물 야간모드 삭제 비판' },
      { cat: 'Camera_Tele',  n: 8,  pos: 3,  neg: 5,  str: 3, note: '5x→4x 망원 후퇴 — 강불만 최고치' },
      { cat: 'Display',      n: 10, pos: 7,  neg: 3,  str: 1, note: '3000nit 야외·안티리플렉션 극찬 / 실측치 광고 대비 괴리' },
      { cat: 'Performance',  n: 7,  pos: 7,  neg: 0,  str: 0, note: 'A19 Pro — 완전 긍정' },
      { cat: 'Thermal',      n: 6,  pos: 6,  neg: 0,  str: 0, note: '베이퍼 챔버 발열 개선 — 완전 극찬' },
      { cat: 'Design',       n: 6,  pos: 1,  neg: 5,  str: 3, note: 'Scratchgate — 알루미늄 카메라 범프 모서리 스크래치 취약' },
      { cat: 'Charging',     n: 6,  pos: 2,  neg: 4,  str: 1, note: '40W 경쟁사 대비 열위 — 충전속도 불만' },
      { cat: 'Software',     n: 3,  pos: 0,  neg: 3,  str: 1, note: 'Apple Intelligence 기대 이하' },
      { cat: 'PriceValue',   n: 3,  pos: 2,  neg: 1,  str: 0, note: '프리미엄 가치 인정 / 고가 부담' }
    ],

    trend: [
      { period: '📦 출시 초기 (2025.09)', pos: 12, neg: 8, note: '5x→4x 망원 후퇴·Scratchgate 동시 폭발. 배터리·베이퍼챔버 극찬. 출시 첫 2주 논란 집중.', issue: '5x→4x 망원 후퇴 / Scratchgate 카메라 범프 / 배터리 극찬 / 발열 개선 / Apple Intelligence 실망', uid: '—', src: 'Reddit, GSMArena, YouTube (n=35)' },
      { period: '📅 중기 (2025.10-12)',   pos: 14, neg: 4, note: 'Scratchgate 논란 수용 단계(케이스 일반화). 배터리·성능 장기 체감 확인. 4x 망원 재평가 시작.', issue: '스크래치 논란 수용 / 배터리 장기 호평 / 4x 100mm 자연스러움 재평가 / AI 지속 실망 / 충전 불만 지속', uid: '—', src: 'Clien, Reddit, Tom\'s Guide (n=14)' },
      { period: '📅 성숙기 (2026.01-04)', pos: 9,  neg: 2, note: '전반 만족도 상승. 48MP 4x 재평가 완료. 베이퍼챔버 장기 효과 검증. 배터리 건강 우려 없음.', issue: '전반 만족 / 4x 재평가 완료 / 충전 속도 지속 불만 / 차기 18 Pro 5x 복귀 기대', uid: '—', src: 'KR 커뮤니티, Global long-term reviews (n=6)' }
    ],

    specs: [
      { key: '디스플레이',    val: '6.9" LTPO Super Retina XDR OLED',           note: 'ProMotion 1–120Hz, Always-On Display' },
      { key: '해상도',        val: '2868 × 1320 px (460 ppi)',                   note: '' },
      { key: '주사율',        val: '1–120Hz LTPO 적응형',                         note: 'ProMotion' },
      { key: 'PWM / 조광',    val: '미확인 (DC dimming 추정)',                    note: '민감자 일부 PWM 보고' },
      { key: '피크 밝기',     val: '3000nit peak / 1600nit HBM / 1000nit typical', note: '실측 peak 2652nit (15% patch), manual 804nit' },
      { key: 'SoC',           val: 'Apple A19 Pro (3nm 2세대)',                   note: '6-core CPU + 6-core GPU' },
      { key: 'RAM / 저장',    val: '8GB + 256GB / 512GB / 1TB',                  note: '' },
      { key: '배터리',        val: '5088mAh (eSIM) / 4823mAh (Dual SIM)',        note: '역대 최대 아이폰 배터리' },
      { key: '충전',          val: '40W 유선 PD3.2 / 25W MagSafe 무선',           note: '50% in 20min (40W 어댑터 필요)' },
      { key: '카메라',        val: '48MP 4x(f/2.8) + 48MP UW(f/2.2) + 48MP Main(f/1.78) / 18MP 전면', note: '5x→4x 망원 변경 (12MP→48MP 고해상도)' },
      { key: '무게',          val: '233g',                                        note: '알루미늄 유니바디 프레임' },
      { key: 'IP 등급',       val: 'IP68 (6m / 30분)',                            note: '' },
      { key: '시장',          val: '글로벌 (한국·미국·유럽·중국)',                  note: '출고가 $1,199 (256GB)' }
    ],

    codingSample: [
      { sum: '아이폰 역사상 배터리 이번이 진짜 최고다. 하루 넘기는 게 기본이 됐다', sent: '긍정', cat: 'Battery',     int: '강', src: '클리앙',    date: '2025.10.12', note: 'Korea' },
      { sum: '야외에서 3000nit 체감이 확실히 된다. 안티리플렉션도 진짜 차이난다', sent: '긍정', cat: 'Display',     int: '강', src: '에펨코리아', date: '2025.09.25', note: 'Korea' },
      { sum: 'Vapor chamber worked. 30min Genshin gaming and barely felt warm. 16 Pro Max ran way hotter', sent: '긍정', cat: 'Thermal',     int: '강', src: 'Reddit',      date: '2025.10.05', note: 'Global' },
      { sum: '48MP 광각 야간 촬영은 진짜 미쳤다. 어두운 환경에서 이 정도 뽑아내는 폰 없다', sent: '긍정', cat: 'Camera_Main', int: '강', src: 'YouTube',    date: '2025.10.15', note: 'Global' },
      { sum: 'Why go from 5x to 4x? Portrait mode at 100mm feels too wide. I miss the compression of 120mm', sent: '부정', cat: 'Camera_Tele', int: '강', src: 'Reddit',      date: '2025.09.21', note: 'Global' },
      { sum: '이틀 만에 카메라 범프 모서리 긁혔다. 티타늄이었으면 이러지 않았을 텐데. 케이스 필수', sent: '부정', cat: 'Design',      int: '강', src: '뽐뿌',      date: '2025.09.23', note: 'Korea' },
      { sum: '40W? 경쟁사는 100W 넘어가는데. 삼성이나 중국폰 대비 충전이 너무 느리다', sent: '부정', cat: 'Charging',    int: '중', src: '다나와',    date: '2025.09.28', note: 'Korea' },
      { sum: '4x 망원인데 48MP이라 디지털 줌 퀄리티가 나쁘지 않다. 5x 그리울 때도 있지만 적응은 됨', sent: '중립', cat: 'Camera_Tele', int: '중', src: 'Reddit',      date: '2025.11.10', note: 'Global' },
      { sum: 'A19 Pro 성능은 M2 맥북 수준인데 iOS에서 쓸 곳이 없다. Apple Intelligence도 기대 이하', sent: '중립', cat: 'Software',    int: '중', src: '클리앙',    date: '2025.10.20', note: 'Korea' },
      { sum: 'Scratchgate is real. The anodized coating chips off the sharp camera plateau edges on day 1', sent: '부정', cat: 'Design',      int: '강', src: 'GSMArena',   date: '2025.09.24', note: 'Global' }
    ],

    displayInsights: [
      'DSI +35.0: LTPO 3000nit peak OLED + Ceramic Shield 2 안티리플렉션이 야외 가시성 체감 대폭 개선. 실측 manual 804nit는 광고 1000nit 미달이나, adaptive HBM + 안티리플렉션 시너지로 "역대 아이폰 최고 야외 화면" 평가. 실측 peak 2652nit(15% patch)는 Galaxy S26 Ultra 실측치와 유사 수준. 경쟁 플래그십 대비 디스플레이 동등 이상 유지.',
      'SDC 공급 현황: iPhone 17 Pro Max OLED 패널 Samsung Display 공급(M14 Gen 2급 추정). LTPO2 기반 1-120Hz, 460ppi 고밀도, 3000nit 스펙. Apple-SDC 장기 공급 관계 유지 — iPhone 18 Pro 연속 공급 가능성 높음. SDC 입장에서 Apple향 고부가 플래그십 패널 매출 안정적. 단, Apple의 수직통합(자체 디스플레이 R&D) 지속 모니터링 필요.',
      '개선 기회: 실측 manual 밝기(804nit)는 중국 Android 플래그십(1400–1600nit manual) 대비 열위. PWM 민감자 이슈도 지속. SDC는 Apple향 차기 패널에 (a) manual 밝기 1200nit 이상 제안, (b) DC dimming 개선, (c) anti-reflection 코팅 내구성 강화 협의 여지 있음. 동시에 경쟁사(BOE·CSOT) Apple 패널 공급 진입 시도 모니터링 필수.'
    ],

    productInsights: [
      '5x→4x 망원 후퇴의 시사점 (CSI -8.0): Apple이 48MP 4x(100mm) 선택한 배경은 더 큰 센서+해상도 우선 전략. 그러나 사용자 기대 갭 발생. Samsung Galaxy S26 Ultra는 200MP 망원 유지로 차별화. SDC 기획 시, 카메라 소구점 변경이 전체 UX 만족도(→디스플레이 재평가)에 간접 영향 — 통합 UX 관점 모니터링 필요.',
      'Scratchgate 학습: 티타늄→알루미늄 전환의 내구성 논란. 방열 개선(베이퍼챔버)을 위해 알루미늄 채택했으나 카메라 범프 예각 모서리 아노다이징 취약점 노출. SDC 공급 패널의 Ceramic Shield 설계와 하우징 소재 변경은 연동됨 — 차기 iPhone 소재 전략(티타늄 복귀 vs 알루미늄 유지) 모니터링 필요.',
      'AI 실망 → 차기 소구점 전략: Apple Intelligence 기대 미달이 "성능 활용처 없음" VOC로 연결. iPhone 18 Pro에서 온디바이스 AI 업그레이드 집중 예상. AI/AR 연동 고성능 디스플레이(HDR 정확도·색영역·레이턴시) 수요 증가 전망. SDC는 Apple Glass 전단계(2027+) 디스플레이 R&D 협의 사전 준비 필요.'
    ],

    formula: '<strong>DSI</strong> = 70.0 − 30.0 − (10.0 × 0.5) = +35.0 / <strong>BSI</strong> = 85.7 − 14.3 + (33.3 × 0.3) = +81.4 / <strong>CSI</strong> = 52.6 − 47.4 − (26.3 × 0.5) = −8.0 / <strong>TRI</strong> = 1.8 + (0 × 1.5) + 3.4 = 5.2'
};
