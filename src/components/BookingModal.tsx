import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { X, Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react'

interface BookingFormData {
  name: string
  phone: string
  email: string
  date: string
  time: string
  department: string
  symptoms: string
  isFirstVisit: boolean
}

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>()

  const departments = [
    { value: 'rhinology', label: '비과 (비염, 축농증)' },
    { value: 'otology', label: '이과 (중이염, 난청)' },
    { value: 'laryngology', label: '인후과 (편도염, 인후염)' },
    { value: 'sleep', label: '수면 클리닉 (코골이)' },
    { value: 'allergy', label: '알레르기 클리닉' }
  ]

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ]

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    
    // 실제 API 호출 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('예약 데이터:', data)
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // 3초 후 모달 닫기
    setTimeout(() => {
      setIsSuccess(false)
      reset()
      onClose()
    }, 3000)
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1
    },
    exit: { 
      opacity: 0, 
      scale: 0.8
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  if (isSuccess) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">예약 완료!</h3>
            <p className="text-gray-600 mb-4">
              예약이 성공적으로 접수되었습니다.<br />
              확인 연락을 드리겠습니다.
            </p>
            <div className="text-sm text-gray-500">
              잠시 후 자동으로 닫힙니다...
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">온라인 예약</h2>
                <p className="text-gray-600">편리하게 진료 예약을 하세요</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {/* 이름 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    이름 *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: '이름을 입력해주세요' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ent-primary focus:border-transparent"
                    placeholder="홍길동"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                {/* 전화번호 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone size={16} className="inline mr-2" />
                    전화번호 *
                  </label>
                  <input
                    type="tel"
                    {...register('phone', { 
                      required: '전화번호를 입력해주세요',
                      pattern: { value: /^[0-9-]+$/, message: '올바른 전화번호를 입력해주세요' }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ent-primary focus:border-transparent"
                    placeholder="010-1234-5678"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              {/* 이메일 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail size={16} className="inline mr-2" />
                  이메일
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ent-primary focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* 날짜 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar size={16} className="inline mr-2" />
                    희망 날짜 *
                  </label>
                  <input
                    type="date"
                    {...register('date', { required: '날짜를 선택해주세요' })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ent-primary focus:border-transparent"
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
                </div>

                {/* 시간 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock size={16} className="inline mr-2" />
                    희망 시간 *
                  </label>
                  <select
                    {...register('time', { required: '시간을 선택해주세요' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ent-primary focus:border-transparent"
                  >
                    <option value="">시간 선택</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
                </div>
              </div>

              {/* 진료과 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  진료과 *
                </label>
                <select
                  {...register('department', { required: '진료과를 선택해주세요' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ent-primary focus:border-transparent"
                >
                  <option value="">진료과 선택</option>
                  {departments.map(dept => (
                    <option key={dept.value} value={dept.value}>{dept.label}</option>
                  ))}
                </select>
                {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department.message}</p>}
              </div>

              {/* 증상 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare size={16} className="inline mr-2" />
                  증상 및 문의사항
                </label>
                <textarea
                  {...register('symptoms')}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ent-primary focus:border-transparent resize-none"
                  placeholder="현재 증상이나 문의사항을 자세히 적어주세요"
                />
              </div>

              {/* 첫 방문 여부 */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  {...register('isFirstVisit')}
                  className="w-4 h-4 text-ent-primary bg-gray-100 border-gray-300 rounded focus:ring-ent-primary"
                  id="firstVisit"
                />
                <label htmlFor="firstVisit" className="text-sm text-gray-700">
                  첫 방문입니다
                </label>
              </div>

              {/* 안내 메시지 */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-800">
                      <strong>예약 안내:</strong><br />
                      • 예약 후 확인 연락을 드립니다<br />
                      • 진료 30분 전까지 내원해 주세요<br />
                      • 변경/취소는 전화로 연락바랍니다
                    </p>
                  </div>
                </div>
              </div>

              {/* 버튼 */}
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-4 bg-ent-primary text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      예약 중...
                    </>
                  ) : (
                    '예약하기'
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BookingModal