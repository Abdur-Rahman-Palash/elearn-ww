import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AcademicPrograms from '@/components/academics/AcademicPrograms'

export const metadata: Metadata = {
  title: 'Academic Programs - Class 6-12 | EduLearn',
  description: 'Comprehensive academic programs for Class 6-12 students with Science, Business, and Humanities streams.',
  keywords: 'academic programs, class 6, class 7, class 8, class 9, class 10, class 11, class 12, science, business, humanities',
}

export default function AcademicsPage() {
  return (
    <>
      <Navbar />
      <AcademicPrograms />
      <Footer />
    </>
  )
}
