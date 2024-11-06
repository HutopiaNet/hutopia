<script setup lang="ts">
import { ChildData } from '@/scripts/HtmlParser';
import { defineProps, PropType } from 'vue';
import RenderNode from './RenderNode.vue';

// Accetta il nodo come prop
const props = defineProps<{
  node: ChildData;
}>();
</script>

<template>
  <div class="elements-tree">
    <p>Node View</p>
    <RenderNode v-if="node != null" :node />
  </div>
</template>

<style scoped lang="scss">
.elements-tree {
  height: 90%;
  padding: 10px;

  border-radius: 7px;
  border-color: rgba(255, 255, 255, 0.048);
  border-width: 2px;
  border-style: solid;

  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.4);

  background-color: rgba(23, 23, 23, 0.9);
  backdrop-filter: blur(50px) contrast(150%);
}
</style>