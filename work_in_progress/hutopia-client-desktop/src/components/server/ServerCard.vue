<script setup lang="ts">
import ChannelsCard from '@components/channel/ChannelsCard.vue';

import TestIcon from '@components/icons/TestIcon.vue';
</script>

<template>
  <div class="server-card-container">
    <div class="upper-section">
      <div class="title">
        <p>Shadow Government</p>
      </div>
      <div class="icons">
        <TestIcon/>
        <TestIcon/>
        <TestIcon/>
        <TestIcon/>
      </div>
    </div>
    <ChannelsCard/>
  </div>
</template>

<style scoped lang="scss">
.server-card-container {
  width: 240px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 0px;
}
.upper-section {
  height: 360px;

  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 24px;

  padding-left: 24px;
  padding-right: 24px;
}
.title {
  align-items: flex-start;
}
.title p {
  font-size: 26px;
  font-weight: 400;

  color: white;

  animation: .3s ease-out 0s 1 appearFromTop;
  animation-fill-mode: both;
  animation-delay: .3s;
}
.icons {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
}
.icon {
  animation: .3s ease-out 0s 1 appearFromTop;
  animation-fill-mode: both;
  animation-delay: .3s;
}

@keyframes appearFromTop {
  0% {
    transform: translateY(-20%);
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