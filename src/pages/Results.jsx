import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageWrapper from '../components/ui/PageWrapper'
import CTASection from '../components/sections/CTASection'
import { resultsBanners } from '../data/siteData'
import { fadeInUp, staggerContainerSlow, fadeInLeft, fadeInRight } from '../utils/animations'

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
  const [refBanners, inViewBanners] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [refStats, inViewStats] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <PageWrapper>
      <Helmet>
        <title>Our Results | WISDOM'S ACADEMY - Class 1 to 12 Hall of Fame</title>
        <meta name="description" content="Witness the excellence of WISDOM'S ACADEMY students across all levels — from primary Olympiads to board exams, JEE, and NEET success stories." />
      </Helmet>

      {/* Hero */}
      <section style={{ display: 'flex', alignItems: 'center', paddingTop: 130, paddingBottom: 50, background: 'var(--gradient-hero)', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-overlay" />
        <motion.div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'rgba(255,217,61,0.05)', filter: 'blur(100px)', top: -100, right: -100 }} animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 12, repeat: Infinity }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div className="section-tag" style={{ margin: '0 auto 24px' }} variants={fadeInUp} initial="hidden" animate="visible">
            <span className="dot" />Success Stories
          </motion.div>
          <motion.h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }} variants={fadeInUp} initial="hidden" animate="visible">
            Our Hall of <span className="gradient-text-gold">Champions</span>
          </motion.h1>
          <motion.p className="section-subtitle" style={{ margin: '0 auto', fontSize: '1.2rem', maxWidth: 650, color: 'rgba(255,255,255,0.9)' }} variants={fadeInUp} initial="hidden" animate="visible">
            From building foundations in primary to cracking JEE/NEET, our students consistently redefine excellence.
          </motion.p>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="section" style={{ padding: '40px 0 80px 0', position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div className="results-metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {successMetrics.map((m, i) => (
              <motion.div key={m.label} className="glass" style={{ padding: 40, borderRadius: 28, textAlign: 'center', background: 'rgba(15,15,35,0.8)', backdropFilter: 'blur(40px)', border: `1px solid ${m.color}25` }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }} whileHover={{ y: -8, background: `${m.color}08` }}>
                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: m.color, textShadow: `0 0 30px ${m.color}30`, marginBottom: 8 }}>{m.value}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: 8 }}>{m.label}</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Result Banners Showcase */}
      <section className="section" ref={refBanners} style={{ background: 'var(--bg-800)', position: 'relative', overflow: 'hidden', padding: '80px 0' }}>
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: 64 }} variants={staggerContainerSlow} initial="hidden" animate={inViewBanners ? 'visible' : 'hidden'}>
            <motion.div className="section-tag" style={{ margin: '0 auto 20px' }} variants={fadeInUp}><span className="dot" />Latest Achievements</motion.div>
            <motion.h2 className="section-title" variants={fadeInUp}>Result <span className="gradient-text">Banners</span></motion.h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 32, alignItems: 'stretch' }}>
            {resultsBanners.map((banner, idx) => (
              <motion.div
                key={banner.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="glass"
                style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', background: 'rgba(20,20,40,0.6)' }}
                whileHover={{ y: -10, borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <div style={{ width: '100%', aspectRatio: '1/1.4', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
                   <img 
                      src={banner.src} 
                      alt={banner.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                   />
                </div>
                <div style={{ padding: '20px', textAlign: 'center', background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 'auto' }}>
                   <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>{banner.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Performers Grid */}
      {/* <section className="section" ref={ref} style={{ background: 'var(--bg-900)' }}>
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: 80 }} variants={staggerContainerSlow} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <motion.div className="section-tag" style={{ margin: '0 auto 20px' }} variants={fadeInUp}><span className="dot" />Top Scorers</motion.div>
            <motion.h2 className="section-title" variants={fadeInUp}>Star <span className="gradient-text">Performers</span></motion.h2>
          </motion.div>

          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}
            variants={staggerContainerSlow}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {topRankers.map((r, i) => (
              <motion.div
                key={r.name}
                className="glass card-3d"
                style={{ padding: 32, borderRadius: 28, textAlign: 'center', position: 'relative', overflow: 'hidden', background: 'rgba(15,15,35,0.7)' }}
                variants={fadeInUp}
                whileHover={{ y: -10, borderColor: `${r.color}60`, background: `${r.color}08` }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: r.color }} />
                <div style={{ fontSize: '2.8rem', marginBottom: 16 }}>{r.emoji}</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: r.color, marginBottom: 8 }}>{r.rank}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: 4 }}>{r.name}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{r.college}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Distinction Stats */}
      <section className="section" ref={refStats} style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(108,99,255,0.05) 0%, rgba(255,107,107,0.03) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 60 }}>
          <div className="results-diff-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 60, alignItems: 'center' }}>
             <motion.div variants={fadeInLeft} initial="hidden" animate={inViewStats ? 'visible' : 'hidden'}>
                <h2 className="section-title">The WISDOM'S ACADEMY <br /><span className="gradient-text">Difference</span></h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 40 }}>
                   {[
                     { l: '100% Passing Rate', p: 100, c: 'var(--primary-light)' },
                     { l: '85% Students Scored 90%+', p: 85, c: 'var(--secondary)' },
                     { l: '95% Primary Improvement', p: 95, c: 'var(--accent-2)' },
                   ].map(stat => (
                     <div key={stat.l}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                           <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>{stat.l}</span>
                           <span style={{ fontSize: '0.95rem', fontWeight: 800, color: stat.c }}>{stat.p}%</span>
                        </div>
                        <div style={{ height: 8, background: 'rgba(255,255,255,0.05)', borderRadius: 99 }}>
                           <motion.div style={{ height: '100%', background: stat.c, borderRadius: 99 }} initial={{ width: 0 }} animate={inViewStats ? { width: `${stat.p}%` } : {}} transition={{ duration: 1.2, ease: 'easeOut' }} />
                        </div>
                     </div>
                   ))}
                </div>
             </motion.div>
             
             <motion.div variants={fadeInRight} initial="hidden" animate={inViewStats ? 'visible' : 'hidden'} className="glass" style={{ padding: 48, borderRadius: 32, textAlign: 'center', background: 'rgba(15,15,35,0.8)' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: 20 }}>📊</div>
                <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: 20 }}>Parent <span className="gradient-text">Trust</span></h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 24, fontSize: '1.05rem', lineHeight: 1.8 }}>
                   "WISDOM'S ACADEMY has been a second home for my two kids. The transformation in their approach to learning has been magical."
                </p>
                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: 20 }}>
                   <div style={{ fontWeight: 800, color: '#fff', fontSize: '1.1rem' }}>— Mr. R.K. Shrivastav</div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <style>{`
        @media (max-width: 768px) {
          .results-metrics-grid { margin-top: 0 !important; }
          .results-diff-grid { gap: 40px !important; }
        }
      `}</style>
    </PageWrapper>
  )
}
