import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/ui/CustomCursor'
import ScrollToTop from './components/ui/ScrollToTop'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'
import Results from './pages/Results'

function App() {
  const location = useLocation()

  return (
    <>
      <CustomCursor />
      <ScrollToTop />
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
