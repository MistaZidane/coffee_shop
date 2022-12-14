import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { transition: 'slide-left' },
    },
    // {
    //   path: '/products',
    //   name: 'products',
    //   meta: { transition: 'slide-left' },
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/ProductsView.vue')
    // },
    {
      path: '/menu',
      name: 'menu',
      meta: { transition: 'slide-left' },
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: { transition: 'slide-left' },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { transition: 'slide-left' },
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      meta: { transition: 'slide-left' },
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      meta: { transition: 'slide-left' },
      component: () => import('../views/AuthView.vue')
    }
  ]
})

export default router
