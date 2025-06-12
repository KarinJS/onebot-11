import DefaultTheme from 'vitepress/theme'
import './style/custom-block.css'
import LlmsButton from './components/LlmsButton.vue'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('LlmsButton', LlmsButton)
  },
  setup() {
    // 这里可以添加全局的setup逻辑
  }
} 