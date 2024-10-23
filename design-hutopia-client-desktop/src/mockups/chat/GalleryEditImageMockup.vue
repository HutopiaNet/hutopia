<script setup lang="ts">
import StackLayout from '@/layouts/StackLayout.vue';
import { ref } from 'vue'

// Riferimento all'input file
const fileInput = ref<HTMLInputElement | null>(null)
// Url dell'immagine selezionata
const imageUrl = ref<string | null>(null)

// Funzione per gestire il caricamento del file
const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    imageUrl.value = URL.createObjectURL(file)
  }
}

// Funzione per gestire il drop del file
const handleDrop = (event: DragEvent) => {
  const file = event.dataTransfer?.files[0]
  
  // Controlla che il file sia un PNG
  if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
    imageUrl.value = URL.createObjectURL(file)
  } else {
    alert('Per favore trascina solo file PNG.')
  }
}
</script>

<template>
  <div class="template-image" @dragover.prevent @drop.prevent="handleDrop">
    <StackLayout style="height: 100%">
      <div class="image-container">
        <img v-if="imageUrl" :src="imageUrl" class="image" />
      </div>
      <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" @change="onFileChange" class="upload"/>
    </StackLayout>
  </div>

  <!--div class="template-image">
    <div class="button">
      <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" @change="onFileChange" class="upload"/>
    </div>

    <img v-if="imageUrl" :src="imageUrl" class="image" />
  </div-->
</template>

<style scoped lang="scss">
.template-image {
  width: 100%;
  height: 100px;
  //height: 100%;

  object-fit: cover;

  background-color: #8080801f;

  .button {
    width: fit-content;
    line-height: 0.9;

    padding: 4px;
    border-radius: 4px;

    background-color: #8080801f;
  }
}

.image-container {
  overflow: hidden;

  width: 100%;
  height: 100%;

  //background-color: rgba(127, 255, 212, 0.267);

  img {
    width: 100%;
    //max-width: 100%;
    //height: 100%;

    //width: inherit;
    //height: inherit;

    object-fit: cover;
    object-position: center;
  }
}

.upload {
  height: fit-content;
}
</style>