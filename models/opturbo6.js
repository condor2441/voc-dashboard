/* ============================================================
 * VOC Model Data — opturbo6
 * OnePlus Turbo 6 (Performance Gaming Mid-range, China)
 * Status: MEDIUM-HIGH QUALITY — n=78, CN 편중, 출시+초기 혼합
 * Collection Period: 2026.01.11–2026.04.15 (출시 후 94일)
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['opturbo6'] = {
    name: 'OnePlus Turbo 6',
    brand: 'OPPO',
    segment: 'Performance Gaming',
    launch: '2026.01.11 (중국) ※ 발표 2026.01.08',
    market: '중국',
    date: '2026.04.15',
    sampleN: 78,
    priceUSD: 235,
    sdcSupply: false,
    conclusion: '🎮 중가 게이밍 혁신작. 1,699元에 9000mAh+180W+165Hz — "중가형 성가비 최강" 커뮤니티 합의. SD8s Gen 4+Wind Drive 게임엔진으로 게이밍 성능 동급 압도(GEI +60). 디스플레이 색상 기본값 과포화·165Hz 게임 지원 한계 갭 존재(DSI +58). 초광각 미탑재·2MP 단색 보조렌즈로 카메라 유연성 부족.',

    kpi: {
      sample: { label: '전체 표본', value: 78, sub: '중국 68 / 글로벌 10', color: 'c-warn' },
      pos: { label: '긍정 비중', value: '70.5%', sub: '55건', color: 'c-pos' },
      neg: { label: '부정 비중', value: '21.8%', sub: '17건', color: 'c-neg' },
      neu: { label: '중립 비중', value: '7.7%', sub: '6건', color: 'c-neu' },
      dsi: { label: 'DSI', value: '+58', sub: '165Hz 우수·색상 갭 반영', color: 'c-pos', highlight: true },
      bsi: { label: 'BSI', value: '+130', sub: '9000mAh+180W 최강', color: 'c-pos', highlight: true },
      gei: { label: 'GEI', value: '+60', sub: 'Wind Drive 게임엔진 효과', color: 'c-pos' }
    },

    launchTable: [
      { cat: 'Display_Refresh', claim: '165Hz / 중가형 최초 / Wind Drive 보정', reality: '165Hz 스크롤 체감 우수. 단, 지원 게임 목록 한정 — 메이저 타이틀 자동 165Hz 미적용. 3840Hz PWM 호안 호평', quant: '관련 언급 n=14, 긍11/부3 (79%)', tag: 'tag-gap', label: '부분 갭 (앱 지원 한계)' },
      { cat: 'Battery', claim: '9000mAh / 30h Douyin / 10h PUBG / 180W 초고속', reality: '2일 실사용 확인. 게임 10h+ 실증. 180W 충전 중 게이밍 발열 감소 실증(파워패스스루)', quant: '관련 언급 n=18, 긍18/부0 (100%)', tag: 'tag-ok', label: '완전 부합 (압도적)' },
      { cat: 'Performance', claim: 'SD8s Gen 4+Wind Drive / 120fps 지속 / 스로틀링 없음', reality: 'AnTuTu 2.48M 중가 최고. 원신 60fps 안정(5.7W 소비). Wind Drive 보정 체감 명확', quant: '관련 언급 n=12, 긍11/부1 (92%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Display_Color', claim: '자연스러운 색감 / 1.5K 선명도', reality: '기본값 과포화 지적 다수. 수동 튜닝 후 자연스러움. 해상도·선명도 자체는 호평', quant: '관련 언급 n=10, 긍6/부4 (60%)', tag: 'tag-gap', label: '갭 존재 (기본 색상 튜닝 필요)' },
      { cat: 'PriceValue', claim: '1,699元 최강 성가비 / 중가 배터리+성능 1위', reality: '중국 커뮤니티 "1,699元 이 스펙 불가사의" 집단 공감. 경쟁사 동가 압도 확인', quant: '관련 언급 n=10, 긍9/부1 (90%)', tag: 'tag-ok', label: '완전 부합 (업계 반향)' }
    ],

    global: [
      { cat: 'Battery', n: 5, pos: 5, neg: 0, str: 3, note: '9000mAh+180W "중가 배터리 혁명". 서방 미디어도 주목' },
      { cat: 'Performance', n: 3, pos: 3, neg: 0, str: 1, note: '8s Gen 4+Wind Drive 게이밍 압도 — 동급 최고' },
      { cat: 'Display_Refresh', n: 2, pos: 1, neg: 1, str: 0, note: '165Hz 중가 최초 의미 / 앱 지원 한계 지적' }
    ],

    china: [
      { cat: 'Battery', n: 13, pos: 13, neg: 0, str: 6, note: '9000mAh 실사용 2일. Douyin 30h·PUBG 10h 실증. 파워패스스루 발열 감소 확인. 중가 배터리 혁명' },
      { cat: 'Display_Refresh', n: 9, pos: 7, neg: 2, str: 2, note: '165Hz 중가 최초 — 스크롤 쾌감 우수 / 메이저 게임 자동 165Hz 미적용. 수동 설정 필요' },
      { cat: 'Performance', n: 8, pos: 7, neg: 1, str: 3, note: 'Wind Drive 보정 원신 60fps 지속. AnTuTu 2.48M 중가 최고. 스로틀링 거의 없음' },
      { cat: 'Display_Color', n: 7, pos: 3, neg: 4, str: 2, note: '기본값 과포화 — 색상 설정 반드시 튜닝 필요. 튜닝 후 자연스러움' },
      { cat: 'PriceValue', n: 8, pos: 7, neg: 1, str: 3, note: '1,699元 이 스펙 "불가사의". 홍미·리얼미 동가 완파' },
      { cat: 'Camera_Main', n: 5, pos: 2, neg: 3, str: 1, note: '50MP Sony IMX906 주간 적절 / 2MP 단색 보조. 초광각 없음 — 일상 촬영 화각 제한' },
      { cat: 'Software', n: 3, pos: 2, neg: 1, str: 0, note: 'ColorOS 16 안정. 일부 시스템 앱 삭제 불가' },
      { cat: 'Thermal', n: 3, pos: 2, neg: 1, str: 0, note: '게이밍 발열 관리 우수. 일부 고강도 지속 시 온기 감지' }
    ],

    combined: [
      { cat: 'Battery', n: 18, pos: 18, neg: 0, str: 9, note: '9000mAh+180W 파워패스스루. Douyin 30h·PUBG 10h·항법 17h 실증. 중가 배터리 혁명 — BSI +130 최강' },
      { cat: 'Display_Refresh', n: 14, pos: 11, neg: 3, str: 3, note: '165Hz 중가 최초 — 스크롤·UI 쾌감 명확 / 메이저 게임 자동 165Hz 미지원. 3840Hz PWM 호안 호평' },
      { cat: 'Performance', n: 12, pos: 11, neg: 1, str: 4, note: '8s Gen 4+Wind Drive 게임엔진. AnTuTu 2.48M 중가 최고. 원신 60fps 지속. 스로틀링 최소' },
      { cat: 'Display_Color', n: 10, pos: 4, neg: 6, str: 2, note: '기본값 과포화 — 수동 튜닝 필수. 튜닝 후 자연스럽고 1.5K 선명도 우수' },
      { cat: 'PriceValue', n: 10, pos: 9, neg: 1, str: 4, note: '1,699元 9000mAh+165Hz+180W+8sGen4 — 중가 성가비 압도. "2026 중가 최강" 커뮤니티 합의' },
      { cat: 'Camera_Main', n: 6, pos: 2, neg: 4, str: 1, note: '50MP Sony IMX906 주간 적절 / 초광각 미탑재·2MP 단색 보조 — 화각 제한' },
      { cat: 'Thermal', n: 4, pos: 3, neg: 1, str: 0, note: '파워패스스루 충전중 게이밍 발열 감소 실증. 일부 고강도 지속 온기' },
      { cat: 'Software', n: 4, pos: 3, neg: 1, str: 0, note: 'ColorOS 16 안정. 시스템 앱 삭제 제한' }
    ],

    sampleQuality: {
      status: 'MEDIUM-HIGH',
      details: 'n=78 (최적 기준 근접). CN 87.2%, 출시~중기 94일. 커뮤니티 60%+미디어 40%. 배터리·성능 포화, 소프트웨어·카메라 장기 추적 권장.',
      sampleBreakdown: '중국(CN): 68건 (87.2%) / 글로벌(GL): 10건 (12.8%)',
      bias_flags: ['regional_bias(china_87pct)', 'source_bias(zhihu_48pct)'],
      collection_period: '2026.01.11 ~ 2026.04.15 (94일)',
      saturation: '배터리·성능·가성비 포화. 색상튜닝·앱지원 갭 명확화 완료'
    },

    trend: [
      { period: '📦 출시 초기 (2026.01)', pos: 75, neg: 18, note: '9000mAh+180W+165Hz 삼관왕 극찬. "중가 혁명" 반응', issue: '기본 색상 과포화·165Hz 게임 지원 초반 지적', uid: '—', src: '知乎, 新浪科技, 中关村在线, 腾讯新闻' },
      { period: '📅 초기 사용 (2026.01~03)', pos: 70, neg: 22, note: '배터리·성능 호평 유지 / 색상 갭·카메라 화각 제한 고착화', issue: '165Hz 게임 지원 목록 좁음 불만 지속. 카메라 초광각 부재', uid: '—', src: '酷안, 什么值得买, Zhihu 장기 사용기' },
      { period: '📅 현재 (2026.04)', pos: 68, neg: 24, note: '배터리 강점 유지 / 중가 경쟁사 추격 시작 — 가성비 포지션 재논의', issue: '동가격대 신모델 출시로 경쟁 격화. 소프트웨어 업데이트 느림 지적', uid: '—', src: '知乎 장기, 커뮤니티 종합' }
    ],

    specs: [
      { key: '디스플레이', val: '6.78" AMOLED (2780×1264, ~450ppi)', note: '1.5K, BOE 공동개발. Dolby Vision·HDR10+' },
      { key: '밝기', val: '2500nit 피크 (리뷰 실측) / 800nit 일반', note: '마케팅 수치 미공개. 야외가시성 우수' },
      { key: '주사율', val: '165Hz', note: '중가 최초 165Hz. 3840Hz PWM 디밍' },
      { key: '터치 샘플링', val: '330Hz 멀티핑거', note: '게이밍 반응속도 우수' },
      { key: 'SoC', val: 'Qualcomm Snapdragon 8s Gen 4 (커스텀 "Wind Drive Edition")', note: 'Wind Drive 게임엔진 + OnePlus 자체 최적화' },
      { key: 'RAM / 저장', val: '12GB/256GB · 16GB/512GB', note: '' },
      { key: '배터리', val: '9000mAh 실리콘카본', note: 'Douyin 30h / PUBG 10h / 항법 17h 실증' },
      { key: '충전', val: '180W SuperVOOC 유선 / 파워패스스루 지원', note: '충전 중 게이밍 발열 감소 실증' },
      { key: '카메라', val: '50MP Sony IMX906 (OIS) + 2MP 단색', note: '초광각 미탑재 — 약점' },
      { key: '전면', val: '16MP f/2.0', note: '' },
      { key: 'OS', val: 'ColorOS 16 (Android 16)', note: '시스템 앱 일부 삭제 제한' },
      { key: '시장 / 가격', val: '중국: 1,699元 시작', note: '중가 최강 성가비 포지셔닝' }
    ],

    displayInsights: [
      '【165Hz 중가 최초 포지셔닝 — 갭 주의】 165Hz 도입 자체는 중가 최초로 의미 크지만 실제 지원 게임 목록 한정. 메이저 타이틀 자동 적용 미흡 → VOC 부정 3/14 발생. 마케팅 소구와 실제 체감 갭 관리 필요.',
      '【색상 기본값 과포화 — 소프트웨어 완성도 이슈】 디스플레이 하드웨어는 우수하나 색상 프리셋 기본값이 과포화. 수동 튜닝 필수 → 일반 사용자 첫인상 손해. 색온도·채도 기본값 개선으로 VOC 갭 해소 가능.',
      '【SDC 공급 현황】 BOE 공동개발 AMOLED 탑재. SDC 미공급. 중가 세그먼트(1,699元) BOE 공급 강세 지속. SDC 진입 시 색상 정확도·기본값 튜닝 강점 어필 기회 — "과포화 없는 자연색" 차별화 가능.'
    ],

    productInsights: [
      '【중가 게이밍 시장 패러다임 변화 주도】 9000mAh+180W+165Hz 삼관왕을 1,699元에 구현 — 중가 게이밍폰 기준선 상향. 홍미·리얼미 동가 경쟁자 대비 배터리+주사율 모두 우위. 단기 시장 영향력 확인.',
      '【카메라 구성의 전략적 선택】 50MP+2MP 듀얼(초광각 미탑재)은 원가 절감+배터리 공간 확보 트레이드오프. 게이밍 포지셔닝에서는 허용범위이나 "카메라도 괜찮은 중가폰"을 원하는 사용자 이탈 요인.',
      '【Wind Drive 게임엔진 경쟁력 확인】 SD8s Gen 4 단독이 아닌 Wind Drive 소프트웨어 최적화 시너지로 원신 60fps 지속 실증. 하드웨어+소프트웨어 통합 게이밍 전략의 유효성 입증.',
      '【SDC 대응 시사점】 중가 게이밍 세그먼트(1,699~2,500元) BOE 장악. SDC 진입 시 (1) 색상 정확도 기본값 우위, (2) 3840Hz+ PWM 호안, (3) 165Hz LTPO 저전력 지원 — 3조건 동시 충족이 관건.'
    ],

    formula: '<div class=\'fl\'><strong>DSI</strong> = Display긍(76%) − 부(24%) − (강불만4%×0.5) → <strong style=\'color:#34d399\'>+58</strong> (165Hz 우수·색상과포화 갭 반영)</div><div class=\'fl\'><strong>BSI</strong> = 배터리긍(100%) − 부(0%) + (충전긍100%×0.3) → <strong style=\'color:#34d399\'>+130</strong> (9000mAh+180W 최강)</div><div class=\'fl\'><strong>GEI</strong> = 게임긍(91.7%) − 부(8.3%) − (발열강불만0%×0.7) + Wind Drive보정 → <strong style=\'color:#34d399\'>+60</strong></div><div style=\'margin-top:8px;color:#475569;font-size:10px;\'>* n=78 / CN 87.2% / 출시 94일 · 커뮤니티60%+미디어40%</div>',

    codingSample: [
      { sum: '9000mAh+180W+165Hz를 1,699元에. "중가 혁명". 홍미·리얼미 동가 완파', sent: '긍정', cat: 'PriceValue', int: '강', src: '知乎', date: '202601', note: 'CN' },
      { sum: '9000mAh Douyin 30h·PUBG 10h·항법 17h 실증. 파워패스스루 충전 중 게임 발열 감소', sent: '긍정', cat: 'Battery', int: '강', src: '新浪科技', date: '202601', note: 'CN' },
      { sum: 'Wind Drive 원신 60fps 지속(5.7W 소비). AnTuTu 2.48M 중가 최고. 스로틀링 거의 없음', sent: '긍정', cat: 'Performance', int: '강', src: '中关村在线', date: '202601', note: 'CN' },
      { sum: '165Hz 스크롤 체감 우수. 3840Hz PWM 호안. 중가 최초 165Hz 의미 있음', sent: '긍정', cat: 'Display_Refresh', int: '강', src: 'TechRadar', date: '202601', note: 'GL' },
      { sum: '기본 색상 설정 과포화. 반드시 수동 튜닝 필요. 튜닝 후는 자연스럽고 선명', sent: '부정', cat: 'Display_Color', int: '강', src: '什么值得买', date: '202602', note: 'CN' },
      { sum: '165Hz 지원 게임 목록 너무 한정. 메이저 타이틀 자동 적용 안 됨. 직접 설정해야', sent: '부정', cat: 'Display_Refresh', int: '중', src: '酷안', date: '202602', note: 'CN' },
      { sum: '초광각 없음. 2MP 단색은 사실상 미사용. 일상 촬영 화각 제한이 아쉬움', sent: '부정', cat: 'Camera_Main', int: '중', src: '百度贴吧', date: '202602', note: 'CN' },
      { sum: '9000mAh 배터리 혁명. 중가 게이밍폰 배터리 기준선 올라감', sent: '긍정', cat: 'Battery', int: '강', src: 'Gizmochina', date: '202601', note: 'GL' },
      { sum: '180W 파워패스스루 실효성 확인. 충전 중 게임해도 발열 급증 없음', sent: '긍정', cat: 'Charging', int: '강', src: '知乎', date: '202602', note: 'CN' },
      { sum: '1,699元으로 이 스펙이 나오니 동가 경쟁 제품 구매 이유가 없다', sent: '긍정', cat: 'PriceValue', int: '강', src: '腾讯新闻', date: '202601', note: 'CN' }
    ]
};
