<script setup lang="ts">
import { ChildData } from '@/scripts/HtmlParser';
import { defineProps, PropType } from 'vue';

// Accetta il nodo come prop
const props = defineProps<{
  node: ChildData;
}>();
</script>

<template>
  <div class="node" :style="{ marginLeft: '2ch' }">
    <div>
      <span class="bound">&lt;</span>
      <span class="type">{{ node.tag }}</span>
      <span class="bound">&gt;</span>
      <br />
      {{ node.content }}
      <!--strong>Content:</strong> {{ node.content }}-->
    </div>
    <div v-if="node.children.length > 0" class="children">
      <RenderNode
        v-for="(child, index) in node.children"
        :key="index"
        :node="child"
      />
    </div>
    <span class="bound">&lt;/</span>
      <span class="type">{{ node.tag }}</span>
      <span class="bound">&gt;</span>
  </div>
</template>

<style scoped lang="scss">
/* Stili per migliorare la leggibilità della struttura annidata */
.node {
  margin-left: 2ch;
}

.children {
  //margin-left: 2ch;
}

.bound {
  color: white;
}
.type {
  color: green;
}
</style>