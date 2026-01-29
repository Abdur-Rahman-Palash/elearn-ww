'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Star, Users, BookOpen, Award, Calendar, MapPin, Mail, Phone, ChevronRight, Filter, Search } from 'lucide-react'

export default function TeachersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('All')

const teachers = [
  {
    id: '1',
    name: 'Dr. Ahmed Khan',
    title: 'Senior Physics Instructor',
    bio: 'PhD in Physics from Dhaka University with 15+ years of teaching experience. Specialized in HSC Physics and University Admission preparation.',
    expertise: ['Physics', 'Mathematics', 'University Admission', 'Research Methodology'],
    experience: '15+ years',
    students: 50000,
    rating: 4.9,
    courses: 12,
    education: 'PhD in Physics, Dhaka University',
    image: '/teachers/ahmed.jpg',
    achievements: ['Published 20+ research papers', 'Guided 5000+ students to top universities', 'Awarded Best Teacher Award 2023'],
    languages: ['Bangla', 'English'],
    availability: 'Full-time'
  },
  {
    id: '2',
    name: 'Prof. Fatema Rahman',
    title: 'Chemistry Department Head',
    bio: 'Former professor at BUET with expertise in both theoretical and practical chemistry. Passionate about making chemistry accessible to all students.',
    expertise: ['Chemistry', 'Organic Chemistry', 'Physical Chemistry', 'Practical Chemistry'],
    experience: '12+ years',
    students: 45000,
    rating: 4.8,
    courses: 8,
    education: 'MSc in Chemistry, BUET',
    image: '/teachers/fatema.jpg',
    achievements: ['Developed innovative teaching methods', 'Published 15+ research papers', 'Mentored 3000+ students'],
    languages: ['Bangla', 'English'],
    availability: 'Full-time'
  },
  {
    id: '3',
    name: 'Dr. Mohammad Ali',
    title: 'Biology Expert',
    bio: 'Medical doctor and biology educator with deep understanding of biological sciences. Specialized in medical admission preparation.',
    expertise: ['Biology', 'Human Physiology', 'Genetics', 'Medical Admission', 'Botany'],
    experience: '18+ years',
    students: 60000,
    rating: 4.9,
    courses: 10,
    education: 'MBBS, Dhaka Medical College',
    image: '/teachers/mohammad.jpg',
    achievements: ['Helped 2000+ students get into medical colleges', 'Published 25+ research articles', 'Medical admission expert'],
    languages: ['Bangla', 'English'],
    availability: 'Full-time'
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    title: 'English Language Expert',
    bio: 'MA in English Literature with 10+ years of experience teaching English as a second language. Expert in IELTS preparation and communication skills.',
    expertise: ['English Language', 'IELTS', 'Communication Skills', 'Business English', 'Creative Writing'],
    experience: '10+ years',
    students: 35000,
    rating: 4.8,
    courses: 15,
    education: 'MA in English Literature, Dhaka University',
    image: '/teachers/sarah.jpg',
    achievements: ['IELTS 8.5 Band achiever', 'Trained 5000+ professionals', 'Published 3 books on English learning'],
    languages: ['English', 'Bangla', 'Hindi'],
    availability: 'Full-time'
  },
  {
    id: '5',
    name: 'Prof. Karim Rahman',
    title: 'Accounting & Finance Expert',
    bio: 'Chartered Accountant with 20+ years of experience in accounting education and financial consulting. Expert in business studies and finance.',
    expertise: ['Accounting', 'Finance', 'Business Studies', 'Taxation', 'Auditing'],
    experience: '20+ years',
    students: 70000,
    rating: 4.9,
    courses: 6,
    education: 'CA, MBA, IBA',
    image: '/teachers/karim.jpg',
    achievements: ['Trained 10000+ finance professionals', 'Published 10+ books', 'Corporate trainer for 50+ companies'],
    languages: ['Bangla', 'English'],
    availability: 'Part-time'
  },
  {
    id: '6',
    name: 'Dr. Salma Akter',
    title: 'Business Studies Specialist',
    bio: 'PhD in Business Administration with expertise in management and entrepreneurship. Passionate about developing business acumen in students.',
    expertise: ['Business Studies', 'Management', 'Entrepreneurship', 'Marketing', 'Economics'],
    experience: '10+ years',
    students: 25000,
    rating: 4.7,
    courses: 8,
    education: 'PhD in Business Administration, IBA',
    image: '/teachers/salma.jpg',
    achievements: ['Mentored 500+ entrepreneurs', 'Business consultant for SMEs', 'Published 8 research papers'],
    languages: ['Bangla', 'English'],
    availability: 'Full-time'
  },
  {
    id: '7',
    name: 'Lisa Anderson',
    title: 'Digital Marketing Expert',
    bio: 'Certified digital marketer with 8+ years of experience in SEO, social media marketing, and content strategy. Expert in practical digital skills.',
    expertise: ['Digital Marketing', 'SEO', 'Social Media', 'Content Marketing', 'Google Ads'],
    experience: '8+ years',
    students: 18000,
    rating: 4.7,
    courses: 12,
    education: 'MS in Digital Marketing',
    image: '/teachers/lisa.jpg',
    achievements: ['Managed 100+ marketing campaigns', 'SEO expert for 50+ websites', 'Trained 3000+ digital marketers'],
    languages: ['English', 'Bangla'],
    availability: 'Full-time'
  },
  {
    id: '8',
    name: 'John Smith',
    title: 'Career Development Coach',
    bio: 'Career development specialist with 12+ years of experience helping students and professionals achieve their career goals. Expert in freelancing and entrepreneurship.',
    expertise: ['Career Counseling', 'Freelancing', 'Entrepreneurship', 'Resume Building', 'Interview Skills'],
    experience: '12+ years',
    students: 30000,
    rating: 4.8,
    courses: 5,
    education: 'MBA in HRM',
    image: '/teachers/john.jpg',
    achievements: ['Helped 5000+ get dream jobs', 'Freelancing expert', 'Career coach for 20+ companies'],
    languages: ['English', 'Bangla'],
    availability: 'Part-time'
  }
]

