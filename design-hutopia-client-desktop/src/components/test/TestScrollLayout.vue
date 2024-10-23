<script setup lang="ts">
import { reactive, ref } from 'vue';
import FadeEffect from '@/effects/FadeEffect.vue';
import ScrollLayout from '@/layouts/ScrollLayout.vue';
import CollapsableLayout from '@/layouts/CollapsableLayout.vue';

const collapsed = ref<boolean>(false);

const gradientStyle = reactive({
  'transform': `rotate(deg)`
})

function switchCollapse() {
  collapsed.value = !collapsed.value

  gradientStyle.transform = `rotate(${collapsed.value ? -90 : 0}deg)`

  console.log("collapsed: " + collapsed.value);
}
</script>

<template>
  <div class="container">
    <div class="window-bar" @click="switchCollapse()">
      <p>Window title</p>
    </div>
    <FadeEffect :top="true" :left="false" :bottom="true" :right="false">
      <CollapsableLayout :collapsed="collapsed">
        <div class="elements-container">
          <div class="element">
            <span>X</span>
            <span>element #1</span>
          </div>

          <div class="element">
            <span>X</span>
            <span>element #2</span>
          </div>

          <div class="element">
            <span>X</span>
            <span>element #3</span>
          </div>

          <FadeEffect :top="true" :left="false" :bottom="true" :right="false">
            <CollapsableLayout :collapsed="true">
              <FadeEffect :top="true" :left="false" :bottom="true" :right="false">
                <ScrollLayout>
                  <div v-for="(value, index) in 20" class="element">
                    <span>X</span>
                    <span>element #{{ index }}</span>
                  </div>
                </ScrollLayout>
              </FadeEffect>
            </CollapsableLayout>
          </FadeEffect>
          <div class="element">
            <span>X</span>
            <span>element #4</span>
          </div>

          <div class="element">
            <span>X</span>
            <span>element #5</span>
          </div>
        </div>
      </CollapsableLayout>
    </FadeEffect>
    <div class="window-bar" @click="switchCollapse()">
      <p>Window title</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: 'minecraft-five-v2-regular';
  src: url('@/assets/fonts/minecraft-five-v2-regular.otf');
}

@font-face {
  font-family: 'minecraft-ten-v2-regular';
  src: url('@/assets/fonts/minecraft-ten-v2-regular.otf');
}

@font-face {
  font-family: 'minecraft-seven';
  src: url('@/assets/fonts/minecraft-seven.ttf');
}

.container {
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.dropdown-list {
  transition: 1.5s ease-in-out;
}

.window-bar {
  //margin-bottom: 4px;

  display: flex;
  gap: 6px;

  p {
    font-size: 20px;
    font-family: 'minecraft-ten-v2-regular';
  }

  .icon {
    width: 12px;
    transition: transform 1.5s ease-in-out;
  }
}

.elements-container {
  padding-left: 6px;
  padding-right: 6px;

  display: flex;
  flex-direction: column;
  gap: 6px;
}
.element {
  display: flex;
  gap: 3px;
}
.element p {
  font-family: 'minecraft-seven';
}
</style>