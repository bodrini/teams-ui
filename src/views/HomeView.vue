<script setup lang="ts">
import { onMounted } from 'vue';

// Импортируем компоненты (Кирпичики)
import AppHeader from '@/components/AppHeader.vue';
import ErrorMessage from '@/components/ErrorMessage.vue'
import NhlResults from '@/components/NhlResults.vue'; 

// Импортируем логику (Мозг)
import { useNhlStats } from '@/composables/useNhlStats';

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
/* Основной шрифт подключаем глобально, если еще не подключен.
   Здесь оставляем фолбэки. */
.app-layout {
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  text-align: center;

  /* Размеры и отступы */
  max-width: 620px; /* Чуть шире, чтобы компенсировать паддинги */
  width: 95%; /* Чтобы на мобилках не прилипало к краям */
  margin: 40px auto; /* Больше воздуха сверху и снизу */
  padding: 35px;

  /* --- СЛОЖНАЯ ГРАФИКА --- */

  /* 1. Скругление углов */
  border-radius: 24px;

  /* 2. Фон: Многослойный градиент (Mesh Gradient) */
  /* Базовый белый цвет */
  background-color: #ffffff;
  /* Добавляем "ледяные" блики по углам с помощью радиальных градиентов */
  background-image:
    radial-gradient(circle at 0% 0%, rgba(220, 235, 255, 0.5) 0%, transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(230, 240, 255, 0.4) 0%, transparent 50%);

  /* 3. Граница: Полупрозрачная, чтобы подчеркнуть "стекло" */
  border: 1px solid rgba(255, 255, 255, 0.8);

  /* 4. Тени: Комплексная многоуровневая тень для глубокого объема */
  box-shadow:
    /* Маленькая тень под объектом */
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    /* Средняя тень для отделения от фона */
    0 10px 15px -3px rgba(0, 0, 0, 0.05),
    /* Большая, размытая цветная тень для "свечения" */
    0 25px 50px -12px rgba(56, 123, 232, 0.15);

  /* Небольшая анимация появления при загрузке */
  animation: float-in 0.6s ease-out;
}

/* Анимация плавного всплытия */
@keyframes float-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>