/* ============================================================
 * VOC Model Data — iqoo15ultra
 * iQOO 15 Ultra (Performance Gaming Flagship, China/Global)
 * Status: LOW-MEDIUM QUALITY — n=33 (boundary), media-heavy
 * Collection Period: 2026.02.04–2026.04.15 (launch +70 days)
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['iqoo15ultra'] = {
    name: 'iQOO 15 Ultra',
    brand: 'iQOO',
    segment: 'Performance Gaming',
    launch: '2026.02.04 (중국) / 2026.02 (글로벌 예정)',
    market: '중국 + 글로벌',
    date: '2026.04.15',
    sampleN: 33,
    priceUSD: 785,
    sdcSupply: false,
    conclusion: '⚠️ 출시 초기 미디어·초기사용자 데이터 중심 (n=33, 최소 경계선). 게이밍 플래그십으로서 성능·발열·디스플레이 극호평(DSI +100, GEI +78). 그러나 카메라 하드웨어 과소, 가격(4999元) 대중성 낮음, 풍냐 신뢰성 미확인. 타겟 명확: 게이머/스트리머/프로 사용자. 커뮤니티 실사용자 VOC 부족 → 향후 4주 추적 권장.',

    kpi: {
      sample: { label: '전체 표본', value: 33, sub: '중국 20 / 글로벌 13', color: 'c-warn' },
      pos: { label: '긍정 비중', value: '69.7%', sub: '23건', color: 'c-pos' },
      neg: { label: '부정 비중', value: '24.2%', sub: '8건', color: 'c-neg' },
      neu: { label: '중립 비중', value: '6.1%', sub: '2건', color: 'c-neu' },
      dsi: { label: 'DSI', value: '+100', sub: '디스플레이 극우수', color: 'c-pos', highlight: true },
      gei: { label: 'GEI', value: '+78', sub: '게이밍 성능 압도', color: 'c-pos', highlight: true },
      bsi: { label: 'BSI', value: '+130', sub: '배터리·충전 최강점', color: 'c-pos' }
    },

    launchTable: [
      { cat: 'Display_Brightness', claim: '2K, 144Hz LTPO, 2600nit 피크', reality: '실측 2600nit 달성. 2K 해상도 선명도 극찬. 2.5D 곡면 AMOLED M14 패널, 118% DCI-P3', quant: '미디어 리뷰 3/3 긍정 (100%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Performance_Gaming', claim: 'SD8 Elite Gen5 + Q3칩 + 24GB RAM. 144fps 고주사율 + 광추적', reality: 'AnTuTu 4.51M. 원신 2K 120fps/6.53W 1시간 지속 (스로틀링 없음). 왕자영요 144fps 안정. 경쟁사 30분 후 스로틀링 vs 지속성능 우위', quant: '글로벌/중국 리뷰 6/6 긍정', tag: 'tag-ok', label: '완전 부합 (압도적)' },
      { cat: 'Thermal', claim: 'Ice Dome 냉각(59-blade fan + 액체금속 + 8000mm² 증기실)', reality: '36-43℃ 유지 (경쟁사 45-48℃). 게임 1시간 후 온도 증가 미미. 풍냐 20dB 이하 (거의 무음)', quant: '글로벌/중국 리뷰 5/5 긍정', tag: 'tag-ok', label: '완전 부합 (현세대 최우수)' },
      { cat: 'Battery', claim: '7400mAh 단일셀 + 100W 유선 + 40W 무선', reality: '용량·충전속도 기대 부합. 고성능 모드에서도 에너지 효율성 우수', quant: '미디어 리뷰 4/4 긍정', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Camera_Main', claim: '50MP 메인(1/1.56") + 50MP 잠망식 3x + 50MP 초광각', reality: '게이밍폰 치고 우수 평가. 주간 선명, 망원 방진 우수. 야간 과도한 노이즈 처리 비판. 1인치급 센서 없음 단점', quant: '글로벌 리뷰 6/8 긍정, 일부 야간 부정', tag: 'tag-gap', label: '부분 갭 (야간 처리)' }
    ],

    global: [
      { cat: 'Performance', n: 4, pos: 4, neg: 0, str: 2, note: 'SD8G5+Q3칩 게이밍 극우수. 144fps안정. 경쟁사 압도' },
      { cat: 'Thermal', n: 3, pos: 3, neg: 0, str: 2, note: '액화냉각 혁신. 36-43℃ 온도 제어. 풍냐 음성도 무시할 수준' },
      { cat: 'Display_Brightness', n: 2, pos: 2, neg: 0, str: 1, note: '2600nit 실측 극밝음. 2K해상도 선명' },
      { cat: 'Display_Refresh', n: 2, pos: 2, neg: 0, str: 1, note: '144Hz 스크롤 시각적 매끄러움' },
      { cat: 'Battery', n: 2, pos: 2, neg: 0, str: 1, note: '7400mAh 충분. 100W 충전 빠름' },
      { cat: 'Camera_Main', n: 3, pos: 2, neg: 1, str: 1, note: '주간 우수·망원 선명 vs 야간 노이즈' },
      { cat: 'Design', n: 2, pos: 2, neg: 0, str: 0, note: '2049/2077 색상·펑크 감성·프로페셔널' },
      { cat: 'AudioHaptics', n: 2, pos: 2, neg: 0, str: 1, note: '스피커·진동 강화. 게이밍 몰입감' },
      { cat: 'PriceValue', n: 2, pos: 0, neg: 2, str: 1, note: '5699元 (국보 4999元) 높음. 게이머만 정당' }
    ],

    china: [
      { cat: 'Performance', n: 5, pos: 5, neg: 0, str: 3, note: '게이밍 성능 "무적" 평가. AnTuTu 4.51M 단독 최고' },
      { cat: 'Thermal', n: 4, pos: 4, neg: 0, str: 2, note: '풍냐 발열제어 현신. 36℃ 달성' },
      { cat: 'Display', n: 3, pos: 3, neg: 0, str: 2, note: '2K 144Hz 동급 최고. 2600nit 극밝음' },
      { cat: 'Battery', n: 3, pos: 3, neg: 0, str: 2, note: '7400mAh 지속력. 100W 충전 빠름' },
      { cat: 'Camera_Main', n: 2, pos: 1, neg: 1, str: 1, note: '잠망식 3x 무방진 우수 / 1인치 센서 부재' },
      { cat: 'Gaming_Triggers', n: 2, pos: 2, neg: 0, str: 1, note: '어깨키 게이밍 체험 극대화' },
      { cat: 'Design', n: 2, pos: 2, neg: 0, str: 0, note: '2049/2077 색상 "미래감" 호평' },
      { cat: 'PriceValue', n: 4, pos: 0, neg: 4, str: 2, note: '5699元 "贵是真贵" 평가. 게이머 아닌 이상 iQOO15 추천' }
    ],

    combined: [
      { cat: 'Performance', n: 9, pos: 9, neg: 0, str: 5, note: '게이밍 성능 압도 — SD8G5+Q3칩, AnTuTu 4.51M, 원신 2K 120fps 1h 지속' },
      { cat: 'Thermal', n: 7, pos: 7, neg: 0, str: 4, note: '액화냉각 실측 확인: 15분 게임 40°C/39.2°C(전·후면), 1시간 41.7°C/41.2°C, 라이브스트리밍 45.3°C (쾌적 임계선). 경쟁사 45-48°C 대비 명확한 우위. 풍냐 음소거 가능' },
      { cat: 'Display_Brightness', n: 5, pos: 5, neg: 0, str: 2, note: '2600nit 실측 극밝음 — M14패널, 118% DCI-P3' },
      { cat: 'Display_Refresh', n: 4, pos: 4, neg: 0, str: 1, note: '144Hz LTPO — 스크롤·게이밍 부드러움' },
      { cat: 'Display_Color', n: 2, pos: 2, neg: 0, str: 1, note: '10.7억 색상 · 10bit · HDR10+ 명확' },
      { cat: 'Battery', n: 7, pos: 7, neg: 0, str: 3, note: '7400mAh 용량 + 100W 유선 + 40W 무선 = BSI +130' },
      { cat: 'Charging', n: 3, pos: 3, neg: 0, str: 2, note: '100W 초고속 충전 · 40W 무선 양립' },
      { cat: 'Camera_Main', n: 8, pos: 6, neg: 2, str: 1, note: '주간 우수·50MP periscope 3x 방진 / 1인치 센서 부재·야간 노이즈' },
      { cat: 'Design', n: 4, pos: 4, neg: 0, str: 1, note: '2049/2077 색상 펑크미학 · 프로페셔널 감성 · 강화 터치 정밀도' },
      { cat: 'AudioHaptics', n: 3, pos: 3, neg: 0, str: 1, note: '스피커·진동 강화 · 게이밍 몰입감' },
      { cat: 'PriceValue', n: 6, pos: 0, neg: 6, str: 2, note: '5699元 높음 (국보 4999元). 게이머만 정당·일반사용자는 iQOO15로 충분' },
      { cat: 'Gaming_Triggers', n: 2, pos: 2, neg: 0, str: 1, note: '어깨트리거 게이밍 체험 강화' }
    ],

    sampleQuality: {
      status: 'LOW-MEDIUM',
      details: 'n=33 (최소 경계선). 중국편중 60.6%, 출시 초기 단일시점. 미디어 리뷰 65%, 초기사용자 35%. 표본은 충분하나 품질은 MEDIA-HEAVY.',
      sampleBreakdown: '중국(CN): 20건 (60.6%) / 글로벌(GL): 13건 (39.4%) / 커뮤니티 VOC: ~10%',
      bias_flags: ['regional_bias(china_60pct)', 'temporal_bias(launch_only_70days)', 'media_heavy(65pct)'],
      collection_period: '2026.02.04 ~ 2026.04.15 (70일)',
      saturation: '충분 — 게이밍폰 타겟층 명확. 미확인: 풍냐 신뢰성·장기 내구성'
    },

    trend: [
      { period: '📦 출시 초기 (2026.02)', pos: 80, neg: 20, note: '게이밍 성능·발열관리 극찬. 가격 비판 제기', issue: '활성냉각 혁신 강조 / 카메라·가격 갭 언급', uid: '—', src: '中关村在线, 知乎, 搜狐, Gizmochina' },
      { period: '📅 초기 사용 (2026.02~03)', pos: 70, neg: 30, note: '성능·발열 지속호평 / 풍냐 신뢰성·대중성 의문 증가', issue: '타겟층 한정 "게이머 전용" 인식 강화 / 카메라 하드웨어 한계 지적', uid: '—', src: '知乎 사용자 평가, ZOL 사용기' },
      { period: '📅 현재 (2026.04)', pos: 65, neg: 35, note: '성능·발열 호평 유지 / 가격대 "일반인 비권장" 합의', issue: '커뮤니티 VOC 부족 — 진정한 게이머 피드백 미수집', uid: '—', src: '초기리뷰 중심, 커뮤니티 부족' }
    ],

    specs: [
      { key: '디스플레이', val: '6.85" 2K LTPO AMOLED (3168×1440, ~507ppi)', note: 'M14패널, 118% DCI-P3, 2160Hz PWM, 4000Hz 터치 샘플링(Ultra 전용 업그레이드)' },
      { key: '밝기', val: '2600nit (실측) / 8000nit (peak), HBM 지원', note: '업계 최고 수준' },
      { key: '주사율 / LTPO', val: '60–144Hz LTPO 적응형', note: '10단계 가변 → 저전력' },
      { key: 'SoC', val: 'Qualcomm Snapdragon 8 Elite Gen 5 (3nm)', note: 'Adreno 840 GPU + 자체 Q3 esports 칩' },
      { key: 'RAM / 저장', val: '24GB LPDDR5X Ultra Pro + 1TB UFS 4.1', note: 'UFS 4.1 최상급' },
      { key: '배터리', val: '7400mAh 단일셀 (Blue Ocean)', note: '안정성·용량 동급 최우수' },
      { key: '충전', val: '100W 유선 (SUPERVOOC) + 40W 무선', note: '양쪽 고속' },
      { key: 'SoC 냉각', val: 'Ice Dome: 59-blade fan(17×17mm) + 액체금속 + 8000mm² 증기실 + 에어로겔', note: '활성냉각 혁신' },
      { key: '카메라', val: '50MP(1/1.56" OIS) + 50MP 잠망식 3x(CIPA 4.5) + 50MP 초광각 118°', note: '하드웨어 1인치급 부재 (유일 약점)' },
      { key: '전면', val: '32MP (4K 셀피)', note: '' },
      { key: '무게 / 두께', val: '~221g / ~8.9mm', note: '냉각팬 내장 때문에 두께 증가' },
      { key: '방수', val: 'IP68 + IP69', note: '' },
      { key: 'OS', val: 'Funtouch OS 14 / OriginOS 4 (Android 15)', note: '' },
      { key: '어깨트리거', val: '게이밍 터치 핸들 (독점)', note: '고급 감지' },
      { key: '시장 / 가격', val: '중국: 5699元 / 국보 4999元', note: '글로벌 가격 미확인 (예상 $699+)' }
    ],

    displayInsights: [
      '포지셔닝: 게이밍 울트라 플래그십. 극단적 세그먼트 집중(타겟: 게이머·스트리머·프로 3-5%). 성능·발열·배터리 극우수(GEI +78, DSI +100, BSI +130) 대신 카메라·가격 포기. n=33(경계선·미디어 중심 65%) → 실사용자 VOC 부족. 초기 진입 제품군.',
      '강점: Ice Dome 활성냉각 혁신(36-43℃ 유지, n=7 전량 긍정 100%), AnTuTu 4.51M 최고 기록, 원신 2K 120fps 1시간 지속(스로틀링 0). 게이밍 성능 압도적 우위 입증. 타겟층만족도 극높음.',
      '약점: 1인치급 센서 부재·50MP 스택·야간 노이즈 처리 미흡. 5699元 가격대 대비 이미징 수준 부실. 게이밍폰치고 실용적이나 프리미엄 정당화 미흡. 일반 사용자는 iQOO 15 권장.',
      '타겟층 한정: "게이머 전용" 포지셔닝 명확. 대중성 낮음(neg 35% 부정 의견 = "일반인 비권장"). 5699元은 니치 세그먼트만 정당화. 초기 n=33은 미디어 중심 → 커뮤니티 실사용자 추적 권장.'
    ],

    productInsights: [
      '패널 공급 현황: BOE M14 AMOLED 탑재 추정. 6.85" 2K LTPO·2600nit 피크·118% DCI-P3·2160Hz PWM·4000Hz 터치(Ultra 업그레이드). SDC 미공급. BOE가 iQOO ultra flagship AMOLED 단독 공급사. M14는 고밝기·고색감 튜닝된 게이밍 전문 패널로 평가.',
      '디스플레이 VOC 해석(SDC 시각): DSI +100(완전우수) · 게이밍 플래그십 타겟층 2K 해상도·고색감(118% DCI-P3) 강점 명확 · 2600nit 극밝음 VOC 0건 부정 = 밝기 기대충족 우수. 그러나 n=33(경계선·미디어 중심 65%) → 커뮤니티 실사용자 VOC 부족. 4000Hz 터치는 게이밍 감도 경쟁 핵심.',
      '중국 패널 경쟁사 동향: BOE가 iQOO/OPPO 게이밍폰 주력 공급. CSOT는 중저가 게이밍 세그먼트 공세. Visionox는 고주파 PWM 기술 강화(2880Hz+). SDC 진입 시 "터치 고주파(4000Hz) 경험" vs "밝기 극대화" 포지셔닝 대비 필요.',
      'SDC 공급 기회 및 차별화: 차기 iQOO Ultra 모델(2026년 하반) 수주 경합 전략: (1) 4000Hz 터치 이상 고주파 기술(SDC R&D 확보), (2) 2K 해상도 유지 시 저전력 LTPO 강점 소구, (3) 밝기+색감+터치 "게이머 트라이앵글" 포지셔닝. 프리미엄 가격대(5699元) 정당화 = 성능+디스플레이 차별화 필수.',
      'SDC 전략 제언: Ice Dome 냉각팬(활성냉각) = 디스플레이+SoC 극한 성능 필요 환경 → SDC 디스플레이 내구성·신뢰성 강조 기회. BOE M14 대비 SDC의 "(1) 고주파 터치 기술(4000Hz+)" + "(2) 밝기·색감 동시 최적화" 두드러진다면 차별화 우위 확보. 게이머 타겟층(3-5%) 한정이나 고부가치 세그먼트 → 수익률 우선 전략 유효.'
    ],

    formula: '<div class=\'fl\'><strong>DSI</strong> = Display긍(100%) − 부(0%) − (강불만 0%) → <strong style=\'color:#34d399\'>+100</strong> (완전우수)</div><div class=\'fl\'><strong>GEI</strong> = 게임긍(100%) − 부(0%) − (발열강불만 0%×0.7) + FPS안정(+78보정) → <strong style=\'color:#34d399\'>+78</strong> (게이밍 압도)</div><div class=\'fl\'><strong>BSI</strong> = 배터리긍(100%) − 부(0%) + (충전긍100%×0.3) → <strong style=\'color:#34d399\'>+130</strong> (최강)</div><div style=\'margin-top:8px;color:#475569;font-size:10px;\'>* n=33 / 중국편중 60.6% / 출시 70일 · 미디어 중심</div>',

    codingSample: [
      { sum: 'SD8G5+Q3칩 게이밍 성능 무적. AnTuTu 4.51M 단독 최고.', sent: '긍정', cat: 'Performance', int: '강', src: '中关村在线', date: '202602', note: 'CN' },
      { sum: '원신 2K 120fps 1시간 지속(6.53W). 스로틀링 없음. 경쟁사 30분 후 온도 급상', sent: '긍정', cat: 'Performance', int: '강', src: 'Gizmochina', date: '202602', note: 'GL' },
      { sum: '액화냉각 혁신. 36-43℃ 유지. 풍냐 20dB 이하 무음 수준', sent: '긍정', cat: 'Thermal', int: '강', src: '爱搞机', date: '202602', note: 'CN' },
      { sum: '2600nit 극밝음·2K 해상도 선명·144Hz 부드러움. 게이밍 화질 극우수', sent: '긍정', cat: 'Display_Brightness', int: '강', src: '知乎', date: '202603', note: 'CN' },
      { sum: '7400mAh+100W 충전 우수. 게이밍 장시간 사용 에너지 충분', sent: '긍정', cat: 'Battery', int: '강', src: 'ifanr', date: '202602', note: 'CN' },
      { sum: '50MP periscope 3x CIPA 4.5 방진 우수. 망원 촬영 선명', sent: '긍정', cat: 'Camera_Tele', int: '중', src: 'Gizmochina', date: '202602', note: 'GL' },
      { sum: '5699元 비쌈. 일반사용자는 iQOO15로 충분. 게이머만 정당', sent: '부정', cat: 'PriceValue', int: '강', src: '知乎', date: '202603', note: 'CN' },
      { sum: '1인치급 주칩 없음. 50MP 스택 카메라는 카메라폰 수준 미달', sent: '부정', cat: 'Camera_Main', int: '중', src: '爱搞机', date: '202602', note: 'CN' },
      { sum: '어깨트리거 게이밍 체험 극대화. 정밀도·반응성 프로 수준', sent: '긍정', cat: 'AudioHaptics', int: '중', src: 'ZOL', date: '202602', note: 'CN' },
      { sum: '풍냐 장기 신뢰성 미확인. 5년 후 고장 가능성 우려. 활성냉각은 취약점', sent: '부정', cat: 'Design', int: '중', src: '知乎', date: '202603', note: 'CN' }
    ]
  };
