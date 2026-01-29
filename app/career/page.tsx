'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Briefcase, Users, MapPin, Mail, Phone, Clock, ArrowRight, Search, Filter, TrendingUp, Award, Target, Heart } from 'lucide-react'

export default function CareerPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const jobCategories = [
    {
      id: 'teaching',
      title: 'Teaching & Education',
      icon: '👨‍🏫',
      description: 'Join our team of expert educators',
      color: 'bg-blue-500'
    },
    {
      id: 'technology',
      title: 'Technology',
      icon: '💻',
      description: 'Build the future of education technology',
      color: 'bg-green-500'
    },
    {
      id: 'operations',
      title: 'Operations',
      icon: '⚙️',
      description: 'Help us run our platform smoothly',
      color: 'bg-purple-500'
    },
    {
      id: 'marketing',
      title: 'Marketing',
      icon: '📢',
      description: 'Spread the word about quality education',
      color: 'bg-orange-500'
    }
  ]

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'We offer market-competitive salaries and regular performance reviews.'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs for all employees.'
    },
    {
      title: 'Professional Development',
      description: 'Regular training, workshops, and opportunities for skill enhancement.'
    },
    {
      title: 'Flexible Work Options',
      description: 'Remote work options and flexible scheduling for eligible roles.'
    },
    {
      title: 'Great Work Environment',
      description: 'Modern office space with collaborative areas and recreation facilities.'
    }
  ]

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Be part of our mission to transform education in Bangladesh. We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
                  View Open Positions
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Job Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore opportunities across different departments and find the perfect role for your skills and passion.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {jobCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-2xl mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer competitive benefits and a supportive work environment to help you grow both personally and professionally.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Take the first step towards a rewarding career in education.
              </p>
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
                Apply Now
              </button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
