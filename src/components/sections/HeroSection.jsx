import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { TypeAnimation } from 'react-type-animation'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import { classLevels } from '../../data/siteData'
import '../../styles/Hero.css'

/* ── CSS Particle cloud ── */
const PARTICLE_COUNT = 22
const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 18,
  duration: Math.random() * 14 + 12,
  color: ['#6c63ff', '#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff9f43'][i % 6],
}))

/* ── Mini card data ── */
const heroCards = [
  { emoji: '🌟', name: 'Class 1–5', pct: 96, color: '#ffd93d' },
  { emoji: '📐', name: 'Class 6–8', pct: 93, color: '#6bcb77' },
  { emoji: '🎯', name: 'Class 9–10', pct: 98, color: '#6c63ff' },
]

export default function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const containerRef = useRef(null)

  /* ── 3D tilt on mouse move ── */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), { stiffness: 200, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), { stiffness: 200, damping: 30 })

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0) }

  return (
    <section className="hero" ref={ref}>
      {/* Particle cloud */}
      <div className="particles-container">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              background: p.color,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}80`,
            }}
          />
        ))}
      </div>

      {/* Background radial glow */}
      <div className="hero-bg" />
      <motion.div className="orb orb-purple" style={{ width: 700, height: 700, top: -200, left: -250 }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="orb orb-red" style={{ width: 500, height: 500, bottom: -150, right: -150 }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }} />
      <motion.div className="orb orb-blue" style={{ width: 400, height: 400, top: '30%', right: '20%' }}
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />

      <div className="container hero-content">
        <div className="hero-inner">

          {/* ─── LEFT COLUMN ─── */}
          <motion.div
            className="hero-left"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div className="hero-badge" variants={fadeInUp}>
              <span className="hero-badge-dot" />
              🏫 Class 1 to 12 — All Subjects
            </motion.div>

              <motion.h1 className="hero-title" variants={fadeInUp}>
              Shape Your{' '}
              <span className="gradient-text">
                <TypeAnimation
                  sequence={['Future', 2000, 'Excellence', 2000, 'Confidence', 2000, 'Success', 2000]}
                  repeat={Infinity}
                  speed={48}
                />
              </span>
              <br />
              <span className="shimmer-text">WISDOM'S ACADEMY</span>
            </motion.h1>

            <motion.p className="hero-desc" variants={fadeInUp}>
              India's most trusted coaching centre for <strong>Classes 1 to 12</strong> — covering Primary,
              Middle School, Board Exams, JEE, NEET, and Commerce. Every student deserves world-class guidance at&nbsp;
              <strong>wisdomsacademy.in</strong>
            </motion.p>

            {/* Class level selectors */}
            <motion.div className="hero-class-grid" variants={fadeInUp}>
              {classLevels.map((lvl) => (
                <Link to="/courses" key={lvl.range}>
                  <motion.div
                    className="hero-class-chip"
                    style={{ '--chip-color': lvl.color, '--chip-bg': lvl.bg }}
                    whileHover={{ scale: 1.06, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="chip-icon">{lvl.icon}</span>
                    <div>
                      <div className="chip-range">Class {lvl.range}</div>
                      <div className="chip-label">{lvl.label}</div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            <motion.div className="hero-actions" variants={fadeInUp}>
              <Link to="/contact">
                <motion.button className="btn-primary" whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.97 }}>
                  Free Demo Class <FiArrowRight />
                </motion.button>
              </Link>
              <Link to="/results">
                <motion.button className="btn-outline" whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.97 }}>
                  <FiPlay size={14} /> Our Results
                </motion.button>
              </Link>
            </motion.div>

            <motion.div className="hero-stats" variants={fadeInUp}>
              {[
                { number: '2500+', label: 'Students' },
                { number: '1–12', label: 'All Classes' },
                { number: '98%', label: 'Success Rate' },
                { number: '20+', label: 'Years Legacy' },
              ].map((s) => (
                <div className="hero-stat" key={s.label}>
                  <span className="hero-stat-number">{s.number}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT COLUMN — 3D Tilt Card ─── */}
          <motion.div
            className="hero-right"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <motion.div
              className="hero-visual"
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Top-right floating badge */}
              <motion.div
                className="floating-card floating-card-1"
                animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="fc-icon">🎓</span>
                <div className="fc-text">
                  <strong>Class 10 Board</strong>
                  <span>98.6% Scored</span>
                </div>
              </motion.div>

              {/* Main glass card */}
              <div className="hero-card-main">
                <div className="card-glow-circle" />
                {/* Animated top border */}
                <motion.div
                  style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #6c63ff, #ff6b6b, #ffd93d)', borderRadius: '999px 999px 0 0' }}
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />

                <div className="hero-card-header">
                  <span className="card-title">📊 Our Success Rate</span>
                  <div className="card-icon-group">
                    <div className="avatar-circle">👦</div>
                    <div className="avatar-circle">👧</div>
                    <div className="avatar-circle">🧒</div>
                  </div>
                </div>

                <div className="hero-course-list">
                  {heroCards.map((c, i) => (
                    <motion.div
                      key={c.name}
                      className="hero-course-item"
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.18 }}
                    >
                      <span className="course-emoji">{c.emoji}</span>
                      <div className="course-info">
                        <div className="course-name">{c.name}</div>
                        <div className="course-progress-bar">
                          <motion.div
                            className="course-progress-fill"
                            style={{ background: `linear-gradient(90deg, ${c.color}aa, ${c.color})` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${c.pct}%` }}
                            transition={{ duration: 1.4, delay: 0.9 + i * 0.22, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                      <span className="course-pct" style={{ color: c.color }}>{c.pct}%</span>
                    </motion.div>
                  ))}
                </div>

                {/* Live badge */}
                <motion.div
                  style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: 'rgba(107,203,119,0.1)', border: '1px solid rgba(107,203,119,0.2)', borderRadius: 12 }}
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#6bcb77', boxShadow: '0 0 8px #6bcb77', display: 'block' }} />
                  <span style={{ fontSize: '0.8rem', color: '#6bcb77', fontWeight: 600 }}>Admissions Open for 2025–26</span>
                </motion.div>
              </div>

              {/* Bottom-left rating card */}
              <motion.div
                className="floating-card floating-card-2"
                animate={{ y: [0, 10, 0], rotate: [1, -1, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              >
                <div className="fc-stars">{'⭐'.repeat(5).split('').map((s, i) => <span key={i} className="fc-star">{s}</span>)}</div>
                <div className="fc2-number">4.9</div>
                <div className="fc2-label">Parent Rating</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
