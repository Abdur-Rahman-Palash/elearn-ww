'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Globe, User, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('EN')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    {
      title: 'Class 6–12',
      items: ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'SSC', 'HSC']
    },
    {
      title: 'Skills',
      items: ['Web Development', 'Digital Marketing', 'Graphic Design', 'Programming', 'Data Science']
    },
    {
      title: 'Admission Test',
      items: ['University Admission', 'Medical Admission', 'Engineering Admission', 'Agriculture Admission']
    },
    {
      title: 'English Center',
      items: ['Spoken English', 'IELTS', 'Business English', 'English Grammar']
    }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xs shadow-lg' 
        : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div 
              onClick={() => window.location.href = '/'}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl text-gray-900">EduLearn</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="py-2">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        onClick={() => {
                          // Handle Class 6-12 navigation
                          if (item.title === 'Class 6–12') {
                            if (subItem === 'SSC') {
                              window.location.href = '/programs/ssc'
                            } else if (subItem === 'HSC') {
                              window.location.href = '/programs/hsc'
                            } else if (subItem === 'Class 6' || subItem === 'Class 7' || subItem === 'Class 8' || subItem === 'Class 9' || subItem === 'Class 10') {
                              window.location.href = '/academics'
                            } else {
                              window.location.href = '/academics'
                            }
                          }
                          // Handle Skills navigation - all go to skills page
                          else if (item.title === 'Skills') {
                            window.location.href = '/skills'
                          }
                          // Handle Admission Test navigation - all go to admission-test page
                          else if (item.title === 'Admission Test') {
                            window.location.href = '/admission-test'
                          }
                          // Handle English Center navigation - all go to english page
                          else if (item.title === 'English Center') {
                            window.location.href = '/english'
                          }
                        }}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors cursor-pointer"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLang}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-lg shadow-xl">
                  <div className="py-2">
                    <button
                      onClick={() => {
                        setCurrentLang('EN')
                        setIsLangDropdownOpen(false)
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      EN
                    </button>
                    <button
                      onClick={() => {
                        setCurrentLang('BN')
                        setIsLangDropdownOpen(false)
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      BN
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Login Button */}
            <button 
              onClick={() => window.location.href = '/auth/login'}
              className="hidden md:flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2">
                    <span>{item.title}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="pl-4 mt-2 space-y-1">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        onClick={() => {
                          // Handle Class 6-12 navigation
                          if (item.title === 'Class 6–12') {
                            if (subItem === 'SSC') {
                              window.location.href = '/programs/ssc'
                            } else if (subItem === 'HSC') {
                              window.location.href = '/programs/hsc'
                            } else if (subItem === 'Class 6' || subItem === 'Class 7' || subItem === 'Class 8' || subItem === 'Class 9' || subItem === 'Class 10') {
                              window.location.href = '/academics'
                            } else {
                              window.location.href = '/academics'
                            }
                          }
                          // Handle Skills navigation - all go to skills page
                          else if (item.title === 'Skills') {
                            window.location.href = '/skills'
                          }
                          // Handle Admission Test navigation - all go to admission-test page
                          else if (item.title === 'Admission Test') {
                            window.location.href = '/admission-test'
                          }
                          // Handle English Center navigation - all go to english page
                          else if (item.title === 'English Center') {
                            window.location.href = '/english'
                          }
                        }}
                        className="block py-1 text-gray-600 hover:text-primary-600 text-sm cursor-pointer"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              
              <button 
                onClick={() => window.location.href = '/auth/login'}
                className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors w-full"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
