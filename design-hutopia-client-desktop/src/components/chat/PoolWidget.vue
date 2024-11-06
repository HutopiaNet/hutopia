<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue';
import IconTrash from '../icons/IconTrash.vue';

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
  <div v-if="isVisible" class="chat-widget pool">  
    <div class="header">
      <p>Quali attività sono da considerarsi della Gerarchia?</p>
      <IconTrash
        fill="transparent"
        stroke="#b04040"
        :strokeWidth="2"
        class="trash-icon"
        @click="destroyComponent"
      />
    </div>

    <div class="options">
      <div class="option">
        <input type="checkbox" class="options"/>
        <span>Flammare Paper</span>
      </div>

      <div class="option">
        <input type="checkbox" class="options"/>
        <span>Ricreare Discord</span>
      </div>

      <div class="option">
        <input type="checkbox" class="options"/>
        <span>Fare una fork di spigot 1.8</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-widget.pool {
  margin-top: 4px;
  margin-bottom: 4px;

  padding: 4px;

  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.04);

  .header {
    display: flex;
    justify-content: space-between;

    .trash-icon {
      height: 20px;
      cursor: pointer;
    }
  }

  .options {
    .option {
      input {
        margin-right: 4px;
      }
    }
  }
}
</style>