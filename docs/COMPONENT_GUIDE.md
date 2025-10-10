# 컴포넌트 가이드 (Component Guide)

## 📋 컴포넌트 개요

선우 이비인후과 웹사이트는 모듈화된 React 컴포넌트로 구성되어 있습니다. 각 컴포넌트는 특정 기능을 담당하며, 재사용 가능하도록 설계되었습니다.

## 🧩 핵심 컴포넌트

### 1. Header.tsx
**네비게이션 및 테마 전환 기능**

```tsx
interface HeaderProps {
  // Props 정의 없음 (순수 컴포넌트)
}

const Header = () => {
  // ThemeContext를 통한 다크모드 관리
  // 스크롤 상태에 따른 헤더 스타일 변경
  // 모바일 메뉴 토글 기능
}
```

**주요 기능:**
- 반응형 네비게이션 메뉴
- 다크/라이트 모드 토글
- 스크롤 시 배경 변화 효과
- 모바일 햄버거 메뉴

**사용된 훅:**
- `useTheme()`: 테마 상태 관리
- `useState()`: 메뉴 토글 상태
- `useEffect()`: 스크롤 이벤트 리스너

---

### 2. Hero.tsx
**메인 히어로 섹션**

```tsx
const Hero = () => {
  // 메인 타이틀과 CTA 버튼
  // 병원 전문 분야 표시
  // 위치 및 연락처 정보
}
```

**주요 기능:**
- 그라디언트 배경 효과
- 전문 분야 그리드 표시
- 온라인 예약/전화상담 CTA
- 위치 정보 카드

**스타일 특징:**
- `gradient-bg` 클래스 사용
- 반응형 텍스트 크기 조정
- 호버 효과가 적용된 버튼

---

### 3. Services.tsx
**진료과목 섹션**

```tsx
interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
}

const Services = () => {
  const services: Service[] = [
    // 비과, 이과, 인후과, 특수검사
  ];
}
```

**주요 기능:**
- 4개 주요 진료과목 카드
- 각 과목별 세부 치료 항목
- 애니메이션 효과 적용
- 호버 시 상세 정보 표시

**애니메이션:**
- `AnimatedSection`으로 래핑
- 스크롤 트리거 애니메이션
- 카드별 지연 효과

---

### 4. About.tsx
**의료진 소개 섹션**

```tsx
interface DoctorInfo {
  name: string;
  title: string;
  experience: string;
  education: string[];
  specializations: string[];
}

const About = () => {
  const doctorInfo: DoctorInfo = {
    // 유종선 원장 정보
  };
}
```

**주요 기능:**
- 의사 프로필 및 경력 사항
- 병원 시설 및 특징
- 통계 정보 (CountUp 애니메이션)
- 인증 및 수상 내역

**특별 기능:**
- `CountUp` 컴포넌트로 숫자 애니메이션
- 교육 및 전문 분야 목록
- 병원 특징 카드 그리드

---

### 5. Reviews.tsx
**환자 후기 섹션**

```tsx
interface Review {
  id: number;
  name: string;
  age: number;
  condition: string;
  rating: number;
  comment: string;
  date: string;
}

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const reviews: Review[] = [
    // 환자 후기 데이터
  ];
}
```

**주요 기능:**
- 환자 후기 그리드 표시
- 별점 시각화
- 슬라이더 네비게이션
- 검증된 후기 표시

**인터랙션:**
- 자동 슬라이드 전환
- 수동 네비게이션 버튼
- 호버 시 애니메이션 효과

---

### 6. Footer.tsx
**푸터 섹션**

```tsx
interface ContactInfo {
  phone: string;
  address: string;
  subway: string;
  email: string;
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
}

const Footer = () => {
  const contactInfo: ContactInfo = {
    // 병원 연락처 정보
  };
}
```

**주요 기능:**
- 병원 정보 및 연락처
- 진료시간 안내
- 소셜 미디어 링크
- 응급 상담 CTA
- 빠른 링크 메뉴

**레이아웃:**
- 4단 그리드 구조
- 반응형 레이아웃
- 그라디언트 배경 효과

---

## 🎨 UI 컴포넌트

### UIComponents.tsx
**재사용 가능한 UI 요소들**

```tsx
// 로딩 스피너
export const LoadingSpinner = () => {
  return (
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ent-primary"></div>
  );
};

// 버튼 컴포넌트
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant, 
  size, 
  children, 
  onClick, 
  disabled 
}) => {
  // 버튼 구현
};

// 카드 컴포넌트
interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  className 
}) => {
  // 카드 구현
};
```

