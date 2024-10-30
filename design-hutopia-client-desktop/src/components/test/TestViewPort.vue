<script setup lang="ts">
import MainWindow from '@components/window/MainWindow.vue';
import ServerBanner from '@components/server/ServerBanner.vue';
import TestScrollLayout from './TestScrollLayout.vue';
import ChatMockup from '@/mockups/chat/ChatMockup.vue';
import ChannelTree from '@/mockups/channels/ChannelTree.vue';
import ChannelTreeMockup from '@/mockups/channels/ChannelTreeMockup.vue';
</script>

<template>
  <div class="viewport">
    <ChannelTreeMockup/>
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
  gap: 8px;

  background-image: url("@/assets/images/template/material-5.jpg");
  object-fit: contain;
}
</style>