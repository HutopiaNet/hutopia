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
      <g id="Edit / Text_Align_Justify">
        <path id="Vector" d="M20 18H4M20 14H4M20 10H4M20 6H4" :stroke :stroke-width stroke-linecap="round" stroke-linejoin="round"></path>
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