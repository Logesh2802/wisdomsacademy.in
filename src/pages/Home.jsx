import { Helmet } from 'react-helmet-async'
import PageWrapper from '../components/ui/PageWrapper'
import HeroSection from '../components/sections/HeroSection'
import AnnouncementTicker from '../components/ui/AnnouncementTicker'
import ClassJourneySection from '../components/sections/ClassJourneySection'
import StatsSection from '../components/sections/StatsSection'
import CoursesSection from '../components/sections/CoursesSection'
import WhySection from '../components/sections/WhySection'
import FacultySection from '../components/sections/FacultySection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Wisdom's Academy | Class 1 to 12 Coaching — wisdomsacademy.in</title>
        <meta
          name="description"
          content="Wisdom's Academy — India's most trusted coaching institute for Class 1 to 12. Expert faculty for Primary, Middle School, Board Exams, JEE & NEET. Join wisdomsacademy.in today!"
        />
      </Helmet>

      <HeroSection />
      <AnnouncementTicker />
      <StatsSection />
      <ClassJourneySection />
      <CoursesSection />
      <WhySection />
      <FacultySection />
      <TestimonialsSection />
      <CTASection />
    </PageWrapper>
  )
}
