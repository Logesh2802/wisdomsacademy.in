import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { classLevels } from '../../data/siteData'
import { fadeInUp, staggerContainerSlow } from '../../utils/animations'

const roadmapSteps = [
  { range: '1–5', label: 'Primary Stars', icon: '🌟', color: '#ffd93d', subjects: 'Maths · English · EVS · Science', desc: 'Strong foundation through activity-based smart learning' },
  { range: '6–8', label: 'Junior Scholars', icon: '📐', color: '#6bcb77', subjects: 'Maths · Science · SST · English', desc: 'Concept building & Olympiad preparation' },
  { range: '9–10', label: 'Board Achievers', icon: '🎯', color: '#6c63ff', subjects: 'All 5 Subjects · CBSE/State', desc: 'Complete board mastery for 90%+ scores' },
  { range: '11–12', label: 'Senior Scholars', icon: '🚀', color: '#ff6b6b', subjects: 'PCM · PCB · Commerce', desc: 'JEE · NEET · Board + Competitive Combo' },
]

export default function ClassJourneySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(108,99,255,0.04) 0%, transparent 50%, rgba(255,107,107,0.03) 100%)',
        borderTop: '1px solid var(--glass-border)',
        borderBottom: '1px solid var(--glass-border)',
      }} />
      <motion.div className="orb orb-green" style={{ width: 400, height: 400, top: '20%', left: -100 }}
        animate={{ y: [0, -40, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 72px' }}
          variants={staggerContainerSlow}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-tag" style={{ margin: '0 auto 18px' }} variants={fadeInUp}>
            <span className="dot" />Complete Academic Journey
          </motion.div>
          <motion.h2 className="section-title" variants={fadeInUp}>
            One Institute. <span className="gradient-text">All 12 Classes.</span>
          </motion.h2>
          <motion.p className="section-subtitle" style={{ margin: '0 auto' }} variants={fadeInUp}>
            From the first day of school to board exams and competitive entrance tests — Wisdom's Academy walks every step of the journey with your child.
          </motion.p>
        </motion.div>

        {/* Roadmap */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <motion.div
            style={{
              position: 'absolute', top: 48, left: '12.5%', right: '12.5%',
              height: 3,
              background: 'linear-gradient(90deg, #ffd93d, #6bcb77, #6c63ff, #ff6b6b)',
              borderRadius: 999, zIndex: 0,
              transformOrigin: 'left',
            }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative', zIndex: 1 }}>
            {roadmapSteps.map((step, i) => (
              <motion.div
                key={step.range}
                style={{ textAlign: 'center' }}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Step node */}
                <motion.div
                  style={{
                    width: 96, height: 96,
                    borderRadius: '50%',
                    background: `radial-gradient(circle at 35% 35%, ${step.color}40, ${step.color}15)`,
                    border: `3px solid ${step.color}60`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2.4rem', margin: '0 auto 24px',
                    boxShadow: `0 0 30px ${step.color}25`,
                    cursor: 'pointer',
                  }}
                  whileHover={{ scale: 1.1, boxShadow: `0 0 50px ${step.color}45` }}
                  animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
                  transition={{ y: { duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' } }}
                >
                  {step.icon}
                </motion.div>

                {/* Label */}
                <div style={{ padding: '20px 16px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 18, transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${step.color}50`; e.currentTarget.style.background = `${step.color}08` }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.background = 'var(--glass-bg)' }}
                >
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: step.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>
                    Class {step.range}
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', marginBottom: 8 }}>{step.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-light)', fontWeight: 600, marginBottom: 8 }}>{step.subjects}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <motion.div
          style={{ textAlign: 'center', marginTop: 56 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
        >
          <Link to="/courses">
            <motion.button className="btn-primary" whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.97 }}>
              Explore All Programs <FiArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .roadmap-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .roadmap-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
