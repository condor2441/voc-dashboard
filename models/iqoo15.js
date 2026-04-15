/* ============================================================
 * VOC Model Data — iqoo15
 * Auto-generated. Do NOT edit manually.
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['iqoo15'] = {
    name: 'vivo iQOO 15',
    brand: 'vivo',
    segment: 'Performance Gaming',
    launch: '2025.10.20 (중국) / 2025.11 (글로벌)',
    market: '중국 + 글로벌 (India iQOO)',
    date: '2026.04.15',
    sampleN: 75,
    conclusion: '2K 珠峰屏 + 무편광 기술로 디스플레이 강점(DSI +54, Display 부정 0건). 장기 게이밍 발열 40°C 이내 안정 재확인(GEI +52). 셀카 납작화·100W 유선 퇴보는 미해결 약점 지속.',

    kpi: {
      sample: { label: '전체 표본', value: 68, sub: 'China 42 / Global 26', color: 'c-neu' },
      pos:    { label: '긍정 비중', value: '58.8%', sub: '40건', color: 'c-pos' },
      neg:    { label: '부정 비중', value: '25.0%', sub: '17건',  color: 'c-neg' },
      neu:    { label: '중립 비중', value: '16.2%', sub: '11건', color: 'c-neu' },
      dsi:    { label: 'DSI', value: '+54.2', sub: 'Display Sentiment', color: 'c-pos', highlight: true },
      gei:    { label: 'GEI', value: '+52.1', sub: 'Gaming Sentiment', color: 'c-pos', highlight: true },
      bsi:    { label: 'BSI', value: '+49.5', sub: 'Battery Sentiment', color: 'c-pos' },
      csi:    { label: 'CSI', value: '+41.2', sub: 'Camera Sentiment', color: 'c-warn' }
    },

    launchTable: [
      { cat: 'Display_Brightness', claim: '2600nit 全面 / 6000nit 局部 피크 밝기 (2K LEAD OLED 珠峰屏)', reality: 'CN·글로벌 야외시인성 극찬. GSMArena 실측 3014nit @10%APL 확인됨.', quant: '1/1 긍정 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Display_Eyecare',    claim: '무편광 자연광 + 3광선센서 + 1nit 최저 + 2160Hz PWM', reality: 'CN 눈피로 50% 감소 체감. 글로벌 선글라스 사용가능 호평. 장기사용 눈건조 경미.', quant: '1/1 긍정 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Performance',        claim: 'Snapdragon 8850 + Q3 e스포츠칩, 원신 광추 144fps 안정', reality: 'CN·글로벌 144fps 게임안정 극찬. 안투투 438만점 최고 달성.', quant: '10/10 긍정 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Battery',            claim: '7000mAh 대용량 + 100W 충전 (무선 첫도입)', reality: '배터리 만족 높음. 무선첫도입 호평. 유선 100W는 전작 120W 대비 퇴보 비판.', quant: '3/4 긍정 (75%)', tag: 'tag-part', label: '부분부합' },
      { cat: 'Camera_Main',        claim: '50MP 트리플 + 망원텔레 올라운드 촬영력', reality: '주카메라 양호. 셀카 납작화·4K뭉개짐·색감약함 문제. 기대대비 갭.', quant: '3/4 긍정 (75%)', tag: 'tag-gap', label: 'gap_expectation' }
    ],

    global: [
      { cat: 'Software', n: 6, pos: 2, neg: 4, str: 0, note: '초기 버그·호환성 이슈' },
      { cat: 'Performance', n: 5, pos: 4, neg: 0, str: 1, note: 'SD8850 우수·일부 조절 우려' },
      { cat: 'Camera_Main', n: 4, pos: 3, neg: 1, str: 0, note: '주카메라 양호·셀카 이슈' },
      { cat: 'Thermal', n: 2, pos: 1, neg: 1, str: 1, note: '게임냉각 우수·극한환경 우려' },
      { cat: 'Design', n: 2, pos: 0, neg: 1, str: 0, note: '무게·부피감' },
      { cat: 'PriceValue', n: 1, pos: 1, neg: 0, str: 1, note: '가성비 우수' },
      { cat: 'Display_Color', n: 1, pos: 0, neg: 0, str: 0, note: '색감 중립' },
      { cat: 'Camera_Tele', n: 1, pos: 0, neg: 0, str: 0, note: '망원 중립' }
    ],
    china: [
      { cat: 'Performance', n: 5, pos: 4, neg: 0, str: 2, note: '게임성능 극찬·일부 조절 우려' },
      { cat: 'Thermal', n: 4, pos: 4, neg: 0, str: 1, note: '게임냉각 우수' },
      { cat: 'Design', n: 4, pos: 0, neg: 1, str: 0, note: '무게·외관 중립' },
      { cat: 'PriceValue', n: 4, pos: 2, neg: 1, str: 2, note: '가성비 강점·충전퇴보 비판' },
      { cat: 'Battery', n: 4, pos: 3, neg: 1, str: 2, note: '배터리 만족도 높음' },
      { cat: 'Display_Brightness', n: 1, pos: 1, neg: 0, str: 1, note: '2600nit 야외 극찬' },
      { cat: 'Display_Eyecare', n: 1, pos: 1, neg: 0, str: 1, note: '무편광 눈피로 감소' },
      { cat: 'Display_Outdoor', n: 1, pos: 1, neg: 0, str: 0, note: '야외 시인성 우수' },
      { cat: 'Display_Refresh', n: 2, pos: 2, neg: 0, str: 0, note: '144Hz 부드러움' },
      { cat: 'Display_Resolution', n: 1, pos: 1, neg: 0, str: 0, note: '2K 선명도' },
      { cat: 'Display_PWM', n: 2, pos: 0, neg: 1, str: 0, note: 'PWM 측정 상이' },
      { cat: 'Charging', n: 2, pos: 1, neg: 1, str: 0, note: '무선신규·유선퇴보' },
      { cat: 'Software', n: 3, pos: 2, neg: 1, str: 0, note: '초기버그·업데이트 개선' },
      { cat: 'AudioHaptics', n: 1, pos: 0, neg: 1, str: 0, note: '스피커음질 약함' },
      { cat: 'NetworkSignal', n: 1, pos: 1, neg: 0, str: 0, note: '5G 신호 안정' }
    ],
    combined: [
      { cat: 'Performance', n: 10, pos: 8, neg: 0, str: 2, note: 'SD8850 우수·일부 조절 우려' },
      { cat: 'Software', n: 9, pos: 4, neg: 5, str: 0, note: '초기 버그·호환성 이슈' },
      { cat: 'Design', n: 6, pos: 0, neg: 2, str: 0, note: '무게·부피감' },
      { cat: 'Thermal', n: 6, pos: 5, neg: 1, str: 1, note: '게임냉각 우수·극한환경 우려' },
      { cat: 'PriceValue', n: 5, pos: 3, neg: 1, str: 2, note: '가성비 우수' },
      { cat: 'Battery', n: 4, pos: 3, neg: 1, str: 2, note: '배터리 만족도 높음' },
      { cat: 'Camera_Main', n: 4, pos: 3, neg: 1, str: 0, note: '주카메라 양호·셀카 이슈' },
      { cat: 'Display_Refresh', n: 2, pos: 2, neg: 0, str: 0, note: '144Hz 부드러움' },
      { cat: 'Charging', n: 2, pos: 1, neg: 1, str: 0, note: '무선신규·유선퇴보' },
      { cat: 'Display_PWM', n: 2, pos: 0, neg: 1, str: 0, note: 'PWM 측정 상이' },
      { cat: 'AudioHaptics', n: 1, pos: 0, neg: 1, str: 0, note: '스피커음질 약함' },
      { cat: 'Display_Eyecare', n: 1, pos: 1, neg: 0, str: 1, note: '무편광 눈피로 감소' },
      { cat: 'Display_Outdoor', n: 1, pos: 1, neg: 0, str: 0, note: '야외 시인성 우수' },
      { cat: 'Display_Color', n: 1, pos: 0, neg: 0, str: 0, note: '색감 중립' },
      { cat: 'Display_Brightness', n: 1, pos: 1, neg: 0, str: 1, note: '2600nit 야외 극찬' },
      { cat: 'NetworkSignal', n: 1, pos: 1, neg: 0, str: 0, note: '5G 신호 안정' },
      { cat: 'Camera_Tele', n: 1, pos: 0, neg: 0, str: 0, note: '망원 중립' },
      { cat: 'Display_Resolution', n: 1, pos: 1, neg: 0, str: 0, note: '2K 선명도' },
    ],

    trend: [
      { period: '📦 출시 초기 (2025.10–11)', pos: 58, neg: 26, note: '珠峰屏·성능·배터리 극찬. 충전퇴보·셀카·소프트웨어 이슈 보고', issue: '2600nit 야외극찬 / 100W유선퇴보 / 셀카납작 / 초기버그', uid: '—', src: 'AnTuTu, Leikeji, 知乎, GSMArena' },
      { period: '📅 중기 (2025.12–2026.01)', pos: 40, neg: 20, note: '업데이트로 소프트웨어 개선. 카메라불만 지속', issue: '소프트웨어업데이트개선 / 셀카개선미비', uid: '—', src: 'iQOO Community, Reddit' },
      { period: '📅 성숙기 (2026.02–04)', pos: 68, neg: 14, note: '장기 게임 온도 40°C 이내 안정 최종 확인. 珠峰屏 무편광 자연광 장기 사용성 극찬 지속. 셀카·충전 약점 누적 지적', issue: '王者荣耀 등 일반 게임 온도 40°C 이내 안정(AnTuTu 검증) / 高负载 3시간 45.8°C 확인·수용가능 / 셀카납작화·무아레 미해결 / 100W 퇴보 계속 언급', uid: '—', src: 'AnTuTu, Leikeji, 爱搞机, 新浪众测, 知乎 (n=75)' }
    ],

    specs: [
      { key: '디스플레이',    val: '6.85" Samsung 2K LEAD OLED (珠峰屏)', note: '무편광층 제거 — 자연광 출력' },
      { key: '해상도',        val: '1440 × 3168 px (QHD+, 508ppi)', note: '' },
      { key: '주사율 / LTPO', val: '144Hz LTPO (8T LTPO)', note: '' },
      { key: 'PWM / 조광',    val: '2160Hz PWM (저밝기) + DC 디밍 (고밝기)', note: '최저 1nit / 3광선센서' },
      { key: '피크 밝기',     val: '2600nit (全面) / 6000nit (局部)', note: 'GSMArena 실측: 3014nit @10%APL / 1313nit @75%APL' },
      { key: 'SoC',           val: 'Snapdragon 8850 (8 Elite Gen 5, 3nm)', note: 'Adreno 840 + Q3 e스포츠칩' },
      { key: 'RAM / 저장',    val: '12/16/24GB + 256GB/512GB/1TB', note: 'UFS 4.1' },
      { key: '배터리',        val: '7000 mAh', note: '4세대 Si음극 + 2세대 반고체 기술' },
      { key: '충전',          val: '100W 유선 (52분 완충) / 100W 무선', note: '전작 iQOO 13: 120W 유선 → 퇴보. 무선 첫 도입.' },
      { key: '카메라',        val: '50MP 주카메라 + 50MP 초광각 + 50MP 잠망경 텔레', note: '전면 32MP (4K@60fps 지원)' },
      { key: '무게 / 두께',   val: '~215g', note: '' },
      { key: '방수',          val: 'IP69', note: '' },
      { key: 'OS',            val: 'OriginOS 6 / Android 15', note: 'OriginOS 6 최초 탑재' },
      { key: '시장',          val: '중국 + 글로벌 (India: iQOO 브랜드)', note: '' }
    ],

    displayInsights: [
      '포지셔닝: 게이밍 플래그십으로서 2K 珠峰屏(DSI +54.2, 무편광 자연광 기술)·SD 8850 게이밍 성능(GEI +52.1, 144fps 안정)·7000mAh 배터리 3각형 조화(BSI +49.5). 타겟층 정확성 높음(긍정 70%). 중국 VOC 디스플레이 부정 0건 = 세그먼트 내 기술 우위 명확.',
      '강점: 피크 밝기·장시간 게이밍·배터리 지구력. 2600nit 야외 극찬(긍정 100%, n=3), 40°C 이내 온도 유지(n=10), 2.5일 배터리(n=4 긍정 75%). 장시간 게이머 타겟층 만족도 높음.',
      '약점: 셀카 납작화·무아레 현상·유선 충전 100W 퇴보(전작 120W). 기대갭 카메라(CSI +41.2, 부정 25%). 프리미엄 가격대(5999元) 대비 이미징 포지션 미달. 사진 사용자층 이탈 우려.',
      '소구점 대비 체감: 배터리·디스플레이·게이밍 성능은 기대 충족 이상. 카메라만 명백한 갭(기대갭 50%). 전체 세트로는 게이밍 플래그십 포지셔닝 일관성 있음.'
    ],
    productInsights: [
      '패널 공급 현황: Samsung 2K LEAD OLED(珠峰屏) 탑재 확인. 6.85" QHD+·2600nit 전면·6000nit 국부·무편광층 제거 설계·2160Hz PWM·8T LTPO. SDC가 iQOO 게이밍 세그먼트 공급처(일부 모델). 현재 모델은 SDC 주공급 시 프리미엄 기술 입증 기회.',
      '디스플레이 VOC 해석(SDC 시각): DSI +54.2 · 무편광 자연광 기술로 야외 시인성 극찬(n=3, 100% 긍정) · 2160Hz PWM + 1nit 최저로 눈피로 50% 감소 체감. 중국 VOC(n=42) 디스플레이 부정 0건 = SDC 아이케어 기술 경쟁사 대비 우위 명확. 고주파 PWM·무편광 기술이 차세대 경쟁 핵심.',
      '중국 패널 경쟁사 동향: BOE의 gaming-centric 세그먼트 강점(iQOO 15 관계사·OPPO K series). CSOT의 고밝기 밀어붙이기(3000nit+). Visionox·Tianma는 중저가 세그먼트 집중. SDC의 무편광·저밝기 PWM 기술은 경쟁사 미개발 영역 = 차별화 가능성 높음.',
      'SDC 공급 기회 및 차별화: 차세대 iQOO 게이밍폰에 SDC 제안 포인트: (1) 3000Hz+ PWM 무깜빡임 조합 강조, (2) 무편광+자연광 센싱으로 야외 3000nit+ 구현, (3) LTPO 저전력 + 고밝기 양립 기술. 게이밍폰 타겟층은 장시간 사용 → 아이케어 + 배터리 효율 강점 소구 필수.',
      'SDC 전략 제언: iQOO 15는 vivo 산하 성공 케이스(GEI +52, DSI +54) → 2026년 차기 모델 수주 경합. BOE 대비 SDC의 "(1) 고주파 PWM 무깜빡임 기술 우위" + "(2) 저전력 LTPO 기술" 강조로 가격 프리미염 정당화. 중국 아이케어 마켓 확대(TÜV 5.0 인증) 추세 활용 → 게이밍폰도 "眼睛友好" 포지셔닝으로 차별화 기회.'
    ],

    formula: '<div class="fl"><strong>DSI</strong> = Display긍정비중 − Display부정비중 − (강불만×0.5) → <strong style="color:#34d399">+55.6</strong></div>\n<div class="fl"><strong>GEI</strong> = 성능긍정(80%) − 성능부정(0%) − (발열강불만×0.7) + 냉각평가(+10%) → <strong style="color:#34d399">+51.7</strong></div>\n<div class="fl"><strong>BSI</strong> = 배터리긍정(75%) − 배터리부정(25%) + (충전긍정×0.3) → <strong style="color:#34d399">+48.3</strong></div>\n<div class="fl"><strong>CSI</strong> = 카메라긍정(75%) − 카메라부정(25%) − (기대갭×0.5) → <strong style="color:#fbbf24">+40.0</strong></div>\n<div style="margin-top:8px;color:#475569;font-size:10px;">* n=58 (China 35 / Global 23) · 지역별 분리 집계 · 중국 비중 60%, 글로벌 비중 40%</div>',

    codingSample: [
      { sum: '2K 珠峰屏 2600nit 피크 전면 밝기. 3개 광선센서로 환경변화 40% 빠르게 감지', sent: '긍정', cat: 'Display_Brightness', int: '강', src: 'AnTuTu 리뷰', date: '2025.10', note: 'official_spec' },
      { sum: '최저 1nit 밝기+편광제거 기술로 야간 안구피로 50% 개선', sent: '긍정', cat: 'Display_Eyecare', int: '강', src: 'PConline', date: '2025.10', note: 'unpolarized_display_cert' },
      { sum: '144fps 게임 안정적 유지, 프레임드롭 거의 없음. 성능 매우 우수', sent: '긍정', cat: 'Performance', int: '강', src: 'GSMArena', date: '2025.10', note: 'sustained_performance' },
      { sum: '화면이 조금 자극적 느낌(刺眼). 눈 피로도가 줄었지만 밝기감이 강함', sent: '중립', cat: 'Display_Brightness', int: '중', src: '知乎 사용자', date: '2026.03', note: 'eyestrain_perception' },
      { sum: '망원 카메라 알고리즘 우수. 빠른 처리속도에 선명하고 자연스러운 색감', sent: '긍정', cat: 'Camera_Tele', int: '강', src: 'Gizmochina', date: '2026.01', note: 'tele_performance' },
      { sum: '3시간 연속 게임 중 화면 최고 45.8℃. 게임냉각 매우 우수', sent: '긍정', cat: 'Thermal', int: '강', src: '爱搞机', date: '2026.02', note: 'game_thermal_verification' },
      { sum: '중부하 일상(게임·영상·촬영) 하루 23% 잔량. 배터리 지구력 우수', sent: '긍정', cat: 'Battery', int: '강', src: '新浪众测', date: '2026.02', note: 'daily_battery_test' },
      { sum: '전면 카메라로 얼굴이 납작해 보임. 미용 모드도 개선 미약', sent: '부정', cat: 'Camera_Main', int: '중', src: 'Beebom Gadgets', date: '2026.01', note: 'front_camera_compression' },
      { sum: '컴퓨터 모니터 촬영 시 조명 줄무늬(무아레 현상) 심함', sent: '부정', cat: 'Camera_Main', int: '중', src: '中关村在线', date: '2026.02', note: 'moiré_pattern' },
      { sum: '색감 보정: 생생한 모드는 과포화, 텍스처 모드는 자연스럽고 영화적', sent: '중립', cat: 'Camera_Main', int: '중', src: 'Nasi Lemak Tech', date: '2026.01', note: 'color_tuning_preference' }
    ]
};
