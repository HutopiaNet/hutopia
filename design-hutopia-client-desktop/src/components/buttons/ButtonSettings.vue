<script setup lang="ts">
import IconSettings from '../icons/IconSettings.vue';

</script>

<template>
  <div class="button settings">
    <IconSettings
      fill="transparent"
      stroke="#b04040"
      :strokeWidth="2"
      class="icon settings"
    />
  </div>
</template>

<style scoped lang="scss">
.button.settings {
  height: fit-content;

  border-radius: 4px;
  background-color: #772b2be1;

  cursor: pointer;

  &:hover {
    background-color: #691010;
  }

  .icon.settings {
    height: 14px;
  }
}
</style>