<script setup lang="ts">
const props = defineProps<{
  collapsed: boolean
}>()
</script>

<template>
  <div class="layout-collapsable" :class="{ show: collapsed }">
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-collapsable {
  display: grid;
  grid-template-rows: 0fr;

  transition: 2.2s grid-template-rows ease-in-out;

  > div:not(.persistent) {
    overflow: hidden;

    // fix for chromium engine: without this the div will shrink
    // and expand when the state change, but we need the height
    // always fixed to the max size for the content.
    height: fit-content;
  }

  &.show {
    grid-template-rows: 1fr;
  }
}
</style>