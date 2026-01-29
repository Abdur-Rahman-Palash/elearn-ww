import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduLearn - Best Online Learning Platform in Bangladesh',
  description: 'Learn from the best teachers in Bangladesh. Live classes, recorded videos, MCQ practice, and more for Class 6-12, Admission Tests, and Skills.',
  keywords: 'online learning, education, bangladesh, hsc, ssc, admission test, skills, live classes',
  authors: [{ name: 'EduLearn' }],
  openGraph: {
    title: 'EduLearn - Best Online Learning Platform',
    description: 'Learn from the best teachers in Bangladesh',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduLearn - Best Online Learning Platform',
    description: 'Learn from the best teachers in Bangladesh',
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
