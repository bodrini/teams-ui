<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import AppHeader from '@/components/AppHeader.vue';
</script>

<template>
  <div class="app-layout">
    <AppHeader />

    <nav>
      <RouterLink to="/">Матч</RouterLink>
      <RouterLink to="/about">Инфо</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
.app-layout {
  font-family: var(--p-font-family), sans-serif;
  text-align: center;
  
  /* 1. ШИРИНА И ЦЕНТРОВКА */
  max-width: 800px; /* Наш золотой стандарт */
  width: 95%;
  margin: 4rem auto; /* 4rem сверху/снизу, auto центрирует по горизонтали */
  padding: 2rem;

  /* 2. ЭФФЕКТ СТЕКЛА (Glassmorphism) */
  /* Делаем фон белым, но прозрачным на 85% */
  background: rgba(255, 255, 255, 0.85); 
  
  /* Размываем то, что находится ПОД карточкой */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* Для поддержки Safari */

  /* 3. ГРАНИЦЫ И ТЕНИ */
  border-radius: 24px;
  /* Светлая тонкая граница создает эффект кромки стекла */
  border: 1px solid rgba(255, 255, 255, 0.4);
  
  /* Глубокая, но мягкая тень, чтобы карточка "оторвалась" от льда */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  
  /* Плавное появление */
  animation: fadeIn 0.8s ease-out;
}

/* 4. НАВИГАЦИЯ ВНУТРИ КАРТОЧКИ */
nav {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav a {
  text-decoration: none;
  font-weight: 700;
  color: #1e293b; /* Темный текст для контраста */
  padding: 8px 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

/* Красивая подсветка активной ссылки */
nav a.router-link-active {
  background: var(--p-primary-color);
  color: white;
  box-shadow: 0 4px 12px var(--p-primary-color-transparent);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Адаптив для телефонов */
@media (max-width: 768px) {
  .app-layout {
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 16px;
  }
}
</style>