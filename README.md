# Elise Portfolio - 张慧薇个人网站

专业的财富管理与投资顾问个人portfolio网站。

## 技术栈

- **Next.js 14** - React 框架（App Router）
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Framer Motion** - 动画效果
- **next-intl** - 国际化支持（中英文）
- **DaisyUI** - UI 组件库

## 功能特点

- ✅ 现代化、专业的视觉设计
- ✅ 双语支持（中文/英文）
- ✅ 响应式布局（移动端优先）
- ✅ 流畅的滚动动画
- ✅ 简洁明了的导航
- ✅ 个人照片展示区域
- ✅ WhatsApp 联系表单
- ✅ SEO 优化（robots.txt, sitemap.xml）

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000/zh](http://localhost:3000/zh) 查看中文版，或 [http://localhost:3000/en](http://localhost:3000/en) 查看英文版。

### 构建生产版本

```bash
npm run build
npm start
```

## 自定义内容

### 添加个人照片

1. 将照片放入 `public/images/` 目录
2. 在组件中使用 Next.js Image 组件引入
3. 确保图片文件名与组件中的路径匹配

### 修改联系信息

编辑 `components/Contact.tsx` 文件中的 WhatsApp 配置：
```typescript
const WHATSAPP_PHONE = '60165281564' // 你的电话号码
const WHATSAPP_SHORT_LINK = 'https://wa.link/2x0scs' // 你的 WhatsApp 短链接
```

### 调整文案（重要！）

**所有文案都在翻译文件中，不要直接编辑组件文件！**

编辑以下文件来修改网站内容：

- `messages/zh.json` - 中文文案
- `messages/en.json` - 英文文案

主要文案模块：
- `hero` - 首屏介绍
- `about` - 关于我
- `trust` - 信任背书
- `services` - 服务内容
- `contact` - 联系方式
- `footer` - 页脚信息
- `images` - 图片 alt 文本

示例：修改首屏标题
```json
{
  "hero": {
    "title": "我是",
    "name": "张慧薇",
    ...
  }
}
```

修改后，文案会自动应用，无需修改组件代码。

## 部署

推荐使用 Vercel 部署：

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署完成

### 部署前检查清单

- [ ] 更新 `public/robots.txt` 中的域名
- [ ] 更新 `app/sitemap.ts` 中的 `NEXT_PUBLIC_SITE_URL` 环境变量
- [ ] 确认所有图片文件已上传到 `public/images/`
- [ ] 检查 WhatsApp 电话号码和链接是否正确

### 环境变量

在 Vercel 或其他部署平台设置：
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 项目结构

```
├── app/
│   ├── [locale]/          # 多语言路由
│   │   ├── layout.tsx     # 布局组件（包含 SEO 元数据）
│   │   └── page.tsx       # 主页面
│   ├── globals.css        # 全局样式
│   └── sitemap.ts         # 站点地图
├── components/            # React 组件
│   ├── Navigation.tsx     # 导航栏
│   ├── Hero.tsx          # 首屏
│   ├── About.tsx         # 关于我
│   ├── Trust.tsx         # 信任背书
│   ├── Services.tsx      # 服务内容
│   ├── Contact.tsx       # 联系方式
│   ├── TrendingReels.tsx # 轮播展示
│   └── Footer.tsx        # 页脚
├── messages/             # 翻译文件
│   ├── zh.json          # 中文翻译
│   └── en.json          # 英文翻译
├── i18n/                # 国际化配置
│   └── request.ts       # next-intl 配置
├── public/              # 静态资源
│   ├── images/         # 图片文件
│   └── robots.txt      # 搜索引擎爬虫配置
└── middleware.ts        # 中间件（处理语言路由）
```

## 许可证

MIT
