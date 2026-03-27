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
           borderRadius: 48,
           padding: '100px 40px',
           boxShadow: '0 40px 100px rgba(108, 99, 255, 0.3)',
           position: 'relative',
           overflow: 'hidden'
        }}
      >
        {/* Animated glowing orbs */}
        <motion.div
           style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', top: -150, left: -100, filter: 'blur(80px)', zIndex: 0 }}
           animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
           transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
           style={{ position: 'absolute', width: 350, height: 350, borderRadius: '50%', background: 'rgba(255,107,107,0.15)', bottom: -100, right: -100, filter: 'blur(70px)', zIndex: 0 }}
           animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
           transition={{ duration: 12, repeat: Infinity }}
        />

        <div style={{ position: 'relative', zIndex: 2 }}>
           <motion.div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 20px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 99, color: '#fff', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}>
              <FiShield size={14} /> Admissions Open 2025–26
           </motion.div>

           <motion.h2 className="cta-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 900, color: '#fff', marginBottom: 20, lineHeight: 1.1 }}>
              Scaffold Your Child's <br className="hide-mobile" /> <span style={{ textShadow: '0 0 30px rgba(0,0,0,0.2)' }}>Academic Journey</span>
           </motion.h2>

           <motion.p className="cta-desc" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.92)', marginBottom: 48, maxWidth: 650, marginLeft: 'auto', marginRight: 'auto' }}>
              From Primary school to JEE & NEET — get the personalized guidance your child needs at WISDOM'S ACADEMY, India's most trusted coaching institute.
           </motion.p>

           <motion.div className="cta-actions" style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
              <Link to="/contact">
                 <motion.button className="btn-white" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} style={{ fontSize: '1.1rem', padding: '16px 48px', color: '#6c63ff' }}>
                    Join Now <FiArrowRight />
                 </motion.button>
              </Link>
              <a href="tel:+919321302424">
                 <motion.button className="btn-white-outline" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} style={{ fontSize: '1.1rem', padding: '16px 40px', borderColor: 'rgba(255,255,255,0.6)' }}>
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
