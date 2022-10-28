import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/login/Login.vue"),
      meta: {
        title: "登录",
      },
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/login/Register.vue"),
      meta: {
        title: "注册",
      },
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/home/Home.vue"),
      meta: {
        title: "首页",
        // keepAlive: false
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  //beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {
    //判断是否有标题
    document.title = to.meta.title;
  }
  next(); //执行进入路由，如果不写就不会进入目标页
});

export default router;
