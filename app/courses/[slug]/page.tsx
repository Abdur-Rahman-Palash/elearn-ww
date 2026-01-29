'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { BookOpen, Users, Award, Clock, ArrowRight, CheckCircle, Calendar, Target, Star, Play, Download, Award as Certificate, User, MessageCircle, ThumbsUp } from 'lucide-react'
import { courses } from '@/data/courses'

interface Course {
  id: string
  title: string
  description: string
  level: string
  category: string
  badge: 'Popular' | 'Free' | 'New' | null
  thumbnail: string
  instructor: string
  duration: string
  lessons: number
  students: number
  rating: number
  price: number
}

// Mock course data - in a real app, this would come from an API based on the slug
const mockCourse: Course = {
  id: '1',
  title: 'HSC Physics 2026',
  description: 'Complete HSC Physics preparation with live classes and recorded videos',
  level: 'HSC',
  category: 'Academic',
  badge: 'Popular',
  thumbnail: '/physics-course.jpg',
  instructor: 'Dr. Ahmed Khan',
  duration: '120 hours',
  lessons: 240,
  students: 15420,
  rating: 4.8,
  price: 2999
}

// Mock modules data
const modules = [
  {
    module: 'Module 1: Mechanics',
    lessons: [
      { title: 'Introduction to Mechanics', duration: '45 min', type: 'video' },
      { title: 'Kinematics', duration: '60 min', type: 'video' },
      { title: 'Newton\'s Laws', duration: '55 min', type: 'video' },
      { title: 'Work and Energy', duration: '50 min', type: 'video' },
      { title: 'Practice Problems', duration: '40 min', type: 'practice' }
    ],
    duration: '4 hours'
  },
  {
    module: 'Module 2: Thermodynamics',
    lessons: [
      { title: 'Temperature and Heat', duration: '50 min', type: 'video' },
      { title: 'Laws of Thermodynamics', duration: '60 min', type: 'video' },
      { title: 'Heat Transfer', duration: '45 min', type: 'video' },
      { title: 'Practical Applications', duration: '35 min', type: 'video' }
    ],
    duration: '3.5 hours'
  },
  {
    module: 'Module 3: Waves and Optics',
    lessons: [
      { title: 'Wave Motion', duration: '55 min', type: 'video' },
      { title: 'Sound Waves', duration: '45 min', type: 'video' },
      { title: 'Light and Reflection', duration: '50 min', type: 'video' },
      { title: 'Refraction and Lenses', duration: '60 min', type: 'video' }
    ],
    duration: '3.5 hours'
  }
]

const instructor = {
  name: 'Dr. Ahmed Khan',
  title: 'Senior Physics Instructor',
  bio: 'With over 15 years of teaching experience, Dr. Ahmed Khan has helped thousands of students excel in Physics. He holds a PhD in Physics from Dhaka University and has published numerous research papers.',
  expertise: ['HSC Physics', 'University Admission', 'Research Methodology'],
  students: 50000,
  rating: 4.9,
  courses: 12
}

const reviews = [
  {
    id: '1',
    name: 'Tasnim Ahmed',
    avatar: '👩‍🎓',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Excellent course! Dr. Ahmed explains complex concepts in a very simple way. The practice problems really helped me prepare for exams.',
    helpful: 24
  },
  {
    id: '2',
    name: 'Rafiqul Islam',
    avatar: '👨‍🎓',
    rating: 5,
    date: '1 month ago',
    comment: 'Best physics course I\'ve ever taken. The video quality is great and the instructor is very knowledgeable.',
    helpful: 18
  },
  {
    id: '3',
    name: 'Fatema Khatun',
    avatar: '👩‍🎓',
    rating: 4,
    date: '1 month ago',
    comment: 'Very comprehensive course. Covers all topics in detail. Would recommend to all HSC students.',
    helpful: 15
  }
]

function CourseDetailsPage() {
  const params = useParams()
  const slug = params.slug as string
  const [course, setCourse] = useState<Course | null>(null)
  const [activeModule, setActiveModule] = useState(0)
  const [expandedModule, setExpandedModule] = useState<number | null>(null)

  useEffect(() => {
    // Find course by ID (slug)
    const foundCourse = courses.find(c => c.id === slug)
    setCourse(foundCourse || null)
  }, [slug])

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Course Header */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                  {course.category}
                </span>
                {course.badge && (
                  <span className="ml-2 inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {course.badge}
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl mb-6 text-white/90">{course.description}</p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2">{course.rating} ({course.students.toLocaleString()} students)</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4" />
                  <span>{course.level}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 text-gray-900"
            >
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <Play className="w-16 h-16 text-gray-400" />
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  {course.price === 0 ? (
                    <span className="text-3xl font-bold text-green-600">Free</span>
                  ) : (
                    <span className="text-3xl font-bold text-primary-600">৳{course.price}</span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Download className="w-5 h-5" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Certificate className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Enroll Now
              </button>
              
              <div className="mt-4 text-center text-sm text-gray-600">
                30-day money-back guarantee
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  This comprehensive HSC Physics course covers all the essential topics you need to excel in your exams. 
                  With detailed video lectures, practice problems, and regular assessments, you'll build a strong foundation 
                  in Physics and develop problem-solving skills that will serve you well in higher education.
                </p>
              </motion.div>

              {/* Curriculum */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <button
                        onClick={() => setExpandedModule(expandedModule === moduleIndex ? null : moduleIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                            {moduleIndex + 1}
                          </div>
                          <div className="text-left">
                            <h3 className="font-semibold text-gray-900">{module.module}</h3>
                            <p className="text-sm text-gray-600">{module.lessons.length} lessons • {module.duration}</p>
                          </div>
                        </div>
                        <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform ${
                          expandedModule === moduleIndex ? 'rotate-90' : ''
                        }`} />
                      </button>
                      
                      {expandedModule === moduleIndex && (
                        <div className="border-t border-gray-200">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                              <div className="flex items-center space-x-3">
                                {lesson.type === 'video' ? (
                                  <Play className="w-4 h-4 text-primary-600" />
                                ) : (
                                  <BookOpen className="w-4 h-4 text-green-600" />
                                )}
                                <span className="text-gray-900">{lesson.title}</span>
                              </div>
                              <span className="text-sm text-gray-500">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h2>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{review.avatar}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-900">{review.name}</h4>
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${
                                      i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                    }`} />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3">{review.comment}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <button className="flex items-center space-x-1 hover:text-primary-600">
                              <ThumbsUp className="w-4 h-4" />
                              <span>Helpful ({review.helpful})</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-primary-600">
                              <MessageCircle className="w-4 h-4" />
                              <span>Reply</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Instructor */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200 mb-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Your Instructor</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{instructor.name}</h4>
                    <p className="text-sm text-gray-600">{instructor.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{instructor.bio}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students</span>
                    <span className="font-medium">{instructor.students.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating</span>
                    <span className="font-medium">{instructor.rating}/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Courses</span>
                    <span className="font-medium">{instructor.courses}</span>
                  </div>
                </div>
              </motion.div>

              {/* Course Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Course Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">240 video lessons</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Downloadable resources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Practice exercises</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Certificate of completion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Lifetime access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Mobile access</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CourseDetailsPage
