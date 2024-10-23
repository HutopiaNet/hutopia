<script setup lang="ts">
</script>

<template>
  <div class="layout-stack">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.layout-stack {
  display: grid;
  grid-template-areas: "stack";

  & > * {
    grid-area: stack;
  }
}
</style>