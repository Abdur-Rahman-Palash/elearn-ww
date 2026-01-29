export interface Testimonial {
  id: string
  name: string
  institution: string
  avatar: string
  feedback: string
  rating: number
  course: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Tasnim Ahmed',
    institution: 'Dhaka University',
    avatar: '/student1.jpg',
    feedback: 'EduLearn helped me crack the university admission test. The live classes and MCQ practice were invaluable!',
    rating: 5,
    course: 'University Admission Chemistry'
  },
  {
    id: '2',
    name: 'Rafiqul Islam',
    institution: 'BUET',
    avatar: '/student2.jpg',
    feedback: 'The quality of teaching is exceptional. I especially loved the problem-solving sessions in mathematics.',
    rating: 5,
    course: 'HSC Mathematics'
  },
  {
    id: '3',
    name: 'Shamima Akter',
    institution: 'Medical College',
    avatar: '/student3.jpg',
    feedback: 'The recorded videos helped me revise complex topics multiple times. Thank you EduLearn!',
    rating: 4,
    course: 'HSC Biology'
  },
  {
    id: '4',
    name: 'Karim Rahman',
    institution: 'Rajshahi University',
    avatar: '/student4.jpg',
    feedback: 'Best platform for admission preparation. The weekly tests kept me on track.',
    rating: 5,
    course: 'University Admission Physics'
  },
  {
    id: '5',
    name: 'Fatema Khatun',
    institution: 'Chittagong University',
    avatar: '/student5.jpg',
    feedback: 'The English course improved my communication skills significantly. Highly recommended!',
    rating: 4,
    course: 'English Spoken Course'
  }
]
