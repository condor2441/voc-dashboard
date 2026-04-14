/* ============================================================
 * VOC Model Data — reno15c
 * OPPO Reno15C (China: SD7G4+1.5K OLED / India: SD6G1+FHD+)
 * Status: LOW QUALITY TIER — n=32 (borderline min), India편중(regional_bias)
 * Collection Period: 2025.12 (CN) ~ 2026.04 (IN)
 * Last Updated: 2026.04.15
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['reno15c'] = {
    name: 'OPPO Reno15C',
    brand: 'OPPO',
    segment: 'Premium Volume',
    launch: '2025.12.19 (중국, 2899위안) / 2026.02.05 (인도, ₹34,999~)',
    market: '중국 + 인도',
    date: '2026.04.15',
    sampleN: 32,
    conclusion: '⚠️ 지역판 이원화 주의: 중국(SD7G4+1.5K OLED+50MP망원) vs 인도(SD6G1+FHD++7000mAh) — 실질적으로 다른 제품. 배터리·충전(BSI +130)은 양 시장 공통 최강점. 인도판 SD6G1 성능 불만이 핵심 갭(부정 중 ~60%). 디스플레이는 실내 우수하나 인도 야외 1200nit HBM 부족 비판. DSI +54. n=32/지역편중(인도 62%) — 커뮤니티 표본 한정.',

    kpi: {
      sample: { label: '전체 표본', value: 32, sub: '중국 12 / 인도 20', color: 'c-warn' },
      pos: { label: '긍정 비중', value: '68.8%', sub: '22건', color: 'c-pos' },
      neg: { label: '부정 비중', value: '25.0%', sub: '8건', color: 'c-neg' },
      neu: { label: '중립 비중', value: '6.3%', sub: '2건', color: 'c-neu' },
      dsi: { label: 'DSI', value: '+54', sub: '참고용 (n<50)', color: 'c-pos', highlight: true },
      bsi: { label: 'BSI', value: '+130', sub: '배터리·충전 압도', color: 'c-pos', highlight: true },
      csi: { label: 'CSI', value: '+28', sub: '참고용 (n<30)', color: 'c-pos' }
    },

    launchTable: [
      { cat: 'Display_Brightness', claim: '중국: 1200nit 피크, 1.5K OLED / 인도: 1400nit 피크, FHD+ AMOLED', reality: '중국: 1.5K 선명도 긍정. 인도: 1200nit HBM 야외 가시성 부족 비판(인도 일조량 대비)', quant: '중국긍정 1/1 / 인도부정 2건(강불만 1)', tag: 'tag-gap', label: 'gap_expectation (인도판 야외 밝기 미흡)' },
      { cat: 'Battery', claim: '중국: 6500mAh+80W / 인도: 7000mAh+80W (40분 완충)', reality: '양 시장 공통 최강점. 인도 2일 사용·10시간 SOT 달성. 충전 시간 기대 초과', quant: '긍정 10/10 (100%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Camera_Main', claim: '중국: 50MP Sony LYT-600+50MP망원+8MP초광각 / 인도: 50MP+8MP+2MP 매크로', reality: '일상 사진 우수. 중국 망원·초광각 강점. 인도: 야간 품질 저조·매크로 실망. 50MP 셀피 4K 호평', quant: '전체 카메라: 긍정 6/9 (66.7%) / 야간부정 2건 강', tag: 'tag-gap', label: 'gap_expectation (인도: 야간·매크로 미흡) / variant_difference' },
      { cat: 'Performance', claim: '중국: SD7 Gen 4 게임 최적화 / 인도: SD6 Gen 1 (구형)', reality: '중국: SD7G4 일상 쾌적. 인도: SD6G1 ₹37,999 가격대 대비 성능 크게 부족 비판', quant: '인도부정 3건(강2·중1) / 중국긍정 1건', tag: 'tag-gap', label: 'gap_expectation (인도판 칩셋 성능 갭)' },
      { cat: 'PriceValue', claim: '중국: 2899위안 가성비 / 인도: ₹34,999 합리적 프리미엄', reality: '중국 2899위안에 SD7G4+1.5K+3카메라 = 가성비 호평. 인도 SD6G1+매크로온리 ₹37,999 = 가치 의문', quant: '중국긍정 1건 / 인도부정 2건', tag: 'tag-gap', label: 'variant_difference (중국판 우세)' }
    ],

    global: [],

    china: [
      { cat: 'Display_Resolution', n: 2, pos: 2, neg: 0, str: 0, note: '1.5K(2760×1256) 선명도 중급 이상. 경쟁 대비 차별화' },
      { cat: 'Display_Refresh', n: 2, pos: 2, neg: 0, str: 0, note: '120Hz 일상 스크롤 부드러움' },
      { cat: 'Display_Eyecare', n: 2, pos: 2, neg: 0, str: 0, note: '3840Hz PWM 고주파 디밍·저청색광 호평' },
      { cat: 'Display_Brightness', n: 1, pos: 0, neg: 1, str: 0, note: '1200nit 야외 최상이 아님, 직사광선 미약' },
      { cat: 'Battery', n: 3, pos: 3, neg: 0, str: 2, note: '6500mAh+SD7G4 효율 = 2일 사용 가능' },
      { cat: 'Camera_Main', n: 2, pos: 2, neg: 0, str: 1, note: '50MP Sony LYT-600 주간 선명. 실용성 충분' },
      { cat: 'Camera_Tele', n: 2, pos: 2, neg: 0, str: 1, note: '50MP 망원 중급 이상 결과물. 저조도 만족' },
      { cat: 'Performance', n: 2, pos: 2, neg: 0, str: 1, note: 'SD7G4 일상·게임 쾌적. 중간급 선방' },
      { cat: 'Design', n: 3, pos: 3, neg: 0, str: 0, note: '195g 경량·얇은 바디·IP69. 젊은층 호감' },
      { cat: 'PriceValue', n: 1, pos: 1, neg: 0, str: 1, note: '2899위안 SD7G4+1.5K+3카메라 = 가성비 흑마' }
    ],

    combined: [
      { cat: 'Battery', n: 10, pos: 10, neg: 0, str: 5, note: '양 시장 최강점 — 중국 6500mAh / 인도 7000mAh. 2일 사용·완충 40-54분' },
      { cat: 'Charging', n: 3, pos: 3, neg: 0, str: 2, note: '80W SuperVOOC 양 시장 공통. 인도 40분 완충 강조' },
      { cat: 'Camera_Main', n: 9, pos: 6, neg: 3, str: 2, note: '주간·셀피 우수 / 인도 야간 부정·매크로 실망' },
      { cat: 'Camera_Tele', n: 3, pos: 2, neg: 1, str: 0, note: '중국판 50MP망원 호평 / 인도판 망원 없음(variant_difference)' },
      { cat: 'Display_Brightness', n: 5, pos: 2, neg: 3, str: 1, note: '중국 1.5K선명 / 인도 1200nit HBM 야외 불충분 비판' },
      { cat: 'Display_Color', n: 4, pos: 4, neg: 0, str: 1, note: 'OLED/AMOLED 실내 선명·생동감·10억색상 호평' },
      { cat: 'Display_Refresh', n: 3, pos: 3, neg: 0, str: 0, note: '120Hz 스크롤·UI 부드러움 긍정' },
      { cat: 'Display_Eyecare', n: 2, pos: 2, neg: 0, str: 0, note: '3840Hz PWM·저청색광 중국 호평 (인도 미언급)' },
      { cat: 'Performance', n: 5, pos: 2, neg: 3, str: 2, note: '중국 SD7G4 쾌적 / 인도 SD6G1 ₹37,999 대비 심각 부족' },
      { cat: 'Design', n: 5, pos: 5, neg: 0, str: 0, note: 'Reno 시그니처 디자인·경량·IP69 내구성 양 시장 호평' },
      { cat: 'PriceValue', n: 5, pos: 2, neg: 3, str: 1, note: '중국 가성비 / 인도 SD6G1+매크로만 ₹37,999 가치 의문' },
      { cat: 'Software', n: 2, pos: 2, neg: 0, str: 0, note: 'ColorOS 16 UI 세련됨, AI Portrait Camera 기능성 긍정' }
    ],

    sampleQuality: {
      status: 'LOW',
      details: 'n=32 (최소 기준치 도달), 인도 편중 62%, 출시 초기 단일 시점. 지표는 참고용으로만 활용.',
      sampleBreakdown: '중국(CN): 12건 (37.5%) / 인도(IN): 20건 (62.5%) / 글로벌: 0건',
      bias_flags: ['regional_bias(india_62pct)', 'temporal_bias(launch_only)', 'source_bias(media_reviews)'],
      collection_period: '2025.12.19(CN) ~ 2026.04.15(IN)',
      saturation: '미달 — 커뮤니티 실사용자 VOC 부족 (미디어 리뷰 중심)'
    },

    trend: [
      { period: '📦 중국 출시 초기 (2025.12)', pos: 80, neg: 20, note: 'SD7G4+2899위안 가성비 호평 / 야외 밝기 아쉬움', issue: '1.5K OLED·망원 차별화 강조 / 1200nit 한계 초기 언급', uid: '—', src: '中关村在线, 太平洋科技, IT之家, 搜狐' },
      { period: '📦 인도 출시 초기 (2026.02~03)', pos: 60, neg: 40, note: '배터리 7000mAh 극찬 / SD6G1 성능·야간카메라·가성비 비판', issue: '성능 갭이 인도시장 핵심 이슈 / 야간 카메라 아쉬움', uid: '—', src: '91mobiles, Beebom, SparkNherd, Newssy.in' },
      { period: '📅 최근 (2026.04)', pos: 65, neg: 35, note: '배터리 지속 호평 / 성능 비판 여전 / 중국 사용자 VOC 추가 수집 필요', issue: '중국 커뮤니티(酷安·知乎) 실사용자 의견 미수집', uid: '—', src: '미디어 리뷰 위주 — 커뮤니티 VOC 부족' }
    ],

    specs: [
      { key: '디스플레이 (중국판)', val: '6.59" 1.5K LTPS OLED (2760×1256, ~461ppi)', note: '3840Hz PWM·저청색광·단초점 광학 지문' },
      { key: '디스플레이 (인도판)', val: '6.57" FHD+ AMOLED (2760×1256 → 실제 1256×2760)', note: '600nit typical / 1200nit HBM / 1400nit peak' },
      { key: '주사율 / LTPO', val: '120Hz (LTPS, 적응형 아님)', note: '240Hz 터치 샘플링' },
      { key: 'SoC (중국판)', val: 'Qualcomm Snapdragon 7 Gen 4 (4nm)', note: '중급 상단, 게임·일상 쾌적' },
      { key: 'SoC (인도판)', val: 'Qualcomm Snapdragon 6 Gen 1 (구형, 4nm TSMC)', note: '₹37,999 가격 대비 심각 언더스펙 비판' },
      { key: 'RAM / 저장', val: '8GB/12GB + 256GB/512GB UFS 3.1', note: '확장 저장 미지원' },
      { key: '배터리 (중국판)', val: '6500 mAh + 80W SuperVOOC', note: '약 54분 완충' },
      { key: '배터리 (인도판)', val: '7000 mAh + 80W SuperVOOC', note: '40분 완충·2일 사용·역방향 유선충전' },
      { key: '카메라 (중국판)', val: '50MP Sony LYT-600(OIS) + 50MP 망원 + 8MP 초광각', note: 'LYT-600 대형 센서·망원 차별화' },
      { key: '카메라 (인도판)', val: '50MP 메인 + 8MP 초광각 + 2MP 매크로', note: '망원 없음, 매크로 화질 실망 VOC' },
      { key: '전면 카메라', val: '50MP (4K 영상)', note: '양 시장 동일, 셀피 강점' },
      { key: '무게 / 두께', val: '~195g / ~7.99mm', note: '경량 얇은 바디 호평' },
      { key: '방수', val: 'IP66 + IP68 + IP69', note: '360° 드롭 보호' },
      { key: 'OS', val: 'ColorOS 16 (Android 15)', note: 'AI Portrait Camera·실황 기능' },
      { key: '시장', val: '중국 (2899위안~) + 인도 (₹34,999~)', note: '변형판 스펙 차이 매우 큼 — variant_difference' }
    ],

    displayInsights: [
      '중국판 1.5K OLED vs 인도판 FHD+ AMOLED: 동일 모델명 이하 완전히 다른 패널. 중국 1.5K 선명도·3840Hz PWM 호평. 인도 FHD+ 1200nit HBM은 인도 강한 일조 환경 대비 야외 가시성 부족 — 최소 1500nit+ 필요.',
      '3840Hz 고주파 PWM 디밍은 중국 사용자에게 눈 피로도 저감 포인트로 명확히 인식. 한국·글로벌 확대 기회. 인도판에도 동일 적용 여부 미확인.',
      'DSI +54(참고용): 디스플레이 자체 품질은 긍정 우세. 그러나 인도 야외 밝기 갭이 지역 특화 개선 포인트. 삼성 디스플레이 관점: 1200nit급 FHD+ 패널 판매 시 인도 시장 밝기 요구 스펙 상향 고려 필요.'
    ],

    productInsights: [
      '인도판 SD6G1 선택은 가장 큰 시장 실패 요인 — ₹37,999 가격대에 구형 칩셋은 소비자 신뢰 훼손. 디스플레이 고사양 대비 AP 언더스펙 조합은 프리미엄 인지 불일치 사례.',
      '중국판(SD7G4+1.5K+3카메라, 2899위안)과 인도판(SD6G1+FHD++2카메라)의 variant_difference가 너무 크다. 동일 브랜드 신뢰도에 부정 영향 가능. 지역별 스펙 분기 시 디스플레이 최소 동등 수준 유지 권장.',
      '배터리(BSI +130)는 확실한 브랜드 자산. 7000mAh·40분 완충은 인도 시장 최고 포지션. 향후 디스플레이 밝기(1500nit+) 개선 + 배터리 강점 유지가 인도 premium volume 포지셔닝 핵심.'
    ],

    formula: '<div class=\'fl\'><strong>DSI</strong> = 디스플레이긍(78.6%) − 부(21.4%) − (강불만7.1%×0.5) → <strong style=\'color:#34d399\'>+54</strong> <em>(참고용, n=14 display)</em></div><div class=\'fl\'><strong>BSI</strong> = 배터리긍(100%) − 부(0%) + (충전긍100%×0.3) → <strong style=\'color:#34d399\'>+130</strong></div><div class=\'fl\'><strong>CSI</strong> = 카메라긍(66.7%) − 부(33.3%) − (기대실망11.1%×0.5) → <strong style=\'color:#34d399\'>+28</strong> <em>(참고용)</em></div><div style=\'margin-top:8px;color:#475569;font-size:10px;\'>* 전체 n=32 / 지역편중 인도 62% / 출시 초기 단일시점 — LOW 품질 tier</div>',

    codingSample: [
      { sum: '7000mAh+80W 40분 완충. 2일 이상 사용. 배터리가 이 가격대 최강', sent: '긍정', cat: 'Battery', int: '강', src: '91mobiles', date: '202602', note: 'India' },
      { sum: '인도 야외 직사광선 아래 1200nit HBM 부족. 밝기 더 필요', sent: '부정', cat: 'Display_Brightness', int: '강', src: '91mobiles', date: '202602', note: 'India / gap_expectation' },
      { sum: 'SD6 Gen 1은 ₹37,999에 너무 구형. 경쟁사 대비 성능 크게 부족', sent: '부정', cat: 'Performance', int: '강', src: '91mobiles', date: '202602', note: 'India / gap_expectation' },
      { sum: '실내 디스플레이 선명하고 HDR 콘텐츠 시청 탁월. 생동감 있는 색상', sent: '긍정', cat: 'Display_Color', int: '강', src: 'SparkNherd', date: '202602', note: 'India' },
      { sum: '50MP 셀피 4K 영상 촬영 우수. 인물 촬영·영상 크리에이터 강점', sent: '긍정', cat: 'Camera_Main', int: '강', src: 'Beebom', date: '202602', note: 'India' },
      { sum: '저조도 야간 촬영 품질 저조. 매크로 모드 디테일 실망', sent: '부정', cat: 'Camera_Main', int: '강', src: '91mobiles', date: '202602', note: 'India' },
      { sum: '1.5K(2760×1256) OLED 해상도 이 가격대 차별화. 선명 텍스트', sent: '긍정', cat: 'Display_Resolution', int: '중', src: '中关村在线', date: '202512', note: 'CN' },
      { sum: '3840Hz PWM 고주파 디밍·저청색광 인증. 장시간 시청 눈 피로 없음', sent: '긍정', cat: 'Display_Eyecare', int: '중', src: 'IT之家', date: '202512', note: 'CN' },
      { sum: 'SD7 Gen 4+6500mAh 조합. 왕자영요 고화질 안정·게임 발열 미미', sent: '긍정', cat: 'Performance', int: '중', src: '太平洋科技', date: '202512', note: 'CN' },
      { sum: '2899위안에 SD7G4+1.5K+50MP망원. 동급 대비 가성비 압도', sent: '긍정', cat: 'PriceValue', int: '강', src: '搜狐', date: '202512', note: 'CN' }
    ]
  };
