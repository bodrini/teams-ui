<script setup lang="ts">
import type { NhlResult } from '../types/nhlResults';

defineProps<{
  stats: NhlResult | null;
}>();
</script>

<template>
  <div v-if="stats" class="mini-widget">
    
    <div class="widget-header">
      Дата матча: {{ stats.game_date }}
    </div>

    <table class="score-table">
      <tr :class="{ 'winner-row': stats.goals_Islanders > stats.goals_Enemy }">
        <td class="team-name">Islanders</td>
        <td class="team-score">{{ stats.goals_Islanders }}</td>
      </tr>

      <tr :class="{ 'winner-row': stats.goals_Enemy > stats.goals_Islanders }">
        <td class="team-name">Opponent</td>
        <td class="team-score">{{ stats.goals_Enemy }}</td>
      </tr>
    </table>

    <div 
      class="status-bar" 
      :class="stats.are_we_happy ? 'bg-green' : 'bg-red'"
    >
      {{ stats.are_we_happy ? 'РУА ВЕРИМ' : 'РУА АУТ' }}
    </div>

  </div>

  <div v-else class="loading">
    Загрузка...
  </div>
</template>

<style scoped>
.mini-widget {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden; /* Чтобы углы не вылезали */
  max-width: 300px; /* Узкая табличка */
  margin: 0 auto;
  font-family: sans-serif;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.widget-header {
  background: #f4f4f4;
  padding: 8px;
  font-size: 0.85rem;
  color: #666;
  border-bottom: 1px solid #ddd;
}

.score-table {
  width: 100%;
  border-collapse: collapse;
}

.score-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
}

.team-name {
  text-align: left;
  font-weight: 500;
}

.team-score {
  text-align: right;
  font-weight: bold;
  font-size: 1.2rem;
}

/* Подсветка победителя жирным шрифтом */
.winner-row {
  background-color: #fafafa;
}
.winner-row .team-score {
  color: #000;
}

/* Полоска статуса внизу */
.status-bar {
  padding: 8px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.bg-green { background-color: #2ecc71; }
.bg-red   { background-color: #e74c3c; }

.loading {
  color: #999;
  padding: 20px;
}
</style>