# 스마트폰 트렌드 분석 기능 설계

Date: 2026-04-26

## 개요

업무 페이지(work/index.html)에 "트렌드 분석" 탭을 추가한다.
사용자가 DB에서 폰을 선택하고 분석 버튼을 누르면 차트 + AI 인사이트를 함께 제공한다.

---

## 진입점

`work/index.html` 네비 탭에 "트렌드 분석" 추가.
기존 탭 순서: 기술 뉴스 → 스마트폰 DB → **트렌드 분석**

---

## 기능 흐름

1. "트렌드 분석" 탭 클릭 → DB의 모든 폰 카드 표시
2. 카드 클릭으로 다중 선택 (선택 수 실시간 표시)
3. 각 카드에 세그먼트 태그(플래그십/미드레인지/보급형) 표시 + 수정 버튼
4. "분석 시작" 버튼 클릭 → 비밀번호(`2441`) 확인
5. 인증 성공 시 백엔드 호출 → 차트 + AI 인사이트 렌더링

---

## 세그먼트 자동 추론

모델명 패턴 기반으로 자동 분류. 추론이 틀릴 수 있으므로 수정 가능.

| 패턴 | 세그먼트 |
|------|---------|
| Galaxy S/Ultra/Z Fold/Z Flip | 플래그십 |
| Galaxy A | 미드레인지 |
| Galaxy M/F | 보급형 |
| iPhone Pro/Pro Max | 플래그십 |
| iPhone (일반/Plus) | 미드레인지 |
| Pixel Pro | 플래그십 |
| Pixel (일반/a) | 미드레인지 |
| 기타 / 미매칭 | 미드레인지 (기본값) |

- 세그먼트 값은 `phones` 테이블의 `segment` 컬럼에 저장
- 카드 수정 버튼 클릭 → 드롭다운으로 변경 → `PATCH /phones/{id}/segment` 호출

---

## 차트 섹션 (Chart.js CDN)

선택된 폰들의 스펙을 연도 축으로 시각화.

| 차트 | 내용 |
|------|------|
| 디스플레이 크기 | 연도별 인치 추이 (브랜드별 선 그래프) |
| 패널 타입 | 연도별 OLED/AMOLED/LCD/LTPO 분포 (스택 막대) |
| 주사율 | 60→90→120Hz 변화 추이 |
| AP 칩 브랜드 | 연도별 Snapdragon/Exynos/Dimensity/Apple 분포 |
| 공정 노드 | 연도별 nm 수치 추이 (미세화) |
| RAM | 연도별 GB 추이 |
| 카메라 화소 | 연도별 메인 카메라 MP 추이 |
| 배터리 | 연도별 mAh 추이 |

AP 파싱 규칙:
- 칩 브랜드: "Snapdragon" → Snapdragon, "Exynos" → Exynos, "Dimensity" → Dimensity, "Apple" → Apple
- 공정 노드: 정규식으로 `(\d+)\s*nm` 추출

---

## AI 인사이트 섹션 (Claude Sonnet)

백엔드에서 집계된 스펙 데이터를 Claude에 전달해 한국어 분석 리포트 생성.

**인사이트 구성:**
- 브랜드별 트렌드 요약 (브랜드당 1~2문단)
- 세그먼트별 패턴 (플래그십 vs 미드레인지 vs 보급형 격차)
- 주목할 만한 이상치/특이점 (예: 특정 연도 급격한 스펙 점프)

**예상 비용:** 폰 10개 기준 약 $0.05/회 (Claude Sonnet)

---

## 백엔드 변경 사항

### DB 변경
```sql
ALTER TABLE phones ADD COLUMN segment TEXT DEFAULT NULL;
```

### 새 엔드포인트

| 메서드 | 경로 | 역할 |
|--------|------|------|
| `PATCH` | `/phones/{id}/segment` | 세그먼트 수동 수정 |
| `POST` | `/trend/analyze` | 트렌드 집계 + Claude 인사이트 반환 |

`POST /trend/analyze` 요청:
```json
{ "ids": [1, 2, 3, 5] }
```

`POST /trend/analyze` 응답:
```json
{
  "chart_data": {
    "display_size": [{ "year": 2022, "brand": "Samsung", "value": 6.1 }, ...],
    "panel_type": [...],
    "refresh_rate": [...],
    "ap_brand": [...],
    "process_node": [...],
    "ram": [...],
    "camera_mp": [...],
    "battery": [...]
  },
  "insights": "## 브랜드별 트렌드\n\n**Samsung**...\n\n**Apple**..."
}
```

---

## 프론트엔드 구조

`work/index.html` 내 추가:
- 탭 버튼: "트렌드 분석"
- `#section-trend` 섹션: 폰 선택 그리드 + 분석 결과 영역
- Chart.js CDN 추가
- `exportExcel` 과 동일한 패턴으로 `runTrendAnalysis()` 함수

---

## 비포함 항목 (YAGNI)

- 분석 결과 저장/히스토리
- PDF 내보내기
- 차트 커스터마이징 옵션
- 실시간 스트리밍 인사이트
