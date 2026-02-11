import { ref } from 'vue';
import api from '@/api /apiClient';
import type { NhlResult } from '../types/nhlResults';

export function useNhlStats() {
  const stats = ref<NhlResult | null>(null);
  const error = ref('');
  const isLoading = ref(false);

  const fetchStats = async () => {
    isLoading.value = true;
    error.value = '';
    
    try {
      const response = await api.get(`/api/teams/nhl-stats-sync`);

      if (response.data && response.data.data) {
        stats.value = response.data.data;
      } else {
        stats.value = response.data;
      }
      
    } catch (err: any) {
      error.value = err.message || 'Ошибка загрузки данных';
    } finally {
      isLoading.value = false;
    }
  };

  return {
    stats,
    error,
    isLoading,
    fetchStats
  };
}