<script setup lang="ts">
import GalleryWidget from '@/components/chat/GalleryWidget.vue';
import PoolWidget from '@/components/chat/PoolWidget.vue';
import IconBold from '@/components/icons/format/IconBold.vue';
import IconItalic from '@/components/icons/format/IconItalic.vue';
import IconTextAlignCenter from '@/components/icons/format/IconTextAlignCenter.vue';
import IconTextAlignJustify from '@/components/icons/format/IconTextAlignJustify.vue';
import IconTextAlignLeft from '@/components/icons/format/IconTextAlignLeft.vue';
import IconTextAlignRight from '@/components/icons/format/IconTextAlignRight.vue';
import IconUnderline from '@/components/icons/format/IconUnderline.vue';
import IconEdit from '@/components/icons/IconEdit.vue';
import ImageIcon from '@/components/icons/IconImage.vue';
import IdentityPropic from '@/components/identity/IdentityPropic.vue';
import RoleTag from '@/components/tags/RoleTag.vue';
import { Identity, Message } from '@/scripts/Hutopia';
import { computed, ref } from 'vue';

interface Props {
  identity: Identity,
  message: Message
  //editing: boolean,
}

//const { id, name, propicUrl, badges } = defineProps<Identity>();
//const identity = defineProps<Identity>();
//const { identity, message } = defineProps<{ identity: Identity, message: Message }>();
const { identity, message } = defineProps<Props>();
const editing = ref<boolean>(false);

// Stati per i bottoni di formattazione
const isBoldActive = ref(false)
const isItalicActive = ref(false)
const isUnderlineActive = ref(false)
const textAlign = ref("left")

// Funzione per aggiornare gli stati dei bottoni
function updateButtonStates() {
  const selection = window.getSelection()
  if (selection.rangeCount === 0) return

  const range = selection.getRangeAt(0)
  const selectedNode = range.startContainer as HTMLElement

  isBoldActive.value = document.queryCommandState("bold")
  isItalicActive.value = document.queryCommandState("italic")
  isUnderlineActive.value = document.queryCommandState("underline")
  
  // Controlla l'allineamento
  const parentNode = selectedNode.parentNode as HTMLElement
  textAlign.value = parentNode.style.textAlign || "left"
}

// Funzione per controllare se un allineamento è attivo
function isAlignmentActive(alignment: string) {
  return textAlign.value === alignment
}

// Funzione per applicare o rimuovere uno stile dal testo selezionato
function toggleStyle(style: string) {
  applyOrToggleStyle(style)
}

// Funzione per applicare o togliere uno stile al testo selezionato
function applyOrToggleStyle(style: string) {
  const selection = window.getSelection()
  if (!selection || selection.rangeCount === 0) return

  const range = selection.getRangeAt(0)
  const selectedText = range.toString()
  const parentNode = range.commonAncestorContainer.parentNode as HTMLElement

  if (selectedText) {
    // Se il testo è già wrappato in uno span
    if (parentNode && parentNode.tagName === "SPAN") {
      toggleStyleOnElement(parentNode, style)
    } else {
      // Altrimenti applica lo stile creando un nuovo span
      applyStyle(range, style)
    }
  }
}

// Funzione per applicare o rimuovere uno stile su un elemento
function toggleStyleOnElement(element: HTMLElement, style: string) {
  const hasStyle = checkStyle(element, style)

  if (hasStyle) {
    removeStyle(element, style)
  } else {
    addStyle(element, style)
  }
}

// Funzione per verificare se un elemento ha lo stile specificato
function checkStyle(element: HTMLElement, style: string): boolean {
  switch (style) {
    case "bold":
      return element.style.fontWeight === "bold"
    case "italic":
      return element.style.fontStyle === "italic"
    case "underline":
      return element.style.textDecoration.includes("underline")
    default:
      return false
  }
}

// Funzione per aggiungere uno stile a un elemento
function addStyle(element: HTMLElement, style: string) {
  switch (style) {
    case "bold":
      element.style.fontWeight = "bold"
      break
    case "italic":
      element.style.fontStyle = "italic"
      break
    case "underline":
      element.style.textDecoration = element.style.textDecoration 
        ? `${element.style.textDecoration} underline` 
        : "underline"
      break
  }
}

