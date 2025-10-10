# 📚 문서 인덱스 (Documentation Index)

선우 이비인후과 웹사이트 프로젝트의 모든 문서를 한 곳에서 확인할 수 있는 종합 인덱스입니다.

## 📁 문서 구조

```
docs/
├── README.md                    # 📖 프로젝트 메인 문서
├── TECHNICAL_SPECS.md          # 🛠 기술 명세서  
├── COMPONENT_GUIDE.md          # 🧩 컴포넌트 가이드
├── DEPLOYMENT_GUIDE.md         # 🚀 배포 가이드
├── API_SPECS.md               # 📞 API 명세서
├── STYLE_GUIDE.md             # 🎨 스타일 가이드
└── INDEX.md                   # 📚 이 문서
```

## 📋 문서별 개요

### 1. [📖 README.md](../README.md)
**프로젝트의 메인 문서**
- 프로젝트 개요 및 주요 특징
- 설치 및 실행 방법
- 기술 스택 정보
- 프로젝트 구조 설명
- 기본적인 사용법

### 2. [🛠 TECHNICAL_SPECS.md](./TECHNICAL_SPECS.md)
**기술적 구현 사항 상세 문서**
- 아키텍처 다이어그램
- 기술 스택 상세 설명
- 성능 최적화 방법
- SEO 구현 상세
- 접근성 구현 방법
- 보안 고려사항

### 3. [🧩 COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md)
**React 컴포넌트 사용 가이드**
- 모든 컴포넌트 상세 설명
- Props 인터페이스 정의
- 사용 예시 코드
- 컴포넌트 간 관계도
- 커스텀 훅 설명
- 개발 가이드라인

### 4. [🚀 DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
**배포 및 운영 가이드**
- 다양한 호스팅 플랫폼 배포 방법
- CI/CD 파이프라인 설정
- 환경 변수 관리
- 성능 모니터링 설정
- 보안 헤더 구성
- 도메인 및 SSL 설정

### 5. [📞 API_SPECS.md](./API_SPECS.md)
**API 명세서 (향후 백엔드 연동용)**
- REST API 엔드포인트 정의
- 요청/응답 데이터 구조
- 인증 및 권한 관리
- 에러 코드 정의
- 사용 예시 코드
- 모바일 앱 API 고려사항

### 6. [🎨 STYLE_GUIDE.md](./STYLE_GUIDE.md)
**디자인 시스템 및 스타일 가이드**
- 컬러 시스템 정의
- 타이포그래피 규칙
- 컴포넌트 스타일링
- 애니메이션 가이드라인
- 반응형 디자인 원칙
- 접근성 스타일링

## 🎯 문서 사용 가이드

### 👩‍💻 개발자를 위한 문서
1. **신규 개발자**: README.md → TECHNICAL_SPECS.md → COMPONENT_GUIDE.md 순서로 읽기
2. **프론트엔드 개발**: COMPONENT_GUIDE.md + STYLE_GUIDE.md 중점 참고
3. **백엔드 개발**: API_SPECS.md 중점 참고
4. **DevOps**: DEPLOYMENT_GUIDE.md 중점 참고

### 🎨 디자이너를 위한 문서
1. **UI/UX 디자이너**: STYLE_GUIDE.md + COMPONENT_GUIDE.md 참고
2. **디자인 시스템**: STYLE_GUIDE.md의 컬러/타이포그래피 섹션 참고

### 📊 프로젝트 매니저를 위한 문서
1. **프로젝트 개요**: README.md 참고
2. **기술 스택 이해**: TECHNICAL_SPECS.md 개요 섹션 참고
3. **배포 계획**: DEPLOYMENT_GUIDE.md 참고

### 🔧 운영자를 위한 문서
1. **배포 및 운영**: DEPLOYMENT_GUIDE.md 전체 참고
2. **모니터링**: DEPLOYMENT_GUIDE.md의 모니터링 섹션 참고

## 📝 문서 업데이트 가이드

### 업데이트 우선순위
1. **코드 변경 시**: COMPONENT_GUIDE.md 업데이트 필수
2. **스타일 변경 시**: STYLE_GUIDE.md 업데이트 필수
3. **배포 방식 변경 시**: DEPLOYMENT_GUIDE.md 업데이트 필수
4. **API 추가/변경 시**: API_SPECS.md 업데이트 필수

