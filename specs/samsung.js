/* ============================================================
 * Product Specs — Samsung
 * 최신 플래그십 라인업 (데이터 기반 상품기획 참고용)
 * 루머/미확인 항목은 launchFlag / remark 에 명시
 * ============================================================ */
window.PRODUCT_SPECS = window.PRODUCT_SPECS || {};
window.PRODUCT_SPECS['samsung'] = {
  brand: 'Samsung',
  label: 'Samsung',
  models: [
    {
      name: 'Galaxy S26 Ultra',
      launch: '2026.03.11',
      launchFlag: 'released',
      display: {
        size: '6.9"',
        resolution: '3120×1440 QHD+',
        refresh: '1–120Hz LTPO',
        supplier: 'SDC',
        panelType: 'Dynamic AMOLED 3X',
        maxBrightness: '2,600 nit (peak)',
        generation: 'M14',
        ltpo: 'Yes (LTPO 4.0)',
        ppi: 505,
        hdr: 'HDR10+'
      },
      soc: 'Snapdragon 8 Elite Gen 5 for Galaxy',
      ram: '12 / 16 GB LPDDR5X',
      storage: '256GB / 512GB / 1TB UFS 4.0',
      battery: { capacity: '5,200 mAh', chargeWired: '60W', chargeWireless: '25W (Qi2)' },
      camera: {
        main: '200MP F1.4 OIS (Samsung ISOCELL HP5)',
        tele: '50MP F2.9 5x Periscope + 10MP F2.4 3x',
        uw: '50MP F1.9 120°'
      },
      os: 'Android 16 / One UI 8.5',
      price: { KR: '1,698,400원~', US: '$1,299~', CN: '¥9,999~' },
      features: 'S Pen · Privacy Display · Galaxy AI · 21% 산열 개선 · Vapor Chamber +15%'
    },
    {
      name: 'Galaxy S26+',
      launch: '2026.03.11',
      launchFlag: 'released',
      display: {
        size: '6.7"',
        resolution: '3120×1440 QHD+',
        refresh: '1–120Hz LTPO',
        supplier: 'SDC',
        panelType: 'Dynamic AMOLED 3X',
        maxBrightness: '2,600 nit (peak)',
        generation: 'M14',
        ltpo: 'Yes',
        ppi: 513,
        hdr: 'HDR10+'
      },
      soc: 'Snapdragon 8 Elite Gen 5 for Galaxy',
      ram: '12 GB LPDDR5X',
      storage: '256GB / 512GB UFS 4.0',
      battery: { capacity: '4,900 mAh', chargeWired: '45W', chargeWireless: '15W (Qi2)' },
      camera: {
        main: '50MP F1.8 OIS (Samsung GN3)',
        tele: '10MP F2.4 3x',
        uw: '12MP F2.2 120°'
      },
      os: 'Android 16 / One UI 8.5',
      price: { KR: '1,353,000원~', US: '$999~', CN: '—' },
      features: 'Galaxy AI · Slim frame · Anti-reflective Gorilla Armor 2'
    },
    {
      name: 'Galaxy S26',
      launch: '2026.03.11',
      launchFlag: 'released',
      display: {
        size: '6.2"',
        resolution: '2340×1080 FHD+',
        refresh: '1–120Hz LTPO',
        supplier: 'SDC',
        panelType: 'Dynamic AMOLED 3X',
        maxBrightness: '2,600 nit (peak)',
        generation: 'M14',
        ltpo: 'Yes',
        ppi: 416,
        hdr: 'HDR10+'
      },
      soc: 'Snapdragon 8 Elite Gen 5 for Galaxy',
      ram: '12 GB LPDDR5X',
      storage: '128GB / 256GB / 512GB UFS 4.0',
      battery: { capacity: '4,000 mAh', chargeWired: '25W', chargeWireless: '15W' },
      camera: {
        main: '50MP F1.8 OIS',
        tele: '10MP F2.4 3x',
        uw: '12MP F2.2 120°'
      },
      os: 'Android 16 / One UI 8.5',
      price: { KR: '1,155,000원~', US: '$799~', CN: '—' },
      features: 'Galaxy AI · Compact flagship'
    },
    {
      name: 'Galaxy Z Fold7',
      launch: '2025.07',
      launchFlag: 'released',
      display: {
        size: 'Main 8.0" / Cover 6.5"',
        resolution: 'Main 2184×1968 / Cover 2520×1080',
        refresh: '1–120Hz LTPO',
        supplier: 'SDC',
        panelType: 'Foldable Dynamic AMOLED 2X',
        maxBrightness: '2,600 nit (peak)',
        generation: 'M13 (Fold용 특화)',
        ltpo: 'Yes',
        ppi: 'Main 374 / Cover 426',
        hdr: 'HDR10+'
      },
      soc: 'Snapdragon 8 Elite for Galaxy',
      ram: '12 / 16 GB',
      storage: '256GB / 512GB / 1TB',
      battery: { capacity: '4,400 mAh', chargeWired: '25W', chargeWireless: '15W' },
      camera: {
        main: '200MP F1.7 OIS',
        tele: '10MP F2.4 3x',
        uw: '12MP F2.2'
      },
      os: 'Android 15 → 16 / One UI 8.0',
      price: { KR: '2,388,100원~', US: '$1,999~', CN: '—' },
      features: '역대 최슬림 Fold (8.9mm) · Armor FlexHinge · 215g'
    },
    {
      name: 'Galaxy Z Flip7',
      launch: '2025.07',
      launchFlag: 'released',
      display: {
        size: 'Main 6.9" / Cover 4.1"',
        resolution: 'Main 2520×1080 / Cover 948×1048',
        refresh: '1–120Hz LTPO',
        supplier: 'SDC',
        panelType: 'Foldable Dynamic AMOLED 2X',
        maxBrightness: '2,600 nit (peak)',
        generation: 'M13',
        ltpo: 'Yes',
        ppi: 'Main 413 / Cover 360',
        hdr: 'HDR10+'
      },
      soc: 'Exynos 2500',
      ram: '12 GB',
      storage: '256GB / 512GB',
      battery: { capacity: '4,300 mAh', chargeWired: '25W', chargeWireless: '15W' },
      camera: {
        main: '50MP F1.8 OIS',
        tele: '—',
        uw: '12MP F2.2'
      },
      os: 'Android 15 → 16 / One UI 8.0',
      price: { KR: '1,487,200원~', US: '$1,099~', CN: '—' },
      features: 'Edge-to-edge Cover Display · AI 기반 Flex Window'
    }
  ]
};
