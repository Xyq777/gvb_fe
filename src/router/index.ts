import { createRouter, createWebHistory } from 'vue-router'
import web from '../views/web/WebHome.vue'
import webIndex from '../views/web//WebIndex.vue'
import admin from '../views/admin/AdminIndex.vue'
import userInfo from '../views/admin/user_center/UserInfo.vue'
import userList from '../views/admin/users/UserList.vue'
import articleList from '../views/admin/article/ArticleList.vue'
import menuList from '../views/admin/system_settings/MenuList.vue'
import home from '../views/admin/home/HomeIndex.vue'




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
      children: [
        {
          path: "",
          name: "home",
          component: home,
        },
        {
          path: "user_center",
          name: "user_center",
          children: [
            {
              path: "user_info",
              name: "user_info",
              component: userInfo,
            }
          ]
        },
        {
          path: "article",
          name: "article",
          children: [
            {
              path: "article_list",
              name: "article_list",
              component: articleList,
            }
          ]
        },
        {
          path: "users",
          name: "users",
          children: [
            {
              path: "user_list",
              name: "user_list",
              component:userList,
            }
          ]
        },
        {
          path: "system",
          name: "system",
          children: [
            {
              path: "menu_list",
              name: "menu_list",
              component: menuList,
            }
          ]
        },
      ]
    }
  ],
})

export default router
