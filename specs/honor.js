/* ============================================================
 * Spec Data — Honor
 * isRumor: true → 미출시/루머 플래그
 * ============================================================ */
window.SPEC_DATA = window.SPEC_DATA || {};
window.SPEC_DATA['honor'] = {
  brand: 'Honor',
  models: [
    {
      key: 'magic7pro',
      model: 'Honor Magic 7 Pro',
      launch: '2024.10 (중국) / 2025.02 (글로벌)',
      isRumor: false,
      market: '글로벌 + 중국',
      segment: 'Imaging Flagship',
      display: {
        size: '6.8"',
        panelSupplier: 'BOE (예상)',
        panelType: 'LTPO OLED',
        resolution: '2800×1260 (QHD+)',
        ppi: '~453',
        hzRange: '1–120Hz',
        brightness: '5000nit (피크)',
        pwm: '4320Hz PWM',
        hdr: 'HDR10+ / Dolby Vision',
        notes: 'Eye Comfort 인증 · HALO Ring Lighting'
      },
      soc: 'Snapdragon 8 Elite (3nm)',
      ram: '12GB / 16GB',
      storage: '256GB / 512GB',
      battery: '5270mAh',
      charging: { wired: '100W', wireless: '80W' },
      camera: {
        main: '50MP f/1.6 (1/1.3")',
        tele: '200MP 3x 잠망경',
        uw: '50MP 초광각'
      },
      weight: '약 225g',
      waterproof: 'IP68',
      os: 'MagicOS 9 / Android 15',
      notes: 'HALO Ring 알림 LED · 위성통신 지원 (중국)'
    },
    {
      key: 'magic7rsr',
      model: 'Honor Magic 7 RSR Porsche Design',
      launch: '2024.11 (중국)',
      isRumor: false,
      market: '중국',
      segment: 'Imaging Flagship',
      display: {
        size: '6.8"',
        panelSupplier: 'BOE',
        panelType: 'LTPO OLED',
        resolution: '2800×1260 (QHD+)',
        ppi: '~453',
        hzRange: '1–120Hz',
        brightness: '5000nit',
        pwm: '4320Hz PWM',
        hdr: 'HDR10+ / Dolby Vision',
        notes: 'Porsche Design 협업 · 가죽 후면'
      },
      soc: 'Snapdragon 8 Elite (3nm)',
      ram: '16GB',
      storage: '1TB',
      battery: '5270mAh',
      charging: { wired: '100W', wireless: '80W' },
      camera: {
        main: '50MP f/1.6 Porsche Design',
        tele: '200MP 3x',
        uw: '50MP'
      },
      weight: '약 228g',
      waterproof: 'IP68',
      os: 'MagicOS 9 / Android 15',
      notes: 'Porsche Design 한정 · 럭셔리 에디션'
    },
    {
      key: 'magic8pro',
      model: 'Honor Magic 8 Pro',
      launch: '2025 Q4 예상',
      isRumor: true,
      market: '글로벌 + 중국',
      segment: 'Imaging Flagship',
      display: {
        size: '~6.8"',
        panelSupplier: 'BOE (예상)',
        panelType: 'LTPO OLED (예상)',
        resolution: 'QHD+ (예상)',
        ppi: '—',
        hzRange: '1–120Hz',
        brightness: '5000nit+ (예상)',
        pwm: '4320Hz+ PWM (예상)',
        hdr: 'HDR10+ / Dolby Vision',
        notes: '루머 기반 · Magic 7 Pro 후속'
      },
      soc: 'Snapdragon 8 Elite Gen5 또는 Gen6 (예상)',
      ram: '16GB (예상)',
      storage: '256GB / 512GB / 1TB',
      battery: '~5500mAh (예상)',
      charging: { wired: '100W+ (예상)', wireless: '80W' },
      camera: {
        main: '50MP (예상)',
        tele: '200MP+ (예상)',
        uw: '50MP'
      },
      weight: '—',
      waterproof: 'IP68 (예상)',
      os: 'MagicOS 10 / Android 16 (예상)',
      notes: '루머 기반 · 미확인 스펙 다수'
    },
    {
      key: 'magicvflip',
      model: 'Honor Magic V Flip',
      launch: '2024.07 (중국) / 2024.08 (글로벌)',
      isRumor: false,
      market: '글로벌 + 중국',
      segment: 'Compact Foldable',
      display: {
        size: '메인 6.78" / 커버 4.0"',
        panelSupplier: '—',
        panelType: 'LTPO AMOLED / AMOLED',
        resolution: '메인 2790×1188 / 커버 1060×1060',
        ppi: '—',
        hzRange: '1–120Hz / 60Hz',
        brightness: '4000nit (메인)',
        pwm: '—',
        hdr: 'HDR10+',
        notes: '플립 폴더블 · 커버 정사각형 4.0"'
      },
      soc: 'Snapdragon 8 Gen 3',
      ram: '12GB',
      storage: '256GB / 512GB',
      battery: '4400mAh',
      charging: { wired: '66W', wireless: '50W' },
      camera: {
        main: '50MP f/1.9 (OIS)',
        tele: '—',
        uw: '50MP f/2.0'
      },
      weight: '약 195g',
      waterproof: 'IPX8',
      os: 'MagicOS 8.3 / Android 14',
      notes: '플립 세그먼트 · 커버 정사각형 독특한 설계'
    },
    {
      key: 'magicvflip2',
      model: 'Honor Magic V Flip 2',
      launch: '2025 Q3 예상',
      isRumor: true,
      market: '글로벌 + 중국',
      segment: 'Compact Foldable',
      display: {
        size: '메인 ~6.9" / 커버 ~4.1"',
        panelSupplier: '—',
        panelType: 'LTPO AMOLED (예상)',
        resolution: '메인 FHD+ (예상)',
        ppi: '—',
        hzRange: '1–120Hz',
        brightness: '—',
        pwm: '—',
        hdr: 'HDR10+',
        notes: '루머 기반 · 커버 확대 예상'
      },
      soc: 'Snapdragon 8 Elite (예상)',
      ram: '12GB (예상)',
      storage: '256GB / 512GB',
      battery: '~4500mAh (예상)',
      charging: { wired: '66W (예상)', wireless: '50W' },
      camera: { main: '50MP', tele: '—', uw: '50MP' },
      weight: '—',
      waterproof: 'IPX8 (예상)',
      os: 'MagicOS 9 / Android 15 (예상)',
      notes: '루머 기반 · 미확인 스펙 다수'
    }
  ]
};
