<template>
  <div class="container mx-auto p-4 sm:p-6 lg:p-8">
    <h1 class="text-4xl font-extrabold text-white mb-8 text-center">Users List</h1>

    <div class="mb-8">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search users by name or username..."
        class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
      />
    </div>

    <div v-if="loading" class="text-center text-blue-400 text-xl my-8">
      Loading users...
    </div>

    <div v-else-if="error" class="bg-red-600 text-white p-4 rounded-lg shadow-md my-8 text-center">
      Error: {{ error }}
    </div>

    <div v-else-if="filteredUsers.length === 0" class="text-center text-gray-400 text-xl my-8">
      No users found matching your search.
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="user in filteredUsers"
        :key="user.id"
        class="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
      >
        <h2 class="text-2xl font-bold text-blue-400 mb-2">{{ user.name }}</h2>
        <p class="text-gray-100 mb-1">
          <span class="font-semibold text-gray-400">Username:</span> {{ user.username }}
        </p>
        <p class="text-gray-100 mb-1">
          <span class="font-semibold text-gray-400">Email:</span> {{ user.email }}
        </p>
        <p class="text-gray-100 mb-1">
          <span class="font-semibold text-gray-400">Phone:</span> {{ user.phone }}
        </p>
        <p class="text-gray-100 mb-1">
          <span class="font-semibold text-gray-400">Website:</span>
          <a :href="`http://${user.website}`" target="_blank" class="text-blue-300 hover:underline">{{ user.website }}</a>
        </p>
        <div class="mt-4 pt-4 border-t border-gray-700">
          <h3 class="text-lg font-semibold text-gray-400 mb-2">Address:</h3>
          <p class="text-gray-100">{{ user.address.street }}, {{ user.address.suite }}</p>
          <p class="text-gray-100">{{ user.address.city }}, {{ user.address.zipcode }}</p>
        </div>
        <div class="mt-4 pt-4 border-t border-gray-700">
          <h3 class="text-lg font-semibold text-gray-400 mb-2">Company:</h3>
          <p class="text-gray-100 font-semibold">{{ user.company.name }}</p>
          <p class="text-gray-100 text-sm italic">"{{ user.company.catchPhrase }}"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useUsers } from '@/composables/useUsers';

const { users, loading, error, fetchUsers } = useUsers();

const searchQuery = ref('');

const filteredUsers = computed(() => {
  if (!searchQuery.value) {
    return users.value;
  }
  const query = searchQuery.value.toLowerCase();
  return users.value.filter(user =>
    user.name.toLowerCase().includes(query) ||
    user.username.toLowerCase().includes(query)
  );
});

onMounted(() => {
  fetchUsers();
});
</script>

<style scoped>
/* No specific scoped styles needed, Tailwind handles most of it */
</style>