<script setup lang="ts">
import Channel from '@components/channel/Channel.vue';
import ArrowIcon from '@components/icons/ArrowIcon.vue';
</script>

<template>
  <div class="channels-section">
    <div class="scrollbar-hack">
      <input class="dropdown" type="checkbox" id="dropdown" name="dropdown">
      <label class="for-dropdown" for="dropdown"><ArrowIcon/> Dropdown Menu</label>
      <div class="channel-container">
        <Channel v-for=" in 3"/> 
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.channels-section {
  width: 100%;
  margin-top: 40px;

  direction: ltr;
}

.icon {
  width: 12px;
  height: 12px;

  transition: all 200ms linear;
  transform: rotate(0deg);
}
[type="checkbox"]:checked, [type="checkbox"]:not(:checked) {
  width: 0;
  /*
  position: absolute;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
  */
}

.channel-container {
  overflow: hidden;

  //height: 0%;
  //max-height: 0%;

  margin-top: 4px;
  padding-left: 6px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  scrollbar-color: rgb(83, 83, 83) rgb(0, 0, 0, 0);
  scrollbar-width: none;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;

  transition: all 200ms linear;
  transition: max-height 0.25s ease-out;
}
.dropdown:checked + .for-dropdown {
  //transform: rotate(90deg);
  color: white;
}
.dropdown:checked + .for-dropdown .icon {
  transform: rotate(90deg);
  //color: red;
}
.dropdown:checked ~ .channel-container {
  //height: 100%;
  max-height: 100%;

  pointer-events: auto;

  transition: max-height 0.25s ease-out;
}
</style>