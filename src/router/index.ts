import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import WelcomeView from '@/views/WelcomeView.vue';
import CloneApp from '@/views/CloneApp.vue'; // Добавлен импорт CloneApp.vue
import UsersView from '@/views/UsersView.vue'; // Добавлен импорт UsersView.vue

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      
      path: '/',
      name: 'home',
      component: WelcomeView
    },
    {
      
      path: '/matches',
      name: 'details',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/clone', // Добавлен новый маршрут для CloneApp
      name: 'clone',
      component: CloneApp
    },
    {
      path: '/users', // Добавлен новый маршрут для UsersView
      name: 'users',
      component: UsersView
    }
  ]
});

export default router;