// Funzione per rimuovere uno stile da un elemento
function removeStyle(element: HTMLElement, style: string) {
  switch (style) {
    case "bold":
      element.style.fontWeight = ""
      break
    case "italic":
      element.style.fontStyle = ""
      break
    case "underline":
      element.style.textDecoration = element.style.textDecoration.replace("underline", "").trim()
      break
  }

  // Rimuovi lo span se non ha più stili applicati
  if (!element.style.fontWeight && !element.style.fontStyle && !element.style.textDecoration) {
    const parent = element.parentNode
    if (parent) {
      while (element.firstChild) {
        parent.insertBefore(element.firstChild, element)
      }
      parent.removeChild(element)
    }
  }
}

// Funzione per applicare uno stile a un range di testo
function applyStyle(range: Range, style: string) {
  const span = document.createElement("span")
  span.textContent = range.toString()
  addStyle(span, style)

  range.deleteContents()
  range.insertNode(span)
}

// Funzione per applicare o rimuovere l'allineamento sul testo selezionato
function toggleAlignment(alignment: string) {
  applyOrToggleAlignment(alignment)
}

// Funzione per applicare o modificare l'allineamento al testo selezionato
function applyOrToggleAlignment(alignment: string) {
  const selection = window.getSelection()
  if (!selection || selection.rangeCount === 0) return

  const range = selection.getRangeAt(0)
  const selectedText = range.toString()
  const parentNode = range.commonAncestorContainer.parentNode as HTMLElement

  if (selectedText) {
    // Se il testo è già wrappato in un elemento p
    if (parentNode && parentNode.tagName === "P") {
      toggleAlignmentOnElement(parentNode, alignment)
    } else {
      // Altrimenti crea un nuovo p con allineamento specificato
      applyAlignment(range, alignment)
    }
  }
}

// Funzione per applicare o rimuovere l'allineamento su un elemento esistente
function toggleAlignmentOnElement(element: HTMLElement, alignment: string) {
  const currentAlignment = element.style.textAlign
  if (currentAlignment === alignment) {
    element.style.textAlign = ""
  } else {
    element.style.textAlign = alignment
  }
}

// Funzione per applicare l'allineamento a un range di testo creando un nuovo elemento p
function applyAlignment(range: Range, alignment: string) {
  const blockElement = document.createElement("p") // Utilizziamo <p> qui
  blockElement.style.textAlign = alignment
  blockElement.style.display = "block"
  blockElement.textContent = range.toString()

  range.deleteContents()
  range.insertNode(blockElement)
}

function keepSelection(event) {
  event.preventDefault()
}

function toggleEdit() {
  editing.value = !editing.value;
}

function showOverlay(selectedRow) {
  const overlay = document.getElementById("overlay");

  // Ottieni le dimensioni e la posizione del div selezionato
  const rect = selectedRow.getBoundingClientRect();

  // Posiziona il div overlay subito sotto il div selezionato
  overlay.style.top = `${rect.bottom + window.scrollY}px`;
  overlay.style.left = `${rect.left + window.scrollX}px`;

  // Mostra l'overlay
  overlay.style.display = "block";
}








const editableDiv = ref<HTMLElement>();
const selectedElement = ref<HTMLElement | null>(null);
const selectedElements = ref<HTMLElement[]>([]);
const selectedContent = ref<string>('');

// Funzione per aggiornare l'elemento selezionato e il posizionamento del div
function setSelectedElement(event: MouseEvent) {
  const target = event.target as HTMLElement;
  console.log(target)
  //if (editableDiv.value?.contains(target)) {
    selectedElement.value = target;
    selectedContent.value = target.textContent;
  //}
}

function NEWsetSelectedElement() {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const element = range.startContainer.parentElement;

    // Controlla che l'elemento sia all'interno del contenteditable div
    //if (editableDiv.value?.contains(element)) {
      selectedElement.value = element;
      selectedContent.value = element.textContent;
    //}
  }
}

