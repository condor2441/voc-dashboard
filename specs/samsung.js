/* ============================================================
 * Product Specs — Samsung
 * VOC 데이터 (window.VOC_MODELS) 의 모델 키와 1:1 매칭
 * 플랫 dict: window.PRODUCT_SPECS_BY_KEY[modelKey]
 * ============================================================ */
window.PRODUCT_SPECS_BY_KEY = window.PRODUCT_SPECS_BY_KEY || {};

window.PRODUCT_SPECS_BY_KEY['s26u'] = {
  key: 's26u',
  brand: 'Samsung',
  name: 'Samsung Galaxy S26 Ultra',
  launch: '2026.02.25 발표 / 2026.03.11 출시',
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
    main: '200MP F1.4 OIS (ISOCELL HP5)',
    tele: '50MP F2.9 5x Periscope + 10MP F2.4 3x',
    uw: '50MP F1.9 120°'
  },
  os: 'Android 16 / One UI 8.5',
  price: { KR: '1,698,400원~', US: '$1,299~', CN: '¥9,999~' },
  features: 'S Pen · Privacy Display · Galaxy AI · 산열 +21% · Vapor Chamber +15%'
};

window.PRODUCT_SPECS_BY_KEY['s26plus'] = {
  key: 's26plus',
  brand: 'Samsung',
  name: 'Samsung Galaxy S26+',
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
  features: 'Galaxy AI · Slim 프레임 · Gorilla Armor 2'
};

window.PRODUCT_SPECS_BY_KEY['s26'] = {
  key: 's26',
  brand: 'Samsung',
  name: 'Samsung Galaxy S26',
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
  features: 'Galaxy AI · 컴팩트 플래그십'
};
