<script setup lang="ts">
const props = defineProps({
  statusIcon: Boolean
})
</script>

<template>
  <svg class="icon" width="100px" height="100px" viewBox="0 0 100 100">
    <defs>
      <pattern id="image" height="100%" width="100%">
        <image width="100%" height="100%" xlink:href="@images/template/wallpaper-games/cat.png"/>
      </pattern>
    </defs>

    <mask id="mask">
      <!-- Everything under a white pixel will be visible -->
      <circle cx="50%" cy="50%" r="46" fill="white"/>

      <!-- Everything under a black pixel will be invisible -->
      <circle v-if="statusIcon" cx="84%" cy="80%" r="16" fill="black" />
    </mask>

    <circle cx="50%" cy="50%" r="50%" fill="url(#image)" mask="url(#mask)"/>

    <g v-if="statusIcon">
      <circle class="online-status" cx="84%" cy="80%" r="10%" fill="green"/>
    </g>
  </svg>
</template>

<style scoped lang="scss">
.icon {
  width: 40px;
  height: 40px;
}

.online-status {
  fill: rgb(41, 199, 41);
  animation: pulse 1.5s infinite ease-in;
}

@keyframes pulse {
  from {
    stroke: green;
    stroke-width: 0;
    stroke-opacity: 1;
  }

  to {
    stroke: green;
    stroke-width: 7px;
    stroke-opacity: 0;
  }
}
</style>