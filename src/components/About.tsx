import { Award, Heart } from 'lucide-react'
import { AnimatedSection, CountUp } from './AnimatedComponents.tsx'

const About = () => {
  const doctorInfo = {
    name: "유종선",
    title: "선우 이비인후과 원장",
    experience: "15년+ 이비인후과 전문의",
    education: [
      "연세대학교 의과대학 졸업",
      "세브란스병원 이비인후과 전공의",
      "대한이비인후과학회 정회원"
    ],
    specializations: [
      "알레르기성 비염 전문",
      "중이염·난청 정밀 진단",
      "코골이·수면무호흡 치료",
      "음성 질환 전문 진료"
    ]
  }

  const clinicFeatures = [
    {
      title: "최신 장비",
      description: "내시경, 청력검사실, CT 등 최첨단 진단 장비",
      icon: "🏥",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "개인 맞춤 진료",
      description: "환자별 증상과 원인에 따른 맞춤형 치료",
      icon: "👨‍⚕️",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "원스톱 진료",
      description: "진단부터 치료까지 한 곳에서 완결",
      icon: "⚡",
      color: "from-purple-500 to-indigo-500"
    }
  ]

  const achievements = [
    { number: "15+", label: "진료 경력" },
    { number: "10,000+", label: "치료 환자수" },
    { number: "98%", label: "환자 만족도" },
    { number: "24시간", label: "응급 상담 가능" }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center bg-ent-primary/10 px-8 py-4 rounded-full border border-ent-primary/20 mb-6">
            <div className="w-3 h-3 bg-ent-primary rounded-full mr-3 animate-pulse"></div>
            <span className="text-ent-primary font-black text-lg tracking-wider">ABOUT DOCTOR</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-display font-black text-gray-900 dark:text-gray-100 tracking-tight leading-none">
            <span className="block mb-2">전문의가 직접</span>
            <span className="bg-gradient-to-r from-ent-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              책임지는 진료
            </span>
          </h2>
          
          <p className="text-2xl font-medium text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            <span className="block mb-2">15년 경력의 유종선 원장이</span>
            <span className="font-bold text-gray-900 dark:text-white text-2xl">
              개인별 맞춤 치료로 건강한 일상을 되찾아드립니다
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Doctor Profile */}
          <div className="space-y-8">
            {/* Doctor Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-ent-primary to-ent-secondary rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="text-8xl">👨‍⚕️</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Award className="w-8 h-8 text-ent-primary" />
              </div>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-display font-black text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
                {doctorInfo.name} 원장
              </h3>
              <p className="text-xl text-ent-primary font-bold mb-4 tracking-wide">
                {doctorInfo.experience}
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Award className="w-5 h-5 text-ent-primary mr-2" />
                학력 및 경력
              </h4>
              <ul className="space-y-2">
                {doctorInfo.education.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-ent-primary rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specializations */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Heart className="w-5 h-5 text-ent-primary mr-2" />
                전문 분야
              </h4>
              <ul className="space-y-2">
                {doctorInfo.specializations.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-ent-primary rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <AnimatedSection direction="up" className="bg-gradient-to-br from-ent-primary via-blue-600 to-ent-secondary rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-20 relative overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/10 rounded-full -translate-y-16 translate-x-16 sm:-translate-y-32 sm:translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-white/5 rounded-full translate-y-12 -translate-x-12 sm:translate-y-24 sm:-translate-x-24"></div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12 relative z-10">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center text-white group">
                <div className="relative mb-2 sm:mb-4">
                  <div className="text-3xl sm:text-4xl lg:text-6xl font-display font-black mb-1 sm:mb-2 leading-none">
                    <CountUp 
                      end={parseInt(achievement.number.replace(/[^0-9]/g, '') || '0')} 
                      suffix={achievement.number.replace(/[0-9]/g, '')}
                      className="text-white drop-shadow-lg"
                    />
                  </div>
                  
                  {/* Glowing effect */}
                  <div className="absolute inset-0 text-3xl sm:text-4xl lg:text-6xl font-display font-black text-white/20 blur-sm group-hover:text-white/40 transition-all duration-500">
                    <CountUp 
                      end={parseInt(achievement.number.replace(/[^0-9]/g, '') || '0')} 
                      suffix={achievement.number.replace(/[0-9]/g, '')}
                      className="text-white"
                    />
                  </div>
                </div>
                
                <div className="text-blue-100 font-semibold text-xs sm:text-sm lg:text-lg tracking-wide group-hover:text-white transition-colors duration-300 px-1 leading-tight">
                  {achievement.label}
                </div>
                
                {/* Decorative line */}
                <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-white/30 rounded-full mx-auto mt-2 sm:mt-3 group-hover:bg-white/60 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* Animated particles */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 right-16 w-3 h-3 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        </AnimatedSection>

        {/* Clinic Features */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            병원 특징
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {clinicFeatures.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center`}>
                  <div className="text-3xl">{feature.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About