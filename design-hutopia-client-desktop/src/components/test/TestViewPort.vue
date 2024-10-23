<script setup lang="ts">
import MainWindow from '@components/window/MainWindow.vue';
import ServerBanner from '@components/server/ServerBanner.vue';
import TestScrollLayout from './TestScrollLayout.vue';
import ChatMockup from '@/mockups/chat/ChatMockup.vue';
</script>

<template>
  <div class="viewport">
    <ChatMockup/>
  </div>
</template>

<style scoped lang="scss">
.viewport {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("@/assets/images/template/wallpaper-games/minecraft.png");
  object-fit: contain;
}
</style>