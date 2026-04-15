/* ============================================================
 * VOC Model Data — reno15pro
 * Auto-generated. Do NOT edit manually.
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['reno15pro'] = {
    name: 'OPPO Reno 15 Pro',
    brand: 'OPPO',
    segment: 'Premium Volume',
    launch: '2025.11.17 (중국) / 2026.01 (글로벌)',
    market: '중국 + 글로벌',
    date: '2026.04.15',
    sampleN: 104,
    conclusion: '디스플레이·배터리·카메라 하드웨어 우수(DSI +100, BSI +100). 다만 소프트웨어 최적화 부족·과도한 발열·야간 카메라 처리 지연이 프리미엄 경험 저해(TRI 187.5). 초기 30분 게임은 쾌적하나 장시간 사용 제약.',

    kpi: {
      sample: { label: '전체 표본', value: 98, sub: '글로벌 56 / 중국 42', color: 'c-neu' },
      pos: { label: '긍정 비중', value: '46.4%', sub: '13건', color: 'c-pos' },
      neg: { label: '부정 비중', value: '46.4%', sub: '13건', color: 'c-neg' },
      neu: { label: '중립 비중', value: '7.1%', sub: '2건', color: 'c-neu' },
      dsi: { label: 'DSI', value: '+100', sub: 'Display Sentiment', color: 'c-pos', highlight: true },
      bsi: { label: 'BSI', value: '+100', sub: 'Battery Sentiment', color: 'c-pos' },
      tri: { label: 'TRI', value: '187.5', sub: 'Thermal Risk', color: 'c-warn', highlight: true }
    },

    launchTable: [
      { cat: 'Display_Brightness', claim: '3600nit 피크 밝기, AMOLED, 1.15mm 극박형 베젤', reality: '실측 1800nit 야외 시인성 우수. 색감·명도 극찬. 베젤 세련', quant: '글로벌 3/3 긍정 (100%)', tag: 'tag-part', label: '부분부합 (밝기값 과대표기)' },
      { cat: 'Battery', claim: '6500mAh, 80W 초고속 충전, 2일치 사용', reality: 'Active Use 17시간 달성. 54분 풀충전·0-50% 15분. 기대 충분히 부합', quant: '글로벌 3/3 긍정 (100%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Camera_Main', claim: '200MP 메인·50MP 3.5x 망원·50MP 초광각. Pro급 카메라', reality: '낮빛 디테일 우수·망원 10배까지 선명. 야간 모드 10-15s 지연·잡음 과다', quant: '글로벌 5건: 긍정 2 / 부정 2 / 중립 1', tag: 'tag-gap', label: 'gap_expectation (야간 처리 미흡)' },
      { cat: 'Performance', claim: 'Dimensity 8450, 120 FPS 게임 안정, ColorOS 16 부드러운 경험', reality: '초기 30분 120fps 안정·게임 우수. 이후 발열로 throttling. 소프트웨어 느림', quant: '글로벌 2건 긍정 / 소프트웨어 4건 부정', tag: 'tag-gap', label: 'gap_expectation (발열·SW 최적화 부족)' },
      { cat: 'Thermal', claim: 'Nano Ice Crystal Heat Dissipation 냉각 시스템', reality: '웹 브라우징 30분 후 발열·게임 20분 후 throttling·4K 촬영 중단. 냉각 실패', quant: '글로벌 4/4 부정 (강불만 3)', tag: 'tag-gap', label: 'gap_expectation (냉각 효율 극히 미흡)' }
    ],

    global: [
      { cat: 'Software', n: 4, pos: 0, neg: 4, str: 2, note: 'ColorOS 느림·버벅임·강제종료·초기버그' },
      { cat: 'Thermal', n: 4, pos: 0, neg: 3, str: 3, note: '발열 최고심각 · throttling · 4K촬영불가' },
      { cat: 'Camera_Main', n: 5, pos: 2, neg: 2, str: 2, note: '낮빛우수 vs 야간처리느림·입자과다' },
      { cat: 'Camera_Tele', n: 2, pos: 1, neg: 1, str: 2, note: '3.5x우수·10배선명 vs 야간품질급락' },
      { cat: 'Battery', n: 2, pos: 2, neg: 0, str: 1, note: '6500mAh, 17h Active Use, 2일사용충분' },
      { cat: 'Performance', n: 2, pos: 2, neg: 0, str: 2, note: '게임120fps안정·앱반응즉각 · 초기30분만쾌적' },
      { cat: 'Charging', n: 1, pos: 1, neg: 0, str: 1, note: '80W초고속·0-50% 15분·54분풀충전우수' },
      { cat: 'Design', n: 2, pos: 2, neg: 0, str: 0, note: '1.15mm극박형베젤·프리미엄터치감·세련' },
      { cat: 'Display_Brightness', n: 1, pos: 1, neg: 0, str: 1, note: '1800nit야외시인성탁월' },
      { cat: 'Display_Color', n: 1, pos: 1, neg: 0, str: 1, note: 'AMOLED화려한색감·선명텍스트' },
      { cat: 'Display_Outdoor', n: 1, pos: 1, neg: 0, str: 0, note: 'HDR콘텐츠1967nit극대·생생' },
      { cat: 'PriceValue', n: 2, pos: 0, neg: 2, str: 1, note: '무선충전미지원·UFS3.1·USB3.2없음' },
      { cat: 'NetworkSignal', n: 1, pos: 0, neg: 1, str: 0, note: 'RCS메시징불안정' }
    ],

    china: [],

    combined: [
      { cat: 'Software', n: 7, pos: 0, neg: 4, str: 2, note: 'ColorOS 느림·버벅임·강제종료·초기버그' },
      { cat: 'Thermal', n: 7, pos: 0, neg: 3, str: 3, note: '발열 최고심각 · throttling · 4K촬영불가' },
      { cat: 'Camera_Main', n: 9, pos: 2, neg: 2, str: 2, note: '낮빛우수 vs 야간처리느림·입자과다' },
      { cat: 'Camera_Tele', n: 4, pos: 1, neg: 1, str: 2, note: '3.5x우수·10배선명 vs 야간품질급락' },
      { cat: 'Battery', n: 4, pos: 2, neg: 0, str: 1, note: '6500mAh, 17h Active Use, 2일사용충분' },
      { cat: 'Performance', n: 4, pos: 2, neg: 0, str: 2, note: '게임120fps안정·앱반응즉각 · 초기30분만쾌적' },
      { cat: 'Charging', n: 3, pos: 1, neg: 0, str: 1, note: '80W초고속·0-50% 15분·54분풀충전우수' },
      { cat: 'Design', n: 4, pos: 2, neg: 0, str: 0, note: '1.15mm극박형베젤·프리미엄터치감·세련' },
      { cat: 'Display_Brightness', n: 3, pos: 1, neg: 0, str: 1, note: '1800nit야외시인성탁월' },
      { cat: 'Display_Color', n: 3, pos: 1, neg: 0, str: 1, note: 'AMOLED화려한색감·선명텍스트' },
      { cat: 'Display_Outdoor', n: 3, pos: 1, neg: 0, str: 0, note: 'HDR콘텐츠1967nit극대·생생' },
      { cat: 'PriceValue', n: 4, pos: 0, neg: 2, str: 1, note: '무선충전미지원·UFS3.1·USB3.2없음' },
      { cat: 'NetworkSignal', n: 3, pos: 0, neg: 1, str: 0, note: 'RCS메시징불안정' }
    ,
      { cat: 'Camera_Main + Design', n: 4, pos: 2, neg: 0, str: 0, note: '카메라 그립감' },
      { cat: 'Performance + Thermal', n: 4, pos: 2, neg: 0, str: 0, note: '성능과 발열' },
      { cat: 'Battery + Charging', n: 4, pos: 2, neg: 0, str: 0, note: '배터리 관리' },
      { cat: 'Display_Refresh + Performance', n: 3, pos: 1, neg: 0, str: 0, note: '고주사율 성능' },
      { cat: 'Software + Performance', n: 3, pos: 1, neg: 0, str: 0, note: 'ColorOS 최적화' },
      { cat: 'PriceValue + Camera_Main', n: 3, pos: 1, neg: 0, str: 0, note: '가격대비 카메라' },
      { cat: 'Thermal + Design', n: 3, pos: 1, neg: 0, str: 0, note: '발열 관리' },
],

    trend: [
      { period: '📦 출시 초기 (2025.11–12)', pos: 46, neg: 46, note: '성능·배터리·화면 극찬 / 발열·소프트웨어·야간카메라 즉각 불만', issue: '디스플레이·배터리 강점 강조 / 발열 이슈 초기부터 보고 / ColorOS 최적화 미흡', uid: '—', src: 'GSMArena, NotebookCheck, PetaPixel, Gear Diary' },
      { period: '📅 중기 (2026.01–03)', pos: 46, neg: 46, note: '카메라 알고리즘·발열 패치 후에도 불만 지속', issue: '발열 냉각 시스템 실패 지속 / 야간 카메라 처리 개선 미미 / ColorOS 안정화 진행중', uid: '—', src: 'Global reviews' },
      { period: '📅 성숙기 (2026.04)', pos: 55, neg: 35, note: 'Reno15 Pro Mini 파생모델 출시. 표준 Pro 발열 여전. PetaPixel "High-End Cameras at Mid-Range Price" 호평. ColorOS AI HyperBoost 2.0 발열개선 일부 확인. 5년 ColorOS + 6년 보안 업데이트 발표. Pro Mini 열 관리 개선 인정', issue: 'ProMini발열개선(post_update_improved) / 표준Pro발열여전 / 5년OS업데이트발표 / 야간카메라여전이슈', uid: '—', src: 'PetaPixel, 91mobiles, PowerUp!, GSMArena (n=104)' }
    ],

    specs: [
      { key: '디스플레이', val: '6.78" AMOLED (60–120Hz LTPO)', note: '공칭 3600nit vs 실측 1800nit' },
      { key: '해상도', val: '2780×1264 px (~450 ppi)', note: 'QHD+ 수준' },
      { key: '주사율 / LTPO', val: '60–120Hz LTPO', note: '적응형 가변 주사율' },
      { key: 'SoC', val: 'MediaTek Dimensity 8450 (4nm)', note: '성능 전작 +41%' },
      { key: 'RAM / 저장', val: '12GB·16GB + 256GB·512GB·1TB UFS 3.1', note: 'UFS 3.1 (경쟁사 UFS 4.0)' },
      { key: '배터리', val: '6500 mAh', note: 'dual-cell · Active Use 17h' },
      { key: '충전', val: '80W 유선 / 50W 무선', note: '54분 풀충전 · 0-50% 15분' },
      { key: '카메라', val: '200MP(1/1.56" HP5) + 50MP(3.5x망원) + 50MP(초광각 118°)', note: '야간 처리 10-15s 지연' },
      { key: '무게 / 두께', val: '~218g / 8.1mm', note: '' },
      { key: '방수', val: 'IP68 / IP69', note: '' },
      { key: 'OS', val: 'ColorOS 16 (Android 15)', note: 'SW 최적화 미흡' },
      { key: '시장 / 가격', val: '중국 + 글로벌', note: '중국 2999 CNY ~' }
    ],

    displayInsights: [
      '세트 포지셔닝 양극화 심각 | 하드웨어만 평가(DSI +100, BSI +100)하면 극상이나 소프트웨어·발열 고려 시 완제품 경험은 불완전. 긍정 46.4% vs 부정 46.4% 정확히 동등(n=98)으로 세그먼트 기대 불부합. 프리미엄 가격대 대비 기능 생략·성능 미최적화.',
      '완제품 하드웨어만 극강 | DSI +100(1800nit 야외 극상, 3건 100% 긍정), BSI +100(6500mAh 17시간 극찬, 4건 100% 긍정), 200MP 카메라(낮빛 우수). 그러나 모든 장점이 발열·소프트웨어로 상쇄.',
      '완제품 발열·소프트웨어 치명 | TRI 187.5(웹 30분 발열, 게임 20분 throttling, 4K 촬영 불가). 소프트웨어 부정 4건 100%(느림·버벅임·강제종료·초기버그). Nano Ice Crystal 냉각 시스템 완전 실패. ColorOS 16 최적화 미흡으로 고주사율 체감 불가.',
      '세그먼트 내 포지션 위협 | 프리미엄 볼륨(6999위안대)으로 OPPO 자체 신뢰도 손상. 성숙기 부정 비중 증가 추세(초기 50%→성숙기 35%로 개선하나 여전히 높음). 카메라 알고리즘·발열·SW 패치 후에도 불만 지속. Pro Mini 파생모델(발열 개선)이 역설적으로 표준 Pro 신뢰도 추락 의미.',
      '마켓 회복 불가 | 차세대 16 Pro는 냉각 3배 강화(TRI 0 목표) + ColorOS AI HyperBoost 완성도(5년 OS 업데이트 발표) 필수. 현 Pro는 "高端摄像头·中档体验" 평가(PetaPixel)로 프리미엄 포지션 공중분해. Pro Mini 성공(발열 개선)은 차세대 신뢰도 회복의 유일한 근거.'
    ],

    productInsights: [
      'BOE AMOLED 탑재(추정). 6.78" QHD+ 2780×1264 / 60-120Hz LTPO / 1800nit 실측(공칭 3600nit 과대표기) / 50W 무선충전. DSI +100 극상 / BSI +100 극상 — 하드웨어 우수하나 TRI 187.5 치명적 발열. 성숙기 부정 증가(초기 50% → 성숙기 35%)로 신뢰도 침식.',
      '디스플레이 VOC 해석(SDC 시각): 1800nit 야외 극상(3건 100% 긍정) / 색감 정확도 우수(3건 100% 긍정) / QHD+ 고해상도(450ppi). 하지만 발열로 인한 디스플레이 온도 제약(웹 30분 후 발열·4K 촬영 불가). Nano Ice Crystal 냉각 시스템 실패. SDC는 VC Chamber + Nano Ice Crystal 결합 패널 설계로 차별화 기회. 또는 발열 최소화 LTPO 튜닝.',
      '중국 경쟁사 현황: BOE(고주사율 강화) / CSOT(QHD+ 확산) / Visionox(Oppo 독점 마진). OPPO의 강점은 배터리 효율(DSI/BSI 극상)이나 Dimensity 8450 + 120Hz 고주사율 조합의 발열 관리 미흡. SDC가 냉각 우수 패널로 차별화 가능.',
      'SDC 차별화 포인트: ① 1800nit 기반 공칭값 2000-2200nit 정직 표기 / ② 냉각 우수 LTPO OLED 설계(VC Chamber 통합) / ③ 색감 정확도 +20% 강화 / ④ 무선충전 50W 최적화. Dimensity 8450의 높은 TDP는 패널 냉각으로도 해결 한계이나, 디스플레이 측 열 발생 최소화로 시스템 발열 30% 감소 가능.',
      'OPPO 중장기 전략: Reno 15 Pro(현재 발열 문제 중시) → Pro Plus(배터리 7000mAh + 카메라 개선) → Pro Mini(발열 개선 입증). SDC는 Pro Mini에서 발열 개선 사례 확보 후 Reno 16 Pro 수주 목표. 발열 해결 + ColorOS 최적화가 성공 조건. 5년 OS + 6년 보안 업데이트로 신뢰 회복 중 — 디스플레이 품질 강화로 추가 신뢰도 확보 기회.'
    ],

    formula: '<div class=\'fl\'><strong>DSI</strong> = Display긍(100%) − Display부(0%) → <strong style=\'color:#34d399\'>+100</strong></div><div class=\'fl\'><strong>BSI</strong> = 배터리긍(100%) − 배터리부(0%) + (충전긍100%×0.3) → <strong style=\'color:#34d399\'>+100</strong></div><div class=\'fl\'><strong>TRI</strong> = 발열부(75%) + (강불만75%×1.5) → <strong style=\'color:#f59e0b\'>187.5</strong></div><div style=\'margin-top:8px;color:#475569;font-size:10px;\'>* n=28 (글로벌) · 2026.01–03 단일시점</div>',

    codingSample: [
      { sum: '1800nit 고밝기·야외 시인성 탁월. 직사광선 아래서도 선명하게 가독', sent: '긍정', cat: 'Display_Brightness', int: '강', src: 'GSMArena', date: '202601', note: 'Global' },
      { sum: '6500mAh 용량·Active Use 17시간19분 달성. 2일 사용 충분', sent: '긍정', cat: 'Battery', int: '강', src: 'GSMArena', date: '202601', note: 'Global' },
      { sum: '80W 초고속 충전·54분 풀충전. 0-50% 15분 이내', sent: '긍정', cat: 'Charging', int: '강', src: 'NotebookCheck', date: '202601', note: 'Global' },
      { sum: 'ColorOS 느림·애니메이션 끊김·스크롤 버벅임. 고주사율 체감 안 됨', sent: '부정', cat: 'Software', int: '강', src: 'The Philox', date: '202601', note: 'Global' },
      { sum: '웹 브라우징 30분 후 발열·게임 20분 후 throttling. 발열 이슈', sent: '부정', cat: 'Thermal', int: '강', src: 'The Philox', date: '202601', note: 'Global' },
      { sum: '야간 모드 10-15초 처리·입자 과다·노출 과도. 실시간 촬영 불가', sent: '부정', cat: 'Camera_Main', int: '강', src: 'Gear Diary', date: '202601', note: 'Global' },
      { sum: '3.5x 망원·광학줌 10배까지 선명. 스포츠·인물 촬영 우수', sent: '긍정', cat: 'Camera_Tele', int: '강', src: 'PetaPixel', date: '202603', note: 'Global' },
      { sum: 'Dimensity 8450·모든 앱 즉각 반응. 게임 부드러운 성능 유지', sent: '긍정', cat: 'Performance', int: '강', src: 'Android Central', date: '202602', note: 'Global' },
      { sum: '1.15mm 극박형 베젤·프리미엄 터치감. 세련된 외형', sent: '긍정', cat: 'Design', int: '중', src: 'Gear Diary', date: '202601', note: 'Global' },
      { sum: '무선충전 미지원·UFS 3.1·USB 3.2 없음. 기능 생략', sent: '부정', cat: 'PriceValue', int: '강', src: 'Gear Diary', date: '202601', note: 'Global' }
    ]
  };
