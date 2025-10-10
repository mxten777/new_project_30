import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="gradient-bg text-white section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 mb-2 sm:mb-4">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                <span className="text-white/90 font-semibold text-sm sm:text-lg">15년 경력 전문의 직접 진료</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-8xl font-display font-black leading-none tracking-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  선우 이비인후과
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-3xl text-blue-100/90 font-medium leading-relaxed">
                <span className="block mb-1 sm:mb-2">미금역 3분, 유종선 원장의</span>
                <span className="text-white font-bold">전문적이고 정확한 진료</span>
              </p>
            </div>

            {/* Specialties */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "코막힘·비염 전문치료",
                "중이염·난청 정밀진단", 
                "목·인후 질환 특화진료",
                "알레르기 원인별 맞춤치료"
              ].map((specialty, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-sm sm:text-base">{specialty}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="btn-primary text-lg sm:text-xl py-4 sm:py-5 px-8 sm:px-10 rounded-2xl font-bold shadow-2xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 w-full sm:min-w-[200px]">
                <span>온라인 예약</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary text-lg sm:text-xl py-4 sm:py-5 px-8 sm:px-10 rounded-2xl font-bold border-2 border-white/50 hover:border-white shadow-xl hover:shadow-white/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 w-full sm:min-w-[200px]">
                <Phone size={20} />
                <span>전화상담</span>
              </button>
            </div>

            {/* Location Info */}
            <div className="bg-white/10 rounded-lg p-6 space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-200" />
                <span className="font-medium">경기도 성남시 분당구 미금역 인근</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={20} className="text-blue-200" />
                <span>분당선/8호선 미금역 3번 출구 도보 3분</span>
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