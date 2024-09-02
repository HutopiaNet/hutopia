<script setup lang="ts">
</script>

<template>
  <svg class="profile-propic" viewBox="0 0 100% 100%" width="100%" height="100%">
    <defs>
      <pattern id="image" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 512 512">
        <image x="0%" y="0%" width="512" height="512" xlink:href="@images/template/wallpaper-games/cat.png"/>
      </pattern>

      <filter id="shadow">
        <feDropShadow dx="0.52" dy="0.4" stdDeviation="0.2" />
      </filter>
    </defs>

    <mask id="mask">
      <!-- Everything under a white pixel will be visible -->
      <circle cx="60" cy="108%" r="46" fill="white"/>
      <!--rect x="0" y="50%" width="100%" height="140%" fill="white" /-->

      <!-- Everything under a black pixel will be invisible -->
      <circle cx="100" cy="142%" r="16" fill="black" />
    </mask>

    <!-- Apply the mask on the circle to make an hole into it -->
    <circle id="sd" class="image sos" cx="60" cy="108%" r="46" fill="url(#image)" mask="url(#mask)"/>

    <!-- Online status -->
    <g>
      <svg class="profile-propic-status" viewBox="0 0 100% 100%" width="100%" height="100%">
        <circle class="online-status" cx="100" cy="142%" r="10" fill="green"/>
      </svg>
    </g>
  </svg>
</template>

<style scoped lang="scss">
svg { overflow: visible }

.profile-propic {
  //z-index: 1;
  //overflow: visible;

  width: 100px;
  height: 100px;

  //float: right;

  //position: absolute;
  //top: 50px;
  //left: 20px;

  //filter: drop-shadow(0px 2px 2px rgba(255, 0, 0, 1));
}
.profile-propic .image {
  overflow: visible;
  //filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.4));
}

.propic {
  width: 100px;
  height: 100px;

  position: absolute;
  top: 50px;
  left: 20px;

  border-radius: 50%;

  background-color: aquamarine;
}
.sos {
  overflow: visible;
  //filter: drop-shadow(3px 6px 1px rgba(0, 0, 0, 0.4));
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