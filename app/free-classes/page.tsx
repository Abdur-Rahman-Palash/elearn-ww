'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Play, Users, Clock, Eye, Filter, Search, BookOpen, Star, ChevronRight } from 'lucide-react'

export default function FreeClassesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('All')
  const [selectedClass, setSelectedClass] = useState('All')

const freeClasses = [
  {
    id: '1',
    title: 'Introduction to Algebra - Basic Concepts',
    subject: 'Mathematics',
    class: 'Class 9',
    duration: '45:30',
    views: 15420,
    instructor: 'Dr. Ahmed Khan',
    thumbnail: '/algebra-intro.jpg',
    description: 'Learn the fundamental concepts of algebra including variables, equations, and expressions.',
    date: '2 days ago',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Physics: Newton\'s First Law of Motion',
    subject: 'Physics',
    class: 'Class 10',
    duration: '38:45',
    views: 12350,
    instructor: 'Prof. Fatema Rahman',
    thumbnail: '/physics-newton.jpg',
    description: 'Understand the principle of inertia and how it affects objects at rest and in motion.',
    date: '3 days ago',
    rating: 4.9
  },
  {
    id: '3',
    title: 'Chemistry: Atomic Structure Basics',
    subject: 'Chemistry',
    class: 'SSC',
    duration: '42:15',
    views: 9870,
    instructor: 'Dr. Mohammad Ali',
    thumbnail: '/chemistry-atom.jpg',
    description: 'Explore the structure of atoms, subatomic particles, and the periodic table.',
    date: '1 week ago',
    rating: 4.7
  },
  {
    id: '4',
    title: 'Biology: Cell Structure and Function',
    subject: 'Biology',
    class: 'HSC',
    duration: '55:20',
    views: 8900,
    instructor: 'Dr. Salma Akter',
    thumbnail: '/biology-cell.jpg',
    description: 'Detailed explanation of plant and animal cell structures and their functions.',
    date: '1 week ago',
    rating: 4.8
  },
  {
    id: '5',
    title: 'English Grammar: Tenses Made Easy',
    subject: 'English',
    class: 'All Levels',
    duration: '35:40',
    views: 25680,
    instructor: 'Sarah Johnson',
    thumbnail: '/english-tenses.jpg',
    description: 'Master all English tenses with simple explanations and practical examples.',
    date: '2 weeks ago',
    rating: 4.9
  },
  {
    id: '6',
    title: 'Bangla Literature: Rabindranath Tagore',
    subject: 'Bangla',
    class: 'HSC',
    duration: '48:30',
    views: 6780,
    instructor: 'Prof. Nazmul Islam',
    thumbnail: '/bangla-tagore.jpg',
    description: 'An in-depth analysis of Tagore\'s literary works and their significance.',
    date: '2 weeks ago',
    rating: 4.6
  },
  {
    id: '7',
    title: 'Accounting: Basic Principles',
    subject: 'Accounting',
    class: 'HSC',
    duration: '40:15',
    views: 5420,
    instructor: 'Prof. Karim Rahman',
    thumbnail: '/accounting-basics.jpg',
    description: 'Learn the fundamental principles of accounting and financial statements.',
    date: '3 weeks ago',
    rating: 4.7
  },
  {
    id: '8',
    title: 'History: Ancient Civilizations',
    subject: 'History',
    class: 'SSC',
    duration: '52:00',
    views: 4230,
    instructor: 'Dr. Farhana Ahmed',
    thumbnail: '/history-civilization.jpg',
    description: 'Explore the ancient civilizations that shaped human history.',
    date: '3 weeks ago',
    rating: 4.5
  }
]

const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Bangla', 'Accounting', 'History']
const classes = ['All', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'SSC', 'HSC', 'All Levels']

function FreeClassesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('All')
  const [selectedClass, setSelectedClass] = useState('All')
  const [sortBy, setSortBy] = useState('recent')

  const filteredClasses = freeClasses
    .filter(cls => {
      const matchesSearch = cls.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cls.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSubject = selectedSubject === 'All' || cls.subject === selectedSubject
      const matchesClass = selectedClass === 'All' || cls.class === selectedClass
      
      return matchesSearch && matchesSubject && matchesClass
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'views':
          return b.views - a.views
        case 'rating':
          return b.rating - a.rating
        case 'duration':
          return parseInt(b.duration) - parseInt(a.duration)
        case 'recent':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Free Educational Classes
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Access high-quality educational content completely free. Learn from expert teachers and enhance your knowledge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Play className="w-5 h-5" />
                <span>500+ Free Videos</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="w-5 h-5" />
                <span>100K+ Learners</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Eye className="w-5 h-5" />
                <span>1M+ Views</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search free classes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Subject Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500"
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              {/* Class Filter */}
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500"
              >
                {classes.map((cls) => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500"
              >
                <option value="recent">Most Recent</option>
                <option value="views">Most Viewed</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Longest Duration</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredClasses.length} free classes
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredClasses.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎥</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No free classes found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedSubject('All')
                  setSelectedClass('All')
                }}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredClasses.map((cls, index) => (
                <motion.div
                  key={cls.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-300 to-gray-400">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-primary-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {cls.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {cls.subject}
                      </span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        {cls.class}
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {cls.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {cls.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{cls.views.toLocaleString()} views</span>
                      </div>
                      <span>{cls.date}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{cls.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">{cls.instructor}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Want More Premium Content?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Upgrade to our premium courses for in-depth learning, live classes, and certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
                Explore Premium Courses
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors">
                Browse All Free Classes
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
}
