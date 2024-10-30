<script setup lang="ts">
import AdminIcon from '../icon/AdminIcon.vue';

const props = defineProps<{
  name: string,
  iconName: string
}>()

console.log(`@/assets/icons/${props.iconName}.svg`);
</script>

<template>
  <div class="role-tag alternative">
    <AdminIcon />
    <span class="popIn">{{ name }}</span>
  </div>
</template>

<style scoped lang="scss">
.role-tag {
  interpolate-size: allow-keywords;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 4px;

  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;

  border: rgba(255, 215, 0, 0.17) solid 2px;
  border-radius: 7px;
  
  background-color: rgba(255, 208, 25, 0.04);

  img {
    width: 16px;
  }

  span {
    //font-size: 14px;
    //font-weight: 600;

    font-size: 12px;
    font-weight: 700;

    color: rgb(196, 194, 118);
  }
}

.alternative {
  transform-origin: bottom left;
  animation: alternative 0.2s ease-in forwards;
}

@keyframes alternative {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.popIn {
  opacity: 0;

  animation: popIn 0.2s ease-in forwards;
  animation-delay: 0.2s;
}

@keyframes popIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.compose {
  animation: widthCompose 2s ease-in forwards;
  animation: scaleIn 2s ease-in forwards;
}

@keyframes scaleIn {
  from {
    width: 0;
    transform: scaleY(0);
  }
  to {
    width: fit-content;
    transform: scaleY(1);
  }
}
</style>