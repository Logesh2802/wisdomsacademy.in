import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi'
import {
  FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaTelegramPlane
} from 'react-icons/fa'
import logo from '../../assets/logo.png'
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
              <div className="nav-logo-icon">
                <img src={logo} alt="WISDOM'S ACADEMY Logo" className="logo-img" />
              </div>
              <div className="nav-logo-text">
                <span className="nav-logo-name">WISDOM'S ACADEMY</span>
                <span className="nav-logo-tagline">wisdomsacademy.in</span>
              </div>
            </Link>
            <p className="footer-desc">
              Shaping futures through excellence in education since 2004. Your journey to success begins at WISDOM'S ACADEMY — where every student's potential is nurtured and realized.
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
                C/7 LAXMI NIWAS, BESIDE DR. SHARMA DENTAL CLINIC,<br />
                PIPELINE KAJUPADA SAKINAKA KURLA ANDHERI ROAD,<br />
                MUMBAI 400072
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FiPhone /></div>
              <div className="footer-contact-text">
                <strong>Phone (Vishnu Sir)</strong>
                9321302424 | 9324753030<br />
                9867840715 | 7045024786
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FiMail /></div>
              <div className="footer-contact-text">
                <strong>Email</strong>
                wisdomsacademy.in@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} WISDOM'S ACADEMY. All rights reserved. Crafted with ❤️ for excellence.</p>
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
