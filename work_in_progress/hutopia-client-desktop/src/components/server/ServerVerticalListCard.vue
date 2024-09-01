<script setup lang="ts">
</script>

<template>
  <div class="servers-container">
    <!--div class="scrollbar-hack"-->
      <div class="server" v-for=" in 50"/>
    <!--/div-->
  </div>
</template>

<style scoped lang="scss">
.servers-container {
  width: 100%;
  max-width: fit-content;
  max-height: 100vh;

  overflow-y: scroll;
  overflow-x: hidden;
  direction: rtl;

  display: grid;
  gap: 8px;

  padding-top: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 6px;

  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: rgb(36, 36, 36);

  background-color: rgb(22, 22, 22);

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