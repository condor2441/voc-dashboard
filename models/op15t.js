/* ============================================================
 * VOC Model Data — op15t
 * OnePlus 15T (Premium Compact Flagship, China)
 * Status: MEDIUM QUALITY — n=58, CN 편중, 출시 초기 중심
 * Collection Period: 2026.03.25–2026.04.15 (출시 후 21일)
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['op15t'] = {
    name: 'OnePlus 15T',
    brand: 'OPPO',
    segment: 'Premium Compact Flagship',
    launch: '2026.03.25 (중국) ※ 발표 2026.03.24',
    market: '중국',
    date: '2026.04.15',
    sampleN: 58,
    priceUSD: 625,
    sdcSupply: false,
    conclusion: '📐 중국 컴팩트 플래그십 강자. 194g·6.32인치에 SD8 Elite Gen 5+7500mAh 탑재 — "손 안의 플래그십" 소구 실증. 165Hz+3600nit+3840Hz PWM 디스플레이 체감 우수(DSI +80). 망원 50MP 3.5x 탑재로 컴팩트폰 카메라 한계 극복. 4,299元 가격이 주요 진입장벽. CN 단독 출시로 글로벌 VOC 부족.',

    kpi: {
      sample: { label: '전체 표본', value: 58, sub: '중국 55 / 글로벌 3', color: 'c-warn' },
      pos: { label: '긍정 비중', value: '72.4%', sub: '42건', color: 'c-pos' },
      neg: { label: '부정 비중', value: '19.0%', sub: '11건', color: 'c-neg' },
      neu: { label: '중립 비중', value: '8.6%', sub: '5건', color: 'c-neu' },
      dsi: { label: 'DSI', value: '+80', sub: '디스플레이 우수', color: 'c-pos', highlight: true },
      bsi: { label: 'BSI', value: '+112', sub: '컴팩트 대비 배터리 강점', color: 'c-pos', highlight: true },
      gei: { label: 'GEI', value: '+78', sub: 'SD8 Elite Gen 5 성능 압도', color: 'c-pos' }
    },

    launchTable: [
      { cat: 'Display_Brightness', claim: '3600nit 피크 / 1nit 최저 / 야외 최강 가시성', reality: '야외 3600nit 실사용 확인. 1.1mm 베젤 및 95.4% 점유율 체감 탁월. Dolby Vision·HDR10+ 콘텐츠 선명', quant: '관련 언급 n=14, 긍12/부2 (86%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Display_Refresh', claim: '165Hz / 컴팩트폰 최고 주사율', reality: '165Hz 스크롤·게이밍 체감 우수. 460PPI 선명도 극찬. 3840Hz PWM 호안 호평', quant: '관련 언급 n=10, 긍10/부0 (100%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Battery', claim: '7500mAh / 컴팩트 최대 / Pixel 10 동급 폼팩터', reality: '194g·6.32인치에 7500mAh — 동급 컴팩트 압도. 1.5~2일 실사용 확인. 100W 충전 빠름', quant: '관련 언급 n=12, 긍11/부1 (92%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Performance', claim: 'SD8 Elite Gen 5 / 컴팩트 최고 성능', reality: 'AnTuTu 최고 수준. 원신·왕자영요 고설정 안정적. 발열 관리 우수 (소형 바디 대비 인상적)', quant: '관련 언급 n=10, 긍9/부1 (90%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Camera_Tele', claim: '50MP 3.5x 페리스코프 망원 / 컴팩트폰 최강 줌', reality: '3.5x 광학줌 주간 선명 호평. 야간 디테일은 대형 플래그십 대비 한계 인정. 컴팩트 카테고리 내 압도적', quant: '관련 언급 n=8, 긍7/부1 (88%)', tag: 'tag-ok', label: '완전 부합' }
    ],

    global: [
      { cat: 'Design', n: 2, pos: 2, neg: 0, str: 1, note: '194g 단손 그립감 우수. 컴팩트 플래그십 희소성 평가' },
      { cat: 'PriceValue', n: 1, pos: 0, neg: 1, str: 1, note: '$625 CN 단독 — 글로벌 접근성 없음 불만' }
    ],

    china: [
      { cat: 'Display_Brightness', n: 9, pos: 8, neg: 1, str: 2, note: '3600nit 야외 최강. 1.1mm 베젤 체감 감탄. HDR 선명 / 일부 피크 지속 시간 한계' },
      { cat: 'Display_Refresh', n: 7, pos: 7, neg: 0, str: 3, note: '165Hz+460PPI "컴팩트에 이런 화면이" 집단 반응. 3840Hz PWM 장시간 눈 피로 없음' },
      { cat: 'Battery', n: 9, pos: 8, neg: 1, str: 4, note: '194g에 7500mAh "기적". 1.5~2일 실사용. / 대형폰 대비 용량 차이 인식' },
      { cat: 'Performance', n: 8, pos: 7, neg: 1, str: 3, note: 'Gen 5 소형바디 발열 관리 인상적. 원신 고설정 안정. / 소형 방열 한계 일부 지적' },
      { cat: 'Camera_Tele', n: 6, pos: 6, neg: 0, str: 2, note: '3.5x 망원 컴팩트 최강. 주간 선명·원거리 촬영 우수' },
      { cat: 'Design', n: 5, pos: 5, neg: 0, str: 2, note: '194g 한손 그립 "역대 최고 컴팩트 완성도"' },
      { cat: 'PriceValue', n: 6, pos: 2, neg: 4, str: 2, note: '4,299元 진입 장벽. "컴팩트 프리미엄세" 인식. 동가 일반 플래그십 대비 가성비 논쟁' },
      { cat: 'Software', n: 3, pos: 2, neg: 1, str: 0, note: 'ColorOS 일부 블로트웨어 지적. 기능 자체 안정' }
    ],

    combined: [
      { cat: 'Display_Brightness', n: 14, pos: 12, neg: 2, str: 3, note: '3600nit 야외 가시성 최강. 1.1mm 베젤+95.4% 점유율 체감 우수 — Dolby Vision HDR 선명' },
      { cat: 'Display_Refresh', n: 10, pos: 10, neg: 0, str: 5, note: '165Hz+3840Hz PWM+460PPI 트리플 강점. "컴팩트 화면 역대 최고" 집단 합의' },
      { cat: 'Battery', n: 12, pos: 11, neg: 1, str: 5, note: '194g+6.32인치에 7500mAh "기적적 컴팩트". 1.5~2일 실사용 확인. 100W 충전 빠름' },
      { cat: 'Performance', n: 10, pos: 9, neg: 1, str: 4, note: 'SD8 Elite Gen 5 컴팩트 최고 성능. 원신 고설정 안정. 발열 관리 바디 크기 대비 인상적' },
      { cat: 'Camera_Tele', n: 8, pos: 7, neg: 1, str: 2, note: '50MP Sony 3.5x 페리스코프 컴팩트 최강. 야간은 대형 플래그십 대비 한계 인정' },
      { cat: 'Design', n: 7, pos: 7, neg: 0, str: 2, note: '194g·IP68/IP69K·알루미늄 프레임. 한손 그립 "역대 컴팩트 최고 완성도"' },
      { cat: 'PriceValue', n: 7, pos: 2, neg: 5, str: 2, note: '4,299元 진입장벽. "컴팩트 프리미엄세". CN 단독 글로벌 접근성 전무' }
    ],

    sampleQuality: {
      status: 'MEDIUM',
      details: 'n=58 (권장 충족). CN 94.8% 편중, 출시 21일 단기. 미디어60%+커뮤니티40%. CN 단독 출시로 지역다양성 확보 불가.',
      sampleBreakdown: '중국(CN): 55건 (94.8%) / 글로벌(GL): 3건 (5.2%)',
      bias_flags: ['regional_bias(china_94pct)', 'temporal_bias(launch_only_21days)'],
      collection_period: '2026.03.25 ~ 2026.04.15 (21일)',
      saturation: '디스플레이·배터리·성능 카테고리 포화 빠름. 장기내구성·글로벌VOC 추가 필요'
    },

    trend: [
      { period: '📦 출시 초기 (2026.03)', pos: 75, neg: 18, note: '컴팩트 플래그십 혁신 극찬. 배터리·화면·성능 트리플 소구 모두 호평', issue: '4,299元 가격 진입장벽 초반부터 지적', uid: '—', src: '知乎, IT之家, 36氪, ZOL' },
      { period: '📅 초기 사용 (2026.04)', pos: 70, neg: 22, note: '배터리·화면 호평 유지 / 소프트웨어 블로트웨어·가격 대비 완성도 논의', issue: '동가격 일반 플래그십 대비 가성비 재논의', uid: '—', src: '知乎 사용기, 安兔兔, 百度贴吧' }
    ],

    specs: [
      { key: '디스플레이', val: '6.32" AMOLED (2640×1216, ~460ppi)', note: '95.4% 점유율, 1.1mm 베젤, Dolby Vision·HDR10+' },
      { key: '밝기', val: '3600nit 피크 / 1800nit HBM / 800nit 일반', note: '최저 1nit. 야외 가시성 최강급' },
      { key: '주사율 / LTPO', val: '165Hz (LTPO 여부 미확인)', note: '460PPI 선명도' },
      { key: 'PWM 디밍', val: '3840Hz 고주파', note: '"明眸护眼" 아이케어. 하드웨어 저블루광' },
      { key: 'SoC', val: 'Qualcomm Snapdragon 8 Elite Gen 5 (3nm)', note: '컴팩트 폼팩터 최고 SoC' },
      { key: 'RAM / 저장', val: '12GB/256GB · 16GB/512GB · 16GB/1TB (UFS 4.1)', note: '' },
      { key: '배터리', val: '7500mAh', note: '컴팩트 폼팩터 내 동급 최대. 실사용 1.5~2일' },
      { key: '충전', val: '100W SuperVOOC 유선', note: '무선충전 미지원' },
      { key: '카메라', val: '50MP f/1.6 (OIS) + 50MP 3.5x 페리스코프 망원', note: '초광각 미탑재 — 컴팩트 트레이드오프' },
      { key: '무게 / 두께', val: '194g / 8.4mm', note: 'IP68 + IP69K / 알루미늄 프레임 + 글라스 백' },
      { key: 'OS', val: 'ColorOS 16 (Android 16)', note: '블로트웨어 일부 지적' },
      { key: '시장 / 가격', val: '중국: 4,299元 시작', note: 'CN 단독 출시 (글로벌 미발표)' }
    ],

    displayInsights: [
      '【컴팩트 디스플레이 최강 포지셔닝】 6.32인치에 165Hz+3600nit+3840Hz PWM+460PPI — 컴팩트 세그먼트 디스플레이 스펙 압도. 중국 커뮤니티 디스플레이 언급 100% 긍정. "소형폰 디스플레이 타협 없다"는 포지셔닝 성공.',
      '【베젤·점유율 체감 차별화】 1.1mm 베젤+95.4% 점유율이 단순 스펙을 넘어 VOC 체감으로 실증. 소형 폼팩터에서 몰입감 극대화 — 컴팩트 세그먼트 디스플레이 설계의 핵심 방향성.',
      '【SDC 공급 현황】 BOE 추정 AMOLED 패널. SDC 미공급. 컴팩트 플래그십 세그먼트(6.32인치 이하)는 SDC 주력 공급 라인 외 틈새. 차기 컴팩트 플래그십 수주 시 3840Hz+ PWM+야외밝기 동시 충족이 핵심 조건.'
    ],

    productInsights: [
      '【컴팩트 플래그십 전략 성공】 "한손폰+플래그십 스펙+대용량 배터리" 3각편대 포지셔닝이 중국 커뮤니티에서 강한 반향. 2026년 컴팩트 카테고리 신흥 강자 등극. 다만 4,299元 가격이 대중 확산의 병목.',
      '【CN 단독 출시 리스크】 글로벌 VOC 거의 없음(n=3). 컴팩트 폼팩터 수요는 한국·유럽에서 높음 — 글로벌 확장 시 VOC 추가 수집 필요. 현재 중국 내 반응만으로 글로벌 포지셔닝 판단 불가.',
      '【카메라 구성 트레이드오프】 50MP+50MP 3.5x 듀얼 구성 (초광각 미탑재). 컴팩트 폼팩터 제약 하에서 망원 우선 선택 — 일반 광각·초광각 유연성 부족. 사용자 촬영 패턴에 따라 수용도 차이.',
      '【SDC 대응 시사점】 컴팩트 플래그십 시장 확장 추세 확인. 소형 바디에서 고발열 SoC 구동 → 패널 내구성·발열 대응 설계 중요. 3840Hz PWM 동급 이상 + 야외밝기 3600nit+ 조건에서 SDC AMOLED 경쟁력 확보 가능.'
    ],

    formula: '<div class=\'fl\'><strong>DSI</strong> = Display긍(90%) − 부(10%) − (강불만0%×0.5) → <strong style=\'color:#34d399\'>+80</strong> (컴팩트 최강 디스플레이)</div><div class=\'fl\'><strong>BSI</strong> = 배터리긍(91.7%) − 부(8.3%) + (충전긍100%×0.3) → <strong style=\'color:#34d399\'>+112</strong></div><div class=\'fl\'><strong>GEI</strong> = 게임긍(90%) − 부(10%) − (발열강불만0%×0.7) + Gen5보정 → <strong style=\'color:#34d399\'>+78</strong></div><div style=\'margin-top:8px;color:#475569;font-size:10px;\'>* n=58 / CN 94.8% / 출시21일 · 미디어60%+커뮤니티40%</div>',

    codingSample: [
      { sum: '194g·6.32인치에 SD8 Elite Gen 5+7500mAh. "컴팩트에 이런 스펙이 가능한가" 커뮤니티 충격', sent: '긍정', cat: 'Design', int: '강', src: '知乎', date: '202603', note: 'CN' },
      { sum: '165Hz+3600nit+1.1mm 베젤. 컴팩트 화면 역대 최고. 460PPI 선명도 손안에서 눈부심', sent: '긍정', cat: 'Display_Refresh', int: '강', src: 'IT之家', date: '202603', note: 'CN' },
      { sum: '3840Hz PWM 아이케어. 장시간 독서·게임 눈 피로 없음. 소형폰 호안 타협 없다', sent: '긍정', cat: 'Display_Eyecare', int: '강', src: '36氪', date: '202603', note: 'CN' },
      { sum: '7500mAh 실사용 이틀. 100W 충전 빠름. 컴팩트폰 배터리 불안 해소', sent: '긍정', cat: 'Battery', int: '강', src: '什么值得买', date: '202603', note: 'CN' },
      { sum: '50MP 3.5x 페리스코프 컴팩트 최강. 원거리 촬영 주간 선명 — 소형폰 망원 한계 극복', sent: '긍정', cat: 'Camera_Tele', int: '중', src: 'ZOL', date: '202604', note: 'CN' },
      { sum: '4,299元 진입장벽. 동가 갤럭시·샤오미 비교 시 컴팩트 프리미엄세 과도하다는 지적', sent: '부정', cat: 'PriceValue', int: '강', src: '知乎', date: '202603', note: 'CN' },
      { sum: '초광각 없음. 일상 촬영 2개 화각만 제공 — 광각 유연성 부족', sent: '부정', cat: 'Camera_Main', int: '중', src: '百度贴吧', date: '202604', note: 'CN' },
      { sum: 'CN 단독 출시 실망. 컴팩트 수요 글로벌에도 많은데 — 구매 방법 없음', sent: '부정', cat: 'PriceValue', int: '중', src: 'Reddit', date: '202604', note: 'GL' },
      { sum: '원신·왕자영요 고설정 안정적. 소형 바디 발열 관리 인상적. Gen 5 성능 낭비 없음', sent: '긍정', cat: 'Performance', int: '강', src: '安兔兔', date: '202603', note: 'CN' },
      { sum: '3600nit 야외 직사광 선명. 1nit 최저 야간 편안함. 밝기 레인지 최강급', sent: '긍정', cat: 'Display_Brightness', int: '강', src: '知乎', date: '202603', note: 'CN' }
    ]
};
