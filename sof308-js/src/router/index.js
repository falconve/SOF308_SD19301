import { createRouter, createWebHistory } from 'vue-router'
import Book from '@/components/Book.vue'
import Form from '@/components/Form.vue'
import Api from '@/components/Api.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/book',
      component: Book,
    },
    {
      path: '/form',
      component: Form,
    },
    {
      path: '/api',
      component: Api,
    },
  ],
})

export default router
