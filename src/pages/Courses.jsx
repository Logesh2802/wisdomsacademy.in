import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FiCheck, FiClock, FiArrowRight, FiUsers, FiTag } from 'react-icons/fi'
import PageWrapper from '../components/ui/PageWrapper'
import CTASection from '../components/sections/CTASection'
import { coursesData } from '../data/siteData'
import { fadeInUp, staggerContainerSlow } from '../utils/animations'
import '../styles/Sections.css'

const TABS = [
  { label: 'All Programs', value: 'all' },
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
        <title>Courses | Wisdom's Academy - Classes 1 to 12 Academic Programs</title>
        <meta name="description" content="Browse all coaching programs at Wisdom's Academy — Primary, Middle School, Board Exams, JEE, NEET, and Commerce for students from Class 1 up to Class 12." />
      </Helmet>

      {/* Page Hero */}
      <section
        style={{
          minHeight: '55vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 120,
          paddingBottom: 60,
          background: 'var(--gradient-hero)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="grid-overlay" />
        <motion.div
           style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'rgba(77,150,255,0.08)', filter: 'blur(100px)', bottom: -150, left: -100 }}
           animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
           transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div className="section-tag" style={{ margin: '0 auto 24px' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="dot" /> Explore Our Curriculum
          </motion.div>
          <motion.h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: 20 }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Find Your <span className="gradient-text">Success Path</span>
          </motion.h1>
          <motion.p className="section-subtitle" style={{ margin: '0 auto', fontSize: '1.25rem', maxWidth: 700 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            From building foundational basics in primary school to cracking complex competitive exams — discover the right program for your goals.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ marginTop: -40, position: 'relative', zIndex: 3, marginBottom: 40 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', padding: '12px', background: 'rgba(8,8,26,0.8)', backdropFilter: 'blur(40px)', border: '1px solid var(--glass-border)', borderRadius: 100, maxWidth: 850, margin: '0 auto' }}>
             {TABS.map((tab) => (
               <motion.button
                 key={tab.value}
                 onClick={() => setActiveTab(tab.value)}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 style={{
                   padding: '12px 28px',
                   borderRadius: 99,
                   border: 'none',
                   background: activeTab === tab.value ? 'var(--gradient-primary)' : 'transparent',
                   color: activeTab === tab.value ? '#fff' : 'var(--text-secondary)',
                   fontSize: '0.9rem',
                   fontWeight: activeTab === tab.value ? 800 : 600,
                   cursor: 'pointer',
                   transition: 'all 0.3s ease',
                   position: 'relative',
                 }}
               >
                 {tab.label}
               </motion.button>
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
               style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
               initial={{ opacity: 0, y: 20 }}
               animate={inView ? { opacity: 1, y: 0 } : {}}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.4 }}
             >
               {filtered.map((course, idx) => (
                 <motion.div
                   key={course.id}
                   className="course-card card-3d"
                   initial={{ opacity: 0, y: 40 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.08, duration: 0.6 }}
                 >
                    <div className="course-card-top" style={{ background: course.gradient }} />
                    {course.featured && <div className="featured-badge">⭐ Best Seller</div>}
                    
                    <div className="course-icon-box" style={{ background: course.bgGradient, border: `1px solid ${course.topColor}25` }}>
                       {course.emoji}
                    </div>

                    <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                       <span className="badge-purple" style={{ fontSize: '0.65rem' }}>{course.category}</span>
                       <span className="badge-gold" style={{ fontSize: '0.65rem' }}>Class {course.classRange}</span>
                    </div>

                    <h2 className="course-card-title">{course.title}</h2>
                    <p className="course-card-desc">{course.description}</p>

                    <ul className="course-features">
                       {course.features.map(f => (
                         <li key={f} className="course-feature"><FiCheck size={14} style={{ color: course.topColor }} /> {f}</li>
                       ))}
                    </ul>

                    <div className="course-card-footer">
                       <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <span className="course-duration"><FiClock size={12} /> {course.duration}</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 5 }}>
                             <FiUsers size={11} /> {course.students} joined
                          </span>
                       </div>
                       <Link to="/contact">
                          <motion.button className="course-enroll-btn" style={{ '--btn-color': course.topColor }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                             Details <FiArrowRight />
                          </motion.button>
                       </Link>
                    </div>
                 </motion.div>
               ))}
             </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <div style={{ paddingBottom: 100 }}>
         <CTASection />
      </div>
    </PageWrapper>
  )
}
