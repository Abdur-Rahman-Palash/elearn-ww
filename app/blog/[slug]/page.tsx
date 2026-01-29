'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Calendar, Clock, User, ArrowRight, Heart, MessageCircle, Share2, BookOpen, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react'

const mockBlogPost = {
  id: '1',
  title: '10 Effective Study Techniques for HSC Students',
  excerpt: 'Discover proven study methods that can help HSC students improve their learning efficiency and achieve better results.',
  content: `
    <h2>Introduction</h2>
    <p>As an HSC student, you're facing one of the most challenging academic periods of your life. With the right study techniques, you can not only survive but thrive during this crucial time. In this comprehensive guide, we'll explore ten proven study methods that have helped thousands of students achieve academic excellence.</p>

    <h2>1. Active Recall</h2>
    <p>Active recall is one of the most effective study techniques. Instead of passively re-reading your notes, actively try to retrieve information from your memory. This strengthens neural pathways and improves long-term retention.</p>
    <p><strong>How to implement:</strong></p>
    <ul>
      <li>Close your books and try to recall what you've learned</li>
      <li>Use flashcards for key concepts</li>
      <li>Teach the material to someone else</li>
      <li>Take practice tests without looking at your notes</li>
    </ul>

    <h2>2. Spaced Repetition</h2>
    <p>Spaced repetition involves reviewing material at increasing intervals over time. This technique leverages the psychological spacing effect, which shows that we learn more effectively when we space out our study sessions.</p>
    <p><strong>Recommended schedule:</strong></p>
    <ul>
      <li>Review after 1 day</li>
      <li>Review after 3 days</li>
      <li>Review after 1 week</li>
      <li>Review after 1 month</li>
    </ul>

    <h2>3. The Pomodoro Technique</h2>
    <p>This time management method breaks study sessions into focused 25-minute intervals, separated by short breaks. This helps maintain concentration and prevents burnout.</p>
    <p><strong>Steps:</strong></p>
    <ol>
      <li>Choose a task to study</li>
      <li>Set a timer for 25 minutes</li>
      <li>Work without interruptions</li>
      <li>Take a 5-minute break</li>
      <li>Repeat 4 times, then take a longer break</li>
    </ol>

    <h2>4. Mind Mapping</h2>
    <p>Mind maps are visual representations of information that help you see connections between different concepts. They're particularly useful for visual learners and for understanding complex relationships.</p>

    <h2>5. The Feynman Technique</h2>
    <p>Named after physicist Richard Feynman, this technique involves explaining concepts in simple terms as if teaching them to a child. If you can't explain it simply, you don't understand it well enough.</p>

    <h2>Conclusion</h2>
    <p>Implementing these study techniques requires consistency and practice. Start with one or two methods that resonate with you, and gradually incorporate others into your study routine. Remember, the key is not just studying harder, but studying smarter.</p>
  `,
  category: 'Study Tips',
  author: {
    name: 'Dr. Ahmed Khan',
    bio: 'Senior Education Consultant with 15+ years of experience in academic guidance and student development.',
    avatar: '/author-avatar.jpg'
  },
  date: '2024-01-15',
  readTime: '8 min read',
  image: '/study-techniques.jpg',
  views: 5420,
  likes: 234,
  comments: 45,
  tags: ['HSC', 'Study Tips', 'Exam Preparation', 'Time Management'],
  relatedPosts: [
    {
      id: '2',
      title: 'Mastering Mathematics: Tips for SSC Students',
      image: '/math-tips.jpg'
    },
    {
      id: '3',
      title: 'Time Management for Students',
      image: '/time-management.jpg'
    }
  ]
}

const comments = [
  {
    id: '1',
    name: 'Tasnim Ahmed',
    avatar: '👩‍🎓',
    date: '2024-01-16',
    content: 'Excellent article! The Pomodoro technique has really helped me improve my focus during study sessions.',
    likes: 12
  },
  {
    id: '2',
    name: 'Rafiqul Islam',
    avatar: '👨‍🎓',
    date: '2024-01-16',
    content: 'I\'ve been using active recall for a month now, and the difference is remarkable. Thank you for sharing these techniques!',
    likes: 8
  },
  {
    id: '3',
    name: 'Fatema Khatun',
    avatar: '👩‍🎓',
    date: '2024-01-17',
    content: 'The Feynman technique is a game-changer. It really helps identify gaps in understanding.',
    likes: 15
  }
]

function BlogDetailsPage() {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(mockBlogPost.likes)
  const [commentText, setCommentText] = useState('')

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleShare = (platform: string) => {
    // Handle social media sharing
    console.log(`Sharing to ${platform}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Article Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                <a href="/blog" className="hover:text-primary-600">Blog</a>
                <span>/</span>
                <a href={`/blog/category/${mockBlogPost.category.toLowerCase()}`} className="hover:text-primary-600">
                  {mockBlogPost.category}
                </a>
                <span>/</span>
                <span className="text-gray-900">{mockBlogPost.title}</span>
              </nav>

              {/* Article Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {mockBlogPost.title}
              </h1>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center justify-between mb-6">
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{mockBlogPost.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{mockBlogPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{mockBlogPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{mockBlogPost.views.toLocaleString()} views</span>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                      isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    <span>{likeCount}</span>
                  </button>
                  <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <div className="relative group">
                    <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleShare('facebook')}
                          className="p-2 hover:bg-gray-100 rounded"
                        >
                          <Facebook className="w-4 h-4 text-blue-600" />
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="p-2 hover:bg-gray-100 rounded"
                        >
                          <Twitter className="w-4 h-4 text-blue-400" />
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="p-2 hover:bg-gray-100 rounded"
                        >
                          <Linkedin className="w-4 h-4 text-blue-700" />
                        </button>
                        <button
                          onClick={() => handleShare('link')}
                          className="p-2 hover:bg-gray-100 rounded"
                        >
                          <Link2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {mockBlogPost.tags.map((tag) => (
                  <span key={tag} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  {/* Featured Image */}
                  <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg mb-8 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white/50" />
                  </div>

                  {/* Article Content */}
                  <div 
                    className="prose prose-lg max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: mockBlogPost.content }}
                  />
                </motion.div>

                {/* Comments Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Comments ({comments.length})</h3>
                  
                  {/* Comment Form */}
                  <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Share your thoughts..."
                      className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-primary-500"
                      rows={4}
                    />
                    <button className="mt-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                      Post Comment
                    </button>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">{comment.avatar}</div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                                <p className="text-sm text-gray-500">{comment.date}</p>
                              </div>
                            </div>
                            <p className="text-gray-700 mb-3">{comment.content}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <button className="flex items-center space-x-1 hover:text-primary-600">
                                <Heart className="w-4 h-4" />
                                <span>{comment.likes}</span>
                              </button>
                              <button className="hover:text-primary-600">Reply</button>
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
                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-xl p-6 shadow-lg mb-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">About the Author</h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{mockBlogPost.author.name}</h4>
                      <p className="text-sm text-gray-600">Education Consultant</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{mockBlogPost.author.bio}</p>
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 rounded-lg transition-colors">
                    Follow Author
                  </button>
                </motion.div>

                {/* Related Posts */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {mockBlogPost.relatedPosts.map((post) => (
                      <div key={post.id} className="flex space-x-4 cursor-pointer group">
                        <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
