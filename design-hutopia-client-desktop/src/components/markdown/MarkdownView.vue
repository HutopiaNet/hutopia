<script setup lang="ts">
import MarkdownList from './MarkdownList.vue';

</script>

<template>
  <div class="markdown-container">
    <MarkdownList/>
  </div>
</template>

<style scoped lang="scss">
.markdown-container {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: left;
  align-items: center;

  background-color: rgba(58, 58, 58, 0.14);
}
</style>