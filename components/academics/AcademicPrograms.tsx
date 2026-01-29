'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { BookOpen, Users, Award, Clock, ArrowRight, CheckCircle, Star } from 'lucide-react'

const academicPrograms = [
  {
    class: 'Class 6',
    title: 'Class 6 Complete Package',
    description: 'Build strong foundation with comprehensive coverage of all subjects for Class 6 students.',
    subjects: ['Mathematics', 'Science', 'English', 'Bangla', 'Social Science', 'Religion'],
    features: ['Live Classes', 'Recorded Videos', 'MCQ Practice', 'Regular Tests', 'Progress Tracking'],
    price: 1999,
    duration: '1 Year',
    students: 15420,
    rating: 4.8,
    badge: 'Popular'
  },
  {
    class: 'Class 7',
    title: 'Class 7 Complete Package',
    description: 'Advanced learning materials and expert guidance for Class 7 students.',
    subjects: ['Mathematics', 'Science', 'English', 'Bangla', 'Social Science', 'Religion'],
    features: ['Live Classes', 'Recorded Videos', 'MCQ Practice', 'Regular Tests', 'Progress Tracking'],
    price: 1999,
    duration: '1 Year',
    students: 12350,
    rating: 4.7,
    badge: null
  },
  {
    class: 'Class 8',
    title: 'Class 8 Complete Package',
    description: 'Comprehensive preparation for Class 8 with focus on building analytical skills.',
    subjects: ['Mathematics', 'Science', 'English', 'Bangla', 'Social Science', 'Religion'],
    features: ['Live Classes', 'Recorded Videos', 'MCQ Practice', 'Regular Tests', 'Progress Tracking'],
    price: 2499,
    duration: '1 Year',
    students: 18900,
    rating: 4.8,
    badge: null
  },
  {
    class: 'Class 9',
    title: 'Class 9 Complete Package',
    description: 'Complete preparation for Class 9 with emphasis on SSC foundation building.',
    subjects: ['Mathematics', 'Science', 'English', 'Bangla', 'Social Science', 'Religion'],
    features: ['Live Classes', 'Recorded Videos', 'MCQ Practice', 'Regular Tests', 'Progress Tracking'],
    price: 2999,
    duration: '1 Year',
    students: 22100,
    rating: 4.9,
    badge: 'Popular'
  },
  {
    class: 'Class 10',
    title: 'Class 10 Complete Package',
    description: 'Ultimate SSC preparation package for Class 10 students with exam-focused content.',
    subjects: ['Mathematics', 'Science', 'English', 'Bangla', 'Social Science', 'Religion'],
    features: ['Live Classes', 'Recorded Videos', 'MCQ Practice', 'Regular Tests', 'Progress Tracking', 'Exam Preparation'],
    price: 3999,
    duration: '1 Year',
    students: 28500,
    rating: 4.9,
    badge: 'Popular'
  }
]

export default function AcademicPrograms() {
  const [selectedClass, setSelectedClass] = useState('all')

  const filteredPrograms = selectedClass === 'all' 
    ? academicPrograms 
    : academicPrograms.filter(program => program.class === selectedClass)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Academic Programs
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Comprehensive educational programs for Class 6-12 students with expert teachers and interactive learning
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <BookOpen className="w-5 h-5" />
                <span>6 Subjects</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="w-5 h-5" />
                <span>Expert Teachers</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-5 h-5" />
                <span>SSC Preparation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedClass('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedClass === 'all' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Classes
            </button>
            {academicPrograms.map((program) => (
              <button
                key={program.class}
                onClick={() => setSelectedClass(program.class)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedClass === program.class 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {program.class}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.class}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white/50" />
                  </div>
                  {program.badge && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {program.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                    <span className="text-lg font-bold text-primary-600">৳{program.price}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{program.description}</p>

                  {/* Subjects */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject) => (
                        <span key={subject} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                    <div className="space-y-1">
                      {program.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{program.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{program.rating}</span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{program.duration}</span>
                    <button 
                      onClick={() => window.location.href = '/courses'}
                      className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Your Academic Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of students who are already excelling in their studies with our expert guidance.
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
                Try Free Classes
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
