import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/request'
import type { Metadata } from 'next'

// 静态导入所有消息文件，完全避免动态导入
import zhMessages from '@/messages/zh.json'
import enMessages from '@/messages/en.json'

const messagesMap = {
  zh: zhMessages,
  en: enMessages,
} as const

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

// SEO Metadata
export function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Metadata {
  const isZh = locale === 'zh'
  
  const title = isZh 
    ? '张慧薇 Elise Chong | 财富管理与投资顾问 | Her Wealth 她的财富'
    : 'Elise Chong | Wealth Management & Investment Advisor | Her Wealth'
  
  const description = isZh
    ? '张慧薇 Elise Chong，专业的财富管理与投资顾问。Her Wealth 她的财富 - 专为女性打造的财富成长平台，以智慧、专业与温度，陪伴你掌握财务自由的力量。'
    : 'Elise Chong, Certified Wealth Management & Investment Advisor. Her Wealth - A modern wealth platform empowering women to grow, protect, and own their financial freedom.'
  
  const keywords = isZh
    ? '财富管理,投资顾问,理财规划,张慧薇,Elise Chong,Her Wealth,她的财富,女性理财,财务规划,投资咨询'
    : 'wealth management,investment advisor,financial planning,Elise Chong,Her Wealth,women finance,financial advisor,investment consultant'

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'
  
  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,
    authors: [{ name: 'Elise Chong 张慧薇' }],
    creator: 'Elise Chong',
    publisher: 'Her Wealth',
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale,
      alternateLocale: locale === 'zh' ? 'en' : 'zh',
      siteName: 'Her Wealth',
      images: [
        {
          url: '/images/hero-photo.jpg',
          width: 1200,
          height: 630,
          alt: isZh ? '张慧薇 Elise Chong' : 'Elise Chong',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/hero-photo.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'zh': '/zh',
        'en': '/en',
        'x-default': '/zh',
      },
    },
  }
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // 直接从静态导入的映射中获取消息，避免任何异步加载
  const messages = messagesMap[locale as keyof typeof messagesMap] || messagesMap.zh

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1F2E3E" />
        {/* 字体预加载 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          as="style"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

