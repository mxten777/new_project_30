# API 명세서 (API Specifications)

## 📋 API 개요

선우 이비인후과 웹사이트에서 사용하는 API 엔드포인트와 데이터 구조를 정의합니다. 현재는 프론트엔드 전용 웹사이트이지만, 향후 백엔드 API 연동을 위한 명세서입니다.

## 🔗 Base URL

```
Production: https://api.seonwoo-ent.com/v1
Development: http://localhost:3001/v1
```

## 🔐 인증

### API Key 인증 (향후 구현)
```http
Authorization: Bearer <API_KEY>
Content-Type: application/json
```

## 📞 예약 관리 API

### 1. 예약 생성

**Endpoint:** `POST /bookings`

**Request Body:**
```json
{
  "name": "홍길동",
  "phone": "010-1234-5678",
  "email": "hong@example.com",
  "department": "비과",
  "preferredDate": "2024-03-15",
  "preferredTime": "14:00",
  "symptoms": "코막힘이 지속되고 있습니다",
  "isFirstVisit": true,
  "birthDate": "1990-01-01",
  "gender": "M",
  "address": "서울시 강남구 테헤란로 123",
  "emergencyContact": "010-9876-5432",
  "insuranceType": "건강보험",
  "allergies": ["페니실린"],
  "currentMedications": ["타이레놀"],
  "additionalNotes": "오후 시간 선호"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "bookingId": "BK2024031500001",
    "status": "confirmed",
    "appointmentDateTime": "2024-03-15T14:00:00+09:00",
    "estimatedWaitTime": 30,
    "confirmationCode": "ABC123",
    "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANS..."
  },
  "message": "예약이 성공적으로 완료되었습니다."
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "SLOT_UNAVAILABLE",
    "message": "선택하신 시간에는 예약이 불가능합니다.",
    "details": {
      "availableSlots": [
        "2024-03-15T15:00:00+09:00",
        "2024-03-15T16:00:00+09:00"
      ]
    }
  }
}
```

### 2. 예약 조회

**Endpoint:** `GET /bookings/{bookingId}`

**Parameters:**
- `bookingId` (string): 예약 ID
- `phone` (string): 예약자 전화번호 (인증용)

**Response:**
```json
{
  "success": true,
  "data": {
    "bookingId": "BK2024031500001",
    "patient": {
      "name": "홍길동",
      "phone": "010-1234-5678",
      "email": "hong@example.com"
    },
    "appointment": {
      "department": "비과",
      "doctor": "유종선",
      "date": "2024-03-15",
      "time": "14:00",
      "status": "confirmed",
      "room": "진료실 1"
    },
    "symptoms": "코막힘이 지속되고 있습니다",
    "createdAt": "2024-03-10T10:30:00+09:00",
    "updatedAt": "2024-03-10T10:30:00+09:00"
  }
}
```

### 3. 예약 수정

**Endpoint:** `PUT /bookings/{bookingId}`

**Request Body:**
```json
{
  "preferredDate": "2024-03-16",
  "preferredTime": "15:00",
  "phone": "010-1234-5678"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "bookingId": "BK2024031500001",
    "newAppointmentDateTime": "2024-03-16T15:00:00+09:00",
    "status": "rescheduled"
  },
  "message": "예약이 성공적으로 변경되었습니다."
}
```

### 4. 예약 취소

**Endpoint:** `DELETE /bookings/{bookingId}`

**Request Body:**
```json
{
  "phone": "010-1234-5678",
  "reason": "개인사정으로 인한 취소"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "bookingId": "BK2024031500001",
    "status": "cancelled",
    "refund": {
      "eligible": false,
      "reason": "24시간 전 취소 정책"
    }
  },
  "message": "예약이 취소되었습니다."
}
```

## 📅 예약 가능 시간 API

### 1. 예약 가능한 날짜 조회

**Endpoint:** `GET /availability/dates`

**Parameters:**
- `department` (string): 진료과목 (비과, 이과, 인후과, 특수검사)
- `month` (string): 조회할 월 (YYYY-MM)

**Response:**
```json
{
  "success": true,
  "data": {
    "availableDates": [
      {
        "date": "2024-03-15",
        "dayOfWeek": "금요일",
        "isHoliday": false,
        "availableSlots": 12,
        "status": "available"
      },
      {
        "date": "2024-03-16",
        "dayOfWeek": "토요일",
        "isHoliday": false,
        "availableSlots": 8,
        "status": "limited"
      }
    ],
    "holidays": [
      {
        "date": "2024-03-20",
        "name": "춘분의 날"
      }
    ]
  }
}
```

### 2. 특정 날짜 예약 가능 시간 조회

**Endpoint:** `GET /availability/slots`

**Parameters:**
- `date` (string): 날짜 (YYYY-MM-DD)
- `department` (string): 진료과목

