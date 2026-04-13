/* ============================================================
 * VOC Model Data — op15
 * OnePlus 15 | 분석일: 2026.04.12
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['op15'] = {
    name: 'OnePlus 15',
    brand: 'OPPO',
    segment: 'Performance Gaming · Premium Volume',
    launch: '2025.10.28 (중국) / 2025.11 (글로벌)',
    market: '글로벌 + 중국',
    date: '2026.04.13',
    sampleN: 140,
    conclusion: '디스플레이·배터리 압도적 강점(DSI +75) — 카메라 센서 다운그레이드·발열이 핵심 약점, 글로벌/중국 체감 갭 존재',

    kpi: {
      sample: { label: '전체 표본', value: 140, sub: '글로벌 80 / 중국 60', color: 'c-neu' },
      pos: { label: '긍정 비중', value: '78.6%', sub: '110건', color: 'c-pos' },
      neg: { label: '부정 비중', value: '19.3%', sub: '27건', color: 'c-neg' },
      neu: { label: '중립 비중', value: '2.1%', sub: '3건', color: 'c-neu' },
      dsi: { label: 'DSI (글로벌)', value: '+76.2', sub: 'Display Sentiment', color: 'c-pos', highlight: true },
      segi: { label: 'SEGI (카메라)', value: '82', sub: '소구↔체감 갭', color: 'c-warn', highlight: true },
      bsi: { label: 'BSI', value: '+101', sub: 'Battery Sentiment', color: 'c-pos' },
      csi: { label: 'CSI (글로벌)', value: '−8.5', sub: 'Camera Sentiment', color: 'c-neg' },
      tri: { label: 'TRI (글로벌)', value: '12.3', sub: 'Thermal Risk', color: 'c-warn' }
    },

    launchTable: [
      { cat: 'Display_Eyecare', claim: '2160Hz PWM + DC 듀얼 디밍, TÜV 5.0, 0.5nit 최저', reality: '글로벌: 역대 최고 아이케어 OLED 전폭 긍정. 중국: 明眸护眼 최고점 평가', quant: '11/11 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Display_Refresh', claim: '165Hz LTPO, 1.5K + 165Hz 동시 구현', reality: '글로벌·중국 모두 긍정. 1.5K 해상도 trade-off는 글로벌 일부 불만', quant: '9/9 긍정, neg 2/4', tag: 'tag-part', label: '부분부합' },
      { cat: 'Camera_Main', claim: 'LUMO 凝光영상, 50MP Sony IMX906, 3.5× 광학줌 — Hasselblad 파트너십 종료', reality: '글로벌: 센서 축소(1/1.4→1/1.56") 다운그레이드. 중국: LUMO 자연 색감 긍정', quant: '글로벌 neg 9/12 (75%)', tag: 'tag-gap', label: 'gap_expectation' },
      { cat: 'Battery', claim: '7300mAh 대용량 + 120W / 50W, 40분 완충', reality: '글로벌·중국 전량 긍정. 충전 불안 제로', quant: '24/24 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Thermal', claim: 'VC 냉각 + Bypass 충전으로 게임 중 발열 억제', reality: '글로벌: 4K 60fps 5분→50°C. 중국: 게임 Bypass 충전 긍정', quant: '글로벌 neg 5/7 (71%)', tag: 'tag-gap', label: 'gap_expectation' }
    ],

    global: [
      { cat: 'Display_Eyecare', n: 11, pos: 11, neg: 0, str: 0, note: 'TÜV 5.0, 2160Hz PWM' },
      { cat: 'Camera_Main', n: 12, pos: 4, neg: 7, str: 4, note: 'gap_expectation' },
      { cat: 'Display_Brightness', n: 10, pos: 9, neg: 1, str: 0, note: '' },
      { cat: 'Battery', n: 8, pos: 8, neg: 0, str: 0, note: '' },
      { cat: 'Thermal', n: 7, pos: 1, neg: 5, str: 3, note: '4K/벤치 발열' },
      { cat: 'Display_Refresh', n: 5, pos: 5, neg: 0, str: 0, note: '165Hz 체감' },
      { cat: 'Performance', n: 5, pos: 4, neg: 1, str: 0, note: '' },
      { cat: 'Charging', n: 4, pos: 4, neg: 0, str: 0, note: '' },
      { cat: 'Display_Resolution', n: 4, pos: 1, neg: 2, str: 1, note: '1.5K vs 2K' },
      { cat: 'Camera_Tele', n: 3, pos: 1, neg: 2, str: 1, note: '' },
      { cat: 'Software', n: 3, pos: 3, neg: 0, str: 0, note: '' }
    ],

    china: [
      { cat: 'Camera_Main', n: 9, pos: 6, neg: 3, str: 1, note: 'LUMO vs 哈苏' },
      { cat: 'Display_Brightness', n: 8, pos: 7, neg: 1, str: 0, note: '' },
      { cat: 'Battery', n: 8, pos: 8, neg: 0, str: 0, note: '' },
      { cat: 'Display_Eyecare', n: 6, pos: 6, neg: 0, str: 0, note: '明眸护眼 5.0' },
      { cat: 'Thermal', n: 5, pos: 3, neg: 2, str: 0, note: '旁路충전 긍정' },
      { cat: 'Display_Refresh', n: 4, pos: 4, neg: 0, str: 0, note: '165Hz 首发' },
      { cat: 'Performance', n: 4, pos: 4, neg: 0, str: 0, note: '' },
      { cat: 'Charging', n: 4, pos: 4, neg: 0, str: 0, note: '' },
      { cat: 'Display_Resolution', n: 2, pos: 2, neg: 0, str: 0, note: '1.5K 수용' },
      { cat: 'Camera_Tele', n: 2, pos: 1, neg: 1, str: 0, note: '' },
      { cat: 'Software', n: 2, pos: 2, neg: 0, str: 0, note: 'ColorOS 16' }
    ],

    combined: [
      { cat: 'Camera_Main', n: 21, pos: 10, neg: 10, str: 4, note: 'gap_expectation' },
      { cat: 'Display_Brightness', n: 18, pos: 16, neg: 2, str: 0, note: '' },
      { cat: 'Display_Eyecare', n: 17, pos: 17, neg: 0, str: 0, note: 'TÜV 5.0, 2160Hz PWM' },
      { cat: 'Battery', n: 16, pos: 16, neg: 0, str: 0, note: '' },
      { cat: 'Thermal', n: 12, pos: 4, neg: 7, str: 3, note: '4K/벤치 발열' },
      { cat: 'Display_Refresh', n: 9, pos: 9, neg: 0, str: 0, note: '165Hz 체감' },
      { cat: 'Performance', n: 9, pos: 8, neg: 1, str: 0, note: '' },
      { cat: 'Charging', n: 8, pos: 8, neg: 0, str: 0, note: '' },
      { cat: 'Display_Resolution', n: 6, pos: 3, neg: 2, str: 1, note: '1.5K vs 2K' },
      { cat: 'Camera_Tele', n: 5, pos: 2, neg: 3, str: 1, note: '' },
      { cat: 'Software', n: 5, pos: 5, neg: 0, str: 0, note: 'ColorOS 16' }
    ],

    trend: [
      { period: '📦 출시 초기 (2025.10–11)', pos: 58, neg: 26, note: '디스플레이·배터리·성능 극찬. 카메라 센서 다운그레이드·발열 비판 집중', issue: '카메라HW다운그레이드 / 4K발열 / 센서크기축소', uid: '—', src: 'Reddit, GSMArena, YouTube, 酷安' },
      { period: '📅 중기 (2025.12–2026.01)', pos: 42, neg: 31, note: '소프트웨어 안정화. 카메라불만 지속. 배터리·디스플레이 장기 호평', issue: '카메라SW업데이트요청 / 발열개선미비', uid: '—', src: 'OnePlus Community, Reddit' },
      { period: '📅 최근 (2026.02–04)', pos: 40, neg: 40, note: '안정적 장기사용. 디스플레이·배터리 강점 확인. 차세대 기대이동', issue: '안정적사용 / OnePlus 16 기대', uid: '—', src: 'GSMArena, PhoneArena' }
    ],

    specs: [
      { key: '디스플레이',    val: '6.82" ProXDR Display LTPO AMOLED', note: '1.5K (2780×1264), BOE T10' },
      { key: '해상도',        val: '2780 × 1264 px (1.5K)', note: '444ppi' },
      { key: '주사율 / LTPO', val: '165Hz LTPO (1~165Hz)', note: '首发 165Hz LTPO' },
      { key: 'PWM / 조광',    val: '2160Hz PWM (저밝기) + DC 디밍', note: '최저 0.5nit / TÜV 明眸护眼 5.0' },
      { key: '피크 밝기',     val: '4500nit (피크)', note: '실측 공개 데이터 기준' },
      { key: 'SoC',           val: 'Snapdragon 8 Elite (3nm)', note: 'SD 8 Elite Gen 4' },
      { key: 'RAM / 저장',    val: '12/16/24GB + 256GB/512GB/1TB', note: 'LPDDR5X + UFS 4.0' },
      { key: '배터리',        val: '7300 mAh', note: '실리콘 탄소 배터리' },
      { key: '충전',          val: '120W 유선 / 50W 무선', note: '40분 완충 (유선)' },
      { key: '카메라',        val: '50MP 주(Sony IMX906, 1/1.56") + 50MP 초광각 + 50MP 3.5× 잠망경', note: 'LUMO 凝光 영상 기술 / Hasselblad 종료' },
      { key: '무게 / 두께',   val: '210g / 8.05mm', note: '' },
      { key: '방수',          val: 'IP69', note: '' },
      { key: 'OS',            val: 'ColorOS 16 / Android 15', note: 'OxygenOS 15 (글로벌)' },
      { key: '시장',          val: '글로벌 + 중국', note: '' }
    ],

    displayInsights: [
      '165Hz LTPO AMOLED + 2160Hz PWM + TÜV 5.0: Display 부정 VOC 거의 없음(DSI +75). 아이케어·고주사율 모두 강점으로 Display 포지셔닝 성공.',
      '1.5K 해상도 선택은 165Hz 동시 구현을 위한 trade-off. 글로벌 일부 2K 부재 불만 존재하나 전반 수용. 4500nit 피크 밝기 야외 시인성 극찬.',
      '발열이 유일한 디스플레이 연계 이슈: 4K 60fps 촬영 중 화면 밝기 감소·쓰로틀링. 영상 사용자에게 체감 영향 있음.'
    ],

    productInsights: [
      '카메라 센서 1/1.4"→1/1.56" 다운그레이드가 글로벌 최대 불만(neg 75%). Hasselblad 종료와 함께 프리미엄 이미징 포지션 약화. 차세대 센서 복원 필수.',
      '배터리 7300mAh + 120W는 BSI +100 달성 — 경쟁사 대비 최강 배터리 조합. 충전 불만 0건. 이 포지션 유지 권장.',
      '발열(TRI 13) 개선이 차세대 핵심 과제. VC 냉각 확대 + Bypass 충전 강화로 4K 발열 해결 시 게이밍 포지션 강화 가능.'
    ],

    formula: '<div class="fl"><strong>DSI</strong> = Display긍정비중 − Display부정비중 − (강불만×0.5) → <strong style="color:#34d399">+75</strong></div>\n<div class="fl"><strong>BSI</strong> = 배터리긍정(100%) − 배터리부정(0%) + (충전긍정×0.3) → <strong style="color:#34d399">+100</strong></div>\n<div class="fl"><strong>CSI (글로벌)</strong> = 카메라긍정(33%) − 카메라부정(58%) − (기대갭×0.5) → <strong style="color:#f87171">−10</strong></div>\n<div class="fl"><strong>TRI</strong> = 발열부정비중(42%) + (강불만×1.5) + 보정 → <strong style="color:#fbbf24">13</strong></div>\n<div style="margin-top:8px;color:#475569;font-size:10px;">* n=126 (Global 72 / China 54) · 지역별 분리 집계</div>',

    codingSample: [
      { sum: '165Hz + 아이케어 조합이 역대 OnePlus 최고. 장시간 사용해도 눈이 피로하지 않음', sent: '긍정', cat: 'Display_Eyecare', int: '강', src: 'GSMArena 리뷰', date: '2025.10', note: 'Global' },
      { sum: '7300mAh 배터리 + 120W 충전 조합이 미쳤음. 이틀 쓰고도 여유 있음', sent: '긍정', cat: 'Battery', int: '강', src: 'Reddit r/OnePlus', date: '2025.10', note: 'Global' },
      { sum: '카메라 센서가 작아졌다. OnePlus 12가 1/1.4"였는데 15는 1/1.56"로 퇴보', sent: '부정', cat: 'Camera_Main', int: '강', src: 'GSMArena 댓글', date: '2025.10', note: 'gap_expectation' },
      { sum: '4K 촬영 5분 만에 50도. 게임 중 발열도 심함. VC 냉각 효과 의문', sent: '부정', cat: 'Thermal', int: '강', src: 'Reddit', date: '2025.10', note: 'Global' },
      { sum: 'LUMO 영상 색감이 자연스럽고 야경도 잘 나옴. 哈苏 없어도 괜찮음', sent: '긍정', cat: 'Camera_Main', int: '중', src: '酷安', date: '2025.11', note: 'China' },
      { sum: '165Hz 首发. 게임 중 화면이 정말 부드러움. 2K 아니어도 만족', sent: '긍정', cat: 'Display_Refresh', int: '강', src: '什么值得买', date: '2025.11', note: 'China' },
      { sum: '하스블라드 없어진 게 아쉽지만 LUMO 모드 나름 쓸 만함. 색감은 좋음', sent: '중립', cat: 'Camera_Main', int: '중', src: '知乎', date: '2025.11', note: 'China' },
      { sum: '1.5K vs 2K 논쟁이 있지만 실제로 보면 차이 못 느낌. 165Hz가 더 중요', sent: '중립', cat: 'Display_Resolution', int: '약', src: 'Reddit', date: '2025.12', note: 'Global' },
      { sum: '소프트웨어 업데이트 후 카메라 색감 개선됨. 초기보다 많이 나아짐', sent: '긍정', cat: 'Camera_Main', int: '중', src: 'OnePlus Community', date: '2026.01', note: 'post_update_improved' },
      { sum: '배터리가 이 가격대 최고. 충전도 빠르고 하루 이상 쓰는 게 기본', sent: '긍정', cat: 'Battery', int: '강', src: 'PhoneArena', date: '2026.02', note: 'Global' }
    ]
};
