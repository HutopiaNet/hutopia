<script setup lang="ts">
import { ref } from 'vue';
import ProfilePropic from './ProfilePropic.vue';
import ProfileBanner from './ProfileBanner.vue';
import TestIcon from '../icons/TestIcon.vue';

const baba = ref<HTMLElement>();
const bannerX = ref<number>(0);
const bannerY = ref<number>(0);

//window.addEventListener('mousemove', updateObjectPosition);

// Funzione per aggiornare la posizione dell'oggetto
function updateObjectPosition(event: MouseEvent) {
    // Ottieni le dimensioni e la posizione dell'immagine
    const rect = baba.value.getBoundingClientRect();
    
    // Calcola il centro dell'immagine
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calcola la distanza del mouse dal centro
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    // Calcola la nuova posizione dell'oggetto
    const newPosX = 50 + (deltaX / rect.width) * 100;  // Valori da 0 a 100
    const newPosY = 50 + (deltaY / rect.height) * 100; // Valori da 0 a 100

    // Aggiorna le proprietà CSS
    bannerX.value = newPosX;
    bannerY.value = newPosY;

    console.info("x: " + newPosX + ", y: " + newPosY)

    //img.style.objectPosition = `${newPosX}% ${newPosY}%`;
}
</script>

<template>
  <div class="profile-card-container">
    <div class="profile-card">
      <div class="profile-banner-container">
        <ProfileBanner/>
        <div class="badges">
          <img class="image" src="@images/template/medals/silver-medal.png" alt="badge">
          <img class="image" src="@images/template/medals/gold-medal.png" alt="badge">
          <img class="image" src="@images/template/medals/gold-medal.png" alt="badge">
          <img class="image" src="@images/template/medals/bronze-medal.png" alt="badge">
          <img class="image" src="@images/template/medals/gold-medal.png" alt="badge">
        </div>
      </div>

      <div class="description-container">
        <div class="margin"/>
        <div class="description">
          <p class="name">Username</p>
          <p class="status">online</p>
        </div>
      </div>

      <div class="bombe">
        <div class="bio section">
          <TestIcon class="icon"/>
          <div>
            <small class="title">Bio</small>
            <p class="description">
              Dario Greggio enjoyer
            </p>
          </div>
        </div>

        <div class="tags section">
          <TestIcon class="icon"/>
          <div>
            <small class="title">Tags</small>
            <div class="description">
              <p class="tag">@Username</p>
              <p class="comma">, </p>
              <p class="tag">@Test</p>
              <p class="comma">, </p>
              <p class="tag">@Gerarchy</p>
              <p class="comma">.</p>
            </div>
          </div>
        </div>

        <div class="birthday section">
          <TestIcon class="icon"/>
          <div>
            <small class="title">Birthday</small>
            <p class="description">
              01/01/0001
            </p>
          </div>
        </div>

        <div class="location section">
          <TestIcon class="icon"/>
          <div>
            <small class="title">Location</small>
            <p class="description">
              Ibiza
            </p>
          </div>
        </div>
      </div>

      <!--div class="playing-game-container">
        <div class="playing-game">
          <p>Warframe</p>
          <img class="image" src="@images/template/wallpaper-games/warframe.jpg" alt="propic">
        </div>
      </div-->
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-card-container {
  padding: 50px;
}
.profile-card {
  //overflow: hidden;
  position: relative;
  z-index: 10;

  width: 400px;
  height: fit-content;

  border-radius: 7px;
  //border-width: 2px;
  //border-color: rgba(255, 255, 255, 0.011);
  //border-style: solid;

  //background-color: rgba(40, 40, 40, 94%);
  //background-color: rgb(55, 55, 55);
  //box-shadow: rgb(209, 0, 0)px 6px, rgb(0, 0, 253) 0px 3px 6px;
  box-shadow: rgba(0, 0, 0, 1) 0px 5px 15px;
}
.profile-card::before {
  content: '';

  position: absolute;
  z-index: -10;

  width: 100%;
  height: 100%;

  border-radius: 7px;
  
  backdrop-filter: blur(10px) saturate(150%);
  -webkit-backdrop-filter: blur(10px) saturate(150%);
  //background-color: rgba(40, 40, 40, 0.94);
  background: linear-gradient(0deg, rgba(40, 40, 40, 0.94) 50%, rgba(0, 125, 150, 0.74) 100%);
}
.profile-banner-container {
  width: 100%;
  height: 100px;

  position: relative;
  //object-position: 0 0;

  //display: flex;
  flex-direction: column;
  justify-content: end;

  box-shadow: rgba(33, 35, 38, 0.1) 0px 3px 3px -2px;
}
.profile-banner img {
  width: 100%;
  height: 100%;

  position: absolute;

  object-fit: cover;
}
.profile-banner-container .badges {
  z-index: 1;
  position: absolute;
  bottom: -8px;
  right: 14px;

  padding: 4px 8px 4px 8px;

  display: flex;
  justify-content: end;
  gap: 6px;

  border-radius: 3px;
  background-color: rgba(40, 40, 40, 94%);
  box-shadow: rgba(33, 35, 38, 1) 0px 5px 5px -2px;
}
.profile-banner-container .badges .image {
  width: 20px;
  height: 20px;
}




