<script setup lang="ts">
import MainWindow from '@components/window/MainWindow.vue';
import ServerBanner from '@components/server/ServerBanner.vue';
import TestScrollLayout from './TestScrollLayout.vue';
import ChatMockup from '@/mockups/chat/ChatMockup.vue';
import ChannelTree from '@/mockups/channels/ChannelTree.vue';
import ChannelTreeMockup from '@/mockups/channels/ChannelTreeMockup.vue';
import SingleChatMessageMockup from '@/mockups/chat/SingleChatMessageMockup.vue';
import DebugHtmlTreeView from './DebugHtmlTreeView.vue';
import { onMounted, onUnmounted, ref, useTemplateRef, watch, watchEffect } from 'vue';
import TreeRenderer from './TreeRenderer.vue';
import { ChildData, collectChildData } from '@/scripts/HtmlParser';
import RenderNode from './RenderNode.vue';
import HtmlTreeViewRenderer from './HtmlTreeViewRenderer.vue';

const arrayOfChildData: ChildData = 
  {
    "tag": "div",
    "content": "",
    "children": [
      {
        "tag": "span",
        "content": "Ciao",
        "children": []
      },
      {
        "tag": "span",
        "content": "come",
        "children": []
      },
      {
        "tag": "span",
        "content": "",
        "children": [
          {
            "tag": "span",
            "content": "?",
            "children": []
          }
        ]
      }
    ]
  }


const test = useTemplateRef('test-div');
const node = ref<ChildData>();

onMounted(() => {
  // Inizializza il valore iniziale
  if (test.value) {
    const htmlNode = collectChildData(test.value);
    node.value = htmlNode[0];
    //console.log(JSON.stringify(htmlNode, null, 2));
  }

  // Configura un MutationObserver per monitorare i cambiamenti in testDiv
    const observer = new MutationObserver(() => {
    node.value = collectChildData(test.value)[0];
    console.log("CHANGED");
  });

  // Osserva il div con configurazioni per i cambiamenti nei figli e nel testo
  if (test.value) {
    observer.observe(test.value, { childList: true, subtree: true, characterData: true });
  }

  // Pulisci l'observer al momento dello smontaggio del componente
  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <div ref="test-div" style="position: absolute; visibility: visible; color: red; font-size: 20px">
    <span>Ciao</span>
    <span> come </span>
    <span>stai<span>?</span></span>
  </div>

  <div class="viewport">
    <ChannelTreeMockup ref="test"/>
    <!--ChatMockup/-->
    <SingleChatMessageMockup/>
    <HtmlTreeViewRenderer v-if="node != null" :node />
    <!--RenderNode :node="arrayOfChildData" /-->
  </div>
</template>

<style scoped lang="scss">
.viewport {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background-image: url("@/assets/images/template/material-5.jpg");
  object-fit: contain;
}
</style>