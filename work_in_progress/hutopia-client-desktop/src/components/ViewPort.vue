<script setup lang="ts">
import MainWindow from '@components/window/MainWindow.vue';
import ServerBanner from '@components/server/ServerBanner.vue';
import ServerHorizontalListCard from '@components/server/ServerHorizontalListCard.vue';
import ServerVerticalListCard from '@components/server/ServerVerticalListCard.vue';
import ServerCard from '@components/server/ServerCard.vue';
import ChatCard from '@components/chat/ChatCard.vue';
import ActivitiesCard from '@components/activity/ActivitiesCard.vue';
import Footbar from '@components/footbar/Footbar.vue';
</script>

<template>
  <div class="viewport">
    <ServerBanner/>

    <div class="horizontal">
      <div style="display: flex">
        <!--ServerVerticalListCard/-->
        <ServerCard/>
      </div>
      <MainWindow/>
      <ActivitiesCard/>
    </div>

    <ServerHorizontalListCard/>
  </div>
</template>

<style scoped lang="scss">
.viewport {
  width: 100%;
  height: 100%;
  //flex: 1;
  //display: flex;
}
.vertical {
  //flex: 1;
  //display: flex;
  //flex-direction: column;
}
.horizontal {
  display: flex;
  justify-content: space-between;
  //flex-direction: row;
}
.zero {
  background-color: rgb(22, 22, 22);
}
.one {
  background-color: rgb(44, 44, 44);
}
.two {
  background-color: rgb(66, 66, 66);
}
.three {
  background-color: rgb(88, 88, 88);
}

.what {
  width: 16px;
  height: 16px;

  border-radius: 50%;

  background-color: gray;
}
</style>