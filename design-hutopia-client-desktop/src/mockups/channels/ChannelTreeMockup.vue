<script setup lang="ts">
import ChannelTree from './ChannelTree.vue';

</script>

<template>
  <div class="channel-tree-mockup">
    <ChannelTree/>
  </div>
</template>

<style scoped lang="scss">
.channel-tree-mockup {
  height: 80%;

  padding: 20px;

  border-radius: 7px;
  border-color: rgba(255, 255, 255, 0.048);
  border-width: 2px;
  border-style: solid;

  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.4);

  background-color: rgba(23, 23, 23, 0.9);
  backdrop-filter: blur(50px) contrast(150%);
}
</style>