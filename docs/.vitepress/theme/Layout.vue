<script setup>
import DefaultTheme from 'vitepress/theme'
import LlmsButton from './components/LlmsButton.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <LlmsButton />
    </template>
  </Layout>
</template>

<style scoped>
.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .container {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .container {
    padding: 0 64px;
  }
}

.llms-button-container {
  position: relative;
  width: 100%;
  height: 0;
}
</style> 