---

## 🎭 애니메이션 컴포넌트

### AnimatedComponents.tsx
**Framer Motion 애니메이션 래퍼**

```tsx
// 스크롤 트리거 애니메이션
interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  delay = 0, 
  className 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 숫자 카운트업 애니메이션
interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ 
  end, 
  duration = 2, 
  suffix = '' 
}) => {
  // 카운트업 구현
};

// 페이드 인 애니메이션
export const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
}> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};
```

---

## 📱 모달 컴포넌트

### BookingModal.tsx
**온라인 예약 모달**

```tsx
interface BookingForm {
  name: string;
  phone: string;
  email: string;
  department: string;
  preferredDate: string;
  preferredTime: string;
  symptoms: string;
  isFirstVisit: boolean;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<BookingForm>();

  const onSubmit = async (data: BookingForm) => {
    // 예약 제출 로직
  };

  // 모달 구현
};
```

**주요 기능:**
- React Hook Form을 사용한 폼 관리
- 실시간 유효성 검사
- 진료과목 선택 드롭다운
- 날짜/시간 선택기
- 제출 후 성공/오류 메시지

**유효성 검사:**
```tsx
const validationRules = {
  name: {
    required: '이름을 입력해주세요',
    minLength: { value: 2, message: '이름은 2글자 이상이어야 합니다' }
  },
  phone: {
    required: '전화번호를 입력해주세요',
    pattern: { 
      value: /^01[0-9]-[0-9]{4}-[0-9]{4}$/, 
      message: '올바른 전화번호 형식을 입력해주세요' 
    }
  },
  email: {
    required: '이메일을 입력해주세요',
    pattern: { 
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
      message: '올바른 이메일 형식을 입력해주세요' 
    }
  }
};
```

---

## 🎯 Context 및 훅

### ThemeContext.tsx
**테마 관리 컨텍스트**

```tsx
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // 로컬 스토리지에서 테마 설정 로드
    // HTML 클래스에 테마 적용
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

### useIntersectionObserver.tsx
**교차 관찰자 커스텀 훅**

```tsx
interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  { threshold = 0, root = null, rootMargin = '0%' }: UseIntersectionObserverProps = {}
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, threshold, root, rootMargin]);

  return isIntersecting;
};
```

---

## 🔧 컴포넌트 사용법

### 기본 사용법
```tsx
// App.tsx에서 컴포넌트 조합
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
// ... 기타 컴포넌트

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
```

### 애니메이션 적용
```tsx
// 컴포넌트에 애니메이션 추가
import { AnimatedSection } from './AnimatedComponents';

const MyComponent = () => {
  return (
    <AnimatedSection delay={0.2}>
      <div className="content">
        {/* 컨텐츠 */}
      </div>
    </AnimatedSection>
  );
};
```

### 모달 사용
```tsx
// 부모 컴포넌트에서 모달 상태 관리
const [showBookingModal, setShowBookingModal] = useState(false);

return (
  <>
    <button onClick={() => setShowBookingModal(true)}>
      예약하기
    </button>
    
    <BookingModal 
      isOpen={showBookingModal}
      onClose={() => setShowBookingModal(false)}
    />
  </>
);
```

---

## 📝 개발 가이드라인

### 컴포넌트 작성 규칙
1. **TypeScript 인터페이스 정의**: 모든 props에 대한 타입 정의
2. **함수형 컴포넌트 사용**: React.FC 타입 활용
3. **커스텀 훅 활용**: 로직 재사용성 확보
4. **접근성 고려**: ARIA 레이블 및 키보드 네비게이션
5. **성능 최적화**: React.memo, useMemo, useCallback 적절히 활용

### 스타일링 가이드
1. **Tailwind CSS 클래스 우선**: 인라인 스타일 최소화
2. **반응형 디자인**: 모바일 퍼스트 접근법
3. **다크모드 지원**: 모든 컴포넌트에 dark: 클래스 적용
4. **일관된 간격**: Tailwind 간격 시스템 활용

### 애니메이션 가이드
1. **성능 고려**: transform과 opacity 속성 우선 사용
2. **접근성**: prefers-reduced-motion 미디어 쿼리 지원
3. **적절한 타이밍**: 너무 빠르거나 느린 애니메이션 지양
4. **의미있는 애니메이션**: 사용자 경험 향상에 기여하는 애니메이션만 적용

---

*이 가이드는 선우 이비인후과 웹사이트의 모든 컴포넌트에 대한 상세한 설명을 제공합니다.*