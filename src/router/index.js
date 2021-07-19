import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/moduleHome/Home.vue'),
  },
  {
    path: '/entrar',
    name: 'Login',
    component: () => import('../views/moduleLogin/Login.vue'),
  },
  {
    path: '/cadastrar',
    name: 'register',
    component: () => import('../views/moduleLogin/Login.vue'),
  },
  {
    path: '/carrinho',
    name: 'order',
    component: () => import('../views/moduleOrder/Order.vue'),
  },
  {
    path: '/produtos',
    name: 'Products',
    component: () => import('../views/moduleProducts/Products.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
