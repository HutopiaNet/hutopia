<script setup lang="ts">
interface Props {
  stroke?: string,
  strokeWidth?: number 
}

withDefaults(defineProps<Props>(), {
  stroke: "#000000",
  strokeWidth: 1.4
})
</script>

<template>
  <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g id="Edit / Text_Align_Left">
        <path id="Vector" d="M4 18H14M4 14H20M4 10H14M4 6H20" :stroke :stroke-width stroke-linecap="round" stroke-linejoin="round"></path>
      </g> 
    </g>
  </svg>
</template>

<style scoped lang="scss">
.icon {
  width: 16px;
  height: 16px;
}
</style>