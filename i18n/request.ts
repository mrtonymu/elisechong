import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

// 支持的语言列表
export const locales = ['zh', 'en'] as const
export type Locale = (typeof locales)[number]

// 静态导入所有消息文件，确保在构建时打包
import zhMessages from '../messages/zh.json'
import enMessages from '../messages/en.json'

const messagesMap = {
  zh: zhMessages,
  en: enMessages,
} as const

// next-intl 需要这个配置函数，但使用静态导入避免动态加载
export default getRequestConfig(async ({ locale }) => {
  // 验证传入的 locale 参数，如果不存在则使用默认语言
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'zh'

  // 从静态导入的映射中获取消息，完全避免动态导入
  const messages = messagesMap[validLocale] || messagesMap.zh

  return {
    locale: validLocale,
    messages
  }
})
