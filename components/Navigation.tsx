'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const t = useTranslations('nav')
  const tHero = useTranslations('hero')
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('about'), href: '#about' },
    { name: t('services'), href: '#services' },
    { name: t('willTrust'), href: '#will-trust' },
    { name: t('contact'), href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-black/30 backdrop-blur-md'
      }`}
    >
      <div className="container-custom py-2.5 sm:py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* 品牌标识 */}
          <div className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md transition-all duration-300 ${
            scrolled
              ? 'bg-gold-500/10 border border-gold-300/30'
              : 'bg-gold-500/20 border border-gold-300/40'
          }`}>
            <span className={`font-bold text-xs sm:text-sm transition-colors ${
              scrolled ? 'text-gold-700' : 'text-gold-300'
            }`}>{tHero('brand')}</span>
            <span className={`text-xs font-medium transition-colors hidden sm:inline ${
              scrolled ? 'text-gold-600' : 'text-gold-200'
            }`}>{tHero('brandName')}</span>
          </div>
          
          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors text-sm font-medium min-h-[44px] flex items-center ${
                  scrolled
                    ? 'text-primary-700 hover:text-primary-900'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {item.name}
              </a>
            ))}
            <LanguageSwitcher variant={scrolled ? 'light' : 'dark'} />
          </div>

          {/* 移动端菜单按钮和语言切换 */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher variant={scrolled ? 'light' : 'dark'} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
                scrolled
                  ? 'text-primary-700 hover:text-primary-900'
                  : 'text-white hover:text-gray-200'
              }`}
              aria-label={t('menu')}
            >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t transition-colors ${
                scrolled ? 'border-primary-200' : 'border-white/20'
              }`}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center py-2.5 sm:py-3 transition-colors text-sm sm:text-base font-medium min-h-[44px] ${
                    scrolled
                      ? 'text-primary-700 hover:text-primary-900'
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 sm:pt-3">
                <LanguageSwitcher />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
