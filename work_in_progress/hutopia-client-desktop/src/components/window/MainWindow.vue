<script setup lang="ts">
import ServerHorizontalListCard from '@components/server/ServerHorizontalListCard.vue';

import SettingsView from '@views/settings/SettingsView.vue';
import SettingsPage from '@components/settings/SettingsPage.vue';
</script>

<template>
  <div class="main-section">
    <div class="main-window slideInFromBottom">
      <!--RouterLink :to="{ name: 'settings'}">
        Settings
      </RouterLink-->
      <!--RouterView-->
      <SettingsView/>
    </div>

    <ServerHorizontalListCard/>
  </div>
</template>

<style scoped lang="scss">
.main-section {
  width: 1200px;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  //padding-top: 50px;
  //padding-bottom: 50px;

  //background: linear-gradient(0deg, rgb(22, 22, 22) 70%, rgba(0, 0, 0, 0) 80%);
}
.main-window {
  width: 100%;
  height: 90%;

  transform: translateY(40px);

  border-radius: 7px;
  border-color: rgb(50, 50, 50);
  border-width: 1px;
  border-style: solid;

  background-color: rgb(12, 12, 12);
}
/*
.main-window:before {
  content: '';

  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100%;

  backdrop-filter: blur(10px) saturate(150%);
  background-color: rgba(40, 40, 40, 0.95);
}
*/
.slideInFromBottom {
  animation: .4s ease-out 0s 1 slideInFromBottom;
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(300%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>