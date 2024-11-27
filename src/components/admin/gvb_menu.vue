

<template>
  <div class="gvb_menu">
    <a-menu
      @menu-item-click="clickMenu"
      v-model:selected-keys="selectedKeys"
      v-model:open-keys="openKeys"
      show-collapse-button
      @collapse="collapse"
    >
      <template v-for="menu in menuList" :key="menu.key">
        <a-menu-item v-if="menu.child?.length === 0" :key="menu.name">
          <template #icon>
            <component :is="menu.icon"></component>
          </template>
          {{ menu.title }}
        </a-menu-item>
        <a-sub-menu v-if="menu.child?.length !== 0" :key="menu.name">
          <template #icon>
            <component :is="menu.icon"></component>
          </template>
          <template #title>{{ menu.title }}</template>
          <a-menu-item v-for="item in menu.child" :key="item.name">{{
              item.title
            }}</a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>
<script setup lang="ts">

import { type Component, ref, watch } from 'vue'
import { IconMenu, IconUser } from '@arco-design/web-vue/es/icon'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/stores/store'
const router = useRouter()
const route = useRoute()
//这里使用计算属性会导致无法切换
//TODO 尝试使用计算属性
const selectedKeys =  ref([route.name])
const openKeys = ref([route.matched[1].name])
const DefaultCollapsed = false
interface MenuType {
  key: string
  title: string
  icon?: Component
  name: string // 路由名字
  child?: MenuType[]
}
const clickMenu = (name: string) => {
  console.log(route)
  router.push({ name: name })
}

const menuList: MenuType[] = [
  { key: '1', title: '首页', icon: IconMenu, name: 'home', child: [] },
  {
    key: '2',
    title: '个人中心',
    icon: IconUser,
    name: 'user_center',
    child: [{ key: '2-1', title: '我的信息', icon: IconUser, name: 'user_info' }],
  },
  {
    key: '3',
    title: '文章管理',
    icon: IconUser,
    name: 'article',
    child: [{ key: '3-1', title: '文章列表', icon: IconUser, name: 'article_list' }],
  },
  {
    key: '4',
    title: '用户管理',
    icon: IconUser,
    name: 'users',
    child: [{ key: '4-1', title: '用户列表', icon: IconUser, name: 'user_list' }],
  },
  {
    key: '5',
    title: '系统管理',
    icon: IconUser,
    name: 'system',
    child: [{ key: '5-1', title: '菜单列表', icon: IconUser, name: 'menu_list' }],
  },
]
function collapse(collapsed :boolean){
  useStore().setCollapsed(collapsed)

}
collapse(DefaultCollapsed)

watch(() => route.name, () => {
  selectedKeys.value[0] = route.name
  openKeys.value[0] = route.matched[1].name
})
</script>
<style  lang="scss">
.gvb_menu {
  .arco-menu {
    position: inherit;
  }

  .arco-menu-collapse-button {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, 0);
    opacity: 0;
    transition: all .3s;
  }
}

aside:hover {
  .gvb_menu {
    .arco-menu-collapse-button {
      opacity: 1;
    }
  }
}
</style>
