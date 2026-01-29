import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import EnglishContent from '@/components/english/EnglishContent'

export const metadata: Metadata = {
  title: 'English Learning Center | EduLearn',
  description: 'Complete English learning programs including Spoken English, IELTS preparation, Grammar, Kids English, and Business English.',
  keywords: 'English learning, spoken English, IELTS preparation, English grammar, kids English, business English, English course',
}

export default function EnglishPage() {
  return (
    <>
      <Navbar />
      <EnglishContent />
      <Footer />
    </>
  )
}
