import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
}

export const AnimatedSection = ({ 
  children, 
  className = '', 
  direction = 'up',
  delay = 0,
  duration = 0.6
}: AnimatedSectionProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 }
  }

  return (
    <motion.div
      ref={elementRef as any}
      className={className}
      initial={directionVariants[direction]}
      animate={isIntersecting ? { 
        x: 0, 
        y: 0, 
        opacity: 1 
      } : directionVariants[direction]}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export const CountUp = ({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  className = ''
}: CountUpProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver()

  return (
    <motion.span
      ref={elementRef as any}
      className={className}
      initial={{ opacity: 0 }}
      animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
    >
      {isIntersecting && (
        <motion.span
          initial={{ textShadow: "0px 0px 0px rgba(255,255,255,0)" }}
          animate={{ 
            textShadow: "0px 0px 8px rgba(37,99,235,0.3)"
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {prefix}
          <motion.span
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: duration * 0.8 }}
            >
              {Math.round(end)}
            </motion.span>
          </motion.span>
          {suffix}
        </motion.span>
      )}
    </motion.span>
  )
}

// Progress bar component
interface ProgressBarProps {
  progress: number
  className?: string
}

export const ProgressBar = ({ progress, className = '' }: ProgressBarProps) => {
  return (
    <div className={`fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50 ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-ent-primary to-ent-secondary"
        initial={{ width: 0 }}
        animate={{ width: `${progress * 100}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  )
}