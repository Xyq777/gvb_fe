

<template>
  <div class="gvb_bread_crumb">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="item in route.matched" :key="item.name">{{item.meta.title}}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route =useRoute()
</script>
<style scoped>

</style>
