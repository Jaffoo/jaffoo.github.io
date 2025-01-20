import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "KirinApp-麒麟",
  description: "基于C#.NET的轻量级跨平台桌面程序开发框架",
  base: '/KirinApp/doc/',
  outDir: '../doc',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/info' },
      { text: '开发', link: '/env' },
    ],

    sidebar: [
      {
        text: '简介',
        collapsed: true,
        items: [
          { text: '什么是KirinApp？', link: '/info' },
          { text: 'KirinApp的特点', link: '/features' },
        ]
      },
      {
        text: '快速上手',
        collapsed: true,
        items: [
          { text: '前置条件', link: '/env' },
          { text: '创建项目', link: '/project' },
          { text: '配置说明', link: '/config' },
          { text: '属性', link: '/property' },
          { text: '加载类型', link: '/content' },
        ]
      }, {
        text: 'API',
        collapsed: true,
        items: [
          { text: '窗体', link: '/window' },
          { text: '事件', link: '/event' },
          { text: '文件', link: '/file' },
          { text: '对话框', link: '/dialog' },
          { text: '浏览器控件', link: '/webview' },
          { text: 'JS API', link: '/jsapi' }
        ]
      }
    ],
    outline: {
      label: '页面导航'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Jaffoo/KirinApp' }
    ]
  }
})
