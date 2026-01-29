'use client'

import { motion } from 'framer-motion'
import { Play, Download, CheckCircle, Star, Smartphone, Monitor } from 'lucide-react'

export default function AppPromo() {
  const benefits = [
    'Live classes on the go',
    'Download videos for offline viewing',
    'Practice MCQs anytime',
    '24/7 doubt solving',
    'Track your progress',
    'Get notifications'
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - App Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                📱 Mobile App Available
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Learn Anytime, Anywhere
            </h2>

            <p className="text-lg mb-8 text-white/90">
              Download our mobile app and access thousands of courses, live classes, and study materials right from your smartphone. Never miss a class again!
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                <Monitor className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>

              <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4 mt-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white/90">4.8 out of 5</span>
              <span className="text-white/70">(50K+ reviews)</span>
            </div>
          </motion.div>

          {/* Right Content - App Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Phone Mockup */}
              <div className="mx-auto w-64 h-[500px] bg-black rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  {/* App Screen */}
                  <div className="bg-gradient-to-br from-primary-500 to-secondary-500 h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="bg-black/10 px-4 py-2 flex justify-between items-center text-xs text-white">
                      <span>9:41 AM</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-3 bg-white rounded-sm"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="flex-1 p-4 flex flex-col items-center justify-center text-white">
                      <Smartphone className="w-16 h-16 mb-4" />
                      <h3 className="text-xl font-bold mb-2">EduLearn</h3>
                      <p className="text-sm text-white/80 mb-6">Your Learning Companion</p>
                      
                      <div className="space-y-2 w-full">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Live Class</span>
                            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Practice MCQ</span>
                            <Play className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Download Videos</span>
                            <Download className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="bg-black/10 px-4 py-2 flex justify-around">
                      <div className="w-6 h-6 bg-white/30 rounded"></div>
                      <div className="w-6 h-6 bg-white/30 rounded"></div>
                      <div className="w-6 h-6 bg-white/30 rounded"></div>
                      <div className="w-6 h-6 bg-white/30 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3"
              >
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-900">4.8 Rating</span>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3"
              >
                <div className="flex items-center space-x-2">
                  <Download className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold text-gray-900">1M+ Downloads</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
