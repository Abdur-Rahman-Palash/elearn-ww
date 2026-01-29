'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { batches } from '@/data/batches'
import { Calendar, Clock, Users, Tag } from 'lucide-react'

export default function Batches() {
  const [activeTab, setActiveTab] = useState<'Academic' | 'Admission Test' | 'Skills'>('Academic')

  const filteredBatches = batches.filter(batch => batch.category === activeTab)

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Live':
        return 'bg-green-500 text-white'
      case 'Upcoming':
        return 'bg-blue-500 text-white'
      case 'Completed':
        return 'bg-gray-500 text-white'
      default:
        return ''
    }
  }

  const tabs = [
    { id: 'Academic', label: 'Academic' },
    { id: 'Admission Test', label: 'Admission Test' },
    { id: 'Skills', label: 'Skills' }
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
            Online <span className="text-gradient">Batches</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our structured batch programs for comprehensive learning
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Batches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBatches.map((batch, index) => (
            <motion.div
              key={batch.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(batch.badge)}`}>
                  {batch.badge}
                </span>
                <span className="text-lg font-bold text-primary-600">
                  ৳{batch.price}
                </span>
              </div>

              {/* Batch Name */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {batch.name}
              </h3>

              {/* Target Class */}
              <div className="flex items-center text-gray-600 mb-4">
                <Users className="w-4 h-4 mr-2" />
                <span className="text-sm">{batch.targetClass}</span>
              </div>

              {/* Subject Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {batch.subjects.map((subject, subjectIndex) => (
                  <span
                    key={subjectIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {subject}
                  </span>
                ))}
              </div>

              {/* Batch Details */}
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Starts: {batch.startDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Duration: {batch.duration}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => {
                  console.log('Enroll clicked for batch:', batch.id, batch.name)
                  window.location.href = '/courses'
                }}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 rounded-lg transition-colors"
              >
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="btn-primary">
            View All Batches
          </button>
        </motion.div>
      </div>
    </section>
  )
}
