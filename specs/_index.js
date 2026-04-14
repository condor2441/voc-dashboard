/* ============================================================
 * Spec Data — Dynamic Generator from VOC_MODELS
 * VOC 데이터가 있으면 자동으로 SPEC_DATA 생성
 * 새 VOC 모델 추가 시 자동 동기화 (마이그레이션 필수 없음)
 * ============================================================ */

window.SPEC_DATA = window.SPEC_DATA || {};

const SPEC_BRANDS = ['samsung', 'apple', 'huawei', 'xiaomi', 'oppo', 'vivo', 'honor'];
const SPEC_BRAND_LABELS = {
  samsung: 'Samsung',
  apple:   'Apple',
  huawei:  'Huawei',
  xiaomi:  'Xiaomi',
  oppo:    'OPPO',
  vivo:    'vivo',
  honor:   'Honor'
};

// 로드 완료 여부 추적
const SPEC_LOADED = {};

/**
 * VOC_MODELS에서 spec 데이터를 추출하여 SPEC_DATA 구조로 변환
 * 목표: 제품 스펙탭을 VOC 분석 대상 모델만 표시하도록 자동 동기화
 */
function generateSpecDataFromVocModels() {
  if (!window.VOC_MODELS) {
    console.warn('[SPEC] VOC_MODELS not available, skipping auto-generation');
    return;
  }

  // 브랜드별로 VOC 모델 그룹화
  const brandGroups = {};
  Object.keys(window.VOC_MODELS).forEach(key => {
    const vocModel = window.VOC_MODELS[key];
    const brand = (vocModel.brand || 'Unknown').toLowerCase();
    if (!brandGroups[brand]) {
      brandGroups[brand] = [];
    }
    brandGroups[brand].push({ key, vocModel });
  });

  // 각 브랜드별로 SPEC_DATA 생성
  Object.keys(brandGroups).forEach(brand => {
    const brandLabel = Object.values(SPEC_BRAND_LABELS).find(
      label => label.toLowerCase() === brand
    ) || brand.charAt(0).toUpperCase() + brand.slice(1);

    const models = brandGroups[brand].map(({ key, vocModel }) => {
      // VOC spec 배열에서 필요한 정보 추출
      const specMap = {};
      if (vocModel.specs && Array.isArray(vocModel.specs)) {
        vocModel.specs.forEach(spec => {
          specMap[spec.key] = spec;
        });
      }

      // 디스플레이 정보 추출
      const displayVal = specMap['디스플레이']?.val || '—';
      const sizeMatch = displayVal.match(/(\d+\.?\d+)\"/);
      const displaySize = sizeMatch ? sizeMatch[1] + '"' : '—';

      const resolution = specMap['해상도']?.val || '—';
      const hzRange = specMap['주사율 / LTPO']?.val || '—';
      const brightness = specMap['피크 밝기']?.val || '—';
      const pwm = specMap['PWM / 조광']?.val || '—';
      const displayNote = specMap['디스플레이']?.note || '';

      // 패널 타입 및 공급사 추정
      let panelType = '—';
      let panelSupplier = '—';
      if (displayVal.includes('LTPO') || displayVal.includes('AMOLED')) {
        panelType = 'LTPO AMOLED';
        panelSupplier = 'SDC'; // 기본값
      } else if (displayVal.includes('OLED')) {
        panelType = 'OLED';
        panelSupplier = 'SDC';
      }

      return {
        key,
        model: vocModel.name || '—',
        launch: vocModel.launch ? (vocModel.launch.split(' / ')[1] || vocModel.launch.split(' ')[0]) : '—',
        isRumor: false, // VOC 분석은 확인된 모델만 포함
        market: vocModel.market || '—',
        segment: vocModel.segment || '—',
        display: {
          size: displaySize,
          panelSupplier: panelSupplier,
          panelType: panelType,
          resolution: resolution,
          ppi: specMap['해상도']?.note || '—',
          hzRange: hzRange,
          brightness: brightness,
          pwm: pwm,
          hdr: displayVal.includes('HDR') || displayNote.includes('HDR') ? 'HDR10+' : '—',
          notes: vocModel.displayInsights?.[0] || ''
        },
        soc: specMap['SoC']?.val || '—',
        ram: specMap['RAM / 저장']?.val?.split('+')[0]?.trim() || '—',
        storage: specMap['RAM / 저장']?.val?.split('+')[1]?.trim() || '—',
        battery: specMap['배터리']?.val || '—',
        charging: parseChargingFromSpec(specMap['충전']?.val || '—'),
        camera: parseCameraFromSpec(specMap['카메라']?.val || '—'),
        weight: specMap['무게 / 두께']?.val || '—',
        waterproof: specMap['방수']?.val || '—',
        os: specMap['OS']?.val || '—',
        notes: vocModel.conclusion || ''
      };
    });

    // SPEC_DATA에 추가
    if (models.length > 0) {
      window.SPEC_DATA[brand] = {
        brand: brandLabel,
        models
      };
      console.log(`[SPEC] Generated ${brand}: ${models.length} models from VOC_MODELS`);
    }
  });
}

/**
 * 충전 문자열 파싱 (예: "25W 유선 / 15W 무선")
 */
function parseChargingFromSpec(chargingStr) {
  if (!chargingStr || chargingStr === '—') return { wired: '—' };

  const parts = chargingStr.split('/').map(s => s.trim());
  const result = {};

  if (parts[0]) result.wired = parts[0];
  if (parts[1]) result.wireless = parts[1];

  return result.wired ? result : { wired: '—' };
}

/**
 * 카메라 문자열 파싱 (예: "50MP 주(F1.4) + 12MP 초광각 + 10MP 3x 망원")
 */
function parseCameraFromSpec(cameraStr) {
  if (!cameraStr || cameraStr === '—') return null;

  // 간단한 파싱: 주, 망원, 초광각 분류
  const parts = cameraStr.split('+').map(s => s.trim());
  const cam = {};

  parts.forEach(part => {
    if (part.includes('주') || part.includes('광각') || (cam.main === undefined && /\d+MP/.test(part))) {
      cam.main = part;
    } else if (part.includes('망원') || part.includes('tele')) {
      cam.tele = part;
    } else if (part.includes('초광') || part.includes('UW')) {
      cam.uw = part;
    }
  });

  return Object.keys(cam).length > 0 ? cam : null;
}

/**
 * 브랜드 파일 lazy 로드 (폴백: VOC 자동생성이 실패한 경우)
 */
function loadSpecBrand(brandKey) {
  return new Promise((resolve) => {
    // 먼저 VOC_MODELS에서 생성된 데이터 확인
    if (window.SPEC_DATA[brandKey]) {
      resolve();
      return;
    }

    if (SPEC_LOADED[brandKey]) { resolve(); return; }

    /* base URL 계산 (현재 스크립트 위치 기준) */
    const scripts = document.querySelectorAll('script[src]');
    let base = 'specs/';
    scripts.forEach(s => {
      if (s.src && s.src.includes('specs/_index.js')) {
        base = s.src.replace('_index.js', '');
      }
    });

    const s = document.createElement('script');
    s.src = `${base}${brandKey}.js`;
    s.onload = () => { SPEC_LOADED[brandKey] = true; resolve(); };
    s.onerror = () => {
      console.warn(`[SPEC] 브랜드 파일 로드 실패: ${brandKey}.js`);
      resolve();
    };
    document.head.appendChild(s);
  });
}

// VOC_MODELS 로드 후 자동 생성 (models/_index.js 완료 후)
function initSpecDataSync() {
  if (window.VOC_MODELS && Object.keys(window.VOC_MODELS).length > 0) {
    generateSpecDataFromVocModels();
  }
}
