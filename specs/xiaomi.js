/* ============================================================
 * Spec Data — Xiaomi (Xiaomi · Redmi)
 * isRumor: true → 미출시/루머 플래그
 * ============================================================ */
window.SPEC_DATA = window.SPEC_DATA || {};
window.SPEC_DATA['xiaomi'] = {
  brand: 'Xiaomi',
  models: [
    {
      key: 'xiaomi17',
      model: 'Xiaomi 17',
      launch: '2025.09.25 (중국) / 2025.11 (글로벌)',
      isRumor: false,
      market: '글로벌 + 중국',
      segment: 'Imaging Flagship',
      display: {
        size: '6.3"',
        panelSupplier: 'SDC (예상)',
        panelType: 'LTPO OLED',
        resolution: '1220×2620 (1.5K)',
        ppi: '440',
        hzRange: '1–120Hz',
        brightness: '3500nit',
        pwm: '2160Hz PWM + DC',
        hdr: 'HDR10+ / Dolby Vision',
        notes: '컴팩트 플래그십 · Leica 튜닝'
      },
      soc: 'Snapdragon 8 Elite Gen5 (3nm)',
      ram: '12GB',
      storage: '256GB / 512GB',
      battery: '7000mAh (중국) / 6330mAh (글로벌)',
      charging: { wired: '100W', wireless: '50W' },
      camera: {
        main: '50MP Light Hunter 950 (Leica)',
        tele: '50MP 3.5x 잠망경',
        uw: '50MP 초광각'
      },
      weight: '약 193g',
      waterproof: 'IP68 (2m, 30분)',
      os: 'HyperOS 3 / Android 15',
      notes: 'Leica 광학 · 3중 50MP · 컴팩트'
    },
    {
      key: 'xiaomi17ultra',
      model: 'Xiaomi 17 Ultra',
      launch: '2025.09.25 (중국)',
      isRumor: false,
      market: '중국 + 글로벌 일부',
      segment: 'Imaging Flagship',
      display: {
        size: '6.9"',
        panelSupplier: 'SDC (M10)',
        panelType: 'M10 LTPO OLED',
        resolution: '2608×1200 (1.5K)',
        ppi: '442',
        hzRange: '1–120Hz',
        brightness: '3500nit',
        pwm: '2160Hz PWM + DC 전환',
        hdr: 'HDR10+ / Dolby Vision',
        notes: '수동 DC 전환 · 최저 1nit · 기계식 줌 링'
      },
      soc: 'Snapdragon 8 Elite Gen5 (3nm)',
      ram: '12GB / 16GB',
      storage: '512GB / 1TB',
      battery: '6800mAh',
      charging: { wired: '90W', wireless: '50W', reverse: '20W' },
      camera: {
        main: '50MP 1인치 (f/1.67) · 기계식 줌 링',
        tele: '200MP 잠망경 줌',
        uw: '50MP 초광각'
      },
      weight: '221g',
      waterproof: 'IP69K',
      os: 'HyperOS 3 / Android 16',
      notes: '기계식 조리개 세계 최초 · 울트라 최경량'
    },
    {
      key: 'redmiturbo5',
      model: 'Redmi Turbo 5',
      launch: '2026.01 (중국)',
      isRumor: false,
      market: '중국 (China-only)',
      segment: 'Value-centric',
      display: {
        size: '6.67"',
        panelSupplier: 'SDC (예상)',
        panelType: 'LTPO AMOLED',
        resolution: '1440×3200 (1.5K)',
        ppi: '460',
        hzRange: '1–120Hz',
        brightness: '3500nit',
        pwm: 'DC + 3840Hz PWM',
        hdr: 'HDR10+',
        notes: 'TÜV 3중 인증 · 1nit 최저'
      },
      soc: 'MediaTek Dimensity 9300 Ultra',
      ram: '12GB / 16GB',
      storage: '256GB / 512GB',
      battery: '7560mAh',
      charging: { wired: '100W', wireless: '50W' },
      camera: {
        main: '50MP IMX882 f/1.6',
        tele: '—',
        uw: '8MP 초광각'
      },
      weight: '약 217g',
      waterproof: 'IP68 (1.5m, 30분)',
      os: 'HyperOS 3 / Android 15',
      notes: '가성비 플래그십 · 7560mAh 초대용량'
    }
  ]
};
