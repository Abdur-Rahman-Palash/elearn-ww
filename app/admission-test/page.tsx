import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AdmissionTestContent from '@/components/admission-test/AdmissionTestContent'

export const metadata: Metadata = {
  title: 'Admission Test Programs | EduLearn',
  description: 'Complete university admission test preparation for Medical, Engineering, and Varsity admission with expert teachers and comprehensive study materials.',
  keywords: 'admission test, medical admission, engineering admission, university admission, varsity admission, DU admission, BUET admission, medical college admission',
}

export default function AdmissionTestPage() {
  return (
    <>
      <Navbar />
      <AdmissionTestContent />
      <Footer />
    </>
  )
}
