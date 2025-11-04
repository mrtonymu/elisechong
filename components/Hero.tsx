'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')
  const tImages = useTranslations('images')
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gray-50 pt-16 sm:pt-20 md:pt-0">
      <div className="container-custom w-full">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)] md:min-h-screen">
          {/* 左侧：文字内容 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 order-2 md:order-1"
          >
            {/* 半透明背景板 - 确保文字可读性 */}
            <div className="absolute inset-0 -mx-3 -my-4 sm:-mx-4 sm:-my-5 md:-mx-6 md:-my-8 bg-gradient-to-br from-white/95 via-white/90 to-white/95 rounded-2xl sm:rounded-3xl backdrop-blur-md shadow-xl sm:shadow-2xl -z-10"></div>
            <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
              {/* 主标题 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-900 mb-3 sm:mb-4 md:mb-5 leading-tight"
              >
                {t('title')}{' '}
                <span className="text-sage-700">{t('name')}</span>
              </motion.h1>

              {/* Founder Of / 创办人 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-4 sm:mb-5 md:mb-6"
              >
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-gold-500/20 to-gold-400/10 rounded-lg border border-gold-300/30">
                  <span className="text-gold-600 font-medium text-xs sm:text-sm md:text-base">{t('founderOf')}</span>
                  {t('brandNameEn') ? (
                    <>
                      <span className="text-gold-700 font-bold text-sm sm:text-base md:text-lg">{t('brandName')}</span>
                      <span className="text-gold-700 font-bold text-sm sm:text-base md:text-lg">{t('brandNameEn')}</span>
                    </>
                  ) : (
                    <span className="text-gold-700 font-bold text-sm sm:text-base md:text-lg">{t('brandName')}</span>
                  )}
                </div>
              </motion.div>

              {/* 定位标题 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-sage-600 mb-4 sm:mb-5 md:mb-6 lg:mb-7 font-medium tracking-wide"
              >
                {t('role')}
              </motion.p>

              {/* 核心标语 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-800 mb-5 sm:mb-6 md:mb-7 leading-relaxed font-light"
              >
                {t('slogan')}<br className="hidden md:block" />
                <span className="text-sage-700 font-semibold">{t('slogan2')}</span>
              </motion.p>

              {/* 分隔符 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mb-5 sm:mb-6 md:mb-8"
              >
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-sage-50 rounded-full border border-sage-200">
                  <span className="text-sage-700 text-sm sm:text-base md:text-lg font-medium">
                    {t('values')}
                  </span>
                </div>
              </motion.div>

              {/* 行动按钮 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-sage-600 to-sage-700 text-white px-6 py-3 sm:px-8 sm:py-3.5 md:py-4 rounded-lg font-semibold hover:from-sage-700 hover:to-sage-800 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <span>{t('cta')}</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#about"
                  className="border-2 border-gold-400/60 bg-transparent text-gold-700 px-6 py-3 sm:px-8 sm:py-3.5 md:py-4 rounded-lg font-semibold hover:bg-gold-50/30 hover:border-gold-500/80 active:scale-95 transition-all duration-300 text-center text-sm sm:text-base md:text-lg min-h-[44px] flex items-center justify-center"
                >
                  {t('learnMore')}
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* 右侧：照片 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl order-1 md:order-2"
          >
            <Image
              src="/images/hero-photo.jpg"
              alt={tImages('heroAlt')}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
          </motion.div>
        </div>
      </div>

      {/* 底部渐变过渡到下一区域 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
    </section>
  )
}
