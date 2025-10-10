import { useState } from 'react'
import { Menu, X, Phone, MapPin, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext.tsx'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { name: '홈', href: '#home' },
    { name: '진료과목', href: '#services' },
    { name: '의료진', href: '#about' },
    { name: '진료후기', href: '#reviews' },
    { name: '찾아오시는길', href: '#location' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-ent-primary to-ent-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">선</span>
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-gray-900 dark:text-gray-100">선우 이비인후과</h1>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">미금역 3분</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-ent-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Phone size={18} className="text-ent-primary" />
              <span className="font-semibold">031-XXX-XXXX</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <MapPin size={18} className="text-ent-primary" />
              <span>미금역 3번출구</span>
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="테마 변경"
            >
              {theme === 'light' ? (
                <Moon size={18} className="text-gray-600 dark:text-gray-400" />
              ) : (
                <Sun size={18} className="text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-ent-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t space-y-2">
              <div className="flex items-center space-x-2 text-gray-700">
                <Phone size={18} className="text-ent-primary" />
                <span className="font-semibold">031-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin size={18} className="text-ent-primary" />
                <span>미금역 3번출구 도보 3분</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header