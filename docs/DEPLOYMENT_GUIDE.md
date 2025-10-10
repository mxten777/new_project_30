# 배포 가이드 (Deployment Guide)

## 🚀 배포 개요

선우 이비인후과 웹사이트는 다양한 호스팅 플랫폼에 배포할 수 있습니다. 이 가이드는 주요 배포 옵션과 설정 방법을 제공합니다.

## 📋 배포 전 체크리스트

### ✅ 코드 품질 검증
```bash
# 타입 검사
npm run type-check

# 린팅
npm run lint

# 빌드 테스트
npm run build

# 번들 분석 (선택사항)
npm run build:analyze
```

### ✅ 환경 변수 설정
```bash
# .env.production
VITE_API_URL=https://api.seonwoo-ent.com
VITE_ENVIRONMENT=production
VITE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_SITE_URL=https://seonwoo-ent.com
```

### ✅ SEO 최적화 확인
- [ ] 메타 태그 설정 완료
- [ ] sitemap.xml 생성
- [ ] robots.txt 설정
- [ ] Open Graph 이미지 준비
- [ ] 구조화된 데이터 확인

### ✅ 성능 최적화 확인
- [ ] 이미지 최적화 (WebP, 적절한 크기)
- [ ] 폰트 최적화 (서브셋팅, preload)
- [ ] 번들 사이즈 확인 (< 500KB)
- [ ] Lighthouse 점수 95+ 달성

## 🌐 배포 옵션

### 1. Vercel (추천)
**특징**: React/Next.js에 최적화, 자동 배포, CDN, 서버리스

#### 설정 방법
```bash
# Vercel CLI 설치
npm i -g vercel

# 프로젝트 초기화
vercel

# 환경 변수 설정
vercel env add VITE_API_URL production
vercel env add VITE_ENVIRONMENT production
```

#### vercel.json 설정
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    },
    {
      "source": "/(.*)\\.(js|css|woff2|woff|ttf|otf)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 2. Netlify
**특징**: 정적 사이트 전문, 폼 처리, A/B 테스트

#### 설정 방법
```bash
# Netlify CLI 설치
npm install -g netlify-cli

# 배포
netlify deploy --prod --dir=dist
```

#### netlify.toml 설정
```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 3. AWS S3 + CloudFront
**특징**: 확장성, 커스텀 도메인, 글로벌 CDN

#### 배포 스크립트
```bash
#!/bin/bash
# deploy.sh

# 빌드
npm run build

# S3 업로드
aws s3 sync dist/ s3://seonwoo-ent-website --delete

# CloudFront 캐시 무효화
aws cloudfront create-invalidation --distribution-id E1234567890123 --paths "/*"

echo "배포 완료!"
```

#### S3 버킷 정책
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::seonwoo-ent-website/*"
    }
  ]
}
```

### 4. GitHub Pages
**특징**: GitHub 통합, 무료, 간단한 설정

#### GitHub Actions 워크플로우
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        VITE_API_URL: ${{ secrets.VITE_API_URL }}
        VITE_ENVIRONMENT: production
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 🔧 CI/CD 파이프라인

### Vercel 자동 배포
```yaml
# vercel.json - Git 통합
{
  "git": {
    "deploymentEnabled": {
      "main": true
    }
  },
  "github": {
    "silent": true,
    "autoAlias": false
  }
}
```

### GitHub Actions - 고급 워크플로우
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - run: npm ci
    - run: npm run lint
    - run: npm run type-check
    - run: npm run test
    
  lighthouse:
    needs: test
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - run: npm ci
    - run: npm run build
    
    - name: Lighthouse CI
      run: |
        npm install -g @lhci/cli
        lhci autorun
      env:
        LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
  
  deploy:
    needs: [test, lighthouse]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - run: npm ci
    - run: npm run build
      env:
        VITE_API_URL: ${{ secrets.VITE_API_URL }}
        VITE_ENVIRONMENT: production
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## 📊 성능 모니터링

### Lighthouse CI 설정
```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      startServerCommand: 'npm run preview',
      startServerReadyPattern: 'Local:   http://localhost:3000',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 1.0 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 1.0 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

### Web Vitals 모니터링
```typescript
// src/utils/analytics.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric: any) {
  // Google Analytics, Vercel Analytics, 또는 커스텀 분석 서비스로 전송
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_value: Math.round(metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

// 모든 Web Vitals 측정
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

## 🔐 보안 설정

### Content Security Policy
```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; 
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
               font-src 'self' https://fonts.gstatic.com; 
               img-src 'self' data: https:; 
               connect-src 'self' https://api.seonwoo-ent.com;">
```

### Security Headers
```typescript
// vercel.json에서 보안 헤더 설정
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ]
}
```

## 📈 SEO 및 최적화

### sitemap.xml 생성
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seonwoo-ent.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://seonwoo-ent.com/#services</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### robots.txt
```txt
User-agent: *
Allow: /

Sitemap: https://seonwoo-ent.com/sitemap.xml
```

## 🏥 도메인 설정

### DNS 설정 (예: Cloudflare)
```
Type    Name    Content                 TTL
A       @       76.76.19.61            Auto
CNAME   www     seonwoo-ent.com        Auto
```

### SSL 인증서
- Let's Encrypt (무료)
- Cloudflare SSL (무료)
- 프리미엄 SSL 인증서

## 📱 PWA 설정 (선택사항)

### manifest.json
```json
{
  "name": "선우 이비인후과",
  "short_name": "선우ENT",
  "description": "15년 경력 전문의의 정확한 진단과 치료",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Service Worker
```typescript
// sw.ts
const CACHE_NAME = 'seonwoo-ent-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js'
];

self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});
```

## 🔍 모니터링 및 알림

### Uptime 모니터링
```javascript
// UptimeRobot, Pingdom, 또는 커스텀 모니터링
const monitoringConfig = {
  url: 'https://seonwoo-ent.com',
  interval: 300, // 5분마다 체크
  alerts: {
    email: 'admin@seonwoo-ent.com',
    slack: 'webhook-url'
  }
};
```

### Error Tracking
```typescript
// Sentry 또는 Bugsnag 설정
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN,
  environment: process.env.VITE_ENVIRONMENT,
});
```

## 📝 배포 후 체크리스트

### ✅ 기능 테스트
- [ ] 모든 페이지 로딩 확인
- [ ] 예약 모달 기능 테스트
- [ ] 다크모드 토글 테스트
- [ ] 반응형 레이아웃 확인
- [ ] 폼 제출 기능 테스트

### ✅ 성능 확인
- [ ] Lighthouse 점수 확인
- [ ] 페이지 로딩 속도 (< 3초)
- [ ] 이미지 최적화 확인
- [ ] CDN 캐싱 작동 확인

### ✅ SEO 확인
- [ ] Google Search Console 등록
- [ ] 메타 태그 크롤링 확인
- [ ] 구조화된 데이터 검증
- [ ] 사이트맵 제출

### ✅ 보안 확인
- [ ] HTTPS 리다이렉트 확인
- [ ] 보안 헤더 적용 확인
- [ ] 취약점 스캔 수행

---

*이 가이드는 선우 이비인후과 웹사이트의 안전하고 효율적인 배포를 위한 종합적인 방법을 제공합니다.*