function setSelectedElements() {
  const selection = window.getSelection();
  selectedElements.value = []; // Resetta la selezione precedente

  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const fragment = range.cloneContents(); // Crea una copia del contenuto selezionato

    // Cerca solo elementi HTML all'interno del frammento selezionato
    fragment.querySelectorAll('*').forEach((node) => {
      if (node instanceof HTMLElement) {
        selectedElements.value.push(node);
      }
    });
  }
}

// Stile per posizionare il `div` sotto il primo elemento selezionato
const positionStyle = computed(() => {
  if (selectedElements.value.length === 0) return {};
  const firstElement = selectedElements.value[0];
  const rect = firstElement.getBoundingClientRect();
  return {
    position: 'absolute',
    top: `${rect.y + rect.height + window.scrollY}px`,
    left: `${rect.x + window.scrollX}px`,
    width: `${rect.width}px` // Opzionale: per allineare la larghezza al primo elemento selezionato
  };
});

// Stile per posizionare il `div` sotto l'elemento selezionato
/*
const positionStyle = computed(() => {
  if (!selectedElement.value) return {};
  const rect = selectedElement.value.getBoundingClientRect();
  return {
    position: 'absolute',
    top: `${rect.y - rect.height}px`, // Posizionato esattamente sotto
    //left: `${rect.x}px`,
    left: '0',
    //width: `${rect.width}px` // Opzionale: per allineare la larghezza al selezionato
  };
});
*/
</script>

<template>
    <div class="message">
      <div class="left">
        <div class="diocane">
          <!--img :src="'src/assets/images/template/wallpaper-games/warframe.jpg'" class="image" /-->
          <!--img :src="identity.propicUrl" class="image"-->
          <IdentityPropic :propic-url="identity.propicUrl" :status-icon="true"/>
        </div>
      </div>

      <div class="middle">
        <div class="message-info">
          <div class="identity">
            <span class="identity-name">{{ identity.name }}</span>
          </div>

          <div class="tags">
            <RoleTag v-for="badge in identity.badges" :name="badge.name" :icon-name="badge.icon"/>
            <!--RoleTag name="Administrator" icon-name="shield-icon"/>
            <RoleTag name="Designer" icon-name="paint-icon"/-->
          </div>
        </div>

        <div class="message-content">
          <div v-if="selectedElement" class="positioned-div" :style="positionStyle" >
            Sono posizionato sotto l'elemento selezionato!
          </div>

          <div style="margin-bottom: 10px; color: white">
            <span>editableDiv: {{ editableDiv }}</span>,

            <div>
              <span>selectedElements: {{ selectedElements.length }}</span>,
            </div>

            <div v-if="selectedElement != null">
              <span>selectedElement: {{ selectedElement }}</span>,
              <p> - content: {{ selectedContent.slice(0, 30).concat('...') }},</p>
              <p> - x: {{ selectedElement.getBoundingClientRect().x }},</p>
              <p> - y: {{ selectedElement.getBoundingClientRect().y }},</p>
            </div>
          </div>

          <div v-for="content in message.contents" class="content-text">
            <div class="porcazozza" :class="{ 'editing': editing }">
              <div ref="editableDiv" :contenteditable="editing" class="textarea" @mouseup="() => { updateButtonStates(); setSelectedElements() }">
                <!--span style="text-align: right">MESSAGGIO TEST</span-->
                {{ content }}
                <!--span contenteditable="false" style="float: right; margin-left: 2ch">
                  {{ new Date().getHours() + ':' + new Date().getMinutes() }}
                </span-->

                <PoolWidget :editing/>
                <GalleryWidget :editing/>
              </div>

              <!--textarea v-if="true" id="w3review" name="w3review" class="text area" :disable="!editing">{{ content }}</textarea>
              <p v-else class="text fadeIn">
                {{ content }}
              </p-->

              <span v-if="true" class="date">
                {{ new Date().getHours() + ':' + new Date().getMinutes() }}
              </span>
            </div>

            <div class="edit">
              <IconEdit fill="white" @click="toggleEdit()"/>
            </div>

            <div v-if="editing" class="editing-tools" @mousedown.prevent="keepSelection">
              <div class="format-button" @mousedown.prevent="toggleStyle('bold')" :class="{ active: isBoldActive }">
                <IconBold/>
              </div>

              <div class="format-button" @mousedown.prevent="toggleStyle('italic')" :class="{ active: isItalicActive }">
                <IconItalic/>
              </div>

              <div class="format-button" @mousedown.prevent="toggleStyle('underline')" :class="{ active: isUnderlineActive }">
                <IconUnderline/>
              </div>
              
              <div class="format-button" @mousedown.prevent="toggleAlignment('left')" :class="{ active: isAlignmentActive('left') }">
                <IconTextAlignLeft stroke="white" :stroke-width="1.5"/>
              </div>

              <div class="format-button" @mousedown.prevent="toggleAlignment('right')" :class="{ active: isAlignmentActive('right') }">
                <IconTextAlignRight stroke="white" :stroke-width="1.5"/>
              </div>
              
              <div class="format-button" @mousedown.prevent="toggleAlignment('center')" :class="{ active: isAlignmentActive('center') }">
                <IconTextAlignCenter stroke="white" :stroke-width="1.5"/>
              </div>

              <div class="format-button" @mousedown.prevent="toggleAlignment('justify')" :class="{ active: isAlignmentActive('justify') }">
                <IconTextAlignJustify stroke="white" :stroke-width="1.5"/>
              </div>
            </div>

            <!--div class="porcazozza">
              <p class="text">
                {{ content }}
              </p>

              <span class="date">
                {{ new Date().getHours() + ':' + new Date().getMinutes() }}
              </span>
            </div-->
          </div>
        </div>
      </div>

      <!--div class="right">
        <span class="text">
          {{ new Date().getHours() + ':' + new Date().getMinutes() }}
        </span>
      </div-->
    </div>
