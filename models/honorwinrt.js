/* ============================================================
 * VOC Model Data — honorwinrt
 * Honor Win RT (Performance Gaming, China)
 * Status: MEDIUM QUALITY — n=52, 출시 초기+중기 혼합, 미디어+커뮤니티 병행
 * Collection Period: 2026.01.01–2026.04.15 (출시 후 105일)
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['honorwinrt'] = {
    name: 'Honor Win RT',
    brand: 'Honor',
    segment: 'Performance Gaming',
    launch: '2026.01.01 (중국) ※ 발표 2025.12.26',
    market: '중국',
    date: '2026.04.15',
    sampleN: 52,
    priceUSD: 385,
    sdcSupply: false,
    conclusion: '🎮 게이밍폰 대중화 특화. 10,000mAh 배터리+활성냉각+5920Hz PWM 호안 디스플레이 3각편대가 핵심 경쟁력. 2,699元 가격대에서 배터리·발열 동급 최우수(BSI +130). 디스플레이 호안·밝기 체감 우수하나 HDR 로컬 밝기·암부 세부묘사 갭 확인. 망원 미탑재로 카메라 유연성 한계. 광고·소프트웨어 카드 지속 개선 필요.',

    kpi: {
      sample: { label: '전체 표본', value: 52, sub: '중국 30 / 글로벌 17 / 국내 5', color: 'c-warn' },
      pos: { label: '긍정 비중', value: '71.2%', sub: '37건', color: 'c-pos' },
      neg: { label: '부정 비중', value: '19.2%', sub: '10건', color: 'c-neg' },
      neu: { label: '중립 비중', value: '9.6%', sub: '5건', color: 'c-neu' },
      dsi: { label: 'DSI', value: '+61', sub: '디스플레이 우수 (호안 압도)', color: 'c-pos', highlight: true },
      bsi: { label: 'BSI', value: '+130', sub: '10,000mAh 배터리 최강', color: 'c-pos', highlight: true },
      gei: { label: 'GEI', value: '+64', sub: '게이밍 성능 안정적', color: 'c-pos' }
    },

    launchTable: [
      { cat: 'Display_Brightness', claim: '6000nit 피크 / 1nit 최저 / 야외 가시성 최강', reality: '야외 직사광 가시성 우수 (실사용자 확인). 실측 피크 ~2000nit (마케팅 6000nit과 괴리). 1nit 최저 암환경 편안함 호평', quant: '관련 언급 n=11, 긍9/부2 (82%)', tag: 'tag-gap', label: '부분 갭 (실측 vs 마케팅)' },
      { cat: 'Display_Eyecare', claim: '5920Hz PWM / TÜV Rheinland Level 5.0 / 저블루광', reality: '저빈도 깜박임 체감 없음. 장시간 게임(16h+) 후 눈 피로 감소 실증. 중국 커뮤니티 "국내 최고 호안" 수식어', quant: '관련 언급 n=12, 긍12/부0 (100%)', tag: 'tag-ok', label: '완전 부합 (압도적)' },
      { cat: 'Battery', claim: '10,000mAh / 일상 3일 / 게임 16h', reality: '실사용 2~3일 확인. 게임(원신) 16h·동영상 31h 실측 부합. 건설현장/학생 등 헤비유저 절찬', quant: '관련 언급 n=15, 긍15/부0 (100%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Thermal', claim: '25,000rpm 쿨링팬 / 최대 7°C 온도 저감', reality: '게임 중 실측 34°C. 스로틀링 없음. 팬 소음 유의미하나 수용 수준', quant: '관련 언급 n=8, 긍8/부0 (100%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Performance', claim: 'SD8 Elite + Phantom Frame Engine 3.0 / 185Hz 게이밍', reality: '원신·왕자영요 프레임 안정적. 185Hz 지원 앱 한정적 (경량 타이틀 중심). 헤비게임에서 일부 호환성 이슈', quant: '관련 언급 n=10, 긍8/부2 (80%)', tag: 'tag-gap', label: '부분 갭 (185Hz 앱 지원)' }
    ],

    global: [
      { cat: 'Battery', n: 6, pos: 6, neg: 0, str: 4, note: '10,000mAh "게이밍폰 배터리 혁신". 2~3일 실사용 확인. 충전 100W 빠름' },
      { cat: 'Thermal', n: 4, pos: 4, neg: 0, str: 2, note: '팬 냉각 실효성 인정. 34°C 게이밍 온도. 팬 소음은 감수할 수준' },
      { cat: 'Display_Brightness', n: 3, pos: 2, neg: 1, str: 1, note: '야외 시인성 우수 / 6000nit 마케팅 대비 실측 갭 언급' },
      { cat: 'Display_Eyecare', n: 3, pos: 3, neg: 0, str: 2, note: '5920Hz PWM 장시간 게임 눈 피로 최소화' },
      { cat: 'Performance', n: 3, pos: 2, neg: 1, str: 1, note: 'SD8 Elite 성능 우수 / 185Hz 지원 앱 한계' },
      { cat: 'Camera_Main', n: 2, pos: 1, neg: 1, str: 1, note: '주간 촬영 적절 / 망원 미탑재 유연성 부족' },
      { cat: 'PriceValue', n: 2, pos: 2, neg: 0, str: 1, note: '$385 가성비 게이밍폰 강력한 포지션' },
      { cat: 'Design', n: 2, pos: 1, neg: 1, str: 0, note: '225g 무게 장시간 단손 피로 언급' }
    ],

    china: [
      { cat: 'Battery', n: 9, pos: 9, neg: 0, str: 5, note: '"충전보조 없이 3일" — 건설현장·학생·게이머 모두 극찬. 10,000mAh 게이밍폰 선례' },
      { cat: 'Display_Eyecare', n: 9, pos: 9, neg: 0, str: 4, note: '5920Hz PWM 체감 최강. 야간 1nit 편안함. "장시간 게임도 눈이 안 아프다" 집단 반응' },
      { cat: 'Thermal', n: 4, pos: 4, neg: 0, str: 2, note: '팬 냉각 실측 7°C 저감. 원신 34°C 유지. 게이머 신뢰도 상승' },
      { cat: 'Performance', n: 4, pos: 3, neg: 1, str: 1, note: 'SD8E 성능 안정 / Phantom Engine 보정 체감 / 185Hz 메이저게임 미지원 불만' },
      { cat: 'Display_Brightness', n: 5, pos: 4, neg: 1, str: 1, note: '야외 가시성 우수 / 암부세부묘사 손실, HDR 로컬 밝기 삼성·화웨이 대비 열세' },
      { cat: 'Software', n: 4, pos: 1, neg: 3, str: 2, note: '광고 푸시 노출 / 저조도 자동밝기 오판 버그 / 산발적 랙 1개월 경과 후 발생' },
      { cat: 'Camera_Main', n: 3, pos: 1, neg: 2, str: 1, note: '50MP 주간 적절 / 망원 미탑재 → 동가격대 3배율 경쟁사 대비 불리' },
      { cat: 'Design', n: 4, pos: 2, neg: 2, str: 1, note: '225g 무게 단손 장시간 피로 / IP68+IP69K 방수 호평' },
      { cat: 'PriceValue', n: 5, pos: 4, neg: 1, str: 1, note: '2,699元 게이밍폰 역대급 성가비. "배터리+호안+발열 삼관왕"' }
    ],

    combined: [
      { cat: 'Battery', n: 15, pos: 15, neg: 0, str: 9, note: '10,000mAh 게이밍폰 배터리 혁신. 동영상31h·게임16h·일상3일 실사용 확인. 100W 충전 빠름 — BSI +130 최강' },
      { cat: 'Display_Eyecare', n: 12, pos: 12, neg: 0, str: 6, note: '5920Hz PWM + TÜV Level 5.0 + 1nit최저 = 게이밍폰 최고 호안. 장시간 게임 눈 피로 체감 없음 — 집단 합의' },
      { cat: 'Thermal', n: 8, pos: 8, neg: 0, str: 4, note: '25,000rpm 팬+증기실 복합냉각. 원신 34°C 유지. 1h 게임 스로틀링 0 — 팬 소음 수용 수준' },
      { cat: 'Display_Brightness', n: 11, pos: 9, neg: 2, str: 1, note: '야외 직사광 가시성 우수 / 실측 ~2000nit vs 마케팅 6000nit 괴리. 암부 세부묘사 손실 (OLED 특성)' },
      { cat: 'Performance', n: 10, pos: 8, neg: 2, str: 2, note: 'SD8 Elite + Phantom Engine 3.0. 원신·왕자영요 프레임 안정 / 185Hz 메이저 게임 지원 미흡' },
      { cat: 'Software', n: 4, pos: 0, neg: 4, str: 2, note: '광고 푸시 지속 노출 / 저조도 자동밝기 오판(화면빛→환경광 오인) / 1개월 후 산발적 랙 발생' },
      { cat: 'Camera_Main', n: 5, pos: 2, neg: 3, str: 1, note: '50MP 주간 적절 / 망원 미탑재 → 동가격대 3배율 경쟁사 대비 불리' },
      { cat: 'Design', n: 6, pos: 3, neg: 3, str: 1, note: '225g 단손 장시간 피로 / IP68+IP69K 방수 호평 / 8.3mm 두께 팬 수납 균형' },
      { cat: 'PriceValue', n: 7, pos: 6, neg: 1, str: 2, note: '2,699元 게이밍폰 역대급 가성비. "배터리+호안+발열 삼관왕" — 일부 "망원 없으면 절충" 지적' }
    ],

    sampleQuality: {
      status: 'MEDIUM',
      details: 'n=52 (권장 기준 충족). 중국편중 57.7%, 출시~중기 혼합 (105일). 미디어40%+커뮤니티60%. 배터리·호안 카테고리 포화 도달, 소프트웨어·카메라 추가 수집 권장.',
      sampleBreakdown: '중국(CN): 30건 (57.7%) / 글로벌(GL): 17건 (32.7%) / 국내(KR): 5건 (9.6%)',
      bias_flags: ['regional_bias(china_57pct)', 'temporal_bias(launch_mid_only)'],
      collection_period: '2026.01.01 ~ 2026.04.15 (105일)',
      saturation: '배터리·호안 포화 완료. 소프트웨어·카메라·장기내구성 추가 수집 권장'
    },

    trend: [
      { period: '📦 출시 초기 (2026.01)', pos: 78, neg: 14, note: '배터리·호안·발열 3대 소구점 극찬. 마케팅 일치도 높음', issue: '6000nit 실측 괴리 초반부터 지적. 185Hz 앱 지원 한계 초기 언급', uid: '—', src: '知乎, Honor官方社区, IT之家, Gizmochina' },
      { period: '📅 초기 사용 (2026.01~03)', pos: 70, neg: 22, note: '배터리·호안 호평 유지 / 소프트웨어 카드(광고·랙) 증가', issue: '1개월 후 산발적 랙·자동밝기 버그 제보 증가. 망원 부재 비교 지적', uid: '—', src: '酷安, 百度贴吧, 什么值得买, Reddit' },
      { period: '📅 현재 (2026.04)', pos: 65, neg: 25, note: '배터리 강점 유지 / 소프트웨어·카메라 갭 인식 고착화', issue: '소프트웨어 광고·버그 개선 미흡. 카메라 경쟁력 동가격 3배율 제품 대비 열세', uid: '—', src: '知乎 장기 사용기, 커뮤니티 1개월+ 후기' }
    ],

    specs: [
      { key: '디스플레이', val: '6.83" LTPS OLED 평탄형 (2800×1272, ~450ppi)', note: '1.5K 해상도, HDR Vivid / Ultra HDR 지원' },
      { key: '밝기', val: '6000nit 피크 (마케팅) / 실측 ~2000nit', note: '최저 1nit. 야외가시성 우수 (실측 기반)' },
      { key: '주사율 / LTPO', val: '185Hz 고정 (LTPO 미지원)', note: '3500Hz 터치샘플링 / 480Hz 진성 멀티터치' },
      { key: 'PWM 디밍', val: '5920Hz 초고주파', note: 'TÜV Rheinland 최고 등급 5.0 / 원형편광 2.0 탑재' },
      { key: 'SoC', val: 'Qualcomm Snapdragon 8 Elite (3nm)', note: 'Phantom Frame Stabilization Engine 3.0 (프레임 보정)' },
      { key: 'RAM / 저장', val: '12GB / 16GB LPDDR5X + 256GB/512GB/1TB UFS', note: '외장 슬롯 없음' },
      { key: '배터리', val: '10,000mAh 실리콘카본 (청해호 배터리)', note: '동영상 31.3h / 게임 16.4h (원신) 실측' },
      { key: '충전', val: '100W 유선 / 27W 무선 역충전', note: '' },
      { key: '냉각', val: '25,000rpm 활성팬 + 증기실 복합냉각', note: '최대 7°C 온도 저감 / 게이밍 중 34°C 유지' },
      { key: '카메라', val: '50MP Sony LYT-700 (OIS) + 12MP 초광각', note: '망원 미탑재 — 동가격대 경쟁사 대비 약점' },
      { key: '무게 / 두께', val: '225g / 8.3mm', note: 'IP68 + IP69 + IP69K 3중 방수' },
      { key: 'OS', val: 'Android 16 + MagicOS 10', note: '광고 푸시 존재 — 소프트웨어 완성도 지적' },
      { key: '생체인식', val: '3D 초음파 지문 (디스플레이 내장)', note: '' },
      { key: '시장 / 가격', val: '중국: 2,699元 시작 (12GB/256GB)', note: '글로벌 미발표' }
    ],

    displayInsights: [
      '【호안 디스플레이 특화 포지셔닝】 5920Hz PWM(TÜV Level 5.0) + 1nit 최저밝기 조합이 "장시간 게이밍 눈 피로 최소화"라는 체감 명확. 중국 커뮤니티 호안 언급 n=12 전량 긍정(100%) — 게이밍폰 세그먼트에서 디스플레이 차별화 포인트 명확.',
      '【밝기 갭 주의】 마케팅 6000nit(전면 피크) vs 실측 ~2000nit APL 기준 괴리 존재. 야외 직사광 가시성 체감은 우수하나 타사 OLED 플래그십(삼성·화웨이) 대비 HDR 로컬 밝기 열세 인지 확인. 암부 세부묘사 손실도 OLED 특성이나 보정 개선 여지.',
      '【LTPS 패널 한계】 185Hz 고정 구동(LTPO 미지원) = 저전력 가변주사율 불가. 10,000mAh 대용량 배터리로 전력 효율 문제를 물리적으로 커버하는 전략. 표시 해상도 1.5K(2800×1272)는 FHD+ 대비 선명하나 2K 플래그십 대비 열세 체감 없음.',
      '【SDC 공급 현황 및 기회】 Honor Win RT 패널 공급사: BOE 추정(LTPS OLED). SDC 미공급. 차기 Honor 게이밍 라인업 수주 시 고주파 PWM(5920Hz+) + 야외밝기 동시 확보 어필 포인트. 특히 LTPO 지원 추가 시 배터리 효율 개선 → 소비자 장점 확장 가능.'
    ],

    productInsights: [
      '【전략 포지셔닝】 "게이밍폰 대중화" 특화 — 2,699元에 배터리·발열·호안 3관왕. 기존 게이밍폰(누비아·ROG) 프리미엄 포지션을 깨고 대중 볼륨 공략. 중국 게이머층(학생·직장인 헤비유저) 집중 어필 성공.',
      '【최대 리스크: 소프트웨어 완성도】 광고 푸시·자동밝기 버그·산발적 랙이 1개월+ 장기사용자 부정 VOC 집중 포인트. 하드웨어 경쟁력 대비 소프트웨어 완성도 갭이 재구매·추천율 결정 변수. 업데이트 개선 여부 추적 필요.',
      '【카메라 격차 리스크】 동가격대(2,699元) 경쟁 제품 다수가 3배율 망원 탑재. Win RT 망원 미탑재는 게이머 외 일반 사용자 이탈 요인. "게이머 전용"으로 포지셔닝을 명확히 해야 갭 리스크 관리 가능.',
      '【SDC 대응 시사점】 BOE 공급 추정 LTPS OLED 기반. 5920Hz PWM이 사용자 체감 최강 포인트 → SDC 동급 이상 고주파 PWM 기술 경쟁력 필수. LTPO 추가 지원 시 대용량 배터리 의존도 완화 → 차별화 우위 확보 기회. 1.5K → 2K 해상도 업그레이드 시 Honor 차기 플래그십 라인 공략 가능.'
    ],

    formula: '<div class=\'fl\'><strong>DSI</strong> = Display긍(82.1%) − 부(17.9%) − (강불만7.1%×0.5) → <strong style=\'color:#34d399\'>+61</strong> (호안·밝기 우수, 암부갭 차감)</div><div class=\'fl\'><strong>BSI</strong> = 배터리긍(100%) − 부(0%) + (충전긍100%×0.3) → <strong style=\'color:#34d399\'>+130</strong> (10,000mAh 최강)</div><div class=\'fl\'><strong>GEI</strong> = 게임긍(80%) − 부(20%) − (발열강불만0%×0.7) + FPS안정보정 → <strong style=\'color:#34d399\'>+64</strong> (성능안정·185Hz 앱지원 갭 반영)</div><div style=\'margin-top:8px;color:#475569;font-size:10px;\'>* n=52 / 중국57.7% / 출시105일 · 미디어40%+커뮤니티60%</div>',

    codingSample: [
      { sum: '10,000mAh 배터리 혁신. 원신 16시간·동영상 31시간. 건설현장 중사용자도 퇴근 시 40% 잔여', sent: '긍정', cat: 'Battery', int: '강', src: '知乎', date: '202601', note: 'CN' },
      { sum: '5920Hz PWM + TÜV Level 5.0. 장시간 게임 눈 피로 없음. "국내 최고 호안" 커뮤니티 합의', sent: '긍정', cat: 'Display_Eyecare', int: '강', src: '酷安', date: '202601', note: 'CN' },
      { sum: '25,000rpm 쿨링팬 실효성 확인. 원신 34°C 유지. 1시간 게임 스로틀링 0', sent: '긍정', cat: 'Thermal', int: '강', src: 'IT之家', date: '202601', note: 'CN' },
      { sum: '야외 직사광 시인성 우수. 1nit 최저밝기로 극야간 쾌적. 색감 통투 廉價 오버새추 없음', sent: '긍정', cat: 'Display_Brightness', int: '중', src: '什么值得买', date: '202602', note: 'CN' },
      { sum: '2,699元 가격대 배터리+호안+발열 삼관왕. 게이밍폰 성가비 역대급', sent: '긍정', cat: 'PriceValue', int: '강', src: 'Gizmochina', date: '202601', note: 'GL' },
      { sum: '광고 푸시 계속 노출. 저조도 자동밝기 오판 버그 (화면빛→환경광 혼동). 산발적 랙 1개월 후 발생', sent: '부정', cat: 'Software', int: '강', src: '知乎', date: '202603', note: 'CN' },
      { sum: '망원 미탑재. 동가격대 3배율 경쟁 모델 대비 촬영 유연성 부족', sent: '부정', cat: 'Camera_Main', int: '중', src: '酷안', date: '202602', note: 'CN' },
      { sum: '225g 무게 단손 장시간 피로감. 통근·이동 환경에서 피로 뚜렷', sent: '부정', cat: 'Design', int: '중', src: 'Reddit', date: '202602', note: 'GL' },
      { sum: '6000nit 마케팅 대비 실측 밝기 괴리. HDR 로컬 밝기 삼성·화웨이 플래그십 미달', sent: '부정', cat: 'Display_Brightness', int: '중', src: 'Notebookcheck', date: '202601', note: 'GL' },
      { sum: '185Hz 메이저 게임 미지원. 경량 타이틀 중심 — 헤비게임 고주사율 체감 미흡', sent: '부정', cat: 'Performance', int: '중', src: '百度贴吧', date: '202602', note: 'CN' }
    ]
};
