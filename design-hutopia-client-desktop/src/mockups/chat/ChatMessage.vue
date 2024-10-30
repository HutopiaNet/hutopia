<script setup lang="ts">
import IdentityPropic from '@/components/identity/IdentityPropic.vue';
import RoleTag from '@/components/tags/RoleTag.vue';
import { Identity, Message } from '@/scripts/Hutopia';

interface Props {
  identity: Identity,
  message: Message
}

//const { id, name, propicUrl, badges } = defineProps<Identity>();
//const identity = defineProps<Identity>();
//const { identity, message } = defineProps<{ identity: Identity, message: Message }>();
const { identity, message } = defineProps<Props>();
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
          <div v-for="content in message.contents" class="content-text">
            <div class="porcazozza">
              <p class="text fadeIn">
                {{ content }}
              </p>

              <span class="date">
                {{ new Date().getHours() + ':' + new Date().getMinutes() }}
              </span>
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

  .text {
    width: 100%;
  }

  .date {
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