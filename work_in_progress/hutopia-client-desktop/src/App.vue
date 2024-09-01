<script setup lang="ts">
import Window from '@components/Window.vue';
import ViewPort from '@components/ViewPort.vue';
import ProfileCard from './components/profile/ProfileCard.vue';
</script>

<template>
  <ViewPort/>
  <!--ProfileCard/-->
  <!--div class="prova"></div-->
</template>

<style scoped lang="scss">
#app {
  margin: 0;
  display: flex;
}
body {
  margin: 0;
}

.prova {
  width: 300px;
  height: 700px;

  background-color: rgb(22 22 22);
  box-shadow: rgba(0, 0, 0, 1) 0px 5px 15px;
}
</style>