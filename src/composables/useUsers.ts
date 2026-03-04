import { ref, computed } from 'vue';
import apiClient from '@/api/apiClient';
import { IUser } from '../types/user';

export function useUsers() {
  const users = ref<IUser[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const searchQuery = ref<string>(''); // Новая реактивная переменная для поиска

  const fetchUsers = async () => {
    loading.value = true;
    error.value = null;
    try {
      // Обновление URL на полный абсолютный путь
      const response = await apiClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      users.value = response.data;
    } catch (e: any) {
      error.value = e.message || 'Failed to fetch users';
      console.error('Error fetching users:', e);
    } finally {
      loading.value = false;
    }
  };

  // Computed свойство для фильтрации пользователей
  const filteredUsers = computed(() => {
    if (!searchQuery.value) {
      return users.value;
    }
    const lowerCaseQuery = searchQuery.value.toLowerCase();
    return users.value.filter(user =>
      user.name.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return {
    users,
    loading,
    error,
    fetchUsers,
    searchQuery, // Экспорт searchQuery
    filteredUsers, // Экспорт filteredUsers
  };
}