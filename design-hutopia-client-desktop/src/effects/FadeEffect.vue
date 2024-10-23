<script setup lang="ts">
import { computed, reactive, watch, watchEffect } from 'vue';

interface Props {
  top?: boolean
  left?: boolean
  bottom?: boolean
  right?: boolean
}

const {
  top = false,
  left = false,
  bottom = false,
  right = false
} = defineProps<Props>();

const fadeStyle = reactive({
  maskImage: `
      ${bottom ? 'linear-gradient(to top, transparent, black 7px),' : ''}
      ${top ? 'linear-gradient(to bottom, transparent, black 7px),' : ''}
      ${right ? 'linear-gradient(to left, transparent, black 7px),' : ''}
      ${left ? 'linear-gradient(to right, transparent, black 7px)' : ''}
    `
})

const computedStyle = computed(() => {
  const gradients = []

  if (bottom) {
    gradients.push('linear-gradient(to top, transparent, black 7px)')
  }
  if (top) {
    gradients.push('linear-gradient(to bottom, transparent, black 7px)')
  }
  if (right) {
    gradients.push('linear-gradient(to left, transparent, black 7px)')
  }
  if (left) {
    gradients.push('linear-gradient(to right, transparent, black 7px)')
  }

  return {
    'mask-image': gradients.length ? gradients.join(', ') : ''
  }
})

watchEffect(() => {
  // `foo` transformed to `props.foo` by the compiler
  //console.log("top is: " + top);
})

//console.log(fadeStyle)
</script>

<template>
  <div class="effect-fade" :style="computedStyle">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.effect-fade {
  mask-composite: intersect;
}

/*
.fade-vertical {
  mask-image:
    linear-gradient(to top, transparent, black 7px),
    linear-gradient(to bottom, transparent, black 7px);
  mask-composite: intersect;
}
.fade-horizontal {
  mask-image:
    linear-gradient(to left, transparent, black 7px),
    linear-gradient(to right, transparent, black 7px);
  mask-composite: intersect;
}
*/
</style>