const subjects = ['All', 'Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Bangla', 'Accounting', 'Business Studies', 'Computer Science', 'Digital Marketing']

function TeachersPage() {
  const [selectedSubject, setSelectedSubject] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSubject = selectedSubject === 'All' || 
      teacher.expertise.some(exp => exp.toLowerCase().includes(selectedSubject.toLowerCase()))
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.bio.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesSubject && matchesSearch
  })

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
              Our Expert Teachers
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Learn from Bangladesh's finest educators who are passionate about teaching and committed to student success
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Users className="w-6 h-6" />
                <span className="text-lg">50+ Expert Teachers</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Award className="w-6 h-6" />
                <span className="text-lg">Highly Qualified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <BookOpen className="w-6 h-6" />
                <span className="text-lg">300K+ Students Taught</span>
              </div>
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
                  placeholder="Search teachers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>

            {/* Subject Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500"
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredTeachers.length} teachers
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Teacher Profile */}
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {teacher.name}
                      </h3>
                      <p className="text-primary-600 font-medium mb-2">
                        {teacher.title}
                      </p>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {teacher.bio}
                      </p>
                    </div>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {teacher.expertise.slice(0, 4).map((exp) => (
                      <span key={exp} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {exp}
                      </span>
                    ))}
                    {teacher.expertise.length > 4 && (
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        +{teacher.expertise.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{teacher.students.toLocaleString()}</div>
                      <div className="text-gray-500">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{teacher.courses}</div>
                      <div className="text-gray-500">Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${
                            i < Math.floor(teacher.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`} />
                        ))}
                      </div>
                      <div className="text-gray-500">{teacher.rating} Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{teacher.experience}</div>
                      <div className="text-gray-500">Experience</div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{teacher.education}</span>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {teacher.languages.map((lang) => (
                      <span key={lang} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* Availability */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Availability:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      teacher.availability === 'Full-time' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {teacher.availability}
                    </span>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {teacher.achievements.slice(0, 2).map((achievement, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                          <Award className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Button */}
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Teacher
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Join Our Team of Expert Educators
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              We're always looking for passionate educators who want to make a difference in students' lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
                Apply to Teach
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors">
                Learn More
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
