import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "onebot11",
  description: "太懒了 还没有",
  vite: {
    server: {
      port: 5174
    },
    css: {
      // 如果需要处理CSS文件
      preprocessorOptions: {
        css: {
          charset: false
        }
      }
    },
    plugins: [llmstxt()]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'API 文档', link: '/api/README.md' }
    ],

    sidebar: [
      {
        text: '消息',
        items: [
          { text: '消息概述', link: '/message/README.md' },
          { text: '数组格式', link: '/message/array.md' },
          { text: '消息段类型', link: '/message/segment.md' }
        ]
      },
      {
        text: '事件',
        items: [
          { text: '事件概述', link: '/event/README.md' },
          { text: '元事件', link: '/event/meta.md' },
          { text: '消息事件', link: '/event/message.md' },
          { text: '通知事件', link: '/event/notice.md' },
          { text: '请求事件', link: '/event/request.md' },
        ]
      },
      {
        text: '通信',
        items: [
          { text: '通信概述', link: '/communication/README.md' },
          { text: 'HTTP', link: '/communication/http.md' },
          { text: 'HTTP POST', link: '/communication/http-post.md' },
          { text: '正向 WebSocket', link: '/communication/ws.md' },
          { text: '反向 WebSocket', link: '/communication/ws-reverse.md' },
          { text: '鉴权', link: '/communication/authorization.md' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'API 概述', link: '/api/Introduction.md' },
          { text: 'API 列表', link: '/api/README.md' },
          { text: '消息相关API', link: '/api/message.md' },
          { text: '好友相关API', link: '/api/friend.md' },
          { text: '群聊相关API', link: '/api/group.md' },
          { text: '文件相关API', link: '/api/file.md' },
          { text: 'Bot自身相关API', link: '/api/bot.md' },
          { text: '其他API', link: '/api/other.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/karinjs/onebot-11' }
    ]
  }
})
