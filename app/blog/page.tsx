'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Calendar, Clock, User, ArrowRight, Search, Filter, BookOpen, MessageCircle, Heart, Share2, Eye } from 'lucide-react'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

const blogPosts = [
  {
    id: '1',
    title: '10 Effective Study Techniques for HSC Students',
    excerpt: 'Discover proven study methods that can help HSC students improve their learning efficiency and achieve better results.',
    category: 'Study Tips',
    author: 'Dr. Ahmed Khan',
    date: '2024-01-15',
    readTime: '8 min read',
    image: '/study-techniques.jpg',
    views: 5420,
    likes: 234,
    comments: 45,
    tags: ['HSC', 'Study Tips', 'Exam Preparation']
  },
  {
    id: '2',
    title: 'Mastering Mathematics: Tips for SSC Students',
    excerpt: 'Essential strategies and techniques for SSC students to excel in mathematics and build strong problem-solving skills.',
    category: 'Mathematics',
    author: 'Prof. Fatema Rahman',
    date: '2024-01-12',
    readTime: '6 min read',
    image: '/math-tips.jpg',
    views: 3890,
    likes: 189,
    comments: 32,
    tags: ['SSC', 'Mathematics', 'Problem Solving']
  },
  {
    id: '3',
    title: 'The Ultimate Guide to University Admission Preparation',
    excerpt: 'Complete roadmap for university admission preparation including subject-wise strategies and time management tips.',
    category: 'Admission',
    author: 'Sarah Johnson',
    date: '2024-01-10',
    readTime: '12 min read',
    image: '/admission-guide.jpg',
    views: 7890,
    likes: 456,
    comments: 78,
    tags: ['University Admission', 'Medical', 'Engineering']
  },
  {
    id: '4',
    title: 'English Speaking Skills: From Beginner to Fluent',
    excerpt: 'Step-by-step guide to improve English speaking skills with practical exercises and real-world practice.',
    category: 'English',
    author: 'Michael Brown',
    date: '2024-01-08',
    readTime: '10 min read',
    image: '/english-speaking.jpg',
    views: 6230,
    likes: 312,
    comments: 56,
    tags: ['English', 'Speaking Skills', 'Communication']
  },
  {
    id: '5',
    title: 'Physics Made Easy: Understanding Complex Concepts',
    excerpt: 'Break down complex physics concepts into simple, understandable explanations with real-life examples.',
    category: 'Physics',
    author: 'Dr. Mohammad Ali',
    date: '2024-01-05',
    readTime: '9 min read',
    image: '/physics-concepts.jpg',
    views: 4560,
    likes: 267,
    comments: 41,
    tags: ['Physics', 'HSC', 'Concepts']
  },
  {
    id: '6',
    title: 'Time Management for Students: Balance Studies and Life',
    excerpt: 'Learn effective time management strategies to balance academic responsibilities with personal life.',
    category: 'Productivity',
    author: 'Emma Davis',
    date: '2024-01-03',
    readTime: '7 min read',
    image: '/time-management.jpg',
    views: 8120,
    likes: 523,
    comments: 89,
    tags: ['Time Management', 'Productivity', 'Student Life']
  },
  {
    id: '7',
    title: 'Chemistry Practical Guide: Lab Experiments Made Simple',
    excerpt: 'Complete guide to chemistry practical experiments with safety tips and detailed procedures.',
    category: 'Chemistry',
    author: 'Dr. Salma Akter',
    date: '2024-01-01',
    readTime: '11 min read',
    image: '/chemistry-practical.jpg',
    views: 3450,
    likes: 198,
    comments: 28,
    tags: ['Chemistry', 'Practical', 'Lab Work']
  },
  {
    id: '8',
    title: 'Digital Learning: How to Make the Most of Online Classes',
    excerpt: 'Tips and strategies for effective online learning and maximizing the benefits of digital education.',
    category: 'Technology',
    author: 'Lisa Anderson',
    date: '2023-12-28',
    readTime: '8 min read',
    image: '/digital-learning.jpg',
    views: 5670,
    likes: 289,
    comments: 47,
    tags: ['Online Learning', 'Technology', 'Digital Education']
  }
]

const categories = ['All', 'Study Tips', 'Mathematics', 'Physics', 'Chemistry', 'English', 'Admission', 'Productivity', 'Technology']

function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('recent')

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.views - a.views
        case 'likes':
          return b.likes - a.likes
        case 'comments':
          return b.comments - a.comments
        case 'recent':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
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
              Learning Resources Blog
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Expert insights, study tips, and educational resources to help you succeed in your academic journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <BookOpen className="w-5 h-5" />
                <span>200+ Articles</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <User className="w-5 h-5" />
                <span>Expert Authors</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MessageCircle className="w-5 h-5" />
                <span>Active Community</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="likes">Most Liked</option>
                <option value="comments">Most Discussed</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredPosts.length} articles
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  {/* Featured Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-300 to-gray-400">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-white/50" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Engagement Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Latest Articles
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get weekly updates on new educational resources and study tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
                Subscribe
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