**Response:**
```json
{
  "success": true,
  "data": {
    "date": "2024-03-15",
    "department": "비과",
    "doctor": "유종선",
    "slots": [
      {
        "time": "09:00",
        "available": true,
        "estimatedDuration": 20
      },
      {
        "time": "09:30",
        "available": true,
        "estimatedDuration": 20
      },
      {
        "time": "10:00",
        "available": false,
        "reason": "이미 예약됨"
      },
      {
        "time": "14:00",
        "available": true,
        "estimatedDuration": 20
      }
    ],
    "lunchBreak": {
      "start": "12:30",
      "end": "14:00"
    }
  }
}
```

## 👨‍⚕️ 의료진 정보 API

### 1. 의료진 목록 조회

**Endpoint:** `GET /doctors`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "DR001",
      "name": "유종선",
      "title": "원장",
      "specialties": ["알레르기성 비염", "중이염", "코골이 치료"],
      "education": [
        "연세대학교 의과대학 졸업",
        "세브란스병원 이비인후과 전공의",
        "대한이비인후과학회 정회원"
      ],
      "experience": "15년+",
      "languages": ["한국어", "영어"],
      "consultationFee": 30000,
      "profileImage": "/images/doctor-profile.jpg",
      "schedule": {
        "monday": ["09:00-12:30", "14:00-18:00"],
        "tuesday": ["09:00-12:30", "14:00-18:00"],
        "wednesday": ["09:00-12:30", "14:00-18:00"],
        "thursday": ["09:00-12:30", "14:00-18:00"],
        "friday": ["09:00-12:30", "14:00-18:00"],
        "saturday": ["09:00-13:00"],
        "sunday": ["휴진"]
      }
    }
  ]
}
```

## 🏥 병원 정보 API

### 1. 병원 기본 정보

**Endpoint:** `GET /hospital/info`

**Response:**
```json
{
  "success": true,
  "data": {
    "name": "선우 이비인후과",
    "address": {
      "street": "경기도 성남시 분당구 미금역 인근",
      "zipCode": "13561",
      "coordinates": {
        "latitude": 37.350123,
        "longitude": 127.108456
      }
    },
    "contact": {
      "phone": "031-XXX-XXXX",
      "fax": "031-XXX-XXXY",
      "email": "info@seonwoo-ent.com",
      "website": "https://seonwoo-ent.com"
    },
    "hours": {
      "weekdays": "09:00 - 18:00",
      "saturday": "09:00 - 13:00",
      "sunday": "휴진",
      "lunchBreak": "12:30 - 14:00",
      "holidays": "휴진"
    },
    "facilities": [
      "내시경실",
      "청력검사실",
      "CT촬영실",
      "물리치료실",
      "대기실",
      "주차장"
    ],
    "insurance": [
      "건강보험",
      "의료급여",
      "산재보험",
      "자동차보험"
    ],
    "certifications": [
      "의료기관인증",
      "개인정보보호 인증",
      "ISO 9001"
    ]
  }
}
```

### 2. 진료과목 정보

**Endpoint:** `GET /departments`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "DEPT001",
      "name": "비과",
      "description": "코와 부비동 질환 전문 진료",
      "conditions": [
        "알레르기성 비염",
        "만성 비염",
        "축농증(부비동염)",
        "코막힘",
        "후각장애",
        "코피"
      ],
      "treatments": [
        "약물치료",
        "레이저치료",
        "수술치료",
        "면역치료"
      ],
      "equipment": [
        "비내시경",
        "CT 스캔",
        "알레르기 검사기"
      ],
      "consultationFee": 30000,
      "averageTreatmentTime": 20
    },
    {
      "id": "DEPT002",
      "name": "이과",
      "description": "귀 질환 및 청력 검사 전문",
      "conditions": [
        "중이염",
        "외이염",
        "난청",
        "이명",
        "어지럼증",
        "귀지제거"
      ],
      "treatments": [
        "약물치료",
        "귀지제거",
        "고막절개술",
        "보청기 상담"
      ],
      "equipment": [
        "청력검사기",
        "고막검사기",
        "평형기능검사기"
      ],
      "consultationFee": 30000,
      "averageTreatmentTime": 25
    }
  ]
}
```

## 💬 상담 문의 API

### 1. 온라인 상담 요청

**Endpoint:** `POST /consultations`

**Request Body:**
```json
{
  "name": "김철수",
  "phone": "010-9876-5432",
  "email": "kim@example.com",
  "category": "증상상담",
  "subject": "코막힘 증상 문의",
  "message": "3주째 계속되는 코막힘으로 불편합니다. 병원 방문 전 간단한 상담 부탁드립니다.",
  "attachments": [
    {
      "filename": "symptom_photo.jpg",
      "url": "https://storage.example.com/uploads/symptom_photo.jpg"
    }
  ],
  "preferredContactMethod": "email",
  "urgency": "normal"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "consultationId": "CONS2024031500001",
    "status": "pending",
    "estimatedResponseTime": "24시간 이내",
    "ticketNumber": "#12345"
  },
  "message": "상담 요청이 접수되었습니다. 빠른 시일 내에 답변드리겠습니다."
}
```

