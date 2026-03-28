import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/ui/CustomCursor'
import ScrollToTop from './components/ui/ScrollToTop'
import BackToTop from './components/ui/BackToTop'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'
import Results from './pages/Results'

function App() {
  const location = useLocation()

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "WISDOM'S ACADEMY",
            "image": "https://wisdomsacademy.in/logo.png",
            "@id": "https://wisdomsacademy.in",
            "url": "https://wisdomsacademy.in",
            "telephone": "+919321302424",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "C/7 LAXMI NIWAS, BESIDE DR. SHARMA DENTAL CLINIC, PIPELINE KAJUPADA, SAKINAKA KURLA ANDHERI ROAD",
              "addressLocality": "Mumbai",
              "postalCode": "400072",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.093367,
              "longitude": 72.884934
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "07:00",
              "closes": "21:00"
            },
            "sameAs": [
              "https://www.facebook.com/wisdomsacademy",
              "https://www.instagram.com/wisdomsacademy"
            ]
          })}
        </script>
      </Helmet>
      <CustomCursor />
      <ScrollToTop />
      <BackToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
