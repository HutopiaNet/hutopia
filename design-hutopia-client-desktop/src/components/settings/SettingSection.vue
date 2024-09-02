<script setup lang="ts">
import SettingsPage from '@components/settings/SettingsPage.vue';

import TestIcon from '@components/icons/TestIcon.vue';
</script>

<template>
  <div class="section">
    <p class="title">Pagina sezione</p>
    <div class="page-container">
      <div class="page" v-for=" in 4">
        <TestIcon/>
        <p>impostazione</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  width: 100%;
}
.section .title {
  margin-bottom: 6px;

  font-size: 14px;
  color: white;
}
.section .page-container {
  display: grid;
  gap: 6px;
}
.section .page-container .page {
  width: 100%;

  display: flex;
  align-items: center;

  padding-left: 4px;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.section .page-container .page:hover {
  background-color: rgba(255, 255, 255, 6%);
}
.section .page-container p {
  padding: 4px;
}
</style>