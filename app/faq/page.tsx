'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ChevronDown, ChevronRight, HelpCircle, BookOpen, Users, CreditCard, Award, Clock, CheckCircle, Search, Filter, MessageCircle } from 'lucide-react'

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedItems, setExpandedItems] = useState<number[]>([])

const faqData = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is EduLearn?',
        answer: 'EduLearn is Bangladesh\'s leading online learning platform offering comprehensive educational programs for students from Class 6 to university level. We provide live classes, recorded videos, practice materials, and expert guidance to help students achieve their academic goals.'
      },
      {
        question: 'How do I get started with EduLearn?',
        answer: 'Getting started is easy! Simply create a free account, browse our course catalog, and enroll in the courses that match your learning needs. You can start with our free classes to experience our teaching method before purchasing premium courses.'
      },
      {
        question: 'Is EduLearn available nationwide?',
        answer: 'Yes! EduLearn is accessible to students across Bangladesh. Our online platform can be accessed from anywhere with an internet connection, and we offer both Bangla and English language options.'
      }
    ]
  },
  {
    category: 'Courses & Enrollment',
    questions: [
      {
        question: 'How do I enroll in a course?',
        answer: 'To enroll in a course: 1) Create or log into your EduLearn account, 2) Browse or search for your desired course, 3) Click on the course and select "Enroll Now", 4) Choose your payment method and complete the payment, 5) Start learning immediately!'
      },
      {
        question: 'Can I access courses after enrollment?',
        answer: 'Yes! Once enrolled, you get lifetime access to the course content including recorded videos, study materials, and practice exercises. You can learn at your own pace from any device.'
      },
      {
        question: 'Are there any prerequisites for courses?',
        answer: 'Prerequisites vary by course level. Most beginner courses have no prerequisites, while advanced courses may require basic knowledge of the subject. Check the course description for specific requirements.'
      },
      {
        question: 'Can I switch between courses?',
        answer: 'Yes, you can enroll in multiple courses and switch between them. Your progress is saved for each course individually.'
      }
    ]
  },
  {
    category: 'Payment & Pricing',
    questions: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept multiple payment methods: bKash, Nagad, Rocket, all major credit/debit cards, and bank transfers. All transactions are secure and encrypted.'
      },
      {
        question: 'Do you offer installment payments?',
        answer: 'Yes, we offer installment plans for selected premium courses. You can check the payment options on the course enrollment page.'
      },
      {
        question: 'Is there a refund policy?',
        answer: 'Yes, we offer a 30-day money-back guarantee for most courses. If you\'re not satisfied with your purchase, you can request a full refund within 30 days of enrollment.'
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No, we believe in transparent pricing. The price you see is the price you pay. There are no hidden charges or additional fees.'
      }
    ]
  },
  {
    category: 'Technical Issues',
    questions: [
      {
        question: 'What devices can I use to access courses?',
        answer: 'You can access EduLearn on any device with internet connection: desktop computers, laptops, tablets, and smartphones. We also have a mobile app available for iOS and Android.'
      },
      {
        question: 'What internet speed do I need?',
        answer: 'For the best experience, we recommend a minimum internet speed of 2 Mbps for video playback. However, our platform is optimized to work well even on slower connections.'
      },
      {
        question: 'Can I download videos for offline viewing?',
        answer: 'Yes, with our mobile app, you can download videos for offline viewing. This feature is available for most premium courses.'
      },
      {
        question: 'What if I forget my password?',
        answer: 'No problem! Click on "Forgot Password" on the login page, enter your email address, and we\'ll send you instructions to reset your password.'
      }
    ]
  },
  {
    category: 'Academic Support',
    questions: [
      {
        question: 'How do I contact my teacher?',
        answer: 'You can contact your teacher through the course discussion board, live chat during classes, or by using the "Ask Teacher" feature. Teachers typically respond within 24 hours.'
      },
      {
        question: 'Are there live classes available?',
        answer: 'Yes, most courses include live interactive classes with expert teachers. You can attend these sessions in real-time and ask questions directly.'
      },
      {
        question: 'How do I get my certificate?',
        answer: 'Certificates are automatically generated upon successful completion of a course. You can download them from your dashboard and share them on LinkedIn or other platforms.'
      },
      {
        question: 'Can I get academic guidance?',
        answer: 'Yes, we provide academic counseling and career guidance through our expert mentors. You can book one-on-one sessions through our platform.'
      }
    ]
  }
]

function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const filteredFAQs = faqData
    .filter(category => selectedCategory === 'All' || category.category === selectedCategory)
    .map(category => ({
      ...category,
      questions: category.questions.filter(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(category => category.questions.length > 0)

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Find quick answers to common questions about EduLearn. Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors flex items-center">
                <HelpCircle className="w-5 h-5 mr-2" />
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500"
              >
                <option value="All">All Categories</option>
                {faqData.map((category) => (
                  <option key={category.category} value={category.category}>
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  {category.category === 'General' && <BookOpen className="w-6 h-6 mr-3 text-primary-600" />}
                  {category.category === 'Courses & Enrollment' && <BookOpen className="w-6 h-6 mr-3 text-primary-600" />}
                  {category.category === 'Payment & Pricing' && <CreditCard className="w-6 h-6 mr-3 text-primary-600" />}
                  {category.category === 'Technical Issues' && <Clock className="w-6 h-6 mr-3 text-primary-600" />}
                  {category.category === 'Academic Support' && <Award className="w-6 h-6 mr-3 text-primary-600" />}
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const isExpanded = expandedItems.includes(categoryIndex * 100 + index)
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                      >
                        <button
                          onClick={() => toggleExpanded(categoryIndex * 100 + index)}
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center space-x-3 text-left">
                            <HelpCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                            <span className="font-medium text-gray-900">{faq.question}</span>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {isExpanded && (
                          <div className="px-6 pb-4 border-t border-gray-200">
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                            
                            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                              <span>Was this helpful?</span>
                              <div className="flex space-x-4">
                                <button className="text-green-600 hover:text-green-700">
                                  Yes
                                </button>
                                <button className="text-gray-600 hover:text-gray-700">
                                  No
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you with any questions or concerns you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Browse Help Articles
              </button>
              <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
}
