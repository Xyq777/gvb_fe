import { createRouter, createWebHistory } from 'vue-router'
import web from '../views/web/WebHome.vue'
import webIndex from '../views/web//WebIndex.vue'
import admin from '../views/admin/AdminIndex.vue'
import userInfo from '../views/admin/user_center/UserInfo.vue'
import userList from '../views/admin/users/UserList.vue'
import articleList from '../views/admin/article/ArticleList.vue'
import menuList from '../views/admin/system_settings/MenuList.vue'
import home from '../views/admin/home/HomeIndex.vue'
import login from '../views/login/LoginIndex.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'web',
      component: web,
      children: [
        {
          path: '',
          name:'index',
          component:webIndex
        }
      ]
    },
    {
      path: "/admin",
      name: "admin",
      component: admin,
      meta:{
        title:"后台管理"
      },
      children: [
        {
          path: "",
          name: "home",
          component: home,
          meta:{
            title:"首页"
          },
        },
        {
          path: "user_center",
          name: "user_center",
          meta:{
            title:"用户中心"
          },
          children: [
            {
              path: "user_info",
              name: "user_info",
              component: userInfo,
              meta:{
                title:"用户信息"
              },
            }
          ]
        },
        {
          path: "article",
          name: "article",
          meta:{
            title:"文章中心"
          },
          children: [
            {
              path: "article_list",
              name: "article_list",
              component: articleList,
              meta:{
                title:"文章列表"
              },
            }
          ]
        },
        {
          path: "users",
          name: "users",
          meta:{
            title:"用户管理"
          },
          children: [
            {
              path: "user_list",
              name: "user_list",
              component:userList,
              meta:{
                title:"用户列表"
              },
            }
          ]
        },
        {
          path: "system",
          name: "system",
          meta:{
            title:"系统设置"
          },
          children: [
            {
              path: "menu_list",
              name: "menu_list",
              component: menuList,
              meta:{
                title:"菜单列表"
              },
            }
          ]
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component:login,
      meta:{
        title:"登录"
      }
    }
  ],
})

export default router
