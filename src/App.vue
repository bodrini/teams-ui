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
  
  /* РЕГУЛИРУЕМ ШИРИНУ ТУТ */
  max-width: 800px; 
  width: 95%;
  margin: 4rem auto;
  padding: 2.5rem;

  /* Дизайн карточки */
  background: var(--p-surface-0);
  border: 1px solid var(--p-surface-200);
  border-radius: 24px;
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.1);
  
  /* Ледяной градиент */
  background-image: 
    radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.05) 0%, transparent 50%);
}

nav {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--p-surface-200);
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
  color: var(--p-text-color);
  opacity: 0.6;
}

nav a.router-link-active {
  opacity: 1;
  color: var(--p-primary-color);
  border-bottom: 2px solid var(--p-primary-color);
}
</style>