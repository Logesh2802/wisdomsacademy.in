import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { FiClock, FiArrowRight, FiCheck, FiUsers } from 'react-icons/fi'
import { coursesData } from '../../data/siteData'
import { fadeInUp, staggerContainerSlow } from '../../utils/animations'
import '../../styles/Sections.css'

const TABS = [
  { label: 'All Courses', value: 'all' },
  { label: 'Primary (1–5)', value: 'Primary Level' },
  { label: 'Middle (6–8)', value: 'Middle Level' },
  { label: 'Board Prep (9–10)', value: 'Board Prep' },
  { label: 'Senior (11–12)', value: 'Class 11–12' },
]

export default function CoursesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [activeTab, setActiveTab] = useState('all')

  const filtered = activeTab === 'all'
    ? coursesData
    : coursesData.filter(c => c.category.startsWith(activeTab) || c.category.includes(activeTab.split('|')[0].trim()))

  return (
    <section className="section courses-section" ref={ref}>
      <motion.div
        className="orb orb-purple"
        style={{ width: 600, height: 600, top: -100, right: -200 }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container">
        {/* Header */}
        <motion.div
          className="courses-header"
          variants={staggerContainerSlow}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-tag" variants={fadeInUp}>
            <span className="dot" />Classes 1 to 12 — All Programs
          </motion.div>
          <motion.h2 className="section-title" variants={fadeInUp}>
            Programs Designed for <span className="gradient-text">Every Stage</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeInUp}>
            From a child's first steps in learning to cracking JEE, NEET & Board Exams — we have the perfect program for every student.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 56 }}
        >
          {TABS.map((tab) => (
            <motion.button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '9px 20px',
                borderRadius: 9999,
                border: activeTab === tab.value ? '1.5px solid rgba(108,99,255,0.6)' : '1.5px solid var(--glass-border)',
                background: activeTab === tab.value ? 'rgba(108,99,255,0.18)' : 'rgba(255,255,255,0.04)',
                color: activeTab === tab.value ? '#fff' : 'var(--text-secondary)',
                fontFamily: 'var(--font-primary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                position: 'relative',
              }}
            >
              {activeTab === tab.value && (
                <motion.span
                  layoutId="tab-indicator"
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, rgba(108,99,255,0.25), rgba(255,107,107,0.12))',
                    borderRadius: 9999,
                    zIndex: 0,
                  }}
                />
              )}
              <span style={{ position: 'relative', zIndex: 1 }}>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="courses-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {filtered.map((course, idx) => (
              <motion.div
                key={course.id}
                className={`course-card card-3d ${course.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, scale: 1.01 }}
              >
                {/* Animated top stripe */}
                <div className="course-card-top" style={{ background: course.gradient }} />
                {course.featured && (
                  <motion.div
                    className="featured-badge"
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⭐ Most Popular
                  </motion.div>
                )}

                {/* Icon box */}
                <div className="course-icon-box" style={{ background: course.bgGradient, border: `1px solid ${course.topColor}30` }}>
                  {course.emoji}
                </div>

                {/* Class range pill */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span
                    className="course-card-category"
                    style={{ color: course.categoryColor, marginBottom: 0 }}
                  >
                    {course.category}
                  </span>
                  <span style={{ padding: '2px 10px', background: `${course.topColor}15`, border: `1px solid ${course.topColor}30`, borderRadius: 999, fontSize: '0.7rem', fontWeight: 800, color: course.topColor }}>
                    Class {course.classRange}
                  </span>
                </div>

                <h3 className="course-card-title">{course.title}</h3>
                <p className="course-card-desc">{course.description}</p>

                <ul className="course-features">
                  {course.features.map((f) => (
                    <li key={f} className="course-feature">
                      <FiCheck size={13} style={{ color: course.topColor }} /> {f}
                    </li>
                  ))}
                </ul>

                <div className="course-card-footer">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <span className="course-duration"><FiClock size={12} />{course.duration}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <FiUsers size={11} /> {course.students} enrolled
                    </span>
                  </div>
                  <Link to="/contact">
                    <motion.button
                      className="course-enroll-btn"
                      style={{ '--btn-color': course.topColor }}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      Enroll Now <FiArrowRight size={12} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
