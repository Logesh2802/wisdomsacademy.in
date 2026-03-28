import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled up to 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the scroll position
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="back-to-top"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 999,
            width: '50px',
            height: '50px',
            borderRadius: '15px',
            background: 'var(--gradient-primary)',
            color: 'white',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(108, 99, 255, 0.4)',
            fontSize: '1.4rem',
            backdropFilter: 'blur(8px)',
          }}
          whileHover={{ y: -5, scale: 1.1, boxShadow: '0 15px 35px rgba(108, 99, 255, 0.6)' }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp />
          
          {/* Subtle pulse effect */}
          <motion.div
            style={{ position: 'absolute', inset: -4, borderRadius: 'inherit', border: '1px solid var(--primary)', opacity: 0.2 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
