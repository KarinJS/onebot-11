import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import './style/custom-block.css'
import LlmsButton from './components/LlmsButton.vue'
import HighPerformanceTable from './components/HighPerformanceTable.vue'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }: { app: App }) {
    app.component('LlmsButton', LlmsButton)
    app.component('HighPerformanceTable', HighPerformanceTable)
  },
  setup() {
    // 这里可以添加全局的setup逻辑
  }
}