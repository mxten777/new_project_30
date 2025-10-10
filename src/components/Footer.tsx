import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const contactInfo = {
    phone: "031-XXX-XXXX",
    address: "경기도 성남시 분당구 미금역 인근",
    subway: "분당선/8호선 미금역 3번 출구 도보 3분",
    email: "info@seonwoo-ent.com",
    hours: {
      weekday: "평일: 09:00 - 18:00",
      saturday: "토요일: 09:00 - 13:00", 
      sunday: "일요일: 휴진"
    }
  }

  const services = [
    "알레르기성 비염",
    "중이염 치료",
    "편도염 치료", 
    "코골이 치료",
    "청력 검사",
    "내시경 검사"
  ]

  const quickLinks = [
    { name: "병원 소개", href: "#about" },
    { name: "진료과목", href: "#services" },
    { name: "의료진", href: "#doctor" },
    { name: "진료후기", href: "#reviews" },
    { name: "오시는길", href: "#location" },
    { name: "온라인 예약", href: "#booking" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Hospital Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-ent-primary to-ent-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">선</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">선우 이비인후과</h3>
                  <p className="text-gray-400">미금역 3분, 전문 진료</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                15년 경력의 유종선 원장이 직접 진료하는 이비인후과 전문 병원입니다. 
                정확한 진단과 개인 맞춤형 치료로 환자분들의 건강한 일상을 되찾아드립니다.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-ent-primary" />
                <span className="font-semibold text-lg">{contactInfo.phone}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-ent-primary mt-1" />
                <div>
                  <p>{contactInfo.address}</p>
                  <p className="text-gray-400 text-sm">{contactInfo.subway}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-ent-primary" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">빠른 메뉴</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-ent-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">주요 진료과목</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-ent-primary rounded-full"></div>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mt-16 pt-12 border-t border-gradient-to-r from-transparent via-gray-700 to-transparent">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h4 className="text-xl font-display font-bold mb-6 flex items-center text-white">
                <div className="w-10 h-10 bg-gradient-to-br from-ent-primary to-blue-600 rounded-xl flex items-center justify-center mr-3">
                  <Clock size={20} className="text-white" />
                </div>
                진료시간
              </h4>
              <div className="space-y-4">
                {[
                  { label: '평일', time: '09:00 - 18:00', color: 'from-green-500 to-emerald-600' },
                  { label: '토요일', time: '09:00 - 13:00', color: 'from-blue-500 to-cyan-600' },
                  { label: '일요일', time: '휴진', color: 'from-gray-500 to-gray-600' }
                ].map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gray-700/30 border border-gray-600/30">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${schedule.color}`}></div>
                      <span className="text-gray-200 font-medium text-lg">{schedule.label}</span>
                    </div>
                    <span className="text-white font-bold text-lg">{schedule.time}</span>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                  <p className="text-orange-300 font-semibold flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    점심시간: 12:30 - 14:00 (토요일 제외)
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-ent-primary/20 via-blue-600/15 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-ent-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-ent-primary/5 to-transparent"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                    <Phone size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white">응급 상담</h4>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  진료시간 외 응급상황 시<br />
                  <span className="text-white font-semibold">24시간 전화 상담 서비스</span>
                </p>
                <div className="space-y-4">
                  <button className="btn-primary w-full text-lg py-4 rounded-xl font-bold">
                    응급 상담하기
                  </button>
                  <div className="text-center text-gray-400 text-sm">
                    평균 응답시간: <span className="text-ent-primary font-semibold">3분 이내</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="mt-16 pt-12">
          <div className="bg-gradient-to-r from-gray-800/50 via-gray-700/30 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="text-center lg:text-left">
                <h4 className="text-xl font-display font-bold mb-4 text-white">소셜 미디어</h4>
                <p className="text-gray-300 mb-6">최신 정보와 건강 팁을 확인하세요</p>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a href="#" className="group w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/25">
                    <Facebook size={24} className="text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="group w-14 h-14 bg-gradient-to-br from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-pink-500/25">
                    <Instagram size={24} className="text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="group w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-500/25">
                    <Youtube size={24} className="text-white group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary text-lg px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-ent-primary/25 transform hover:scale-105 transition-all duration-300">
                  <Phone size={20} className="inline mr-2" />
                  온라인 예약
                </button>
                <button className="btn-secondary text-lg px-8 py-4 rounded-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Mail size={20} className="inline mr-2" />
                  전화 상담
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 선우 이비인후과. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-ent-primary transition-colors duration-200">개인정보처리방침</a>
              <a href="#" className="hover:text-ent-primary transition-colors duration-200">이용약관</a>
              <a href="#" className="hover:text-ent-primary transition-colors duration-200">사이트맵</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer