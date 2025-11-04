'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Trust() {
  const t = useTranslations('trust')
  const tImages = useTranslations('images')

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

          {/* 客户见证 - 双层展示：截图 + 数据卡片 */}
          <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 px-2 sm:px-0">
            {/* 标题区域 */}
            <div className="text-center">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-primary-800 mb-2 sm:mb-3">
                {t('testimonials')} · {t('testimonialsSubtitle')}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-primary-600 leading-relaxed max-w-2xl mx-auto px-2 sm:px-4">
                {t('testimonialsDescription')}
              </p>
            </div>

            {/* 上半区：美化后的截图展示 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* 半透明白色背景容器 */}
              <div className="bg-white/85 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-4 md:p-6 lg:p-8 shadow-lg border border-gold-200/50">
                {/* 截图标题 */}
                <div className="mb-2 sm:mb-3 md:mb-4 text-center">
                  <p className="text-xs sm:text-sm text-primary-600 font-medium">
                    {t('portfolioDate', { date: '17 Sep 2025' })}
                  </p>
                </div>
                {/* 截图图片 */}
                <div className="relative w-full rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
                  <Image
                    src="/images/testimonial-photo.jpeg"
                    alt={tImages('testimonialAlt') || t('testimonials')}
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto max-w-full max-h-full"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                    loading="lazy"
                    quality={90}
                  />
                </div>
              </div>
            </motion.div>

            {/* 下半区：品牌式数据展示卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-sage-50 via-white to-gold-50/30 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl border-2 border-sage-200 relative overflow-hidden">
                {/* 背景装饰 */}
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gold-200/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-sage-200/20 rounded-full blur-2xl"></div>
                
                {/* 数据展示卡片 */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  {/* 投资项目 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-md border border-sage-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <span className="text-xl sm:text-2xl">📈</span>
                      <p className="text-xs sm:text-sm text-primary-600 font-medium">{t('portfolioItem')}</p>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-primary-900 break-words">Kenanga Growth Fund</p>
                  </div>

                  {/* 投资资本 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-md border border-sage-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <span className="text-xl sm:text-2xl">💰</span>
                      <p className="text-xs sm:text-sm text-primary-600 font-medium">{t('portfolioCapital')}</p>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-primary-900">RM ***</p>
                  </div>

                  {/* 回报率 */}
                  <div className="bg-gradient-to-br from-gold-50 to-gold-100/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-md border-2 border-gold-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden sm:col-span-2 lg:col-span-1">
                    {/* 金色徽章 */}
                    <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-gold-600 text-lg sm:text-xl md:text-2xl">💎</div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <span className="text-xl sm:text-2xl">📊</span>
                      <p className="text-xs sm:text-sm text-gold-700 font-medium">{t('portfolioReturn')}</p>
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gold-700">
                      {t('portfolioReturnRate', { rate: '127.58' })}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
