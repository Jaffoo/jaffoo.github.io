import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'ShamrockCore',
  description: 'ShamrockCore',
  base:'/ShamrockCore/doc/',
  dest:'../doc',
  head: [['link', { rel: 'icon', href: 'https://v2.vuepress.vuejs.org/images/icons/favicon-32x32.png' }]],
  theme: defaultTheme({
    logo: '/images/wd.jpg',
    // 默认主题配置
    navbar: [
      {
        text: '指南',
        link: '/info',
      },{
        text: '快速开始',
        link: '/start',
      },{
        text: 'API',
        children: [
          {
            text:'消息API',
            link:'/api/message',
          },{
            text:'事件API',
            link:'/api/event',
          },
        ],
      },{
        text: '源码',
        children:[
          {text:'GitHub',link:'https://github.com/Jaffoo/ShamrockCore.NET'},
          {text:'Gitee',link:'https://gitee.com/jaffoo/ShamrockCore.NET'},
        ]
      },
    ],
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
        }
      },
      isSearchable: (page) => page.path !== '/',// 排除首页
    }),
  ],
})