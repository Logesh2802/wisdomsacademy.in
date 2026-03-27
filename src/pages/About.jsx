import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageWrapper from '../components/ui/PageWrapper'
import FacultySection from '../components/sections/FacultySection'
import CTASection from '../components/sections/CTASection'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainerSlow } from '../utils/animations'

const milestones = [
  { year: '2004', title: 'The Beginning', desc: 'Started as a small tutoring centre for Class 10 with just 15 students.' },
  { year: '2008', title: 'High School Expansion', desc: 'Introduced Class 11–12 Science & Commerce batches with expert faculty.' },
  { year: '2012', title: 'The K-12 Vision', desc: 'Expanded to include Primary (1–5) and Middle (6–8) sections with activity-based learning.' },
  { year: '2018', title: 'JEE & NEET Success', desc: 'Produced first set of Top 500 AIR rankers in JEE Advanced and NEET.' },
  { year: '2021', title: 'Tech-Enabled Learning', desc: 'Launched digital parent-student portal for real-time progress tracking.' },
  { year: '2024', title: '20 Years of Trust', desc: 'Over 2500+ students across Classes 1-12 currently pursuing excellence at our campus.' },
]

const values = [
  { icon: '🎯', title: 'Holistic Growth', desc: 'We focus not just on ranks, but on building confidence and character from Class 1 onwards.' },
  { icon: '❤️', title: 'Student First', desc: 'Every child is unique. Our small batch sizes ensure personal attention to every learner.' },
  { icon: '🔬', title: 'Modern Pedagogy', desc: 'Interactive teaching methods combined with rigorous testing for board & competitive exams.' },
  { icon: '🌟', title: 'Integrity', desc: 'Transparent reporting to parents and honest guidance for every student\'s career path.' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <PageWrapper>
      <Helmet>
        <title>About Us | WISDOM'S ACADEMY - Classes 1 to 12 Excellence</title>
        <meta name="description" content="WISDOM'S ACADEMY - 20+ years of sculpting success for students from Class 1 up to Class 12. Discover our dedicated faculty and student-first philosophy." />
      </Helmet>

      {/* Hero */}
      <section style={{ display: 'flex', alignItems: 'center', paddingTop: 130, paddingBottom: 50, background: 'var(--gradient-hero)', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-overlay" />
        <motion.div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'rgba(108,99,255,0.12)', filter: 'blur(100px)', top: -200, left: -200 }} animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 12, repeat: Infinity }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="about-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: 60, alignItems: 'center' }}>
            <motion.div variants={staggerContainerSlow} initial="hidden" animate="visible">
              <motion.div className="section-tag" variants={fadeInUp}><span className="dot" />Our Legacy</motion.div>
              <motion.h1 className="section-title" variants={fadeInUp} style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                Nurturing Potential <br />Since <span className="gradient-text">2004</span>
              </motion.h1>
              <motion.p className="section-subtitle" variants={fadeInUp} style={{ fontSize: '1.15rem' }}>
                WISDOM'S ACADEMY began with a single classroom and a simple goal: to provide high-quality, personalized education that treats every student as an individual.
              </motion.p>
              <motion.p className="section-subtitle" variants={fadeInUp} style={{ marginTop: 24 }}>
                Today, we serve over 2,500 students from <strong>Class 1 to Class 12</strong>, bridging the gap between school curriculum and competitive excellence.
              </motion.p>
            </motion.div>
            
            <motion.div variants={fadeInRight} initial="hidden" animate="visible">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 20 }}>
                {[
                  { n: '20+', l: 'Years Growth', c: 'var(--primary-light)' },
                  { n: '2500+', l: 'Happy Students', c: 'var(--secondary)' },
                  { n: '150+', l: 'Top Rankers', c: 'var(--accent-2)' },
                  { n: '12+', l: 'Classes Covered', c: 'var(--accent-3)' },
                ].map((s, i) => (
                  <motion.div key={s.l} className="glass" style={{ padding: 24, borderRadius: 24, textAlign: 'center', border: `1px solid ${s.c}20`, background: `${s.c}05` }} whileHover={{ y: -6, background: `${s.c}10`, borderColor: `${s.c}40` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}>
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: s.c }}>{s.n}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{s.l}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section" ref={ref} style={{ background: 'var(--bg-900)' }}>
        <div className="container">
          <div className="about-philosophy-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
            <motion.div variants={fadeInLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="glass" style={{ padding: 48, borderRadius: 32, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', background: 'var(--gradient-primary)' }} />
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: 24 }}>Our <span className="gradient-text">Philosophy</span></h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: 24 }}>
                At <strong>WISDOM'S ACADEMY</strong>, we believe that education is not a sprint, but a marathon. Concepts learned in Class 1 build the foundation for Class 12.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['Interactive', 'Personalized', 'Result-Driven'].map(tag => (
                  <span key={tag} style={{ padding: '6px 14px', borderRadius: 99, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', fontSize: '0.75rem', fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={staggerContainerSlow} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
              {values.map((v) => (
                <motion.div key={v.title} className="glass" style={{ padding: 24, borderRadius: 24, textAlign: 'center' }} variants={fadeInUp}>
                  <div style={{ fontSize: '2.4rem', marginBottom: 16 }}>{v.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, var(--bg-900), var(--bg-800), var(--bg-900))' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 className="section-title">Milestones of <span className="gradient-text">Excellence</span></h2>
          </div>
          
          <div className="timeline-container" style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
            <div className="timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, transparent, #6c63ff, #ff6b6b, transparent)', transform: 'translateX(-50%)' }} />
            
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="timeline-item"
                style={{ display: 'flex', gap: 40, marginBottom: 50, flexDirection: i % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'center' }}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div style={{ flex: 1, textAlign: i % 2 === 0 ? 'right' : 'left' }}>
                  <div className="glass" style={{ padding: '24px 30px', borderRadius: 24 }}>
                    <div className="gradient-text" style={{ fontSize: '1.6rem', fontWeight: 900 }}>{m.year}</div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: 8 }}>{m.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{m.desc}</p>
                  </div>
                </div>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#6c63ff', boxShadow: '0 0 15px #6c63ff', flexShrink: 0, zIndex: 1 }} />
                <div className="timeline-spacer" style={{ flex: 1 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FacultySection />
      
      <div style={{ paddingBottom: 100 }}>
         <CTASection />
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-hero-grid, .about-philosophy-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .timeline-line { left: 20px !important; transform: none !important; }
          .timeline-item { flexDirection: row !important; gap: 20px !important; text-align: left !important; }
          .timeline-item > div:first-child { textAlign: left !important; order: 2; }
          .timeline-item > div:nth-child(2) { order: 1; flex-shrink: 0; }
          .timeline-spacer { display: none; }
        }
      `}</style>
    </PageWrapper>
  )
}
