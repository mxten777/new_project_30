# 기술 명세서 (Technical Specifications)

## 🛠 아키텍처 개요

### Frontend Architecture
```
┌─────────────────────────────────────────────────┐
│                   React App                     │
├─────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌──────────┐ │
│  │   Header    │  │    Hero     │  │ Services │ │
│  └─────────────┘  └─────────────┘  └──────────┘ │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────┐ │
│  │    About    │  │   Reviews   │  │  Footer  │ │
│  └─────────────┘  └─────────────┘  └──────────┘ │
├─────────────────────────────────────────────────┤
│         Context API (Theme Management)          │
├─────────────────────────────────────────────────┤
│           Custom Hooks & Utilities             │
└─────────────────────────────────────────────────┘
```

### 기술 스택 상세

#### Core Technologies
- **React 19.1.0**
  - 최신 서버 컴포넌트 지원
  - 향상된 Suspense 기능
  - 자동 배치 처리 최적화

- **TypeScript 5.8.3**
  - 엄격한 타입 검사
  - 인터페이스 기반 컴포넌트 설계
  - 타입 안전성 보장

- **Vite 7.0.0**
  - HMR (Hot Module Replacement)
  - 빠른 빌드 시간
  - 최적화된 번들링

#### Styling & Animation
- **Tailwind CSS 3.4.0**
  - 유틸리티-퍼스트 접근법
  - 커스텀 의료 테마 색상
  - 반응형 디자인 시스템

- **Framer Motion 12.23.22**
  - 선언적 애니메이션
  - 제스처 인식
  - 스크롤 트리거 애니메이션

#### UI Components & Icons
- **Lucide React 0.545.0**
  - 가볍고 깔끔한 아이콘 세트
  - SVG 기반 확장 가능
  - 일관된 디자인 언어

#### Form Management
- **React Hook Form 7.64.0**
  - 성능 최적화된 폼 관리
  - 내장 유효성 검사
  - 최소한의 리렌더링

### 폰트 시스템

#### Primary Fonts
```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

#### Font Loading Strategy
1. **Pretendard**: 한글 최적화 메인 폰트
2. **Inter**: 영문 및 숫자용 서브 폰트
3. **Noto Sans KR**: 한글 폴백 폰트

#### Font Performance
- 폰트 서브셋팅으로 용량 최적화
- `font-display: swap` 설정
- 중요한 텍스트에 폰트 preload 적용

## 🎨 디자인 시스템

### Color Palette
```scss
// Primary Colors
$ent-primary: #3b82f6;    // Main Blue
$ent-secondary: #8b5cf6;  // Purple Accent  
$ent-accent: #06b6d4;     // Cyan Accent

// Neutral Colors
$gray-50: #f9fafb;
$gray-100: #f3f4f6;
$gray-900: #111827;

// Semantic Colors
$success: #10b981;
$warning: #f59e0b;
$error: #ef4444;
$info: #3b82f6;
```

### Typography Scale
```scss
// Headings
.text-6xl { font-size: 3.75rem; line-height: 1; }
.text-5xl { font-size: 3rem; line-height: 1; }
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }

// Body Text
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-base { font-size: 1rem; line-height: 1.5rem; }
```

### Component Classes
```scss
// Buttons
.btn-primary {
  @apply bg-ent-primary hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl;
  @apply transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105;
  @apply focus:ring-4 focus:ring-blue-200;
}

.btn-secondary {
  @apply bg-white hover:bg-gray-50 text-ent-primary border-2 border-ent-primary;
  @apply font-semibold py-4 px-8 rounded-xl transition-all duration-300;
  @apply hover:shadow-lg focus:ring-4 focus:ring-blue-200;
}

// Cards
.card-premium {
  @apply bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl;
  @apply border border-gray-200 dark:border-gray-700 p-8;
  @apply transition-all duration-500 hover:scale-105;
  @apply bg-gradient-to-br from-white via-gray-50 to-white;
}
```

## 📱 반응형 디자인

### Breakpoint System
```scss
// Mobile First Approach
$breakpoints: (
  'sm': 640px,   // Small devices
  'md': 768px,   // Medium devices  
  'lg': 1024px,  // Large devices
  'xl': 1280px,  // Extra large devices
  '2xl': 1536px  // 2X large devices
);
```

### Grid System
```jsx
// Desktop: 3 columns
<div className="grid lg:grid-cols-3 gap-8">

