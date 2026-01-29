'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'


export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
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
                <h2>Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  enroll in courses, or contact us for support.
                </p>
                
                <h3>Personal Information</h3>
                <ul>
                  <li>Name and contact information</li>
                  <li>Payment information</li>
                  <li>Educational background</li>
                  <li>Communication preferences</li>
                </ul>

                <h3>Usage Information</h3>
                <ul>
                  <li>Pages visited and time spent</li>
                  <li>Course progress and completion</li>
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and maintain our service</li>
                  <li>Process transactions and send related information</li>
                  <li>Communicate with you about your account</li>
                  <li>Improve and personalize our service</li>
                  <li>Analyze usage patterns and optimize our platform</li>
                  <li>Prevent fraud and abuse</li>
                </ul>

                <h2>Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy:
                </p>
                
                <h3>Service Providers</h3>
                <p>
                  We may share information with third-party service providers who perform services on our behalf, 
                  such as payment processing, data analysis, and email delivery.
                </p>

                <h3>Legal Requirements</h3>
                <p>
                  We may disclose your information if required by law or in good faith belief that such action 
                  is necessary to comply with legal obligations.
                </p>

                <h2>Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2>Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to provide our services 
                  and as required by law. You may request deletion of your account and personal data at any time.
                </p>

                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access and update your personal information</li>
                  <li>Delete your account and personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Object to processing of your information</li>
                </ul>

                <h2>Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our platform. 
                  You can control cookie settings through your browser preferences.
                </p>

                <h2>Children's Privacy</h2>
                <p>
                  Our service is not intended for children under 13. We do not knowingly collect personal 
                  information from children under 13.
                </p>

                <h2>International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place for such transfers.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page and updating the "Last updated" date.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:<br/>
                  Email: privacy@edulearn.com<br/>
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
