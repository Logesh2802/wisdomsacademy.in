import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { FiPhone, FiArrowRight, FiShield } from 'react-icons/fi'
import { fadeInUp } from '../../utils/animations'
import '../../styles/Sections.css'

export default function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section className="container" ref={ref} style={{ padding: '0 28px' }}>
      <motion.div
        className="cta-inner"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{
           borderRadius: 'clamp(24px, 5vw, 48px)',
           padding: 'clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)',
           boxShadow: '0 40px 100px rgba(108, 99, 255, 0.3)',
           position: 'relative',
           overflow: 'hidden'
        }}
      >
        {/* Animated glowing orbs - Simplified for performance */}
        <motion.div
           style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', top: -50, left: -50, filter: 'blur(50px)', zIndex: 0 }}
           animate={{ opacity: [0.3, 0.45, 0.3] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
           style={{ position: 'absolute', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(255,107,107,0.08)', bottom: -50, right: -50, filter: 'blur(40px)', zIndex: 0 }}
           animate={{ opacity: [0.4, 0.55, 0.4] }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />


        <div style={{ position: 'relative', zIndex: 2 }}>
           <motion.div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 20px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 99, color: '#fff', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}>
              <FiShield size={14} /> Admissions Open 2025–26
           </motion.div>

           <motion.h2 className="cta-title" style={{ fontSize: 'clamp(1.8rem, 6vw, 3.8rem)', fontWeight: 900, color: '#fff', marginBottom: 20, lineHeight: 1.15 }}>
              Scaffold Your Child's <br className="hide-mobile" /> <span style={{ textShadow: '0 0 30px rgba(0,0,0,0.2)' }}>Academic Journey</span>
           </motion.h2>

           <motion.p className="cta-desc" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.92)', marginBottom: 'clamp(32px, 5vw, 48px)', maxWidth: 650, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
              From Primary school to JEE & NEET — get the personalized guidance your child needs at WISDOM'S ACADEMY, India's most trusted coaching institute.
           </motion.p>

           <motion.div className="cta-actions" style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(12px, 3vw, 20px)', flexWrap: 'wrap' }}>
              <Link to="/contact">
                 <motion.button className="btn-white" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', padding: 'clamp(12px, 2vw, 16px) clamp(30px, 4vw, 48px)', color: '#6c63ff' }}>
                    Join Now <FiArrowRight />
                 </motion.button>
              </Link>
              <a href="tel:+919321302424">
                 <motion.button className="btn-white-outline" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px)', borderColor: 'rgba(255,255,255,0.6)' }}>
                    <FiPhone /> Call Vishnu Sir
                 </motion.button>
              </a>
           </motion.div>

           
           <motion.div style={{ marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 600 }} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
              <span>✓ Certified Faculty</span>
              <span>✓ Free Demo Class</span>
              <span>✓ Batch 1–12 All Covered</span>
           </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
