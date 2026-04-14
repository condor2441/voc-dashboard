/* ============================================================
 * Spec Data — vivo (vivo · iQOO)
 * isRumor: true → 미출시/루머 플래그
 * ============================================================ */
window.SPEC_DATA = window.SPEC_DATA || {};
window.SPEC_DATA['vivo'] = {
  brand: 'vivo',
  models: [
    {
      key: 'vivox300ultra',
      model: 'vivo X300 Ultra',
      launch: '2026.03.30 (중국)',
      isRumor: false,
      market: '중국 (China-only)',
      segment: 'Imaging Flagship',
      display: {
        size: '6.8"',
        panelSupplier: 'BOE',
        panelType: 'BOE Q10 Plus LTPO',
        resolution: '1440×3200 (2K)',
        ppi: '510',
        hzRange: '1–144Hz',
        brightness: '4500nit (국소) / 1946nit (전역)',
        pwm: '2160Hz PWM + DC',
        hdr: 'HDR10+ / Dolby Vision / Zeiss Master Color',
        notes: '144Hz 8T 백플레인 LTPO · Zeiss 색감 보정'
      },
      soc: 'Snapdragon 8 Elite Gen5 (4nm)',
      ram: '12GB LPDDR6X',
      storage: '512GB UFS 4.0',
      battery: '6600–7000mAh',
      charging: { wired: '100W', wireless: '—' },
      camera: {
        main: '200MP Sony LYT-900 (f/1.9)',
        tele: '200MP Samsung (f/2.2)',
        uw: '50MP 초광각 (f/2.2)'
      },
      weight: '약 215g',
      waterproof: 'IP69',
      os: 'OriginOS 6 / Android 16',
      notes: '이중 200MP · 4K120 Dolby Vision 영상 · 무선충전 없음'
    },
    {
      key: 'vivox300s',
      model: 'vivo X300s',
      launch: '2026.01 (중국)',
      isRumor: false,
      market: '중국 (China-only)',
      segment: 'Imaging Flagship',
      display: {
        size: '6.78"',
        panelSupplier: 'BOE',
        panelType: 'BOE LTPO AMOLED',
        resolution: '1260×2800 (1.5K)',
        ppi: '~460',
        hzRange: '1–144Hz',
        brightness: '4500nit (국소) / 2000nit (전역)',
        pwm: '2160Hz PWM + DC',
        hdr: 'HDR10+',
        notes: '144Hz 8T 백플레인 LTPO · 최저 1nit'
      },
      soc: 'MediaTek Dimensity 9500',
      ram: '12GB',
      storage: '256GB / 512GB',
      battery: '7100mAh',
      charging: { wired: '100W', wireless: '—' },
      camera: {
        main: '200MP Zeiss 망원',
        tele: '200MP 잠망경',
        uw: '초광각'
      },
      weight: '약 225g',
      waterproof: '—',
      os: 'OriginOS 6 / Android 15',
      notes: '중국 전용 · 기기 두께·무게 이슈'
    },
    {
      key: 'vivoV70',
      model: 'vivo V70',
      launch: '2025.12 (글로벌)',
      isRumor: false,
      market: '글로벌 (인도·동남아)',
      segment: 'Premium Volume',
      display: {
        size: '6.59"',
        panelSupplier: 'SDC (예상)',
        panelType: 'AMOLED',
        resolution: '1260×2750 (1.5K)',
        ppi: '~460',
        hzRange: '120Hz',
        brightness: '5000nit (피크) / 1800nit (HBM)',
        pwm: 'DC 디밍',
        hdr: 'HDR10+',
        notes: 'Zeiss 전면 50MP · 프리미엄 설계'
      },
      soc: 'Snapdragon 7 Gen 4',
      ram: '12GB',
      storage: '512GB',
      battery: '6500mAh',
      charging: { wired: '90W (FlashCharge)', wireless: '—' },
      camera: {
        main: '50MP Sony LYT 700V (OIS)',
        tele: '50MP 3x',
        uw: '8MP'
      },
      weight: '약 190g',
      waterproof: '—',
      os: 'Funtouch OS 15',
      notes: '글로벌 미들급 프리미엄 · Zeiss 전면 50MP'
    },
    {
      key: 'vivoy500i',
      model: 'vivo Y500i',
      launch: '2026.01 (인도·동남아)',
      isRumor: false,
      market: '글로벌 (인도 중심)',
      segment: 'Mass Volume',
      display: {
        size: '6.75"',
        panelSupplier: '—',
        panelType: 'LCD',
        resolution: '1520×720 (HD+)',
        ppi: '—',
        hzRange: '120Hz',
        brightness: '1200nit (피크)',
        pwm: '3840Hz PWM + DC',
        hdr: '—',
        notes: 'LCD 패널 · 엔트리 세그먼트'
      },
      soc: 'Snapdragon 4 Gen 2',
      ram: '4GB / 6GB / 8GB',
      storage: '128GB / 256GB (eMMC)',
      battery: '7200mAh',
      charging: { wired: '44W', wireless: '—' },
      camera: {
        main: '50MP f/1.8',
        tele: '—',
        uw: '—'
      },
      weight: '약 194g',
      waterproof: 'IP69 / IP68 · SGS 5성 낙하',
      os: 'Funtouch OS 15',
      notes: '엔트리 가성비 · 7200mAh 초대용량'
    },
    {
      key: 'iqoo15',
      model: 'iQOO 15',
      launch: '2026.01 (중국)',
      isRumor: false,
      market: '중국 + 인도 (iQOO 브랜드)',
      segment: 'Performance Gaming',
      display: {
        size: '6.85"',
        panelSupplier: 'SDC',
        panelType: 'SDC LEAD OLED (珠峰屏, 무편광층)',
        resolution: '1440×3168 (QHD+)',
        ppi: '508',
        hzRange: '1–144Hz',
        brightness: '6000nit (국소) / 2600nit (전역)',
        pwm: '2160Hz PWM + DC',
        hdr: 'HDR10+',
        notes: '무편광층 제거 → 자연광 출력 / 3광선 센서'
      },
      soc: 'Snapdragon 8850 (Elite Gen5, 3nm)',
      ram: '12GB / 16GB / 24GB',
      storage: '256GB / 512GB / 1TB',
      battery: '7000mAh',
      charging: { wired: '100W', wireless: '100W' },
      camera: {
        main: '50MP 주카메라',
        tele: '50MP 잠망경',
        uw: '50MP 초광각'
      },
      weight: '약 215g',
      waterproof: 'IP69',
      os: 'OriginOS 6 / Android 15',
      notes: 'SDC LEAD OLED 무편광층 세계 최초 · Q3 e스포츠칩'
    },
    {
      key: 'iqooz11turbo',
      model: 'iQOO Z11 Turbo',
      launch: '2026.02 (중국)',
      isRumor: false,
      market: '중국 (China-only)',
      segment: 'Value-centric',
      display: {
        size: '6.59"',
        panelSupplier: '—',
        panelType: 'LTPS AMOLED',
        resolution: '1620×720',
        ppi: '270',
        hzRange: '144Hz (고정)',
        brightness: '5000nit (피크)',
        pwm: '2160Hz PWM',
        hdr: '—',
        notes: '게이밍 최적화 144Hz · 직화면'
      },
      soc: 'Snapdragon 8 Gen 5',
      ram: '12GB / 16GB',
      storage: '256GB / 1TB',
      battery: '7600mAh',
      charging: { wired: '100W', wireless: '—' },
      camera: {
        main: '200MP Sony HP5 (1/1.56") f/1.88 OIS',
        tele: '—',
        uw: '12MP'
      },
      weight: '209g',
      waterproof: '—',
      os: 'OriginOS 6 / Android 15',
      notes: '가성비 게이밍 · 15분 만에 100% 충전'
    },
    {
      key: 'vivoxfold4',
      model: 'vivo X Fold 4',
      launch: '2026 Q2 예상',
      isRumor: true,
      market: '중국',
      segment: 'Foldable',
      display: {
        size: '내부 ~8.0" / 커버 ~6.5"',
        panelSupplier: 'SDC 또는 BOE (예상)',
        panelType: 'LTPO AMOLED (예상)',
        resolution: '내부 QHD+ / 커버 FHD+',
        ppi: '—',
        hzRange: '1–120Hz',
        brightness: '—',
        pwm: '—',
        hdr: 'HDR10+',
        notes: '루머 기반 · 힌지 개선 예상'
      },
      soc: 'Snapdragon 8 Elite Gen5 또는 Gen6 (예상)',
      ram: '12GB / 16GB (예상)',
      storage: '512GB / 1TB',
      battery: '~6000mAh (예상)',
      charging: { wired: '120W (예상)', wireless: '50W' },
      camera: { main: '50MP+', tele: '—', uw: '—' },
      weight: '—',
      waterproof: 'IPX8 (예상)',
      os: 'OriginOS 6 / Android 16 (예상)',
      notes: '루머 기반 · 미확인 스펙 다수'
    }
  ]
};
