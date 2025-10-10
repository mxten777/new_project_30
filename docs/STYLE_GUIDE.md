# 스타일 가이드 (Style Guide)

## 🎨 디자인 시스템 개요

선우 이비인후과 웹사이트의 일관된 디자인 언어와 시각적 정체성을 위한 종합적인 스타일 가이드입니다.

## 🌈 컬러 시스템

### Primary Colors (주요 색상)
```scss
// 메인 브랜드 컬러
$ent-primary: #3b82f6;    // Medical Blue - 신뢰감과 전문성
$ent-secondary: #8b5cf6;  // Purple Accent - 혁신과 케어
$ent-accent: #06b6d4;     // Cyan Accent - 생명력과 건강

// 그라디언트 조합
$gradient-primary: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
$gradient-secondary: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
$gradient-accent: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
```

### Semantic Colors (의미적 색상)
```scss
// 성공 (Success)
$success-50: #f0fdf4;
$success-500: #22c55e;
$success-700: #15803d;

// 경고 (Warning)
$warning-50: #fffbeb;
$warning-500: #f59e0b;
$warning-700: #a16207;

// 오류 (Error)
$error-50: #fef2f2;
$error-500: #ef4444;
$error-700: #b91c1c;

// 정보 (Info)
$info-50: #eff6ff;
$info-500: #3b82f6;
$info-700: #1d4ed8;
```

### Neutral Colors (중성 색상)
```scss
// 라이트 모드
$gray-50: #f9fafb;    // 배경색
$gray-100: #f3f4f6;   // 카드 배경
$gray-200: #e5e7eb;   // 경계선
$gray-300: #d1d5db;   // 비활성 요소
$gray-400: #9ca3af;   // 보조 텍스트
$gray-500: #6b7280;   // 플레이스홀더
$gray-600: #4b5563;   // 본문 텍스트
$gray-700: #374151;   // 제목 텍스트
$gray-800: #1f2937;   // 강조 텍스트
$gray-900: #111827;   // 헤딩

// 다크 모드
$dark-50: #18181b;    // 배경색
$dark-100: #27272a;   // 카드 배경
$dark-200: #3f3f46;   // 경계선
$dark-300: #52525b;   // 비활성 요소
$dark-400: #71717a;   // 보조 텍스트
$dark-500: #a1a1aa;   // 플레이스홀더
$dark-600: #d4d4d8;   // 본문 텍스트
$dark-700: #e4e4e7;   // 제목 텍스트
$dark-800: #f4f4f5;   // 강조 텍스트
$dark-900: #fafafa;   // 헤딩
```

### Color Usage (색상 사용법)

#### 브랜드 컬러 적용
```css
/* Primary - 주요 액션 버튼, 링크, 활성 상태 */
.btn-primary { background-color: #3b82f6; }
.link-primary { color: #3b82f6; }

/* Secondary - 보조 액션, 강조 요소 */
.btn-secondary { color: #8b5cf6; }
.accent-secondary { border-color: #8b5cf6; }

/* Accent - 하이라이트, 특별한 요소 */
.highlight-accent { background-color: #06b6d4; }
```

#### 접근성 고려 컬러 대비
```css
/* WCAG AA 준수 - 4.5:1 이상 명도 대비 */
.text-on-primary { color: #ffffff; } /* #3b82f6 배경 */
.text-on-light { color: #1f2937; }   /* #f9fafb 배경 */
.text-on-dark { color: #f9fafb; }    /* #1f2937 배경 */
```

## 🔤 타이포그래피

### Font Stack (폰트 스택)
```css
/* Primary Font Family */
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;

/* Display Font (헤딩용) */
.font-display {
  font-family: 'Pretendard', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
  letter-spacing: -0.025em;
}

/* Body Font (본문용) */
.font-body {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

/* Monospace Font (코드용) */
.font-mono {
  font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace;
}
```

### Type Scale (타이포그래피 스케일)
```scss
// Headings (제목)
.text-6xl { font-size: 3.75rem; line-height: 1;      } // 60px
.text-5xl { font-size: 3rem;    line-height: 1;      } // 48px
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; } // 36px
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } // 30px
.text-2xl { font-size: 1.5rem;  line-height: 2rem;   } // 24px
.text-xl  { font-size: 1.25rem; line-height: 1.75rem; } // 20px

// Body Text (본문)
.text-lg   { font-size: 1.125rem; line-height: 1.75rem; } // 18px
.text-base { font-size: 1rem;     line-height: 1.5rem;  } // 16px
.text-sm   { font-size: 0.875rem; line-height: 1.25rem; } // 14px
.text-xs   { font-size: 0.75rem;  line-height: 1rem;    } // 12px
```

