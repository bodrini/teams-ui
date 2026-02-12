<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import AppHeader from '@/components/AppHeader.vue';

const route = useRoute();
const isWelcomePage = computed(() => route.path === '/');

</script>

<template>
  <div :class="['app-layout', { 'welcome-mode': isWelcomePage }]">
    
    <AppHeader v-if="!isWelcomePage" />

    <nav v-if="!isWelcomePage">
      <RouterLink to="/matches">Матчи</RouterLink>
      <RouterLink to="/about">Инфо</RouterLink>
    </nav>

    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped>
.app-layout {
  font-family: var(--p-font-family), sans-serif;
  text-align: center;
  max-width: 800px;
  width: 95%;
  margin: 4rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.85); 
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease; /* Плавный переход при смене фонов */
}

/* СПЕЦИАЛЬНЫЙ РЕЖИМ ДЛЯ WELCOME:
  Убираем "стекло" и тени, чтобы WelcomeView выглядел как чистый лендинг
*/
.welcome-mode {
  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  border: none;
  box-shadow: none;
}

nav {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav a {
  text-decoration: none;
  font-weight: 700;
  color: #1e293b;
  padding: 8px 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

nav a.router-link-active {
  background: var(--p-primary-color);
  color: white;
  box-shadow: 0 4px 12px var(--p-primary-color-transparent);
}

/* АНИМАЦИЯ ПЕРЕХОДА (Fade) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .app-layout {
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 16px;
  }
}
</style>