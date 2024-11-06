<script setup lang="ts">
import IconImage from '../icons/IconImage.vue';

</script>

<template>
  <div class="button image">
    <IconImage
      fill="transparent"
      stroke="white"
      :strokeWidth="0"
      class="icon image"
    />
  </div>
</template>

<style scoped lang="scss">
.button.image {
  height: fit-content;

  border-radius: 4px;
  background-color: #31772be1;

  cursor: pointer;

  &:hover {
    background-color: #176910;
  }

  .icon.image {
    height: 14px;
  }
}
</style>