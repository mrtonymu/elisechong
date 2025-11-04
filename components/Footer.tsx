'use client'

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-primary-900 text-white py-6 sm:py-8 md:py-10">
      <div className="container-custom text-center space-y-1.5 sm:space-y-2">
        <p className="text-primary-300 text-xs sm:text-sm md:text-base">
          {t('copyright', { year: new Date().getFullYear() })}
        </p>
        {t('tagline') && (
          <p className="text-primary-400 text-xs sm:text-sm opacity-75 px-4">
            {t('tagline')}
          </p>
        )}
      </div>
    </footer>
  )
}

