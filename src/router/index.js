import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/moduleHome/Home.vue'),
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/moduleLogin/Login.vue'),
  },
  {
    path: '/products',
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
