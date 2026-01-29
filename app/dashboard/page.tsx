import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import DashboardContent from '@/components/dashboard/DashboardContent'

export const metadata: Metadata = {
  title: 'Dashboard | EduLearn',
  description: 'Access your student dashboard to view enrolled courses, track progress, and manage your learning journey.',
  keywords: 'student dashboard, my courses, learning progress, edulearn dashboard',
}

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <DashboardContent />
      <Footer />
    </>
  )
}
