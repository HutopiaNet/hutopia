<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue';
import IconTrash from '../icons/IconTrash.vue';
import GalleryWidgetImage from './GalleryWidgetImage.vue';
import IconSettings from '../icons/IconSettings.vue';
import ButtonSettings from '../buttons/ButtonSettings.vue';

interface Props {
  editing: boolean
}

const { editing } = defineProps<Props>();

const isVisible = ref(true);

function destroyComponent() {
  isVisible.value = false; // Imposta la visibilità a false, rimuovendo il componente
}

// Hook per gestire la distruzione
onBeforeUnmount(() => {
  console.log("Component Widget Pool destroyed");
});
</script>

<template>
  <div v-if="isVisible" class="chat-widget gallery">  
    <div class="header">
      <p>Gallery</p>
      <div class="buttons">
        <ButtonSettings/>
        <IconTrash
          fill="transparent"
          stroke="#b04040"
          :strokeWidth="2"
          class="trash-icon"
          @click="destroyComponent"
        />
      </div>
    </div>

    <div class="images">
      <GalleryWidgetImage v-for=" in 5" :editing/>

      <!--div v-for=" in 5" v-if="editing" contenteditable="false" class="new" >
        <span>Add an image</span>
      </div-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-widget.gallery {
  margin-top: 4px;
  margin-bottom: 4px;

  padding: 4px;

  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.04);

  .header {
    margin-bottom: 8px;

    display: flex;
    justify-content: space-between;

    .buttons {
      display: flex;
      gap: 4px;
    }

    p {
    
      font-weight: 500;
    }

    .trash-icon {
      height: 20px;
      cursor: pointer;
    }
  }

  .images {
    //overflow: hidden;
    //border-radius: 7px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, min(140px));
    grid-gap: 10px;
  }
}

.new {
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
}
</style>