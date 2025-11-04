/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        accent: {
          50: '#fff9e6',
          100: '#fff1cc',
          200: '#ffe699',
          300: '#ffdb66',
          400: '#ffd033',
          500: '#ffc500',
          600: '#cc9e00',
          700: '#997700',
          800: '#664f00',
          900: '#332800',
        },
        warm: {
          50: '#fffaf0',
          100: '#fff5e6',
          200: '#ffeccc',
          300: '#ffd9b3',
          400: '#ffc680',
          500: '#ffb84d',
          600: '#ff9f1a',
          700: '#e68600',
          800: '#cc6d00',
          900: '#995200',
        },
        sage: {
          50: '#f6f8f6',
          100: '#e8ede8',
          200: '#d1dbd1',
          300: '#aebfae',
          400: '#859985',
          500: '#6b7d6b',
          600: '#556655',
          700: '#475347',
          800: '#3d453d',
          900: '#353b35',
        },
        gold: {
          50: '#fffef7',
          100: '#fff9e6',
          200: '#fff1cc',
          300: '#ffe699',
          400: '#ffdb66',
          500: '#d4af37',
          600: '#b8941f',
          700: '#9a7a0f',
          800: '#7c6000',
          900: '#5d4700',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    // 禁用所有默认主题，避免与现有颜色系统冲突
    themes: false,
    
    // 不应用基础样式，保持你的全局样式
    base: false,
    
    // 保留组件样式（如 btn, dropdown）
    styled: true,
    
    // 保留工具类
    utils: true,
    
    // 禁用日志
    logs: false,
  },
}
