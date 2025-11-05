'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function WillTrust() {
  const t = useTranslations('willTrust')
  
  const willPoints = [
    t('willPoint1'),
    t('willPoint2'),
    t('willPoint3'),
  ]

  const trustPoints = [
    t('trustPoint1'),
    t('trustPoint2'),
    t('trustPoint3'),
  ]

  const whyPlanPoints = [
    t('whyPlanPoint1'),
    t('whyPlanPoint2'),
    t('whyPlanPoint3'),
  ]

  return (
    <section id="will-trust" className="section-padding bg-gradient-to-br from-primary-900/5 via-sage-50/10 to-gold-50/5 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-200/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* 主标题 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 text-center mb-3 sm:mb-4">
            {t('title')} <span className="text-sage-700">{t('titleHighlight')}</span>{t('title2') && <> {t('title2')}</>}
          </h2>

          {/* 副标题 */}
          <div className="relative bg-gradient-to-r from-primary-100/50 via-sage-50/30 to-primary-100/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-3xl mx-auto border border-primary-200">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-700 text-center font-medium leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* 双栏布局：Will 和 Trust */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto mb-10 sm:mb-12 md:mb-16">
            {/* Will 卡片 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-gradient-to-br from-white via-sage-50/20 to-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-sage-200 hover:border-sage-300 hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {t('willIcon') || '💫'}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-900 mb-3 sm:mb-4">
                {t('willTitle')}
              </h3>
              <p className="text-sm sm:text-base text-primary-700 leading-relaxed mb-4 sm:mb-5">
                {t('willDescription')}
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {willPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-sage-600 mt-1 text-sm sm:text-base">✓</span>
                    <span className="text-xs sm:text-sm text-primary-600 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Trust 卡片 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group bg-gradient-to-br from-white via-sage-50/20 to-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-sage-200 hover:border-sage-300 hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">🛡️</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-900 mb-3 sm:mb-4">
                {t('trustTitle')}
              </h3>
              <p className="text-sm sm:text-base text-primary-700 leading-relaxed mb-4 sm:mb-5">
                {t('trustDescription')}
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {trustPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-sage-600 mt-1 text-sm sm:text-base">✓</span>
                    <span className="text-xs sm:text-sm text-primary-600 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* 为什么需要及早规划 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-800 mb-4 sm:mb-5 md:mb-6 text-center">
              {t('whyPlanTitle')}
            </h3>
            <div className="bg-gradient-to-br from-sage-50 via-white to-gold-50/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg border-2 border-sage-200">
              <ul className="space-y-3 sm:space-y-4">
                {whyPlanPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-sage-600 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs sm:text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-primary-700 leading-relaxed flex-1">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-sm sm:text-base md:text-lg text-primary-700 mb-5 sm:mb-6 max-w-2xl mx-auto px-4">
              {t('footer')}
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-700 to-primary-800 text-white px-6 py-3 sm:px-8 sm:py-3.5 md:py-4 rounded-lg font-semibold hover:from-primary-800 hover:to-primary-900 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base min-h-[44px]"
            >
              <span>{t('cta')}</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

