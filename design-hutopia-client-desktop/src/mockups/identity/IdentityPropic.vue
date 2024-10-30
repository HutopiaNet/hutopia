<script setup lang="tsx">
</script>

<template>
  <div class="identity-propic">
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
  </div>
</template>

<style scoped lang="scss">
.identity-propic {
}
</style>