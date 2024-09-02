<script setup lang="ts">
import AddButton from '@components/chat/editor/AddButton.vue';
import ChatMessage from '@components/chat/ChatMessage.vue';
import VocalProfile from '@components/icons/VocalProfile.vue';

import TestIcon from '@components/icons/TestIcon.vue';
import TextIcon from '@components/icons/TextIcon.vue';
import ImageIcon from '@components/icons/ImageIcon.vue';

</script>

<template>
  <input type="text" name="name" placeholder="message #mission-briefings">
</template>

<style scoped lang="scss">
input {
  width: 100%;

  appearance: none;
  outline: none;
  border: none;
  box-shadow: none;
  background-color: transparent;
  
  color: white;
}
input:focus {
  appearance: none;
  outline: none;
  border: none;
  box-shadow: none;
  background-color: transparent;

  color: white;
}
</style>