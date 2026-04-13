/* ============================================================
 * VOC Model Data — ip17pro
 * Auto-generated. Do NOT edit manually.
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['ip17pro'] = {
    name: 'Apple iPhone 17 Pro',
    brand: 'Apple',
    segment: 'Premium Volume',
    launch: '2025년 9월 19일',
    market: '글로벌',
    date: '2026.04.13',
    sampleN: 97,
    conclusion: '디스플레이 밝기 및 열 관리 강화로 일상 사용성 개선, 카메라 다중화로 고급 촬영 경험 제공',

    kpi: {
      sample: { label: '전체 표본', value: 87, sub: 'Global 45 / China 35 / Korea 7', color: 'c-neu' },
      pos:    { label: '긍정 비중', value: '71%', sub: '62건', color: 'c-pos' },
      neg:    { label: '부정 비중', value: '18%', sub: '16건',  color: 'c-neg' },
      neu:    { label: '중립 비중', value: '11%', sub: '9건', color: 'c-neu' },
      dsi:    { label: 'DSI', value: '0.62', sub: 'Display Sentiment', color: 'c-pos', highlight: true },
      tri:    { label: 'TRI', value: '0.15', sub: 'Thermal Sentiment', color: 'c-pos', highlight: true },
      csi:    { label: 'CSI', value: '0.58', sub: 'Camera Sentiment', color: 'c-pos' }
    },

    launchTable: [
      { cat: 'Display_Brightness', claim: '3000nits 야외 피크 밝기 (최강)', reality: '야외 가시성 기대 초과 평가. 항반사 코팅 호평.', quant: '18/21 긍정 (88%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Thermal', claim: '증기실 냉각 + 알루미늄 유니바디', reality: '게임 중 발열 40% 감소, 냉각 예상 초과.', quant: '17/18 긍정 (94%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Camera_Main', claim: '48MP 트리플 + 8배 디지털 줌', reality: '야경·망원 촬영 품질 우수. 색감 자연스러움.', quant: '19/25 긍정 (76%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Battery', claim: '33시간 배터리 (비디오 기준)', reality: '하루 종일 사용 가능. 헤비유저는 부족.', quant: '15/22 긍정 (68%)', tag: 'tag-part', label: '부분부합' },
      { cat: 'PriceValue', claim: '프리미엄 Pro 가치 정당화', reality: '기본형과 차별성 약함. 가성비 논쟁.', quant: '13/19 긍정 (68%)', tag: 'tag-gap', label: 'gap_expectation' }
    ],

    global: [
      { cat: 'Display_Outdoor', n: 6, pos: 5, neg: 1, str: 1, note: '3000nits 야외 가시성 극찬' },
      { cat: 'Display_Brightness', n: 5, pos: 4, neg: 1, str: 0, note: '1000nits 일반 화면 밝기 충분' },
      { cat: 'Thermal', n: 5, pos: 5, neg: 0, str: 1, note: '증기실 냉각 효과 우수' },
      { cat: 'Camera_Main', n: 7, pos: 6, neg: 1, str: 1, note: '48MP 카메라 품질 우수' },
      { cat: 'Performance', n: 4, pos: 4, neg: 0, str: 0, note: 'A19 Pro 성능 충분' },
      { cat: 'Design', n: 5, pos: 4, neg: 1, str: 0, note: '알루미늄 복귀 호평' },
      { cat: 'PriceValue', n: 6, pos: 4, neg: 2, str: 1, note: '프리미엄 가격 의문' },
      { cat: 'Battery', n: 7, pos: 4, neg: 2, str: 1, note: '하루 사용 가능' }
    ],

    china: [
      { cat: 'Display_Outdoor', n: 6, pos: 5, neg: 0, str: 1, note: '3000nits 야외 극찬' },
      { cat: 'Display_Brightness', n: 4, pos: 4, neg: 0, str: 1, note: '항반사 코팅 개선' },
      { cat: 'Thermal', n: 5, pos: 4, neg: 0, str: 0, note: '냉각 성능 우수' },
      { cat: 'Camera_Tele', n: 6, pos: 5, neg: 1, str: 0, note: '8배 줌 화질 우수' },
      { cat: 'Performance', n: 3, pos: 3, neg: 0, str: 1, note: '게임 성능 우수' },
      { cat: 'Battery', n: 5, pos: 3, neg: 2, str: 1, note: '사용 패턴에 따라 편차' },
      { cat: 'Display_Eyecare', n: 3, pos: 3, neg: 0, str: 0, note: '저주파 PWM 조광' },
      { cat: 'PriceValue', n: 3, pos: 2, neg: 1, str: 1, note: '가성비 의문 지속' }
    ],

    combined: [
      { cat: 'Display_Outdoor', n: 13, pos: 10, neg: 1, str: 1, note: '3000nits 야외 최강 평가' },
      { cat: 'Display_Brightness', n: 10, pos: 8, neg: 1, str: 0, note: '밝기 충분, 항반사 개선' },
      { cat: 'Thermal', n: 11, pos: 9, neg: 1, str: 1, note: '증기실 냉각 효과 우수' },
      { cat: 'Camera_Main', n: 8, pos: 5, neg: 2, str: 0, note: '48MP 카메라 품질 우수' },
      { cat: 'Camera_Tele', n: 7, pos: 5, neg: 1, str: 0, note: '8배 줌 화질 우수' },
      { cat: 'Performance', n: 8, pos: 7, neg: 1, str: 1, note: 'A19 Pro 충분' },
      { cat: 'Battery', n: 13, pos: 6, neg: 5, str: 1, note: '사용 패턴에 따라 편차' },
      { cat: 'Design', n: 5, pos: 4, neg: 1, str: 0, note: '알루미늄 복귀' },
      { cat: 'PriceValue', n: 9, pos: 6, neg: 3, str: 1, note: '가격 프리미엄 의문' },
      { cat: 'Display_Eyecare', n: 3, pos: 2, neg: 0, str: 0, note: '저주파 PWM' }
    ],

    trend: [
      { period: '📦 출시 초기 (9-10월)', pos: 75, neg: 14, note: '높은 기대감, 가격 논쟁 시작', issue: '3000nits 야외 극찬 / 냉각 효과 우수 / 카메라 품질 호평 / 가격 정당성 의문', uid: '—', src: 'Reddit, GSMArena, YouTube' },
      { period: '📅 중기 (11-1월)', pos: 70, neg: 18, note: '배터리 부족감 표출, 냉각 호평', issue: '배터리 지속성 불만 / 냉각 성능 입증 / 카메라 기대치 충족 / 가성비 논쟁 확대', uid: '—', src: 'Zhihu, MacRumors, 中关村在线' },
      { period: '📅 현재 (2-4월)', pos: 68, neg: 20, note: '현실적 평가로 안정화, 가성비 논쟁 지속', issue: '배터리 세그먼트별 편차 / 냉각 강점 확정 / 카메라 우수성 지속 / 프리미엘 가격 논쟁 심화', uid: '—', src: 'Apple Community, PhoneArena, Reddit' }
    ],

    specs: [
      { key: '디스플레이', val: '6.3" AMOLED, 2622×1206 (460 ppi)', note: 'Super Retina XDR' },
      { key: '주사율 / 적응형', val: '1~120Hz ProMotion', note: '가변 주사율' },
      { key: '밝기', val: '1000 nits (일반) / 1600 nits (HDR) / 3000 nits (야외) / 1 nit 최소', note: '항반사 코팅' },
      { key: 'PWM / 조광', val: '저주파 PWM', note: '눈 피로 감소' },
      { key: 'SoC', val: 'Apple A19 Pro (4nm)', note: '최신 프로세서' },
      { key: '메모리 / 저장', val: '8GB RAM / 256GB / 512GB / 1TB', note: '' },
      { key: '배터리', val: '3500 mAh (추정)', note: '33시간 비디오 재생' },
      { key: '충전', val: '40W 유선 (20분 50%) / 25W MagSafe 무선', note: '' },
      { key: '카메라', val: '48MP 광각 + 12MP 초광각 + 12MP 5배망원', note: '8배 디지털 줌' },
      { key: '열관리', val: '증기실 냉각 + 알루미늄 유니바디', note: '' },
      { key: '무게 / 두께', val: '약 201g / 8.5mm', note: '' },
      { key: '방수 / 방진', val: 'IP69 (최대 6m, 30분)', note: '' },
      { key: '출시', val: '2025년 9월 19일', note: '글로벌' }
    ],

    displayInsights: [
      '1️⃣ 3000nits 피크 밝기로 야외 가시성 최고 수준. 항반사 코팅 강화로 거울 반사 개선',
      '2️⃣ 저주파 PWM 조광 + 1nit 최소 밝기로 야간 사용 시 눈 피로 현저히 감소',
      '3️⃣ 1~120Hz ProMotion으로 스크롤·게임 응답성 우수. 배터리 효율도 개선'
    ],

    productInsights: [
      '1️⃣ 기본형 iPhone 17과의 차별화 부족 (디스플레이 동일). Pro 세그먼트 가치 재정의 필요',
      '2️⃣ 증기실 냉각 + 알루미늄 소재 조합이 경험적 만족도 제고. 전 라인업 확대 검토',
      '3️⃣ 배터리는 일반 사용자는 만족, 헤비유저는 부족. 세그먼트별 용량 차별화 권고'
    ],

    formula: {
      'DSI': 'Display 긍정% - Display 부정% - (강불만% × 0.5)',
      'TRI': '열관리 부정% + (강불만% × 1.5)',
      'CSI': '카메라 긍정% - 카메라 부정% - (기대차% × 0.5)'
    },

    codingSample: [
      { sum: '강한 햇빛 아래서도 화면이 선명하게 보여서 좋음', sent: '긍정', cat: 'Display_Outdoor', int: '강', src: 'Reddit', date: '2026.03.15', note: 'Global' },
      { sum: '게임 중 발열이 거의 없어서 놀람. 이전 세대보다 훨씬 시원함', sent: '긍정', cat: 'Thermal', int: '강', src: 'YouTube Comments', date: '2026.03.20', note: 'Global' },
      { sum: '망원 카메라로 8배 줌해도 화질이 나쁘지 않음. 야경도 깔끔함', sent: '긍정', cat: 'Camera_Main', int: '강', src: 'Zhihu', date: '2026.02.28', note: 'China' },
      { sum: '알루미늄으로 돌아와서 무게가 줄고 열 방산도 좋음', sent: '긍정', cat: 'Design', int: '중', src: 'Apple Community', date: '2026.03.10', note: 'Global' },
      { sum: '가격이 1100달러인데 기본형과 디스플레이만 같음. 가성비 떨어짐', sent: '부정', cat: 'PriceValue', int: '강', src: 'PhoneArena', date: '2026.03.05', note: 'Global' },
      { sum: '배터리는 한 경우도 있고 모자란 경우도 있음. 사용 패턴에 따라 다름', sent: '중립', cat: 'Battery', int: '중', src: 'MacRumors', date: '2026.03.08', note: 'Global' },
      { sum: '저주파 PWM 조광으로 눈이 덜 피로함. 밤에 편함', sent: '긍정', cat: 'Display_Eyecare', int: '중', src: 'Zhihu', date: '2026.03.12', note: 'China' },
      { sum: 'A19 Pro로 거의 모든 게임이 최고 설정에서 60fps 유지됨', sent: '긍정', cat: 'Performance', int: '중', src: 'YouTube Gaming', date: '2026.03.18', note: 'Global' },
      { sum: '표준형 iPhone 17도 디스플레이가 좋아서 Pro 구매 고민됨', sent: '부정', cat: 'PriceValue', int: '중', src: 'Reddit r/Apple', date: '2026.03.14', note: 'Global' },
      { sum: '장시간 촬영해도 핸드폰이 뜨거워지지 않아서 좋음', sent: '긍정', cat: 'Thermal', int: '중', src: 'Chinese Forums', date: '2026.03.16', note: 'China' }
    ]
  };
