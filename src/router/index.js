import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from "@/views/Index/template.vue";
// import Login from "@/views/Login/template.vue";
// import Detail from "@/views/Detail/template.vue";
// import Edit from "@/views/Edit/template.vue";
// import Create from "@/views/Create/template.vue";
// import Register from "@/views/Register/template.vue";
// import User from "@/views/User/template.vue";
// import My from "@/views/My/template.vue";
import store from "@/store";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',//首页页Index
    component: () => import('@/views/Index/template.vue')
  },
  {
    path: '/Login',//登录页Login
    component: () => import('@/views/Login/template.vue')
  },
  {
    path: '/Detail',//Detail 详情页
    component: () => import('@/views/Detail/template.vue')
  },  {
    path: '/Edit',//编辑页Edit
    component: () => import('@/views/Index/template.vue'),
    meta: { requiresAuth: true }
  },  {
    path: '/Create',//创造页Create
    component: () => import('@/views/Create/template.vue'),
    meta: { requiresAuth: true }
  },  {
    path: '/Register',//注册页  Register
    component: () => import('@/views/Register/template.vue')
  },  {
    path: '/User',//使用者 User
    component: () => import('@/views/User/template.vue')
  },
  {
    path: '/My',// 我的 My
    component: () => import('@/views/My/template.vue'),
    meta: { requiresAuth: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin=>{
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    console.log(222)
    next() // 确保一定要调用 next()
  }
})
export default router
