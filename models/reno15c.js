/* ============================================================
 * VOC Model Data — reno15c
 * OPPO Reno15 (Standard/Consumer variant, "c" designation)
 * Status: SPEC DATA COMPLETE | VOC DATA INSUFFICIENT (n<15)
 * Collection Period: 2026.04.15 (TBC - product very recent launch)
 * ============================================================ */
window.VOC_MODELS = window.VOC_MODELS || {};
window.VOC_MODELS['reno15c'] = {
    name: 'OPPO Reno15 (Standard)',
    brand: 'OPPO',
    segment: 'Premium Volume',
    launch: '2026.03.~04 (중국) / 2026.04~ (글로벌 예상)',
    market: '중국 포함',
    date: '2026.04.15',
    sampleN: 0,
    conclusion: '⚠️ **커뮤니티 표본 한정** — 제품 출시 직후 (1-2주) 실제 사용자 VOC 데이터 수집 단계. 현재 공식 스펙 및 초기 언론 리뷰만 검증 가능. 신뢰할 수 있는 결론 도출을 위해 최소 표본 50건, 지역분산(중국 40-60% / 글로벌 20-30%) 확보 필요. 향후 2-4주 추적 예정.',

    kpi: {
      sample: { label: '표본 상태', value: '수집중 (0건)', sub: '판정 불가', color: 'c-warn' },
      pos: { label: '수집 중', value: '—', sub: '데이터 부족', color: 'c-neu' },
      neg: { label: '수집 중', value: '—', sub: '데이터 부족', color: 'c-neu' },
      neu: { label: '수집 중', value: '—', sub: '데이터 부족', color: 'c-neu' },
      dsi: { label: '판정', value: '보류', sub: 'n<30 불가', color: 'c-warn' },
      bsi: { label: '판정', value: '보류', sub: 'n<30 불가', color: 'c-warn' },
      tri: { label: '판정', value: '보류', sub: 'n<30 불가', color: 'c-warn' }
    },

    launchTable: [
      { cat: 'Display_Brightness', claim: '1800nit 로컬 피크·조명 센서·120Hz LTPO', reality: '공식사양 검증 완료. 실제 사용자 평가 수집 중.', quant: 'n=0 (언론 리뷰 예상)', tag: 'tag-pending', label: 'pending_user_feedback' },
      { cat: 'Battery', claim: '6200mAh·80W 초고속충전', reality: '공식사양 검증 완료. 실제 운영 시간 평가 수집 중.', quant: 'n=0', tag: 'tag-pending', label: 'pending_user_feedback' },
      { cat: 'Camera_Main', claim: '200MP(f/1.8, OIS)·50MP망원·50MP초광각', reality: '공식 하드웨어 검증. 실제 사진 품질 평가 수집 중.', quant: 'n=0', tag: 'tag-pending', label: 'pending_user_feedback' },
      { cat: 'Performance', claim: 'Dimensity 8450·ColorOS 16', reality: '프로세서 공식사양 확인. 실제 성능·발열·안정성 평가 수집 중.', quant: 'n=0', tag: 'tag-pending', label: 'pending_user_feedback' },
      { cat: 'Thermal', claim: 'Nano Ice Crystal 냉각 시스템', reality: '공식 홍보 검증. 실제 사용자 발열 보고 수집 중.', quant: 'n=0', tag: 'tag-pending', label: 'pending_user_feedback' }
    ],

    global: [],
    china: [],
    combined: [],

    trend: [
      { period: '📦 출시 직후 (2026.04.15~)', pos: 0, neg: 0, note: '데이터 수집 단계 — 언론 리뷰 및 초기 사용자 의견 모니터링 중', issue: '공식 채널 데이터만 확인 가능', uid: '—', src: 'OPPO official site · Early press (TBC)' }
    ],

    specs: [
      { key: '디스플레이', val: '6.32" AMOLED (120Hz LTPO)', note: 'FHD+ 2640×1216' },
      { key: '해상도', val: 'FHD+ 2640×1216px (~460 ppi)', note: '' },
      { key: '주사율 / LTPO', val: '60–120Hz LTPO 적응형', note: '240Hz 터치 샘플링' },
      { key: '밝기', val: '1800nit 로컬 피크 (공칭)', note: '600nit 기본값' },
      { key: 'SoC', val: 'MediaTek Dimensity 8450 (4nm)', note: '8-core, 최고 3.25GHz' },
      { key: 'RAM / 저장', val: '12GB·16GB + 256GB·512GB·1TB (UFS 3.1)', note: '확장 미지원' },
      { key: '배터리', val: '6200 mAh (typic) / 6035 mAh (rated)', note: '듀얼 셀' },
      { key: '충전', val: '80W 초고속 (SUPERVOOC) + 80W UFCS', note: '' },
      { key: '카메라', val: '200MP 메인 + 50MP 망원 + 50MP 초광각 / 50MP 전면', note: '메인 1/1.56" 대형 센서, OIS' },
      { key: 'OS', val: 'ColorOS 16.0 (Android 15 기반)', note: '' },
      { key: '무게 / 두께', val: '187–188g / 7.99–8.13mm', note: '글래스 백·알루미늄 프레임' },
      { key: '방수', val: 'IP69 / IP68 / IP66', note: '또는 미확인' },
      { key: '시장 / 가격', val: '중국 + 글로벌 (예상)', note: '중국 가격: TBC' }
    ],

    displayInsights: [
      '공식 사양: 6.32" AMOLED 1.07억 색상 10.7억 색상, 1800nit 로컬 피크 방언 센서 구현. Reno15 Pro 대비 화면 재설정 (2780×1264 → 2640×1216).',
      '초기 언론 리뷰 대기 중. 야외 가시성·색감 정확도·안구 피로도 사용자 평가 필요.',
      '120Hz LTPO는 경쟁사 기준선. DisplayMate 인증 여부 미확인.'
    ],

    productInsights: [
      'Reno15c = Reno15 표준 모델. Reno15 Pro 대비 하향: 카메라 명시적 하향 없음(동일 하드웨어), 화면 해상도 소폭 감소(2780 → 2640).',
      '포지셔닝: 프리미엄 밸런스 (카메라·배터리·디스플레이 조화) → Pro 대비 가격 20-30% 낮은 포지션 예상.',
      '출시 시점: 3월 말~4월 초(중국), 글로벌 1-2개월 후 예상. 공식 가격 미공개(초기 커뮤니티 도경험).'
    ],

    sampleQuality: {
      status: 'INSUFFICIENT',
      details: '제품 출시 1-2주 기간. 신뢰도 높은 VOC = 최소 n≥50, 지역분산, 시간 분산 필요. 현재 공식 데이터·초기 리뷰 추적 단계.',
      sampleBreakdown: '중국(예상): 0건 / 글로벌(예상): 0건',
      bias_flags: ['insufficient_sample', 'early_launch_bias', 'pending_collection'],
      collection_strategy: '2주 단위 일괄 재수집 → n≥30 도달 시 중간 리포트 → n≥50 도달 시 최종 판정'
    },

    codingSample: [],

    notes: '🔔 **Status Update for VOC Dashboard**: (1) 공식 스펙데이터: ✅ 완성 (2) 사용자 VOC: ⏳ 수집 중 — 2주 경과 후 재검토 권장. (3) 초기 리뷰·커뮤니티 보도 있을 때마다 증분 수집.'
};

/* ============================================================
 * NEXT COLLECTION CHECKPOINT: 2026.04.29 목표 n≥30
 * ============================================================ */
