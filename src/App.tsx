import { useState } from 'react'
import Header from './components/Header.tsx'
import HeroAnimated from './components/HeroAnimated.tsx'
import Services from './components/Services.tsx'
import About from './components/About.tsx'
import Reviews from './components/Reviews.tsx'
import Footer from './components/Footer.tsx'
import BookingModal from './components/BookingModal.tsx'
import { ProgressBar } from './components/AnimatedComponents.tsx'
import { useScrollProgress } from './hooks/useIntersectionObserver'

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const scrollProgress = useScrollProgress()

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressBar progress={scrollProgress} />
      <Header />
      <main>
        <HeroAnimated />
        <Services />
        <About />
        <Reviews />
      </main>
      <Footer />
      
      {/* Floating Booking Button */}
      <button
        onClick={() => setIsBookingModalOpen(true)}
        className="fixed bottom-6 right-6 bg-ent-primary hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 animate-bounce-subtle"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  )
}

export default App