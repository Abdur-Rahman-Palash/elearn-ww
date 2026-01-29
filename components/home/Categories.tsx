'use client'

import { motion } from 'framer-motion'
import { categories } from '@/data/categories'
import { ArrowRight } from 'lucide-react'

export default function Categories() {
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
            Explore <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of courses designed for every learning need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => {
                if (category.title === 'Academic Programs') {
                  window.location.href = '/academics'
                } else if (category.title === 'Skills Courses') {
                  window.location.href = '/skills'
                } else if (category.title === 'Language Learning') {
                  window.location.href = '/english'
                } else if (category.title === 'Admission Tests') {
                  window.location.href = '/admission-test'
                } else {
                  window.location.href = '/courses'
                }
              }}
            >
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 h-full">
                <div className={`${category.color} w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {category.subtitle}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.courseCount} courses
                  </span>
                  <div className="flex items-center text-primary-600 group-hover:text-primary-700 transition-colors">
                    <span className="text-sm font-medium mr-1">Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
