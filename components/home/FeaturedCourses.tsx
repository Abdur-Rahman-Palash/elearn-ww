'use client'

import { motion } from 'framer-motion'
import { courses } from '@/data/courses'
import { Star, Users, Clock, BookOpen } from 'lucide-react'

export default function FeaturedCourses() {
  const featuredCourses = courses.slice(0, 6)

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case 'Popular':
        return 'bg-red-500 text-white'
      case 'Free':
        return 'bg-green-500 text-white'
      case 'New':
        return 'bg-blue-500 text-white'
      default:
        return ''
    }
  }

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
            <span className="text-gradient">Featured Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular courses loved by thousands of students
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = `/courses/${course.id}`}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Course Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-primary-400 to-secondary-400">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white/50" />
                  </div>
                  
                  {/* Badge */}
                  {course.badge && (
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(course.badge)}`}>
                      {course.badge}
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{course.level}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      {course.price === 0 ? (
                        <span className="text-green-600 font-semibold">Free</span>
                      ) : (
                        <span className="text-gray-900 font-semibold">৳{course.price}</span>
                      )}
                    </div>
                    <button 
                      onClick={() => {
                        console.log('View course clicked:', course.id, course.title)
                        window.location.href = `/courses/${course.id}`
                      }}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:translate-x-1 transition-transform"
                    >
                      View Course →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button 
            onClick={() => window.location.href = '/courses'}
            className="btn-primary"
          >
            View All Courses
          </button>
        </motion.div>
      </div>
    </section>
  )
}
