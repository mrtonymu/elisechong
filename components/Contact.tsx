'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'

// WhatsApp 配置
// 电话号码格式：国家代码+号码（不带+号和空格）
const WHATSAPP_PHONE = '60165281564' // 马来西亚：60 + 165281564
const WHATSAPP_SHORT_LINK = 'https://wa.link/2x0scs' // 备用短链接

export default function Contact() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({})
  const [showSuccess, setShowSuccess] = useState(false)

  const formatWhatsAppMessage = () => {
    const isZh = locale === 'zh'
    
    const parts = []
    
    if (isZh) {
      // 中文格式
      parts.push('你好 Elise，我想了解更多关于理财规划的服务。\n')
      parts.push('\n')
      
      if (formData.name) {
        parts.push(`姓名：${formData.name}\n`)
      }
      if (formData.phone) {
        parts.push(`电话：${formData.phone}\n`)
      }
      if (formData.serviceType) {
        parts.push(`服务类型：${formData.serviceType}\n`)
      }
      
      if (formData.message) {
        parts.push('\n需求描述：\n')
        parts.push(`${formData.message}\n`)
      }
      
      parts.push('\n期待您的回复！')
    } else {
      // English format
      parts.push("Hi Elise, I'm interested in your wealth management services.\n")
      parts.push('\n')
      
      if (formData.name) {
        parts.push(`Name: ${formData.name}\n`)
      }
      if (formData.phone) {
        parts.push(`Phone: ${formData.phone}\n`)
      }
      if (formData.serviceType) {
        parts.push(`Service Type: ${formData.serviceType}\n`)
      }
      
      if (formData.message) {
        parts.push('\nMessage:\n')
        parts.push(`${formData.message}\n`)
      }
      
      parts.push('\nPlease get back to me soon!')
    }
    
    return parts.join('')
  }

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    
    if (WHATSAPP_PHONE) {
      // 使用 api.whatsapp.com 格式（需要电话号码）
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodedMessage}&type=phone_number&app_absent=0`
      window.open(whatsappUrl, '_blank')
    } else {
      // 使用短链接格式
      const whatsappUrl = `${WHATSAPP_SHORT_LINK}?text=${encodedMessage}`
      window.open(whatsappUrl, '_blank')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // 验证必填字段
    const newErrors: { name?: string; message?: string } = {}
    if (!formData.name.trim()) {
      newErrors.name = locale === 'zh' ? '请输入您的姓名' : 'Please enter your name'
    }
    if (!formData.message.trim()) {
      newErrors.message = locale === 'zh' ? '请输入您的需求或想法' : 'Please enter your message'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setErrors({})
    setIsSubmitting(true)
    
    try {
      // 格式化消息
      const message = formatWhatsAppMessage()
      
      // 短暂延迟，让用户看到提交状态
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // 打开 WhatsApp
      openWhatsApp(message)
      
      // 显示成功提示
      setShowSuccess(true)
      
      // 重置表单
      setFormData({ name: '', phone: '', serviceType: '', message: '' })
      
      // 3秒后自动隐藏成功提示
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    } catch (error) {
      // 生产环境不输出错误，开发环境保留用于调试
      if (process.env.NODE_ENV === 'development') {
        console.error('Error opening WhatsApp:', error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-sage-700 text-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* 标题 */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-3 sm:mb-4 md:mb-5">
              {t('title')} <span className="text-sage-300">{t('titleHighlight')}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-200 leading-relaxed px-4">
              {t('subtitle')}
            </p>
          </div>

          {/* 表单卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl sm:shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* 姓名 */}
              <div>
                <label className="block text-sm font-medium text-primary-900 mb-2">
                  {t('namePlaceholder')} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => {
                    handleChange(e)
                    if (errors.name) {
                      setErrors({ ...errors, name: undefined })
                    }
                  }}
                  placeholder={t('namePlaceholder')}
                  required
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 border text-primary-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent font-sans ${
                    errors.name ? 'border-red-300 focus:ring-red-400' : 'border-gray-200'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
              </div>

              {/* 电话（选填） */}
              <div>
                <label className="block text-sm font-medium text-primary-900 mb-2">
                  {t('phoneInputPlaceholder')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('phoneInputPlaceholder')}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-primary-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent font-sans"
                />
              </div>

              {/* 服务类型 */}
              <div>
                <label className="block text-sm font-medium text-primary-900 mb-2">
                  {t('serviceTypePlaceholder')}
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  aria-label={t('serviceTypePlaceholder')}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-primary-900 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent font-sans"
                >
                  <option value="">{t('serviceTypePlaceholder')}</option>
                  <option value={t('serviceTypeOption1')}>{t('serviceTypeOption1')}</option>
                  <option value={t('serviceTypeOption2')}>{t('serviceTypeOption2')}</option>
                  <option value={t('serviceTypeOption3')}>{t('serviceTypeOption3')}</option>
                </select>
              </div>

              {/* 需求描述 */}
              <div>
                <label className="block text-sm font-medium text-primary-900 mb-2">
                  {t('messagePlaceholder')} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => {
                    handleChange(e)
                    if (errors.message) {
                      setErrors({ ...errors, message: undefined })
                    }
                  }}
                  placeholder={t('messagePlaceholder')}
                  rows={5}
                  required
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 border text-primary-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent resize-none font-sans ${
                    errors.message ? 'border-red-300 focus:ring-red-400' : 'border-gray-200'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                )}
              </div>

              {/* 底部提示 */}
              <div className="flex items-start gap-2 pt-1 sm:pt-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sage-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-xs sm:text-sm text-primary-700 leading-relaxed">
                  {t('footerNote')}
                </p>
              </div>

              {/* 成功提示 */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
                  >
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-green-800 font-medium">
                      {locale === 'zh' ? '表单已提交！正在打开 WhatsApp...' : 'Form submitted! Opening WhatsApp...'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 提交按钮 */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.message}
                className="w-full bg-gradient-to-r from-sage-600 to-sage-700 text-white px-6 py-3.5 sm:py-4 rounded-lg font-semibold hover:from-sage-700 hover:to-sage-800 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base md:text-lg font-sans min-h-[44px] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('submitting') || '提交中...'}
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    {t('submit')}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
