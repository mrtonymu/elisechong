const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
  },
  webpack: (config, { isServer }) => {
    // 修复客户端 webpack 动态导入问题
    if (!isServer) {
      // 确保 webpack 正确处理动态导入
      config.output = {
        ...config.output,
        chunkLoadingGlobal: 'webpackChunkLoad',
      }
      
      // 修复 require.e 问题 - 简化配置
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              name: 'framework',
              chunks: 'all',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
              priority: 40,
              enforce: true,
            },
          },
        },
      }
    }
    return config
  },
}

module.exports = withNextIntl(nextConfig)
