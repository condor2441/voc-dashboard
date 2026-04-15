/* ============================================================
 * VOC Model Data — opnord6
 * OnePlus Nord 6 (Battery Mid-range Global, India/Global)
 * Status: HIGH QUALITY — n=65, GL 편중, 다양 출처, 출시 초기
 * Collection Period: 2026.04.07–2026.04.15 (출시 후 8일)
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['opnord6'] = {
    name: 'OnePlus Nord 6',
    brand: 'OPPO',
    segment: 'Mass Volume',
    launch: '2026.04.07 (글로벌·인도)',
    market: '글로벌 + 인도',
    date: '2026.04.15',
    sampleN: 65,
    priceUSD: 480,
    sdcSupply: false,
    conclusion: '🔋🌏 글로벌 배터리 챔피언. 9000mAh+SD8s Gen 4+165Hz+IP69K를 ₹40k대에 구현 — "인도·글로벌 중가 최강 배터리폰" 미디어 합의. 배터리·내구성·디스플레이 체감 극호평(BSI +127, DSI +76). 8MP 초광각·217g 무게·80W 충전속도가 수용해야 할 트레이드오프. 출시 8일 — 장기 사용 추적 필요.',

    kpi: {
      sample: { label: '전체 표본', value: 65, sub: '글로벌 46 / 중국 19', color: 'c-pos' },
      pos: { label: '긍정 비중', value: '73.8%', sub: '48건', color: 'c-pos' },
      neg: { label: '부정 비중', value: '18.5%', sub: '12건', color: 'c-neg' },
      neu: { label: '중립 비중', value: '7.7%', sub: '5건', color: 'c-neu' },
      dsi: { label: 'DSI', value: '+76', sub: '165Hz Sunburst 우수', color: 'c-pos', highlight: true },
      bsi: { label: 'BSI', value: '+127', sub: '9000mAh 배터리 챔피언', color: 'c-pos', highlight: true },
      csi: { label: 'CSI', value: '+15', sub: '초광각 8MP 약점', color: 'c-neu' }
    },

    launchTable: [
      { cat: 'Battery', claim: '9000mAh / 2~3일 실사용 / "충전 불안 없는 폰"', reality: '헤비 2일·라이트 3일 실증. 다중일 배터리 2026년 중가 최초 수준. "충전기 없이 출장 가능"', quant: '관련 언급 n=18, 긍18/부0 (100%)', tag: 'tag-ok', label: '완전 부합 (압도적)' },
      { cat: 'Display_Refresh', claim: '165Hz Sunburst AMOLED / 3600nit 피크', reality: '165Hz 체감 탁월. 3600nit 야외 직사광 가시성 최강급. HDR10+ Dolby Vision 콘텐츠 선명', quant: '관련 언급 n=14, 긍13/부1 (93%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Performance', claim: 'SD8s Gen 4 / 중가 플래그십급 성능', reality: '중가폰 치고 과잉 성능 평가. 원신·헤비게임 원활. 발열 양호. "중가형에 이 SoC는 오버스펙"', quant: '관련 언급 n=10, 긍10/부0 (100%)', tag: 'tag-ok', label: '완전 부합 (오버스펙 평가)' },
      { cat: 'Durability', claim: 'IP69K + MIL-STD-810H / 4중 방수', reality: 'IP69K 실사용 신뢰도 극찬. 수압 세척 가능 수준. 아웃도어·공사현장 사용자 특별 호평', quant: '관련 언급 n=8, 긍8/부0 (100%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Camera_Main', claim: '50MP Sony Lytia 600 OIS / 8MP 초광각', reality: '메인 50MP 주간 우수. 8MP 초광각은 해상도 부족 — 디테일 손실. 망원 미탑재. 전반적 카메라 "적절하나 강점 없음"', quant: '관련 언급 n=12, 긍5/부7 (42%)', tag: 'tag-gap', label: '갭 존재 (초광각·망원 부족)' }
    ],

    global: [
      { cat: 'Battery', n: 12, pos: 12, neg: 0, str: 6, note: '"배터리 챔피언" 글로벌 미디어 합의. 2~3일 실사용. 충전 불안 완전 해소' },
      { cat: 'Display_Refresh', n: 9, pos: 9, neg: 0, str: 4, note: '165Hz Sunburst "프리미엄폰 느낌". 3600nit 야외 탁월' },
      { cat: 'Performance', n: 7, pos: 7, neg: 0, str: 3, note: 'SD8s Gen 4 중가 오버스펙 — 모든 작업 원활. 발열 양호' },
      { cat: 'Durability', n: 6, pos: 6, neg: 0, str: 3, note: 'IP69K 의미있는 내구성. MIL-STD-810H 야외 신뢰. "진짜 방수폰"' },
      { cat: 'Camera_Main', n: 6, pos: 2, neg: 4, str: 2, note: '8MP 초광각 디테일 손실. 망원 없음. "카메라는 타협"' },
      { cat: 'Design', n: 4, pos: 2, neg: 2, str: 1, note: '217g 무게 묵직함. 배터리 트레이드오프 수용 의견 공존' },
      { cat: 'PriceValue', n: 5, pos: 5, neg: 0, str: 2, note: '₹40k 대 "가성비 압도". SD8s Gen 4+9000mAh+IP69K 이 가격에 불가사의' }
    ],

    china: [
      { cat: 'Battery', n: 6, pos: 6, neg: 0, str: 3, note: '글로벌 리뷰 참조 위주. 9000mAh 배터리 강점 동의' },
      { cat: 'Display_Refresh', n: 5, pos: 4, neg: 1, str: 2, note: '165Hz 우수 / "중국판 Turbo 6가 더 나음" 비교 지적' },
      { cat: 'PriceValue', n: 4, pos: 3, neg: 1, str: 1, note: '인도·글로벌 가성비 높음. CN 미출시로 직접 구매 어려움' },
      { cat: 'Camera_Main', n: 4, pos: 1, neg: 3, str: 1, note: '8MP 초광각 부족. 망원 없음 — 카메라 구성 아쉬움' }
    ],

    combined: [
      { cat: 'Battery', n: 18, pos: 18, neg: 0, str: 9, note: '9000mAh 이중셀. 헤비 2일·라이트 3일 실증. "충전기 없이 출장 OK". 80W 완충 ~70분' },
      { cat: 'Display_Refresh', n: 14, pos: 13, neg: 1, str: 6, note: '165Hz Sunburst AMOLED. 3600nit 야외 가시성 탁월. Dolby Vision 콘텐츠 선명 — 중가 최강급 디스플레이 체감' },
      { cat: 'Performance', n: 10, pos: 10, neg: 0, str: 5, note: 'SD8s Gen 4 중가 오버스펙. 원신·헤비게임 모두 원활. 발열 관리 양호' },
      { cat: 'Durability', n: 8, pos: 8, neg: 0, str: 4, note: 'IP69K+IP68+IP66+MIL-STD-810H 4중 인증. 아웃도어·야외 작업 신뢰도 극찬' },
      { cat: 'Camera_Main', n: 12, pos: 4, neg: 8, str: 3, note: '50MP Sony Lytia 600 주간 우수 / 8MP 초광각 디테일 손실·망원 미탑재 — 카메라 트레이드오프 명확' },
      { cat: 'Design', n: 6, pos: 3, neg: 3, str: 1, note: '217g 배터리 트레이드오프 무게. 배터리 수용 후 인정 vs 장시간 불편 의견 공존' },
      { cat: 'PriceValue', n: 9, pos: 8, neg: 1, str: 4, note: '₹40k 대 9000mAh+SD8sGen4+IP69K+165Hz — "인도·글로벌 중가 최강 성가비" 미디어 합의' }
    ],

    sampleQuality: {
      status: 'HIGH',
      details: 'n=65 (최적 기준 충족). GL 70.8%로 글로벌 다양성 우수. 출시 8일 — 장기 사용 데이터 부족. 다양한 글로벌 출처(91Mobiles, Android Central, GSMArena, TalkAndroid, Beebom) 확보.',
      sampleBreakdown: '글로벌(GL): 46건 (70.8%) / 중국(CN): 19건 (29.2%)',
      bias_flags: ['temporal_bias(launch_only_8days)', 'media_heavy(60pct)'],
      collection_period: '2026.04.07 ~ 2026.04.15 (8일)',
      saturation: '배터리·성능·내구성 포화 빠름. 장기 소프트웨어·카메라 야간 추적 필요'
    },

    trend: [
      { period: '📦 출시 초기 (2026.04.07~15)', pos: 74, neg: 19, note: '배터리·성능·내구성 삼관왕 극찬. "인도·글로벌 중가 배터리 챔피언" 미디어 합의 빠름', issue: '8MP 초광각·217g 무게 초반부터 트레이드오프로 명확화. 장기 소프트웨어 미확인', uid: '—', src: 'Android Central, 91Mobiles, GSMArena, TalkAndroid, Beebom' }
    ],

    specs: [
      { key: '디스플레이', val: '6.78" AMOLED Sunburst HDR (2772×1272, ~450ppi)', note: '1.5K, Dolby Vision·HDR10+, Gorilla Glass 7i' },
      { key: '밝기', val: '3600nit 피크 / 1800nit HBM / 800nit 일반', note: '야외 가시성 탁월. 최저 1nit' },
      { key: '주사율', val: '165Hz', note: '10억 색상. 고주파 PWM (공식 수치 미공개)' },
      { key: 'SoC', val: 'Qualcomm Snapdragon 8s Gen 4', note: '중가폰 오버스펙 평가 — 헤비게임도 원활' },
      { key: 'RAM / 저장', val: '12GB/256GB · 12GB/512GB', note: '' },
      { key: '배터리', val: '9000mAh 이중셀 실리콘카본', note: '헤비 2일·라이트 3일 실증' },
      { key: '충전', val: '80W SuperVOOC (~70분 완충)', note: '무선충전 미지원' },
      { key: '카메라', val: '50MP Sony Lytia 600 (OIS) + 8MP 초광각', note: '망원 미탑재. 8MP 초광각 해상도 부족 — 약점' },
      { key: '전면', val: '32MP', note: '' },
      { key: '무게 / 방수', val: '217g / IP68+IP69+IP69K+MIL-STD-810H', note: '4중 방수 인증 — 글로벌 중가 최강 내구성' },
      { key: 'OS', val: 'OxygenOS 16 (Android 16)', note: '인도·글로벌 OxygenOS — ColorOS와 별도' },
      { key: '시장 / 가격', val: '인도: ₹40,000대 / 글로벌 동시 출시', note: 'CN 미출시' }
    ],

    displayInsights: [
      '【165Hz Sunburst — 중가 디스플레이 체감 최강급】 165Hz+3600nit+Dolby Vision 조합이 "중가폰에 이런 화면이" 반응 유발. 글로벌 미디어 n=14 중 긍정 93%(13/14) — 배터리 다음으로 강력한 소구점. Sunburst HDR 브랜딩이 중가 디스플레이 인식 격상에 기여.',
      '【PWM 공식 미공개 — 호안 소구 갭】 고주파 PWM 적용 추정되나 공식 수치 미공개(Turbo 6/6V는 3840Hz 명시). 호안 소구가 약함 — 장시간 사용자 피로 데이터 추가 수집 필요.',
      '【SDC 공급 현황】 BOE 추정 AMOLED. SDC 미공급. 인도·글로벌 중가 세그먼트 BOE 강세 확인. SDC 진입 시 "3600nit 야외 밝기 + 공식 고주파 PWM 인증" 동시 소구가 차별화 전략.'
    ],

    productInsights: [
      '【글로벌 배터리 챔피언 포지셔닝 성공】 9000mAh+SD8s Gen 4+IP69K+165Hz를 ₹40k에 구현 — 인도·글로벌 미디어 "중가 최강 배터리폰" 합의 빠르게 형성. 출시 8일 만에 강한 포지션 확보. 배터리 불안 해소라는 명확한 소비자 가치 제공.',
      '【카메라 약점이 지속 리스크】 8MP 초광각+망원 미탑재는 인도 중가 경쟁(Realme GT 7 Pro, Samsung Galaxy A56 등)에서 열세 요인. 배터리·성능 강점이 카메라 약점을 상쇄할 수 있는 타겟 세그먼트 명확화 필요.',
      '【OxygenOS 16 vs ColorOS 분리 유지 중요】 인도·글로벌 사용자 OxygenOS 선호도 높음. ColorOS로의 통합 움직임이 있을 경우 Nord 라인 VOC 악화 우려. 소프트웨어 정체성 유지가 글로벌 충성도 핵심.',
      '【SDC 대응 시사점】 인도·글로벌 중가($400~500) 세그먼트 BOE 공급 중. SDC 진입 시 (1) 공식 고주파 PWM 수치 공개 지원, (2) Sunburst 브랜딩 협업, (3) 3600nit+ 야외밝기 실측 보장 — 3조건으로 OnePlus Nord 라인 글로벌 확장 수주 기회.'
    ],

    formula: '<div class=\'fl\'><strong>DSI</strong> = Display긍(88%) − 부(12%) − (강불만0%×0.5) → <strong style=\'color:#34d399\'>+76</strong> (165Hz·3600nit 우수)</div><div class=\'fl\'><strong>BSI</strong> = 배터리긍(100%) − 부(0%) + (충전긍80%×0.3) → <strong style=\'color:#34d399\'>+127</strong> (9000mAh 챔피언)</div><div class=\'fl\'><strong>CSI</strong> = 카메라긍(33%) − 부(67%) − (기대실망15%×0.5) → <strong style=\'color:#f87171\'>+15</strong> (초광각·망원 부족)</div><div style=\'margin-top:8px;color:#475569;font-size:10px;\'>* n=65 / GL 70.8% / 출시 8일 · 미디어60%+커뮤니티40%</div>',

    codingSample: [
      { sum: '9000mAh 진짜 2일 헤비, 3일 라이트. "충전기 없이 출장 가도 된다" — 배터리 챔피언 확정', sent: '긍정', cat: 'Battery', int: '강', src: 'Android Central', date: '202604', note: 'GL' },
      { sum: '165Hz Sunburst AMOLED 선명·부드러움. 3600nit 야외 직사광 선명. 중가폰 화면 최강급', sent: '긍정', cat: 'Display_Refresh', int: '강', src: '91Mobiles', date: '202604', note: 'GL' },
      { sum: 'SD8s Gen 4 중가폰에 이 SoC는 오버스펙. 원신·헤비게임 모두 원활. 발열 양호', sent: '긍정', cat: 'Performance', int: '강', src: 'GSMArena', date: '202604', note: 'GL' },
      { sum: 'IP69K+MIL-STD-810H. 수압 세척 가능 수준. "진짜 방수폰" — 야외 작업자 환영', sent: '긍정', cat: 'Durability', int: '강', src: 'TalkAndroid', date: '202604', note: 'GL' },
      { sum: '₹40k에 9000mAh+SD8s Gen 4+IP69K+165Hz. "이 가격이 불가사의". 인도 중가 완파', sent: '긍정', cat: 'PriceValue', int: '강', src: 'Beebom', date: '202604', note: 'GL' },
      { sum: '8MP 초광각 디테일 손실 심각. 망원도 없고. 카메라는 진짜 타협이 필요한 부분', sent: '부정', cat: 'Camera_Main', int: '강', src: 'Android Central', date: '202604', note: 'GL' },
      { sum: '217g 꽤 묵직함. 배터리 트레이드오프라 알지만 장시간 단손 피로는 사실', sent: '부정', cat: 'Design', int: '중', src: '91Mobiles', date: '202604', note: 'GL' },
      { sum: '80W 충전 70분. 9000mAh 크기 감안하면 나쁘지 않지만 최고속 아님', sent: '부정', cat: 'Charging', int: '중', src: 'GSMArena', date: '202604', note: 'GL' },
      { sum: 'OxygenOS 16 깔끔하고 광고 없음. 인도 사용자 OxygenOS 감성 유지 반가움', sent: '긍정', cat: 'Software', int: '중', src: 'FoneArena', date: '202604', note: 'GL' },
      { sum: '165Hz 지원 게임에서 고주사율 체감 우수. Turbo 6보다 실질 지원폭 넓은 느낌', sent: '긍정', cat: 'Display_Refresh', int: '중', src: '知乎', date: '202604', note: 'CN' }
    ]
};
