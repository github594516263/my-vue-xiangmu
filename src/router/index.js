import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart.vue')
const CateGory = () => import('../views/category/CateGory.vue')
const ProFile = () => import('../views//profile/ProFile.vue')
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:CateGory
  },
  {
    path:'/profile',
    component:ProFile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
