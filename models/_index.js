/* ============================================================
 * VOC Models — Index & Auto-Loader
 * 새 모델 추가 시: MODEL_KEYS 배열에 파일명 추가만 하면 됨
 * voc_dashboard.html은 수정 불필요
 * v20250415 — cache-bust: priceUSD/sdcSupply 필드 추가
 * ============================================================ */

window.VOC_MODELS = window.VOC_MODELS || {};

const MODEL_KEYS = [
  'a57',
  'a37',
  'a07',
  'iqoo15',
  'iqoo15ultra',
  'op15',
  's26u',
  'reno15pro',
  'reno15c',
  'findx9pro',
  'xiaomi17ultra',
  'vivox300ultra',
  'iqooz11turbo',
  'ip17pro',
  'xiaomi17',
  'oppok15pro',
  's26plus',
  'redmiturbo5',
  'realmegt7pro',
  'vivoy500i',
  'vivoX300s',
  'vivoV70',
  'realmegt8pro',
  's26',
  // ← 새 모델 추가 시 여기에 파일명 추가
];

/* 순서 보장 로딩 (직렬 async) */
/* document.currentScript는 동기 컨텍스트에서만 유효 → 즉시 캡처 */
const _scriptSrc = document.currentScript ? document.currentScript.src : null;

(async function loadModels() {
  const base = _scriptSrc
    ? _scriptSrc.split('?')[0].replace('_index.js', '')
    : (location.href.includes('/') ? location.href.replace(/\/[^\/]*$/, '/') + 'models/' : 'models/');

  const cv = 'v20260415b'; // 캐시 무효화 버전 — 모델 데이터 변경 시 갱신
  for (const key of MODEL_KEYS) {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = `${base}${key}.js?${cv}`;
      s.onload  = resolve;
      s.onerror = () => { console.warn(`[VOC] 모델 로드 실패: ${key}.js`); resolve(); };
      document.head.appendChild(s);
    });
  }

  /* 모든 모델 로드 완료 후 대시보드 초기화 */
  if (typeof window.initDashboard === 'function') {
    window.initDashboard();
  }
})();
