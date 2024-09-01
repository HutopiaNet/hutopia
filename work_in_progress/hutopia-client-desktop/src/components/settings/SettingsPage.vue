<script setup lang="ts">
import SettingsPage from '@components/settings/SettingsPage.vue';
import SettingSection from '@components/settings/SettingSection.vue';

import TestIcon from '@components/icons/TestIcon.vue';
</script>

<template>
  <div class="settings-section">
    <div class="sidebar">
      <SettingSection v-for=" in 6"/>
    </div>

    <div class="body">
    </div>
  </div>
</template>

<style scoped lang="scss">
.settings-section {
  width: 100%;
  height: 100%;

  padding: 16px;

  display: flex;
  gap: 1px;

  border-radius: 7px;
}

.sidebar {
  overflow-y: scroll;
  overflow-x: hidden;

  width: 230px;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 36px;

  background-color: rgb(26, 37, 26);
}
.sidebar .section {
  width: 100%;
}
.sidebar .section .title {
  color: white;
}
.sidebar .section .page-container {
  display: grid;
  gap: 6px;
}
.sidebar .section .page-container .page {
  width: 100%;

  display: flex;
  align-items: center;
}

.body {
  width: 100%;
  height: 100%;

  background-color: rgb(26, 37, 26);
}
</style>