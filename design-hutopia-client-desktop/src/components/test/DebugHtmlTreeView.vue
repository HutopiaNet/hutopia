<script setup lang="ts">
import { ChildData, collectChildData, isNodeData, NodeData } from '@/scripts/HtmlParser';
import { onMounted, ref } from 'vue';

interface Props {
  htmlElement: HTMLElement
}

const { htmlElement } = defineProps<Props>();
const test = ref<HTMLElement>();
const result = ref<ChildData[]>();

onMounted(() => {
  //const result = collectChildData(test.value);
  result.value = collectChildData(test.value);
  console.log(JSON.stringify(result.value, null, 2));
});
</script>

<template>
  <div ref="test" style="position: absolute; visibility: hidden;">
    <span>Ciao</span>
    <span> come </span>
    <span>stai</span>
  </div>

  <div class="elements-tree">
    <span>Tree</span>
    <div v-for="element in result" class="span-element">
      <div v-if="isNodeData(element)" v-for="child in element" class="span-element">
        <span>NODE</span>
        <span class="bound">&lt;</span>
        <span class="type">{{ child.tag }}</span>
        <span class="bound">&gt;</span>
        <p/>
          {{ child.content }}
        <p/>
        <span class="bound">&lt;</span>
        <span class="type">/{{ child.tag }}</span>
        <span class="bound">&gt;</span>
      </div>
      <div v-else>
        <span class="bound">&lt;</span>
        <span class="type">{{ element.tag }}</span>
        <span class="bound">&gt;</span>
        <p/>
          {{ element.content }}
        <p/>
        <span class="bound">&lt;</span>
        <span class="type">/{{ element.tag }}</span>
        <span class="bound">&gt;</span>
      </div>
    </div>
  </div>

  <!--div class="elements-tree" ref="test">
    <div class="span-element">
      <div class="tag">
        <div class="start">
          <span class="bound">&lt;</span>
          <span class="type">span</span>
          <span class="bound">&gt;</span>
        </div>
        <div class="content">
          Messaggio prova...
        </div>
        <div class="end">
          <span class="bound">&lt;/</span>
          <span class="type">span</span>
          <span class="bound">&gt;</span>
        </div>
      </div>
    </div>

    <div class="div-element">
      <div class="tag">
        <div class="start">
          <span class="bound">&lt;</span>
          <span class="type">div</span>
          <span class="bound">&gt;</span>
        </div>
        <div class="content">
          <div class="span-element">
            <div class="tag">
              <div class="start">
                <span class="bound">&lt;</span>
                <span class="type">span</span>
                <span class="bound">&gt;</span>
              </div>
              <div class="content">
                Messaggio prova...
              </div>
              <div class="end">
                <span class="bound">&lt;/</span>
                <span class="type">span</span>
                <span class="bound">&gt;</span>
              </div>
            </div>
          </div>
        </div>
        <div class="end">
          <span class="bound">&lt;/</span>
          <span class="type">div</span>
          <span class="bound">&gt;</span>
        </div>
      </div>
    </div>
  </div-->
</template>

<style scoped lang="scss">
.elements-tree {
  height: 80%;

  border-radius: 7px;
  border-color: rgba(255, 255, 255, 0.048);
  border-width: 2px;
  border-style: solid;

  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.4);

  background-color: rgba(23, 23, 23, 0.9);
  backdrop-filter: blur(50px) contrast(150%);

  .div-element {
    .tag {
      .start {
        .bound {
          color: white;
        }
        .type {
          color: red;
        }
      }
      .content {
        margin-left: 2ch;
      }
      .end {
        .bound {
          color: white;
        }
        .type {
          color: red;
        }
      }
    }
    .content {

    }
  }

  .span-element {
    .tag {
      .start {
        .bound {
          color: white;
        }
        .type {
          color: #56b956;
        }
      }
      .content {

      }
      .end {
        .bound {
          color: white;
        }
        .type {
          color: #56b956;
        }
      }
    }
    .content {

    }
  }

  .break-element {
    .tag {
      font-weight: bold;
      color: yellow;
    }
    .content {

    }
  }
}
</style>