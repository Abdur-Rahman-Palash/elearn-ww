'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { BookOpen, Users, Award, Clock, ArrowRight, CheckCircle, Calendar, Target, Star, User } from 'lucide-react'

export default function HSCPage() {
  const [selectedStream, setSelectedStream] = useState('All')
  const [sortBy, setSortBy] = useState('popular')

const hscPrograms = {
  'Science': [
    {
      id: '1',
      name: 'HSC 26 Science Complete',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Higher Math', 'Mathematics'],
      startDate: 'January 2024',
      duration: '12 months',
      price: 12999,
      originalPrice: 17999,
      students: 3450,
      rating: 4.9,
      features: ['Live Classes', 'Recorded Videos', 'MCQ Bank', 'Weekly Tests', 'Model Tests', 'Board Questions', 'Practical Sessions'],
      badge: 'Popular',
      instructors: ['Dr. Ahmed Khan', 'Prof. Fatema Rahman', 'Dr. Mohammad Ali']
    },
    {
      id: '2',
      name: 'HSC 26 Biology Focus',
      subjects: ['Biology', 'Chemistry', 'Physics'],
      startDate: 'January 2024',
      duration: '12 months',
      price: 9999,
      originalPrice: 13999,
      students: 1890,
      rating: 4.8,
      features: ['Live Classes', 'Recorded Videos', 'MCQ Bank', 'Weekly Tests', 'Practical Sessions'],
      badge: null,
      instructors: ['Dr. Mohammad Ali', 'Prof. Fatema Rahman']
    }
  ],
  'Business Studies': [
    {
      id: '3',
      name: 'HSC 26 Business Studies Complete',
      subjects: ['Accounting', 'Business Studies', 'Finance', 'Management', 'Economics'],
      startDate: 'January 2024',
      duration: '12 months',
      price: 10999,
      originalPrice: 15999,
      students: 2340,
      rating: 4.8,
      features: ['Live Classes', 'Recorded Videos', 'MCQ Bank', 'Weekly Tests', 'Model Tests', 'Board Questions'],
      badge: 'Popular',
      instructors: ['Prof. Karim Rahman', 'Dr. Salma Akter']
    },
    {
      id: '4',
      name: 'HSC 26 Accounting Focus',
      subjects: ['Accounting', 'Finance', 'Business Studies'],
      startDate: 'January 2024',
      duration: '12 months',
      price: 8999,
      originalPrice: 12999,
      students: 1560,
      rating: 4.7,
      features: ['Live Classes', 'Recorded Videos', 'MCQ Bank', 'Weekly Tests', 'Practical Accounting'],
      badge: null,
      instructors: ['Prof. Karim Rahman']
    }
  ],
  'Humanities': [
    {
      id: '5',
      name: 'HSC 26 Humanities Complete',
      subjects: ['History', 'Geography', 'Civics', 'Economics', 'Bangla', 'English'],
      startDate: 'January 2024',
      duration: '12 months',
      price: 8999,
      originalPrice: 12999,
      students: 1230,
      rating: 4.7,
      features: ['Live Classes', 'Recorded Videos', 'MCQ Bank', 'Weekly Tests', 'Model Tests'],
      badge: null,
      instructors: ['Dr. Nazmul Islam', 'Prof. Farhana Ahmed']
    }
  ]
}

const teachers = {
  'Science': [
    {
      name: 'Dr. Ahmed Khan',
      subject: 'Physics',
      experience: '15+ years',
      qualification: 'PhD in Physics',
      students: '5000+'
    },
    {
      name: 'Prof. Fatema Rahman',
      subject: 'Chemistry',
      experience: '12+ years',
      qualification: 'MSc in Chemistry',
      students: '4500+'
    },
    {
      name: 'Dr. Mohammad Ali',
      subject: 'Biology',
      experience: '18+ years',
      qualification: 'PhD in Biology',
      students: '6000+'
    }
  ],
  'Business Studies': [
    {
      name: 'Prof. Karim Rahman',
      subject: 'Accounting',
      experience: '20+ years',
      qualification: 'CA, MBA',
      students: '7000+'
    },
    {
      name: 'Dr. Salma Akter',
      subject: 'Business Studies',
      experience: '10+ years',
      qualification: 'PhD in Business',
      students: '3500+'
    }
  ],
  'Humanities': [
    {
      name: 'Dr. Nazmul Islam',
      subject: 'History',
      experience: '14+ years',
      qualification: 'PhD in History',
      students: '4000+'
    },
    {
      name: 'Prof. Farhana Ahmed',
      subject: 'Geography',
      experience: '12+ years',
      qualification: 'MSc in Geography',
      students: '3200+'
    }
  ]
}

const examRoadmap = [
  {
    phase: 'Foundation Building',
    duration: 'Jan - Mar',
    topics: ['Basic Concepts', 'Formula Mastery', 'Problem Solving Techniques'],
    completed: true
  },
  {
    phase: 'Syllabus Coverage',
    duration: 'Apr - Aug',
    topics: ['Complete Syllabus', 'Chapter-wise Tests', 'Monthly Evaluations'],
    completed: true
  },
  {
    phase: 'Revision & Practice',
    duration: 'Sep - Nov',
    topics: ['Model Tests', 'Board Questions', 'Weakness Analysis'],
    completed: false
  },
  {
    phase: 'Final Preparation',
    duration: 'Dec - Feb',
    topics: ['Exam Strategy', 'Time Management', 'Final Mock Tests'],
    completed: false
  }
]

const streamColors = {
  'Science': 'bg-blue-100 text-blue-700 border-blue-200',
  'Business Studies': 'bg-green-100 text-green-700 border-green-200',
  'Humanities': 'bg-purple-100 text-purple-700 border-purple-200'
}

const badgeColors = {
  'Popular': 'bg-red-500 text-white'
}

function HSCProgramPage() {
  const [activeTab, setActiveTab] = useState<'Science' | 'Business Studies' | 'Humanities'>('Science')

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              HSC Programs
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Complete Higher Secondary Certificate preparation with expert guidance and comprehensive study materials
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="w-5 h-5" />
                <span>12,000+ HSC Students</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-5 h-5" />
                <span>97% Pass Rate</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Target className="w-5 h-5" />
                <span>University Admission Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stream Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              {Object.keys(hscPrograms).map((stream) => (
                <button
                  key={stream}
                  onClick={() => setActiveTab(stream as any)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                    activeTab === stream
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {stream}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hscPrograms[activeTab].map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{program.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">{program.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({program.students.toLocaleString()} students)</span>
                      </div>
                    </div>
                    {program.badge && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColors[program.badge as keyof typeof badgeColors]}`}>
                        {program.badge}
                      </span>
                    )}
                  </div>

                  {/* Subjects */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject) => (
                        <span key={subject} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Instructors */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Instructors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.instructors.map((instructor) => (
                        <span key={instructor} className="text-sm text-gray-600 bg-blue-50 px-2 py-1 rounded">
                          {instructor}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{program.startDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary-600">৳{program.price}</span>
                        {program.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">৳{program.originalPrice}</span>
                        )}
                      </div>
                      {program.originalPrice && (
                        <span className="text-xs text-green-600 font-medium">
                          Save ৳{program.originalPrice - program.price}
                        </span>
                      )}
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center">
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Highlights */}
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
              Expert Teachers
            </h2>
            <p className="text-lg text-gray-600">
              Learn from the best teachers in {activeTab}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers[activeTab].map((teacher, index) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border rounded-xl p-6 ${streamColors[activeTab as keyof typeof streamColors]}`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{teacher.name}</h3>
                    <p className="text-sm text-gray-600">{teacher.subject}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Experience:</span>
                    <span className="text-sm font-medium">{teacher.experience}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Qualification:</span>
                    <span className="text-sm font-medium">{teacher.qualification}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Students:</span>
                    <span className="text-sm font-medium">{teacher.students}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Preparation Roadmap */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Exam Preparation Roadmap
            </h2>
            <p className="text-lg text-gray-600">
              Structured preparation plan for HSC success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examRoadmap.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`bg-white rounded-xl p-6 border-2 ${phase.completed ? 'border-green-500' : 'border-gray-200'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                    {phase.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{phase.duration}</p>
                  <div className="space-y-2">
                    {phase.topics.map((topic) => (
                      <div key={topic} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${phase.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <span className="text-sm text-gray-600">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {index < examRoadmap.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
                )}
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
              Start Your HSC Preparation Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join the best HSC preparation program and secure your future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
                Get Started Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors">
                Free Trial Class
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
