export interface Category {
  id: string
  title: string
  subtitle: string
  icon: string
  color: string
  courseCount: number
}

export const categories: Category[] = [
  {
    id: '1',
    title: 'KG–Class 5',
    subtitle: 'Foundation Learning',
    icon: '🎨',
    color: 'bg-pink-500',
    courseCount: 45
  },
  {
    id: '2',
    title: 'Class 6–8',
    subtitle: 'Junior Secondary',
    icon: '📚',
    color: 'bg-blue-500',
    courseCount: 38
  },
  {
    id: '3',
    title: 'SSC',
    subtitle: 'Secondary School',
    icon: '🎯',
    color: 'bg-green-500',
    courseCount: 52
  },
  {
    id: '4',
    title: 'HSC',
    subtitle: 'Higher Secondary',
    icon: '🚀',
    color: 'bg-purple-500',
    courseCount: 48
  },
  {
    id: '5',
    title: 'Admission Test',
    subtitle: 'University Preparation',
    icon: '🎓',
    color: 'bg-orange-500',
    courseCount: 35
  },
  {
    id: '6',
    title: 'Skills',
    subtitle: 'Professional Development',
    icon: '💼',
    color: 'bg-indigo-500',
    courseCount: 62
  }
]
