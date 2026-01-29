'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, TrendingUp, Award, Users, BookOpen } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Unlimited Recorded Classes',
      description: 'Access thousands of recorded video lectures anytime, anywhere'
    },
    {
      icon: CheckCircle,
      title: 'MCQ Practice Bank',
      description: 'Practice with over 50,000 MCQs with detailed explanations'
    },
    {
      icon: Clock,
      title: 'Weekly Exams',
      description: 'Regular assessments to track your progress and improve performance'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed analytics'
    },
    {
      icon: Award,
      title: 'Rank & Leaderboard',
      description: 'Compete with peers and climb the leaderboard'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Get help from our dedicated support team anytime'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student <span className="text-gradient">Benefits</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to excel in your academic journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
