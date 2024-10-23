<script setup lang="ts">
import AdminIcon from '../icon/AdminIcon.vue';

const props = defineProps<{
  name: string,
  iconName: string
}>()

console.log(`@/assets/icons/${props.iconName}.svg`);
</script>

<template>
  <div class="role-tag">
    <AdminIcon />
    <span>{{ name }}</span>
  </div>
</template>

<style scoped lang="scss">
.role-tag {
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 4px;

  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;

  border: rgba(255, 215, 0, 0.17) solid 2px;
  border-radius: 7px;
  
  background-color: rgba(255, 208, 25, 0.04);

  img {
    width: 16px;
  }

  span {
    //font-size: 14px;
    //font-weight: 600;

    font-size: 12px;
    font-weight: 700;

    color: rgb(196, 194, 118);
  }
}
</style>