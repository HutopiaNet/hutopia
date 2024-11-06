<script setup lang="ts">
import StackLayout from '@/layouts/StackLayout.vue';
import { ref } from 'vue'
import IconTrash from '../icons/IconTrash.vue';
import ButtonTrash from '../buttons/ButtonTrash.vue';
import ButtonEdit from '../buttons/ButtonEdit.vue';
import IconImage from '../icons/IconImage.vue';
import ButtonImage from '../buttons/ButtonImage.vue';

interface Props {
  editing: boolean
}

const { editing } = defineProps<Props>();

// Riferimento all'input file
//const fileInput = ref<HTMLInputElement | null>(null)
// Url dell'immagine selezionata
const imageUrl = ref<string | null>(null)

/*
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
*/

// Riferimento all'input file
const fileInput = ref(null);

// Funzione per aprire l’esplora risorse
const triggerFileInput = () => {
  fileInput.value.click();
};

// Funzione per gestire il file selezionato dall’esplora risorse
const handleFileSelect = (event) => {
  const file = event.target.files[0];
  if (file) {
    processFile(file);
  }
};

// Funzione per gestire il drop di file
const handleDrop = (event) => {
  const file = event.dataTransfer.files[0];
  if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
    processFile(file);
  }
};

// Funzione di elaborazione del file
const processFile = (file) => {
  console.log("File selezionato:", file);
  // Qui puoi eseguire azioni come visualizzare o caricare l'immagine
  imageUrl.value = URL.createObjectURL(file)
};

const deleteFile = () => {
  imageUrl.value = null;
}
</script>

<template>
  <div class="template-image" @dragover.prevent @drop.prevent="handleDrop">
    <input style="display: none;" ref="fileInput" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" @change="handleFileSelect" class="upload"/>
    <StackLayout v-if="imageUrl" style="height: 100%">
      <div class="image-container">
        <img v-if="imageUrl" :src="imageUrl" class="image" />
      </div>

      <div class="buttons-container">
        <ButtonImage @click="triggerFileInput"/>
        <ButtonEdit/>
        <ButtonTrash @click="deleteFile"/>
      </div>
      <!--input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" @change="handleFileSelect" class="upload"/-->
    </StackLayout>
    <div v-else contenteditable="false" class="new" @dragover.prevent @drop.prevent="handleDrop" @click="triggerFileInput">
      <span>Add an image</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.template-image {
  width: 100%;
  height: auto; // 130px
  //height: 100%;

  //background-color: #8080801f;

  //grid-row: 1 / 3;

  .button {
    width: fit-content;
    line-height: 0.9;

    padding: 4px;
    border-radius: 4px;

    background-color: #8080801f;
  }

  &:hover {
    .trash-icon {
      visibility: visible;
    }

    .buttons-container {
      visibility: visible;
    }
  }

  .trash-icon {
    visibility: hidden;
    height: 20px;

    cursor: pointer;
  }
  /*
  &:hover {
    input[type=file] {
      visibility: visible;
    }
  }

  input[type=file] {
    visibility: hidden;
  }
  */
}

.image-container {
  overflow: hidden;

  width: 100%;
  height: 100%;

  border-radius: 4px;

  //background-color: rgba(127, 255, 212, 0.267);

  img {
    width: 100%;
    height: 100%;

    //max-width: 100%;
    //height: 100%;

    //width: inherit;
    //height: inherit;

    object-fit: cover;
    object-position: center;
  }
}

.buttons-container {
  visibility: hidden;

  width: 100%;
  height: 100%;

  padding: 4px;

  display: flex;
  justify-content: end;
  gap: 4px;
}

.upload {
  height: fit-content;
}

.new {
  height: 100%;

  display: grid;
  align-items: center;

  outline: rgba(21, 255, 0, 0.144) dashed 2px;
  //outline: rgba(21, 255, 0, 0.212) dashed 2px;
  //outline: rgba(72, 89, 136, 0.473) dashed 2px;

  border-radius: 7px;
  padding: 4px;

  text-align: center;
  color: rgb(16, 139, 16);

  background-color: rgba(15, 247, 35, 0.068);
  //background-color: rgba(72, 74, 255, 0.06);

  cursor: pointer;

  input[type=file] {
    width: 100%;
    height: 100%;
  }
}

.trash-icon {
  height: 20px;
  cursor: pointer;
}
</style>