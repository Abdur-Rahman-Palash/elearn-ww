import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Refund Policy | EduLearn',
  description: 'Read EduLearn\'s refund policy to understand our refund process and eligibility criteria for course refunds.',
  keywords: 'refund policy, money back guarantee, course refund, edulearn refund',
}

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Refund Policy
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Our 30-day money-back guarantee ensures your satisfaction with our courses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Refund Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="prose prose-lg max-w-none">
                <h2>30-Day Money-Back Guarantee</h2>
                <p>
                  At EduLearn, we stand behind the quality of our courses. If you're not completely satisfied 
                  with your purchase, you can request a full refund within 30 days of enrollment.
                </p>

                <h2>Refund Eligibility</h2>
                <p>You are eligible for a refund if:</p>
                <ul>
                  <li>You request a refund within 30 days of enrollment</li>
                  <li>You have completed less than 50% of the course content</li>
                  <li>You have not downloaded the certificate of completion</li>
                  <li>Your account is in good standing with no policy violations</li>
                </ul>

                <h2>Non-Refundable Items</h2>
                <p>The following items are non-refundable:</p>
                <ul>
                  <li>Certificates that have been issued</li>
                  <li>Courses completed beyond 50% progress</li>
                  <li>Requests made after 30 days of enrollment</li>
                  <li>Custom or personalized course packages</li>
                </ul>

                <h2>How to Request a Refund</h2>
                <p>To request a refund:</p>
                <ol>
                  <li>Contact our support team at support@edulearn.com</li>
                  <li>Provide your order number and reason for refund</li>
                  <li>Allow 7-10 business days for processing</li>
                  <li>Refunds will be issued to your original payment method</li>
                </ol>

                <h2>Refund Process</h2>
                <ul>
                  <li>Refund requests are typically processed within 7-10 business days</li>
                  <li>Bank transfers may take additional time to appear in your account</li>
                  <li>You will receive email confirmation when your refund is processed</li>
                  <li>Your course access will be revoked upon refund approval</li>
                </ul>

                <h2>Exceptions</h2>
                <p>
                  We may consider exceptions to our refund policy in cases of technical issues, 
                  course content not matching description, or other extenuating circumstances.
                </p>

                <h2>Course Transfers</h2>
                <p>
                  Instead of a refund, you may request to transfer your enrollment to another course 
                  of equal or lesser value within the 30-day period.
                </p>

                <h2>Payment Gateway Fees</h2>
                <p>
                  Payment gateway fees are non-refundable and will be deducted from your refund amount 
                  if applicable.
                </p>

                <h2>Disputes</h2>
                <p>
                  If you believe your refund request was unfairly denied, please contact our support team 
                  with additional information for review.
                </p>

                <h2>Policy Changes</h2>
                <p>
                  We reserve the right to modify this refund policy at any time. Changes will be effective 
                  immediately upon posting on our website.
                </p>

                <h2>Contact Information</h2>
                <p>
                  For refund-related questions, please contact us:<br/>
                  Email: refunds@edulearn.com<br/>
                  Phone: +880 1234-567890
                </p>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Last updated: January 2024
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