</template>

<style lang="scss" scoped>
.positioned-div {
  z-index: 999;
  background-color: #f0f0f028;
  padding: 8px;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.active {
  background-color: #007BFF; /* Colore per i bottoni attivi */
  color: white; /* Colore del testo per i bottoni attivi */
}

.glossy {
  border-radius: 7px;
  border-color: rgba(255, 255, 255, 0.048);
  border-width: 2px;
  border-style: solid;

  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.4);

  background-color: rgba(23, 23, 23, 0.9);
  backdrop-filter: blur(50px) contrast(150%);
}

.format-button {
  padding: 2px;
  border-radius: 4px;
  //background-color: rgba(55, 165, 255, 0.068);

  &:hover {
    background-color: rgba(55, 165, 255, 0.2);
  }
}

.editing-tools {
  margin-top: 8px;
  padding: 6px;

  display: flex;
  gap: 8px;

  border-radius: 7px;
  border-color: rgba(255, 255, 255, 0.03);
  border-width: 1px;
  border-style: solid;

  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.4);

  background-color: rgba(23, 23, 23, 0.36);
  //backdrop-filter: blur(50px) contrast(150%);
}

.editing {
  outline: rgba(28, 103, 132, 0.7) dashed 2px;
  //outline-offset: 0px;

  border-radius: 7px;
  padding: 4px;

  background-color: rgba(72, 74, 255, 0.06);
  
  //transition: padding 0.2s ease-in-out;
}

/*

  outline: #1abfff85 dashed 2px;
  border-radius: 7px;
  padding: 4px;
  transition: padding 0.2s ease-in-out;
}

*/

.fadeIn {
  opacity: 0;
  animation: fadeIn 0.2s ease-in forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

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
  //outline-offset: 2px;

  transition:
      padding 0.2s ease-in-out,
      outline-width 0.05s ease-in-out,
      outline-offset 0.2s ease-in-out,
      background-color 0.2s ease-in-out;

  .textarea {
    width: 100%;

    outline: none;
    border: none;
    background: none;

    font-size: 16px;
    color: rgba(235, 235, 235, 0.64);
  }

  .text {
    width: 100%;

    &.area {  
      resize: none;

      font-size: 16px;
      color: rgba(235, 235, 235, 0.64);

      outline: none;
      border: none;
      background: none;

      font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    }
  }

  .date {
    margin-left: 2ch;
    align-self: flex-end;
  }
}

.message {
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

  transition: padding 0.2s ease-in-out;

  .edit {
    visibility: hidden;
  }

  &:hover {
    .edit {
      visibility: visible;
    }
  }

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

  //text-align: left;
  //text-align-last: left;
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