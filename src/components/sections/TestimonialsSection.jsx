import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { testimonialsData } from '../../data/siteData'
import { fadeInUp, staggerContainerSlow } from '../../utils/animations'
import '../../styles/Sections.css'

const avatarColors = ['#6c63ff', '#ff6b6b', '#6bcb77', '#4d96ff', '#ffd93d', '#ff6b6b']

export default function TestimonialsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section testimonials-section" ref={ref}>
      <motion.div
        className="orb orb-blue"
        style={{ width: 500, height: 500, bottom: -150, left: -150 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container">
        <motion.div
          className="testimonials-header"
          variants={staggerContainerSlow}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-tag" variants={fadeInUp}>
            <span className="dot" />
            Student Success Stories
          </motion.div>
          <motion.h2 className="section-title" variants={fadeInUp}>
            What Our <span className="gradient-text">Champions Say</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeInUp}>
            Real stories from real students who achieved their dreams through Wisdom's Academy.
          </motion.p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={staggerContainerSlow}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {testimonialsData.map((t, i) => (
            <motion.div
              key={t.id}
              className="testimonial-card"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
            >
              <div
                className="testimonial-result badge"
                style={{
                  background: `${t.resultColor}20`,
                  color: t.resultColor,
                  border: `1px solid ${t.resultColor}40`,
                }}
              >
                🏆 {t.result}
              </div>

              <div className="quote-icon">"</div>
              <p className="testimonial-text">{t.text}</p>

              <div className="testimonial-author">
                <div
                  className="author-avatar"
                  style={{ background: `linear-gradient(135deg, ${avatarColors[i]}, ${avatarColors[(i + 2) % 6]})` }}
                >
                  {t.emoji}
                </div>
                <div className="author-info">
                  <strong>{t.author}</strong>
                  <div className="author-stars">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <span key={j}>⭐</span>
                    ))}
                  </div>
                  <span>{t.detail}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
