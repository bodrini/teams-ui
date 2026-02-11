<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <div class="app-layout">
    <AppHeader />

    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/about">О проекте</RouterLink>
    </nav>

    <div class="page-container">
      <RouterView />
    </div>

  </div>
</template>

<style scoped>
.app-layout {
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

nav {
  margin: 20px 0;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

/* Стили для ссылок */
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

/* Vue автоматически добавляет этот класс активной ссылке */
nav a.router-link-active {
  color: #42b983; /* Зеленый Vue */
  border-bottom: 2px solid #42b983;
}
</style>