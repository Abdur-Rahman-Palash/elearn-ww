'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { 
  BookOpen, 
  Play, 
  Clock, 
  Users, 
  Award, 
  Target, 
  Calendar, 
  TrendingUp, 
  BarChart3, 
  Video, 
  Download, 
  Bell, 
  Settings, 
  LogOut,
  User,
  CheckCircle,
  AlertCircle,
  Star,
  ChevronRight,
  Home,
  BookMarked,
  FileText,
  HelpCircle
} from 'lucide-react'

// Mock data for demonstration
const enrolledCourses = [
  {
    id: '1',
    title: 'HSC Physics Complete Course',
    instructor: 'Dr. Ahmed Khan',
    progress: 65,
    totalLessons: 120,
    completedLessons: 78,
    thumbnail: '/courses/physics.jpg',
    nextLesson: 'Chapter 8: Electromagnetism',
    lastAccessed: '2024-01-20',
    category: 'Academic',
    level: 'HSC'
  },
  {
    id: '2',
    title: 'IELTS Academic Preparation',
    instructor: 'Sarah Johnson',
    progress: 45,
    totalLessons: 80,
    completedLessons: 36,
    thumbnail: '/courses/ielts.jpg',
    nextLesson: 'Writing Task 2: Essay Structure',
    lastAccessed: '2024-01-19',
    category: 'Language',
    level: 'Intermediate'
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    instructor: 'Lisa Anderson',
    progress: 80,
    totalLessons: 100,
    completedLessons: 80,
    thumbnail: '/courses/webdev.jpg',
    nextLesson: 'Project: E-commerce Website',
    lastAccessed: '2024-01-18',
    category: 'Skills',
    level: 'Beginner'
  }
]

const upcomingClasses = [
  {
    id: '1',
    title: 'Physics Live Class - Chapter 9',
    course: 'HSC Physics Complete Course',
    instructor: 'Dr. Ahmed Khan',
    date: '2024-01-25',
    time: '7:00 PM',
    duration: '90 minutes',
    type: 'Live'
  },
  {
    id: '2',
    title: 'IELTS Speaking Practice',
    course: 'IELTS Academic Preparation',
    instructor: 'Sarah Johnson',
    date: '2024-01-26',
    time: '6:00 PM',
    duration: '60 minutes',
    type: 'Practice'
  }
]

const achievements = [
  {
    id: '1',
    title: 'First Course Completed',
    description: 'Completed your first course',
    icon: '🎉',
    earnedDate: '2024-01-15'
  },
  {
    id: '2',
    title: '7-Day Streak',
    description: 'Studied for 7 consecutive days',
    icon: '🔥',
    earnedDate: '2024-01-20'
  },
  {
    id: '3',
    title: 'Top Performer',
    description: 'Scored 95% in Physics',
    icon: '⭐',
    earnedDate: '2024-01-18'
  }
]

const stats = {
  totalCourses: 3,
  completedCourses: 1,
  totalHours: 45,
  certificates: 1,
  streak: 7
}

export default function DashboardContent() {
  const [activeTab, setActiveTab] = useState('overview')
  const [notifications, setNotifications] = useState(3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <span className="text-sm text-gray-500">
                Welcome back, Student!
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'overview' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Home className="w-5 h-5" />
                  <span className="font-medium">Overview</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'courses' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">My Courses</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('progress')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'progress' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-medium">Progress</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('schedule')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'schedule' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Schedule</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('achievements')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'achievements' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Achievements</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('certificates')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'certificates' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <FileText className="w-5 h-5" />
                  <span className="font-medium">Certificates</span>
                </button>
              </nav>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 mt-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Enrolled Courses</span>
                  <span className="font-semibold text-gray-900">{stats.totalCourses}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Completed</span>
                  <span className="font-semibold text-green-600">{stats.completedCourses}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Study Streak</span>
                  <span className="font-semibold text-orange-600">{stats.streak} days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Certificates</span>
                  <span className="font-semibold text-blue-600">{stats.certificates}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Welcome Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl p-8"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
                      <p className="text-white/90">
                        Continue your learning journey where you left off.
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{stats.totalHours}</div>
                      <div className="text-white/80 text-sm">Hours Studied</div>
                    </div>
                  </div>
                </motion.div>

                {/* Enrolled Courses */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Enrolled Courses</h3>
                    <Link
                      href="/courses"
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Browse All Courses
                    </Link>
                  </div>
                  
                  <div className="space-y-4">
                    {enrolledCourses.map((course, index) => (
                      <div key={course.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{course.title}</h4>
                          <p className="text-sm text-gray-600">{course.instructor}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex-1">
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                                <span>Progress</span>
                                <span>{course.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">
                              {course.completedLessons}/{course.totalLessons} lessons
                            </span>
                          </div>
                          <Link
                            href={`/courses/${course.id}`}
                            className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                          >
                            Continue
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Upcoming Classes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Upcoming Classes</h3>
                    <span className="text-sm text-gray-500">Next 7 days</span>
                  </div>
                  
                  <div className="space-y-4">
                    {upcomingClasses.map((classItem, index) => (
                      <div key={classItem.id} className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{classItem.title}</h4>
                          <p className="text-sm text-gray-600">{classItem.course}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{classItem.date}</span>
                            <span>{classItem.time}</span>
                            <span>{classItem.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}

            {/* Other tabs would go here */}
            {activeTab !== 'overview' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h3>
                <p className="text-gray-600">
                  This section is coming soon. Stay tuned for updates!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
