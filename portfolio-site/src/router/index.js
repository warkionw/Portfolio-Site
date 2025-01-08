import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Portfolio Site',
      component: MainView,
    }
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.name || 'Default Title'; // Set the document title to the route name or a default title
  next();
})

export default router
