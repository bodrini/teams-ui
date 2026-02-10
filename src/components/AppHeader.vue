<script setup lang="ts">
import siteLogo from '../assets/site-logo.png';
</script>

<template>
  <header class="header">
    <img :src="siteLogo" alt="Logo" class="logo" />
    <h1>Sports Manager</h1>
  </header>
</template>

<style scoped>
.header {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
}

h1 {
  font-size: 2rem;
  color: #2c3e50;
  margin: 0;
}
</style>