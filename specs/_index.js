/* ============================================================
 * Spec Data — Index & Lazy Loader
 * 탭 클릭 시 해당 브랜드 파일만 로드 (토큰 효율화)
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

// 브랜드 파일 lazy 로드
function loadSpecBrand(brandKey) {
  return new Promise((resolve) => {
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
    s.onerror = () => { console.warn(`[SPEC] 로드 실패: ${brandKey}.js`); resolve(); };
    document.head.appendChild(s);
  });
}
