import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login/Login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/Home.vue'),
      meta: {
        title: '首页',
        // keepAlive: false
      }
    }
  ]
})


export default router