### Font Weights (폰트 굵기)
```scss
.font-thin       { font-weight: 100; } // 매우 얇음
.font-extralight { font-weight: 200; } // 매우 가벼움
.font-light      { font-weight: 300; } // 가벼움
.font-normal     { font-weight: 400; } // 보통 (기본값)
.font-medium     { font-weight: 500; } // 중간
.font-semibold   { font-weight: 600; } // 준굵음
.font-bold       { font-weight: 700; } // 굵음
.font-extrabold  { font-weight: 800; } // 매우 굵음
.font-black      { font-weight: 900; } // 가장 굵음
```

### Typography Usage (타이포그래피 사용법)

#### 제목 계층 구조
```css
/* H1 - 페이지 메인 제목 */
h1, .h1 {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: #111827;
}

/* H2 - 섹션 제목 */
h2, .h2 {
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.015em;
  color: #1f2937;
}

/* H3 - 서브섹션 제목 */
h3, .h3 {
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.3;
  color: #374151;
}
```

#### 본문 텍스트
```css
/* 본문 - 기본 */
p, .body {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #4b5563;
}

/* 본문 - 강조 */
.body-emphasis {
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.7;
  color: #374151;
}

/* 본문 - 보조 */
.body-secondary {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6b7280;
}
```

#### 특수 텍스트 스타일
```css
/* 인용문 */
blockquote {
  font-size: 1.25rem;
  font-weight: 500;
  font-style: italic;
  color: #374151;
  border-left: 4px solid #3b82f6;
  padding-left: 1rem;
}

/* 캡션 */
.caption {
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* 라벨 */
.label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
}
```

## 📐 Spacing & Layout (간격 및 레이아웃)

### Spacing Scale (간격 스케일)
```scss
$spacing: (
  0: 0,
  1: 0.25rem,   // 4px
  2: 0.5rem,    // 8px
  3: 0.75rem,   // 12px
  4: 1rem,      // 16px
  5: 1.25rem,   // 20px
  6: 1.5rem,    // 24px
  8: 2rem,      // 32px
  10: 2.5rem,   // 40px
  12: 3rem,     // 48px
  16: 4rem,     // 64px
  20: 5rem,     // 80px
  24: 6rem,     // 96px
  32: 8rem,     // 128px
);
```

### Container System (컨테이너 시스템)
```css
.container-custom {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container-custom {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container-custom {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
```

### Section Spacing (섹션 간격)
```css
.section-padding {
  padding-top: 5rem;    /* 80px */
  padding-bottom: 5rem; /* 80px */
}

@media (min-width: 768px) {
  .section-padding {
    padding-top: 6rem;    /* 96px */
    padding-bottom: 6rem; /* 96px */
  }
}

@media (min-width: 1024px) {
  .section-padding {
    padding-top: 8rem;    /* 128px */
    padding-bottom: 8rem; /* 128px */
  }
}
```

## 🎯 Component Styles (컴포넌트 스타일)

### Buttons (버튼)
```css
/* Base Button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  text-decoration: none;
  min-height: 44px; /* 터치 접근성 */
}

/* Primary Button */
.btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: #ffffff;
  padding: 0.75rem 2rem;
  box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.25);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  box-shadow: 0 6px 20px 0 rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px 0 rgba(59, 130, 246, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background: #ffffff;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  padding: 0.75rem 2rem;
}

.btn-secondary:hover {
  background: #f0f9ff;
  border-color: #2563eb;
  color: #2563eb;
  transform: translateY(-1px);
}

/* Button Sizes */
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
}

.btn-xl {
  padding: 1.25rem 3rem;
  font-size: 1.25rem;
}
```

### Cards (카드)
```css
.card {
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.1), 0 4px 10px 0 rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.card-premium {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid #e2e8f0;
  border-radius: 1.5rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.card-premium::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
}

/* Dark Mode */
.dark .card {
  background: #1f2937;
  border-color: #374151;
  color: #f9fafb;
}

.dark .card-premium {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  border-color: #4b5563;
}
```

### Forms (폼)
```css
/* Input Fields */
.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: #ffffff;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input:invalid {
  border-color: #ef4444;
}

.form-input:valid {
  border-color: #10b981;
}

/* Labels */
.form-label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

/* Error Messages */
.form-error {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  font-weight: 500;
}

/* Success Messages */
.form-success {
  color: #10b981;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  font-weight: 500;
}
```

## 🎭 Animation & Transitions (애니메이션 및 전환)

