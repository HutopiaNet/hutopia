<script setup lang="ts">
import GalleryEditImageMockup from './GalleryEditImageMockup.vue';
</script>

<template>
  <!--div class="gallery-edit-mockup">
    <div class="content-gallery">
      <div class="grid-item">
        <img src="@/assets/images/template/material-0.jpg" alt="wallpaper" class="wallpaper">
      </div>
      <div class="grid-item">
        <img src="@/assets/images/template/material-1.jpg" alt="wallpaper" class="wallpaper">
      </div>
      <div class="grid-item">
        <img src="@/assets/images/template/material-2.jpg" alt="wallpaper" class="wallpaper">
      </div>
      <div class="grid-item">
        <img src="@/assets/images/template/material-3.jpg" alt="wallpaper" class="wallpaper">
      </div>
    </div>
  </div-->

  <div class="gallery-edit-mockup">
    <div class="content-gallery">
      <GalleryEditImageMockup v-for=" in 5"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-gallery {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //grid-template-rows: repeat(3, 100px);
  grid-template-rows: repeat(auto, 100px);
  grid-gap: 10px;
  //grid-template: fit-content(100px) / fit-content(40%);

  transition: .2s ease-in-out;
}
</style>