<script setup lang="ts">
import CollapsableLayout from '@/layouts/CollapsableLayout.vue';
import ChatChannel from './ChatChannel.vue';
import { ref } from 'vue';
import ChannelSection from './ChannelSection.vue';

const collapsed = ref<boolean>(false);
</script>

<template>
  <div class="chat-tree">
    <ChannelSection/>
    <ChannelSection/>
  </div>
</template>

<style scoped lang="scss">
.chat-tree {

}
</style>