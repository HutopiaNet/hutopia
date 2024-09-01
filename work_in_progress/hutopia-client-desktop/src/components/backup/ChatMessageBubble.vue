<script setup lang="ts">
import ChatMessageContent from '@components/chat/content/ChatMessageContent.vue';
import ProfileName from '@components/chat/ProfileName.vue';
import ProfilePicture from '@components/chat/ProfilePicture.vue';

</script>

<template>
  <!--section class="chat-message-content">
    <p>Lauda</p>
    <p>example text</p>
  </section-->

  <div class="bubble left">
    <ProfileName/>
    <ChatMessageContent/>
  </div>
</template>

<style scoped lang="scss">
.chat-message-content {
  border-radius: 6px;
  background-color: rgb(54, 54, 54);
}

.bubble {
  --r: 1em;  /* the radius */
  --t: 1.5em; /* the size of the tail */

  padding: 10px;
  
  //max-width: 300px;
  //padding: 1em;
  border-inline: var(--t) solid #0000;
  border-radius: calc(var(--r) + var(--t))/var(--r);

  mask: 
    radial-gradient(100% 100% at
      var(--_p) 0,#0000 99%,#000 102%) 
      var(--_p) 100%/var(--t)
      var(--t) no-repeat,
      linear-gradient(#000 0 0) padding-box;

  //background: linear-gradient(135deg,#FE6D00,#1384C5) border-box;
  background-color: rgb(54, 54, 54);
  color: #fff;
}
.left {
  --_p: 0;
  border-bottom-left-radius: 0 0;
  place-self: start;
}

.glossy-element {
  position: absolute;
  z-index: -1;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  backdrop-filter: blur(10px) saturate(150%);
  background-color: rgba(40, 40, 40, 0.65);
}
</style>