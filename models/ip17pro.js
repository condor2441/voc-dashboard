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
    date: '2026.04.15',
    sampleN: 105,
    conclusion: '3000nit·2세대 항반사·480Hz 저주파 PWM 등 디스플레이 완성도 최고 수준(DSI 0.62). 열 관리 TRI 0.15 유지. 단 iOS 26 업데이트 후 일부 사용자 "경험 저하" 보고(post_update_worsened). 배터리 실측 편차 지속·Pro 차별화 논쟁 심화.',

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
      { cat: 'Display_Eyecare', n: 5, pos: 4, neg: 0, str: 0, note: '저주파 PWM + 접근성 480Hz 준-DC 전환 옵션 호평' },
      { cat: 'Software', n: 5, pos: 1, neg: 4, str: 2, note: 'iOS 26 업데이트 후 "경험 저하" 불만(post_update_worsened)·카메라 앱 안정성 저하' }
    ],

    trend: [
      { period: '📦 출시 초기 (9-10월)', pos: 75, neg: 14, note: '높은 기대감, 가격 논쟁 시작', issue: '3000nits 야외 극찬 / 냉각 효과 우수 / 카메라 품질 호평 / 가격 정당성 의문', uid: '—', src: 'Reddit, GSMArena, YouTube' },
      { period: '📅 중기 (11-1월)', pos: 70, neg: 18, note: '배터리 부족감 표출, 냉각 호평', issue: '배터리 지속성 불만 / 냉각 성능 입증 / 카메라 기대치 충족 / 가성비 논쟁 확대', uid: '—', src: 'Zhihu, MacRumors, 中关村在线' },
      { period: '📅 성숙기 (2026.02–04)', pos: 63, neg: 25, note: 'iOS 26 업데이트 후 카메라·UX 불만 증가. 배터리 실측 상하한 편차 지속. 장기 사용자 열관리 강점 재확인', issue: 'iOS 26 업데이트 "경험 저하" 불만(post_update_worsened) / 배터리 Android Authority 벤치 최하위권 vs 실사용 OK 편차 / 카메라 빠른 피사체 선명도 지적 / PWM 접근성 토글 호평', uid: '—', src: 'MacRumors, AppleInsider, AndroidAuthority, 9to5Mac (n=105)' }
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
      '포지셔닝: 디스플레이 완성도 최고(DSI 0.62, 야외 77% 호평, PWM 80% 호평, n=87) + 열관리 우수(TRI 0.15, 냉각 40% 감소) = 완제품 시스템 강점 명확. 71% 긍정율로 세그먼트 내 높은 만족도 유지. 다만 iOS 26 업데이트 후 카메라 앱 불안정(post_update_worsened) 신뢰 저하.',
      '강점 집중: 3000nit 야외 밝기(글로벌 표준) + 항반사 코팅 + 저주파 PWM이 디스플레이 완성도 구성. 증기실 냉각으로 게이밍 발열 40% 감소는 성능 세그먼트의 신뢰도. 알루미늄 복귀도 열관리 + 무게감 이원 강점.',
      '약점 복합: (1) 배터리 실측 편차(3500mAh 용량 대비 사용패턴 영향 큼, 헤비유저 부족감), (2) iOS 26 업데이트 후 카메라 앱 안정성 급락(post_update_worsened), (3) Pro vs 기본형 차별화 부족(가격 정당성 68% 긍정). 기술 강점에도 소프트웨어·차별화 이슈 상쇄.',
      '경쟁 포지션: 디스플레이(3000nit)는 경쟁 대비 우위(iPhone 레벨). 그러나 배터리 용량 미흡(3500mAh, Find X9 Pro 7500mAh 대비 절반) · Pro 차별화 부족은 상품기획 약점. 차세대는 배터리 3800mAh+ 업그레이드 + Pro-only 카메라 혁신(1인치 센서?) 필수.',
      'A19 Pro 성능: 100% 호평 + 게이밍 안정성 확인은 Pro 유일한 명확 차별점. 이를 강조하되 배터리·카메라 혁신 병렬화로 Pro 가치 재정의 필요. iOS 안정성 회복(소프트웨어 업데이트)이 신뢰도 유지 필수.'
    ],

    productInsights: [
      '패널 공급 현황: Samsung Display가 Apple iPhone 17 Pro OLED 주공급자(6.3" Super Retina XDR, 2622×1206, 1~120Hz ProMotion, 저주파 PWM). 점유율 95% 이상 확정. BOE의 소량 공급 시작(2025년)도 SDC 주공급자 지위 흔들리지 않음.',
      '디스플레이 VOC 해석(SDC 시각): DSI 0.62(긍정) + 밝기 긍정 80%(10/10) + 야외 명도 긍정 77%(10/13) + PWM 긍정 80%(4/5) = SDC 공급 패널의 완성도 높음. 다만 성숙기(2026.02-04) iOS 26 업데이트 후 카메라 앱 안정성 저하(post_update_worsened) 건으로 전체 신뢰도 저하(부정 25%). 배터리 실측 편차(사용패턴) 지속 — SDC 디스플레이 자체는 문제 없으나 Apple 소프트웨어와의 동기화 중요.',
      '중국 패널 경쟁사 동향: BOE는 2025년부터 iPhone 공급 소량 시작(약 5% 목표). CSOT와 Visionox는 iPhone 레벨의 품질 달성 미흡. SDC가 기술 우위(1~120Hz ProMotion + 저주파 PWM + 항반사 코팅 2세대) 유지하면 BOE 진입 정체 가능. 단 가격 경쟁 회피 필수.',
      'SDC 공급 기회 및 차별화 소구점: iPhone 18 Pro에서 (a) "Motion Smoothness 2.0"(120Hz → 144Hz+ 검토) — 프로 영상작 세그먼트 강화, (b) "Pro Color Grading" 모드(DCI-P3 + Rec.2020 동시 지원), (c) 디스플레이 발열 1-2% 감소 설계로 배터리 효율 개선 협력, (d) 밝기 안정성(온도 편차 < 0.5%) 강화 — "Pro Grade Reliability" 인증.',
      'SDC 전략 제언: Apple과의 장기 독점공급 계약 유지가 최우선. iPhone 18 Pro 공동개발 시 (1) 카메라 앱 최적화 협력(Apple과 사전 조율), (2) 배터리·열관리 통합 설계, (3) "Pro" 세그먼트 기술 차별화 강화(144Hz 주사율, 극저주파 PWM, 색감 정밀도). BOE 진입 가능성 대비 기술 선도성 유지 + 가격·공급 신뢰도 확보로 점유율 방어.'
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
      { sum: 'iOS 26 업데이트 이후 카메라 앱 안정성 저하·경험 완전히 망쳤다는 사용자 다수 — post_update_worsened', sent: '부정', cat: 'Software', int: '강', src: 'MacRumors Forums', date: '2026.04', note: 'Global·post_update_worsened' },
      { sum: '접근성 설정의 PWM 토글(480Hz→준-DC 모드)로 저밝기 화면 깜빡임 체감 현저히 개선 — 실사용자 호평', sent: '긍정', cat: 'Display_Eyecare', int: '강', src: 'AppleInsider, Zhihu', date: '2026.03', note: 'Global + China Mature VOC' }
    ]
  };