// Tablet: 2 columns  
<div className="grid md:grid-cols-2 gap-6">

// Mobile: 1 column (default)
<div className="grid grid-cols-1 gap-4">
```

## ⚡ 성능 최적화

### Code Splitting
```jsx
// Lazy loading for heavy components
const BookingModal = lazy(() => import('./BookingModal'));

// Suspense wrapper
<Suspense fallback={<LoadingSpinner />}>
  <BookingModal />
</Suspense>
```

### Image Optimization
```jsx
// Responsive images with loading optimization
<img 
  src="/images/hero-bg.webp"
  alt="선우 이비인후과"
  loading="lazy"
  decoding="async"
  className="w-full h-auto"
/>
```

### Bundle Analysis
```bash
# Bundle size analysis
npm run build:analyze

# Key metrics
- Initial bundle: < 200KB gzipped
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
```

## 🔍 SEO 구현

### Meta Tags
```jsx
<Head>
  <title>선우 이비인후과 - 15년 경력 전문의 직접 진료</title>
  <meta name="description" content="미금역 3분 거리, 유종선 원장의 전문적인 이비인후과 진료. 비염, 중이염, 인후염 등 개인 맞춤 치료." />
  <meta name="keywords" content="이비인후과, 비염치료, 중이염, 인후염, 미금역, 분당" />
  
  {/* Open Graph */}
  <meta property="og:title" content="선우 이비인후과" />
  <meta property="og:description" content="15년 경력 전문의의 정확한 진단과 치료" />
  <meta property="og:image" content="/og-image.jpg" />
  
  {/* Schema.org JSON-LD */}
  <script type="application/ld+json">
    {JSON.stringify(medicalOrganizationSchema)}
  </script>
</Head>
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "선우 이비인후과",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "성남시",
    "addressRegion": "경기도",
    "addressCountry": "KR"
  },
  "telephone": "+82-31-XXX-XXXX",
  "medicalSpecialty": "Otorhinolaryngology"
}
```

## ♿ 접근성 구현

### ARIA Labels
```jsx
// 스크린 리더 지원
<button 
  aria-label="온라인 예약하기"
  aria-describedby="booking-description"
>
  예약하기
</button>

// 폼 접근성
<input
  aria-required="true"
  aria-invalid={errors.name ? 'true' : 'false'}
  aria-describedby="name-error"
/>
```

### Keyboard Navigation
```css
/* Focus visible 개선 */
:focus-visible {
  outline: 3px solid #3b82f6;
  outline-offset: 3px;
  box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.2);
}

/* Skip links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #3b82f6;
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  border-radius: 8px;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

### Color Contrast
```scss
// WCAG AA 준수 (4.5:1 이상)
$high-contrast-text: #000000;
$high-contrast-bg: #ffffff;

// 다크모드 대비
.dark {
  $high-contrast-text: #ffffff;
  $high-contrast-bg: #000000;
}
```

## 🧪 테스팅 전략

### Browser Testing
- **Chrome**: 최신 2버전
- **Firefox**: 최신 2버전  
- **Safari**: 최신 2버전
- **Edge**: 최신 2버전

### Device Testing
- **Mobile**: iPhone SE, iPhone 12, Samsung Galaxy S21
- **Tablet**: iPad, iPad Pro, Samsung Galaxy Tab
- **Desktop**: 1920x1080, 2560x1440, 4K

### Performance Metrics
```bash
# Lighthouse 목표 점수
Performance: 95+
Accessibility: 100
Best Practices: 95+
SEO: 100

# Core Web Vitals
LCP (Largest Contentful Paint): < 2.5s
FID (First Input Delay): < 100ms
CLS (Cumulative Layout Shift): < 0.1
```

## 🔐 보안 고려사항

### Content Security Policy
```http
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' fonts.googleapis.com;
  font-src 'self' fonts.gstatic.com;
  img-src 'self' data: https:;
```

### HTTPS 강제
```javascript
// 프로덕션에서 HTTPS 리다이렉트
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
```

## 📊 모니터링 및 분석

### Performance Monitoring
- **Web Vitals**: 실시간 성능 지표 추적
- **Error Tracking**: 런타임 에러 모니터링
- **User Analytics**: 사용자 행동 분석

### Key Metrics
```javascript
// 성능 지표 추적
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(`${entry.name}: ${entry.value}ms`);
  }
});

observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
```

---

*이 문서는 선우 이비인후과 웹사이트의 기술적 구현 사항을 상세히 설명합니다.*