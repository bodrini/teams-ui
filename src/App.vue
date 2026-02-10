<script setup lang="ts">
import { onMounted } from 'vue';

// Импортируем компоненты (Кирпичики)
import AppHeader from './components/AppHeader.vue';
import ErrorMessage from './components/ErrorMessage.vue'; // <--- НОВОЕ
import NhlResults from './components/NhlResults.vue'; 

// Импортируем логику (Мозг)
import { useNhlStats } from './composables/useNhlStats';

// Соединяем мозг и кирпичики
const { stats, error, fetchStats } = useNhlStats(); 

onMounted(() => {
  fetchStats();
});
</script>

<template>
  <div class="app-layout">
    
    <AppHeader />

    <ErrorMessage :message="error" />

    <NhlResults :stats="stats" />    
    
  </div>
</template>

<style scoped>
/* App.vue отвечает только за общую раскладку страницы */
.app-layout {
  font-family: 'Segoe UI', Roboto, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
</style>