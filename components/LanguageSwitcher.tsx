'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark'
}

export default function LanguageSwitcher({ variant = 'light' }: LanguageSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('language')
  const [isOpen, setIsOpen] = useState(false)

  const switchLocale = (newLocale: string) => {
    // 替换当前路径中的语言部分
    const segments = pathname.split('/')
    if (segments[1] === locale || segments[1] === 'zh' || segments[1] === 'en') {
      segments[1] = newLocale
    } else {
      segments.splice(1, 0, newLocale)
    }
    const newPath = segments.join('/')
    router.push(newPath)
    router.refresh()
    setIsOpen(false)
  }

  const isDark = variant === 'dark'

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-colors min-h-[44px] min-w-[44px] ${
          isOpen
            ? 'bg-sage-100 text-sage-700'
            : isDark
            ? 'text-white hover:text-gray-200 hover:bg-white/10'
            : 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
        }`}
        aria-label={t('switchLanguage') || 'Switch language'}
      >
        <span className="text-lg">🌐</span>
        <span className="text-sm font-medium hidden sm:inline">{locale === 'zh' ? t('zh') : t('en')}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-sage-200 z-20 overflow-hidden">
            <button
              onClick={() => switchLocale('zh')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-sage-50 transition-colors min-h-[44px] ${
                locale === 'zh' ? 'bg-sage-50 text-sage-700 font-medium' : 'text-primary-700'
              }`}
            >
              {t('zh')}
            </button>
            <button
              onClick={() => switchLocale('en')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-sage-50 transition-colors min-h-[44px] ${
                locale === 'en' ? 'bg-sage-50 text-sage-700 font-medium' : 'text-primary-700'
              }`}
            >
              {t('en')}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

