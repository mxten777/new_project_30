/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary ENT Colors
        'ent-primary': '#2563EB',
        'ent-secondary': '#7C3AED', 
        'ent-accent': '#059669',
        
        // Medical Specialty Colors
        'breathing-blue': '#0EA5E9',
        'hearing-purple': '#8B5CF6',
        'throat-green': '#10B981',
        
        // Status Colors
        'success': '#059669',
        'warning': '#D97706',
        'error': '#DC2626',
        'info': '#2563EB',
      },
      fontFamily: {
        'sans': [
          'Pretendard',
          'Inter',
          'Noto Sans KR',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Helvetica Neue"',
          'sans-serif'
        ],
        'display': [
          'Pretendard',
          'Inter',
          'Noto Sans KR',
          'system-ui',
          'sans-serif'
        ],
        'medical': [
          'Inter',
          'Pretendard',
          'Noto Sans KR',
          'system-ui',
          'sans-serif'
        ]
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}