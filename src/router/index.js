import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";

import Login from '@/views/Login/template.vue'
import Index from '@/views/Index/template.vue'
import Detail from '@/views/Detail/template.vue'
import Edit from '@/views/Edit/template.vue'
import Create from '@/views/Create/template.vue'
import Register from '@/views/Register/template.vue'
import User from '@/views/User/template.vue'
import My from '@/views/My/template.vue'
import kong from '@/views/kong.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',//首页页Index
    // component: () => import('@/views/Login/template.vue')
    component: Login
  },
  {
    path: '/Index',//登录页Login
    // component: () => import('@/views/Index/template.vue')
    component: Index
  },
  {
    path: '/Detail/:blogId',//Detail 详情页
    // component: () => import('@/views/Detail/template.vue')
    component: Detail
  }, {
    path: '/Edit/:blogId',//编辑页Edit
    // component: () => import('@/views/Edit/template.vue'),
    component: Edit,
    meta: { requiresAuth: true }
  }, {
    path: '/Create',//创造页Create
    // component: () => import('@/views/Create/template.vue'),
    component: Create,
    meta: { requiresAuth: true }
  }, {
    path: '/Register',//注册页  Register
    // component: () => import('@/views/Register/template.vue')
    component: Register
  }, {
    path: '/User/:userId',//使用者 User
    // component: () => import('@/views/User/template.vue')
    component: User
  },
  {
    path: '/My',// 我的 My
    // component: () => import('@/views/My/template.vue'),
    component: My,
    meta: { requiresAuth: true }
  },
  {
    path: '/kong',// 我的 My
    // component: () => import('@/views/kong.vue'),
    component: kong
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
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
