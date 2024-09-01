<script setup lang="ts">
import AddIcon from '@components/icons/AddIcon.vue';
</script>

<template>
  <div class="add-button">
    <AddIcon/>
  </div>
</template>

<style scoped lang="scss">
.icon {
  width: 26px;
  height: 26px;
}
.add-button {
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 7px;

  text-align: center;

  background-color: rgb(130, 130, 130);
}
</style>