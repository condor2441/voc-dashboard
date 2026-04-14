/* ============================================================
 * Product Specs — vivo
 * ============================================================ */
window.PRODUCT_SPECS = window.PRODUCT_SPECS || {};
window.PRODUCT_SPECS['vivo'] = {
  brand: 'vivo',
  label: 'vivo',
  models: [
    {
      name: 'vivo X300 Pro',
      launch: '2025.10.13',
      launchFlag: 'released',
      display: {
        size: '6.78"',
        resolution: '2800×1260',
        refresh: '1–120Hz LTPO',
        supplier: 'BOE / CSOT (듀얼소스)',
        panelType: 'Flat OLED',
        maxBrightness: '4,500 nit (peak)',
        generation: 'BOE Q9+ / CSOT T9',
        ltpo: 'Yes',
        ppi: 460,
        hdr: 'HDR10+ / Dolby Vision'
      },
      soc: 'MediaTek Dimensity 9500',
      ram: '12 / 16 GB LPDDR5X',
      storage: '256GB / 512GB / 1TB UFS 4.1',
      battery: { capacity: '6,510 mAh (Si-C)', chargeWired: '90W', chargeWireless: '40W' },
      camera: {
        main: '50MP 1/1.28" Sony LYT-828 OIS',
        tele: '200MP Samsung HP9 3.7x APO Periscope',
        uw: '50MP F2.0'
      },
      os: 'OriginOS 6 (Android 16)',
      price: { KR: '미출시', US: '—', CN: '¥4,999~' },
      features: 'ZEISS · APO 망원 · IP68/IP69 · Aquamarine 실리콘 배터리'
    },
    {
      name: 'vivo X300 Ultra',
      launch: '2026.04 예정',
      launchFlag: 'planned',
      display: {
        size: '6.82"',
        resolution: '2K급 QHD+',
        refresh: '1–120Hz LTPO',
        supplier: 'BOE',
        panelType: 'Flat OLED',
        maxBrightness: '4,500 nit (peak)',
        generation: 'BOE Q9+',
        ltpo: 'Yes',
        ppi: 510,
        hdr: 'Dolby Vision'
      },
      soc: 'Snapdragon 8 Elite Gen 5',
      ram: '16 / 24 GB',
      storage: '512GB / 1TB',
      battery: { capacity: '6,500 mAh (Si-C)', chargeWired: '90W', chargeWireless: '40W' },
      camera: {
        main: '1" Sony LYT-900 Variable F1.7-F4.0',
        tele: '200MP Samsung HP9 APO 8.7x 이중 Periscope',
        uw: '50MP F1.8 + 외장 2.35x 렌즈 킷 (별도)'
      },
      os: 'OriginOS 6',
      price: { KR: '미출시', US: '—', CN: '¥7,499~ (추정)' },
      features: 'ZEISS Vario-APO · 프로 이미징 모듈 · V3+ 이미징칩'
    },
    {
      name: 'vivo X Fold 6 (루머)',
      launch: '2026.Q3 예정 (루머)',
      launchFlag: 'rumor',
      display: {
        size: 'Main 8.03" / Cover 6.53" (추정)',
        resolution: 'Main 2200×2480 / Cover 2748×1172',
        refresh: '1–120Hz LTPO',
        supplier: 'BOE (추정)',
        panelType: 'Foldable OLED',
        maxBrightness: '4,500 nit (추정)',
        generation: 'BOE Fold V3',
        ltpo: 'Yes',
        ppi: '미확인',
        hdr: 'Dolby Vision'
      },
      soc: 'Snapdragon 8 Elite Gen 5 (추정)',
      ram: '16 / 20 GB',
      storage: '512GB / 1TB',
      battery: { capacity: '6,000 mAh+ (Si-C, 루머)', chargeWired: '80W', chargeWireless: '40W' },
      camera: {
        main: '50MP 1/1.28" (루머)',
        tele: '200MP HP9 Periscope',
        uw: '50MP'
      },
      os: 'OriginOS 6',
      price: { KR: '미출시', US: '—', CN: '¥10,000~ (추정)' },
      features: '루머: 200MP 망원 탑재 Fold · ZEISS 협업 · 세계 최초 Fold 위성통신'
    }
  ]
};
