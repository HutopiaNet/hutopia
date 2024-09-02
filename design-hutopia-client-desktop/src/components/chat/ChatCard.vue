<script setup lang="ts">
import SimpleTemplate from '@components/backup/editor/SimpleTemplate.vue';
import ModernChatMessageBubble from '@components/backup/ModernChatMessageBubble.vue';
import ModernChatResponseBubble from '@components/backup/ModernChatResponseBubble.vue';

import TestIcon from '@components/icons/TestIcon.vue';
import PinIcon from '@components/icons/PinIcon.vue';


const messages = [
  `
  Hey, what's all the hype about Nebula Nexus?
  Is it really as good as they say? I'm looking for a new game to dive into it.
  
  Oh, you'll love it! The combat mechanics are smooth, and the multiplayer mode is epic. 
  Plus, you get to customize your own spaceship!

  Give it an install, and join our group, we'll wait for you.
  `,

  `
  It is with the greatest risk that I commit this recording. The codices within reveal the hidden weakness of your most feared enemy. My Creations. My Frames of War.
  `,

  `
  Esiste il bastone e la carota, ma con voi ci vuole la frusta elettromagnetica che vi stronca il midollo spinale e vi lascia paralizzati!
  `,
]
</script>

<template>
  <div class="section">
    <div class="chat-card">
      <div class="title-container">
        <div class="left">
          <div class="title">
            <TestIcon/>
            <p>mission-briefings</p>
          </div>
          <div class="description">
            <p>Players can discuss strategies for different missions.</p>
          </div>
        </div>
        <div class="icons">
          <PinIcon/>
          <TestIcon/>
          <TestIcon/>
          <TestIcon/>
          <TestIcon/>
        </div>
      </div>

      <div class="messages-wrapper">
        <div class="messages">
          <ModernChatMessageBubble v-for="i in 10" :messages="messages[i % 2 == 0 ? 0 : 1]"/>
          <ModernChatResponseBubble :messages="messages[2]"/>
          <!--VocalProfile/-->
          <!--ChatMessage/>
          <ChatMessage/>
          <ChatMessage/-->
        </div>
      </div>

      <div class="input">
        <div class="editor">
          <SimpleTemplate/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  width: 100%;
  height: 100vh;

  //background: linear-gradient(0deg, rgb(22, 22, 22) 70%, rgba(0, 0, 0, 0) 80%);
}
.chat-card {
  overflow: hidden;
  position: relative;
  z-index: 10;

  //width: 66%;
  width: 100%;
  height: 90%;

  margin-right: auto;
  margin-top: 30px;

  display: flex;
  flex-direction: column;

  border-radius: 7px;
  border-color: rgb(50, 50, 50);
  border-width: 1px;
  border-style: solid;

  background-color: rgba(40, 40, 40, 70%);

  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  animation: .4s ease-out 0s 1 slideInFromBottom;
}

.chat-card::before {
  content: '';

  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100%;
  
  backdrop-filter: blur(10px) saturate(150%);
  background-color: rgba(40, 40, 40, 0.65);
}


.title-container {
  position: relative;
  pointer-events: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  padding: 10px;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgb(51, 51, 51);
}

/*
.title-container::before {
  content: '';

  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100%;

  backdrop-filter: blur(10px) saturate(150%);
  background-color: rgba(40, 40, 40, 0.65);
}
*/
.title-container p {
  font-weight: 300;
  backdrop-filter: none;
}
.title-container .left {
  display: flex;
  align-items: center;
  gap: 56px;
}
.title-container .left .title {
  display: flex;
  align-items: center;
  gap: 6px;
}
.title-container .left .description {
}
.title-container .icons {

}


.messages-wrapper {
  overflow: hidden;
  position: relative;

  display: grid;
}
.messages-wrapper::before {
  content: '';

  position: absolute;
  z-index: 1;

  top: 0;
  left: 0;
  right: 0;
  height: 6px;

  background-image: linear-gradient(rgb(36 36 36), rgb(40 40 40 / 35%), transparent);
}
.messages-wrapper::after {
  content: '';

  position: absolute;
  z-index: 1;

  bottom: 0;
  left: 0;
  right: 0;
  height: 6px;

  background-image: linear-gradient(transparent, rgb(40, 40, 40), rgb(36, 36, 36));
}
.messages {
  //position: relative;

  overflow-y: scroll;

  // top - right - bottom - left
  padding: 20px 16px 0 16px;

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: rgba(45, 45, 45, 0.4);

  //scroll-snap-type: y mandatory;

  scrollbar-color: rgb(83, 83, 83) rgb(0, 0, 0, 0);
  scrollbar-width: none;
}

.input {
  //position: absolute;
  //bottom: 0;

  width: 100%;

  padding: 10px;

  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: rgb(51, 51, 51);
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(300%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>