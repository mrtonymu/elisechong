'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('about')
  const tHero = useTranslations('hero')
  const tImages = useTranslations('images')
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* 大标题 + 分隔符样式 */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            {/* 品牌标识 - 作为主标题 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 sm:mb-6 md:mb-8"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 lg:py-5 bg-gradient-to-r from-gold-500/30 via-gold-400/25 to-gold-500/30 rounded-lg sm:rounded-xl border-2 border-gold-400/50 shadow-lg sm:shadow-xl">
                <span className="text-gold-700 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{tHero('brand')}</span>
                <span className="text-gold-700 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">{tHero('brandName')}</span>
              </div>
            </motion.div>
            {/* 分隔符 */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
              <div className="h-px w-12 sm:w-16 md:w-24 bg-sage-600"></div>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-sage-700">
                {t('divider')}
              </span>
              <div className="h-px w-12 sm:w-16 md:w-24 bg-sage-600"></div>
            </div>
            {/* 短段落介绍 */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-700 leading-relaxed max-w-3xl mx-auto px-4">
              {t('intro')}
              <br className="hidden md:block" />
              {t('intro2')}
            </p>
          </div>

          {/* 详细内容区域 - 左右布局 */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center mb-10 sm:mb-12 md:mb-16">
            {/* 左侧：文字内容 */}
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-900 mb-3 sm:mb-4">
                  {t('storyTitle')} · {t('storyTitleEn')}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-primary-700 leading-relaxed">
                  {t('story1')}
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg text-primary-700 leading-relaxed">
                  {t('story2')}
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg text-primary-700 leading-relaxed">
                  {t('story3')}
                </p>
              </div>
            </div>

            {/* 右侧：个人照片 */}
            <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl ring-2 ring-sage-300/30">
              <Image
                src="/images/about-life.jpg"
                alt={tImages('aboutAlt')}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                quality={85}
              />
            </div>
          </div>

          {/* 财富定义 - 深色区块突出品牌理念 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-sage-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-xl sm:shadow-2xl relative overflow-hidden">
              {/* 背景装饰 */}
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-sage-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="space-y-3 sm:space-y-4 md:space-y-5 text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white">
                    {t('wealthDefinition')}
                  </h3>
                  {t('wealthDefinition1b') && (
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-medium">
                      {t('wealthDefinition1b')}
                    </p>
                  )}
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gold-200 font-light leading-relaxed">
                    {t('wealthDefinition2')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
