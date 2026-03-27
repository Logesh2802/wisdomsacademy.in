import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FiCheck, FiClock, FiArrowRight, FiUsers } from 'react-icons/fi'
import PageWrapper from '../components/ui/PageWrapper'
import CTASection from '../components/sections/CTASection'
import { coursesData } from '../data/siteData'
import '../styles/Sections.css'

const TABS = [
  { label: 'All', value: 'all' },
  { label: 'Primary (1–5)', value: 'Primary Level' },
  { label: 'Middle (6–8)', value: 'Middle Level' },
  { label: 'Board Prep', value: 'Board Prep' },
  { label: 'Class 11–12', value: 'Class 11–12' },
]

export default function Courses() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeTab, setActiveTab] = useState('all')

  const filtered = activeTab === 'all'
    ? coursesData
    : coursesData.filter(c => c.category.startsWith(activeTab) || c.category.includes(activeTab.split('|')[0].trim()))

  return (
    <PageWrapper>
      <Helmet>
        <title>Courses | WISDOM'S ACADEMY - K-12 Academic Programs</title>
        <meta name="description" content="Explore WISDOM'S ACADEMY academic programs for Classes 1 to 12. Primary foundations, Middle School, Board Exams, and NEET/JEE preparation." />
      </Helmet>

      {/* Page Hero */}
      <section style={{ display: 'flex', alignItems: 'center', paddingTop: 130, paddingBottom: 50, background: 'var(--gradient-hero)', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-overlay" />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div className="section-tag" style={{ margin: '0 auto 24px' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="dot" /> Explore Our Curriculum
          </motion.div>
          <motion.h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Find Your <span className="gradient-text">Success Path</span>
          </motion.h1>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ marginTop: -40, position: 'relative', zIndex: 3, marginBottom: 40 }}>
        <div className="container">
          <div className="course-tabs-bar" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', padding: '12px', background: 'rgba(8,8,26,0.85)', backdropFilter: 'blur(40px)', border: '1px solid var(--glass-border)', borderRadius: 100, maxWidth: 900, margin: '0 auto' }}>
             {TABS.map((tab) => (
               <button
                 key={tab.value}
                 onClick={() => setActiveTab(tab.value)}
                 className={activeTab === tab.value ? 'tab-btn active' : 'tab-btn'}
                 style={{
                    padding: '10px 24px',
                    borderRadius: 99,
                    border: 'none',
                    background: activeTab === tab.value ? 'var(--gradient-primary)' : 'transparent',
                    color: activeTab === tab.value ? '#fff' : 'rgba(255,255,255,0.6)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                 }}
               >
                 {tab.label}
               </button>
             ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section" ref={ref} style={{ paddingTop: 40, paddingBottom: 100 }}>
        <div className="container">
          <AnimatePresence mode="wait">
             <motion.div
               key={activeTab}
               style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}
               initial={{ opacity: 0, y: 20 }}
               animate={inView ? { opacity: 1, y: 0 } : {}}
               exit={{ opacity: 0, y: -20 }}
             >
               {filtered.map((course) => (
                 <motion.div
                   key={course.id}
                   className="course-card"
                   whileHover={{ y: -8 }}
                 >
                    <div className="course-card-top" style={{ background: course.gradient }} />
                    <div className="course-icon-box" style={{ background: course.bgGradient }}>{course.emoji}</div>
                    
                    <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                       <span className="badge-purple" style={{ fontSize: '0.65rem' }}>{course.category}</span>
                       <span className="badge-gold" style={{ fontSize: '0.65rem' }}>Class {course.classRange}</span>
                    </div>

                    <h2 className="course-card-title">{course.title}</h2>
                    <p className="course-card-desc">{course.description}</p>

                    <ul className="course-features">
                       {course.features.map(f => (
                         <li key={f} className="course-feature"><FiCheck size={14} /> {f}</li>
                       ))}
                    </ul>

                    <div className="course-card-footer">
                       <span className="course-duration"><FiClock size={12} /> {course.duration}</span>
                       <Link to="/contact">
                          <motion.button className="course-enroll-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                             Enquire <FiArrowRight />
                          </motion.button>
                       </Link>
                    </div>
                 </motion.div>
               ))}
             </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTASection />
      <style>{`
        @media (max-width: 640px) {
          .course-tabs-bar { border-radius: 20px !important; padding: 16px 8px !important; gap: 4px !important; }
          .tab-btn { padding: 8px 16px !important; font-size: 0.75rem !important; }
        }
      `}</style>
    </PageWrapper>
  )
}
