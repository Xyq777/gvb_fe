<script setup lang="ts">
import {
  IconMenu,
  IconSun,
  IconDown,
  IconApps,
  IconBug,
  IconBulb,
} from '@arco-design/web-vue/es/icon';
</script>

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
          :default-open-keys="['0']"
          :default-selected-keys="['0_2']"
        >
          <a-sub-menu key="0">
            <template #icon><icon-apps></icon-apps></template>
            <template #title>Navigation 1</template>
            <a-menu-item key="0_0">Menu 1</a-menu-item>
            <a-menu-item key="0_1">Menu 2</a-menu-item>
            <a-menu-item key="0_2">Menu 3</a-menu-item>
            <a-menu-item key="0_3">Menu 4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="1">
            <template #icon><icon-bug></icon-bug></template>
            <template #title>Navigation 2</template>
            <a-menu-item key="1_0">Menu 1</a-menu-item>
            <a-menu-item key="1_1">Menu 2</a-menu-item>
            <a-menu-item key="1_2">Menu 3</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="2">
            <template #icon><icon-bulb></icon-bulb></template>
            <template #title>Navigation 3</template>
            <a-menu-item key="2_0">Menu 1</a-menu-item>
            <a-menu-item key="2_1">Menu 2</a-menu-item>
            <a-sub-menu key="2_2" title="Navigation 4">
              <a-menu-item key="2_2_0">Menu 1</a-menu-item>
              <a-menu-item key="2_2_1">Menu 2</a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </a-menu>

      </div>
    </aside>
    <main>
      <div class="gvb_head">
        <div class="gvb_bread_crumb">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>Channel</a-breadcrumb-item>
            <a-breadcrumb-item>News</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="gvb_action_area">
          <icon-menu class="action_icon"> </icon-menu>
          <div class="gvb_theme">
            <icon-sun class="action_icon"></icon-sun>
          </div>
          <div class="gvb_user_info_menu">
            <a-dropdown >
              <div class="gvb_user_info_menu_dropdown">
              <img src="/public/image/capoo-02.jpg" alt="头像">
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

      </div>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" >
.gvb_admin{
  display: flex;

  aside{
    width: 240px;

    border-right: 1px solid var(--bg);
    height: 100vh;
    .gvb_logo{
      height: 90px;
      display: flex;
      padding: 20px;
      align-items: center;
      border-bottom: 1px solid var(--bg);
      img{
        width: 60px;
        height: 60px;
      }
      .log_head{

        margin-left: 20px;
        > div:nth-child(1){
          font-size: 22px;

          }
        > div:nth-child(2){
          font-size: 12px;

        }
      }

    }
  }
  main{
    width: calc(100% - 240px);
    .gvb_head{
      width: 100%;
      height: 60px;
      border-bottom: 1px solid var(--bg);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      .gvb_action_area{
        display: flex;
        align-items: center;
        .action_icon{
          margin-right:10px;
          cursor: pointer;
          font-size: 16px;
        }
        .gvb_user_info_menu{
          .gvb_user_info_menu_dropdown{
            cursor: pointer;
            display: flex;
            align-items: center;
          }

          img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          span{
            margin: 0 5px;
          }
        }

      }
    }
    .gvb_tabs{
      height: 30px;
      width: 100%;
      border-bottom: 1px solid var(--bg);
    }

  }
}
</style>
