<template>
  <div class="app-container">
    <header>
      <a-button type="primary">新增</a-button>
    </header>
    <main>
      <a-table :columns="columns" :data-source="dataSource" bordered>
      </a-table>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const dataSource = ref()
const columns = {}



</script>