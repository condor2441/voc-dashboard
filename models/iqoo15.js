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
    date: '2026.04.13',
    sampleN: 68,
    conclusion: '2K 珠峰屏 + 무편광 기술로 디스플레이 강점(Display 부정 0건). 성능 게이밍 최강. 셀카 카메라·소프트웨어 안정성이 개선 필요 영역.',

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
      { period: '📅 최근 (2026.02–04)', pos: 68, neg: 14, note: '장기사용자 안정성 만족. 디스플레이 자극감·카메라 색감 보정방법 공유. 배터리·발열 강점 재확인', issue: '화면자극감 (개인차) / 카메라색감조정필요 / 배터리·발열 우수입증', uid: '—', src: 'Nasi Lemak Tech, Gizmochina, 爱搞机, 新浪众测, 知乎' }
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
      '2K LEAD OLED 珠峰屏: 2600nit 전면 피크(실측 3014nit @10%APL)로 글로벌경쟁기 대비 +40% 우수. 무편광 자연광 기술+1nit 최저 밝기로 CN·글로벌 사용자 모두 Display 부정 0건.',
      '2160Hz PWM + DC 듀얼 디밍으로 야간 護眼 체감 뛰어남. 선글라스 사용 가능(글로벌 극찬). 장기사용 자동밝기 과도로 눈건조 경미 우려.',
      '144Hz LTPO는 구현되나 크롬 등 주요앱 90Hz 캡으로 실체감 제한. 밝기·護眼 최강이나 고주사율 차별화 약함.'
    ],
    productInsights: [
      '배터리 7000mAh는 강점(BSI +48.3)이나 유선 100W 퇴보(전작 120W)는 강불만 발생. 次세대에서 ≥120W 복원·무선 100W 지속 권장.',
      '카메라 CSI +40.0: 주카메라는 양호하나 셀카 납작화·4K뭉개짐이 구체적 이슈. 전면 센서·ISP 튜닝 개선 필수.',
      '성능+배터리+디스플레이 3중 강점(Performance 80%긍·BSI+48.3·Display부정0) → 게이밍 플래그십 포지션 확고. 셀카·초기소프트웨어안정성 개선 시 프리미엄층 확대 가능.'
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
