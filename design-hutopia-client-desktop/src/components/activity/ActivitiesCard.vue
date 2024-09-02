<script setup lang="ts">
import ChannelsCard from '@components/channel/ChannelsCard.vue';

import TestIcon from '@components/TestIcon.vue';
import ProfilePropic from '../profile/ProfilePropic.vue';

import IdentityPropic from '@components/identity/IdentityPropic.vue';
</script>

<template>
  <div class="activities-card-container">
    <div class="games-section">
      <div class="game">
        <p>Minecraft</p>
        <img class="image" src="@images/template/wallpaper-games/minecraft.png" alt="propic">
      </div>

      <div class="game">
        <p>Warframe</p>
        <img class="image" src="@images/template/wallpaper-games/warframe.jpg" alt="propic">
      </div>
    </div>

    <div class="identities-container">
      <div class="identity" v-for=" in 20">
        <IdentityPropic :statusIcon="true"/>
        <p class="name">xGab0</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (min-width: 0px) and (max-width: 1000px) {
  .activities-card-container {
    display: none;
  }
}

.activities-card-container {
  width: 240px;
  //width: fit-content;
  height: 100vh;

  padding-top: 68px;
  //padding-right: 16px;

  display: flex;
  flex-direction: column;
  gap: 42px;
}
.games-section {
  height: 280px;

  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 24px;

  //padding-left: 24px;
  padding-right: 24px;
}
.game {
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 300px;

  align-items: flex-start;

  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  box-shadow: 
    rgba(23, 23, 23, 0.3) 0px 1px 2px 0px,
    rgba(23, 23, 23, 0.15) 0px 1px 3px 1px;

  animation: .3s ease-out 0s 1 slideInFromRight;
  animation-fill-mode: both;
  animation-delay: .3s;
}
.game::before {
  content: '';

  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100%;

  background-image: linear-gradient(to top, rgba(40, 37, 65, 0.85), transparent, transparent);
}
.game p {
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;

  text-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
.game img {
  position: absolute;
  z-index: -2;
  top: 0;

  width: 100%;
  height: 100%;
}



.identities-container {
  width: 100%;
  height: 100%;
  max-height: 100vh;

  overflow-y: scroll;
  overflow-x: hidden;
  //direction: rtl;

  display: grid;
  gap: 8px;

  padding-top: 0px;
  padding-left: 18px;
  padding-right: 0px;
  padding-bottom: 0px;

  background-color: rgb(22, 22, 22);

  scrollbar-color: rgb(83, 83, 83) rgb(0, 0, 0, 0);
  scrollbar-width: none;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;

  animation: .3s ease-out 0s 1 slideInFromBottom;
  animation-fill-mode: both;
  animation-delay: .3s;
}
.identity {
  padding-left: 4px;

  display: flex;
  gap: 12px;
  align-items: center;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.identity:hover {
  background-color: rgba(255, 255, 255, 6%);
}
.identity .profile-propic {
  width: 42px;
  height: 42px;
}
.propic {
  width: 42px;
  height: 42px;

  border-radius: 50%;
  background-color: gray;

  scroll-snap-align: start;
}
.name {

}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;

    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  100% {
    transform: translateX(0);
    opacity: 1;

    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
}
</style>