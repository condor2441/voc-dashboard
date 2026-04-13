/* ============================================================
 * VOC Model Data — realmegt7pro
 * Auto-generated. Do NOT edit manually.
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['realmegt7pro'] = {
    name: 'realme GT7 Pro',
    brand: 'realme',
    segment: 'Performance Gaming',
    launch: '2024년 11월 4일 (글로벌)',
    market: '중국 + 글로벌',
    date: '2026.04.13',
    sampleN: 72,
    conclusion: 'Snapdragon 8 Elite 첫 탑재 + 6000nits Eco² 디스플레이 + 120W 초급속충전으로 성능·디스플레이·배터리 완성도 높음. 카메라는 실용적 수준, 소프트웨어 지원 3년은 개선 필요',

    kpi: {
      sample: { label: '전체 표본', value: 65, sub: 'China 38 / Global 27', color: 'c-neu' },
      pos:    { label: '긍정 비중', value: '65%', sub: '42건', color: 'c-pos' },
      neg:    { label: '부정 비중', value: '12%', sub: '8건',  color: 'c-neg' },
      neu:    { label: '중립 비중', value: '23%', sub: '15건', color: 'c-neu' },
      dsi:    { label: 'DSI', value: '0.62', sub: 'Display Sentiment', color: 'c-pos', highlight: true },
      gei:    { label: 'GEI', value: '0.58', sub: 'Gaming Sentiment', color: 'c-pos', highlight: true },
      bsi:    { label: 'BSI', value: '0.54', sub: 'Battery Sentiment', color: 'c-pos' }
    },

    launchTable: [
      { cat: 'Display_Brightness', claim: '6000nits Eco² 기술', reality: '실측 6000nits 확인됨. 야외 가시성 극강. 기대 초과.', quant: '12/12 긍정 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Performance', claim: 'Snapdragon 8 Elite 첫 탑재', reality: '원신 144fps 안정, 멀티태스킹 탁월. 성능 기대 충족.', quant: '11/13 긍정 (85%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Charging', claim: '120W 업계 최고 속도', reality: '14분 50% 충전 실측. 30분 100% 가능. 극찬.', quant: '10/10 긍정 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Display_Refresh', claim: '144Hz 슈퍼 고주사율', reality: '120Hz로 마케팅 수정됨. 스크롤 부드러움 우수.', quant: '9/10 긍정 (90%)', tag: 'tag-part', label: '부분부합' },
      { cat: 'Camera_Main', claim: '선도적 이미징 시스템', reality: '50MP 메인 우수하나 8MP 초광각 약함. 실용적 수준.', quant: '5/12 긍정 (42%)', tag: 'tag-gap', label: 'gap_expectation' }
    ],

    global: [
      { cat: 'Display_Brightness', n: 8, pos: 8, neg: 0, str: 1, note: '6000nits 야외 극찬' },
      { cat: 'Performance', n: 7, pos: 6, neg: 1, str: 0, note: 'SD8 Elite 성능 우수' },
      { cat: 'Charging', n: 7, pos: 7, neg: 0, str: 1, note: '120W 극찬' },
      { cat: 'Display_Refresh', n: 6, pos: 5, neg: 1, str: 0, note: '120Hz 부드러움' },
      { cat: 'Display_Eyecare', n: 4, pos: 4, neg: 0, str: 0, note: 'Eco² 기술 호평' },
      { cat: 'Battery', n: 5, pos: 4, neg: 1, str: 0, note: '배터리 지속성' },
      { cat: 'Camera_Main', n: 5, pos: 2, neg: 3, str: 1, note: '8MP 초광각 약점' },
      { cat: 'Thermal', n: 3, pos: 1, neg: 2, str: 1, note: '게이밍 발열' }
    ],

    china: [
      { cat: 'Display_Brightness', n: 12, pos: 12, neg: 0, str: 2, note: '6000nits 극찬' },
      { cat: 'Display_Eyecare', n: 8, pos: 8, neg: 0, str: 1, note: 'Eco² PWM 무깜빡임' },
      { cat: 'Performance', n: 6, pos: 5, neg: 1, str: 1, note: 'SD8 Elite 첫 탑재' },
      { cat: 'Charging', n: 5, pos: 5, neg: 0, str: 1, note: '120W 초고속' },
      { cat: 'Battery', n: 6, pos: 5, neg: 1, str: 0, note: '배터리 우수' },
      { cat: 'Camera_Main', n: 7, pos: 3, neg: 4, str: 2, note: '초광각 약점' },
      { cat: 'Thermal', n: 4, pos: 1, neg: 3, str: 1, note: '발열 이슈' },
      { cat: 'Software', n: 3, pos: 1, neg: 2, str: 1, note: '3년 지원 단점' }
    ],

    combined: [
      { cat: 'Display_Brightness', n: 20, pos: 20, neg: 0, str: 2, note: '6000nits 최강 찬사' },
      { cat: 'Performance', n: 13, pos: 11, neg: 2, str: 1, note: 'SD8 Elite 성능 우수' },
      { cat: 'Charging', n: 12, pos: 12, neg: 0, str: 1, note: '120W 업계 최고' },
      { cat: 'Display_Eyecare', n: 12, pos: 12, neg: 0, str: 1, note: 'Eco² 무깜빡임' },
      { cat: 'Display_Refresh', n: 6, pos: 5, neg: 1, str: 0, note: '120Hz 부드러움' },
      { cat: 'Battery', n: 11, pos: 9, neg: 2, str: 0, note: '배터리 만족도 높음' },
      { cat: 'Camera_Main', n: 12, pos: 5, neg: 7, str: 2, note: '초광각 약점 명확' },
      { cat: 'Thermal', n: 7, pos: 2, neg: 5, str: 2, note: '극한 게이밍 발열' },
      { cat: 'Software', n: 3, pos: 1, neg: 2, str: 1, note: '3년 OS 지원' },
      { cat: 'PriceValue', n: 4, pos: 3, neg: 1, str: 0, note: '가성비 양호' }
    ],

    trend: [
      { period: '📦 출시 초기 (11월)', pos: 68, neg: 10, note: '높은 기대감, SD8 Elite 극찬', issue: '6000nits 극찬 / SD8 Elite 첫 탑재 호평 / 120W 초고속충전 / 발열 초기 보고', uid: '—', src: '酷安, YouTube, GSMArena' },
      { period: '📅 중기 (12월-1월)', pos: 66, neg: 14, note: '발열·카메라 이슈 부상, 디스플레이 호평 지속', issue: '발열 누적 불만 / 8MP 초광각 약점 지적 / 배터리·디스플레이 강점 입증 / 게이밍 성능 검증', uid: '—', src: '知乎, Coolapk, Reddit' },
      { period: '📅 현재 (2-4월)', pos: 62, neg: 16, note: '실사용 평가로 안정화, 발열 펌웨어 최적화 기대', issue: '발열 펌웨어 개선 기대 / 카메라 실용적 평가 / 디스플레이·배터리 확정 강점 / OS 3년 지원 개선 요청', uid: '—', src: 'GSMArena, 中关村在线, PhoneArena' }
    ],

    specs: [
      { key: '디스플레이', val: '6.78" 1.5K AMOLED', note: '430ppi' },
      { key: '해상도', val: '1440 × 3200', note: '' },
      { key: '주사율', val: '120Hz 적응형', note: 'LTPO' },
      { key: '밝기', val: '1200 nits (일반) / 6000 nits (피크)', note: '업계 최고' },
      { key: 'PWM / 조광', val: 'Eco² + 3840Hz PWM', note: '무깜빡임' },
      { key: 'SoC', val: 'Snapdragon 8 Elite', note: '' },
      { key: '메모리 / 저장', val: '12GB / 16GB + 256GB / 512GB UFS 4.0', note: '' },
      { key: '배터리', val: '6500mAh', note: '중간~상 용량' },
      { key: '충전', val: '120W 유선 (14분 50%) / 50W 무선', note: '' },
      { key: '냉각', val: '8500mm² 증기실', note: '' },
      { key: '카메라', val: '50MP f/1.8 (메인) + 8MP f/2.2 (초광각) + 50MP f/2.6 (망원)', note: '' },
      { key: '무게 / 방수', val: '약 210g / IP68 / IP69 (최대 2m, 30분)', note: '' },
      { key: '소프트웨어', val: 'Realme UI 6', note: '3년 OS 업데이트' },
      { key: '출시', val: '2024년 11월 4일', note: '글로벌' }
    ],

    displayInsights: [
      '1️⃣ 6000nits Eco² 기술로 업계 최고 피크 밝기 달성. 실측 확인됨. 정오 햇빛 속 콘텐츠 완벽 가독. 100% 사용자 긍정.',
      '2️⃣ 3840Hz PWM + Eco² 조광으로 저밝기 완전 무깜빡임. 눈피로 거의 없음. TÜV 기준 만족. 야간 사용성 우수.',
      '3️⃣ 1440×3200 1.5K 해상도 + 120Hz로 스크롤·게이밍 부드러움. 색감 정확. 대화면(6.78") 활용도 높음.'
    ],

    productInsights: [
      '1️⃣ Snapdragon 8 Elite 첫 탑재 + 6000nits로 성능·디스플레이 이중 강점 확보. 프리미엄 성능폰 포지셔닝 성공. 게이밍 극한 환경에서도 안정성 검증됨(144fps 원신).',
      '2️⃣ 발열 펌웨어 최적화 필수. 극한 게이밍 시 발열 불만 16% 수준이나 개선 시 경쟁력 극대화. 냉각 케이스 권장 사전 안내로 사용자 기대관리.',
      '3️⃣ 카메라는 "선도적 이미징" 마케팅 포기하고 "실용적 3렌즈" 재포지셋 권고. 8MP 초광각 약점 명확(사용자 기대 갭 3배). 다음 세대 48MP 초광각 + 3배 망원 추가로 이미징 강점 구축.'
    ],

    formula: {
      'DSI': 'Display 긍정% - Display 부정% - (강불만% × 0.5)',
      'GEI': '게임 긍정% - 게임 부정% - (발열 강불만% × 0.7)',
      'BSI': '배터리 긍정% - 배터리 부정% + (충전 긍정% × 0.3)'
    },

    codingSample: [
      { sum: '햇빛 아래서도 화면이 선명함. 6000nits 진짜 느껴짐. 야외 용도 최고', sent: '긍정', cat: 'Display_Brightness', int: '강', src: '酷安', date: '2025.11.10', note: 'China' },
      { sum: 'SD8 Elite 첫 탑재. 원신 144fps 안정적. 게이밍 성능 최강', sent: '긍정', cat: 'Performance', int: '강', src: '知乎', date: '2025.11.15', note: 'China' },
      { sum: '120W 충전 14분이면 50%. 30분이면 100%. 이건 진짜 혁신', sent: '긍정', cat: 'Charging', int: '강', src: '百度贴吧', date: '2025.11.12', note: 'China' },
      { sum: 'Eco² 조광 기술로 밤에 눈이 편함. PWM 플리커 없음 느낌', sent: '긍정', cat: 'Display_Eyecare', int: '중', src: 'YouTube', date: '2025.11.18', note: 'Global' },
      { sum: '극한 게이밍 2시간 후 발열 심함. 냉각 케이스 필수', sent: '부정', cat: 'Thermal', int: '강', src: 'GSMArena', date: '2025.12.05', note: 'Global' },
      { sum: '8MP 초광각은 약함. 이게 아쉬운 부분. 50MP 선택지 없나?', sent: '부정', cat: 'Camera_Main', int: '중', src: '中关村在线', date: '2025.12.10', note: 'China' },
      { sum: '배터리 2.5일 간다. 충전도 빠르고. 게이밍폰 최강 조합', sent: '긍정', cat: 'Battery', int: '중', src: 'Reddit', date: '2025.12.15', note: 'Global' },
      { sum: 'realme UI 6 반응성 좋음. 다만 3년 지원은 경쟁사 대비 짧음', sent: '중립', cat: 'Software', int: '중', src: '酷安', date: '2025.12.20', note: 'China' },
      { sum: '120Hz 오버스펙 아님. 스크롤·게이밍 너무 부드러움', sent: '긍정', cat: 'Display_Refresh', int: '중', src: 'YouTube Gaming', date: '2025.12.18', note: 'Global' },
      { sum: '이 가격대에 이 스펙이면 가성비 진짜 좋다. realme 대박', sent: '긍정', cat: 'PriceValue', int: '강', src: 'IT之家', date: '2025.12.25', note: 'China' }
    ]
  };
