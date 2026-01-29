'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { BookOpen, Users, Award, Clock, ArrowRight, CheckCircle, Calendar, Target, Star, Filter, TrendingUp, User } from 'lucide-react'

const admissionPrograms = {
  'Medical': [
    {
      id: '1',
      name: 'Medical Admission Complete 2024',
      universities: ['All Medical Colleges', 'Dhaka Medical', 'Sir Salimullah', 'Mymensingh Medical'],
      units: ['Combined'],
      startDate: 'March 2024',
      duration: '6 months',
      price: 15999,
      originalPrice: 21999,
      students: 12450,
      rating: 4.9,
      successRate: 85,
      features: ['Physics', 'Chemistry', 'Biology', 'English', 'Mathematics', 'GK & IQ'],
      badge: 'Popular',
      instructor: 'Dr. Ahmed Khan'
    },
    {
      id: '2',
      name: 'Medical Admission Crash Course',
      universities: ['All Medical Colleges'],
      units: ['Combined'],
      startDate: 'June 2024',
      duration: '3 months',
      price: 9999,
      originalPrice: 14999,
      students: 8230,
      rating: 4.8,
      successRate: 78,
      features: ['Quick Revision', 'Model Tests', 'Question Analysis', 'Exam Strategy'],
      badge: null,
      instructor: 'Prof. Fatema Rahman'
    }
  ],
  'Engineering': [
    {
      id: '3',
      name: 'BUET Admission Preparation',
      universities: ['BUET', 'CUET', 'KUET', 'RUET'],
      units: ['KA', 'KHA', 'GA', 'GHA'],
      startDate: 'March 2024',
      duration: '8 months',
      price: 18999,
      originalPrice: 25999,
      students: 15670,
      rating: 4.9,
      successRate: 72,
      features: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Previous Questions', 'Mock Tests'],
      badge: 'Popular',
      instructor: 'Dr. Mohammad Ali'
    },
    {
      id: '4',
      name: 'Engineering Admission Complete',
      universities: ['All Engineering Universities'],
      units: ['All Units'],
      startDate: 'April 2024',
      duration: '7 months',
      price: 17999,
      originalPrice: 24999,
      students: 9840,
      rating: 4.7,
      successRate: 68,
      features: ['Comprehensive Coverage', 'Unit-wise Preparation', 'Practice Tests', 'Doubt Sessions'],
      badge: null,
      instructor: 'Engr. Sarah Johnson'
    }
  ],
  'Varsity': [
    {
      id: '5',
      name: 'Dhaka University Admission (Science)',
      universities: ['Dhaka University'],
      units: ['Science Faculty'],
      startDate: 'March 2024',
      duration: '6 months',
      price: 12999,
      originalPrice: 18999,
      students: 11230,
      rating: 4.8,
      successRate: 65,
      features: ['Subject-wise Preparation', 'Previous Questions', 'Mock Tests', 'Interview Prep'],
      badge: null,
      instructor: 'Prof. David Chen'
    },
    {
      id: '6',
      name: 'Dhaka University Admission (Business)',
      universities: ['Dhaka University'],
      units: ['Business Faculty'],
      startDate: 'April 2024',
      duration: '5 months',
      price: 11999,
      originalPrice: 16999,
      students: 8560,
      rating: 4.7,
      successRate: 62,
      features: ['Accounting', 'Management', 'Finance', 'Marketing', 'English', 'GK'],
      badge: null,
      instructor: 'Dr. Lisa Wang'
    },
    {
      id: '7',
      name: 'All Varsity Admission Complete',
      universities: ['All Public Universities'],
      units: ['All Units'],
      startDate: 'March 2024',
      duration: '8 months',
      price: 21999,
      originalPrice: 29999,
      students: 18940,
      rating: 4.9,
      successRate: 70,
      features: ['Comprehensive Coverage', 'University-wise Strategy', 'Mock Tests', 'Performance Analysis'],
      badge: 'Popular',
      instructor: 'Dr. Michael Brown'
    }
  ]
}

const categories = Object.keys(admissionPrograms) as (keyof typeof admissionPrograms)[]

export default function AdmissionTestContent() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')

  const filteredPrograms = Object.entries(admissionPrograms)
    .filter(([category]) => selectedCategory === 'All' || category === selectedCategory)
    .flatMap(([_, programs]) => programs)
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.students - a.students
        case 'rating':
          return b.rating - a.rating
        case 'success':
          return b.successRate - a.successRate
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
      <section className="bg-gradient-to-br from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Admission Test Programs
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Complete preparation for Medical, Engineering, and Varsity admission tests with expert guidance and proven results
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5" />
                <span>High Success Rate</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-5 h-5" />
                <span>Expert Teachers</span>
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
                All Programs
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
                <option value="success">Success Rate</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Program Header */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white/50" />
                  </div>
                  {program.badge && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {program.badge}
                    </div>
                  )}
                </div>

                {/* Program Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{program.name}</h3>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">{program.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                      {categories.find(cat => admissionPrograms[cat].some(p => p.id === program.id))}
                    </span>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{program.successRate}% Success</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{program.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                  </div>

                  {/* Universities */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Universities:</div>
                    <div className="flex flex-wrap gap-1">
                      {program.universities.slice(0, 3).map((university, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {university}
                        </span>
                      ))}
                      {program.universities.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          +{program.universities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.slice(0, 4).map((feature, index) => (
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
                      {program.originalPrice > program.price && (
                        <span className="text-sm text-gray-500 line-through">৳{program.originalPrice}</span>
                      )}
                      <div className="text-xl font-bold text-primary-600">৳{program.price}</div>
                    </div>
                    <button 
                      onClick={() => window.location.href = `/courses/${program.id}`}
                      className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Enroll Now
                    </button>
                  </div>

                  {/* Additional Info */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Starts: {program.startDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="w-4 h-4" />
                      <span>{program.units.join(', ')}</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-500" />
                    </div>
                    <span>{program.instructor}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No programs found</h3>
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
              Start Your Admission Journey Today
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of successful students who got into their dream universities with our expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/courses'}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Browse All Programs
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
