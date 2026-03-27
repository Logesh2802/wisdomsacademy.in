import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageWrapper from '../components/ui/PageWrapper'
import CTASection from '../components/sections/CTASection'
import { fadeInUp, staggerContainerSlow, fadeInLeft } from '../utils/animations'

const topRankers = [
  { name: 'Arjun Patel', exam: 'JEE Advanced', rank: 'AIR 342', college: 'IIT Bombay', emoji: '🥇', color: 'var(--primary-light)' },
  { name: 'Priya Singh', exam: 'NEET', rank: '720/720', college: 'AIIMS Delhi', emoji: '🧪', color: 'var(--accent-2)' },
  { name: 'Sneha Kapoor', exam: 'Class 10 Board', rank: '94.6%', college: 'CBSE X', emoji: '📚', color: 'var(--secondary)' },
  { name: 'Aryan Gupta', exam: 'JEE Mains', rank: '98.4 %ile', college: 'NIT Trichy', emoji: '🚀', color: 'var(--accent-3)' },
  { name: 'Rohit Kumar', exam: 'NEET Qualifying', rank: 'AIR 412', college: 'MAMC Delhi', emoji: '⚕️', color: 'var(--accent-4)' },
  { name: 'Aryan Rao (P)', exam: 'Olympiad (Maths)', rank: 'State Rank 4', college: 'Class 5 Topper', emoji: '🌟', color: 'var(--accent)' },
  { name: 'Kavya J. (M)', exam: 'Class 8 Finals', rank: '91% Aggregate', college: 'Scholar Batch', emoji: '📐', color: 'var(--accent-2)' },
  { name: 'Priya Joshi', exam: 'Class 12 Commerce', rank: '97/100', college: 'Accounts Star', emoji: '💼', color: 'var(--accent-4)' },
]

const successMetrics = [
  { label: 'Board Excellence', value: '98%', desc: 'Students scoring above 85% annually', color: 'var(--primary-light)' },
  { label: 'JEE Selection', value: '1 in 4', desc: 'Selection ratio in mains & advanced', color: 'var(--accent-3)' },
  { label: 'Primary Progress', value: '100%', desc: 'Parent satisfaction in Class 1-5', color: 'var(--accent)' },
]

export default function Results() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [refStats, inViewStats] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <PageWrapper>
      <Helmet>
        <title>Our Results | Wisdom's Academy - Class 1 to 12 Hall of Fame</title>
        <meta name="description" content="Witness the excellence of Wisdom's Academy students across all levels — from primary Olympiads to board exams, JEE, and NEET success stories." />
      </Helmet>

      {/* Hero */}
      <section style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', paddingTop: 140, paddingBottom: 80, background: 'var(--gradient-hero)', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-overlay" />
        <motion.div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'rgba(255,217,61,0.05)', filter: 'blur(100px)', top: -100, right: -100 }} animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 12, repeat: Infinity }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div className="section-tag" style={{ margin: '0 auto 24px' }} variants={fadeInUp} initial="hidden" animate="visible">
            <span className="dot" />Success Stories
          </motion.div>
          <motion.h1 className="section-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }} variants={fadeInUp} initial="hidden" animate="visible">
            Our Hall of <span className="gradient-text-gold">Champions</span>
          </motion.h1>
          <motion.p className="section-subtitle" style={{ margin: '0 auto', fontSize: '1.2rem', maxWidth: 650 }} variants={fadeInUp} initial="hidden" animate="visible">
            From the first steps of primary education to the heights of national competitive exams, our students consistently redefine what's possible.
          </motion.p>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="section" style={{ padding: '0 0 100px 0', marginTop: -60, position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {successMetrics.map((m, i) => (
              <motion.div key={m.label} className="glass" style={{ padding: 40, borderRadius: 28, textAlign: 'center', background: 'rgba(8,8,26,0.85)', backdropFilter: 'blur(40px)', border: `1px solid ${m.color}20` }} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }} whileHover={{ y: -8, background: `${m.color}05`, borderColor: `${m.color}40` }}>
                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: m.color, textShadow: `0 0 30px ${m.color}30`, marginBottom: 8 }}>{m.value}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: 8 }}>{m.label}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Performers Grid */}
      <section className="section" ref={ref} style={{ background: 'var(--bg-900)' }}>
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: 80 }} variants={staggerContainerSlow} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <motion.div className="section-tag" style={{ margin: '0 auto 20px' }} variants={fadeInUp}><span className="dot" />Top Scorers</motion.div>
            <motion.h2 className="section-title" variants={fadeInUp}>Recent <span className="gradient-text">Milestones</span></motion.h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Celebrating students across all grade levels who achieved greatness this year.</p>
          </motion.div>

          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}
            variants={staggerContainerSlow}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {topRankers.map((r, i) => (
              <motion.div
                key={r.name}
                className="glass card-3d"
                style={{ padding: 32, borderRadius: 28, textAlign: 'center', position: 'relative', overflow: 'hidden' }}
                variants={fadeInUp}
                whileHover={{ y: -10, borderColor: `${r.color}60`, background: `${r.color}08` }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: r.color }} />
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>{r.emoji}</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: r.color, marginBottom: 8, letterSpacing: '-0.02em' }}>{r.rank}</div>
                <div className="badge" style={{ backgroundColor: `${r.color}20`, color: r.color, border: `1px solid ${r.color}30`, marginBottom: 16 }}>{r.exam}</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff', marginBottom: 4 }}>{r.name}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>{r.college}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Distinction Stats */}
      <section className="section" ref={refStats} style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(108,99,255,0.05) 0%, rgba(255,107,107,0.03) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
             <motion.div variants={fadeInLeft} initial="hidden" animate={inViewStats ? 'visible' : 'hidden'}>
                <div className="section-tag"><span className="dot" />Academic Records</div>
                <h2 className="section-title">The Wisdom's <span className="gradient-text">Difference</span></h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 32 }}>
                  We don't just teach for the exam day; we teach for life. Our success is measured by the growth of our students, from their first maths problem in Class 1 to their final board exam paper in Class 12.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                   {[
                     { l: '100% Passing Rate', p: 100, c: 'var(--primary-light)' },
                     { l: '85% Students Scored 90%+', p: 85, c: 'var(--secondary)' },
                     { l: '95% Primary Improvement', p: 95, c: 'var(--accent-2)' },
                   ].map(stat => (
                     <div key={stat.l}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                           <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{stat.l}</span>
                           <span style={{ fontSize: '0.9rem', fontWeight: 800, color: stat.c }}>{stat.p}%</span>
                        </div>
                        <div style={{ height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 99 }}>
                           <motion.div style={{ height: '100%', background: stat.c, borderRadius: 99 }} initial={{ width: 0 }} animate={inViewStats ? { width: `${stat.p}%` } : {}} transition={{ duration: 1.2, ease: 'easeOut' }} />
                        </div>
                     </div>
                   ))}
                </div>
             </motion.div>
             
             <motion.div variants={fadeInUp} initial="hidden" animate={inViewStats ? 'visible' : 'hidden'} className="glass" style={{ padding: 48, borderRadius: 32, textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: 20 }}>📊</div>
                <h3 className="section-title" style={{ fontSize: '2rem' }}>Parent <span className="gradient-text">Trust</span></h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 32 }}>
                  "Wisdom's Academy has been a second home for my two kids. From Class 4 to Class 10, the transformation in their approach to learning has been magical."
                </p>
                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: 24 }}>
                   <div style={{ fontWeight: 800, color: '#fff' }}>— Mr. R.K. Shrivastav</div>
                   <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Parent of Class 6 & 10 Students</div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  )
}
