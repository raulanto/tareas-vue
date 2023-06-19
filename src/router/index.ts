import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Tarea from '@/components/Tareas.vue'
import CalculadoraPor from '@/components/CalculadoraPor.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Tarea',
      name: 'Tarea',
      component: Tarea
    },
    {
      path: '/CalculadoraPor',
      name: 'CalculadoraPor',
      component: CalculadoraPor
    },

    {
      path: '/Home',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Home.vue')
    }
  ]
})

export default router
