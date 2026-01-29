import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SkillsContent from '@/components/skills/SkillsContent'

export const metadata: Metadata = {
  title: 'Skills Courses | EduLearn',
  description: 'Professional skills development courses including IELTS, Spoken English, Freelancing, Web Development, Digital Marketing, and more.',
  keywords: 'skills courses, IELTS preparation, spoken English, freelancing, web development, digital marketing, graphic design, professional skills',
}

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <SkillsContent />
      <Footer />
    </>
  )
}
