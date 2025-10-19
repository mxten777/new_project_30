import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="gradient-bg text-white py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-white/20 mb-2 sm:mb-3">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-white/90 font-semibold text-xs sm:text-sm">15년 경력 전문의 직접 진료</span>
              </div>
              
              <h1 className="text-base sm:text-xl md:text-3xl lg:text-7xl font-display font-black leading-none tracking-tight" style={{fontSize: 'clamp(1rem, 4vw, 2.5rem)', lineHeight: '1'}}>
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  선우 이비인후과
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-blue-100/90 font-medium leading-relaxed">
                <span className="block mb-1 sm:mb-2 text-sm sm:text-base">미금역 3분, 유종선 원장의</span>
                <span className="text-white font-bold text-base sm:text-lg">전문적이고 정확한 진료</span>
              </p>
            </div>

            {/* Specialties */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {[
                "코막힘·비염 전문치료",
                "중이염·난청 정밀진단", 
                "목·인후 질환 특화진료",
                "알레르기 원인별 맞춤치료"
              ].map((specialty, index) => (
                <div key={index} className="flex items-center space-x-2 sm:space-x-3 bg-white/10 rounded-lg p-2 sm:p-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-xs sm:text-sm md:text-base leading-tight">{specialty}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="btn-primary text-base sm:text-lg md:text-xl py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-bold shadow-2xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 w-full sm:min-w-[180px]">
                <span>온라인 예약</span>
                <ArrowRight size={16} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary text-base sm:text-lg md:text-xl py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-bold border-2 border-white/50 hover:border-white shadow-xl hover:shadow-white/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 w-full sm:min-w-[180px]">
                <Phone size={16} className="sm:w-5 sm:h-5" />
                <span>전화상담</span>
              </button>
            </div>

            {/* Location Info */}
            <div className="bg-white/10 rounded-lg p-4 sm:p-6 space-y-2 sm:space-y-3">
              <div className="flex items-start sm:items-center space-x-3">
                <MapPin size={16} className="text-blue-200 flex-shrink-0 mt-1 sm:mt-0 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">경기도 성남시 분당구 미금역 인근</span>
              </div>
              <div className="flex items-start sm:items-center space-x-3">
                <Clock size={16} className="text-blue-200 flex-shrink-0 mt-1 sm:mt-0 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">분당선/8호선 미금역 3번 출구 도보 3분</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                {/* ENT Icons with descriptions */}
                <div className="text-center space-y-2">
                  <div className="text-4xl">👂</div>
                  <h3 className="font-semibold">이과 진료</h3>
                  <p className="text-sm text-blue-100">중이염, 난청, 이명</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl">👃</div>
                  <h3 className="font-semibold">비과 진료</h3>
                  <p className="text-sm text-blue-100">비염, 축농증, 코골이</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl">🗣️</div>
                  <h3 className="font-semibold">인후과 진료</h3>
                  <p className="text-sm text-blue-100">편도염, 인후염, 성대질환</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl">🔬</div>
                  <h3 className="font-semibold">특수 검사</h3>
                  <p className="text-sm text-blue-100">청력검사, 내시경검사</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full animate-bounce-subtle"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full animate-bounce-subtle" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero