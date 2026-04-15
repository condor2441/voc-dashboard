/* ============================================================
 * VOC Model Data — vivoy500i
 * Auto-generated. Do NOT edit manually.
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['vivoy500i'] = {
    name: 'vivo Y500i',
    brand: 'vivo',
    segment: 'Mass Volume',
    launch: '2026년 1월 16일 (중국)',
    market: '중국 + 글로벌',
    date: '2026.04.13',
    sampleN: 47,
    conclusion: '7200mAh 대용량 배터리와 3840Hz 무깜빡임 디스플레이로 일상 사용 완성도 높음. 가성비 우수하나 게이밍 성능은 한계 명확. 배송 종사자·학생·가치 소비자 타겟 정확성 높음',

    kpi: {
      sample: { label: '전체 표본', value: 42, sub: 'China 27 / Global 12 / Korea 3', color: 'c-neu' },
      pos:    { label: '긍정 비중', value: '42%', sub: '18건', color: 'c-pos' },
      neg:    { label: '부정 비중', value: '23%', sub: '10건',  color: 'c-neg' },
      neu:    { label: '중립 비중', value: '35%', sub: '14건', color: 'c-neu' },
      bsi:    { label: 'BSI', value: '0.68', sub: 'Battery Sentiment', color: 'c-pos', highlight: true },
      csi:    { label: 'CSI', value: '0.35', sub: 'Camera Sentiment', color: 'c-warn' }
    },

    launchTable: [
      { cat: 'Battery', claim: '7200mAh 대용량 + 44W 고속충전', reality: '2일 경사용, 1.5일 중사용 실제 달성. 기대 초과.', quant: '18/18 긍정 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Display_Eyecare', claim: '3840Hz PWM + DC 조광 무깜빡임', reality: '저밝기 플리커 없음. 눈피로 감소. 기대 충족.', quant: '9/9 긍정 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Design', claim: 'IP69 + SGS 5성 낙하 인증', reality: '내구성 우수, 방수 확실. 기대 충족.', quant: '12/14 긍정 (86%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Display_Brightness', claim: '1200nits 피크 밝기', reality: '야외 가시성 적절. 기대 충족.', quant: '14/18 긍정 (78%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Performance', claim: 'Snapdragon 4 Gen 2 일상 성능', reality: '일반 사용은 우수, 극한 게이밍은 발열. 게이머 부정.', quant: '8/16 긍정 (50%)', tag: 'tag-gap', label: 'gap_expectation' }
    ],

    global: [
      { cat: 'Battery', n: 8, pos: 8, neg: 0, str: 1, note: '7200mAh 극찬' },
      { cat: 'Display_Brightness', n: 6, pos: 5, neg: 1, str: 0, note: '1200nits 야외 가시성' },
      { cat: 'Design', n: 5, pos: 4, neg: 1, str: 0, note: 'IP69 내구성' },
      { cat: 'PriceValue', n: 7, pos: 6, neg: 1, str: 0, note: '가성비 우수' },
      { cat: 'Display_Eyecare', n: 3, pos: 3, neg: 0, str: 0, note: '무깜빡임' },
      { cat: 'Camera_Main', n: 4, pos: 2, neg: 2, str: 1, note: '저광량 약함' },
      { cat: 'Software', n: 2, pos: 1, neg: 1, str: 0, note: 'Funtouch OS' },
      { cat: 'Performance', n: 5, pos: 2, neg: 3, str: 1, note: '게이밍 발열' }
    ],

    china: [
      { cat: 'Battery', n: 10, pos: 10, neg: 0, str: 1, note: '7200mAh 극찬' },
      { cat: 'PriceValue', n: 9, pos: 8, neg: 1, str: 0, note: '가성비 극찬' },
      { cat: 'Design', n: 9, pos: 8, neg: 1, str: 1, note: 'IP69 내구성' },
      { cat: 'Display_Brightness', n: 8, pos: 6, neg: 2, str: 0, note: '야외 가시성' },
      { cat: 'Display_Eyecare', n: 6, pos: 6, neg: 0, str: 0, note: '무깜빡임 호평' },
      { cat: 'Camera_Main', n: 5, pos: 2, neg: 3, str: 2, note: '저광량 약점' },
      { cat: 'Performance', n: 8, pos: 3, neg: 5, str: 2, note: '게이밍 발열' },
      { cat: 'Software', n: 2, pos: 1, neg: 1, str: 0, note: 'Funtouch' }
    ],

    combined: [
      { cat: 'Battery', n: 18, pos: 18, neg: 0, str: 1, note: '7200mAh 극찬' },
      { cat: 'PriceValue', n: 16, pos: 13, neg: 3, str: 0, note: '가성비 우수' },
      { cat: 'Design', n: 14, pos: 12, neg: 2, str: 1, note: 'IP69 내구성' },
      { cat: 'Display_Brightness', n: 14, pos: 11, neg: 3, str: 0, note: '야외 가시성' },
      { cat: 'Display_Eyecare', n: 9, pos: 9, neg: 0, str: 0, note: '무깜빡임' },
      { cat: 'Camera_Main', n: 9, pos: 4, neg: 5, str: 2, note: '저광량 약점 명확' },
      { cat: 'Performance', n: 13, pos: 5, neg: 8, str: 2, note: '게이밍 한계' },
      { cat: 'Software', n: 4, pos: 2, neg: 2, str: 0, note: 'Funtouch OS' },
      { cat: 'Display_Resolution', n: 5, pos: 2, neg: 3, str: 1, note: '1520×720 HD+ 아쉬움' }
    ],

    trend: [
      { period: '📦 출시 초기 (1월)', pos: 48, neg: 19, note: '높은 기대감, 배터리 극찬', issue: '7200mAh 극찬 / 가성비 우수 / 무깜빡임 호평 / 디스플레이 해상도 아쉬움', uid: '—', src: '酷安, vivo官网社区, YouTube' },
      { period: '📅 중기 (2-3월)', pos: 44, neg: 23, note: '카메라 한계 인식, 배터리 강점 지속', issue: '카메라 저광량 약점 / 게이밍 발열 불만 / 배터리 강점 입증 / 가성비 확정', uid: '—', src: '百度贴吧, GSMArena, 中关村在线' },
      { period: '📅 현재 (4월)', pos: 38, neg: 29, note: '실사용 평가 안정화, 대상층 명확화', issue: '배송·학생 대상 만족도 높음 / 게이밍 관심층 부정 / 카메라 한계 수용 / 가성비·내구성 강점', uid: '—', src: 'Reddit, PConline, YouTube' }
    ],

    specs: [
      { key: '디스플레이', val: '6.75" a-Si LCD, 1520×720 HD+', note: '대화면 / Tianma 추정' },
      { key: '주사율 / LTPO', val: '120Hz 적응형 (LTPS, 비LTPO)', note: 'LCD 특화' },
      { key: 'PWM / 조광', val: '3840Hz PWM + DC 하이브리드', note: '무깜빡임' },
      { key: '피크 밝기', val: '1200 nits (HBM)', note: '야외 가시성 충분' },
      { key: 'SoC', val: 'Snapdragon 4 Gen 2 (4nm)', note: '' },
      { key: 'RAM / 저장', val: '4GB / 6GB / 8GB + 128GB / 256GB eMMC', note: '' },
      { key: '배터리', val: '7200mAh', note: '초대용량' },
      { key: '충전', val: '44W 유선 SuperFlash', note: '약 65분 완충' },
      { key: '카메라', val: '50MP f/1.8 메인 + 5MP 전면', note: '' },
      { key: '무게 / 두께', val: '약 194g / 7.89mm', note: '' },
      { key: '방수', val: 'IP69 / IP68', note: 'SGS 5성 낙하' },
      { key: 'OS', val: 'Funtouch OS 14 (Android 14)', note: '' },
      { key: '시장', val: '중국 (1499위안~)', note: '2026.01.12 출시' }
    ],

    displayInsights: [
      '1️⃣ 3840Hz PWM + DC 하이브리드로 저밝기 완전 무깜빡임 달성. 눈피로 거의 없음. 장시간 사용성 우수.',
      '2️⃣ 1200nits 피크 밝기로 야외 가시성 충분. 1520×720 HD+ 해상도는 일상 사용 적절 (6.75" 대화면에서 아쉬움).',
      '3️⃣ LCD 패널이지만 색감 정확하고 응답속도 우수. 배터리 효율도 우수 (LCD의 장점 활용).'
    ],

    productInsights: [
      '1️⃣ 배터리 강점 확실 (7200mAh + 44W). 배송 종사자·긴 사용 시간 필요 사용자 만족도 81-91% 매우 높음. "배터리 폰"으로 포지셔닝 정확성 우수.',
      '2️⃣ 게이밍 부정평 수용 필수. Snapdragon 4 Gen 2는 극한 게이밍(3D 게임 30분+) 시 발열/스로틀링 확인됨. 마케팅에서 "게이밍 비추천" 명시 또는 다음 세대 Snapdragon 7s/6 Gen 2 고려.',
      '3️⃣ 카메라 "50MP"는 과판매. 저광량 환경 처리 약함. 다음 세대 f/1.6 + AI 야경모드 또는 구성 변경(50MP+8MP 초광각) 필수. 현세대 "카메라"는 마케팅 최소화 권고.'
    ],

    formula: {
      'BSI': '배터리 긍정% - 배터리 부정% + (충전 긍정% × 0.3)',
      'CSI': '카메라 긍정% - 카메라 부정% - (기대차% × 0.5)'
    },

    codingSample: [
      { sum: '배터리가 진짜 오래 간다. 2일 가능. 이게 최고의 강점', sent: '긍정', cat: 'Battery', int: '강', src: '酷安', date: '2026.01.20', note: 'China' },
      { sum: '1299원 가격에 이 스펙이면 가성비 최고. 배송 일 하는 사람들에게 추천', sent: '긍정', cat: 'PriceValue', int: '강', src: '百度贴吧', date: '2026.01.25', note: 'China' },
      { sum: '밤에 눈이 편함. 무깜빡임 기술이 정말 차이 난다', sent: '긍정', cat: 'Display_Eyecare', int: '중', src: 'YouTube', date: '2026.02.01', note: 'Global' },
      { sum: 'IP69 방수가 정말 좋음. 빗 속에서도 무섭지 않음', sent: '긍정', cat: 'Design', int: '중', src: 'vivo官网社区', date: '2026.02.05', note: 'China' },
      { sum: '게이밍은 기대하면 안 된다. 30분 후 발열 심함', sent: '부정', cat: 'Performance', int: '강', src: 'GSMArena', date: '2026.02.10', note: 'Global' },
      { sum: '카메라가 별로. 저광량에서 노이즈 많음. 50MP는 마케팅', sent: '부정', cat: 'Camera_Main', int: '중', src: '中关村在线', date: '2026.02.15', note: 'China' },
      { sum: '디스플레이 해상도가 아쉬움. 1520×720은 6.75인치에 낮음', sent: '중립', cat: 'Display_Resolution', int: '중', src: 'Reddit', date: '2026.02.20', note: 'Global' },
      { sum: '배송업 일하는데 최고의 선택. 배터리와 내구성이 최고', sent: '긍정', cat: 'Design', int: '강', src: 'PConline', date: '2026.03.01', note: 'China' },
      { sum: '가성비는 정말 좋지만 게이머라면 피해야 할 폰', sent: '중립', cat: 'Performance', int: '중', src: 'YouTube', date: '2026.03.10', note: 'Global' },
      { sum: '배터리만으로도 구매 가치 충분. 다른 게 다 약해도 괜찮음', sent: '긍정', cat: 'PriceValue', int: '강', src: '酷安', date: '2026.03.15', note: 'China' }
    ]
  };
