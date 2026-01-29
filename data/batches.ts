export interface Batch {
  id: string
  name: string
  targetClass: string
  subjects: string[]
  startDate: string
  duration: string
  price: number
  badge: 'Live' | 'Upcoming' | 'Completed'
  category: 'Academic' | 'Admission Test' | 'Skills'
}

export const batches: Batch[] = [
  // Academic Batches
  {
    id: '1',
    name: 'HSC 26 Physics Batch',
    targetClass: 'HSC',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    startDate: 'January 2024',
    duration: '12 months',
    price: 8999,
    badge: 'Live',
    category: 'Academic'
  },
  {
    id: '2',
    name: 'SSC 26 Complete Batch',
    targetClass: 'SSC',
    subjects: ['All Subjects'],
    startDate: 'February 2024',
    duration: '10 months',
    price: 7999,
    badge: 'Live',
    category: 'Academic'
  },
  {
    id: '3',
    name: 'Class 9 Foundation Batch',
    targetClass: 'Class 9',
    subjects: ['Science', 'Math', 'English'],
    startDate: 'March 2024',
    duration: '8 months',
    price: 4999,
    badge: 'Upcoming',
    category: 'Academic'
  },
  // Admission Test Batches
  {
    id: '4',
    name: 'DU Admission Batch 2024',
    targetClass: 'University Admission',
    subjects: ['Physics', 'Chemistry', 'Math', 'Biology'],
    startDate: 'April 2024',
    duration: '6 months',
    price: 12999,
    badge: 'Live',
    category: 'Admission Test'
  },
  {
    id: '5',
    name: 'Medical Admission Batch',
    targetClass: 'Medical Admission',
    subjects: ['Biology', 'Chemistry', 'Physics'],
    startDate: 'May 2024',
    duration: '5 months',
    price: 11999,
    badge: 'Upcoming',
    category: 'Admission Test'
  },
  {
    id: '6',
    name: 'Engineering Admission Batch',
    targetClass: 'Engineering Admission',
    subjects: ['Mathematics', 'Physics', 'Chemistry'],
    startDate: 'June 2024',
    duration: '5 months',
    price: 10999,
    badge: 'Upcoming',
    category: 'Admission Test'
  },
  // Skills Batches
  {
    id: '7',
    name: 'Web Development Bootcamp',
    targetClass: 'All Levels',
    subjects: ['HTML', 'CSS', 'JavaScript', 'React'],
    startDate: 'January 2024',
    duration: '3 months',
    price: 9999,
    badge: 'Live',
    category: 'Skills'
  },
  {
    id: '8',
    name: 'Digital Marketing Course',
    targetClass: 'All Levels',
    subjects: ['SEO', 'Social Media', 'Content Marketing'],
    startDate: 'February 2024',
    duration: '2 months',
    price: 6999,
    badge: 'Live',
    category: 'Skills'
  },
  {
    id: '9',
    name: 'Graphic Design Masterclass',
    targetClass: 'All Levels',
    subjects: ['Photoshop', 'Illustrator', 'Figma'],
    startDate: 'March 2024',
    duration: '3 months',
    price: 7999,
    badge: 'Upcoming',
    category: 'Skills'
  }
]
