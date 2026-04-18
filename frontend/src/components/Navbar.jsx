import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Dog, Menu, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const navLinks = [
  { name: 'Problem', href: '#problem' },
  { name: 'Solution', href: '#solution' },
  { name: 'How It Works', href: '#how' },
  { name: 'Features', href: '#features' },
  { name: 'Innovation', href: '#innovation' },
  { name: 'Impact', href: '#impact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    const sectionId = href.replace('#', '')
    if (window.location.pathname === '/') {
      // If already on home page, just scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If on another page, navigate to home with hash
      navigate('/' + href)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed border-2 border-grey top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 group cursor-pointer bg-none border-none"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pastel-blue-dark to-pastel-lavender-dark flex items-center justify-center shadow-soft">
              <Dog className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-semibold text-lg text-pastel-text">
            PET-CARE
            </span>
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-pastel-text-light hover:text-pastel-text transition-colors duration-300 bg-none border-none cursor-pointer"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => navigate('/detection')}
              className="px-5 py-2.5 bg-gradient-to-r from-pastel-blue-dark to-pastel-lavender-dark text-white text-sm font-medium rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow duration-300 cursor-pointer border-none"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Try Detection
            </motion.button>
          </div>

          <button
            className="md:hidden p-2 rounded-xl hover:bg-pastel-gray transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-pastel-text" />
            ) : (
              <Menu className="w-6 h-6 text-pastel-text" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    handleNavClick(link.href)
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-sm font-medium text-pastel-text-light hover:text-pastel-text py-2 px-3 rounded-lg hover:bg-pastel-gray transition-all duration-300 bg-none border-none cursor-pointer text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  navigate('/detection')
                  setIsMobileMenuOpen(false)
                }}
                className="mt-2 text-center px-5 py-3 bg-gradient-to-r from-pastel-blue-dark to-pastel-lavender-dark text-white text-sm font-medium rounded-xl cursor-pointer border-none"
              >
                Try Detection
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
