<script setup lang="tsx">
import RoleTag from '@/components/tags/RoleTag.vue';
import FadeEffect from '@/effects/FadeEffect.vue';
import { h, onMounted, ref, VNode, watch } from 'vue';
import { html } from '@/scripts/Markdown';
import ScrollWrapper, { ScrollData } from '../ScrollWrapper.vue';
import GalleryEditMockup from './GalleryEditMockup.vue';
import MarkdownView from '@/components/markdown/MarkdownView.vue';
import { Identifier } from 'typescript';
import { Identity } from '@/scripts/Hutopia';
import ChatMessage from './ChatMessage.vue';
import IdentityPropic from '@/components/identity/IdentityPropic.vue';

interface Chat {
  messages: Message[]
}

interface Message {
  name: string,
  contents: string[],
}

const testChat: Chat = {
  messages: [
    {
      name: 'Alice Johnson',
      contents: [
        'Hi everyone, thanks for joining the meeting today. our main focus is to discuss the redesign of our mobile app. The goal is to improve user experience and align the design with our new branding. @David, could you start by sharing the design concepts you have been working on?'
      ]
    },
    {
      name: 'Walter White',
      contents: [
        'Sure, @Alice. I have prepared a few wireframes and high-fidelity mockups that highlight the key changes. As you can see on the first slide, the navigation has been simplified. We have moved from an hamburger menu to a bottom navigation bar, which will make it easier for users to access core features. The color palette has also been updated to match our new brand guidlines.'
      ]
    },
    {
      name: 'Gabriele',
      contents: [
        'Ma chi diavolo siete voi due e potete smetterla di parlare in inglese?!'
      ]
    },
  ]
}

const scrollData = ref<ScrollData>({
  scrollTop: 0,
  scrollHeight: 0,
  scrollPercentage: 0,
  isAtStart: true,
  isAtEnd: false,
});

// Funzione per salvare i dati di scroll
const saveScrollData = (data: ScrollData) => {
  scrollData.value = data;
};

const chat = ref<Chat>(testChat);
const writingMessage = ref<string>('');
const htmlContent = ref<string>(html);

// Funzione per salvare i dati di scroll
const addMessage = (name: string) => {
  if (writingMessage.value.length == 0) return;

  console.log('NOME: ' + name)

  if (hasLastMessage(name)) {
    chat.value.messages.at(-1).contents.push(writingMessage.value);

    console.log("new_messages: latest present");
    console.log("- content: " + writingMessage.value);
  } else {
    const newMessage: Message = {
      name: 'Gabriele',
      contents: [ writingMessage.value ]
    };

    console.log("new_messages: latest NOT present");
    console.log("- content: " + newMessage.contents[0]);

    chat.value.messages.push(newMessage); 
  }
};

const hasLastMessage = (name: string) => {
  const message: Message = chat.value.messages.at(-1);

  console.log(message);

  return message.name == name;
};

onMounted(() => {
  /*
  const t0 = performance.now();
  console.log("HTML:");
  console.log(htmlContent.value);
  const t1 = performance.now();

  console.log(`Markdown rendering took ${t1 - t0} milliseconds.`);

  const allora = hasLastMessage('Gabriele');
  console.log('hasLastMessage: ' + allora);
  */
})

//const node: VNode = h('div', { class: 'bar', innerHTML: 'hello' })
const VirtualNode: VNode = h('markdown-container', [
    //h('div', { class: 'bar', innerHTML: 'hello' }),
    //h('div', { class: 'bar', innerHTML: 'hello' }),
    h('div', { class: 'elenco', innerHTML: [
        h('div', { class: 'barra', innerHTML: 'hello' }),
        h('div', { class: 'contenuto', innerHTML: 'hello' }),
    ]}),
])

function Render() {
  return h('div', { class: 'markdown-container' }, [
      h('div', { class: 'elenco' }, [
          h('div', { class: 'barra' }, 'ciao'),
          h('div', { class: 'contenuto' }, [
              h('div', { class: 'bar' }, 'ciao'),
              h('div', { class: 'bar' }, 'ciao'),
          ])
      ])
  ]);

  /*
  return h('markdown-container', [
    //h('div', { class: 'bar', innerHTML: 'hello' }),
    //h('div', { class: 'bar', innerHTML: 'hello' }),
    h('div', { class: 'elenco', innerHTML: [
        h('div', { class: 'barra', innerHTML: 'hello' }),
        h('div', { class: 'contenuto', innerHTML: 'hello' }),
    ]}),
  ])
  */
}

function TSXRender() {
  return (
    <div class="markdown-container">
      <div class="elenco">
        <div class="barra"/>
        <div class="contenuto">
          <span>ciao</span>
          <span>ciao</span>
        </div>
      </div>
    </div>
  )
}

const badges = [
  {
    icon: 'shield-icon',
    name: 'Administrator',
    mainColor: 0,
    detailsColor: 0 
  },
  {
    icon: 'paint-icon',
    name: 'Designer',
    mainColor: 0,
    detailsColor: 0 
  },
]

const identities = [
  {
    id: 0,
    name: 'Alice Johnson',
    propicUrl: 'src/assets/images/template/wallpaper-games/cat.png', // 'src/assets/images/template/wallpaper-games/cat.png'
    badges: [badges[0], badges[1]]
  },
  {
    id: 1,
    name: 'Walter White',
    propicUrl: 'src/assets/images/template/wallpaper-games/minecraft.png', // 'src/assets/images/template/wallpaper-games/minecraft.png'
    badges: [badges[0], badges[1]]
  },
  {
    id: 2,
    name: 'xGab0',
    propicUrl: 'src/assets/images/template/wallpaper-games/warframe.jpg', // 'src/assets/images/template/wallpaper-games/warframe.jpg'
    badges: [badges[0]]
  },
]
</script>

