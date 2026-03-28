import { motion } from 'framer-motion'
import logo from '../../assets/logo.png'

const achievements = [
  '🌟 Sneha K. (Class 5) — 98% in Olympiad',
  '🏆 Rohit M. (Class 10) — 96% CBSE Board',
  '🎯 Priya S. (Class 12 PCB) — NEET AIR 412',
  '🚀 Aryan G. (Class 12 PCM) — JEE Mains 98.4%ile',
  '📚 Kavya R. (Class 7) — 91% School Finals',
  '⭐ Dev N. (Class 9) — 94% in Annual Exams',
  '🏅 Class 10 Batch 2024 — Avg 91.6% in Boards',
  '💼 Anjali V. (Class 12 Commerce) — 97 in Accounts',
  '📋 150+ Students Scored 90%+ in Boards 2024',
  '🌟 Deeshwin M. (Class 5) — 83% in Unit Test',
  '🏆 Pallavi S. (Class 7) — 80% in Unit Test',
  '🎯 Lavanya B. (Class 6) — 78% in Unit Test',
  '🚀 Manav Y. (Class 8) — 78% in Unit Test',
  '🎓 Admissions Open 2025–26 — Classes 1 to 12',
]

export default function AnnouncementTicker() {
  const items = [...achievements, ...achievements]

  return (
    <div style={{
      background: 'linear-gradient(90deg, rgba(108,99,255,0.12) 0%, rgba(255,107,107,0.08) 50%, rgba(108,99,255,0.12) 100%)',
      borderTop: '1px solid rgba(108,99,255,0.18)',
      borderBottom: '1px solid rgba(108,99,255,0.18)',
      padding: '12px 0',
      position: 'relative',
      zIndex: 2,
      overflow: 'hidden',
      marginTop: '40px',
      marginBottom: '60px',
    }}>
      {/* Left/right fade masks */}
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 80, background: 'linear-gradient(90deg, var(--bg-900), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 80, background: 'linear-gradient(-90deg, var(--bg-900), transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <motion.div
        style={{ display: 'flex', gap: 0, whiteSpace: 'nowrap' }}
        animate={{ x: [0, '-50%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((a, i) => (
          <span
            key={i}
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.84rem',
              fontWeight: 500,
              marginRight: 52,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              flexShrink: 0,
            }}
          >
            <span style={{ color: 'rgba(108,99,255,0.5)', fontSize: '0.65rem' }}>◆</span>
            {a.includes('🎓') ? (
              <>
                <img src={logo} alt="Logo" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                {a.replace('🎓', '')}
              </>
            ) : a}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
