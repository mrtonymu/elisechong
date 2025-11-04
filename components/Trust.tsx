'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function Trust() {
  const t = useTranslations('trust')
  
  const testimonials = [
    {
      text: t('testimonial1'),
      author: t('testimonial1Author'),
    },
    {
      text: t('testimonial2'),
      author: t('testimonial2Author'),
    },
    {
      text: t('testimonial3'),
      author: t('testimonial3Author'),
    },
  ]

  const certifications = [
    { title: t('cert1'), desc: t('cert1Desc') },
    { title: t('cert2'), desc: t('cert2Desc') },
    { title: t('cert3'), desc: t('cert3Desc') },
  ].filter(cert => cert.title)

  return (
    <section id="trust" className="section-padding bg-gradient-to-br from-gray-50 via-white to-sage-50/20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            {t('title')}{' '}<span className="text-sage-700">{t('titleHighlight')}</span>
            {t('title2') && <> {t('title2')}</>}
          </h2>

          {/* 专业认证 */}
          <div className="max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-800 mb-3 sm:mb-4 md:mb-5 text-center">
              {t('qualifications')}
            </h3>
            {t('qualificationsIntro') && (
              <p className="text-sm sm:text-base md:text-lg text-primary-700 text-center mb-5 sm:mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto px-4">
                {t('qualificationsIntro')}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-md text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-sage-200 hover:border-sage-300"
                >
                  <p className="text-sm sm:text-base text-primary-700 font-semibold mb-1">{cert.title}</p>
                  {cert.desc && <p className="text-xs sm:text-sm text-primary-600">{cert.desc}</p>}
                </motion.div>
              ))}
            </div>
          </div>

          {/* 服务理念 */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-14 md:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-800 mb-4 sm:mb-5 md:mb-6 text-center">
              {t('philosophy')}
            </h3>
            <div className="bg-gradient-to-br from-white to-sage-50/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-lg border-2 border-sage-300">
              <div className="space-y-3 sm:space-y-4 md:space-y-5 text-base sm:text-lg md:text-xl lg:text-2xl text-primary-800 leading-relaxed text-center font-medium">
                <p>{t('philosophyText1')}</p>
                <p>{t('philosophyText2')}</p>
                <p>{t('philosophyText3')}</p>
              </div>
            </div>
          </div>

          {/* 客户见证 */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-800 mb-5 sm:mb-6 md:mb-8 text-center">
              {t('testimonials')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-sage-200 hover:border-sage-300"
                >
                  <p className="text-sm sm:text-base text-primary-700 mb-3 sm:mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="text-xs sm:text-sm text-primary-600 font-medium">
                    — {testimonial.author}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
