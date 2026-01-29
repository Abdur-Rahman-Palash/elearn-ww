'use client'

import { motion } from 'framer-motion'
import { Video, FileText, CheckCircle, MessageCircle } from 'lucide-react'

export default function LearningProcess() {
  const steps = [
    {
      icon: Video,
      title: 'Live Classes',
      description: 'Join interactive live sessions with expert teachers and learn in real-time',
      color: 'bg-blue-500'
    },
    {
      icon: FileText,
      title: 'Recorded Videos',
      description: 'Access recorded classes anytime and revise topics at your own pace',
      color: 'bg-green-500'
    },
    {
      icon: CheckCircle,
      title: 'Practice & MCQs',
      description: 'Test your knowledge with extensive MCQ banks and practice tests',
      color: 'bg-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'Doubt Solving',
      description: 'Get your questions answered 24/7 by our dedicated support team',
      color: 'bg-orange-500'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to start your learning journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Icon Container */}
                  <div className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent -translate-x-1/2"></div>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary">
            Start Learning Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}
