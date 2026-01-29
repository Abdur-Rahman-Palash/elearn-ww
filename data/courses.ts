export interface Course {
  id: string
  title: string
  description: string
  level: string
  category: string
  badge: 'Popular' | 'Free' | 'New' | null
  thumbnail: string
  instructor: string
  duration: string
  lessons: number
  students: number
  rating: number
  price: number
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'HSC Physics 2026',
    description: 'Complete HSC Physics preparation with live classes and recorded videos',
    level: 'HSC',
    category: 'Academic',
    badge: 'Popular',
    thumbnail: '/physics-course.jpg',
    instructor: 'Dr. Ahmed Khan',
    duration: '120 hours',
    lessons: 240,
    students: 15420,
    rating: 4.8,
    price: 2999
  },
  {
    id: '2',
    title: 'SSC Mathematics 2026',
    description: 'Master SSC Mathematics with comprehensive problem-solving techniques',
    level: 'SSC',
    category: 'Academic',
    badge: 'New',
    thumbnail: '/math-course.jpg',
    instructor: 'Prof. Fatema Rahman',
    duration: '100 hours',
    lessons: 200,
    students: 12350,
    rating: 4.7,
    price: 2499
  },
  {
    id: '3',
    title: 'University Admission Chemistry',
    description: 'Complete chemistry preparation for university admission tests',
    level: 'Admission',
    category: 'Admission Test',
    badge: 'Popular',
    thumbnail: '/chemistry-course.jpg',
    instructor: 'Dr. Mohammad Ali',
    duration: '80 hours',
    lessons: 160,
    students: 8920,
    rating: 4.9,
    price: 3499
  },
  {
    id: '4',
    title: 'English Spoken Course',
    description: 'Improve your English speaking skills with interactive sessions',
    level: 'All Levels',
    category: 'Skills',
    badge: 'Free',
    thumbnail: '/english-course.jpg',
    instructor: 'Sarah Johnson',
    duration: '40 hours',
    lessons: 80,
    students: 25680,
    rating: 4.6,
    price: 0
  },
  {
    id: '5',
    title: 'Class 9 General Science',
    description: 'Complete science curriculum for class 9 students',
    level: 'Class 9',
    category: 'Academic',
    badge: null,
    thumbnail: '/science-course.jpg',
    instructor: 'Dr. Nazmul Islam',
    duration: '60 hours',
    lessons: 120,
    students: 9870,
    rating: 4.5,
    price: 1999
  },
  {
    id: '6',
    title: 'Web Development Bootcamp',
    description: 'Learn modern web development from scratch',
    level: 'Beginner',
    category: 'Skills',
    badge: 'New',
    thumbnail: '/webdev-course.jpg',
    instructor: 'Rahim Chowdhury',
    duration: '150 hours',
    lessons: 300,
    students: 5420,
    rating: 4.8,
    price: 4999
  }
]
