<script setup lang="ts">
import ChannelsSection from '@components/channel/ChannelsSection.vue';
</script>

<template>
  <div class="channels-container">
    <div class="scrollbar-hack">
      <ChannelsSection v-for=" in 1"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.channels-container {
  //width: 100%;
  width: fit-content;
  height: 100%;
  max-height: 100vh;

  overflow-y: scroll;
  overflow-x: hidden;
  direction: rtl;

  display: grid;
  gap: 8px;

  padding-top: 0px;
  padding-left: 16px;
  padding-right: 0px;
  padding-bottom: 0px;

  //background-color: rgb(22, 22, 22);

  scrollbar-color: rgb(83, 83, 83) rgb(0, 0, 0, 0);
  //scrollbar-width: none;

  scrollbar-color: rgb(83, 83, 83) rgb(0, 0, 0, 0);
  scrollbar-width: none;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;

  animation: .3s ease-out 0s 1 slideInFromBottom;
  animation-fill-mode: both;
  animation-delay: .3s;
}
.scrollbar-hack {
  //direction: ltr;

  display: grid;
  gap: 8px;

}
.server {
  width: 42px;
  height: 42px;

  border-radius: 50%;
  background-color: gray;

  scroll-snap-align: start;
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>