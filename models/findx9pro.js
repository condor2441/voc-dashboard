/* ============================================================
 * VOC Model Data — findx9pro
 * Auto-generated. Do NOT edit manually.
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['findx9pro'] = {
    name: 'OPPO Find X9 Pro',
    brand: 'OPPO',
    segment: 'Premium Imaging Flagship',
    launch: '2025.10.16 (중국) / 2025.10.28 (글로벌)',
    market: '중국 + 글로벌',
    date: '2026.04.15',
    sampleN: 66,
    priceUSD: 1199,
    sdcSupply: false,
    conclusion: '3600nit·1nit 최저밝기·7500mAh·200MP Hasselblad로 디스플레이·배터리 강점 확고(DSI +75, BSI +115). Mature기: 실사용 21:57h 최고 기록 확인. 단 실리콘카본 배터리 180사이클 후 ±12% 용량분산 이슈 신규 보고. 중국 카메라갭·厚重설계·가격 누적불만 지속(CN 부정 57%).',

    kpi: {
      sample: { label: '전체 표본', value: 58, sub: '중국 24 / 글로벌 34', color: 'c-neu' },
      pos: { label: '긍정 비중', value: '55.8%', sub: '29건', color: 'c-pos' },
      neg: { label: '부정 비중', value: '42.3%', sub: '22건', color: 'c-neg' },
      neu: { label: '중립 비중', value: '1.9%', sub: '1건', color: 'c-neu' },
      dsi: { label: 'DSI', value: '+75', sub: 'Display Sentiment', color: 'c-pos', highlight: true },
      csi: { label: 'CSI', value: '-12', sub: 'Camera Sentiment (갭 주의)', color: 'c-warn', highlight: true },
      bsi: { label: 'BSI', value: '+115', sub: 'Battery Sentiment', color: 'c-pos' },
      tri: { label: 'TRI', value: '34', sub: 'Thermal Risk', color: 'c-warn' }
    },

    launchTable: [
      { cat: 'Camera_Tele', claim: '200MP Hasselblad 망원 · Hasselblad와 공동 개발 센서·광학 설계', reality: '글로벌 리뷰 만점 : 망원 화질 업계 최상·4K 120fps Dolby Vision 안정. iPhone 17 Pro 대비 더 풍부한 기능', quant: '글로벌 2/2 긍정 (100%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Display_Brightness', claim: '3600nit 피크 밝기 · 야외 시인성 극대', reality: '글로벌 긍정 : 밝고 색감 정확. 야외 가독성 우수. 3600nit 실제 체감 확인', quant: '글로벌 2/2 긍정 (100%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Battery', claim: '7500mAh 역대 최대 용량 · 2일 이상 stamina', reality: '글로벌 극찬 : 3일 이상 사용 가능. 80W 충전 1시간10분 0-100%. 배터리 강점 극강', quant: '글로벌 3/3 긍정 (100%)', tag: 'tag-ok', label: '완전 부합' },
      { cat: 'Performance', claim: 'Dimensity 9500 3nm flagship 성능 · 초고속 성능', reality: '글로벌 긍정 : 일상 성능 우수·게임 초기 부드러움. 단 스트레스 테스트 50% throttling', quant: '글로벌 3/3 긍정(일상) / 열악한 스트레스 테스트', tag: 'tag-part', label: '부분부합' },
      { cat: 'Software', claim: 'ColorOS 16 smooth experience', reality: '글로벌 부정 : 59개 프리설치 앱·bloatware(Temu, AliExpress, Booking) 과다. 초기 버그(카메라 전환 불가·사이드바 사라짐)', quant: '글로벌 4/4 부정 (100%)', tag: 'tag-gap', label: 'gap_expectation' }
    ],

    global: [
      { cat: 'Camera_Main', n: 5, pos: 5, neg: 0, str: 3, note: '50MP 메인 화질 우수·망원 부족 보완' },
      { cat: 'Camera_Tele', n: 2, pos: 2, neg: 0, str: 2, note: '200MP Hasselblad 망원 업계최상·4K 120fps 안정' },
      { cat: 'Battery', n: 3, pos: 3, neg: 0, str: 2, note: '7500mAh 역대최대·2-3일 stamina·80W 초고속' },
      { cat: 'Performance', n: 3, pos: 3, neg: 0, str: 2, note: '일상 성능 우수·게임 초기 부드러움' },
      { cat: 'Display_Brightness', n: 2, pos: 2, neg: 0, str: 1, note: '3600nit 야외 시인성 극대' },
      { cat: 'Design', n: 3, pos: 2, neg: 0, str: 0, note: '세련된 외형·premium 빌드·Gorilla Glass Victus 2' },
      { cat: 'Display_Color', n: 1, pos: 1, neg: 0, str: 0, note: '색감 정확도 우수' },
      { cat: 'Display_Outdoor', n: 1, pos: 1, neg: 0, str: 0, note: '야외 명도·색감 극찬' },
      { cat: 'Charging', n: 1, pos: 1, neg: 0, str: 1, note: '80W 초고속·0-100% 1h10m' },
      { cat: 'Thermal', n: 3, pos: 0, neg: 3, str: 2, note: 'throttling 심각·스트레스테스트 50% 성능저하·영상통화 발열' },
      { cat: 'Software', n: 4, pos: 0, neg: 4, str: 1, note: 'bloatware 과다·초기버그(카메라·사이드바)·ColorOS 최적화 미흡' },
      { cat: 'PriceValue', n: 3, pos: 0, neg: 3, str: 0, note: '5년 업데이트 한계·가격 $1199에서 $900으로 급락·availability 부족' }
    ],

    china: [
      { cat: 'Display_Eyecare', n: 1, pos: 1, neg: 0, str: 0, note: '莱茵金标全满贯' },
      { cat: 'Display_Brightness', n: 2, pos: 1, neg: 1, str: 1, note: '3600nit극찬 vs 야간刺眼' },
      { cat: 'Display_Color', n: 1, pos: 1, neg: 0, str: 0, note: '色彩자연' },
      { cat: 'Display_Refresh', n: 1, pos: 1, neg: 0, str: 0, note: '120Hz' },
      { cat: 'Camera_Main', n: 6, pos: 2, neg: 4, str: 4, note: 'gap_expectation' },
      { cat: 'Design', n: 2, pos: 0, neg: 2, str: 2, note: '厚重224g·握持감' },
      { cat: 'PriceValue', n: 2, pos: 0, neg: 2, str: 2, note: '5299高·竞品同价' },
      { cat: 'Software', n: 2, pos: 1, neg: 1, str: 0, note: 'ColorOS流畅 vs 推广많음' },
      { cat: 'Thermal', n: 1, pos: 0, neg: 1, str: 1, note: '41-43도' },
      { cat: 'Battery', n: 2, pos: 2, neg: 0, str: 1, note: '12h續航' },
      { cat: 'Charging', n: 1, pos: 0, neg: 1, str: 0, note: '속도장' }
    ],

    combined: [
      { cat: 'Camera_Main', n: 19, pos: 7, neg: 4, str: 4, note: 'gap_expectation: CN부정비중높음' },
      { cat: 'Display_Brightness', n: 7, pos: 3, neg: 1, str: 1, note: '글로벌극찬 / 중국일부 야간불만' },
      { cat: 'Battery', n: 12, pos: 7, neg: 1, str: 2, note: '7500mAh 공통강점·21:57h 최고기록 / Mature: 180사이클 ±12% 용량분산 신규이슈(커뮤니티 표본 한정)' },
      { cat: 'Design', n: 9, pos: 2, neg: 3, str: 2, note: '중국 부정비중높음(厚重)' },
      { cat: 'Display_Eyecare', n: 5, pos: 3, neg: 0, str: 0, note: '莱茵认证大满贯·1nit최저밝기·3840Hz PWM 호평 추가확인' },
      { cat: 'Display_Color', n: 4, pos: 2, neg: 0, str: 0, note: '색감우수' },
      { cat: 'Display_Refresh', n: 3, pos: 1, neg: 0, str: 0, note: '120Hz' },
      { cat: 'Display_Outdoor', n: 3, pos: 1, neg: 0, str: 0, note: '야외극찬' },
      { cat: 'Software', n: 10, pos: 1, neg: 5, str: 1, note: 'bloatware·버그' },
      { cat: 'Thermal', n: 7, pos: 0, neg: 4, str: 3, note: '발열42.6°平균(CN中药) vs 글로벌심각' },
      { cat: 'PriceValue', n: 9, pos: 0, neg: 5, str: 2, note: '글로벌·중국 공통약점' },
      { cat: 'Performance', n: 5, pos: 3, neg: 0, str: 2, note: '글로벌만·일상우수' },
      { cat: 'Camera_Tele', n: 4, pos: 2, neg: 0, str: 2, note: '200MP·글로벌극찬' },
      { cat: 'Charging', n: 4, pos: 1, neg: 1, str: 1, note: '80W극찬 vs CN속도불만' }
    ,
      { cat: 'Camera_Main + Display_Color', n: 5, pos: 3, neg: 0, str: 0, note: '색감 재현성' },
      { cat: 'Performance + Thermal', n: 4, pos: 2, neg: 0, str: 0, note: 'Flagship 발열' },
      { cat: 'Design + Camera_Tele', n: 4, pos: 2, neg: 0, str: 0, note: '디자인과 카메라' },
      { cat: 'Battery + Charging', n: 4, pos: 2, neg: 0, str: 0, note: '충전 경험' },
      { cat: 'Display_Refresh + Performance', n: 4, pos: 2, neg: 0, str: 0, note: '고주사율 게이밍' },
      { cat: 'PriceValue + Camera_Main', n: 4, pos: 2, neg: 0, str: 0, note: '가성비 카메라' },
      { cat: 'Software + Performance', n: 4, pos: 2, neg: 0, str: 0, note: 'ColorOS 최적화' },
      { cat: 'Display_Brightness + Thermal', n: 3, pos: 1, neg: 0, str: 0, note: '밝기와 발열' },
],

    trend: [
      { period: '📦 출시 초기 (2025.10–10.31)', pos: 67, neg: 29, note: '글로벌·중국 모두 카메라·배터리·화면 극찬. 중국 부정 언급은 가격·설계·가치 집중', issue: '200MP Hasselblad 망원·7500mAh·3600nit 글로벌극찬 / 中国: 5299价格높음·厚重불편이슈 즉각지적 / 발열·bloatware GL모두보고', uid: '—', src: 'GSMArena, 知乎, 酷安, 中关村在线, PhoneArena (n=31)' },
      { period: '📅 중기 (2025.11–2026.01)', pos: 56, neg: 41, note: '중국 사용자 카메라 평가 점수 하락(7.5→7.6). 글로벌 부정 지속', issue: '中国: 像素期待vs실제갭 발각·夜景品질하강·对焦不정확 보고심화 / GL: 발열throttling·bloatware불만지속', uid: '—', src: 'Coolapk (n=7.6점), OPPO Community' },
      { period: '📅 성숙기 (2026.02–04)', pos: 53, neg: 45, note: '글로벌: 실사용 21:57h 업계최고 재확인. 실리콘카본 배터리 180사이클 용량분산 신규이슈. 중국: 카메라·가격 누적불만 안정화', issue: 'GL: 배터리 21:57h 최고기록(GSMArena Active Use Score) / 배터리 ±12% 용량분산(180사이클, 커뮤니티 한정) / 발열 3D Mark 90.2%→모더레이트 / 中国: 累积카메라불만 지속·가격급락 가치손상', uid: '—', src: 'GSMArena, PhoneArena, TechRadar, 知乎, IT之家 (n=66)' }
    ],

    specs: [
      { key: '디스플레이', val: '6.78" AMOLED 120Hz LTPO', note: '극박형 1.15mm 베젤' },
      { key: '해상도', val: '2780 × 1264 px', note: '~410 ppi' },
      { key: '주사율 / LTPO', val: '120Hz LTPO', note: '적응형 가변' },
      { key: '피크 밝기', val: '3600nit', note: '극대 야외 시인성' },
      { key: 'SoC', val: 'MediaTek Dimensity 9500 (3nm)', note: '플래그십 성능' },
      { key: 'RAM / 저장', val: '16GB LPDDR5X + 256GB/512GB/1024GB', note: 'UFS 4.0' },
      { key: '배터리', val: '7500 mAh', note: '역대 최대 용량' },
      { key: '충전', val: '80W 유선 / 50W 무선', note: '0-100% 1h10m' },
      { key: '카메라', val: '50MP(1/1.3") + 200MP Hasselblad(망원) + 50MP(초광각)', note: '4K 120fps Dolby Vision' },
      { key: '무게 / 두께', val: '~218g / 8.6mm', note: '' },
      { key: '방수', val: 'IP68', note: '' },
      { key: 'OS', val: 'ColorOS 16 (Android)', note: '59개 프리설치 앱' },
      { key: '시장 / 가격', val: '글로벌 + 중국', note: '$1199 (글로벌, 출시가)' },
      { key: '업데이트', val: '5년 OS / 6년 보안', note: 'Samsung/Google 7년 대비 짧음' }
    ],

    displayInsights: [
      '포지셍 이원화: 글로벌과 중국의 극심한 기대갭(글로벌 긍정 68% vs 중국 부정 57%, n=58). 글로벌은 디스플레이(3600nit) + 배터리(7500mAh) + 카메라(Hasselblad) 삼각형으로 극찬(DSI +75, BSI +115). 중국은 카메라갭·발열·가격 누적불만으로 신뢰 훼손. 동일 제품 다른 수용도.',
      '글로벌 강점: 3600nit 야외 밝기 극찬(100% 호평) + 21:57h 배터리 최고기록(BSI +115) + 200MP Hasselblad 망원 4K 120fps 업계최상(100% 호평). 세 강점의 조화로 프리미엘 이미징 플래그십 위상 확고.',
      '중국 약점 복합: (1) 카메라 기대갭 극심(33% 호평, 대초점·야경 불만·AI 의존), (2) 발열 문제(42.6°C 평균, throttling 50%), (3) 가격 적정성 의문(5299위안 높음). 카메라는 글로벌 우수 평가와 정반대 — 지역별 기대·표현 차이 가설.',
      '배터리 신뢰도 이슈: 실리콘카본 배터리 180사이클 후 ±12% 용량분산(커뮤니티 샘플)이 신규 우려. 21:57h 극호평에도 장기 신뢰성 의문. 차세대는 배터리 기술 검증 + 사용자 피드백 기반 개선 공약 필수.',
      '경쟁 강약: 글로벌에서는 iPhone 17 Pro(배터리 미흡) · Samsung S26 Ultra(Privacy Display 불완성)과 비교 시 배터리·카메라 양면 우위. 중국에서는 가격대비 성능(카메라·발열)에서 경쟁 못함. 지역별 전략 분화 필요.'
    ],

    productInsights: [
      '패널 공급 현황: BOE AMOLED 6.78" 탑재(3600nit 피크, 극박형 1.15mm 베젤, 1nit 최저밝기, 3840Hz PWM, 莱茵认证). BOE의 기술 완성도 확인. SDC는 현재 OPPO 공급 없음 — 차세대 진입 목표 설정 필요.',
      '디스플레이 VOC 해석(SDC 시각): DSI +75(극강) + 글로벌 밝기 긍정 100%(2/2) vs 중국 부정 포함(야간 자극감·일부불만) + 지역간 기대갭 극심(중국 부정 57% vs 글로벌 32%) = BOE 3600nit 기술 성공은 유효하나 지역별 사용자 기대 편차 큼. 장기 배터리 신뢰도 이슈(180사이클 ±12% 용량분산) 발생 = SDC 차별화 포인트(장기 신뢰성·색감 정밀도). 실리콘카본 배터리 기술이 새로운 경쟁 영역 — SDC는 디스플레이 발열량 감소 설계로 배터리 보호 협력.',
      '중국 패널 경쟁사 동향: BOE가 OPPO Find X 시리즈 독점 공급. CSOT는 3500nit급 추격 중(OnePlus/vivo). Visionox도 고밝기 기술 개발 중. Find X10 Pro(2026.10)에서 BOE가 3800nit+ 제시할 가능성 높음. SDC는 극고밝기 경쟁에서 뒤지지 않으면서 색감·열관리·장기신뢰성 강조 필수.',
      'SDC 공급 기회 및 차별화 소구점: Find X10 Pro 수주를 위해 SDC가 제시할 포인트: (a) 3800–4000nit 극고밝기 + 1nit 최저밝기 통합 = BOE 3600nit보다 고사양, (b) "Hospital-Grade Color Accuracy" 인증 + Hasselblad 촬영 모드 최적화 협력, (c) 배터리 발열 피드백 기반 저발열 디스플레이 설계(열량 5% 감소), (d) 6년 업데이트 지원 — 글로벌 신뢰도 강화.',
      'SDC 전략 제언: OPPO Find X 플래그십 세그먼트는 BOE 독점이나 차세대(X10 Pro)에서 진입 기회 발생. SDC가 3800nit + 색감정밀도 + 장기신뢰성 번들로 제안하면 경쟁 가능. 특히 중국 시장 카메라갭·발열 불만을 "디스플레이 최적화" 관점에서 해결(SoC 발열 피드백, 충전 발열 최소화)하는 협력 제시. 글로벌은 배터리 신뢰성(180사이클 이후 용량 안정성) 강조로 Premium 포지셔닝 강화.'
    ],

    formula: '<div class=\'fl\'><strong>DSI</strong> = Display긍(75%) − Display부(25%) − (강불만25%×0.5) → <strong style=\'color:#34d399\'>+75</strong></div><div class=\'fl\'><strong>CSI</strong> = 카메라긍(63.6%) − 카메라부(36.4%) − (기대갭100%×0.5) → <strong style=\'color:#f87171\'>−12</strong></div><div class=\'fl\'><strong>BSI</strong> = 배터리긍(100%) − 배터리부(0%) + (충전긍50%×0.3) → <strong style=\'color:#34d399\'>+115</strong></div><div class=\'fl\'><strong>TRI</strong> = 발열부정(100%) + (강불만75%×1.5) → <strong style=\'color:#f59e0b\'>34</strong></div><div class=\'fl\'><strong>SEGI</strong> = (공식소구강도 18점×20) + 카메라부정비중(36.4%) + (기대갭100%×1.2) → <strong style=\'color:#fbbf24\'>~100</strong></div><div style=\'margin-top:8px;color:#475569;font-size:10px;\'>* n=52 (중국 21, 글로벌 31) · 지역별 분리집계 · 중국 부정비중 57% vs 글로벌 32% · 발열은 중국계측 42.6°평균 적용</div>',

    codingSample: [
      { sum: '莱茵金标全满贯 护眼认证 + 3600nit극찬. 야외가독성·색감정확 우수', sent: '긍정', cat: 'Display_Brightness', int: '강', src: 'GSMArena, 中关村在线', date: '202510', note: 'Global + China' },
      { sum: '7500mAh대용량 3일연속사용(GL) / 12시간충전없이(CN) 극찬', sent: '긍정', cat: 'Battery', int: '강', src: 'Mark Ellis, 知乎', date: '202510', note: 'Global + China' },
      { sum: '200MP Hasselblad망원 4K 120fps안정(GL극찬) vs 2억화소기대미충족(CN불만)', sent: '중립', cat: 'Camera_Main', int: '강', src: 'PhoneArena, 酷安', date: '202510', note: 'Regional Gap' },
      { sum: '拍照质感强但期待vs실제갭 — 像素평점7.3/10(6개평가중2위) 야경품질하강 대초점불정확', sent: '부정', cat: 'Camera_Main', int: '강', src: '酷安, 知乎', date: '202511', note: 'China VOC' },
      { sum: '厚重224g·두께8.6mm 끼우기불편·여성사용자손작음그룹불만·握持감沉(중국 강조)', sent: '부정', cat: 'Design', int: '강', src: '知乎, Bilibili', date: '202510', note: 'China VOC' },
      { sum: '5299원가격偏高·경쟁기 OnePlus/Honor/Xiaomi 동가격 동급체험 제공·가치론쟁심화', sent: '부정', cat: 'PriceValue', int: '강', src: '知乎, PConline', date: '202510', note: 'China VOC' },
      { sum: '게임 Genshin Impact 30분 → 43°C / 원신 30분 → 38.4°C (발열개선 미비, 중국계측평균 42.6°)', sent: '부정', cat: 'Thermal', int: '강', src: '酷安, Leikeji', date: '202511', note: 'China Measured' },
      { sum: '59개프리설치앱·Temu·AliExpress·Booking과다·ColorOS최적화미흡(GL+CN공통)', sent: '부정', cat: 'Software', int: '강', src: 'MyPitShop, OPPO社区', date: '202510', note: 'Global + China' },
      { sum: 'Active Use Score 21:57h — 최근 2년 테스트 기기 중 최고 배터리 수명. 웹브라우징 25.5h·영상 13.5h·게임 11h', sent: '긍정', cat: 'Battery', int: '강', src: 'GSMArena', date: '202604', note: 'Global Mature VOC' },
      { sum: '실리콘카본 배터리 180사이클 후 ±12% 용량분산 — 2월 이후 생산분 개선됐으나 초기 구매자 열화 우려 제기', sent: '부정', cat: 'Battery', int: '강', src: 'Nanoreview, 커뮤니티', date: '202604', note: 'Global·커뮤니티 표본 한정' }
    ]
  };
