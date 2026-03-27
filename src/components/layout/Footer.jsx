import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi'
import {
  FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaTelegramPlane
} from 'react-icons/fa'
import '../../styles/Footer.css'

const footerLinks = {
  courses: [
    { label: 'JEE Foundation', to: '/courses' },
    { label: 'NEET Preparation', to: '/courses' },
    { label: 'Board Excellence', to: '/courses' },
    { label: 'Class 9-10 Science', to: '/courses' },
    { label: 'Class 11-12 PCM', to: '/courses' },
  ],
  quickLinks: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Results', to: '/results' },
    { label: 'Faculty', to: '/about' },
    { label: 'Study Material', to: '/courses' },
    { label: 'Contact Us', to: '/contact' },
  ],
}

const socials = [
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaYoutube />, href: '#', label: 'YouTube' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  { icon: <FaTelegramPlane />, href: '#', label: 'Telegram' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-orb" />
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="nav-logo" style={{ display: 'inline-flex' }}>
              <div className="nav-logo-icon">🎓</div>
              <div className="nav-logo-text">
                <span className="nav-logo-name">Wisdom's Academy</span>
                <span className="nav-logo-tagline">wisdomsacademy.in</span>
              </div>
            </Link>
            <p className="footer-desc">
              Shaping futures through excellence in education. Your journey to success begins at Wisdom's Academy — where every student's potential is nurtured and realized.
            </p>
            <div className="footer-socials">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  className="social-btn"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div className="footer-section">
            <h4>Our Courses</h4>
            <ul className="footer-links">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>
                    <FiArrowRight size={12} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>
                    <FiArrowRight size={12} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FiMapPin /></div>
              <div className="footer-contact-text">
                <strong>Address</strong>
                123, Knowledge Street, Academic Nagar,<br />
                Your City - 400001, India
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FiPhone /></div>
              <div className="footer-contact-text">
                <strong>Phone</strong>
                +91 98765 43210<br />
                +91 87654 32109
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FiMail /></div>
              <div className="footer-contact-text">
                <strong>Email</strong>
                info@wisdomsacademy.in<br />
                admissions@wisdomsacademy.in
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Wisdom's Academy. All rights reserved. Crafted with ❤️ for excellence.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
