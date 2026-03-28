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
        <title>WISDOM'S ACADEMY | Top Coaching in Sakinaka & Kurla (Class 1-12)</title>
        <meta
          name="description"
          content="WISDOM'S ACADEMY: Mumbai's leading coaching for Class 1 to 12. Specializing in JEE, NEET, and Board Excellence in Sakinaka, Kurla, and Andheri-Kurla Road. Join 2500+ successful students today!"
        />
        <meta name="keywords" content="Coaching in Sakinaka, Kurla Tutorial, JEE Classes Mumbai, NEET Preparation Sakinaka, Class 1-12 Coaching Kurla, Wisdoms Academy Mumbai" />
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
