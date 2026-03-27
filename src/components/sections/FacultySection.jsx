import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { facultyData } from '../../data/siteData'
import { fadeInUp, staggerContainerSlow } from '../../utils/animations'
import '../../styles/Sections.css'

export default function FacultySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section faculty-section" ref={ref}>
      {/* Glow */}
      <motion.div className="orb orb-purple"
        style={{ width: 500, height: 500, bottom: -100, right: -150 }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />

      <div className="container">
        <motion.div
          className="faculty-header"
          variants={staggerContainerSlow}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-tag" variants={fadeInUp}>
            <span className="dot" />Expert Faculty
          </motion.div>
          <motion.h2 className="section-title" variants={fadeInUp}>
            Learn from the <span className="gradient-text">Best Educators</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeInUp}>
            Specialist teachers for every class level — from Primary to Class 12. IIT, AIIMS & top university alumni combined with experienced school educators.
          </motion.p>
        </motion.div>

        <motion.div
          className="faculty-grid"
          variants={staggerContainerSlow}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {facultyData.map((f, i) => (
            <motion.div
              key={f.id}
              className="faculty-card"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              {/* Animated background orb */}
              <motion.div
                style={{
                  position: 'absolute', top: -30, right: -30,
                  width: 100, height: 100, borderRadius: '50%',
                  background: `${f.color}12`, filter: 'blur(30px)',
                  pointerEvents: 'none',
                }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div
                className="faculty-avatar"
                style={{ background: `${f.color}15`, borderColor: `${f.color}35` }}
              >
                {f.emoji}
                {/* Glow ring */}
                <motion.div
                  style={{
                    position: 'absolute', inset: -8,
                    borderRadius: '50%',
                    border: `2px solid ${f.color}20`,
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              <h3 className="faculty-name">{f.name}</h3>
              <p className="faculty-subject" style={{ color: f.color }}>{f.subject}</p>
              <p className="faculty-exp">{f.experience}</p>

              <div className="faculty-qualifications">
                {f.qualifications.map((q) => (
                  <motion.span
                    key={q}
                    className="qualification-tag"
                    whileHover={{ background: `${f.color}20`, color: f.color, borderColor: `${f.color}40` }}
                  >
                    {q}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
