# IT之家 커뮤니티 의견 채널 추가

**날짜:** 2026-04-28  
**범위:** KooVIS 스마트폰 DB — 커뮤니티 의견 탭

## 목표

스마트폰 상세 패널의 "커뮤니티 의견" 탭에 중국 IT 커뮤니티 **IT之家(ithome.com)** 채널을 추가한다.

## 현재 상태

- 수집 채널: GSMArena 유저 의견, Reddit
- 노출 순서: GSMArena → Reddit

## 변경 내용

### 1. backend/scraper.py

`ithome_opinions(phone_name: str) -> list[dict]` 함수 추가.

- 검색 URL: `https://so.ithome.com/?q=<phone_name>`
- HTML에서 기사 제목, 날짜, URL 파싱 (최대 8개)
- 반환 구조 (기존 opinions dict와 동일):
  ```python
  {
      "source":   "ithome",
      "type":     "community",
      "text":     기사_제목,
      "text_ko":  None,  # translate_opinions()가 채움
      "reviewer": "IT之家",
      "date":     날짜_문자열,
      "url":      기사_URL,
  }
  ```

### 2. backend/main.py

`GET /phones/{phone_id}/opinions` 엔드포인트 수정:

- `ithome_opinions(phone["name"])` 호출 추가
- `translate_opinions()` 적용
- 응답에 `"ithome"` 키 추가:
  ```json
  {"gsmarena": [...], "ithome": [...], "reddit": [...]}
  ```

### 3. work/index.html

`loadOpinions()` 함수 수정:

- IT之家 섹션을 GSMArena와 Reddit 사이에 삽입
- 노출 순서: **GSMArena → IT之家 → Reddit**
- 섹션 헤더: `"IT之家"` + 전체 보기 링크
- 카드 스타일: 기존 `.opinion-card` 재사용
- 기사 제목 클릭 시 원문 링크 이동 (Reddit과 동일)
- 번역본 있으면 한국어 표시, 원문(중국어)은 접힘 처리

## 번역

기존 `translate_opinions()` 함수 재사용. 추가 변경 없음.

## 변경 파일 목록

| 파일 | 변경 유형 |
|------|-----------|
| `backend/scraper.py` | 함수 추가 |
| `backend/main.py` | 엔드포인트 수정 |
| `work/index.html` | 렌더링 수정 |

## 미포함 범위

- DB 캐싱 (실시간 스크래핑 유지)
- 知乎, Smzdm 등 추가 중국 채널
- 한국 커뮤니티 채널
