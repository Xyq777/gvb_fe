<template>
  <div class="gvb_admin">
    <aside :class="{collapsed:useStore().collapsed}">
      <Gvb_logo></Gvb_logo>
      <Gvb_menu></Gvb_menu>
    </aside>
    <main>
      <div class="gvb_head">
        <Gvb_bread_crumb></Gvb_bread_crumb>
        <div class="gvb_action_area">
          <icon-menu class="action_icon"> </icon-menu>
          <gvb_theme></gvb_theme>
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
      <gvb_tabs></gvb_tabs>
      <div class="gvb_container">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import Gvb_tabs from '@/components/admin/gvb_tabs.vue'
import Gvb_bread_crumb from '@/components/admin/gvb_bread_crumb.vue'
import Gvb_logo from '@/components/admin/gvb_logo.vue'
import Gvb_menu from '@/components/admin/gvb_menu.vue'
import { IconMenu, IconDown } from '@arco-design/web-vue/es/icon'
import Gvb_theme from '@/components/global/gvb_theme.vue'
import { useStore } from '@/stores/store'



</script>
<style lang="scss">
.gvb_admin {
  display: flex;
  color: var(--color-text-1);
  height: 100vh;
  aside {
    width: 240px;
    border-right: 1px solid var(--bg);
    transition: all 0.3s;
    position: relative;
    &.collapsed {
      width: 48px;
      &~main {
        width: calc(100% - 48px);
      }
    }

  }
  main {
    width: calc(100% - 240px);
    overflow-x: hidden;
    overflow-y:auto;
    transition: all 0.3s
  ;
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
