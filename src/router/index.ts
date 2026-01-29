import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home-View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/kapcsolat',
      name: 'contact-us',
      component: () => import('../pages/ContactUs-View.vue'),
    },
    {
      path: '/hogyan-mukodunk',
      name: 'how-it-works',
      component: () => import('../pages/HowItWorks-View.vue')

    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Login-View.vue'),
    },{
      path: '/impresszum',
      name: 'impresszum',
      component: () => import('../pages/Impresszum-View.vue'),
    },
  ],
})

export default router
