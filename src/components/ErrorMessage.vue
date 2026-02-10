<script setup lang="ts">
// Компонент принимает только текст ошибки
defineProps<{
  message: string;
}>();
</script>

<template>
  <div v-if="message" class="error-alert">
    <span class="icon">⚠️</span>
    <span class="text">{{ message }}</span>
  </div>
</template>

<style scoped>
.error-alert {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  background-color: #fef2f2; /* Очень светло-красный */
  border: 1px solid #ef4444; /* Красная граница */
  color: #b91c1c; /* Темно-красный текст */
  
  padding: 12px 20px;
  margin: 20px auto; /* Центрируем */
  border-radius: 8px;
  max-width: 400px;
  
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  font-weight: 500;
  animation: shake 0.5s ease-in-out;
}

/* Небольшая анимация тряски для привлечения внимания */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
</style>