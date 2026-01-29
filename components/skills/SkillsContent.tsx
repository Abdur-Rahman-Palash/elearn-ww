'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { BookOpen, Users, Award, Clock, ArrowRight, CheckCircle, Calendar, Target, Star, Filter, TrendingUp, Code, Palette, Briefcase, Camera, Music, PenTool, User } from 'lucide-react'

const skillsCourses = {
  'Language': [
    {
      id: '1',
      name: 'IELTS Academic Preparation',
      category: 'Language',
      level: 'Intermediate',
      duration: '3 months',
      price: 7999,
      originalPrice: 10999,
      students: 5670,
      rating: 4.9,
      instructor: 'Sarah Johnson',
      features: ['All Four Modules', 'Mock Tests', 'Band Score Guarantee', 'One-on-One Feedback'],
      badge: 'Popular',
      icon: '📚'
    },
    {
      id: '2',
      name: 'Spoken English Complete',
      category: 'Language',
      level: 'Beginner to Advanced',
      duration: '4 months',
      price: 6999,
      originalPrice: 9999,
      students: 8450,
      rating: 4.8,
      instructor: 'Michael Brown',
      features: ['Live Conversation', 'Pronunciation Practice', 'Fluency Building', 'Real-life Scenarios'],
      badge: 'Popular',
      icon: '💬'
    },
    {
      id: '3',
      name: 'Business English Professional',
      category: 'Language',
      level: 'Intermediate',
      duration: '3 months',
      price: 7999,
      originalPrice: 11999,
      students: 4250,
      rating: 4.7,
      instructor: 'Emily Davis',
      features: ['Business Communication', 'Email Writing', 'Presentation Skills', 'Meeting Etiquette'],
      badge: null,
      icon: '💼'
    }
  ],
  'Technology': [
    {
      id: '4',
      name: 'Web Development Bootcamp',
      category: 'Technology',
      level: 'Beginner',
      duration: '6 months',
      price: 9999,
      originalPrice: 14999,
      students: 12340,
      rating: 4.9,
      instructor: 'David Chen',
      features: ['HTML/CSS/JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Real Projects'],
      badge: 'Popular',
      icon: '💻'
    },
    {
      id: '5',
      name: 'Mobile App Development',
      category: 'Technology',
      level: 'Intermediate',
      duration: '5 months',
      price: 12999,
      originalPrice: 17999,
      students: 6780,
      rating: 4.8,
      instructor: 'Alex Kumar',
      features: ['React Native', 'Flutter', 'iOS & Android', 'App Deployment'],
      badge: null,
      icon: '📱'
    },
    {
      id: '6',
      name: 'Python Programming',
      category: 'Technology',
      level: 'Beginner',
      duration: '3 months',
      price: 5999,
      originalPrice: 8999,
      students: 9870,
      rating: 4.7,
      instructor: 'Lisa Wang',
      features: ['Python Basics', 'Data Structures', 'OOP', 'Projects'],
      badge: null,
      icon: '🐍'
    }
  ],
  'Design': [
    {
      id: '7',
      name: 'Graphic Design Masterclass',
      category: 'Design',
      level: 'Beginner',
      duration: '4 months',
      price: 7999,
      originalPrice: 11999,
      students: 5430,
      rating: 4.8,
      instructor: 'Maria Garcia',
      features: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Portfolio Building'],
      badge: null,
      icon: '🎨'
    },
    {
      id: '8',
      name: 'UI/UX Design Fundamentals',
      category: 'Design',
      level: 'Beginner',
      duration: '3 months',
      price: 8999,
      originalPrice: 12999,
      students: 7890,
      rating: 4.9,
      instructor: 'James Wilson',
      features: ['Design Principles', 'Figma', 'User Research', 'Prototyping'],
      badge: 'Popular',
      icon: '🎯'
    },
    {
      id: '9',
      name: 'Video Editing Course',
      category: 'Design',
      level: 'Beginner',
      duration: '2 months',
      price: 4999,
      originalPrice: 7999,
      students: 3450,
      rating: 4.6,
      instructor: 'Tom Anderson',
      features: ['Adobe Premiere', 'After Effects', 'Color Grading', 'Sound Design'],
      badge: null,
      icon: '🎬'
    }
  ],
  'Freelancing': [
    {
      id: '10',
      name: 'Freelancing Complete Guide',
      category: 'Freelancing',
      level: 'Beginner',
      duration: '2 months',
      price: 3999,
      originalPrice: 6999,
      students: 15670,
      rating: 4.8,
      instructor: 'Robert Taylor',
      features: ['Platform Setup', 'Client Acquisition', 'Proposal Writing', 'Pricing Strategy'],
      badge: 'Popular',
      icon: '💰'
    },
    {
      id: '11',
      name: 'Digital Marketing Mastery',
      category: 'Freelancing',
      level: 'Beginner',
      duration: '3 months',
      price: 6999,
      originalPrice: 9999,
      students: 8230,
      rating: 4.7,
      instructor: 'Jennifer Lee',
      features: ['SEO', 'Social Media Marketing', 'Google Ads', 'Content Marketing'],
      badge: null,
      icon: '📈'
    }
  ]
}

const categories = Object.keys(skillsCourses)

export default function SkillsContent() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')

  const filteredCourses = Object.entries(skillsCourses)
    .filter(([category]) => selectedCategory === 'All' || category === selectedCategory)
    .flatMap(([_, courses]) => courses)
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.students - a.students
        case 'rating':
          return b.rating - a.rating
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Skills Development Courses
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Master in-demand skills and advance your career with our comprehensive professional courses
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5" />
                <span>Career Growth</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-5 h-5" />
                <span>Industry Recognized</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Courses
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Course Header */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                    <div className="text-4xl">{course.icon}</div>
                  </div>
                  {course.badge && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {course.badge}
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{course.name}</h3>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      {course.category}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {course.level}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      {course.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-1 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {course.originalPrice > course.price && (
                        <span className="text-sm text-gray-500 line-through">৳{course.originalPrice}</span>
                      )}
                      <div className="text-xl font-bold text-primary-600">৳{course.price}</div>
                    </div>
                    <button 
                      onClick={() => {
                        console.log('Enroll clicked for course:', course.id, course.name)
                        window.location.href = `/courses/${course.id}`
                      }}
                      className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Enroll Now
                    </button>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-500" />
                    </div>
                    <span>{course.instructor}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
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
              Start Your Skills Journey Today
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with our skills courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/courses'}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Browse All Courses
              </button>
              <button 
                onClick={() => window.location.href = '/free-classes'}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Attend Demo Class
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
