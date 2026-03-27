import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { statsData } from '../../data/siteData'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import '../../styles/Sections.css'

function AnimatedNumber({ value, suffix, delay }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.5,
        delay,
        ease: 'easeOut',
      })
      return controls.stop
    }
  }, [inView, count, value, delay])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section className="section stats-section" ref={ref}>
      <div className="container">
        <motion.div
          className="stats-inner"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="stats-grid">
            {statsData.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                variants={fadeInUp}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} delay={i * 0.15} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
