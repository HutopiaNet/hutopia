<script setup lang="ts">
</script>

<template>
  <div class="servers-container">
    <!--div class="layer"-->
      <div class="server" v-for=" in 50"/>
    <!--/div-->
  </div>
</template>

<style scoped lang="scss">
.servers-container {
  overflow-x: scroll;

  margin-bottom: 6px;

  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  gap: 6px;

  scrollbar-color: rgb(83, 83, 83) rgb(0, 0, 0, 0);
  scrollbar-width: none;

  .server {
    flex: 0 0 auto;
  }
}
.layer {
  display: flex;
}
.server {
  width: 42px;
  height: 42px;

  border-radius: 50%;
  background-color: gray;

  scroll-snap-align: start;

  transition: all 100ms;
}
.server:hover {
  width: 42px;
  height: 42px;

  margin-bottom: 8px;
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