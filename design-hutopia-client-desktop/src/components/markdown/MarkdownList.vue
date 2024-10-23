<script setup lang="ts">
</script>

<template>
  <div class="list">
    <div class="bar"/>
    <div class="content">
      <span>ciao</span>
      <span>ciao</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  justify-content: flex-start;
  gap: 4px;
}
.bar {
  width: 6px;
  background-color: rgba(109, 109, 109, 0.26);
}
.content {
  display: flex;
  flex-direction: column;
}
</style>