/* ============================================================
 * Product Specs — Huawei
 * ============================================================ */
window.PRODUCT_SPECS = window.PRODUCT_SPECS || {};
window.PRODUCT_SPECS['huawei'] = {
  brand: 'Huawei',
  label: 'Huawei',
  models: [
    {
      name: 'Pura 80 Ultra',
      launch: '2025.06.11',
      launchFlag: 'released',
      display: {
        size: '6.8"',
        resolution: '2848×1276',
        refresh: '1–120Hz LTPO',
        supplier: 'BOE / Visionox',
        panelType: 'Quad-curve OLED (Kunlun Glass 2)',
        maxBrightness: '3,000 nit (peak)',
        generation: 'BOE Q9+ / Visionox V3',
        ltpo: 'Yes',
        ppi: 460,
        hdr: 'HDR Vivid / HDR10+'
      },
      soc: 'HiSilicon Kirin 9020',
      ram: '12 / 16 GB LPDDR5X',
      storage: '256GB / 512GB / 1TB',
      battery: { capacity: '5,170 mAh (Si-C)', chargeWired: '100W', chargeWireless: '80W (Wireless Super)' },
      camera: {
        main: '50MP F1.6-F4.0 Variable Aperture 1" sensor',
        tele: '50MP F2.4 3.7x + 12.5MP F3.6 9.4x dual tele',
        uw: '40MP F2.2 Ultra-wide macro'
      },
      os: 'HarmonyOS 5.0',
      price: { KR: '미출시', US: '미출시', CN: '¥7,999~' },
      features: 'XMAGE 이미지 · 위성통신 (双向北斗) · 중국 내수 전용'
    },
    {
      name: 'Mate 70 Pro+',
      launch: '2024.11.26',
      launchFlag: 'released',
      display: {
        size: '6.9"',
        resolution: '2832×1316',
        refresh: '1–120Hz LTPO',
        supplier: 'BOE',
        panelType: 'Quad-curve OLED',
        maxBrightness: '2,500 nit (peak)',
        generation: 'BOE Q9',
        ltpo: 'Yes',
        ppi: 460,
        hdr: 'HDR Vivid'
      },
      soc: 'HiSilicon Kirin 9020',
      ram: '16 GB LPDDR5X',
      storage: '512GB / 1TB',
      battery: { capacity: '5,700 mAh', chargeWired: '100W', chargeWireless: '80W' },
      camera: {
        main: '50MP F1.4-F4.0 Variable 1/1.28"',
        tele: '50MP 4x Periscope + 48MP 2.5x',
        uw: '40MP F2.2'
      },
      os: 'HarmonyOS NEXT 5.0 (순수 Harmony)',
      price: { KR: '미출시', US: '미출시', CN: '¥9,999~' },
      features: '첫 전면 HarmonyOS NEXT · Lingxi 안테나 · 위성통신 Tiantong'
    },
    {
      name: 'Pura 90 Ultra (루머)',
      launch: '2026.06 예정 (루머)',
      launchFlag: 'rumor',
      display: {
        size: '6.8" (추정)',
        resolution: '미확인',
        refresh: '1–120Hz LTPO',
        supplier: 'BOE / CSOT (루머)',
        panelType: 'Quad-curve OLED (추정)',
        maxBrightness: '4,000 nit (추정, 루머)',
        generation: 'BOE Q10 / CSOT T10 (추정)',
        ltpo: 'Yes',
        ppi: '미확인',
        hdr: 'HDR Vivid'
      },
      soc: 'Kirin 9030 (루머 — 2nm SMIC)',
      ram: '16 / 20 GB (추정)',
      storage: '512GB / 1TB',
      battery: { capacity: '6,000 mAh+ (Si-C, 루머)', chargeWired: '100W+', chargeWireless: '80W' },
      camera: {
        main: '1" Variable aperture (루머)',
        tele: 'Dual periscope (루머)',
        uw: '미확인'
      },
      os: 'HarmonyOS 6.0',
      price: { KR: '미출시', US: '미출시', CN: '¥8,000~' },
      features: '루머: 2nm Kirin · 200MP 망원 · Si-C 배터리 확대'
    }
  ]
};
