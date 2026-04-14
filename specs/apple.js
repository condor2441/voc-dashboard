/* ============================================================
 * Product Specs — Apple
 * ============================================================ */
window.PRODUCT_SPECS = window.PRODUCT_SPECS || {};
window.PRODUCT_SPECS['apple'] = {
  brand: 'Apple',
  label: 'Apple',
  models: [
    {
      name: 'iPhone 17 Pro Max',
      launch: '2025.09.19',
      launchFlag: 'released',
      display: {
        size: '6.9"',
        resolution: '2868×1320',
        refresh: '1–120Hz ProMotion',
        supplier: 'SDC / LGD',
        panelType: 'Super Retina XDR OLED',
        maxBrightness: '3,000 nit (peak)',
        generation: 'M13 (iPhone 17 전용 튜닝)',
        ltpo: 'Yes',
        ppi: 460,
        hdr: 'Dolby Vision / HDR10'
      },
      soc: 'Apple A19 Pro (3nm N3P)',
      ram: '12 GB LPDDR5X',
      storage: '256GB / 512GB / 1TB / 2TB',
      battery: { capacity: '약 4,823 mAh', chargeWired: '40W', chargeWireless: '25W (MagSafe Qi2)' },
      camera: {
        main: '48MP F1.78 Fusion (2세대 센서 시프트)',
        tele: '48MP F2.8 4x/8x Tetraprism',
        uw: '48MP F2.2'
      },
      os: 'iOS 26',
      price: { KR: '1,990,000원~', US: '$1,199~', CN: '¥9,999~' },
      features: 'Vapor Chamber 냉각 · Aluminum unibody · Apple Intelligence'
    },
    {
      name: 'iPhone 17 Pro',
      launch: '2025.09.19',
      launchFlag: 'released',
      display: {
        size: '6.3"',
        resolution: '2622×1206',
        refresh: '1–120Hz ProMotion',
        supplier: 'SDC / LGD',
        panelType: 'Super Retina XDR OLED',
        maxBrightness: '3,000 nit (peak)',
        generation: 'M13',
        ltpo: 'Yes',
        ppi: 460,
        hdr: 'Dolby Vision / HDR10'
      },
      soc: 'Apple A19 Pro',
      ram: '12 GB LPDDR5X',
      storage: '256GB / 512GB / 1TB',
      battery: { capacity: '약 3,988 mAh', chargeWired: '40W', chargeWireless: '25W' },
      camera: {
        main: '48MP F1.78 Fusion',
        tele: '48MP F2.8 4x/8x Tetraprism',
        uw: '48MP F2.2'
      },
      os: 'iOS 26',
      price: { KR: '1,790,000원~', US: '$1,099~', CN: '¥8,999~' },
      features: '알루미늄 유니바디 · Vapor Chamber · A19 Pro'
    },
    {
      name: 'iPhone 17 Air',
      launch: '2025.09.19',
      launchFlag: 'released',
      display: {
        size: '6.6"',
        resolution: '2736×1260',
        refresh: '1–120Hz ProMotion',
        supplier: 'SDC',
        panelType: 'Super Retina XDR OLED',
        maxBrightness: '3,000 nit (peak)',
        generation: 'M13',
        ltpo: 'Yes',
        ppi: 460,
        hdr: 'Dolby Vision / HDR10'
      },
      soc: 'Apple A19 Pro',
      ram: '12 GB',
      storage: '256GB / 512GB / 1TB',
      battery: { capacity: '약 2,800 mAh', chargeWired: '20W', chargeWireless: '15W (MagSafe)' },
      camera: {
        main: '48MP F1.6 Fusion (single camera)',
        tele: '— (디지털 2x in-sensor crop)',
        uw: '—'
      },
      os: 'iOS 26',
      price: { KR: '1,490,000원~', US: '$999~', CN: '¥7,999~' },
      features: '5.5mm 역대 최슬림 · 티타늄 프레임 · C1X 5G 모뎀 · single camera'
    },
    {
      name: 'iPhone 17',
      launch: '2025.09.19',
      launchFlag: 'released',
      display: {
        size: '6.3"',
        resolution: '2622×1206',
        refresh: '1–120Hz ProMotion (첫 도입)',
        supplier: 'BOE / LGD',
        panelType: 'Super Retina XDR OLED',
        maxBrightness: '2,000 nit (peak)',
        generation: 'M12 / BOE H3',
        ltpo: 'Yes (17세대부터 base 모델 ProMotion 확대)',
        ppi: 460,
        hdr: 'HDR10 / Dolby Vision'
      },
      soc: 'Apple A19',
      ram: '8 GB',
      storage: '128GB / 256GB / 512GB',
      battery: { capacity: '약 3,600 mAh', chargeWired: '30W', chargeWireless: '15W (MagSafe)' },
      camera: {
        main: '48MP F1.6 Fusion',
        tele: '—',
        uw: '12MP F2.4'
      },
      os: 'iOS 26',
      price: { KR: '1,250,000원~', US: '$799~', CN: '¥5,999~' },
      features: 'Base 모델 최초 ProMotion · Always-on Display 확대 적용'
    },
    {
      name: 'iPhone 18 Pro (루머)',
      launch: '2026.09 예정 (루머)',
      launchFlag: 'rumor',
      display: {
        size: '6.3" (추정)',
        resolution: '2622×1206 (추정)',
        refresh: '1–120Hz ProMotion',
        supplier: 'SDC / LGD',
        panelType: 'Under-panel Face ID OLED',
        maxBrightness: '3,500 nit 추정',
        generation: 'M14 (추정)',
        ltpo: 'Yes',
        ppi: 460,
        hdr: 'Dolby Vision'
      },
      soc: 'Apple A20 Pro (2nm N2) — 루머',
      ram: '12 GB (추정)',
      storage: '256GB~2TB (추정)',
      battery: { capacity: '미확인', chargeWired: '미확인', chargeWireless: '미확인' },
      camera: {
        main: 'Variable aperture 48MP (루머)',
        tele: '48MP Tetraprism',
        uw: '48MP'
      },
      os: 'iOS 27',
      price: { KR: '미확인', US: '미확인', CN: '미확인' },
      features: '루머: 언더패널 Face ID · Dynamic Island 축소 · 2nm AP'
    }
  ]
};
