/* ============================================================
 * Spec Data — Huawei
 * isRumor: true → 미출시/루머 플래그
 * 주의: Huawei 스펙은 공식 채널 접근 제한으로 확인도 낮음
 * ============================================================ */
window.SPEC_DATA = window.SPEC_DATA || {};
window.SPEC_DATA['huawei'] = {
  brand: 'Huawei',
  models: [
    {
      key: 'mate70pro',
      model: 'Huawei Mate 70 Pro',
      launch: '2024.11.26 (중국)',
      isRumor: false,
      market: '중국 (China-only)',
      segment: 'Imaging Flagship',
      display: {
        size: '6.8"',
        panelSupplier: 'BOE (예상)',
        panelType: 'LTPO OLED',
        resolution: '2800×1260 (QHD+)',
        ppi: '~450',
        hzRange: '1–120Hz',
        brightness: '2500nit (공칭)',
        pwm: 'DC 디밍 + PWM',
        hdr: 'HDR10+',
        notes: '위성통신 지원 · 미국 제재 환경'
      },
      soc: 'Kirin 9020 (7nm, SMIC)',
      ram: '12GB',
      storage: '256GB / 512GB / 1TB',
      battery: '5600mAh',
      charging: { wired: '66W', wireless: '50W' },
      camera: {
        main: '50MP f/1.4 (Leica)',
        tele: '20MP 3x + 30MP 10x',
        uw: '40MP 초광각'
      },
      weight: '약 224g',
      waterproof: 'IP68',
      os: 'HarmonyOS 4',
      notes: 'Kirin 7nm · SMIC 생산 · Leica 협업 유지'
    },
    {
      key: 'pura90ultra',
      model: 'Huawei Pura 90 Ultra',
      launch: '2026 Q2 예상',
      isRumor: true,
      market: '중국 (China-only)',
      segment: 'Imaging Flagship',
      display: {
        size: '~6.8"',
        panelSupplier: 'BOE (예상)',
        panelType: 'LTPO OLED (예상)',
        resolution: 'QHD+ (예상)',
        ppi: '—',
        hzRange: '1–120Hz',
        brightness: '~3000nit (예상)',
        pwm: 'DC 디밍 (예상)',
        hdr: 'HDR10+',
        notes: '루머 기반 · Pura 80 후속 예상'
      },
      soc: 'Kirin 9100 또는 9200 (7nm, SMIC, 예상)',
      ram: '16GB (예상)',
      storage: '256GB / 512GB / 1TB',
      battery: '~5500mAh (예상)',
      charging: { wired: '66W (예상)', wireless: '50W' },
      camera: {
        main: '50MP Leica (예상)',
        tele: '다중 줌 Leica',
        uw: '50MP'
      },
      weight: '—',
      waterproof: 'IP68 (예상)',
      os: 'HarmonyOS 5 (예상)',
      notes: '루머 기반 · 미국 제재로 첨단 SoC 부재 · Leica 협업'
    },
    {
      key: 'pura80ultra',
      model: 'Huawei Pura 80 Ultra',
      launch: '2025.04 (중국)',
      isRumor: false,
      market: '중국 (China-only)',
      segment: 'Imaging Flagship',
      display: {
        size: '6.8"',
        panelSupplier: 'BOE (예상)',
        panelType: 'LTPO OLED',
        resolution: '2844×1260',
        ppi: '~460',
        hzRange: '1–120Hz',
        brightness: '2500nit+',
        pwm: 'DC 디밍',
        hdr: 'HDR10+',
        notes: 'Pura 시리즈 플래그십'
      },
      soc: 'Kirin 9020C (7nm, SMIC)',
      ram: '16GB',
      storage: '512GB / 1TB',
      battery: '5500mAh',
      charging: { wired: '66W', wireless: '50W' },
      camera: {
        main: '50MP Leica f/1.4',
        tele: '20MP 3x + 30MP 10x Leica',
        uw: '40MP'
      },
      weight: '약 220g',
      waterproof: 'IP68',
      os: 'HarmonyOS 4.5',
      notes: 'Leica 트리플 줌 · 미국 제재 환경 한계'
    }
  ]
};
