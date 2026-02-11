import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 1. Сначала создаем экземпляр приложения и кладем в переменную 'app'
const app = createApp(App)

// 2. Подключаем роутер к этому экземпляру
app.use(router)

// 3. И только потом монтируем (рисуем) приложение на странице
app.mount('#app')
