<script setup lang="ts">
import IconEdit from '../icons/IconEdit.vue';
import IconTrash from '../icons/IconTrash.vue';

</script>

<template>
  <div class="button edit">
    <IconEdit
      fill="transparent"
      stroke="#b04040"
      :strokeWidth="2"
      class="icon edit"
    />
  </div>
</template>

<style scoped lang="scss">
.button.edit {
  height: fit-content;

  border-radius: 4px;
  background-color: #2b4f77e1;

  cursor: pointer;

  &:hover {
    background-color: #103a69;
  }

  .icon.edit {
    height: 14px;
  }
}
</style>