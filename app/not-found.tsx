'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, ArrowLeft, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found | EduLearn',
  description: 'The page you are looking for does not exist. Return to EduLearn homepage or search for what you need.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-gray-300">404</div>
            <div className="text-6xl mb-4">😕</div>
          </div>

          {/* Error Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Oops! Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 mb-8"
          >
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Back Home
            </Link>

            <div className="flex space-x-4">
              <button
                onClick={() => window.history.back()}
                className="flex-1 inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>

              <button
                onClick={() => window.location.reload()}
                className="flex-1 inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Retry
              </button>
            </div>
          </motion.div>

          {/* Search Suggestion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 p-4 bg-white rounded-lg shadow-sm"
          >
            <p className="text-sm text-gray-600 mb-3">Looking for something specific?</p>
            <Link
              href="/courses"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              <Search className="w-4 h-4 mr-1" />
              Browse Courses
            </Link>
          </motion.div>

          {/* Popular Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6"
          >
            <p className="text-sm text-gray-600 mb-3">Popular Pages:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="/academics"
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Academic Programs
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/courses"
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                All Courses
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/free-classes"
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Free Classes
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/about"
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                About Us
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
