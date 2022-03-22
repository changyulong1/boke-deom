import Vue from 'vue'
import VueRouter from 'vue-router'
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
    path: '/Detail/:blogId',//Detail 详情页
    component: () => import('@/views/Detail/template.vue')
  },  {
    path: '/Edit/:blogId',//编辑页Edit
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
    path: '/User/:userId',//使用者 User
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
      console.log(isLogin)
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
    next() // 确保一定要调用 next()
  }
})
export default router