### 문서 작성 규칙
1. **마크다운 문법 준수**: 일관된 헤더 구조 유지
2. **코드 예시 포함**: 실제 사용 가능한 코드 제공
3. **이미지 및 다이어그램**: 복잡한 개념은 시각적 자료 활용
4. **버전 관리**: 중요한 변경사항은 날짜와 함께 기록

## 🔍 문서 검색 가이드

### 키워드별 문서 위치
- **React, 컴포넌트, Props**: COMPONENT_GUIDE.md
- **색상, 폰트, 디자인**: STYLE_GUIDE.md
- **배포, 호스팅, CI/CD**: DEPLOYMENT_GUIDE.md
- **API, 엔드포인트, 데이터**: API_SPECS.md
- **성능, SEO, 접근성**: TECHNICAL_SPECS.md
- **설치, 실행, 빌드**: README.md

### 자주 찾는 정보
| 찾는 정보 | 문서 위치 | 섹션 |
|-----------|-----------|------|
| 프로젝트 설치 방법 | README.md | 🚀 설치 및 실행 |
| 컴포넌트 Props | COMPONENT_GUIDE.md | 각 컴포넌트 섹션 |
| 색상 코드 | STYLE_GUIDE.md | 🌈 컬러 시스템 |
| 배포 명령어 | DEPLOYMENT_GUIDE.md | 🌐 배포 옵션 |
| API 엔드포인트 | API_SPECS.md | 📞 예약 관리 API |
| CSS 클래스 | STYLE_GUIDE.md | 🎯 Component Styles |

## 🛠 문서 개선 제안

### 향후 추가할 문서
1. **TESTING_GUIDE.md**: 테스트 작성 및 실행 가이드
2. **TROUBLESHOOTING.md**: 일반적인 문제 해결 방법
3. **PERFORMANCE_GUIDE.md**: 성능 최적화 상세 가이드
4. **SECURITY_GUIDE.md**: 보안 관련 상세 가이드
5. **MIGRATION_GUIDE.md**: 버전 업그레이드 가이드

### 문서 품질 향상 방안
1. **인터랙티브 예시**: CodeSandbox 연동
2. **실시간 문서**: Storybook 연동
3. **자동 생성**: JSDoc을 통한 API 문서 자동 생성
4. **다국어 지원**: 영문 버전 문서 제작

## 📞 문의 및 기여

### 문서 관련 문의
- **기술 문의**: dev@seonwoo-ent.com
- **디자인 문의**: design@seonwoo-ent.com
- **오타/오류 신고**: docs@seonwoo-ent.com

### 문서 기여 방법
1. **GitHub Issue**: 문서 개선 제안 또는 오류 신고
2. **Pull Request**: 직접 문서 수정 및 개선
3. **피드백**: 사용 경험 및 개선사항 공유

## 🏷 문서 버전 정보

| 문서 | 최종 업데이트 | 버전 | 주요 변경사항 |
|------|---------------|------|---------------|
| README.md | 2024-10-10 | 2.0 | UI/UX 개선 완료 반영 |
| TECHNICAL_SPECS.md | 2024-10-10 | 1.0 | 초기 버전 작성 |
| COMPONENT_GUIDE.md | 2024-10-10 | 1.0 | 모든 컴포넌트 문서화 |
| DEPLOYMENT_GUIDE.md | 2024-10-10 | 1.0 | 배포 옵션 종합 정리 |
| API_SPECS.md | 2024-10-10 | 1.0 | 향후 API 설계 명세 |
| STYLE_GUIDE.md | 2024-10-10 | 1.0 | 디자인 시스템 완성 |

---

**📌 중요**: 이 문서들은 살아있는 문서입니다. 프로젝트 진행에 따라 지속적으로 업데이트되며, 최신 정보는 GitHub 저장소에서 확인하실 수 있습니다.

**🎯 다음 단계**: 필요한 문서를 클릭하여 자세한 정보를 확인하세요. 각 문서는 독립적으로 읽을 수 있도록 구성되어 있지만, 전체적인 이해를 위해서는 README.md부터 시작하는 것을 권장합니다.

---

*Made with 📝 for better development experience*