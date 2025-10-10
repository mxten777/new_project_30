import { Star, Quote } from 'lucide-react'

const Reviews = () => {
  const reviews = [
    {
      name: "김○○",
      age: 35,
      condition: "알레르기성 비염",
      rating: 5,
      comment: "10년간 고생했던 비염이 3개월 만에 완치됐어요! 유종선 원장님의 정확한 진단과 체계적인 치료 덕분입니다. 정말 감사합니다.",
      date: "2024.09.15"
    },
    {
      name: "이○○",
      age: 42,
      condition: "중이염",
      rating: 5,
      comment: "정확한 진단과 친절한 설명에 감동했습니다. 아이가 중이염으로 고생했는데 빠르게 회복되었어요. 직원분들도 모두 친절하세요.",
      date: "2024.09.10"
    },
    {
      name: "박○○",
      age: 28,
      condition: "편도염",
      rating: 5,
      comment: "목이 너무 아파서 갔는데 한 번의 치료로 많이 좋아졌습니다. 원장님이 자세히 설명해주셔서 안심이 되었어요.",
      date: "2024.09.08"
    },
    {
      name: "최○○",
      age: 55,
      condition: "수면무호흡",
      rating: 5,
      comment: "코골이와 수면무호흡으로 고생했는데 선우 이비인후과에서 치료받고 가족들이 모두 편해졌어요. 수면의 질이 확실히 좋아졌습니다.",
      date: "2024.09.05"
    },
    {
      name: "정○○",
      age: 31,
      condition: "만성 비염",
      rating: 5,
      comment: "만성 비염으로 여러 병원을 다녔지만 여기서 드디어 해결됐어요. 원장님의 세심한 진료와 체계적인 치료 계획이 인상적이었습니다.",
      date: "2024.09.01"
    },
    {
      name: "한○○",
      age: 46,
      condition: "이명",
      rating: 5,
      comment: "귀에서 나는 소리 때문에 스트레스가 심했는데 치료받고 많이 개선되었습니다. 정말 전문적이고 신뢰할 수 있는 병원입니다.",
      date: "2024.08.28"
    }
  ]

  const categories = [
    { name: "비염 치료", count: 156 },
    { name: "중이염 치료", count: 134 },
    { name: "편도염 치료", count: 98 },
    { name: "수면무호흡 치료", count: 87 },
    { name: "알레르기 치료", count: 165 }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ))
  }

  return (
    <section id="reviews" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-gray-900 dark:text-gray-100 tracking-tight">
            환자 후기
          </h2>
          <p className="text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
            실제 환자분들의 생생한 치료 후기를 확인해보세요
          </p>
        </div>

        {/* Review Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-md">
              <span className="text-sm sm:text-base text-gray-700 font-medium">{category.name}</span>
              <span className="ml-1 sm:ml-2 text-sm sm:text-base text-ent-primary font-semibold">({category.count})</span>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="card-premium relative group hover:scale-105 transition-all duration-500">
              {/* Quote Icon */}
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-ent-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-sm" />
              </div>

              {/* Review Header */}
              <div className="mb-4 sm:mb-6 pt-3 sm:pt-4">
                <div className="flex items-start sm:items-center justify-between mb-3 flex-col sm:flex-row gap-2 sm:gap-0">
                  <div>
                    <h4 className="font-display font-bold text-gray-900 dark:text-gray-100 text-base sm:text-lg">{review.name}</h4>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                      {review.age}세 • {review.condition}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 font-medium bg-gray-50 dark:bg-gray-700 px-2 sm:px-3 py-1 rounded-full inline-block">
                  {review.date}
                </p>
              </div>

              {/* Review Content */}
              <div className="mb-4 sm:mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg font-medium italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Bottom decorative elements */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-ent-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 font-semibold">
                  검증된 후기
                </div>
              </div>

              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ent-primary via-blue-500 to-ent-secondary rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-ent-primary/5 via-transparent to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-ent-primary mb-2">4.9</div>
              <div className="text-gray-600">평균 평점</div>
              <div className="flex justify-center mt-2">
                {renderStars(5)}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ent-primary mb-2">640+</div>
              <div className="text-gray-600">총 후기 수</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ent-primary mb-2">98%</div>
              <div className="text-gray-600">만족도</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ent-primary mb-2">92%</div>
              <div className="text-gray-600">재방문율</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            지금 바로 예약하고 전문 진료를 받아보세요
          </h3>
          <p className="text-gray-600 mb-6">
            빠른 예약으로 대기시간을 줄이고 정확한 진단을 받으실 수 있습니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              온라인 예약하기
            </button>
            <button className="btn-secondary">
              후기 더 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews