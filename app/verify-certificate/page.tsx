'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Search, Award, CheckCircle, AlertCircle, Download, Share2, Calendar, User, BookOpen } from 'lucide-react'

export default function VerifyCertificatePage() {
  const [certificateId, setCertificateId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [certificateData, setCertificateData] = useState<any>(null)
  const [error, setError] = useState('')

  const handleVerify = async () => {
    if (!certificateId.trim()) {
      setError('Please enter a certificate ID')
      return
    }

    setIsLoading(true)
    setError('')

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      
      // Mock data for demonstration
      if (certificateId === 'VALID123' || certificateId === 'TEST456') {
        setCertificateData({
          id: certificateId,
          studentName: 'Ahmed Rahman',
          courseName: 'HSC Physics Complete Course',
          completionDate: '2024-01-15',
          grade: 'A+',
          duration: '6 months',
          instructor: 'Dr. Ahmed Khan',
          status: 'valid'
        })
      } else {
        setError('Certificate not found. Please check the certificate ID and try again.')
      }
    }, 2000)
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Certificate Verification
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Verify the authenticity of EduLearn certificates online. Enter your certificate ID to validate your achievement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Verification Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Verify Certificate
                </h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="certificateId" className="block text-sm font-medium text-gray-700 mb-2">
                      Certificate ID
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="certificateId"
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value)}
                        placeholder="Enter certificate ID (e.g., VALID123)"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center">
                        <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                        <p className="text-red-800">{error}</p>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleVerify}
                    disabled={isLoading}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Verifying...
                      </>
                    ) : (
                      <>
                        Verify Certificate
                        <Search className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Test Certificate IDs:</strong> Try "VALID123" or "TEST456" to see a sample verified certificate.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certificate Result */}
        {certificateData && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-8 border border-green-200">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Certificate Verified</h2>
                    <p className="text-gray-600">This certificate is authentic and valid</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <User className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                        <div>
                          <p className="text-sm text-gray-600">Student Name</p>
                          <p className="font-semibold text-gray-900">{certificateData.studentName}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <BookOpen className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                        <div>
                          <p className="text-sm text-gray-600">Course Name</p>
                          <p className="font-semibold text-gray-900">{certificateData.courseName}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                        <div>
                          <p className="text-sm text-gray-600">Completion Date</p>
                          <p className="font-semibold text-gray-900">{certificateData.completionDate}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                        <div>
                          <p className="text-sm text-gray-600">Grade</p>
                          <p className="font-semibold text-gray-900">{certificateData.grade}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                        <div>
                          <p className="text-sm text-gray-600">Duration</p>
                          <p className="font-semibold text-gray-900">{certificateData.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <User className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                        <div>
                          <p className="text-sm text-gray-600">Instructor</p>
                          <p className="font-semibold text-gray-900">{certificateData.instructor}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-200">
                    <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download Certificate
                    </button>
                    <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                      <Share2 className="w-5 h-5 mr-2" />
                      Share Certificate
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  )
}
