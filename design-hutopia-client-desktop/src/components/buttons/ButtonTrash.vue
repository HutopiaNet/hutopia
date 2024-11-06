<script setup lang="ts">
import IconTrash from '../icons/IconTrash.vue';

</script>

<template>
  <div class="button trash">
    <IconTrash
      fill="transparent"
      stroke="#b04040"
      :strokeWidth="2"
      class="icon trash"
    />
  </div>
</template>

<style scoped lang="scss">
.button.trash {
  height: fit-content;

  border-radius: 4px;
  background-color: #772b2be1;

  cursor: pointer;

  &:hover {
    background-color: #691010;
  }

  .icon.trash {
    height: 14px;
  }
}
</style>