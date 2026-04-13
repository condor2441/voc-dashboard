/* ============================================================
 * VOC Model Data — s26u
 * Auto-generated. Do NOT edit manually.
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['s26u'] = {
    name: 'Samsung Galaxy S26 Ultra',
    brand: 'Samsung',
    segment: 'Premium Imaging Flagship (Innovation Leader)',
    launch: '2026.02.25 (공표) / 2026.03.11 (출시)',
    market: '글로벌 + 중국',
    date: '2026.04.13',
    sampleN: 31,
    conclusion: '초기 평가 매우 긍정적(긍정57%). Privacy Display 혁신 + 60W 충전 드디어 해결(BSI+80). 카메라 AI 여전하나 F1.4 개선 평가. 열관리 21% 향상 인정. S25 대비 "진화" 판정.',

    kpi: {
      sample: { label: '전체 표본', value: 28, sub: 'CN 14 / 글로벌 14 (신제품)', color: 'c-neu' },
      pos:    { label: '긍정 비중', value: '57.1%', sub: '16건', color: 'c-pos' },
      neg:    { label: '부정 비중', value: '28.6%', sub: '8건',  color: 'c-neg' },
      neu:    { label: '중립 비중', value: '14.3%', sub: '4건',  color: 'c-neu' },
      dsi:    { label: 'DSI', value: '+16', sub: 'Privacy Display 혁신', color: 'c-warn', highlight: true },
      segi:   { label: 'SEGI', value: '68', sub: '60W+Privacy 마케팅', color: 'c-pos', highlight: true },
      bsi:    { label: 'BSI', value: '+80', sub: '충전 혁신 (60W + 25W)', color: 'c-pos', highlight: true },
      csi:    { label: 'CSI', value: '−8', sub: 'Camera 미개선', color: 'c-neg' },
      tri:    { label: 'TRI', value: '−12', sub: 'Thermal 21% ↓ 위험도', color: 'c-pos', highlight: true }
    },

    launchTable: [
      { cat: 'Design_Privacy',    claim: 'Privacy Display 하드웨어 방탈출 — 측각 시야 화면 OFF, 필름 불필요', reality: 'CN·글로벌 혁신 극찬. 단, Privacy 모드 장시간 사용 시 일부 사용자 두통/눈 건조 보고. 기능은 우수하나 실용성 논란.', quant: '긍정 2/3, 부정 1/3', tag: 'tag-ok', label: '부분부합' },
      { cat: 'Charging',          claim: '60W 유선(전작 45W) + 25W 무선(전작 15W) — 6년 만의 주요 업그레이드', reality: 'S24/S25 느린 충전 비판 드디어 해결. 43분 완충 극찬. CN·글로벌 모두 강점 인정.', quant: '긍정 2/2 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Thermal',           claim: '21% 산열성능 개선, 베이퍼챔버 15% 증대 — 게이밍 온도 제어', reality: 'CN·글로벌 모두 게이밍 온도 안정 확인. 27°C vs 경쟁사 32°C 우수.', quant: '긍정 2/2 (100%)', tag: 'tag-ok', label: '부합' },
      { cat: 'Camera_Main',       claim: 'F1.4 메인(vs S25 F1.7) + F2.9 5x(vs S3.4) 광학 개선 — 저조도 효율↑', reality: 'CN: 세부 보존↑ 우수. 글로벌: 실제로 의미 있는 변화 없음 중론. AI처리 여전히 과도 지적.', quant: '혼합 평가', tag: 'tag-part', label: '부분부합' },
      { cat: 'Performance',        claim: 'SD 8 Elite Gen 5 정제칩 — 최강 성능, 게이밍 안정', reality: '게이밍 프레임 안정성 극찬. 경쟁사 대비 지속 성능 우위 인정.', quant: '긍정 2/2 (100%)', tag: 'tag-ok', label: '부합' }
    ],

    global: [
      { cat: 'Design_Privacy',    n: 2, pos: 1, neg: 1, str: 1, note: '혁신이나 사용성 논란' },
      { cat: 'Charging',          n: 2, pos: 2, neg: 0, str: 0, note: '60W 극찬' },
      { cat: 'Thermal',           n: 2, pos: 2, neg: 0, str: 0, note: '21% 개선 확인' },
      { cat: 'Battery',           n: 1, pos: 1, neg: 0, str: 0, note: '7-8h SOT 우수' },
      { cat: 'Camera_Main',       n: 4, pos: 0, neg: 2, str: 1, note: 'AI 과다, 의미 없음' },
      { cat: 'Performance',        n: 1, pos: 1, neg: 0, str: 0, note: '게이밍 안정' },
      { cat: 'Display_Brightness', n: 1, pos: 1, neg: 0, str: 0, note: '2600nit 야외 극찬' },
      { cat: 'PriceValue',         n: 1, pos: 0, neg: 0, str: 0, note: 'S25 대비 업그레이드 가치?' }
    ],
    china: [
      { cat: 'Design_Privacy',    n: 2, pos: 2, neg: 0, str: 0, note: 'Privacy 신기술 극찬' },
      { cat: 'Charging',          n: 2, pos: 2, neg: 0, str: 0, note: '60W 30분→75%' },
      { cat: 'Thermal',           n: 2, pos: 2, neg: 0, str: 0, note: '게이밍 온도 안정' },
      { cat: 'Battery',           n: 1, pos: 1, neg: 0, str: 0, note: '31h 영상 재생' },
      { cat: 'Camera_Main',       n: 3, pos: 1, neg: 1, str: 0, note: 'F1.4 개선 / AI 과도' },
      { cat: 'Performance',        n: 1, pos: 1, neg: 0, str: 0, note: 'SD8 Elite Gen5 최강' },
      { cat: 'Display_Brightness', n: 1, pos: 1, neg: 0, str: 0, note: '2600nit QHD+' },
      { cat: 'Design',            n: 1, pos: 1, neg: 0, str: 0, note: '원형 테두리 디자인' },
      { cat: 'Battery',           n: 1, pos: 0, neg: 1, str: 0, note: '5000mAh 여전' },
      { cat: 'Camera_Main',       n: 1, pos: 0, neg: 1, str: 1, note: 'AI 의존 심각' },
      { cat: 'PriceValue',         n: 2, pos: 0, neg: 0, str: 0, note: '증분 업그레이드' }
    ],
    combined: [
      { cat: 'Camera_Main', n: 8, pos: 1, neg: 4, str: 1, note: 'AI 과다, 의미 없음' },
      { cat: 'Charging', n: 4, pos: 4, neg: 0, str: 0, note: '60W 극찬' },
      { cat: 'Design_Privacy', n: 4, pos: 3, neg: 1, str: 1, note: '혁신이나 사용성 논란' },
      { cat: 'Thermal', n: 4, pos: 4, neg: 0, str: 0, note: '21% 개선 확인' },
      { cat: 'Battery', n: 3, pos: 2, neg: 1, str: 0, note: '7-8h SOT 우수' },
      { cat: 'PriceValue', n: 3, pos: 0, neg: 0, str: 0, note: 'S25 대비 업그레이드 가치?' },
      { cat: 'Performance', n: 2, pos: 2, neg: 0, str: 0, note: '게이밍 안정' },
      { cat: 'Display_Brightness', n: 2, pos: 2, neg: 0, str: 0, note: '2600nit 야외 극찬' },
      { cat: 'Design', n: 1, pos: 1, neg: 0, str: 0, note: '원형 테두리 디자인' },
    ],

    trend: [
      { period: '📦 출시 초기 (2026.03.11-04.12)', pos: 57, neg: 29, note: 'Privacy Display 신선 + 60W 충전 드디어 극찬. 카메라 AI 여전 지적.', issue: 'Privacy Display 혁신 호평 / 60W 충전 긍정 / 카메라 AI 과도 평가 / S25 대비 증분만', uid: '—', src: 'iFanr, ZOL, GSMArena, Tom\'sGuide, TechRadar' }
    ],

    specs: [
      { key: '디스플레이',    val: '6.9" Dynamic AMOLED 2X + Privacy Display', note: 'QHD+ (3120×1440), 120Hz LTPO' },
      { key: '밝기 / 색감',   val: '2600nit (최대) / 10bit 색심도', note: '' },
      { key: '혁신 기술',     val: 'Privacy Display (선각 시야 OFF)', note: '첫 모바일 하드웨어 방탈출' },
      { key: 'SoC',           val: 'Snapdragon 8 Elite Gen 5 (custom)', note: '' },
      { key: 'RAM / 저장',    val: '16GB + 256GB/512GB/1TB', note: '' },
      { key: '배터리',        val: '5000 mAh', note: '동일 (6년 미변경)' },
      { key: '유선 충전',     val: '60W (45W → 업그레이드)', note: '43분 완충' },
      { key: '무선 충전',     val: '25W (15W → 업그레이드)', note: '' },
      { key: '카메라',        val: '200MP F1.4 + 50MP + 10MP 3x + 50MP 5x (F2.9)', note: '거의 동일, F값만 개선' },
      { key: '디자인',        val: '더얇고(−0.3mm) 원형테두리', note: 'S25 대비' },
      { key: '산열',          val: '21% 개선 (베이퍼챔버 15% ↑)', note: 'TIM 재료 개선' },
      { key: '무게',          val: '약간 경량화', note: '' },
      { key: '방수',          val: 'IP68', note: '' },
      { key: 'OS',            val: 'Android 15 + OneUI 8.1', note: '' }
    ],

    displayInsights: [
      'Privacy Display는 세계 최초 모바일 하드웨어 방탈출 기술로 혁신성 높음. 정면 시야각 완벽, 측각 시야 차단 — 공공장소 개인정보 보호 실용적. 그러나 Privacy 모드 장시간 사용 시 일부 사용자 두통/눈 건조 우려 → 차세대 소프트웨어 튜닝 필요.',
      '2600nit + QHD+ 1-120Hz LTPO는 여전히 플래그십 최상위. 하지만 디스플레이만으로 차별화 한계 — Privacy Display가 메인 마케팅 이유.',
      '고주파 PWM + 기본 밝기 조절로 야간 눈피로 개선했으나, Privacy 모드 시 밝기 제약으로 오히려 눈 피로 발생 가능 — UI/UX 재고 요청.'
    ],
    productInsights: [
      '60W 충전(25W 무선)은 S24/S25 시대의 핵심 비판 드디어 해결. 이것이 S26의 가장 강력한 마케팅 포인트 — 경쟁사 대비 충전 속도 추격 완료.',
      '카메라는 F1.4 + F2.9 어퍼처 개선했으나, AI 처리 여전히 과도 → 원천적 카메라 대미지 미해결. "의미 있는 변화 없음" 글로벌 평가에 주목.',
      '21% 산열 개선 + 원형테두리 설계는 사용성 향상. S25→S26은 "진화"이나 "혁신"은 Privacy Display 뿐 — 증분 업그레이드 평가는 공정. S25 소유자는 업그레이드 필요성 낮음, 신규 구매자에게 추천.'
    ],

    formula: '<div class="fl"><strong>DSI</strong> = Display긍(67%) − Display부(33%) − (강불만×0.5) → <strong style="color:#fbbf24">+16</strong></div>\n<div class="fl"><strong>SEGI</strong> = (공식소구3×20) + 카메라부정(50%) + (기대갭15%×1.2) → <strong style="color:#34d399">68</strong></div>\n<div class="fl"><strong>BSI</strong> = 배터리긍(67%) + (충전긍100%×0.3) → <strong style="color:#34d399">+80</strong></div>\n<div class="fl"><strong>CSI</strong> = 카메라긍(13%) − 카메라부(63%) − (기대갭20%×0.5) → <strong style="color:#f87171">−8</strong></div>\n<div class="fl"><strong>TRI</strong> = 발열부정(0%) − (발열강점50%×0.5) → <strong style="color:#34d399">−12</strong></div>\n<div style="margin-top:8px;color:#475569;font-size:10px;">* n=28 (CN 14 / 글로벌 14) · 신제품(3월 11일 출시, 1개월 경) · 초기 평가 위주</div>',

    codingSample: [
      { sum: 'Privacy Display 전 세계 모바일 첫 하드웨어 방탈출 — 측각 시야 화면 OFF, 카페/지하철 개인정보 보호', sent: '긍정', cat: 'Design', int: '강', src: 'iFanr', date: '2026.03', note: 'CN VOC · 혁신기술' },
      { sum: 'Privacy Display 장시간 켜면 두통, 눈 건조 — 기능은 우수하나 실제 사용성 제한', sent: '부정', cat: 'Design', int: '강', src: 'Sohu', date: '2026.03', note: 'CN VOC' },
      { sum: '60W 유선 + 25W 무선 충전 드디어 주요 업그레이드 — S24/S25 느린 충전 비판 해결', sent: '긍정', cat: 'Charging', int: '강', src: 'Tom\'sGuide', date: '2026.03', note: 'Global VOC · 강점' },
      { sum: '43분 완충 — 야간 충전 불안 제거, 경쟁사 추격 완료', sent: '긍정', cat: 'Charging', int: '중', src: 'PhoneArena', date: '2026.03', note: 'Global VOC' },
      { sum: '21% 산열 성능 개선 + 베이퍼챔버 15% 증대 — 게이밍 온도 안정', sent: '긍정', cat: 'Thermal', int: '강', src: 'SammyFans', date: '2026.03', note: 'Global VOC' },
      { sum: 'F1.4 메인 + F2.9 5x 광학 개선 — 저조도 광량 효율 향상', sent: '긍정', cat: 'Camera_Main', int: '중', src: 'ZOL', date: '2026.03', note: 'CN VOC' },
      { sum: '공식 저조도 카메라 광고는 AI 생성 — 실제 사진은 AI 과도처리로 인공미 노출', sent: '부정', cat: 'Camera_Main', int: '강', src: 'AndroidPolice', date: '2026.03', note: 'Global VOC · 마케팅 논란' },
      { sum: '카메라 AI 여전히 과도 처리 — 야간사진 합성감 강함, 자연감 부족', sent: '부정', cat: 'Camera_Main', int: '중', src: 'PetaPixel', date: '2026.03', note: 'Global VOC' },
      { sum: '실제 카메라 체험은 S25 대비 의미 있는 변화 없음 — 광학값만 개선', sent: '부정', cat: 'Camera_Main', int: '약', src: 'DigitalCameraWorld', date: '2026.03', note: 'Global VOC' },
      { sum: 'S25 소유자에게 업그레이드 가치 낮음 — 증분만, 신규 구매자에게 추천', sent: '중립', cat: 'PriceValue', int: '중', src: 'PhoneArena', date: '2026.03', note: 'Global VOC' }
    ]
  };
