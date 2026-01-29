'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Award, Clock, ArrowRight, CheckCircle, Calendar, Target, Star, Headphones, MessageCircle, Globe, Trophy } from 'lucide-react'

const englishPrograms = [
  {
    id: '1',
    name: 'Spoken English Complete',
    category: 'Spoken English',
    level: 'Beginner to Advanced',
    duration: '4 months',
    price: 6999,
    originalPrice: 9999,
    students: 8450,
    rating: 4.8,
    features: [
      'Live Speaking Sessions',
      'Pronunciation Practice',
      'Real-life Conversations',
      'Grammar Focus',
      'Vocabulary Building',
      'Mock Interviews'
    ],
    badge: 'Popular'
  },
  {
    id: '2',
    name: 'IELTS Academic Preparation',
    category: 'IELTS',
    level: 'Intermediate',
    duration: '3 months',
    price: 8999,
    originalPrice: 12999,
    students: 6230,
    rating: 4.9,
    features: [
      'All Four Modules',
      'Mock Tests',
      'Band Score Guarantee',
      'One-on-One Feedback',
      'Speaking Practice',
      'Writing Correction'
    ],
    badge: 'Popular'
  },
  {
    id: '3',
    name: 'English Grammar Masterclass',
    category: 'Grammar',
    level: 'Beginner to Advanced',
    duration: '2 months',
    price: 3999,
    originalPrice: 5999,
    students: 5180,
    rating: 4.7,
    features: [
      'Complete Grammar Rules',
      'Practice Exercises',
      'Error Correction',
      'Writing Practice',
      'Quizzes & Tests',
      'Certificate'
    ],
    badge: null
  },
  {
    id: '4',
    name: 'Kids English (6-12 years)',
    category: 'Kids',
    level: 'Beginner',
    duration: '6 months',
    price: 4999,
    originalPrice: 7999,
    students: 3890,
    rating: 4.8,
    features: [
      'Fun Learning Activities',
      'Interactive Games',
      'Story-based Learning',
      'Visual Learning',
      'Parent Dashboard',
      'Progress Reports'
    ],
    badge: null
  },
  {
    id: '5',
    name: 'Business English Professional',
    category: 'Business',
    level: 'Intermediate',
    duration: '3 months',
    price: 7999,
    originalPrice: 11999,
    students: 4250,
    rating: 4.7,
    features: [
      'Business Communication',
      'Email Writing',
      'Presentation Skills',
      'Meeting Etiquette',
      'Negotiation Skills',
      'Corporate Vocabulary'
    ],
    badge: null
  },
  {
    id: '6',
    name: 'English Pronunciation Course',
    category: 'Pronunciation',
    level: 'All Levels',
    duration: '2 months',
    price: 2999,
    originalPrice: 4999,
    students: 3120,
    rating: 4.6,
    features: [
      'Phonetics Training',
      'Accent Reduction',
      'Speech Practice',
      'Audio Exercises',
      'Voice Recording',
      'Personal Feedback'
    ],
    badge: null
  }
]

const learningPath = [
  {
    level: 'Beginner',
    title: 'Foundation',
    description: 'Basic English skills',
    icon: '🌱',
    color: 'bg-green-100 text-green-700'
  },
  {
    level: 'Elementary',
    title: 'Building',
    description: 'Grammar & Vocabulary',
    icon: '🌿',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    level: 'Intermediate',
    title: 'Developing',
    description: 'Fluency & Confidence',
    icon: '🌳',
    color: 'bg-purple-100 text-purple-700'
  },
  {
    level: 'Advanced',
    title: 'Mastery',
    description: 'Professional English',
    icon: '🌲',
    color: 'bg-orange-100 text-orange-700'
  }
]

const successStories = [
  {
    name: 'Rahim Ahmed',
    story: 'From shy speaker to confident communicator',
    program: 'Spoken English Complete',
    achievement: 'IELTS Band 8.0',
    avatar: '👨‍💼'
  },
  {
    name: 'Fatema Khatun',
    story: 'Got dream job in multinational company',
    program: 'Business English Professional',
    achievement: 'Promoted to Manager',
    avatar: '👩‍💼'
  },
  {
    name: 'Karim Rahman',
    story: 'Improved pronunciation dramatically',
    program: 'English Pronunciation Course',
    achievement: '95% Improvement',
    avatar: '👨‍🎓'
  }
]

export default function EnglishContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              English Learning Center
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Master English with our comprehensive programs - from basic grammar to professional communication
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Headphones className="w-5 h-5" />
                <span>Expert Teachers</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5" />
                <span>Global Recognition</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Path Section */}
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
              Your Learning Journey
            </h2>
            <p className="text-lg text-gray-600">
              Follow our structured learning path from beginner to expert level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPath.map((path, index) => (
              <motion.div
                key={path.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className={`w-16 h-16 ${path.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {path.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{path.level}</h3>
                  <p className="text-sm text-gray-600">{path.description}</p>
                  {index < learningPath.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* English Programs */}
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
              English Programs
            </h2>
            <p className="text-lg text-gray-600">
              Choose the right program based on your learning goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {englishPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center">
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
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {program.category}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {program.level}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{program.students.toLocaleString()}</span>
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

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {program.originalPrice > program.price && (
                        <span className="text-sm text-gray-500 line-through">৳{program.originalPrice}</span>
                      )}
                      <div className="text-xl font-bold text-primary-600">৳{program.price}</div>
                    </div>
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

      {/* Success Stories */}
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
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our students who transformed their lives with English
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{story.avatar}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{story.name}</h3>
                <p className="text-gray-600 mb-2">{story.story}</p>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">{story.achievement}</span>
                </div>
                <p className="text-sm text-gray-500">{story.program}</p>
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
              Start Your English Journey Today
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of students who have improved their English skills with our expert guidance
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
