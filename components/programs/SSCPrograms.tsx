'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { BookOpen, Users, Award, Clock, ArrowRight, CheckCircle, Target } from 'lucide-react'

const sscBatches = [
  {
    id: '1',
    subject: 'Mathematics',
    batches: [
      {
        id: '1',
        name: 'SSC Mathematics Batch A',
        instructor: 'Dr. Ahmed Khan',
        schedule: 'Sat, Mon, Wed (7:00 PM)',
        duration: '6 months',
        price: 2999,
        students: 450,
        features: ['Live Classes', 'Recorded Videos', 'MCQ Practice', 'Regular Tests', 'Doubt Solving'],
        badge: 'Popular'
      },
      {
        id: '2',
        name: 'SSC Mathematics Batch B',
        instructor: 'Prof. Fatema Rahman',
        schedule: 'Sun, Tue, Thu (7:00 PM)',
        duration: '6 months',
        price: 2999,
        students: 380,
        features: ['Live Classes', 'Recorded Videos', 'MCQ Practice', 'Regular Tests', 'Doubt Solving']
      }
    ]
  },
  {
    id: '2',
    subject: 'Science',
    batches: [
      {
        id: '3',
        name: 'SSC Physics Batch A',
        instructor: 'Dr. Mohammad Ali',
        schedule: 'Sat, Mon, Wed (8:00 PM)',
        duration: '6 months',
        price: 3299,
        students: 520,
        features: ['Live Classes', 'Recorded Videos', 'Practical Classes', 'Lab Work', 'Regular Tests'],
        badge: null
      },
      {
        id: '4',
        name: 'SSC Physics Batch B',
        instructor: 'Dr. Salma Akter',
        schedule: 'Sun, Tue, Thu (8:00 PM)',
        duration: '6 months',
        price: 3299,
        students: 410,
        features: ['Live Classes', 'Recorded Videos', 'Practical Classes', 'Lab Work', 'Regular Tests']
      }
    ]
  },
  {
    id: '3',
    subject: 'Chemistry',
    batches: [
      {
        id: '5',
        name: 'SSC Chemistry Batch A',
        instructor: 'Prof. Karim Rahman',
        schedule: 'Sat, Mon, Wed (6:00 PM)',
        duration: '6 months',
        price: 2999,
        students: 380,
        features: ['Live Classes', 'Recorded Videos', 'Practical Classes', 'Lab Work', 'Regular Tests'],
        badge: null
      }
    ]
  },
  {
    id: '4',
    subject: 'Biology',
    batches: [
      {
        id: '6',
        name: 'SSC Biology Batch A',
        instructor: 'Dr. Farhana Ahmed',
        schedule: 'Sun, Tue, Thu (6:00 PM)',
        duration: '6 months',
        price: 2999,
        students: 350,
        features: ['Live Classes', 'Recorded Videos', 'Practical Classes', 'Lab Work', 'Regular Tests'],
        badge: null
      }
    ]
  },
  {
    id: '5',
    subject: 'English',
    batches: [
      {
        id: '7',
        name: 'SSC English Batch A',
        instructor: 'Sarah Johnson',
        schedule: 'Sat, Mon, Wed (5:00 PM)',
        duration: '6 months',
        price: 2499,
        students: 480,
        features: ['Live Classes', 'Recorded Videos', 'Grammar Focus', 'Writing Practice', 'Regular Tests'],
        badge: 'Popular'
      }
    ]
  },
  {
    id: '6',
    subject: 'Bangla',
    batches: [
      {
        id: '8',
        name: 'SSC Bangla Batch A',
        instructor: 'Prof. Nazmul Islam',
        schedule: 'Sun, Tue, Thu (5:00 PM)',
        duration: '6 months',
        price: 1999,
        students: 420,
        features: ['Live Classes', 'Recorded Videos', 'Literature Focus', 'Writing Practice', 'Regular Tests'],
        badge: null
      }
    ]
  },
  {
    id: '7',
    subject: 'Social Science',
    batches: [
      {
        id: '9',
        name: 'SSC Social Science Batch A',
        instructor: 'Dr. Ahmed Khan',
        schedule: 'Sat, Mon, Wed (4:00 PM)',
        duration: '6 months',
        price: 1999,
        students: 320,
        features: ['Live Classes', 'Recorded Videos', 'History Focus', 'Geography', 'Regular Tests'],
        badge: null
      }
    ]
  },
  {
    id: '8',
    subject: 'Religion',
    batches: [
      {
        id: '10',
        name: 'SSC Religion Batch A',
        instructor: 'Prof. Karim Rahman',
        schedule: 'Sun, Tue, Thu (4:00 PM)',
        duration: '6 months',
        price: 1999,
        students: 280,
        features: ['Live Classes', 'Recorded Videos', 'Islamic Studies', 'Quran Memorization', 'Regular Tests'],
        badge: null
      }
    ]
  }
]

export default function SSCPrograms() {
  const [selectedSubject, setSelectedSubject] = useState('all')

  const filteredBatches = selectedSubject === 'all' 
    ? sscBatches.flatMap(subject => subject.batches)
    : sscBatches.find(subject => subject.subject === selectedSubject)?.batches || []

  return (
    <>
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
              SSC Programs
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Complete SSC preparation with expert teachers, live classes, and comprehensive study materials for all subjects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <BookOpen className="w-5 h-5" />
                <span>Expert Teachers</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="w-5 h-5" />
                <span>Live Classes</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-5 h-5" />
                <span>SSC Focused</span>
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
              onClick={() => setSelectedSubject('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedSubject === 'all' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Subjects
            </button>
            {sscBatches.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject.subject)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedSubject === subject.subject 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {subject.subject}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Batches Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBatches.map((batch, index) => (
              <motion.div
                key={batch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white/50" />
                  </div>
                  {batch.badge && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {batch.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{batch.name}</h3>
                    <span className="text-lg font-bold text-primary-600">৳{batch.price}</span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{batch.students} students</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{batch.duration}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Instructor: {batch.instructor}</p>
                    <p className="text-sm text-gray-600 mb-2">Schedule: {batch.schedule}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                    <div className="space-y-1">
                      {batch.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button 
                    onClick={() => window.location.href = '/courses'}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              SSC Curriculum Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our SSC programs cover the complete curriculum approved by the education board, ensuring students are well-prepared for their examinations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-600">
                All subjects covered with detailed explanations and practice materials
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exam Focused</h3>
              <p className="text-gray-600">
                Special emphasis on SSC exam patterns and question styles
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Multiple batch options to suit different student needs
              </p>
            </motion.div>
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
              Start Your SSC Journey Today
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of successful SSC students who have achieved excellent results with our guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/courses'}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Explore All Programs
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
