<script setup lang="ts">
import { ChildData, HTMLElementData, isHTMLElement, isNodeData, isTextNode } from '@/scripts/HtmlParser';
import { defineProps, PropType } from 'vue'

interface Props {
  data: ChildData[];
}

defineProps<Props>()
</script>

<template>
  <template v-for="(item, index) in data" :key="index">
    <template v-if="isHTMLElement(item)">
      <component :is="item.tag">
        <template v-if="item.content && !(item as HTMLElementData).children?.length">
          {{ item.content }}
        </template>
        <template v-else-if="(item as HTMLElementData).children?.length">
          <TreeRenderer 
            v-for="(child, childIndex) in (item as HTMLElementData).children"
            :key="`${index}-${childIndex}`"
            :data="child"
          />
        </template>
      </component>
    </template>
    <template v-else-if="isNodeData(item)">
      {{ item.content }}
    </template>
    <template v-else-if="isTextNode(item)">
      {{ item.content }}
    </template>
  </template>
</template>