'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function TrendingReels() {
  const t = useTranslations('trendingReels')
  const tImages = useTranslations('images')
  
  // 轮播内容 - 使用翻译
  const items = [
    {
      id: 1,
      title: t('item1.title'),
      image: '/images/about-work.jpg',
      description: t('item1.description'),
    },
    {
      id: 2,
      title: t('item2.title'),
      image: '/images/about-life.jpg',
      description: t('item2.description'),
    },
    {
      id: 3,
      title: t('item3.title'),
      image: '/images/hero-photo.jpg',
      description: t('item3.description'),
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // 自动播放（可选）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 5000) // 5秒切换

    return () => clearInterval(timer)
  }, [items.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 text-center mb-3 sm:mb-4 md:mb-6">
            <span className="text-sage-700">{t('title')}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary-600 text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
            {t('subtitle')}
          </p>

          {/* 轮播容器 */}
          <div className="relative max-w-4xl mx-auto">
            {/* 轮播内容 - 使用 aspect-ratio 替代固定高度 */}
            <div className="relative aspect-[3/4] sm:aspect-[2/3] md:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              {items.map((item, index) => {
                // 根据图片类型设置精确的定位
                const getObjectPosition = () => {
                  if (item.image === '/images/hero-photo.jpg') {
                    return 'object-center'
                  } else if (item.image === '/images/about-work.jpg') {
                    // 608x1080 (9:16) - 全身照，确保头部到身体都可见
                    return 'object-[center_30%]'
                  } else if (item.image === '/images/about-life.jpg') {
                    // 1708x2560 (2:3) - 半身照，确保脸部清晰
                    return 'object-[center_25%]'
                  }
                  return 'object-center'
                }

                return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    x: index === currentIndex ? 0 : 100,
                    scale: index === currentIndex ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 ${
                    index === currentIndex ? 'z-10' : 'z-0'
                  }`}
                >
                  <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          alt={`${tImages('trendingReelsAlt')} - ${item.title}`}
                          fill
                          className={`object-cover ${getObjectPosition()}`}
                          sizes="(max-width: 768px) 100vw, 800px"
                          loading="lazy"
                          quality={85}
                          onError={(e) => {
                            // 图片加载失败时的处理
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                    {/* 文字叠加 - 只在底部添加遮罩，不遮盖图片主体 */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                      <div className="w-full p-4 sm:p-6 md:p-8 lg:p-10">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-2xl">
                          {item.title}
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-gray-100 drop-shadow-xl">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                )
              })}
            </div>

            {/* 导航按钮 */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={t('prevButton')}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={t('nextButton')}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* 指示器 */}
            <div className="flex justify-center gap-2 mt-6">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-sage-600'
                      : 'w-2 bg-gray-300 hover:bg-sage-400'
                  }`}
                  aria-label={`${t('goToSlide')} ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