.profile-propic-container {
  z-index: 2;
  overflow: visible;

  width: 30%;

  position: absolute;
  top: 64px;
  //left: 20px;

  padding-left: 12px;

  //background-color: rgba(22, 22, 22, 0.3);
}

.description-container {
  height: 60px;
  display: flex;
  //background-color: antiquewhite;
}
.description-container .margin {
  width: 30%;
  //background-color: rgba(22, 22, 22, 30%);
}
.description-container .description {
  width: auto;
  height: 100px;

  position: relative;

  margin-top: 14px;
}
.description-container .description .name {
  font-size: 17px;
  font-weight: bold;

  color: white;
}

.description-container .description .status {
  font-size: 13px;
  font-weight: bold;
  color: rgb(41, 199, 41);
}

.bombe {
  overflow: hidden;

  margin-top: 6px;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 12px;

  border-radius: 7px;

  //padding: 8px;

  display: flex;
  flex-direction: column;
  gap: 1px;

  //background-color: rgba(33, 33, 33, 0.9);
  box-shadow:
    //rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(255, 255, 255, 0.011) 0px 0px 0px 1px;
}
.bombe .section {
  padding: 8px;

  display: flex;
  align-items: center;
  gap: 10px;

  background-color: rgba(33, 33, 33, 0.8);
}
.bombe .icon {
  width: 18px;
  height: 18px;
}

.bombe .bio .title {
  font-size: 12px;
  font-weight: bold;
  color: white;
}
.bombe .bio .description {
  font-size: 14px;
  color: gray;
}

.bombe .tags .title {
  font-size: 12px;
  font-weight: bold;
  color: white;
}
.bombe .tags .description {
  display: flex;
}
.bombe .tags .description .tag {
  font-size: 14px;
  font-weight: bold;
  color: rgb(187, 0, 0);
}
.bombe .tags .description .comma {
  color: gray;
}

.bombe .birthday .title {
  font-size: 12px;
  font-weight: bold;
  color: white;
}
.bombe .birthday .description {
  font-size: 14px;
  color: gray;
}

.bombe .location .title {
  font-size: 12px;
  font-weight: bold;
  color: white;
}
.bombe .location .description {
  font-size: 14px;
  color: gray;
}

.playing-game-container {
  overflow: hidden;

  margin-left: 12px;
  margin-right: 12px;

  border-radius: 7px;

  display: flex;
  flex-direction: column;
  gap: 1px;
}
.playing-game {
  position: relative;

  width: 100%;
  height: 100px;

  box-shadow: 
    rgba(23, 23, 23, 0.3) 0px 1px 2px 0px,
    rgba(23, 23, 23, 0.15) 0px 1px 3px 1px;
}
.playing-game::before {
  content: '';

  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100%;

  background-image: linear-gradient(to top, rgba(22, 22, 22, 0.85), transparent, transparent);
}
.playing-game p {
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;

  color: white;

  text-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
.playing-game img {
  position: absolute;
  z-index: -2;
  top: 0;

  width: 100%;
  height: 100%;
}
</style>