<script setup lang="ts">
import ProfilePropic from './ProfilePropic.vue';

</script>

<template>
  <svg class="profile-banner" viewBox="0 0 100% 100%" width="100%" height="100%">
    <defs>
      <clipPath id="round-corner">
        <rect x="0" y="0" width="100%" height="110%" rx="7" ry="7"/>
      </clipPath>

      <pattern id="image" x="0" y="0" height="100%" width="100%">
        <image
          x="0" y="0" width="100%" height="100%"
          xlink:href="@images/template/wallpaper-games/howl-castle.jpg"
          preserveAspectRatio="xMinYMin slice"
          style="background-size: cover;"
        />
      </pattern>

      <filter id="shadow">
        <feDropShadow dx="0.52" dy="0.4" stdDeviation="0.2" />
      </filter>
    </defs>

    <mask id="mask">
      <!-- Everything under a white pixel will be visible -->
      <rect x="0" y="0" width="100%" height="100%" fill="white" />

      <!-- Everything under a black pixel will be invisible -->
      <circle cx="60" cy="108%" r="52" fill="black"/>
    </mask>

    <!-- Apply the mask on the rect to make an hole into it -->
    <rect
      class="dio" x="0" y="0" width="100%" height="100%" rx="0"
      fill="url(#image)" mask="url(#mask)" clip-path="url(#round-corner)"
    />
  
    <g class="child">
      <ProfilePropic/>
    </g>
  </svg>
</template>

<style scoped lang="scss">
.profile-banner {
  overflow: visible;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
}
.dio {
  //filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
}
.child {
  overflow: visible;
}
</style>