'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, RefreshCw, CheckCircle } from 'lucide-react'

export default function OTPPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [error, setError] = useState('')
  const [canResend, setCanResend] = useState(false)
  const [resendTimer, setResendTimer] = useState(60)

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
    }

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement
      if (prevInput) {
        prevInput.focus()
      }
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    const newOtp = pastedData.split('').slice(0, 6)
    setOtp(newOtp)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false)
      const otpString = otp.join('')
      
      if (otpString === '123456') {
        setIsVerified(true)
      } else {
        setError('Invalid OTP. Please try again.')
        setOtp(['', '', '', '', '', '', ''])
      }
    }, 2000)
  }

  const handleResendOTP = () => {
    setCanResend(false)
    setResendTimer(60)
    
    // Simulate sending OTP
    console.log('Resending OTP...')
    
    // Start countdown timer
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setCanResend(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  if (isVerified) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Verification Successful!</h2>
          <p className="text-gray-600 mb-6">
            Your account has been verified successfully. You will be redirected to your dashboard shortly.
          </p>
          <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Continue to Dashboard
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Account</h1>
            <p className="text-gray-600">
              We've sent a 6-digit OTP to your email/phone. Enter it below to verify your account.
            </p>
          </div>

          {/* OTP Input */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  required
                />
              ))}
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || otp.join('').length !== 6}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Verifying...
                </>
              ) : (
                'Verify OTP'
              )}
            </button>
          </form>

          {/* Resend OTP */}
          <div className="text-center">
            <button
              onClick={handleResendOTP}
              disabled={!canResend}
              className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {canResend ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Resend OTP
                </>
              ) : (
                `Resend OTP in ${resendTimer}s`
              )}
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Need help?</strong> Check your spam folder or contact support if you don't receive the OTP.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