<template>
  <div class="mockup">
    <!-- Mostra i dati dello scroll -->
    <!--p>Scroll Top: {{ scrollData.scrollTop }}</p>
    <p>Scroll Height: {{ scrollData.scrollHeight }}</p>
    <p>Scroll Percentage: {{ scrollData.scrollPercentage }}%</p>
    <p>All'inizio: {{ scrollData.isAtStart }}</p>
    <p>Alla fine: {{ scrollData.isAtEnd }}</p-->

    <div class="chat-header">
      <span class="identity-name">Chat </span>
      <IdentityPropic :status-icon="true"/>
    </div>

    <FadeEffect :top="!scrollData.isAtStart" :bottom="!scrollData.isAtEnd" style="height: 100%">
      <ScrollWrapper @update-scroll-data="saveScrollData">
        <div class="chat-mockup">
          <ChatMessage v-for="(item, index) in chat.messages" :identity="identities[index]" :message="testChat.messages[index]"/>
        </div>
      </ScrollWrapper>
    </FadeEffect>

    <div class="input-area">
      <textarea v-model="writingMessage" id="w3review" name="w3review" rows="4" cols="50"/>
      <span class="text" @click="addMessage('Gabriele')">
        Invia
      </span>
      <!--input type="text" id="lname" name="lname" placeholder="type something in chat..."/-->
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid-background {
  background-size: 14px 14px;
  background-image: linear-gradient(to right,#f6f6f6 1px,transparent 1px),linear-gradient(to bottom,#f6f6f6 1px,transparent 1px);
}

.chat-header {
  padding-bottom: 4px;
  padding-top: 4px;
  padding-left: 20px;
  padding-right: 20px;

  border-bottom: #d0d0d00d solid 1px;

  span {
    font-size: 24px;
  }
}

.porcazozza {
  display: flex;

  //white-space: pre-wrap;
  overflow-wrap: break-word;

  .text {
    width: 100%;
  }

  .date {
    align-self: flex-end;
  }
}

.nonso {
  display: flex;
  gap: 2px;

  .middle {
    margin-left: 6px;
  }

  .right {
    display: grid;
    align-content: flex-end;

    span {
      font-size: 14px;
      font-weight: 600;

      color: rgba(255, 255, 255, 0.4);
    }
  }
}

.elenco {
  background-color: rgba(255, 235, 58, 0.363);
}

.depth-0 {
  display: flex;
}
.barra {
  width: 10px;
  background-color: gray;
}



.time {
  position: absolute;
  right: 0;
  color: grey;
  font-size: 0.9em;
  white-space: nowrap;
}

.mockup {
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 46;

  border-radius: 7px;
  border-color: rgba(255, 255, 255, 0.048);
  border-width: 2px;
  border-style: solid;

  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.4);

  background-color: rgba(23, 23, 23, 0.9);
  backdrop-filter: blur(50px) contrast(150%);
}
.chat-mockup {
  //overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;

  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  scrollbar-color: white transparent;
}
.message {
  position: relative;
}
.message-info {
  margin-bottom: 6px;

  display: flex;
  //justify-content: space-between;
  align-items: center;
  gap: 8px;

  white-space: pre-wrap; overflow-wrap: break-word;

  .identity {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  span {
    font-weight: 600;
  }
}
.diocane {
  width: 36px;
  height: 36px;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 100%;

    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
  }
}
.propic {
  width: 28px;
  height: 28px;

  background-color: gray;
}
.message-content {
  width: 600px;

  display: grid;
  gap: 0px;

  //transition: border 2s ease-in-out;
  //transition: padding 2s ease-in-out;
  //transition: transform 2s ease-in-out;

  &.edit {
    //transform: scale(1.01);
    //padding: 4px;

    border-radius: 4px;
    //border: dashed #28aeff5e 2px;

    //transition: border 2s ease-in-out;
    //transition: padding 2s ease-in-out;
  }

  .vertical {
    display: grid;
    gap: 6px;
  }
  .horizontal {
    display: flex;
    gap: 6px;
  }
}
.content-text {
  //margin-left: 34px;

  text-align: left;
  text-align-last: left;
  //text-wrap: balance;

  p {
    font-size: 16px;
    //font-weight: 500;
  }
}
.content-gallery {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //grid-template-rows: repeat(3, 100px);
  grid-template-rows: repeat(auto, 100px);
  grid-gap: 10px;
  //grid-template: fit-content(100px) / fit-content(40%);

  transition: .2s ease-in-out;

  .wallpaper {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
}

.identity-name {
  font-size: 18px;
  color: #c8c8c8;
}

.message-data {
  font-size: 13px;
  text-align: right;

  span {
    font-weight: 600;
  }
}

.identity-tag {
  color: rgb(41, 59, 139);
}

::selection {
  color: white;
  background-color: rgba(0, 81, 255, 0.247);
}

.input-area {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;

  display: flex;
  align-items: center;
  gap: 20px;

  textarea {
    resize: none;

    width: 100%;
    max-height: 50px;
    height: fit-content;

    padding: 6px;

    border: none;
    border-radius: 7px;

    font-size: 15px;

    color: rgba(235, 235, 235, 0.64);
    background-color: rgba(109, 109, 109, 0.26);

    caret-color: white;

    &:focus {
      outline: none;
      border: none;
    }

    &:valid {

    }

    &:invalid {

    }
  }

  span {
    border-radius: 6px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 6px;
    padding-right: 6px;

    background-color: #8484843b;

    cursor: pointer;
  }
}
</style>