### Transition Timing (전환 타이밍)
```css
/* Duration */
.duration-75   { transition-duration: 75ms; }
.duration-100  { transition-duration: 100ms; }
.duration-150  { transition-duration: 150ms; }
.duration-200  { transition-duration: 200ms; }
.duration-300  { transition-duration: 300ms; }
.duration-500  { transition-duration: 500ms; }
.duration-700  { transition-duration: 700ms; }
.duration-1000 { transition-duration: 1000ms; }

/* Timing Functions */
.ease-linear { transition-timing-function: linear; }
.ease-in     { transition-timing-function: cubic-bezier(0.4, 0, 1, 1); }
.ease-out    { transition-timing-function: cubic-bezier(0, 0, 0.2, 1); }
.ease-in-out { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
```

### Common Animations (일반적인 애니메이션)
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to   { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

/* Scale In */
@keyframes scaleIn {
  from { 
    opacity: 0; 
    transform: scale(0.9); 
  }
  to   { 
    opacity: 1; 
    transform: scale(1); 
  }
}

/* Pulse */
@keyframes pulse {
  0%, 100% { 
    opacity: 1; 
  }
  50% { 
    opacity: 0.7; 
  }
}

/* Bounce */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

/* Usage Classes */
.animate-fadeIn   { animation: fadeIn 0.6s ease-out; }
.animate-slideUp  { animation: slideUp 0.6s ease-out; }
.animate-scaleIn  { animation: scaleIn 0.4s ease-out; }
.animate-pulse    { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
.animate-bounce   { animation: bounce 1s infinite; }
```

### Hover Effects (호버 효과)
```css
/* Lift Effect */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* Glow Effect */
.hover-glow {
  transition: box-shadow 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
}

/* Scale Effect */
.hover-scale {
  transition: transform 0.2s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}
```

## 📱 Responsive Design (반응형 디자인)

### Breakpoints (브레이크포인트)
```scss
$breakpoints: (
  xs: 0,
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2xl: 1536px
);

/* Usage */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Flexible Grid (유연한 그리드)
```css
/* Mobile First Grid */
.grid-responsive {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
```

## ♿ Accessibility (접근성)

### Focus States (포커스 상태)
```css
/* Enhanced Focus Ring */
:focus-visible {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.2);
}

/* Skip Link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #3b82f6;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  z-index: 100;
}

.skip-link:focus {
  top: 6px;
}
```

### High Contrast Mode (고대비 모드)
```css
@media (prefers-contrast: high) {
  .btn-primary,
  .btn-secondary {
    border: 2px solid currentColor;
  }
  
  .card {
    border-width: 2px;
  }
  
  .text-gray-600,
  .text-gray-500 {
    color: #000000 !important;
  }
}
```

### Reduced Motion (모션 감소)
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .animate-pulse,
  .animate-bounce {
    animation: none;
  }
}
```

## 🌙 Dark Mode (다크 모드)

### Color Mappings (색상 매핑)
```css
/* Light Mode (기본값) */
:root {
  --color-bg: #ffffff;
  --color-text: #1f2937;
  --color-text-secondary: #6b7280;
  --color-border: #e5e7eb;
  --color-card: #ffffff;
}

/* Dark Mode */
.dark {
  --color-bg: #111827;
  --color-text: #f9fafb;
  --color-text-secondary: #d1d5db;
  --color-border: #374151;
  --color-card: #1f2937;
}

/* Usage */
body {
  background-color: var(--color-bg);
  color: var(--color-text);
}

.card {
  background-color: var(--color-card);
  border-color: var(--color-border);
}
```

## 📏 Standards & Guidelines (표준 및 가이드라인)

### Naming Conventions (명명 규칙)
```css
/* BEM Methodology */
.block { }
.block__element { }
.block--modifier { }

/* 예시 */
.card { }
.card__header { }
.card__body { }
.card__footer { }
.card--premium { }
.card--large { }
```

### Performance Considerations (성능 고려사항)
```css
/* GPU 가속 사용 */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
}

/* 효율적인 애니메이션 속성 */
.efficient-animation {
  /* 권장: transform, opacity */
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  /* 비권장: left, top, width, height */
  /* transition: left 0.3s ease; */
}
```

### Code Organization (코드 구조)
```scss
// 1. Variables
@import 'variables/colors';
@import 'variables/typography';
@import 'variables/spacing';

// 2. Base
@import 'base/reset';
@import 'base/typography';

// 3. Components
@import 'components/buttons';
@import 'components/cards';
@import 'components/forms';

// 4. Utilities
@import 'utilities/spacing';
@import 'utilities/text';
@import 'utilities/display';
```

---

*이 스타일 가이드는 선우 이비인후과 웹사이트의 일관된 디자인 시스템을 유지하기 위한 종합적인 참고 자료입니다.*