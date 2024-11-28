<script setup lang="ts">

import { IconDown } from '@arco-design/web-vue/es/icon'
import { useStore } from '@/stores/store'
</script>

<template>
  <div class="gvb_user_info_menu">
    <a-dropdown>
      <div class="gvb_user_info_menu_dropdown">
        <img :src="useStore().userInfo.avatar" alt="头像" />
        <span>{{useStore().userInfo.nick_name}}</span>
        <icon-down></icon-down>
      </div>
      <template #content>
        <a-doption>退出登录</a-doption>

      </template>
    </a-dropdown>
  </div>
</template>

<style>
.gvb_user_info_menu {
  .gvb_user_info_menu_dropdown {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  span {
    margin: 0 5px;
  }
}
</style>
