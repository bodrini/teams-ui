import { ref } from 'vue';
import axios from 'axios';
import type { NhlResult } from '../types/nhlResults';

export function useNhlStats() {
  // 1. Состояние (инкапсулировано внутри функции)
  const stats = ref<NhlResult | null>(null);
  const error = ref('');
  const isLoading = ref(false);

  // 2. Логика загрузки
  const fetchStats = async () => {
    isLoading.value = true;
    error.value = '';
    
    try {
      // URL теперь живет только здесь!
      const response = await axios.get('http://localhost:3000/api/teams/nhl-stats-sync');
      
      // Логика "Матрешки" тоже здесь. App.vue получит уже чистые данные.
      if (response.data && response.data.data) {
        stats.value = response.data.data;
      } else {
        stats.value = response.data;
      }
      
    } catch (err: any) {
      console.error('Ошибка в API:', err);
      error.value = err.message || 'Ошибка загрузки данных';
    } finally {
      isLoading.value = false;
    }
  };

  // 3. Возвращаем наружу только то, что нужно компонентам
  return {
    stats,
    error,
    isLoading,
    fetchStats
  };
}