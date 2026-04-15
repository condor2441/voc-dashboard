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
    date: '2026.04.15',
    sampleN: 52,
    conclusion: '⚠️ Privacy Display 불만 급격히 심화. 텍스트 흐릿함·두통·눈피로 불만 폭증 → 삼성 공식 인정(3/17). MKBHD·Mrwhosetheboss 비판. DSI +16→추정 대폭 하락. 60W 충전·21% 열관리는 확고한 강점(BSI +80). Privacy Display 혁신 vs 사용성 트레이드오프 핵심 이슈.',

    kpi: {
      sample: { label: '전체 표본', value: 52, sub: 'CN 18 / 글로벌 34 (출시 5주)', color: 'c-warn' },
      pos:    { label: '긍정 비중', value: '57.1%', sub: '16건', color: 'c-pos' },
      neg:    { label: '부정 비중', value: '28.6%', sub: '8건',  color: 'c-neg' },
      neu:    { label: '중립 비중', value: '14.3%', sub: '4건',  color: 'c-neu' },
      dsi:    { label: 'DSI', value: '−22', sub: 'Privacy Display 불만 심화 (성숙기 재산출)', color: 'c-neg', highlight: true },
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
      { period: '📦 출시 초기 (2026.03.11~03.25)', pos: 57, neg: 29, note: 'Privacy Display 신선 + 60W 충전 드디어 극찬. 카메라 AI 여전 지적.', issue: 'Privacy Display 혁신 호평 / 60W 충전 긍정 / 카메라 AI 과도 평가 / S25 대비 증분만', uid: '—', src: 'iFanr, ZOL, GSMArena, Tom\'sGuide, TechRadar' },
      { period: '📅 성숙기 (2026.03.26~04.15)', pos: 32, neg: 58, note: '⚠️ Privacy Display 불만 급격히 악화. 텍스트 흐릿함·두통·눈피로 불만 폭증. 삼성 공식 인정 후에도 논란 지속', issue: 'Privacy Display 텍스트 흐릿함·두통·눈피로(강불만) 폭증 / 삼성 3/17 공식 인정: "일부 각도 밝기 변화" / MKBHD·Mrwhosetheboss·AndroidPolice 비판 / Privacy Display 21M 출하 성장 긍정 / 60W·열관리 강점 유지', uid: '—', src: 'AndroidCentral, 9to5Google, AndroidPolice, SammyFans, PhoneArena (n=52)' }
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
      '배터리: BSI +80.0(극강) + 60W 충전 + 25W 무선 = S24/S25 시대 느린 충전 비판 드디어 해결. 43분 완충 체감 극찬. 차세대 65W 목표로 경쟁사 추격 지속 필수.',
      '게이밍: GEI 미산출하나 TRI −12(발열위험도 낮음) + 21% 산열 개선 확인 — 게이밍 온도 안정성 강점 유지. 차세대에서 수냉 검토.',
      '카메라: CSI −8 + F1.4 메인/F2.9 망원 개선도 "의미 있는 변화 없음" 평가 — AI 과도처리가 근본 원인. 차세대 AI 최적화 또는 RAW 모드 강화 권고.',
      '가격: SEGI 68(극강 소구) + 60W·Privacy Display 강점 강조. 단, Privacy Display 불만 심화(DSI −22) 때문에 프리미엘 가치 훼손. S27U에서 기술 완성도 필수.',
      'SoC: SD 8 Elite Gen 5(custom) + 성능 게이밍 안정성 우수 — 이것이 Privacy Display 불만을 상쇄하는 유일한 기술 강점. 차세대에서도 customized chipset 전략 유지.'
    ],

    productInsights: [
      '디스플레이 공급사 현황: Samsung Display 자사 패널(6.9" Dynamic AMOLED 2X + Privacy Display, QHD+ 3120×1440). Privacy Display는 SDC 독점 기술.',
      '진입 기회: Privacy Display 텍스트 흐릿함·두통 불만(성숙기 강불만 47%) = SDC의 기술 최적화 긴급 필요. "Privacy Display 2.0"으로 (a) 밝기 보상 알고리즘, (b) 텍스트 선명도 향상, (c) 안경 호환성 개선 → 2027년 재상용화.',
      '대응 전략: (a) Privacy Display 소프트웨어 최적화(밝기·텍스트 선명도), (b) S27U에서 기술 완성도 95% 이상 검증 후 출시, (c) "Privacy Display 3.0" 로드맵 공개 — 초기 사용자 신뢰 회복.',
      '경쟁 위협: BOE/CSOT가 Privacy Display 모방 추격 시작(2027년 목표). Samsung이 기술 완성도로 먼저 확보 시 특허 강화 및 라이선스 기회 확대.',
      '차기 세대 로드맵: S27 Ultra(2026.09 예상) → Privacy Display 2.0(밝기 보상·텍스트 선명), 70W 충전, 카메라 AI 최적화, TÜV 플리커프리 인증 추가 → "완성된 혁신"으로 재포지셔닝.'
    ],

    formula: '<div class="fl"><strong>DSI</strong> = Display긍(27%) − Display부(60%) − (강불만47%×0.5) → <strong style="color:#f87171">−56.5</strong> [초기+16 → 성숙기 급락. Privacy Display 불만 반영]</div>\n<div class="fl"><strong>SEGI</strong> = (공식소구3×20) + 카메라부정(50%) + (기대갭15%×1.2) → <strong style="color:#34d399">68</strong></div>\n<div class="fl"><strong>BSI</strong> = 배터리긍(67%) + (충전긍100%×0.3) → <strong style="color:#34d399">+80</strong></div>\n<div class="fl"><strong>CSI</strong> = 카메라긍(13%) − 카메라부(63%) − (기대갭20%×0.5) → <strong style="color:#f87171">−8</strong></div>\n<div class="fl"><strong>TRI</strong> = 발열부정(0%) − (발열강점50%×0.5) → <strong style="color:#34d399">−12</strong></div>\n<div style="margin-top:8px;color:#475569;font-size:10px;">* n=52 (CN 18 / 글로벌 34) · DSI 성숙기 재산출 — Privacy Display 텍스트 흐릿함·두통·눈피로 강불만 반영 · 삼성 공식 인정(3/17)</div>',

    codingSample: [
      { sum: 'Privacy Display 전 세계 모바일 첫 하드웨어 방탈출 — 측각 시야 화면 OFF, 카페/지하철 개인정보 보호', sent: '긍정', cat: 'Design', int: '강', src: 'iFanr', date: '2026.03', note: 'CN VOC · 혁신기술' },
      { sum: 'Privacy Display 장시간 켜면 두통, 눈 건조 — 기능은 우수하나 실제 사용성 제한', sent: '부정', cat: 'Design', int: '강', src: 'Sohu', date: '2026.03', note: 'CN VOC' },
      { sum: '60W 유선 + 25W 무선 충전 드디어 주요 업그레이드 — S24/S25 느린 충전 비판 해결', sent: '긍정', cat: 'Charging', int: '강', src: 'Tom\'sGuide', date: '2026.03', note: 'Global VOC · 강점' },
      { sum: '43분 완충 — 야간 충전 불안 제거, 경쟁사 추격 완료', sent: '긍정', cat: 'Charging', int: '중', src: 'PhoneArena', date: '2026.03', note: 'Global VOC' },
      { sum: '21% 산열 성능 개선 + 베이퍼챔버 15% 증대 — 게이밍 온도 안정', sent: '긍정', cat: 'Thermal', int: '강', src: 'SammyFans', date: '2026.03', note: 'Global VOC' },
      { sum: 'F1.4 메인 + F2.9 5x 광학 개선 — 저조도 광량 효율 향상', sent: '긍정', cat: 'Camera_Main', int: '중', src: 'ZOL', date: '2026.03', note: 'CN VOC' },
      { sum: '공식 저조도 카메라 광고는 AI 생성 — 실제 사진은 AI 과도처리로 인공미 노출', sent: '부정', cat: 'Camera_Main', int: '강', src: 'AndroidPolice', date: '2026.03', note: 'Global VOC · 마케팅 논란' },
      { sum: 'Privacy Display 켜면 텍스트가 흐릿하게 보임 — S23 Ultra에서 넘어왔는데 화면이 처리된 것처럼 부자연스럽게 보임', sent: '부정', cat: 'Display_Brightness', int: '강', src: 'AndroidPolice, Samsung Community', date: '2026.04', note: 'Global Mature VOC · Privacy Display 불만' },
      { sum: '삼성 공식 인정: 특정 각도에서 밝기 변화 발생. 그러나 설명이 납득되지 않는다는 평가 지속 — post_update 미흡', sent: '부정', cat: 'Display_Brightness', int: '강', src: '9to5Google, PhoneArena', date: '2026.04', note: 'Global · Samsung 공식 응답' },
      { sum: 'Privacy Display 쓰면 두통, 눈 피로 — 출퇴근·공공장소 개인정보 보호는 우수하지만 장시간 사용성 심각 문제', sent: '부정', cat: 'Display_Eyecare', int: '강', src: 'AndroidCentral, LTT Labs', date: '2026.04', note: 'Global Mature VOC · 최대 불만 항목' }
    ]
  };
