/* ============================================================
 * VOC Models — Index & Auto-Loader
 * 새 모델 추가 시: MODEL_KEYS 배열에 파일명 추가만 하면 됨
 * voc_dashboard.html은 수정 불필요
 * ============================================================ */

window.VOC_MODELS = window.VOC_MODELS || {};

const MODEL_KEYS = [
  'iqoo15',
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
    ? _scriptSrc.replace('_index.js', '')
    : (location.href.includes('/') ? location.href.replace(/\/[^\/]*$/, '/') + 'models/' : 'models/');

  for (const key of MODEL_KEYS) {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = `${base}${key}.js`;
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
