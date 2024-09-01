<script setup lang="ts">
import TextIcon from '@components/icons/TextIcon.vue';
import ImageIcon from '@components/icons/ImageIcon.vue';

const imageUrl = new URL('/src/assets/images/template/material-0.jpg', import.meta.url).href

function retrieveImageUrl(index: number): string {
  console.info(`/src/assets/images/template/material-${index}.jpg`);
  return new URL(`/src/assets/images/template/material-${index}.jpg`, import.meta.url).href
}
</script>

<template>
  <div class="controls">
    <TextIcon/>
    <ImageIcon/>
  </div>

  <div class="message-image-gallery example-2">
    <div v-for="i in 6" class="image-container">
      <Suspense>
        <img class="image" :src="retrieveImageUrl(i-1)" alt="propic">

        <template #fallback>
          <div class="image-skeleton"/>
        </template>
      </Suspense>
    </div>

    <!--Suspense>
      <div v-for="i in 6" class="image-container">
        <img class="image" :src="retrieveImageUrl(i-1)" alt="propic">
      </div>

      <template #fallback>
        <div v-for=" in 6" class="image-container">
          <div class="image-skeleton"/>
        </div>
      </template>
    </Suspense-->

    <!--div class="image" v-for="i in 5"></div-->
  </div>
</template>

<style scoped lang="scss">
.controls {
  width: 100%;

  display: flex;
  justify-content: end;
  gap: 4px;

  margin-top: 12px;
  margin-bottom: 6px;
}

.image-skeleton {
  width: 100%;
  height: 100%;

  background-color: rgb(44, 44, 44);
}

.message-image-gallery {
  overflow: hidden;

  display: grid;
  gap: 4px;
  border-radius: 7px;
}
.example-1 {
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(50px, 160px);
  //grid-auto-rows: minmax(200px, auto);
}
.example-2 {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, 160px);
  //grid-auto-rows: minmax(200px, auto);

  transition-property: all;
  transition-duration: 1s;
}
.example-3 {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto auto;
  overflow: hidden;
}

.image-container {
  scroll-snap-align: center;

  transition-property: all;
  transition-duration: 1s;

  background-color: rgb(40, 40, 40);
}
/*
.image-container:hover {
  z-index: 1;
  width: 110%;
}
*/

/*
.image-container:not(.col4):hover {
   z-index: 1;
   grid-column: span 2;
}
   */

.image {
  width: 100%;
  height: 100%;

  //border-radius: 3px;

  object-fit: cover;
  object-position: 0px 0px;
}
.image:hover {
  background-color: rgb(44, 44, 44);
}

.scrollable {
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  //scroll-snap-points-y: repeat(200px);

  max-height: 200px;
  padding-right: 12px;
}
</style>