### 2. 상담 내역 조회

**Endpoint:** `GET /consultations/{consultationId}`

**Response:**
```json
{
  "success": true,
  "data": {
    "consultationId": "CONS2024031500001",
    "status": "answered",
    "question": {
      "message": "3주째 계속되는 코막힘으로 불편합니다.",
      "createdAt": "2024-03-15T10:00:00+09:00"
    },
    "answer": {
      "message": "증상을 듣고 보니 알레르기성 비염의 가능성이 높습니다. 정확한 진단을 위해 내원하시어 검사받아보시기 바랍니다.",
      "doctor": "유종선",
      "createdAt": "2024-03-15T15:30:00+09:00"
    },
    "followUp": {
      "required": true,
      "message": "2주 후 재방문 권장"
    }
  }
}
```

## 📊 통계 및 분석 API

### 1. 대시보드 데이터

**Endpoint:** `GET /analytics/dashboard`

**Response:**
```json
{
  "success": true,
  "data": {
    "overview": {
      "totalBookings": 1247,
      "todayBookings": 23,
      "weeklyGrowth": "+12%",
      "patientSatisfaction": 4.8
    },
    "bookingStats": {
      "byDepartment": {
        "비과": 45,
        "이과": 32,
        "인후과": 28,
        "특수검사": 15
      },
      "byTimeSlot": {
        "09:00-12:00": 40,
        "14:00-18:00": 60
      }
    },
    "popularServices": [
      {
        "service": "알레르기 검사",
        "count": 156,
        "growth": "+8%"
      },
      {
        "service": "청력 검사",
        "count": 134,
        "growth": "+5%"
      }
    ]
  }
}
```

## 🔔 알림 API

### 1. 예약 알림 설정

**Endpoint:** `POST /notifications/booking-reminder`

**Request Body:**
```json
{
  "bookingId": "BK2024031500001",
  "reminderTypes": ["sms", "email"],
  "timeBefore": [24, 2], // 24시간 전, 2시간 전
  "phone": "010-1234-5678",
  "email": "patient@example.com"
}
```

### 2. 푸시 알림 구독

**Endpoint:** `POST /notifications/subscribe`

**Request Body:**
```json
{
  "endpoint": "https://fcm.googleapis.com/fcm/send/...",
  "keys": {
    "p256dh": "key-data",
    "auth": "auth-data"
  },
  "preferences": {
    "appointmentReminders": true,
    "healthTips": false,
    "promotions": false
  }
}
```

## 📱 모바일 앱 API

### 1. 앱 버전 체크

**Endpoint:** `GET /app/version`

**Response:**
```json
{
  "success": true,
  "data": {
    "latestVersion": "1.2.0",
    "minimumVersion": "1.0.0",
    "updateRequired": false,
    "updateUrl": "https://play.google.com/store/apps/details?id=com.seonwoo.ent",
    "releaseNotes": [
      "예약 시스템 개선",
      "UI/UX 향상",
      "버그 수정"
    ]
  }
}
```

## 🚨 에러 코드

| 코드 | 메시지 | 설명 |
|------|--------|------|
| 400 | BAD_REQUEST | 잘못된 요청 |
| 401 | UNAUTHORIZED | 인증 실패 |
| 403 | FORBIDDEN | 권한 없음 |
| 404 | NOT_FOUND | 리소스를 찾을 수 없음 |
| 409 | CONFLICT | 예약 시간 중복 |
| 422 | VALIDATION_ERROR | 유효성 검사 실패 |
| 429 | RATE_LIMIT_EXCEEDED | 요청 제한 초과 |
| 500 | INTERNAL_SERVER_ERROR | 서버 내부 오류 |

## 📝 사용 예시

### JavaScript/TypeScript 클라이언트

```typescript
// API 클라이언트 클래스
class SeonwooENTAPI {
  private baseURL = 'https://api.seonwoo-ent.com/v1';
  
  async createBooking(bookingData: BookingRequest): Promise<BookingResponse> {
    const response = await fetch(`${this.baseURL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(bookingData)
    });
    
    if (!response.ok) {
      throw new Error('예약 생성 실패');
    }
    
    return response.json();
  }
  
  async getAvailableSlots(date: string, department: string): Promise<AvailabilityResponse> {
    const params = new URLSearchParams({ date, department });
    const response = await fetch(`${this.baseURL}/availability/slots?${params}`);
    return response.json();
  }
}

// 사용 예시
const api = new SeonwooENTAPI();

// 예약 생성
const booking = await api.createBooking({
  name: '홍길동',
  phone: '010-1234-5678',
  department: '비과',
  preferredDate: '2024-03-15',
  preferredTime: '14:00'
});

console.log(`예약 ID: ${booking.data.bookingId}`);
```

---

*이 API 명세서는 선우 이비인후과 웹사이트의 향후 백엔드 개발을 위한 가이드라인입니다.*