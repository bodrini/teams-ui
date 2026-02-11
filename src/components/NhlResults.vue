<script setup lang="ts">
import { computed } from 'vue';
import type { NhlResult } from '@/types/nhlResults';

// Импорт UI компонентов
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';
import Skeleton from 'primevue/skeleton';

// 1. Объявляем props и сохраняем в переменную props
const props = defineProps<{
  stats: NhlResult | null;
}>();

// 2. Теперь props доступны внутри computed
const formattedDate = computed(() => {
  if (!props.stats?.game_date) return '';
  
  return new Date(props.stats.game_date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
});
</script>

<template>
  <Card v-if="stats" class="score-card">
    <template #title>
      <div class="header-content">
        <span>NHL Result</span>
        <span class="date-text">{{ formattedDate }}</span>
      </div>
    </template>

    <template #content>
      <div class="scoreboard">
        <div class="team-block">
          <span class="team-name">Islanders</span>
          <span class="score-number" :class="{ 'winner-text': stats.goals_Islanders > stats.goals_Enemy }">
            {{ stats.goals_Islanders }}
          </span>
        </div>

        <div class="vs-divider">VS</div>

        <div class="team-block">
          <span class="team-name">Opponent</span>
          <span class="score-number" :class="{ 'winner-text': stats.goals_Enemy > stats.goals_Islanders }">
            {{ stats.goals_Enemy }}
          </span>
        </div>
      </div>

      <Divider />

      <div class="status-wrapper">
        <Tag 
          :severity="stats.are_we_happy ? 'success' : 'danger'" 
          :value="stats.are_we_happy ? 'РУА ВЕРИМ' : 'РУА АУТ'" 
          class="large-tag"
          rounded
        />
      </div>
    </template>
  </Card>

  <Card v-else class="score-card">
    <template #content>
      <Skeleton width="100%" height="400px" />
    </template>
  </Card>
</template>

<style scoped>
.score-card {
  width: 100%;
  box-sizing: border-box;
  
  min-width: 300px; 
}

.header-content {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #888;
  text-transform: uppercase;
}

.scoreboard {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 0 20px; 
  margin: 30px 0;
}

.team-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.team-name {
  font-weight: 600;
  color: #555;
  margin-bottom: 5px;
}

.score-number {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  color: #ccc;
  transition: color 0.3s;
}

.winner-text {
  color: #2c3e50;
}

.vs-divider {
  font-weight: bold;
  color: #e0e0e0;
  margin: 0 10px;
}

.status-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}

.large-tag {
  font-size: 1rem;
  padding: 8px 24px;
}
</style>