'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Star, BookOpen, Users, Award } from 'lucide-react'

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const quickButtons = [
    { name: 'HSC 26', color: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'HSC 27', color: 'bg-purple-600 hover:bg-purple-700' },
    { name: 'SSC 26', color: 'bg-green-600 hover:bg-green-700' },
    { name: 'Class 9', color: 'bg-orange-600 hover:bg-orange-700' },
    { name: 'Class 10', color: 'bg-red-600 hover:bg-red-700' },
    { name: 'Free Classes', color: 'bg-gray-600 hover:bg-gray-700' },
  ]

  const stats = [
    { icon: Users, label: 'Active Students', value: '2.5M+' },
    { icon: BookOpen, label: 'Total Courses', value: '500+' },
    { icon: Award, label: 'Success Rate', value: '95%' },
    { icon: Star, label: 'Average Rating', value: '4.8' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-400 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                🎓 Bangladesh's #1 Learning Platform
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="block">Learn from the</span>
              <span className="block text-gradient">Best Teachers</span>
              <span className="block font-bangla">সেরা শিক্ষকদের কাছ থেকে শিখুন</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Access live classes, recorded videos, MCQ practice, and doubt solving. 
              Excel in academics, admission tests, and professional skills.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button 
                onClick={() => window.location.href = '/courses'}
                className="btn-primary group"
              >
                Start Learning Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => alert('Demo video coming soon!')}
                className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-lg border border-gray-300 transition-all duration-200 flex items-center justify-center group"
              >
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </motion.div>

            {/* Quick Course Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {quickButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (button.name === 'Free Classes') {
                      window.location.href = '/free-classes'
                    } else if (button.name === 'Class 9' || button.name === 'Class 10') {
                      window.location.href = '/academics'
                    } else if (button.name === 'SSC 26') {
                      window.location.href = '/programs/ssc'
                    } else if (button.name === 'HSC 26' || button.name === 'HSC 27') {
                      window.location.href = '/programs/hsc'
                    } else {
                      window.location.href = '/courses'
                    }
                  }}
                  className={`${button.color} text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95`}
                >
                  {button.name}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Start Your Journey</h3>
                  <p className="text-lg opacity-90">Join 2.5M+ students already learning</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.8 Rating</span>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold">2.5M+ Students</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center card-shadow">
                <Icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Platform Demo</h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Video demo would play here</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
