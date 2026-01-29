'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Award, Target, Globe, Heart, CheckCircle, ArrowRight, Star, TrendingUp } from 'lucide-react'

const teamMembers = [
  {
    name: 'Dr. Ahmed Khan',
    role: 'CEO & Founder',
    bio: 'PhD in Education from Dhaka University with 15+ years of experience in educational technology and curriculum development.',
    image: '/team/ahmed.jpg',
    expertise: ['Educational Leadership', 'Curriculum Design', 'EdTech Innovation']
  },
  {
    name: 'Prof. Fatema Rahman',
    role: 'Academic Director',
    bio: 'Former professor at BUET with expertise in STEM education and curriculum development for K-12 students.',
    image: '/team/fatema.jpg',
    expertise: ['STEM Education', 'Curriculum Development', 'Teacher Training']
  },
  {
    name: 'Dr. Mohammad Ali',
    role: 'Head of Content',
    bio: 'PhD in Computer Science with 10+ years of experience in creating educational content and digital learning platforms.',
    image: '/team/mohammad.jpg',
    expertise: ['Content Strategy', 'Digital Learning', 'Educational Technology']
  },
  {
    name: 'Sarah Johnson',
    role: 'English Language Expert',
    bio: 'MA in English Literature with 8+ years of experience in teaching English and developing language learning programs.',
    image: '/team/sarah.jpg',
    expertise: ['English Teaching', 'Language Assessment', 'Curriculum Design']
  }
]

const stats = [
  { number: '2.5M+', label: 'Active Students', description: 'Learning with EduLearn' },
  { number: '500+', label: 'Expert Teachers', description: 'Across all subjects' },
  { number: '95%', label: 'Success Rate', description: 'Students achieving goals' },
  { number: '4.8', label: 'Average Rating', description: 'From satisfied students' }
]

const values = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from content quality to student support.'
  },
  {
    icon: '🤝',
    title: 'Accessibility',
    description: 'Quality education should be accessible to everyone, regardless of their background or location.'
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We embrace technology and innovation to make learning more effective and engaging.'
  },
  {
    icon: '❤️',
    title: 'Student Success',
    description: 'Our success is measured by the success of our students in achieving their goals.'
  }
]

const milestones = [
  {
    year: '2020',
    title: 'EduLearn Founded',
    description: 'Started with a vision to make quality education accessible to all.',
    icon: '🚀'
  },
  {
    year: '2021',
    title: '100K Students',
    description: 'Reached our first major milestone of 100,000 active students.',
    icon: '👥'
  },
  {
    year: '2022',
    title: 'Mobile App Launch',
    description: 'Launched our mobile app to make learning more accessible.',
    icon: '📱'
  },
  {
    year: '2023',
    title: '2.5M+ Students',
    description: 'Reached over 2.5 million students across Bangladesh.',
    icon: '🌟'
  }
]

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              About EduLearn
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Empowering students across Bangladesh with quality education and innovative learning solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Target className="w-5 h-5" />
                <span>Our Mission</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5" />
                <span>Our Vision</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To make quality education accessible to every student in Bangladesh through innovative technology and expert teaching.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Content</h3>
                    <p className="text-gray-600">Expert teachers and comprehensive curriculum</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Affordable Learning</h3>
                    <p className="text-gray-600">Making education accessible to all</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Student Success</h3>
                    <p className="text-gray-600">Focused on helping students achieve their goals</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To become the leading educational platform in Bangladesh, empowering millions of students to achieve their dreams.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Digital First</h3>
                    <p className="text-gray-600">Leveraging technology for better learning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Nationwide Reach</h3>
                    <p className="text-gray-600">Connecting students across Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Continuous Innovation</h3>
                    <p className="text-gray-600">Always improving our teaching methods</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at EduLearn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate educators and experts behind EduLearn's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-sm text-primary-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to transform education in Bangladesh
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl">
                    {milestone.icon}
                  </div>
                  <div className={`ml-8 ${index % 2 === 0 ? 'ml-8 mr-8' : 'mr-8 ml-8'}`}>
                    <div className="text-2xl font-bold text-primary-600 mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Be part of our journey to transform education in Bangladesh
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/courses'}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Start Learning
              </button>
              <button 
                onClick={() => window.location.href = '/career'}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Join Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
