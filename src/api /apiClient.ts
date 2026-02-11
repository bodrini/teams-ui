import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. Перехватчики (Interceptors) — это "фильтры" для запросов
// Сюда мы будем добавлять Токены, Логирование или обработку ошибок

// Перехватчик ответов (Response)
apiClient.interceptors.response.use(
  (response) => {
    // Если всё ок — просто возвращаем ответ
    return response;
  },
  (error) => {
    // Если ошибка — логируем её красиво в консоль
    console.error('🔥 API Error:', error.response?.data?.message || error.message);
    
    // Здесь можно добавить логику:
    // if (error.response.status === 401) { ...отправить на логин... }

    return Promise.reject(error);
  }
);

export default apiClient;