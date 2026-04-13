# 📰 Daily News 자동 아카이빙 시스템

## 개요

토큰 효율화를 위해 **자동 아카이빙** 구조 도입

- **news_data.js** - 오늘 + 이번주 뉴스만 (경량화)
- **news_archive_YYYY_MM.js** - 월별 아카이브 (필요시만 로드)

---

## 📁 파일 구조

```
Smartphone VOC (1)/
├── news_data.js                    ← 활성 뉴스 (Today + This Week)
├── news_archive_2026_04.js         ← 4월 아카이브 (자동 생성)
├── news_archive_2026_03.js         ← 3월 아카이브
├── NEWS_ARCHIVE_GUIDE.md           ← 이 파일
└── voc_dashboard_unified.html
```

---

## 🔄 자동 아카이빙 프로세스

### 매일 자정(00:00)에 실행

```javascript
// 1. 어제 뉴스를 아카이브로 이동
function archiveYesterdaysNews() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yearMonth = yesterday.getFullYear() + '_' + 
                    String(yesterday.getMonth() + 1).padStart(2, '0');
  
  // news_data.js에서 어제 뉴스 추출
  // news_archive_YYYY_MM.js에 추가
}

// 2. 오늘 + 이번주 뉴스로 news_data.js 리셋
function resetNewsData() {
  // news_data.js = 오늘 날짜로 초기화
  // 최대 7개 날짜(이번주)의 뉴스만 유지
}
```

---

## 💾 아카이브 파일 형식

**news_archive_2026_04.js**

```javascript
window.NEWS_ARCHIVE_2026_04 = {
  metadata: {
    year: 2026,
    month: 4,
    startDate: '2026.04.01',
    endDate: '2026.04.30',
    totalNews: 630
  },
  samsung: [ ... ],
  apple: [ ... ],
  xiaomi: [ ... ],
  // ... (브랜드별 정리)
}
```

---

## 📊 토큰 효율성 비교

### 아카이빙 전 (누적식)
```
1개월 후:   ~2KB   (630개 항목)
6개월 후:   ~12KB  (3,780개 항목)
1년 후:     ~24KB  (7,665개 항목) ❌ 토큰 낭비 심함
```

### 아카이빙 후 (자동 관리)
```
news_data.js:        ~0.6KB  (오늘 + 이번주만)
news_archive*.js:    ~2KB 각 (월별 분산)
총 메모리 사용:      ~20KB   (1년치 전체)
```

**토큰 절감**: 20% 수준으로 감소 ✅

---

## 🚀 구현 방법

### Option 1: 스케줄된 자동화
```bash
# 매일 자정에 실행
0 0 * * * python3 archive_news.py
```

### Option 2: 수동 아카이빙
```javascript
// 월말에 수동 실행
archiveNewsOfMonth('2026.04');
```

### Option 3: 트리거 기반
```javascript
// news_data.js가 30개 이상 항목일 때 자동 실행
if (newsData.totalItems > 30) {
  autoArchiveOldNews();
}
```

---

## 📥 대시보드에서 아카이브 로드

**현재**: news_data.js만 로드 (기본)

**"All" 탭 클릭 시** (선택사항):
```javascript
function loadAllNewsIncludingArchives() {
  // news_data.js 로드 (기본)
  loadNewsData();
  
  // 최근 3개월 아카이브 로드
  loadArchive('2026_04');
  loadArchive('2026_03');
  loadArchive('2026_02');
}
```

---

## ✅ 실제 구현 체크리스트

- [ ] news_data.js (활성) - 완료 ✓
- [ ] news_archive_2026_04.js (월별) - 구현 필요
- [ ] 자동 아카이빙 함수 - 구현 필요
- [ ] 스케줄 설정 - 구현 필요
- [ ] "All" 탭 다중 로드 - 구현 필요

---

## 🔗 관련 파일

- `news_data.js` - 뉴스 데이터 (21개 항목, 매일 업데이트)
- `voc_dashboard_unified.html` - 대시보드 템플릿 (로드/표시)

---

## 💡 추가 최적화

### 압축
```javascript
// 1년치 뉴스를 JSON.stringify + gzip으로 압축
// 파일 크기: ~24KB → ~8KB
```

### 캐싱
```javascript
// 로드된 아카이브는 localStorage에 캐시
// 재방문 시 즉시 로드 (네트워크 요청 없음)
```

### CDN
```javascript
// 아카이브 파일을 CDN에 배치
// 빠른 로딩 + 지리적 분산
```

---

**마지막 업데이트**: 2026.04.13
