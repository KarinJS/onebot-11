<template>
  <div class="llms-button" v-if="isHomePage">
    <a href="/llms.txt" title="跳转到llms.txt">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <line x1="10" y1="9" x2="8" y2="9"></line>
      </svg>
      <span>LLMS.txt</span>
    </a>
  </div>
</template>

<script setup>
import { useRoute } from 'vitepress'
import { computed } from 'vue'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>

<style scoped>
.llms-button {
  position: fixed;
  left: 24px;
  bottom: 24px;
  z-index: 10;
}

.llms-button a {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 6px;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.llms-button a:hover {
  opacity: 0.8;
}

.llms-button svg {
  width: 18px;
  height: 18px;
  margin-right: 8px;
}

.llms-button span {
  line-height: 1;
}
</style> 