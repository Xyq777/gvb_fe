<template>
  <div class="gvb_admin">
    <aside>
      <div class="gvb_logo">
        <img src="../../../public/image/logo.jpg" alt="logo" />
        <div class="log_head">
          <div>席应情</div>
          <div>Xyq777</div>
        </div>
      </div>
      <div class="gvb_menu">
        <a-menu
          @menu-item-click="clickMenu"
          v-model:selected-keys="selectedKeys"
          v-model:open-keys="openKeys"
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
    </aside>
    <main>
      <div class="gvb_head">
        <div class="gvb_bread_crumb">
          <a-breadcrumb>
            <a-breadcrumb-item v-for="item in route.matched">{{item.meta.title}}</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="gvb_action_area">
          <icon-menu class="action_icon"> </icon-menu>
          <div class="gvb_theme">
            <icon-sun class="action_icon"></icon-sun>
          </div>
          <div class="gvb_user_info_menu">
            <a-dropdown>
              <div class="gvb_user_info_menu_dropdown">
                <img src="/public/image/capoo-02.jpg" alt="头像" />
                <span>xyq</span>
                <icon-down></icon-down>
              </div>
              <template #content>
                <a-doption>Option 1</a-doption>
                <a-doption disabled>Option 2</a-doption>
                <a-doption>Option 3</a-doption>
                <a-doption>Option 4</a-doption>
              </template>
            </a-dropdown>
          </div>
        </div>
      </div>
      <div class="gvb_tabs">
        <span class="gvb_tab active">我的信息</span>
        <span class="gvb_tab">用户列表</span>
        <span class="gvb_tab">用户列表</span>
      </div>
      <div class="gvb_container">
        <div style="height: 1000px"></div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { IconMenu, IconSun, IconDown, IconUser } from '@arco-design/web-vue/es/icon'
import type { Component } from 'vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const selectedKeys = ref([route.name])
const openKeys = ref([route.matched[1].name])
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
</script>
<style lang="scss">
.gvb_admin {
  display: flex;
  color: var(--color-text-1);
  height: 100vh;
  aside {
    width: 240px;
    border-right: 1px solid var(--bg);
    height: 100vh;
    .gvb_logo {
      height: 90px;
      display: flex;
      padding: 20px;
      align-items: center;
      border-bottom: 1px solid var(--bg);
      img {
        width: 60px;
        height: 60px;
      }
      .log_head {
        margin-left: 20px;
        > div:nth-child(1) {
          font-size: 22px;
        }
        > div:nth-child(2) {
          font-size: 12px;
        }
      }
    }
  }
  main {
    width: calc(100% - 240px);
    overflow-x: hidden;
    overflow-y:auto;
    .gvb_head {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid var(--bg);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      .gvb_action_area {
        display: flex;
        align-items: center;
        .action_icon {
          margin-right: 10px;
          cursor: pointer;
          font-size: 16px;
        }
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
      }
    }
    .gvb_tabs {
      display: flex;
      align-items: center;
      height: 30px;
      width: 100%;
      border-bottom: 1px solid var(--bg);
      padding: 0 20px;
      .gvb_tab {
        border: 1px solid var(--bg);
        border-radius: 5px;
        padding: 2px 6px;
        margin-right: 10px;
        cursor: pointer;
        &.active {
          background-color: var(--active);
          color: white;
        }
      }
    }
    .gvb_container {
      background-color: var(--bg);
      padding: 20px;
      min-height: calc(100vh - 90px);
    }
  }
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-enter-active {
  transform: translateX(-30px);
  opacity: 0;
}

.fade-enter-to {
  transform: translateX(0px);
  opacity: 1;
}

.fade-leave-active,
.fade-enter-active {
  transition: all 0.3s ease-out;
}
</style>
