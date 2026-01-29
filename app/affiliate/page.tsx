'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { TrendingUp, Users, DollarSign, Target, Award, Clock, CheckCircle, ArrowRight, Star, BarChart, Gift } from 'lucide-react'

export default function AffiliatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    experience: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Affiliate application submitted:', formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

const affiliateStats = [
  {
    number: '৳50,000+',
    label: 'Total Commissions Paid',
    description: 'To our affiliate partners'
  },
  {
    number: '1000+',
    label: 'Active Affiliates',
    description: 'Earning with EduLearn'
  },
  {
    number: '20%',
    label: 'Average Commission',
    description: 'Per successful referral'
  },
  {
    number: '30 days',
    label: 'Cookie Duration',
    description: 'For tracking referrals'
  }
]

const commissionTiers = [
  {
    tier: 'Bronze',
    minSales: '0-50 sales',
    commission: '15%',
    benefits: ['Standard commission', 'Basic tracking', 'Email support']
  },
  {
    tier: 'Silver',
    minSales: '51-200 sales',
    commission: '20%',
    benefits: ['Increased commission', 'Advanced tracking', 'Priority support', 'Monthly reports']
  },
  {
    tier: 'Gold',
    minSales: '201-500 sales',
    commission: '25%',
    benefits: ['Premium commission', 'Real-time analytics', 'Dedicated manager', 'Custom links', 'Bonus incentives']
  },
  {
    tier: 'Platinum',
    minSales: '500+ sales',
    commission: '30%',
    benefits: ['Maximum commission', 'Full analytics suite', 'Personal manager', 'Exclusive offers', 'Revenue sharing']
  }
]

const howItWorks = [
  {
    step: 1,
    title: 'Sign Up',
    description: 'Create your free affiliate account in minutes',
    icon: '👤'
  },
  {
    step: 2,
    title: 'Get Links',
    description: 'Receive your unique affiliate links and marketing materials',
    icon: '🔗'
  },
  {
    step: 3,
    title: 'Promote',
    description: 'Share EduLearn with your audience through various channels',
    icon: '📢'
  },
  {
    step: 4,
    title: 'Earn',
    description: 'Receive commissions for every successful referral',
    icon: '💰'
  }
]

const marketingMaterials = [
  {
    type: 'Banners',
    description: 'Professional banners in various sizes for your website or blog',
    available: true
  },
  {
    type: 'Email Templates',
    description: 'Pre-written email templates for your email marketing campaigns',
    available: true
  },
  {
    type: 'Social Media Posts',
    description: 'Ready-to-use social media content for Facebook, Instagram, and Twitter',
    available: true
  },
  {
    type: 'Video Content',
    description: 'Promotional videos and testimonials to share with your audience',
    available: true
  },
  {
    type: 'Landing Pages',
    description: 'Custom landing pages with your affiliate tracking',
    available: true
  },
  {
    type: 'Product Reviews',
    description: 'Sample reviews and content ideas for educational products',
    available: true
  }
]

const testimonials = [
  {
    name: 'Rafiqul Islam',
    role: 'Educational Blogger',
    earnings: '৳45,000/month',
    testimonial: 'EduLearn\'s affiliate program has been a game-changer for my blog. The commissions are generous and the support is excellent.',
    avatar: '👨‍💼'
  },
  {
    name: 'Fatema Khatun',
    role: 'Social Media Influencer',
    earnings: '৳32,000/month',
    testimonial: 'I love promoting EduLearn because their courses genuinely help students. The affiliate dashboard makes tracking easy.',
    avatar: '👩‍💼'
  },
  {
    name: 'Ahmed Khan',
    role: 'YouTube Creator',
    earnings: '৳78,000/month',
    testimonial: 'As an educational content creator, EduLearn aligns perfectly with my audience. The 30-day cookie duration is fantastic!',
    avatar: '👨‍🎓'
  }
]

function AffiliatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    audience: '',
    experience: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you for your application! We\'ll review it and get back to you within 48 hours.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        audience: '',
        experience: ''
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EduLearn Affiliate Program
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Earn generous commissions by promoting quality education. Join thousands of affiliates earning with EduLearn.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <DollarSign className="w-6 h-6" />
                <span className="text-lg">Up to 30% Commission</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Users className="w-6 h-6" />
                <span className="text-lg">1000+ Affiliates</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <TrendingUp className="w-6 h-6" />
                <span className="text-lg">Growing Platform</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {affiliateStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start earning in four simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commission Tiers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Earn more as you grow with our tiered commission structure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commissionTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl p-6 shadow-lg border-2 ${
                  index === 3 ? 'border-primary-600' : 'border-gray-200'
                }`}
              >
                <div className="text-center mb-4">
                  <div className={`text-3xl font-bold mb-2 ${
                    index === 3 ? 'text-primary-600' : 'text-gray-900'
                  }`}>
                    {tier.tier}
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mb-1">{tier.commission}</div>
                  <div className="text-sm text-gray-600 mb-4">{tier.minSales}</div>
                </div>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Materials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Marketing Materials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to successfully promote EduLearn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingMaterials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{material.type}</h3>
                  <Gift className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    material.available ? 'text-green-600' : 'text-gray-400'
                  }`}>
                    {material.available ? 'Available' : 'Coming Soon'}
                  </span>
                  {material.available && (
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      Access
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our successful affiliate partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.testimonial}"</p>
                <div className="font-semibold text-gray-900 mb-1">{testimonial.name}</div>
                <div className="text-sm text-gray-600 mb-2">{testimonial.role}</div>
                <div className="text-lg font-bold text-primary-600">{testimonial.earnings}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Join Our Affiliate Program
              </h2>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-700">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                      placeholder="+880 1234-567890"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                      Website/Social Media
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                      placeholder="yourwebsite.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="audience" className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience *
                  </label>
                  <select
                    id="audience"
                    name="audience"
                    value={formData.audience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                  >
                    <option value="">Select your audience</option>
                    <option value="students">Students</option>
                    <option value="parents">Parents</option>
                    <option value="teachers">Teachers</option>
                    <option value="general">General Audience</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Marketing Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 resize-none"
                    placeholder="Tell us about your marketing experience..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Apply Now
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
}
