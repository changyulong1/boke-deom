import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/views/Index/template.vue";
import Login from "@/views/Login/template.vue";
import Detail from "@/views/Detail/template.vue";
import Edit from "@/views/Edit/template.vue";
import Create from "@/views/Create/template.vue";
import Register from "@/views/Register/template.vue";
import User from "@/views/User/template.vue";
import My from "@/views/My/template.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index//首页页Index
  },
  {
    path: '/Login',
    component: Login//登录页Login
  },
  {
    path: '/Detail',
    component: Detail//Detail 详情页
  },  {
    path: '/Edit',
    component: Edit//编辑页Edit
  },  {
    path: '/Create',
    component: Create//创造页Create
  },  {
    path: '/Register',
    component: Register//登记页  Register
  },  {
    path: '/User',
    component: User//使用者 User
  },
  {
    path: '/My',
    component: My// 我的 My
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
