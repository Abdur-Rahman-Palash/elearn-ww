'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { 
  BookOpen, 
  Play, 
  Clock, 
  Users, 
  Award, 
  Target, 
  Calendar, 
  TrendingUp, 
  BarChart3, 
  Video, 
  Download, 
  Star, 
  ChevronRight,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react'

export default function DashboardCoursesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const allCourses = [
    {
      id: '1',
      title: 'HSC Physics Complete Course',
      instructor: 'Dr. Ahmed Khan',
      progress: 65,
      totalLessons: 120,
      completedLessons: 78,
      category: 'Science',
      level: 'Advanced',
      rating: 4.8,
      students: 1250,
      duration: '6 months',
      price: 2999,
      enrolledDate: '2024-01-15',
      lastAccessed: '2024-01-20'
    },
    {
      id: '2',
      title: 'Mathematics for SSC',
      instructor: 'Prof. Fatema Rahman',
      progress: 45,
      totalLessons: 80,
      completedLessons: 36,
      category: 'Mathematics',
      level: 'Intermediate',
      rating: 4.6,
      students: 980,
      duration: '4 months',
      price: 1999,
      enrolledDate: '2024-01-10',
      lastAccessed: '2024-01-19'
    },
    {
      id: '3',
      title: 'English Speaking Course',
      instructor: 'Sarah Johnson',
      progress: 80,
      totalLessons: 60,
      completedLessons: 48,
      category: 'Language',
      level: 'Beginner',
      rating: 4.9,
      students: 2100,
      duration: '3 months',
      price: 1499,
      enrolledDate: '2024-01-05',
      lastAccessed: '2024-01-20'
    }
  ]

  const filteredCourses = allCourses
    .filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
      return matchesSearch && matchesCategory
    })

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
                <p className="text-gray-600 mt-1">Continue your learning journey</p>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                  >
                    <Grid className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                  >
                    <List className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700">
                    {course.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">by {course.instructor}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Play className="w-4 h-4 mr-1" />
                      <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <Link
                    href={`/courses/${course.id}`}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Continue Learning
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
