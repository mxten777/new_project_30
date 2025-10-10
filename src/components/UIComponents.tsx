import React from 'react'
import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

export const LoadingSpinner = ({ 
  size = 'md', 
  color = 'text-ent-primary',
  className = '' 
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} ${color} border-2 border-current border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export const ErrorBoundary = ({ children, fallback }: ErrorBoundaryProps) => {
  return (
    <div>
      {children}
      {fallback && (
        <div className="text-center p-8">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 6.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            일시적인 오류가 발생했습니다
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            페이지를 새로고침해주시거나 잠시 후 다시 시도해주세요
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            페이지 새로고침
          </button>
        </div>
      )}
    </div>
  )
}

// Lazy Loading Wrapper
interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  className?: string
}

export const LazyWrapper = ({ 
  children, 
  fallback = <LoadingSpinner />,
  className = '' 
}: LazyWrapperProps) => {
  return (
    <div className={className}>
      <React.Suspense fallback={fallback}>
        {children}
      </React.Suspense>
    </div>
  )
}

// Toast Notification
interface ToastProps {
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
  isVisible: boolean
  onClose: () => void
}

export const Toast = ({ message, type, isVisible, onClose }: ToastProps) => {
  const typeStyles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-black'
  }

  return (
    <motion.div
      className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 ${typeStyles[type]}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-current hover:opacity-75"
        >
          ×
        </button>
      </div>
    </motion.div>
  )
}