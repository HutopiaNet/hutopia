<script setup lang="ts">
import ChatMessageBubble from '@components/chat/ChatMessageBubble.vue';
import ProfilePicture from '@components/chat/ProfilePicture.vue';

</script>

<template>
  <section class="chat-message">
    <ProfilePicture/>
    <ChatMessageBubble/>
  </section>
</template>

<style scoped lang="scss">
.chat-message {
  width: fit-content;

  padding: 10px;

  display: flex;
  align-items: flex-end;
  gap: 10px;
}
</style>