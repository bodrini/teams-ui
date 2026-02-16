<template>
  <div class="stats-view">
    <h1>Statistics</h1>
    <table>
      <thead>
        <tr>
          <!-- Table headers will go here -->
        </tr>
      </thead>
      <tbody>
        <!-- Table rows will go here -->
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
// Script logic will go here
</script>

<style scoped>
.stats-view {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  color: #555;
}
</style>