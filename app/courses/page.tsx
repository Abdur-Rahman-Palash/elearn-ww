import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CoursesContent from '@/components/courses/CoursesContent'

export const metadata: Metadata = {
  title: 'All Courses | EduLearn',
  description: 'Browse our comprehensive course catalog with courses for Class 6-12, SSC, HSC, Admission Tests, and Professional Skills.',
  keywords: 'courses, online courses, academic courses, professional courses, skill development',
}

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <CoursesContent />
      <Footer />
    </>
  )
}
