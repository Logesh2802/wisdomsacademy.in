import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiUser, FiMessageSquare, FiBookOpen } from 'react-icons/fi'
import PageWrapper from '../components/ui/PageWrapper'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainerSlow } from '../utils/animations'

const contactInfo = [
  {
    icon: <FiMapPin />,
    title: 'Visit Us',
    lines: [
      'C/7 LAXMI NIWAS BESIDE DR. SHARMA DENTAL CLINIC',
      'PIPELINE KAJUPADA SAKINAKA KURLA',
      'ANDHERI ROAD MUMBAI 400072'
    ],
    color: 'var(--primary-light)',
  },
  {
    icon: <FiPhone />,
    title: 'Call Us (Vishnu Sir)',
    lines: ['9321302424', '9324753030', '9867840715', '7045024786'],
    color: 'var(--accent-2)',
  },
  {
    icon: <FiMail />,
    title: 'Email Us',
    lines: ['wisdomsacademy.in@gmail.com'],
    color: 'var(--accent-3)',
  },
  {
    icon: <FiClock />,
    title: 'Timings',
    lines: ['Mon-Sat: 7:00 AM - 9:00 PM', 'Sun: 9:00 AM - 1:00 PM'],
    color: 'var(--accent)',
  },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', phone: '', email: '', grade: '', message: '' })
  const [status, setStatus] = useState('') // '', 'submitting', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/mqakvjnd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           ...form,
           _replyto: form.email,
           _subject: `New Admission Enquiry for Grade ${form.grade}`
        })
      })

      if (response.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', grade: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Contact Us | Book Your FREE Demo Class at Sakinaka - WISDOM'S ACADEMY</title>
        <meta name="description" content="Reach out to WISDOM'S ACADEMY Sakinaka for Class 1 to 12 enquiries. Call Vishnu Sir at 9321302424. Located near Kurla-Andheri Pipeline Road. Free demo available now!" />
        <meta name="keywords" content="Contact Wisdoms Academy, Vishnu Sir Phone, Coaching Classes Near Sakinaka Metro, Enrolment FAQ Academy Kurla, Tuition Classes Contact Sakinaka" />
      </Helmet>

      {/* Hero */}
      <section style={{ display: 'flex', alignItems: 'center', paddingTop: 'clamp(100px, 12vw, 130px)', paddingBottom: 'clamp(30px, 5vw, 50px)', background: 'var(--gradient-hero)', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-overlay" />
        <motion.div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'rgba(108,99,255,0.1)', filter: 'blur(120px)', top: -150, right: -150 }} animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity }} />
        
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div className="section-tag" style={{ margin: '0 auto 24px' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <span className="dot" />Get In Touch
          </motion.div>
          <motion.h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Start Your <span className="gradient-text">Success Journey</span>
          </motion.h1>
          <motion.p className="section-subtitle" style={{ margin: '0 auto', fontSize: '1.2rem', maxWidth: 600 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Whether you have a question about our Class 1 foundation program or Class 12 JEE prep, our experts at WISDOM'S ACADEMY are here to help.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" ref={ref} style={{ background: 'var(--bg-900)' }}>
        <div className="container">
          
          {/* Info cards row */}
          <div
            className="contact-info-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 80 }}
          >
            {contactInfo.map((c) => (
              <motion.div
                key={c.title}
                className="glass"
                style={{ padding: 32, borderRadius: 24, textAlign: 'center', border: `1px solid ${c.color}15` }}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, borderColor: `${c.color}50`, background: `${c.color}05` }}
              >
                <div style={{ width: 60, height: 60, borderRadius: 18, background: `${c.color}15`, border: `1px solid ${c.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: c.color, fontSize: '1.5rem', boxShadow: `0 0 20px ${c.color}20` }}>
                  {c.icon}
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{l}</p>
                ))}
              </motion.div>
            ))}
          </div>

          <div className="contact-main-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 60, alignItems: 'start' }}>
            
            {/* Form Column */}
            <motion.div
              className="glass contact-form-container"
              style={{ padding: '56px 48px', borderRadius: 32, position: 'relative', overflow: 'hidden' }}
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 4, background: 'var(--gradient-primary)' }} />
              
              <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 900, color: '#fff', marginBottom: 12 }}>Book Free Demo Class</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: 40 }}>Choose your grade and subjects — we'll arrange a personalized demo session for your child.</p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '60px 0' }}
                >
                  <div style={{ fontSize: '5rem', marginBottom: 20 }}>📬</div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: 12 }}>Enquiry Sent Successfully!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                    Your message has been sent to <strong>wisdomsacademy.in@gmail.com</strong>. Our academic counselor will call you within 24 hours to schedule the demo. Get ready to witness the WISDOM'S ACADEMY difference!
                  </p>
                  <motion.button className="btn-outline" style={{ marginTop: 32 }} onClick={() => setStatus('')}>Back to Form</motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Student Name</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-light)' }}><FiUser /></span>
                        <input
                          type="text"
                          name="name"
                          placeholder="Aryan Sharma"
                          required
                          value={form.name}
                          onChange={(e) => setForm({...form, name: e.target.value})}
                          style={{ width: '100%', padding: '14px 16px 14px 44px', background: 'rgba(255,255,255,0.03)', border: '1.5px solid var(--glass-border)', borderRadius: 14, color: '#fff', outline: 'none', transition: 'all 0.3s' }}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Guardian Phone</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-2)' }}><FiPhone /></span>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Contact Number"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({...form, phone: e.target.value})}
                          style={{ width: '100%', padding: '14px 16px 14px 44px', background: 'rgba(255,255,255,0.03)', border: '1.5px solid var(--glass-border)', borderRadius: 14, color: '#fff', outline: 'none', transition: 'all 0.3s' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email Address</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-3)' }}><FiMail /></span>
                      <input
                        type="email"
                        name="email"
                        placeholder="parent@example.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        style={{ width: '100%', padding: '14px 16px 14px 44px', background: 'rgba(255,255,255,0.03)', border: '1.5px solid var(--glass-border)', borderRadius: 14, color: '#fff', outline: 'none', transition: 'all 0.3s' }}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Select Current Grade</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--accent)' }}><FiBookOpen /></span>
                      <select
                        required
                        name="grade"
                        value={form.grade}
                        onChange={(e) => setForm({...form, grade: e.target.value})}
                        style={{ width: '100%', padding: '14px 16px 14px 44px', background: 'rgba(8,8,26,0.95)', border: '1.5px solid var(--glass-border)', borderRadius: 14, color: form.grade ? '#fff' : 'rgba(255,255,255,0.4)', outline: 'none', appearance: 'none', cursor: 'pointer' }}
                      >
                         <option value="" disabled>Choose Grade (1–12)</option>
                         <optgroup label="Primary School">
                            <option value="1-5">Class 1 to 5</option>
                         </optgroup>
                         <optgroup label="Middle School">
                            <option value="6-8">Class 6 to 8</option>
                         </optgroup>
                         <optgroup label="Higher Secondary">
                            <option value="9-10">Class 9 to 10 (Board)</option>
                            <option value="11-12-PCB">Class 11-12 (PCB)</option>
                            <option value="11-12-PCM">Class 11-12 (PCM)</option>
                            <option value="11-12-Commerce">Class 11-12 (Commerce)</option>
                         </optgroup>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Tell us more (Optional)</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 16, top: 18, color: 'var(--secondary)' }}><FiMessageSquare /></span>
                      <textarea
                        rows={4}
                        name="message"
                        placeholder="Any specific school or competitive exam you're targeting?"
                        value={form.message}
                        onChange={(e) => setForm({...form, message: e.target.value})}
                        style={{ width: '100%', padding: '14px 16px 14px 44px', background: 'rgba(255,255,255,0.03)', border: '1.5px solid var(--glass-border)', borderRadius: 14, color: '#fff', outline: 'none', resize: 'none' }}
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', textAlign: 'center' }}>Something went wrong. Please try again or call us directly.</p>
                  )}

                  <motion.button
                    type="submit"
                    className="btn-primary"
                    disabled={status === 'submitting'}
                    style={{ width: '100%', padding: '16px', fontSize: '1.1rem', justifyContent: 'center' }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Enquiry'} <FiSend style={{ marginLeft: 8 }} />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Side Column */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
            >
              <div className="glass" style={{ padding: 40, borderRadius: 28, position: 'relative' }}>
                <div style={{ position: 'absolute', top: 20, right: 20, color: 'rgba(255,255,255,0.05)', fontSize: '5rem', fontWeight: 900 }}>?</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: 24 }}>Enrolment FAQs</h3>
                
                {[
                  { q: 'Is there a free trial?', a: 'Yes! We offer 2 free demo sessions for any course you choose.' },
                  { q: 'What are the batch timings?', a: 'Flexible morning & evening slots available for school-going students.' },
                ].map((faq, i) => (
                  <div key={i} style={{ marginBottom: 20 }}>
                     <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary-light)', marginBottom: 6 }}>Q: {faq.q}</div>
                     <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{faq.a}</div>
                  </div>
                ))}
              </div>

              <div className="glass" style={{ padding: 32, borderRadius: 28, background: 'var(--gradient-primary)', border: 'none', textAlign: 'center' }}>
                 <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.8rem' }}>📞</div>
                 <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#fff', marginBottom: 8 }}>Prefer to talk?</h3>
                 <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 20, fontSize: '0.95rem' }}>Speak directly with <strong>Vishnu Sir</strong> for academic counseling now.</p>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <a href="tel:+919321302424">
                        <motion.button className="btn-white" style={{ width: '100%', color: '#6c63ff' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>9321302424</motion.button>
                    </a>
                    <a href="tel:+919867840715">
                        <motion.button className="btn-white" style={{ width: '100%', color: '#6c63ff' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>9867840715</motion.button>
                    </a>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ padding: 'clamp(20px, 5vw, 40px) 0 clamp(40px, 8vw, 80px) 0', background: 'var(--bg-900)' }}>
         <div className="container">
            <div style={{ height: 'clamp(300px, 50vh, 500px)', width: '100%', borderRadius: 32, overflow: 'hidden', position: 'relative', border: '1px solid var(--glass-border)', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}>
               <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,30,0.05)', zIndex: 1, pointerEvents: 'none' }} />
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.812!2d72.884934!3d19.093367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8702cad8a0d%3A0x10d102e389445171!2sWISDOM'S%20ACADEMY!5e0!3m2!1sen!2sin!4v1711550000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
               />
               <motion.div className="glass map-label" style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', padding: '14px 28px', borderRadius: 100, zIndex: 2, pointerEvents: 'none', display: 'flex', alignItems: 'center', gap: 12, width: 'max-content', maxWidth: '85%' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <FiMapPin style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 700, fontSize: '0.8rem', lineHeight: 1.4 }}>C/7 LAXMI NIWAS, PIPELINE KAJUPADA, KURLA, MUMBAI 400072</span>
               </motion.div>
            </div>
         </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .contact-info-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
          .contact-main-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 640px) {
          .contact-info-grid { grid-template-columns: 1fr !important; }
          .contact-form-row { grid-template-columns: 1fr !important; }
          .contact-form-container { padding: 40px 24px !important; }
          .map-label { padding: 12px 20px !important; bottom: 20px !important; }
          .map-label span { fontSize: 0.75rem !important; }
        }
      `}</style>
    </PageWrapper>
  )
}
