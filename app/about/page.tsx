import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AboutContent from '@/components/about/AboutContent'

export const metadata: Metadata = {
  title: 'About Us - EduLearn',
  description: 'Learn about EduLearn\'s mission to provide quality education to every student in Bangladesh. Meet our team and discover our impact.',
  keywords: 'about edulearn, mission, vision, team, education platform',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutContent />
      <Footer />
    </>
  )
}
