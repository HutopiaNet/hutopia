<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

export interface ScrollData {
  scrollTop: number,
  scrollHeight: number,
  scrollPercentage: number,
  isAtStart: boolean,
  isAtEnd: boolean
}

// Definisci gli eventi che il componente emette
const emit = defineEmits<{
  (event: 'update-scroll-data', data: {
    scrollTop: number,
    scrollHeight: number,
    scrollPercentage: number,
    isAtStart: boolean,
    isAtEnd: boolean
  }): void;
}>();

//const props = defineProps<ScrollData>();

// counter only uses props.initialCounter as the initial value;
// it is disconnected from future prop updates.
//const scrollTop = ref(props.scrollTop);
//const scrollHeight = ref(props.scrollHeight);
//const scrollPercentage = ref(props.scrollPercentage);
//const isAtStart = ref(props.isAtStart);
//const isAtEnd = ref(props.isAtEnd);

const scrollableDiv = ref<HTMLElement>(); // Ref per il div scrollabile
const scrollPercentage = ref<number>(0);
const isAtStart = ref<boolean>(true);
const isAtEnd = ref<boolean>(false);
const childDiv = ref(null); // Ref per il div passato via slot

/*
const handleScroll = () => {
  if (!childDiv.value) return;

  scrollTop.value = childDiv.value.scrollTop;
  scrollHeight.value = childDiv.value.scrollHeight - childDiv.value.clientHeight;

  scrollPercentage.value = Math.round((scrollTop.value / scrollHeight.value) * 100);
  isAtStart.value = scrollTop.value === 0;
  isAtEnd.value = scrollTop.value >= scrollHeight.value;

  console.log("Scroll Info:");
  console.log("- scrollTop: " + scrollTop.value);
  console.log("- scrollHeight: " + scrollHeight.value);
  console.log("- scroll_percentage: " + scrollPercentage.value + "%");
  console.log("- is_at_start: " + isAtStart.value);
  console.log("- is_at_end: " + isAtEnd.value);

  // Emissione dell'evento con i dati dello scroll
  emit('update-scroll-data', {
    scrollTop: scrollTop.value,
    scrollHeight: scrollHeight.value,
    scrollPercentage: scrollPercentage.value,
    isAtStart: isAtStart.value,
    isAtEnd: isAtEnd.value
  });
};
*/

/*
const handleScroll = () => {
  if (!childDiv.value) return;

  const scrollTop = childDiv.value.scrollTop;
  const scrollHeight = childDiv.value.scrollHeight - childDiv.value.clientHeight;

  scrollPercentage.value = Math.round((scrollTop / scrollHeight) * 100);
  isAtStart.value = scrollTop === 0;
  isAtEnd.value = scrollTop >= scrollHeight;

  console.log("Scroll Info:");
  console.log("- scrollTop: " + scrollTop);
  console.log("- scrollHeight: " + scrollHeight);
  console.log("- scroll_percentage: " + scrollPercentage.value + "%");
  console.log("- is_at_start: " + isAtStart.value);
  console.log("- is_at_end: " + isAtEnd.value);
};
*/

const handleScroll = () => {
  if (!childDiv.value) return;

  const scrollTop = childDiv.value.scrollTop;
  const scrollHeight = childDiv.value.scrollHeight - childDiv.value.clientHeight;
  const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);
  const isAtStart = scrollTop === 0;
  const isAtEnd = scrollTop >= scrollHeight;

  // Emetti l'evento con i dati dello scroll
  emit('update-scroll-data', {
    scrollTop,
    scrollHeight: childDiv.value.scrollHeight,
    scrollPercentage,
    isAtStart,
    isAtEnd
  });
};

onMounted(() => {
  // Recupera il div figlio (slot content) quando il componente è montato
  childDiv.value = scrollableDiv.value.querySelector('div'); // Trova il div dentro lo slot

  if (childDiv.value) {
    childDiv.value.addEventListener('scroll', handleScroll);
    handleScroll();
  }
});
</script>

<template>
  <!-- Wrapper -->
  <div ref="scrollableDiv" class="scroll-container" @scroll="handleScroll">
    <!-- Slot per contenere il contenuto passato al componente -->
    <slot></slot>
  </div>

  <!--p>Top: {{ scrollTop }}%</p>
  <p>Height: {{ scrollHeight }}%</p>
  <p>Posizione dello scroll: {{ scrollPercentage }}%</p>
  <p>All'inizio dello scroll: {{ isAtStart }}</p>
  <p>Alla fine dello scroll: {{ isAtEnd }}</p-->
</template>

<style scoped lang="scss">
.scroll-container {
  height: 100%;
  overflow: hidden; /* Rimuove lo scroll wrapper */

  //overflow-y: scroll;
  //border: 1px solid #ccc;
}
</style>