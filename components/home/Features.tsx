'use client'

import { motion } from 'framer-motion'
import { Video, FileText, CheckSquare, Brain, MessageCircle, Clock } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Video,
      title: 'Weekly Live Classes',
      description: 'Interactive live sessions with expert teachers every week'
    },
    {
      icon: FileText,
      title: 'Printed Notes',
      description: 'Comprehensive study materials delivered to your doorstep'
    },
    {
      icon: CheckSquare,
      title: 'Homework',
      description: 'Regular assignments to reinforce your learning'
    },
    {
      icon: Brain,
      title: 'Auto MCQ Evaluation',
      description: 'Instant feedback on your MCQ performance'
    },
    {
      icon: MessageCircle,
      title: '24/7 Doubt Solve',
      description: 'Get your questions answered anytime by our experts'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Learn at your own pace with our flexible timing options'
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
            Platform <span className="text-gradient">Features</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for a complete learning experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-white rounded-xl p-8 h-full shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
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
