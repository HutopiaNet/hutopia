<script setup lang="ts">
</script>

<template>
  <!--div class="server-banner-container">
    <img class="banner" src="@images/template/ultrawide.jpg" alt="propic">
  </div-->

  <div class="server-banner">
    <img class="banner" src="@images/template/ultrawide.jpg" alt="propic">
  </div>
</template>

<style scoped lang="scss">
/*
.server-banner-container {
  width: 100%;
  height: 230px;
}
.server-banner-container img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}
*/
.server-banner {
  z-index: -10;

  width: 100%;
  height: 280px;

  position: fixed;
  //top: 156px;
  //left: 952px;
  //transform: translate(-50%, -50%);
}
.server-banner img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  animation: .3s ease-out 0s 1 imageSlide;
  animation-fill-mode: both;
  animation-delay: .1s;
}
.server-banner::after {
  content: '';

  position: absolute;
  z-index: 1;

  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;

  background-image: linear-gradient(transparent, rgba(23, 23, 23, 75%), rgb(23, 23, 23));

  //animation: .3s ease-out 0s 1 appearFromBottom;
  //animation-fill-mode: both;
  //animation-delay: .6s;
}

@keyframes imageSlide {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes appearFromBottom {
  0% {
    background-image: linear-gradient(rgb(23, 23, 23), rgb(23, 23, 23), rgb(23, 23, 23));
  }
  100% {
    background-image: linear-gradient(transparent, rgba(23, 23, 23, 75%), rgb(23, 23, 23));
  }
}
</style>