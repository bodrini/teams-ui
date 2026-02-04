<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import siteLogo from './assets/site-logo.png';

const teams = ref([]);
const fetchTeams = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/teams');
    teams.value = response.data;
  } catch (error) {
    console.error('Error fetching teams:', error);
  }
};

onMounted(() => {
  fetchTeams();
});
</script>

<template>
  <div class ="container">
    <header class="site-header">
      <img :src="siteLogo" alt="Логотип сайта" class="site-logo" />
      <h1>Sports Manager</h1>
    </header>
    <p v-if="teams.length === 0" class="loading">
      Загрузка команд...
    </p>
<table v-else class="teams-table">
        <thead>
          <tr>
            <th>Team ID</th>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in teams" :key="team.id">
            <td>{{ team.id }}</td>
            <td>{{ team.name }}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<style scoped>
/* .container — это обертка всего содержимого */
.container {
  max-width: 1500000px; /* Ограничиваем ширину, чтобы на широких экранах не разъезжалось */
  margin: 0 auto;   /* Магия: 0 сверху/снизу, auto по бокам = ЦЕНТР по горизонтали */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Красивые шрифты */
  padding: 20px;    /* Внутренний отступ от краев экрана */
  text-align: center; /* Весь текст внутри по умолчанию по центру */
}

/* Стилизуем заголовок h1 */
h1 {
  color: #FF0000;     /* Зеленый цвет Vue.js */
  margin-bottom: 30px; /* Отступ снизу до таблицы */
}

/* Текст "Загрузка..." */
.loading {
  font-size: 1.2rem; /* Шрифт чуть крупнее обычного */
  color: #666;       /* Темно-серый цвет */
}

/* Сама таблица */
.teams-table {
  width: 100%;        /* Растянуть на всю ширину контейнера */
  border-collapse: collapse; /* Убираем двойные границы между ячейками */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Легкая тень под таблицей */
}

/* Общие стили для ВСЕХ ячеек (и заголовков th, и обычных td) */
.teams-table th, .teams-table td {
  border: 1px solid #ddd; /* Тонкая серая рамка */
  padding: 12px;          /* Воздух внутри ячейки */
  text-align: left;       /* Текст внутри ячеек прижат влево */
}

/* Только для шапки таблицы (th) */
.teams-table th {
  background-color: #2c3e50; /* Темный фон */
  color: white;              /* Белый текст */
}

/* Эффект "Зебра": каждая четная строка чуть серая */
.teams-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* Эффект при наведении мыши на строку */
.teams-table tr:hover {
  background-color: #f1f1f1; /* Подсветка строки под курсором */
}
.site-logo {
  width: 60px;   /* Он покрупнее */
  height: 60px;
  object-fit: contain;
}
</style>
