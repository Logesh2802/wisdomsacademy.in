import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { whyFeatures } from '../../data/siteData'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainerSlow } from '../../utils/animations'
import '../../styles/Sections.css'

const visualCards = [
  { emoji: '🏆', number: '98%', label: 'Success Rate', span: true, gradient: true },
  { emoji: '👨‍👩‍👧', number: '2500+', label: 'Students Enrolled' },
  { emoji: '⭐', number: '4.9/5', label: 'Parent Rating' },
]

const achievementTags = [
  { icon: '🌟', text: 'Class 1–5 Toppers' },
  { icon: '📐', text: 'Olympiad Winners' },
  { icon: '📋', text: '90%+ Board Scorers' },
  { icon: '🚀', text: 'JEE & NEET Qualifiers' },
]

export default function WhySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section why-section" ref={ref}>
      <div className="container">
        <div className="why-inner">
          {/* Left */}
          <motion.div
            className="why-left"
            variants={staggerContainerSlow}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div className="section-tag" variants={fadeInUp}>
              <span className="dot" />Why Wisdom's Academy
            </motion.div>
            <motion.h2 className="section-title" variants={fadeInUp}>
              We Grow With<br />
              <span className="gradient-text">Your Child — Class 1 to 12</span>
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeInUp} style={{ marginBottom: 4 }}>
              Unlike other institutes that focus only on board or entrance exams, Wisdom's Academy provides a complete K–12 education journey with the same quality, care, and commitment at every level.
            </motion.p>

            <motion.div className="why-features" variants={staggerContainerSlow}>
              {whyFeatures.map((f) => (
                <motion.div
                  key={f.title}
                  className="why-feature"
                  variants={fadeInLeft}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="why-feature-icon"
                    style={{ background: f.bg, color: f.color }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {f.icon}
                  </motion.div>
                  <div className="why-feature-content">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link to="/contact">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book Free Demo Class 📚
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            className="why-right"
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="why-visual-grid">
              {visualCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  className="why-visual-card"
                  style={card.span ? { gridColumn: 'span 2' } : {}}
                  whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}
                  animate={{ y: [0, i % 2 === 0 ? -7 : 7, 0] }}
                  transition={{ y: { duration: 3 + i * 1.2, repeat: Infinity, ease: 'easeInOut' } }}
                >
                  <div className="wvc-emoji">{card.emoji}</div>
                  <div className="wvc-number">{card.number}</div>
                  <div className="wvc-label">{card.label}</div>
                </motion.div>
              ))}

              {achievementTags.map((tag, i) => (
                <motion.div
                  key={tag.text}
                  className="why-visual-card"
                  style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}
                  whileHover={{ y: -4, borderColor: 'rgba(108,99,255,0.4)' }}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.35 + i * 0.1, type: 'spring', stiffness: 300 }}
                >
                  <span style={{ fontSize: '1.3rem' }}>{tag.icon}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{tag.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
