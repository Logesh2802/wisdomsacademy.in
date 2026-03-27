import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import '../../styles/index.css'

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const cursorX = useSpring(0, { stiffness: 450, damping: 40 })
  const cursorY = useSpring(0, { stiffness: 450, damping: 40 })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const moveMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const isSelectable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('clickable') ||
        target.classList.contains('hero-class-chip') ||
        target.classList.contains('course-card') ||
        target.classList.contains('why-feature')
      
      setIsHovering(!!isSelectable)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', moveMouse)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', moveMouse)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [cursorX, cursorY])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          backgroundColor: '#fff',
          borderRadius: '50%',
          zIndex: 9999,
          pointerEvents: 'none',
          translateX: cursorX,
          translateY: cursorY,
          x: -4,
          y: -4,
        }}
      />
      <motion.div
        className="cursor-outline"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          border: '1.5px solid rgba(255, 255, 255, 0.4)',
          borderRadius: '50%',
          zIndex: 9998,
          pointerEvents: 'none',
          translateX: cursorX,
          translateY: cursorY,
          x: -20,
          y: -20,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(108, 99, 255, 0.6)' : 'rgba(255, 255, 255, 0.4)',
          backgroundColor: isHovering ? 'rgba(108, 99, 255, 0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      
      {/* Sparkle effect on hover */}
      {isHovering && (
        <motion.div
          style={{
            position: 'fixed',
            top: mousePos.y,
            left: mousePos.x,
            width: 100,
            height: 100,
            background: 'radial-gradient(circle, rgba(108, 99, 255, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 9997,
            pointerEvents: 'none',
            x: -50,
            y: -50,
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </>
  )
}
