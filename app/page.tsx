import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import Categories from '@/components/home/Categories'
import FeaturedCourses from '@/components/home/FeaturedCourses'
import LearningProcess from '@/components/home/LearningProcess'
import Benefits from '@/components/home/Benefits'
import Batches from '@/components/home/Batches'
import Features from '@/components/home/Features'
import Testimonials from '@/components/home/Testimonials'
import AppPromo from '@/components/home/AppPromo'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedCourses />
      <LearningProcess />
      <Benefits />
      <Batches />
      <Features />
      <Testimonials />
      <AppPromo />
      <Footer />
    </main>
  )
}
