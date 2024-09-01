<script setup lang="ts">
import IdentityPropic from '@components/identity/IdentityPropic.vue';

import TestIcon from '@components/icons/TestIcon.vue';
</script>

<template>
  <div class="channel">
    <div class="title">
      <!--img class="icon" src="@icons/hashtag-icon.svg" alt="icon"/-->
      <TestIcon/>
      <p>channel name</p>
    </div>
    <div class="clients">
      <div class="client" v-for=" in 3">
        <IdentityPropic :statusIcon="false"/>
        <p>xGab0</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
p {
  color: white;
}

.icon {
  width: 30px;
}
.channel {
  width: 100%;

  pointer-events: none;

  //padding-top: 4px;
  //padding-bottom: 4px;
  //padding-left: 12px;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.title {
  pointer-events: auto;

  display: flex;
  align-items: center;
  gap: 0px;

  //padding-top: 4px;
  //padding-bottom: 4px;
}
.title p {
  font-size: 15px;
  font-weight: 300;
}

.clients {
  border: 16px;
}
.client {
  pointer-events: visible;

  display: flex;
  align-items: center;
  gap: 10px;

  padding-left: 4px;

  //background: linear-gradient(90deg, rgba(42, 42, 42, 1) 0%, rgba(228, 0, 0, 1) 100%);
  //transition: 1s background-color ease-in;
}
.client p {
  font-size: 14px;
}

.client:hover {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  background: linear-gradient(90deg, rgba(42, 42, 42, 1) 0%, rgba(36, 36, 36, 1) 100%);
}
</style>