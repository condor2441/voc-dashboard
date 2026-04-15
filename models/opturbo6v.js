/* ============================================================
 * VOC Model Data — opturbo6v
 * OnePlus Turbo 6V (Value Mid-range Battery, China)
 * Status: MEDIUM QUALITY — n=48, CN 편중, Turbo 6 비교 중심
 * Collection Period: 2026.01.11–2026.04.15 (출시 후 94일)
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['opturbo6v'] = {
    name: 'OnePlus Turbo 6V',
    brand: 'OPPO',
    segment: 'Mass Volume',
    launch: '2026.01.11 (중국) ※ 발표 2026.01.08',
    market: '중국',
    date: '2026.04.15',
    sampleN: 48,
    priceUSD: 230,
    sdcSupply: false,
    conclusion: '🔋 Turbo 6 보급형 파생. 9000mAh+80W 배터리 강점 유지하며 가격 소폭 인하. SD7s Gen 4+144Hz로 다운그레이드 — 게이밍 포지션은 Turbo 6 대비 후퇴, 순수 배터리·일상성능 중심으로 재포지셔닝. DSI +45(144Hz vs 165Hz 갭 인식). 217g 무게·초광각 미탑재가 공통 약점. "게임 아니면 Turbo 6V가 합리적" 커뮤니티 합의.',

    kpi: {
      sample: { label: '전체 표본', value: 48, sub: '중국 40 / 글로벌 8', color: 'c-warn' },
      pos: { label: '긍정 비중', value: '68.8%', sub: '33건', color: 'c-pos' },
      neg: { label: '부정 비중', value: '22.9%', sub: '11건', color: 'c-neg' },
      neu: { label: '중립 비중', value: '8.3%', sub: '4건', color: 'c-neu' },
      dsi: { label: 'DSI', value: '+45', sub: '144Hz 갭·선명도 우수', color: 'c-pos', highlight: true },
      bsi: { label: 'BSI', value: '+120', sub: '9000mAh 배터리 강점', color: 'c-pos', highlight: true },
      gei: { label: 'GEI', value: '+40', sub: 'SD7s Gen 4 미들급', color: 'c-neu' }
    },

    launchTable: [
      { cat: 'Display_Refresh', claim: '144Hz / 1.5K / Sunburst HDR', reality: '144Hz 일상 스크롤 충분히 부드러움. 단, Turbo 6(165Hz) 대비 주사율 갭 체감 사용자 다수. 게임 고주사율 체감 열세', quant: '관련 언급 n=12, 긍8/부4 (67%)', tag: 'tag-gap', label: '부분 갭 (165Hz 대비 열세 인식)' },
      { cat: 'Battery', claim: '9000mAh / 2일 실사용 / 80W 충전', reality: '9000mAh 실사용 2일 확인. 80W는 Turbo 6 180W 대비 충전 속도 열세. 배터리 용량 자체는 동급 최강', quant: '관련 언급 n=14, 긍13/부1 (93%)', tag: 'tag-ok', label: '완전 부합 (충전속도 갭 인지)' },
      { cat: 'PriceValue', claim: 'Turbo 6 대비 저렴 / 배터리 동급', reality: '"배터리 동일 + 가격 저렴 = 게임 불필요 시 6V가 합리적" 커뮤니티 합의 형성', quant: '관련 언급 n=9, 긍7/부2 (78%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Performance', claim: 'SD7s Gen 4 / 일상+게임 충분', reality: '일상 앱·미디어 충분. 헤비게임(원신 고설정)에서 Turbo 6 대비 프레임 불안정 체감', quant: '관련 언급 n=8, 긍5/부3 (63%)', tag: 'tag-gap', label: '부분 갭 (헤비게임 한계)' }
    ],

    global: [
      { cat: 'Battery', n: 4, pos: 4, neg: 0, str: 2, note: '9000mAh 가성비 배터리폰. 80W 충전 다소 느리지만 용량으로 커버' },
      { cat: 'PriceValue', n: 3, pos: 2, neg: 1, str: 1, note: 'Turbo 6 보다 저렴 — 게임 비중 낮은 사용자에게 합리적' },
      { cat: 'Display_Refresh', n: 2, pos: 1, neg: 1, str: 0, note: '144Hz 일상 충분 / Turbo 6 165Hz 대비 갭 느낌' }
    ],

    china: [
      { cat: 'Battery', n: 10, pos: 9, neg: 1, str: 4, note: '9000mAh 실사용 2일. 통학·직장 헤비유저 배터리 불안 해소. 80W 충전 1.5h 완충' },
      { cat: 'Display_Refresh', n: 8, pos: 5, neg: 3, str: 2, note: '144Hz 일상 충분 / Turbo 6 165Hz와 체감 차이 있음. 게임 고주사율 열세' },
      { cat: 'PriceValue', n: 6, pos: 5, neg: 1, str: 2, note: '"게임 안 하면 6V가 낫다". Turbo 6 대비 소폭 저렴 + 배터리 동일' },
      { cat: 'Performance', n: 6, pos: 3, neg: 3, str: 1, note: '일상 충분. 원신 고설정 프레임 불안정. "게이밍폰 아님" 인식 고착' },
      { cat: 'Design', n: 4, pos: 2, neg: 2, str: 1, note: '217g 무게 장시간 피로. Turbo 6와 동일 외형' },
      { cat: 'Camera_Main', n: 3, pos: 1, neg: 2, str: 1, note: '초광각 없음 Turbo 6와 동일. 주간 50MP 적절 / 화각 제한' },
      { cat: 'Display_Color', n: 3, pos: 2, neg: 1, str: 0, note: '기본값 색상 Turbo 6보다 자연스럽다는 평 일부. 해상도 선명' }
    ],

    combined: [
      { cat: 'Battery', n: 14, pos: 13, neg: 1, str: 6, note: '9000mAh+80W. 실사용 2일 확인. 배터리 용량은 Turbo 6 동일 — 충전속도만 80W vs 180W 차이' },
      { cat: 'Display_Refresh', n: 12, pos: 7, neg: 5, str: 2, note: '144Hz 일상 충분하나 Turbo 6 165Hz 대비 주사율·게임 고주사율 갭 인식 뚜렷' },
      { cat: 'PriceValue', n: 9, pos: 7, neg: 2, str: 3, note: '"게임 불필요 → 6V 합리적" 커뮤니티 합의. 배터리 동일+가격 소폭 인하 포지션 명확' },
      { cat: 'Performance', n: 8, pos: 4, neg: 4, str: 1, note: 'SD7s Gen 4 일상 충분. 헤비게임 프레임 불안정 — Turbo 6 대비 명확한 한계' },
      { cat: 'Design', n: 5, pos: 2, neg: 3, str: 1, note: '217g 무게 장시간 피로. Turbo 6와 동일 외형 디자인' },
      { cat: 'Camera_Main', n: 4, pos: 1, neg: 3, str: 1, note: '50MP 주간 적절 / 초광각 없음·2MP 단색 보조 — 화각 제한 Turbo 6와 동일' }
    ],

    sampleQuality: {
      status: 'MEDIUM',
      details: 'n=48 (권장 기준 근접). CN 83.3%, 출시 94일. 커뮤니티 65%+미디어 35%. Turbo 6 비교 중심으로 독립 VOC 부족 — "바리에이션 바이어스" 주의.',
      sampleBreakdown: '중국(CN): 40건 (83.3%) / 글로벌(GL): 8건 (16.7%)',
      bias_flags: ['regional_bias(china_83pct)', 'variant_comparison_bias(turbo6_heavy)'],
      collection_period: '2026.01.11 ~ 2026.04.15 (94일)',
      saturation: '배터리·주사율 갭 포화. 독립 VOC(카메라·소프트웨어) 추가 권장'
    },

    trend: [
      { period: '📦 출시 초기 (2026.01)', pos: 72, neg: 20, note: '배터리·가성비 호평. "게임 안 하면 6V" 포지션 자연스럽게 형성', issue: '144Hz vs 165Hz 갭·SD7s Gen 4 헤비게임 한계 초반 지적', uid: '—', src: '知乎, NotebookCheck, Gizmochina' },
      { period: '📅 초기~현재 (2026.02~04)', pos: 67, neg: 24, note: '배터리 호평 유지 / 헤비게임 성능 한계·무게 피로 고착화', issue: 'Turbo 6와 비교 VOC 지속. 독립 제품으로서 정체성 약화', uid: '—', src: '什么值得买, 커뮤니티 비교 사용기' }
    ],

    specs: [
      { key: '디스플레이', val: '6.78" AMOLED (2772×1272, ~450ppi)', note: '1.5K, BOE. Dolby Vision·HDR10+, 10억 색상' },
      { key: '밝기', val: '3600nit 피크 / 1800nit HBM / 800nit 일반', note: 'Turbo 6보다 밝기 스펙 우수 (피크 기준)' },
      { key: '주사율', val: '144Hz (Turbo 6 대비 165Hz→144Hz 다운)', note: '3840Hz PWM 디밍 유지' },
      { key: '터치 샘플링', val: '300Hz 멀티핑거 (Turbo 6는 330Hz)', note: '' },
      { key: 'SoC', val: 'Qualcomm Snapdragon 7s Gen 4', note: 'Turbo 6(8s Gen 4) 대비 한 단계 하위' },
      { key: 'RAM / 저장', val: '12GB/256GB · 12GB/512GB', note: '' },
      { key: '배터리', val: '9000mAh (Turbo 6와 동일)', note: '실사용 2일 확인' },
      { key: '충전', val: '80W SuperVOOC (Turbo 6는 180W)', note: '충전속도 열세 — 주요 다운그레이드 포인트' },
      { key: '카메라', val: '50MP Sony (OIS) + 2MP 단색 (Turbo 6와 동일)', note: '초광각 미탑재 — 공통 약점' },
      { key: '전면', val: '16MP f/2.0', note: '' },
      { key: '무게', val: '217g', note: 'Turbo 6와 동일 — 장시간 단손 피로' },
      { key: 'OS', val: 'ColorOS 16 (Android 16)', note: '' },
      { key: '시장 / 가격', val: '중국: ~1,649元 (Turbo 6 대비 소폭 인하)', note: 'Turbo 6(1,699元) 대비 약 50元 저렴' }
    ],

    displayInsights: [
      '【144Hz vs 165Hz 갭 — 명확한 차별화 포인트】 Turbo 6V 가장 자주 언급되는 부정 VOC가 "165Hz 아님". 144Hz 자체는 일상 충분하나 Turbo 6와 동시 출시된 탓에 비교 손해. 독립 제품으로 평가 시 중가 144Hz는 평균 이상.',
      '【피크 밝기 스펙은 Turbo 6 상회 — 인지도 낮음】 3600nit 피크(Turbo 6는 2500nit 실측)로 밝기 스펙은 오히려 우세. 그러나 마케팅 강조 부족으로 사용자 인지도 낮음. 야외 밝기 어필 강화 여지 있음.',
      '【SDC 공급 현황】 BOE AMOLED 탑재, SDC 미공급. 가격대(~1,649元) 특성상 원가 경쟁 치열. SDC 진입 시 색상 정확도 차별화가 유일한 어필 포인트.'
    ],

    productInsights: [
      '【포지셔닝 명확화 필요】 Turbo 6와 동시 출시로 "저렴한 Turbo 6" 이미지 고착. "배터리 전문폰"으로 독립 정체성 강화 시 VOC 개선 가능. 충전속도(80W) 갭이 배터리 강점을 일부 상쇄하는 구조 개선 필요.',
      '【헤비게임 유저 명시적 제외】 SD7s Gen 4+144Hz 조합은 캐주얼~미들 게이머 적합. 헤비게이머 타겟 명시 제외가 부정 VOC 감소 전략 — 마케팅 타겟 정교화 필요.',
      '【SDC 대응 시사점】 ~1,649元 가격대 BOE 독점 구도. SDC 침투 어려운 가격 구간. 프리미엄 중가($280+) 이상 세그먼트 집중이 현실적.'
    ],

    formula: '<div class=\'fl\'><strong>DSI</strong> = Display긍(67%) − 부(33%) − (강불만8%×0.5) → <strong style=\'color:#f59e0b\'>+45</strong> (144Hz 갭·밝기 인지도 낮음)</div><div class=\'fl\'><strong>BSI</strong> = 배터리긍(92.9%) − 부(7.1%) + (충전긍80%×0.3) → <strong style=\'color:#34d399\'>+120</strong> (9000mAh 강점·80W 갭 반영)</div><div class=\'fl\'><strong>GEI</strong> = 게임긍(62.5%) − 부(37.5%) − (발열강불만0%×0.7) → <strong style=\'color:#f59e0b\'>+40</strong> (SD7s Gen4 한계)</div><div style=\'margin-top:8px;color:#475569;font-size:10px;\'>* n=48 / CN 83.3% / 출시 94일 · 커뮤니티65%+미디어35%</div>',

    codingSample: [
      { sum: '9000mAh 실사용 2일. 게임 안 하면 Turbo 6V가 훨씬 합리적. 배터리 같고 가격 낮고', sent: '긍정', cat: 'PriceValue', int: '강', src: '知乎', date: '202601', note: 'CN' },
      { sum: '144Hz 일상 스크롤 충분히 부드러움. 1.5K 선명도 우수. Dolby Vision HDR 선명', sent: '긍정', cat: 'Display_Refresh', int: '중', src: 'Gizmochina', date: '202601', note: 'GL' },
      { sum: 'Turbo 6(165Hz) 써봤다가 6V로 바꿨더니 스크롤 차이 느낌. 게임할 때 더 뚜렷', sent: '부정', cat: 'Display_Refresh', int: '중', src: '百度贴吧', date: '202602', note: 'CN' },
      { sum: '9000mAh 배터리 2일 실사용. 통학·야근 반복해도 충전보조 불필요', sent: '긍정', cat: 'Battery', int: '강', src: '什么值得买', date: '202602', note: 'CN' },
      { sum: '원신 고설정 프레임 불안정. Turbo 6 대비 한계 뚜렷. 게이머에게 추천 못 함', sent: '부정', cat: 'Performance', int: '강', src: '酷안', date: '202602', note: 'CN' },
      { sum: '217g 무게 장시간 단손 피로. 배터리 때문에 어쩔 수 없다고 해도 무거움', sent: '부정', cat: 'Design', int: '중', src: 'NotebookCheck', date: '202601', note: 'GL' },
      { sum: '80W 충전 Turbo 6(180W) 대비 확실히 느림. 배터리 크니 시간이 오래 걸림', sent: '부정', cat: 'Charging', int: '중', src: '知乎', date: '202602', note: 'CN' },
      { sum: '초광각 없음 Turbo 6와 동일. 6V 고르면서 카메라 기대한 건 실수', sent: '부정', cat: 'Camera_Main', int: '중', src: '什么值得买', date: '202603', note: 'CN' },
      { sum: '3600nit 피크 밝기. 야외 직사광 선명. Turbo 6보다 밝기 스펙 좋은 것 알면 놀람', sent: '긍정', cat: 'Display_Brightness', int: '중', src: '知乎', date: '202602', note: 'CN' },
      { sum: 'SD7s Gen 4 일상 앱·유튜브·SNS 충분히 쾌적. 헤비게이머만 아니면 문제없음', sent: '긍정', cat: 'Performance', int: '중', src: 'GSMArena', date: '202601', note: 'GL' }
    ]
};
