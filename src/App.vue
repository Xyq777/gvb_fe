<template>
  <router-view />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useStore } from '@/stores/store'
const store=useStore()
onMounted(() => {
  store.toggleTheme(store.theme)
})
</script>

<style scoped></style>

