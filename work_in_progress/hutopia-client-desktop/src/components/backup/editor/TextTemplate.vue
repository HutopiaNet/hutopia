<script setup lang="ts">
import AddButton from '@components/chat/editor/AddButton.vue';
import ChatMessage from '@components/chat/ChatMessage.vue';
import VocalProfile from '@components/icons/VocalProfile.vue';

import TestIcon from '@components/icons/TestIcon.vue';
import TextIcon from '@components/icons/TextIcon.vue';
import ImageIcon from '@components/icons/ImageIcon.vue';

</script>

<template>
  <div class="text-template">
    <AddButton/>

    <div class="horizontal">
      <AddButton/>
      <!--input type="text" name="name" placeholder="message #mission-briefings"-->
      <textarea name="Text1" cols="40" rows="5" placeholder="message #mission-briefings"></textarea>
      <AddButton/>
    </div>

    <AddButton/>
  </div>
</template>

<style scoped lang="scss">
.text-template {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 12px;
}
.text-template .horizontal {
  width: 100%;

  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
}
.text-template .add-button {
  width: 150px;
  height: 20px;
}

textarea {
  width: 100%;

  resize: none;
  appearance: none;
  outline: none;
  border: none;
  box-shadow: none;
  background-color: transparent;
  
  color: white;

  scrollbar-color: rgb(83, 83, 83) rgb(0, 0, 0, 0);
}
textarea:focus {
  appearance: none;
  outline: none;
  border: none;
  box-shadow: none;
  background-color: transparent;

  color: white;
}


/*
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
*/
</style>