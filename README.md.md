# 성능 오답노트 : memegle 프로젝트 성능 개선하기

## 접근 프로세스

**측정 → 분석 → 개선**

## 작업 현황

### 측정

- 성능 점수 (lightHouse)
- 크기
  - bundle.js 소스코드 크기
  - 히어로 이미지 크기
- 속도 (프랑스 파리 기준)
  - 1번째 lcp 로드
  - 2번째 lcp 로드
- 프레임
  - Dropped Frame
  - Partially Presented Frame

### 분석

- [x] 성능 점수 (lightHouse)
  - [x] 현재 점수 : 67점
    - [x] 콘텐츠가 포함된 최대 페인트 요소(LCP) : 11.2초
    - [x] 차세대 이미지 형식 제공 필요 : 절감 가능치 8,597 kb
    - [x] 이미지 크기 최적화 필요 : 절감 가능치 7,787 kb
    - [x] 렌더링 차단 리소스 존재 : 절감 가능치 300ms
    - [x] 사용하지 않는 자바스크립트 : 절감 가능치 376 kb
    - [x] 자바스크립트 추가 절감 가능 : 25 kb
    - [x] 애니메이션/동영상 형식 사용 개선 : 절감 가능치 3,896 kb
    - [x] 레거시 JavaScript 제공 중 : 절감 가능치 41 kb
    - [x] 네트워크 페이로드 관리 필요 : 총 크기 15,563 kb
- [x] 크기
  - [x] bundle.js 소스코드 크기 : 247kb (gzip 전 948kb)
  - [x] 히어로 이미지 크기 : 10,918kb
- [x] 속도 (프랑스 파리 기준)
  - [x] 1번째 lcp 로드 : 2.548s (fast) / 8.764s (slow)
  - [x] 2번째 lcp 로드 : 1.762s (fast) / 2.175s (slow)
- [x] 프레임
  - [x] Dropped Frame : 초반 로드시 존재
  - [x] Partially Presented Frame ?

### 개선

- [ ] 크기
  - [x] bundle.js 소스코드 (결과) : gzip 전 172kb
    - [ ] JS Minify/Uglify 활성화
    - [ ] CSS Minify 적용
    - [ ] CSS 분리 추출
