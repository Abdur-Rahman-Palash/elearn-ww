import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SSCPrograms from '@/components/programs/SSCPrograms'

export const metadata: Metadata = {
  title: 'SSC Programs | EduLearn',
  description: 'Complete SSC preparation programs with expert teachers, live classes, and comprehensive study materials.',
  keywords: 'SSC, secondary school certificate, class 9, class 10, SSC preparation, SSC exam',
}

export default function SSCPage() {
  return (
    <>
      <Navbar />
      <SSCPrograms />
      <Footer />
    </>
  )
}
