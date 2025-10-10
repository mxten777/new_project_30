import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react'

const HeroAnimated = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const floatingTransition = {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  }

  return (
    <section id="home" className="gradient-bg text-white section-padding overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h1 
                className="text-5xl lg:text-6xl font-display font-black leading-tight tracking-tight"
                variants={itemVariants}
              >
                선우 이비인후과
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl font-medium text-blue-100 leading-relaxed"
                variants={itemVariants}
              >
                미금역 3분, 유종선 원장의 전문 진료
              </motion.p>
            </motion.div>

            {/* Specialties */}
            <motion.div className="grid sm:grid-cols-2 gap-4" variants={itemVariants}>
              {[
                "코막힘·비염 전문치료",
                "중이염·난청 정밀진단", 
                "목·인후 질환 특화진료",
                "알레르기 원인별 맞춤치료"
              ].map((specialty, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3 bg-white/10 rounded-lg p-3"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-medium">{specialty}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <motion.button 
                className="bg-white text-ent-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>온라인 예약</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                <span>전화상담 (031-XXX-XXXX)</span>
              </motion.button>
            </motion.div>

            {/* Location Info */}
            <motion.div 
              className="bg-white/10 rounded-lg p-6 space-y-3"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-200" />
                <span className="font-medium">경기도 성남시 분당구 미금역 인근</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={20} className="text-blue-200" />
                <span>분당선/8호선 미금역 3번 출구 도보 3분</span>
              </div>
            </motion.div>
          </div>

          {/* Image/Visual */}
          <motion.div className="relative" variants={itemVariants}>
            <motion.div 
              className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
              whileHover={{ rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-6">
                {/* ENT Icons with descriptions */}
                {[
                  { icon: "👂", title: "이과 진료", desc: "중이염, 난청, 이명" },
                  { icon: "👃", title: "비과 진료", desc: "비염, 축농증, 코골이" },
                  { icon: "🗣️", title: "인후과 진료", desc: "편도염, 인후염, 성대질환" },
                  { icon: "🔬", title: "특수 검사", desc: "청력검사, 내시경검사" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="text-center space-y-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-4xl">{item.icon}</div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-blue-100">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full"
              animate={{ y: [-10, 10, -10] }}
              transition={floatingTransition}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full"  
              animate={{ y: [-10, 10, -10] }}
              transition={{ ...floatingTransition, delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroAnimated