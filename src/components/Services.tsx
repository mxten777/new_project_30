import { AnimatedSection } from './AnimatedComponents.tsx'

const Services = () => {
  const services = [
    {
      category: "비과 진료",
      services: [
        "알레르기성 비염",
        "만성 비염",
        "축농증(부비동염)",
        "비중격만곡증",
        "코골이·수면무호흡"
      ],
      icon: "👃",
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "이과 진료",
      services: [
        "중이염",
        "난청 검사",
        "이명 치료",
        "어지럼증",
        "귀지 제거"
      ],
      icon: "👂",
      color: "from-purple-500 to-indigo-500"
    },
    {
      category: "인후과 진료",
      services: [
        "편도염",
        "인후염",
        "성대 질환",
        "역류성 후두염",
        "구강 건조증"
      ],
      icon: "🗣️",
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "특수 검사",
      services: [
        "청력 검사",
        "내시경 검사",
        "알레르기 검사",
        "수면다원검사",
        "후각 검사"
      ],
      icon: "🔬",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-gray-900 dark:text-gray-100 tracking-tight">
            전문 진료과목
          </h2>
          <p className="text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            선우 이비인후과는 귀, 코, 목 질환의 정확한 진단과 최적의 치료를 제공합니다
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={index * 0.1}
              className="card-premium group hover:transform hover:-translate-y-3 transition-all duration-500 relative overflow-hidden"
            >
              {/* Icon Header */}
              <div className={`w-full h-36 bg-gradient-to-br ${service.color} rounded-2xl -mt-8 -mx-8 mb-8 flex items-center justify-center relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                <div className="text-7xl filter drop-shadow-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              </div>

              {/* Content */}
              <div className="space-y-6 relative z-10">
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-gray-100 text-center tracking-tight">
                  {service.category}
                </h3>
                
                <ul className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3 group/item">
                      <div className="w-2 h-2 bg-ent-primary rounded-full flex-shrink-0 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium group-hover/item:text-ent-primary transition-colors duration-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <button className="w-full py-4 px-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 hover:from-ent-primary hover:to-blue-600 hover:text-white text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105 focus:ring-4 focus:ring-ent-primary/20">
                    자세히 보기
                  </button>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              정확한 진단이 필요하시다면?
            </h3>
            <p className="text-gray-600 mb-6">
              15년 경력의 유종선 원장이 직접 진료합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                온라인 예약하기
              </button>
              <button className="btn-secondary">
                전화 상담하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services