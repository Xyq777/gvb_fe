<template>
  <div @click="store.toggleTheme()" class="action_icon">
    <IconSun v-if="store.theme"></IconSun>
    <IconMoon v-else></IconMoon>
  </div>
</template>

<script setup lang="ts">

import {IconSun, IconMoon} from "@arco-design/web-vue/es/icon";
import {useStore} from "@/stores/store";
import { onMounted } from 'vue'
const store = useStore()


onMounted(() => {
  store.toggleTheme(store.theme)
})

</script>
