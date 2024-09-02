<script setup lang="ts">
import ChatMessageContent from '@components/backup/content/ChatMessageContent.vue';
import ProfileName from '@components/backup/ProfileName.vue';
import ProfilePicture from '@components/backup/ProfilePicture.vue';
import ChatMessageImageGallery from './content/ChatMessageImageGallery.vue';

const props = defineProps({
  messages: String[3]
});
</script>

<template>
  <div class="right">
    <div class="bubble">
      <div class="info">
      <p class="message-time">Today at 8:32 PM</p>
      <div class="message-account">
          <p class="profile-name">xGab0</p>
          <ProfilePicture/>
      </div>
      </div>

      <div class="message">
      <!--div class="glossy-element"/-->
      <p>{{messages}}</p>
      <ChatMessageImageGallery v-if="Math.random() < 0.3"/>
      <!--p>
          Hey, what's all the hype about Nebula Nexus?
          Is it really as good as they say? I'm looking for a new game to dive into it.
          
          Oh, you'll love it! The combat mechanics are smooth, and the multiplayer mode is epic. 
          Plus, you get to customize your own spaceship!

          Give it an install, and join our group, we'll wait for you.
      </p-->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.right {
  display: flex;
  justify-content: end;
}
.bubble {
  width: fit-content;
  max-width: 80%;
  min-width: 20%;

  scroll-snap-align: start;
}

.message-account {
  display: flex;
  gap: 6px;
}
.message-time {
  font-size: 13px;
}

.profile-name {
  font-size: 15px;
  font-weight: bold;

  color: rgb(223, 30, 100);
}

.info {
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  justify-content: space-between;
}

.picture {
  margin-bottom: -30px;
}

.message {
  width: 100%;

  //padding: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 16px;

  border-radius: 6px;

  background-color: rgb(67, 67, 67);
}
.message p {
  //width: max-content;
  //white-space: pre-wrap;
  overflow-wrap: break-word;

  color: #cfcfcf;
}

.glossy-element {
  position: absolute;
  z-index: -1;

  width: 100%;
  height: 50px;

  //top: 0;
  //bottom: 0;
  left: 0;
  right: 0;

  backdrop-filter: blur(10px) saturate(150%);
  background-color: rgb(252, 5, 5);
}
</style>