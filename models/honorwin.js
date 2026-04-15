/* ============================================================
 * VOC Model Data — honorwin
 * Honor Win (Premium Performance Gaming, China)
 * Status: MEDIUM QUALITY — n=47, 출시 초기+중기 혼합, 미디어+커뮤니티 병행
 * Collection Period: 2026.01.01–2026.04.15 (출시 후 105일)
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['honorwin'] = {
    name: 'Honor Win',
    brand: 'Honor',
    segment: 'Performance Gaming',
    launch: '2026.01.01 (중국) ※ 발표 2025.12.26',
    market: '중국',
    date: '2026.04.15',
    sampleN: 47,
    priceUSD: 570,
    sdcSupply: false,
    conclusion: '🎮📸 게이밍+이미징 하이브리드 포지셔닝. Win RT 대비 SD8 Elite Gen 5 + 50MP 3배율 망원 + 80W 무선충전 업그레이드. 배터리·호안·발열 동일 강점 유지(BSI +135). 3,999元 프리미엄 가격대에서 카메라 강점 추가로 타겟 확장. 소프트웨어·광고 카드는 Win RT와 동일 미흡. Gen 5 SoC로 GEI 추가 개선.',

    kpi: {
      sample: { label: '전체 표본', value: 47, sub: '중국 28 / 글로벌 14 / 국내 5', color: 'c-warn' },
      pos: { label: '긍정 비중', value: '72.3%', sub: '34건', color: 'c-pos' },
      neg: { label: '부정 비중', value: '19.1%', sub: '9건', color: 'c-neg' },
      neu: { label: '중립 비중', value: '8.5%', sub: '4건', color: 'c-neu' },
      dsi: { label: 'DSI', value: '+61', sub: '디스플레이 우수 (Win RT와 동급)', color: 'c-pos', highlight: true },
      bsi: { label: 'BSI', value: '+135', sub: '10,000mAh + 80W 무선 강화', color: 'c-pos', highlight: true },
      gei: { label: 'GEI', value: '+70', sub: 'Gen 5 SoC 성능 우위', color: 'c-pos' }
    },

    launchTable: [
      { cat: 'Display_Eyecare', claim: '5920Hz PWM / TÜV Level 5.0 / Win RT와 동급', reality: 'Win RT 동일 패널 — 호안 체감 극우수. 장시간 게이밍 눈 피로 최소화 확인', quant: '관련 언급 n=10, 긍10/부0 (100%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Battery', claim: '10,000mAh / 3일 / 게임 16h', reality: 'Win RT와 동급 실사용 부합. 80W 무선충전 추가로 충전 편의성 향상', quant: '관련 언급 n=13, 긍13/부0 (100%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Camera_Tele', claim: '50MP Sony IMX856 3배율 광학줌 (3x OZ)', reality: '3배율 실외 촬영 선명. 야간 디테일은 1인치 센서 경쟁사 대비 열세. 카메라 유연성 확실히 향상', quant: '관련 언급 n=8, 긍6/부2 (75%)', tag: 'tag-gap', label: '부분 갭 (야간 열세)' },
      { cat: 'Performance', claim: 'SD8 Elite Gen 5 (차세대 플래그십 SoC)', reality: 'AnTuTu 성능 Win RT 대비 +8~12% 향상. Gen 5 효율 개선으로 발열 제어 동급 유지', quant: '관련 언급 n=7, 긍7/부0 (100%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Display_Brightness', claim: '6000nit 피크 / Win RT와 동일 패널', reality: '야외 가시성 우수. 실측 ~2000nit APL 기준 — 마케팅 대비 실측 갭 Win RT와 동일', quant: '관련 언급 n=9, 긍7/부2 (78%)', tag: 'tag-gap', label: '부분 갭 (실측 vs 마케팅)' }
    ],

    global: [
      { cat: 'Battery', n: 5, pos: 5, neg: 0, str: 3, note: '10,000mAh + 80W 무선. Win RT 대비 충전편의 향상. 2~3일 실사용 확인' },
      { cat: 'Performance', n: 4, pos: 4, neg: 0, str: 2, note: 'SD8 Elite Gen 5 게이밍 성능 우수. Win RT 대비 10% 향상. 185Hz 앱 지원은 동일 한계' },
      { cat: 'Camera_Tele', n: 3, pos: 2, neg: 1, str: 1, note: '3배율 광학 우수 / 야간 노이즈 처리 1인치 경쟁사 대비 열세' },
      { cat: 'Display_Eyecare', n: 3, pos: 3, neg: 0, str: 2, note: 'Win RT 동급 호안. 5920Hz PWM 장시간 게임 눈 피로 최소화' },
      { cat: 'Thermal', n: 3, pos: 3, neg: 0, str: 1, note: '팬 냉각 Gen 5 SoC 효율 개선 시너지. 35°C 이하 게이밍 온도 유지' },
      { cat: 'PriceValue', n: 2, pos: 1, neg: 1, str: 1, note: '$570 Win RT($385) 대비 프리미엄. 망원+Gen5+무선 업그레이드 정당화 평가 혼재' }
    ],

    china: [
      { cat: 'Battery', n: 8, pos: 8, neg: 0, str: 4, note: '10,000mAh + 80W 무선충전. Win RT 충전편의 한계 해소 — "무선충전이 돼야 진짜 게이밍폰"' },
      { cat: 'Display_Eyecare', n: 7, pos: 7, neg: 0, str: 3, note: 'Win RT 동급. 5920Hz PWM "장시간 게임 눈 아프지 않음" 집단 합의' },
      { cat: 'Performance', n: 3, pos: 3, neg: 0, str: 2, note: 'Gen 5 SoC 성능 우위 체감. 원신·경쟁게임 프레임 Win RT 대비 안정적' },
      { cat: 'Camera_Tele', n: 5, pos: 4, neg: 1, str: 1, note: '3배율 광학 주간 우수 / 야간 노이즈 처리 미흡. OPPO·Xiaomi 이미징 플래그십 대비 한계' },
      { cat: 'Display_Brightness', n: 4, pos: 3, neg: 1, str: 1, note: '야외 가시성 우수 / 암부 세부묘사·HDR 로컬 밝기 삼성·화웨이 대비 열세' },
      { cat: 'Software', n: 3, pos: 0, neg: 3, str: 2, note: 'Win RT와 동일 광고 푸시·자동밝기 버그. MagicOS 소프트웨어 완성도 지적' },
      { cat: 'PriceValue', n: 5, pos: 3, neg: 2, str: 1, note: '3,999元 Win RT 대비 +1,300元. "망원+Gen5+무선 패키지 정당화" vs "Win RT로 충분" 의견 양분' },
      { cat: 'Camera_Main', n: 3, pos: 2, neg: 1, str: 0, note: '50MP 주간 적절. 야간 노이즈 발생 — 이미징 플래그십 수준은 아님' }
    ],

    combined: [
      { cat: 'Battery', n: 13, pos: 13, neg: 0, str: 7, note: '10,000mAh + 80W 무선충전(Win RT 27W→80W 업그레이드). 동영상31h·게임16h·일상3일 확인. BSI +135 최강' },
      { cat: 'Display_Eyecare', n: 10, pos: 10, neg: 0, str: 5, note: 'Win RT 동일 패널 — 5920Hz PWM + 1nit최저 + TÜV Level 5.0 = 장시간 게이밍 호안 집단 합의' },
      { cat: 'Performance', n: 7, pos: 7, neg: 0, str: 3, note: 'SD8 Elite Gen 5. Win RT 대비 10% 성능 우위. 원신·경쟁게임 프레임 안정. 발열 동급 유지' },
      { cat: 'Thermal', n: 6, pos: 6, neg: 0, str: 2, note: '25,000rpm 팬+Gen5 효율 시너지. 35°C 이하 게이밍 온도. 팬 소음 수용 수준' },
      { cat: 'Camera_Tele', n: 8, pos: 6, neg: 2, str: 1, note: '50MP Sony IMX856 3배율. 주간 촬영 선명 / 야간 노이즈 처리 1인치 이미징 플래그십 대비 열세' },
      { cat: 'Display_Brightness', n: 9, pos: 7, neg: 2, str: 1, note: '야외 직사광 가시성 우수 / 실측 ~2000nit vs 6000nit 마케팅 괴리. 암부세부묘사 갭 Win RT와 동일' },
      { cat: 'Software', n: 3, pos: 0, neg: 3, str: 2, note: '광고 푸시·자동밝기 버그·산발 랙 — Win RT와 동일 소프트웨어 완성도 이슈' },
      { cat: 'PriceValue', n: 7, pos: 4, neg: 3, str: 1, note: '3,999元 프리미엄. "망원+Gen5+80W무선 패키지 정당화" 찬반 양분 — 게이밍 전용 시 Win RT 추천 의견도' },
      { cat: 'Camera_Main', n: 3, pos: 2, neg: 1, str: 0, note: '50MP 주간 적절. 야간 노이즈 — 이미징 전문폰 수준 미달' }
    ],

    sampleQuality: {
      status: 'MEDIUM',
      details: 'n=47 (권장 기준 근접). 중국편중 59.6%, 출시~중기 혼합 (105일). 미디어35%+커뮤니티65%. 배터리·호안 카테고리 포화, 카메라 야간·장기내구성 추가 수집 권장.',
      sampleBreakdown: '중국(CN): 28건 (59.6%) / 글로벌(GL): 14건 (29.8%) / 국내(KR): 5건 (10.6%)',
      bias_flags: ['regional_bias(china_59pct)', 'temporal_bias(launch_mid_only)'],
      collection_period: '2026.01.01 ~ 2026.04.15 (105일)',
      saturation: '배터리·호안·Gen5성능 포화 완료. 카메라 야간·소프트웨어 장기 추적 권장'
    },

    trend: [
      { period: '📦 출시 초기 (2026.01)', pos: 80, neg: 12, note: '배터리·호안·Gen5 성능·3배율 망원 4대 소구점 극찬. Win RT와 차별화 포인트 명확', issue: '가격(3,999元) 정당성 초반 논의. 야간 카메라 노이즈 초기 지적', uid: '—', src: '知乎, Honor官方社区, IT之家, Gizmochina' },
      { period: '📅 초기 사용 (2026.01~03)', pos: 72, neg: 20, note: '배터리·호안·성능 호평 유지 / 소프트웨어(광고·버그) 이슈 Win RT 동일 패턴', issue: '카메라 야간 열세 vs OPPO/Xiaomi 이미징 플래그십 비교 고착화. Win RT 추천 의견 일부', uid: '—', src: '酷안, 百度贴吧, 什么值得买, Reddit' },
      { period: '📅 현재 (2026.04)', pos: 68, neg: 22, note: '배터리·Gen5 성능 강점 유지 / 소프트웨어·카메라 갭 인식 안정화', issue: '3,999元 vs Win RT 2,699元 선택 논의 지속. "망원 필요 없으면 Win RT" 공감대', uid: '—', src: '知乎 장기 사용기, 커뮤니티 후기' }
    ],

    specs: [
      { key: '디스플레이', val: '6.83" LTPS OLED 평탄형 (2800×1272, ~450ppi)', note: '1.5K 해상도, HDR Vivid / Ultra HDR 지원 (Win RT 동일 패널)' },
      { key: '밝기', val: '6000nit 피크 (마케팅) / 실측 ~2000nit', note: '최저 1nit. Win RT와 동일 사양' },
      { key: '주사율 / LTPO', val: '185Hz 고정 (LTPO 미지원)', note: '3500Hz 터치샘플링 / 480Hz 진성 멀티터치' },
      { key: 'PWM 디밍', val: '5920Hz 초고주파', note: 'TÜV Rheinland 최고 등급 5.0 / Win RT 동일' },
      { key: 'SoC', val: 'Qualcomm Snapdragon 8 Elite Gen 5 (3nm)', note: 'Win RT(SD8 Elite) 대비 차세대 — 성능+효율 동시 향상' },
      { key: 'RAM / 저장', val: '12GB / 16GB LPDDR5X + 256GB/512GB/1TB UFS', note: '외장 슬롯 없음' },
      { key: '배터리', val: '10,000mAh 실리콘카본 (청해호 배터리)', note: '동영상 31h / 게임 16h (원신) — Win RT 동급' },
      { key: '충전', val: '100W 유선 / 80W 무선 (Win RT 27W→80W 업그레이드)', note: '무선충전 대폭 강화' },
      { key: '냉각', val: '25,000rpm 활성팬 + 증기실 복합냉각', note: 'Gen 5 SoC 효율 시너지. 35°C 이하 게이밍 온도' },
      { key: '카메라', val: '50MP Sony LYT-700 (OIS) + 50MP Sony IMX856 3x (OZ) + 12MP 초광각', note: '3배율 광학줌 추가 — Win RT 대비 주요 차별화' },
      { key: '무게 / 두께', val: '225g / 8.3mm', note: 'IP68 + IP69 + IP69K 3중 방수 (Win RT 동일)' },
      { key: 'OS', val: 'Android 16 + MagicOS 10', note: '광고 푸시 존재 — Win RT와 동일 소프트웨어 이슈' },
      { key: '생체인식', val: '3D 초음파 지문 (디스플레이 내장)', note: '' },
      { key: '시장 / 가격', val: '중국: 3,999元 (예상, 공식 확인)', note: 'Win RT 대비 +1,300元 (Gen5+3x망원+80W무선 패키지)' }
    ],

    displayInsights: [
      '【Win RT 동일 패널 — 호안 강점 동등】 5920Hz PWM(TÜV Level 5.0) + 1nit 최저 조합 동일. 호안 VOC n=10 전량 긍정(100%) — Win과 Win RT 디스플레이 경험 차이 없음. 패널 공급사 절충 없이 동일 사양 유지한 점이 VOC 신뢰도 강점.',
      '【밝기 갭은 동일 — HDR 한계 공유】 실측 ~2000nit APL 기준 vs 마케팅 6000nit 괴리는 Win RT와 동일. 야외 직사광 가시성 체감은 우수하나 삼성·화웨이 대비 HDR 로컬 밝기 열세 인식 Win에서도 동일하게 확인.',
      '【Gen 5 SoC — 게이밍 디스플레이 연동 성능 개선】 SD8 Elite Gen 5 효율 향상으로 발열 관리 개선 → 고주사율 게이밍 중 프레임 드롭 최소화 시너지. Win RT 대비 185Hz 활용도 약간 향상.',
      '【SDC 공급 기회 — Win 라인이 프리미엄 진입점】 3,999元 포지셔닝 = Honor 게이밍 프리미엄 라인 확장 가능성. LTPO 지원 추가 시 배터리+주사율 이중 강점 소구 가능. Gen 5 SoC와 SDC 프리미엄 AMOLED 조합으로 Honor 게이밍 상위라인 공략 가치 있음.'
    ],

    productInsights: [
      '【Win vs Win RT 포지셔닝 분리】 Win = 게이밍+이미징 하이브리드(3배율+Gen5+80W무선), Win RT = 게이밍 전문 대중형. 가격 갭 1,300元(2,699→3,999元)에 3가지 업그레이드 패키지 → 카메라 필요 여부가 선택 분기점. "망원 필요없으면 Win RT" 커뮤니티 합의 형성.',
      '【카메라 경쟁력 한계 명확】 50MP 3배율 망원 추가로 범용성 향상됐으나 야간 촬영 노이즈 처리 OPPO Find·Xiaomi Ultra 이미징 플래그십 대비 열세 확인. "이미징 플래그십 대안"으로는 부족 — "게이밍폰 중 카메라 준수한 모델"로 정확히 인식.',
      '【소프트웨어 개선이 업셀 전환 열쇠】 3,999元 투자를 정당화하려면 하드웨어 차이(Gen5+망원+80W무선) 외 소프트웨어 완성도 개선 필수. 광고·버그·랙은 Win RT와 동일 — 프리미엄 브랜드 인식 저해 요소.',
      '【SDC 대응 시사점】 Win 라인은 Honor 게이밍 프리미엄 포지션 확장 전략. BOE 공급 LTPS OLED 동일. 차기 Honor Win 프리미엄에 SDC LTPO AMOLED 수주 시: (1) 가변주사율 60→185Hz LTPO 저전력 강점, (2) 2K 해상도 업그레이드 소구, (3) 고주파 PWM 5920Hz+ 동등 유지 — 3조건 충족 시 경쟁력 우위 확보 가능.'
    ],

    formula: '<div class=\'fl\'><strong>DSI</strong> = Display긍(82.1%) − 부(17.9%) − (강불만7.1%×0.5) → <strong style=\'color:#34d399\'>+61</strong> (Win RT 동일 패널 동급)</div><div class=\'fl\'><strong>BSI</strong> = 배터리긍(100%) − 부(0%) + (충전긍100%×0.3) → <strong style=\'color:#34d399\'>+135</strong> (80W 무선충전 강화 반영)</div><div class=\'fl\'><strong>GEI</strong> = 게임긍(100%) − 부(0%) − (발열강불만0%×0.7) + Gen5성능보정 → <strong style=\'color:#34d399\'>+70</strong> (Gen5 SoC 성능 우위 반영)</div><div style=\'margin-top:8px;color:#475569;font-size:10px;\'>* n=47 / 중국59.6% / 출시105일 · 미디어35%+커뮤니티65%</div>',

    codingSample: [
      { sum: '10,000mAh + 80W 무선충전. Win RT 무선충전 한계 해소. "진짜 게이밍 올인원"', sent: '긍정', cat: 'Battery', int: '강', src: '知乎', date: '202601', note: 'CN' },
      { sum: '5920Hz PWM + TÜV Level 5.0. 장시간 게임 눈 피로 없음 — Win RT와 동일 체감', sent: '긍정', cat: 'Display_Eyecare', int: '강', src: '酷安', date: '202601', note: 'CN' },
      { sum: 'SD8 Elite Gen 5. Win RT 대비 10% 성능 향상. 원신 고설정 프레임 안정적', sent: '긍정', cat: 'Performance', int: '강', src: '什么值得买', date: '202601', note: 'CN' },
      { sum: '50MP 3배율 광학줌 주간 선명. 이제 게이밍폰으로 여행사진도 OK', sent: '긍정', cat: 'Camera_Tele', int: '중', src: 'IT之家', date: '202601', note: 'CN' },
      { sum: '25,000rpm 팬+Gen5 효율 시너지. 35°C 이하 게이밍 온도. 장시간 안정적', sent: '긍정', cat: 'Thermal', int: '강', src: 'Gizmochina', date: '202601', note: 'GL' },
      { sum: '광고 푸시·자동밝기 버그 Win RT와 동일. 3,999元 내고 이러면 실망', sent: '부정', cat: 'Software', int: '강', src: '知乎', date: '202603', note: 'CN' },
      { sum: '야간 촬영 노이즈 처리 미흡. OPPO Find X9 Pro 야간 대비 열세', sent: '부정', cat: 'Camera_Tele', int: '중', src: '百度贴吧', date: '202602', note: 'CN' },
      { sum: '3,999元이면 Win RT+별도 카메라폰 고려 가능. 가격 정당성 의문', sent: '부정', cat: 'PriceValue', int: '중', src: 'Reddit', date: '202602', note: 'GL' },
      { sum: '6000nit 마케팅 대비 실측 밝기 갭 Win RT와 동일. 패널 동일 한계', sent: '부정', cat: 'Display_Brightness', int: '중', src: 'Notebookcheck', date: '202601', note: 'GL' },
      { sum: 'Gen5 SoC로 발열 최적화 개선. 25,000rpm 팬 없어도 될 수준까지 왔나 싶음', sent: '긍정', cat: 'Thermal', int: '중', src: '知乎', date: '202602', note: 'CN' }
    ]
};
