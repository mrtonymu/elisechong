'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function Services() {
  const t = useTranslations('services')
  
  const services = [
    {
      title: t('service1.title'),
      titleHighlight: t('service1.titleHighlight'),
      title2: t('service1.title2'),
      description: t('service1.description'),
      scenario: t('service1.scenario'),
      icon: '🏠',
    },
    {
      title: t('service2.title'),
      titleHighlight: t('service2.titleHighlight'),
      title2: t('service2.title2'),
      description: t('service2.description'),
      scenario: t('service2.scenario'),
      icon: '📈',
    },
    {
      title: t('service3.title'),
      titleHighlight: t('service3.titleHighlight'),
      title2: t('service3.title2'),
      description: t('service3.description'),
      scenario: t('service3.scenario'),
      icon: '🌅',
    },
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-white via-sage-50/10 to-gray-50 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sage-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 text-center mb-3 sm:mb-4">
            {t('title')}<span className="text-sage-700">{t('titleHighlight')}</span>{t('title2')}
          </h2>
          <div className="relative bg-gradient-to-r from-sage-100/50 via-sage-50/30 to-sage-100/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-3xl mx-auto border border-sage-200">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-700 text-center font-medium leading-relaxed">
              {t('subtitle')}{t('subtitleHighlight') && <span className="text-sage-700 font-semibold">{t('subtitleHighlight')}</span>}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-gradient-to-br from-white via-sage-50/20 to-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-sage-200 hover:border-sage-300 hover:-translate-y-1"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-900 mb-2 sm:mb-3 md:mb-4">
                  {service.title}
                  {service.titleHighlight && <span className="text-sage-700"> {service.titleHighlight}</span>}
                  {service.title2 && <> {service.title2}</>}
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed mb-2 sm:mb-3">
                  {service.description}
                </p>
                <blockquote className="text-xs sm:text-sm text-primary-600 italic leading-relaxed border-l-[3px] sm:border-l-4 border-sage-400 pl-3 sm:pl-4 my-3 sm:my-4">
                  {service.scenario}
                </blockquote>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 sm:mt-14 md:mt-16 text-center"
          >
            <p className="text-sm sm:text-base md:text-lg text-primary-700 mb-5 sm:mb-6 max-w-2xl mx-auto px-4">
              {t('footer')}
              {t('footer2') && (
                <>
                  <br />
                  {t('footer2')}
                </>
              )}
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-sage-600 to-sage-700 text-white px-6 py-3 sm:px-8 sm:py-3.5 md:py-4 rounded-lg font-semibold hover:from-sage-700 hover:to-sage-800 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base min-h-[44px]"
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
