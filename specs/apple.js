/* ============================================================
 * Spec Data — Apple
 * isRumor: true → 미출시/루머 플래그
 * ============================================================ */
window.SPEC_DATA = window.SPEC_DATA || {};
window.SPEC_DATA['apple'] = {
  brand: 'Apple',
  models: [
    {
      key: 'ip17pro',
      model: 'iPhone 17 Pro',
      launch: '2025.09.19',
      isRumor: false,
      market: '글로벌',
      segment: 'Imaging Flagship',
      display: {
        size: '6.3"',
        panelSupplier: 'SDC',
        panelType: 'M14 LTPO',
        resolution: '2622×1206',
        ppi: '460',
        hzRange: '1–120Hz (ProMotion)',
        brightness: '3000nit',
        pwm: '저주파 PWM',
        hdr: 'HDR10+ / Dolby Vision',
        notes: '항반사 코팅 강화 · 최저 1nit'
      },
      soc: 'Apple A19 Pro (4nm)',
      ram: '8GB',
      storage: '256GB / 512GB / 1TB',
      battery: '~3500mAh',
      charging: { wired: '40W', wireless: '25W (MagSafe)' },
      camera: { main: '48MP f/1.8', tele: '12MP 5x f/2.8', uw: '12MP f/2.2' },
      weight: '약 201g',
      waterproof: 'IP69 (6m, 30분)',
      os: 'iOS 19',
      notes: 'Super Retina XDR · Action Button · USB-C'
    },
    {
      key: 'ip17promax',
      model: 'iPhone 17 Pro Max',
      launch: '2025.09.19',
      isRumor: false,
      market: '글로벌',
      segment: 'Imaging Flagship',
      display: {
        size: '6.9"',
        panelSupplier: 'SDC',
        panelType: 'M14 LTPO',
        resolution: '2868×1320',
        ppi: '460',
        hzRange: '1–120Hz (ProMotion)',
        brightness: '3000nit',
        pwm: '저주파 PWM',
        hdr: 'HDR10+ / Dolby Vision',
        notes: '항반사 코팅 강화'
      },
      soc: 'Apple A19 Pro (4nm)',
      ram: '8GB',
      storage: '256GB / 512GB / 1TB',
      battery: '~4500mAh',
      charging: { wired: '40W', wireless: '25W (MagSafe)' },
      camera: { main: '48MP f/1.8', tele: '12MP 5x f/2.8', uw: '12MP f/2.2' },
      weight: '약 227g',
      waterproof: 'IP69 (6m, 30분)',
      os: 'iOS 19',
      notes: '대형 플래그십 · Titanium 프레임'
    },
    {
      key: 'ip18pro',
      model: 'iPhone 18 Pro',
      launch: '2026 Q3 예상 (9월)',
      isRumor: true,
      market: '글로벌',
      segment: 'Imaging Flagship',
      display: {
        size: '~6.3"',
        panelSupplier: 'SDC',
        panelType: 'M16 LTPO (예상)',
        resolution: '2622×1206 이상 (예상)',
        ppi: '460+ (예상)',
        hzRange: '1–120Hz (ProMotion)',
        brightness: '3000nit+ (예상)',
        pwm: '고주파 PWM (예상)',
        hdr: 'HDR10+ / Dolby Vision',
        notes: '주름없는 디자인 개선 예상'
      },
      soc: 'Apple A20 Pro (3nm 이하, 예상)',
      ram: '12GB (예상)',
      storage: '256GB / 512GB / 1TB',
      battery: '~3800mAh (예상)',
      charging: { wired: '40W+ (예상)', wireless: '25W MagSafe' },
      camera: { main: '48MP+ (예상)', tele: '12MP 5x', uw: '12MP' },
      weight: '—',
      waterproof: 'IP69 (예상)',
      os: 'iOS 20 (예상)',
      notes: '루머 기반 · 폼팩터 개선 예상'
    },
    {
      key: 'ip18air',
      model: 'iPhone 18 Air',
      launch: '2026 Q3 예상 (9월)',
      isRumor: true,
      market: '글로벌',
      segment: 'Premium Volume',
      display: {
        size: '~6.6"',
        panelSupplier: 'SDC 또는 LGD (예상)',
        panelType: 'LTPO (예상)',
        resolution: 'FHD+ (예상)',
        ppi: '—',
        hzRange: '60–120Hz (예상)',
        brightness: '2000nit+ (예상)',
        pwm: '—',
        hdr: 'HDR10+',
        notes: '초박형 ~5.9mm 바디 예상'
      },
      soc: 'Apple A20 (예상)',
      ram: '8GB (예상)',
      storage: '128GB / 256GB',
      battery: '~3200mAh (예상, 박형 제약)',
      charging: { wired: '25W (예상)', wireless: '25W MagSafe' },
      camera: { main: '48MP (예상)', tele: '—', uw: '12MP (예상)' },
      weight: '~155g (예상, 초경량)',
      waterproof: 'IP68 (예상)',
      os: 'iOS 20 (예상)',
      notes: '루머 기반 · Air = iPhone 16e 후속 초박형 라인'
    }
  ]
};
