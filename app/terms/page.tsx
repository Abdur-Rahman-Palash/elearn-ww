'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'


export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-700 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Please read these terms and conditions carefully before using EduLearn
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using EduLearn, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2>2. Description of Service</h2>
                <p>
                  EduLearn is an online educational platform that provides courses, tutorials, and educational content 
                  to students in Bangladesh and worldwide. We reserve the right to modify, suspend, or discontinue the service 
                  at any time without notice.
                </p>

                <h2>3. User Accounts</h2>
                <p>
                  3.1. You must provide accurate and complete information when creating an account.<br/>
                  3.2. You are responsible for maintaining the confidentiality of your account credentials.<br/>
                  3.3. You must notify us immediately of any unauthorized use of your account.<br/>
                  3.4. You are responsible for all activities that occur under your account.
                </p>

                <h2>4. Course Enrollment and Payment</h2>
                <p>
                  4.1. Course fees are non-refundable unless specified otherwise.<br/>
                  4.2. We reserve the right to change course prices at any time.<br/>
                  4.3. Payment must be made through our authorized payment methods.<br/>
                  4.4. Course access is granted upon successful payment completion.
                </p>

                <h2>5. Intellectual Property</h2>
                <p>
                  5.1. All course content, materials, and intellectual property remain the property of EduLearn.<br/>
                  5.2. Users may not reproduce, distribute, or create derivative works of our content.<br/>
                  5.3. Certificates issued by EduLearn are for personal use only and cannot be altered or falsified.
                </p>

                <h2>6. User Conduct</h2>
                <p>
                  Users agree not to:<br/>
                  6.1. Use the service for any illegal or unauthorized purpose.<br/>
                  6.2. Share account credentials with others.<br/>
                  6.3. Upload malicious code or harmful content.<br/>
                  6.4. Harass, abuse, or harm other users.<br/>
                  6.5. Violate any applicable laws or regulations.
                </p>

                <h2>7. Privacy Policy</h2>
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
                  of the service, to understand our practices.
                </p>

                <h2>8. Refund Policy</h2>
                <p>
                  8.1. We offer a 30-day money-back guarantee for most courses.<br/>
                  8.2. Refunds are processed within 7-10 business days.<br/>
                  8.3. Certain courses may have different refund policies.<br/>
                  8.4. Refunds are not available for completed courses or after 30 days of enrollment.
                </p>

                <h2>9. Disclaimer of Warranties</h2>
                <p>
                  9.1. We do not guarantee that the service will be uninterrupted or error-free.<br/>
                  9.2. We are not responsible for any loss of data or information.<br/>
                  9.3. Course completion does not guarantee specific academic or career outcomes.
                </p>

                <h2>10. Limitation of Liability</h2>
                <p>
                  In no event shall EduLearn be liable for any indirect, incidental, special, consequential, 
                  or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                  or other intangible losses.
                </p>

                <h2>11. Termination</h2>
                <p>
                  11.1. We may terminate or suspend your account immediately, without prior notice or liability, 
                  for any reason whatsoever, including without limitation if you breach the terms.<br/>
                  11.2. Upon termination, your right to use the service will cease immediately.
                </p>

                <h2>12. Governing Law</h2>
                <p>
                  These terms shall be interpreted and governed by the laws of Bangladesh, without regard to 
                  its conflict of law provisions.
                </p>

                <h2>13. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. If we make material changes, 
                  we will notify you by email or by posting a notice on our site prior to the effective date 
                  of the changes.
                </p>

                <h2>14. Contact Information</h2>
                <p>
                  If you have any questions about these Terms and Conditions, please contact us at:<br/>
                  Email: support@edulearn.com<br/>
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
