/* ============================================================
 * Spec Data — OPPO (OPPO · OnePlus · realme)
 * isRumor: true → 미출시/루머 플래그
 * ============================================================ */
window.SPEC_DATA = window.SPEC_DATA || {};
window.SPEC_DATA['oppo'] = {
  brand: 'OPPO',
  models: [
    {
      key: 'findx9pro',
      model: 'OPPO Find X9 Pro',
      launch: '2026.02 (글로벌) / 2025.12 (중국)',
      isRumor: false,
      market: '글로벌 + 중국',
      segment: 'Imaging Flagship',
      display: {
        size: '6.78"',
        panelSupplier: 'BOE',
        panelType: 'LTPO AMOLED',
        resolution: '2780×1264 (1.5K)',
        ppi: '~410',
        hzRange: '1–120Hz',
        brightness: '3600nit',
        pwm: '2160Hz PWM + DC',
        hdr: 'HDR10+ / Dolby Vision',
        notes: '극박형 1.15mm 베젤 · Hasselblad 협력 종료'
      },
      soc: 'MediaTek Dimensity 9500 (3nm)',
      ram: '16GB LPDDR5X',
      storage: '256GB / 512GB / 1TB',
      battery: '7500mAh',
      charging: { wired: '80W', wireless: '50W' },
      camera: {
        main: '50MP (1/1.3") f/1.8',
        tele: '200MP Hasselblad 3x',
        uw: '50MP 초광각'
      },
      weight: '약 218g',
      waterproof: 'IP68',
      os: 'ColorOS 16 / Android 16',
      notes: '5년 OS · 6년 보안 · 59개 프리설치 앱 지적'
    },
    {
      key: 'findx9ultra',
      model: 'OPPO Find X9 Ultra',
      launch: '2026.01 (중국)',
      isRumor: false,
      market: '중국 (China-only)',
      segment: 'Imaging Flagship',
      display: {
        size: '6.82"',
        panelSupplier: 'BOE',
        panelType: 'LTPO AMOLED',
        resolution: '2780×1264 (1.5K)',
        ppi: '~444',
        hzRange: '1–120Hz',
        brightness: '3600nit+',
        pwm: '2160Hz PWM + DC',
        hdr: 'HDR10+ / Dolby Vision',
        notes: 'Ultra = 중국 독점 · 4중 카메라'
      },
      soc: 'Snapdragon 8 Elite Gen5 (예상)',
      ram: '16GB',
      storage: '512GB / 1TB',
      battery: '6500mAh',
      charging: { wired: '100W', wireless: '50W' },
      camera: {
        main: '50MP 1인치 센서',
        tele: '200MP + 50MP 이중 망원',
        uw: '50MP 초광각'
      },
      weight: '—',
      waterproof: 'IP68',
      os: 'ColorOS 16 / Android 16',
      notes: '중국 전용 초울트라 플래그십'
    },
    {
      key: 'reno15pro',
      model: 'OPPO Reno 15 Pro',
      launch: '2026.01 (중국) / 2026.03 (글로벌)',
      isRumor: false,
      market: '글로벌 + 중국',
      segment: 'Premium Volume',
      display: {
        size: '6.78"',
        panelSupplier: '—',
        panelType: 'LTPO AMOLED',
        resolution: '2780×1264 (~450ppi)',
        ppi: '~450',
        hzRange: '60–120Hz',
        brightness: '3600nit (공칭) / 1800nit (실측)',
        pwm: '—',
        hdr: 'HDR10+',
        notes: '공칭 3600nit vs 실측 1800nit 괴리'
      },
      soc: 'MediaTek Dimensity 8450 (4nm)',
      ram: '12GB / 16GB',
      storage: '256GB / 512GB / 1TB',
      battery: '6500mAh',
      charging: { wired: '80W', wireless: '50W' },
      camera: {
        main: '200MP (1/1.56" HP5) f/1.9',
        tele: '50MP 3.5x 잠망경',
        uw: '50MP 초광각 118°'
      },
      weight: '약 218g',
      waterproof: 'IP68 / IP69',
      os: 'ColorOS 16 / Android 15',
      notes: '미들급 SoC · UFS 3.1 경쟁사 대비 열위'
    },
    {
      key: 'oppok15pro',
      model: 'OPPO K15 Pro',
      launch: '2026.04.03 (중국)',
      isRumor: false,
      market: '중국 (China-only)',
      segment: 'Gaming-centric',
      display: {
        size: '6.59"',
        panelSupplier: '—',
        panelType: 'AMOLED',
        resolution: '2760×1256 (1.5K)',
        ppi: '~460',
        hzRange: '144Hz',
        brightness: '2000nit+',
        pwm: '—',
        hdr: '—',
        notes: '게이밍 최적화 · 능동형 냉각팬'
      },
      soc: 'MediaTek Dimensity 8500 Super',
      ram: '12GB',
      storage: '256GB / 512GB',
      battery: '7500mAh',
      charging: { wired: '80W', wireless: '—' },
      camera: {
        main: '50MP f/1.8 (OIS)',
        tele: '—',
        uw: '8MP 초광각'
      },
      weight: '약 193g',
      waterproof: 'IP69',
      os: 'ColorOS 16 / Android 15',
      notes: '냉각팬 탑재 · 게이밍 특화 가성비'
    },
    {
      key: 'op15',
      model: 'OnePlus 15',
      launch: '2025.10 (중국) / 2026.01 (글로벌)',
      isRumor: false,
      market: '글로벌 + 중국',
      segment: 'Imaging Flagship',
      display: {
        size: '6.82"',
        panelSupplier: 'BOE',
        panelType: 'BOE T10 LTPO',
        resolution: '2780×1264 (1.5K)',
        ppi: '444',
        hzRange: '1–165Hz',
        brightness: '4500nit',
        pwm: '2160Hz PWM + DC',
        hdr: 'HDR10+ / Dolby Vision',
        notes: '세계 첫 165Hz LTPO · TÜV 明眸护眼 5.0 · 최저 0.5nit'
      },
      soc: 'Snapdragon 8 Elite (3nm)',
      ram: '12GB / 16GB / 24GB',
      storage: '256GB / 512GB / 1TB',
      battery: '7300mAh',
      charging: { wired: '120W', wireless: '50W' },
      camera: {
        main: '50MP Sony IMX906 (1/1.56") f/1.8',
        tele: '50MP 3.5x 잠망경',
        uw: '50MP 초광각'
      },
      weight: '210g',
      waterproof: 'IP69',
      os: 'OxygenOS 15 (글로벌) / ColorOS 16 (중국)',
      notes: '165Hz LTPO 세계 최초 · 7300mAh · Hasselblad 협력 종료'
    },
    {
      key: 'realmegt7pro',
      model: 'realme GT 7 Pro',
      launch: '2024.11 (중국) / 2025.02 (글로벌)',
      isRumor: false,
      market: '글로벌 + 중국',
      segment: 'Performance Gaming',
      display: {
        size: '6.78"',
        panelSupplier: 'SDC (예상)',
        panelType: 'LTPO AMOLED',
        resolution: '2780×1264',
        ppi: '~450',
        hzRange: '60–120Hz',
        brightness: '6000nit (피크)',
        pwm: '3840Hz PWM',
        hdr: 'HDR10+',
        notes: '6000nit 피크 · Eco² 기술'
      },
      soc: 'Snapdragon 8 Elite (3nm)',
      ram: '12GB / 16GB',
      storage: '256GB / 512GB',
      battery: '6500mAh',
      charging: { wired: '120W', wireless: '50W' },
      camera: {
        main: '50MP f/1.8 (OIS)',
        tele: '50MP f/2.6 3x 잠망경',
        uw: '8MP f/2.2'
      },
      weight: '약 210g',
      waterproof: 'IP68 / IP69 (2m, 30분)',
      os: 'Realme UI 6 / Android 15',
      notes: '가성비 플래그십 · 8500mm² 증기실'
    },
    {
      key: 'realmegt8pro',
      model: 'realme GT 8 Pro',
      launch: '2026.01 (중국)',
      isRumor: false,
      market: '중국 (China-only)',
      segment: 'Performance Gaming',
      display: {
        size: '6.79"',
        panelSupplier: '—',
        panelType: 'LTPO OLED 2K',
        resolution: '1440×3136 (2K)',
        ppi: '508',
        hzRange: '1–144Hz',
        brightness: '7000nit (피크) / 2000nit (전역)',
        pwm: 'DC 디밍 (전광 지원)',
        hdr: 'HDR10+',
        notes: '7000nit 피크 업계 최고 · Active Use 20:24h'
      },
      soc: 'Snapdragon 8 Elite Gen5 (3nm)',
      ram: '16GB',
      storage: '512GB / 1TB',
      battery: '7000mAh (Titan)',
      charging: { wired: '120W', wireless: '50W' },
      camera: {
        main: '50MP (Ricoh GR 협업)',
        tele: '200MP 3x 잠망경',
        uw: '50MP 초광각 116°'
      },
      weight: '214g',
      waterproof: '—',
      os: 'Realme UI 6 / Android 15',
      notes: '7000nit 업계 최고 피크 · Ricoh GR 협업'
    }
  ]
};
