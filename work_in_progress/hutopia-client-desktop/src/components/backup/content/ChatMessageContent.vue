<script setup lang="ts">
import ChatMessageImageGallery from '@components/chat/content/ChatMessageImageGallery.vue';
import ProfileName from '@components/chat/ProfileName.vue';

</script>

<template>
  <section class="chat-message-content">
    <p>
      Hey, what's all the hype about Nebula Nexus?
      Is it really as good as they say? I'm looking for a new game to dive into it.
      
      Oh, you'll love it! The combat mechanics are smooth, and the multiplayer mode is epic. 
      Plus, you get to customize your own spaceship!

      Give it an install, and join our group, we'll wait for you.
    </p>

    <!--p>Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless. Schraeder drop gondy, rail fatty slash gear jammer steeps</p-->
    <ChatMessageImageGallery/>
    <p>bottom text</p>
  </section>
</template>

<style scoped lang="scss">
p {
  font-weight: 200;
}
</style>