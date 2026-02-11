<script setup lang="ts">
import { onMounted } from 'vue';
import NhlResults from '@/components/NhlResults.vue';
import { useNhlStats } from '@/composables/useNhlStats'; // Твой хук

// Достаем всё необходимое из хука
const { stats, error, isLoading, fetchStats } = useNhlStats();

onMounted(() => {
  fetchStats();
});
</script>

<template>
  <div class="home-view">
    <NhlResults :stats="stats" />
    
    <p v-if="error" class="error-text">{{ error }}</p>
  </div>
</template>

<style scoped>
.home-view {
  width: 100%; /* Растягиваемся на все 800px от App.vue */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-text {
  color: var(--p-red-500);
  margin-top: 1rem;
}
</style>