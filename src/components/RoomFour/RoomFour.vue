<template>
  <div id="RoomFour">
    <div class="modal-item" v-if="OpenPuzzles[0]">
      <div class="modal-content" id="ArcadeBackdrop">
        <span class="modal_close" @click="closeModal(0)">&times;</span>
        <div id="Error" v-if="Minigamewon">
          <h2>Error</h2>
          <img src="@/assets/Images/RoomFour/Number_Clue.jpg" />
        </div>
        <SpaceInvaders v-else @Minigamewon="Minigamewon = true" />
      </div>
    </div>
    <div class="modal-item" v-if="OpenPuzzles[1]">
      <div class="modal-content" id="BriefcaseBackdrop">
        <span class="modal_close" @click="closeModal(1)">&times;</span>
        <Note v-if="Notetaken" />
        <div v-else-if="BriefcaseOpened">
          <h1 id="NoteSeen">You see a note inside the suitecase</h1>
          <button id="NoteTaker" @click="Notetaken = true">Take</button>
        </div>
        <Briefcase v-else @BriefcaseOpened="BriefcaseOpened = true" />
      </div>
    </div>
    <div class="modal-item" v-if="OpenPuzzles[2]">
      <div class="modal-content" id="final-ans-modal-content">
        <span class="modal_close" @click="closeModal(2)">&times;</span>
        <LogicPuzzle @Finish="finish" />
        <Note id="NoteFinal" v-if="Notetaken" />
      </div>
    </div>
    <div id="canvas">
      <div class="player" id="Character">
        <img class="Character_shadow pixelart" src="@/assets/Images/Character_Shadow.png" alt="Shadow" />
        <img class="Character_spritesheet pixelart face-down" id="spriteCharacter" src="@/assets/Images/Character.png" alt="Character" />
      </div>
      <img class="pos-item" id="Arcade" width="75px" height="80px" src="@/assets/Images/RoomFour/Arcade_Machine.png" />
      <img class="pos-item" id="Briefcase" width="75px" height="80conspx" src="@/assets/Images/RoomFour/Briefcase.png" />
      <img class="pos-item" id="FinalLock1" src="@/assets/Images/RoomFour/Lock.png" />
    </div>
    <div class="inventory" ref="inventory"></div>
  </div>
</template>

<script>
  import SpaceInvaders from "./SpaceInvaders.vue";
  import Briefcase from "./Briefcase.vue";
  import Note from "./Note.vue";
  import LogicPuzzle from "./LogicPuzzle.vue";
  export default {
    name: "RoomFour",
    emits: ["roomFourFin"],
    components: {
      SpaceInvaders,
      Briefcase,
      Note,
      LogicPuzzle,
    },
    data() {
      return {
        OpenPuzzles: [false, false, false],
        Minigamewon: false,
        BriefcaseOpened: false,
        Notetaken: false,
      };
    },
    mounted: function() {
      const sprite = document.getElementById("spriteCharacter");
      const character = document.getElementById("Character");
      const openPuzzle = this.openModal
      let x = 0;
      let y = 0;
      let screenWidth;
      let screenHeight;

      function findScreenSize() {
        screenWidth = window.innerWidth / 16 - 3;
        screenHeight = (window.innerHeight * 0.9) / 16 - 14;
      }
      window.onresize = findScreenSize;
      findScreenSize();
      function addAnimation() {
        sprite.classList.add("Character_animation");
      }
      function removeAnimation() {
        sprite.classList.remove("Character_animation");
      }

      function moveUp() {
        sprite.classList.add("face-up");
        sprite.classList.remove("face-down", "face-right", "face-left");
        y = y - 1;
      }
      function moveRight() {
        sprite.classList.add("face-right");
        sprite.classList.remove("face-down", "face-left", "face-up");
        x = x + 1;
      }
      function moveLeft() {
        sprite.classList.add("face-left");
        sprite.classList.remove("face-down", "face-right", "face-up");
        x = x - 1;
      }
      function moveDown() {
        sprite.classList.add("face-down");
        sprite.classList.remove("face-right", "face-left", "face-up");
        y = y + 1;
      }
      function updateSpritePosition() {
        character.style.left = x + "rem";
        character.style.top = y + "rem";
      }

      function walls() {
        if (x < 0) {
          sprite.classList.remove("Character_animation");
          x = 0;
        } else if (x > screenWidth) {
          sprite.classList.remove("Character_animation");
          x = screenWidth;
        } else if (y < 0) {
          sprite.classList.remove("Character_animation");
          y = 0;
        } else if (y > screenHeight) {
          sprite.classList.remove("Character_animation");
          y = screenHeight;
        }
      }

      function coordinates() {
        document.addEventListener("keydown", function(event) {
          const posItemArray = document.getElementsByClassName("pos-item");
          //making the position item arry
          if (event.keyCode == "37" || event.keyCode == "38" || event.keyCode == "39" || event.keyCode == "40") {
            //finding position for each pos-item
            posItemArray.forEach(function(item) {
              //finding the coordinates of the player
              let playerCoords = document.querySelector(".player").getBoundingClientRect();
              let playerLeft = Math.round(playerCoords.left / 100) * 100;
              let playerTop = Math.round(playerCoords.top / 100) * 100;
              //finding the coordinates of all objects
              let objectCoords = item.getBoundingClientRect();
              let objectLeft = Math.round(objectCoords.left / 100) * 100;
              let objectTop = Math.round(objectCoords.top / 100) * 100;
              if (objectLeft === playerLeft && objectTop === playerTop) {
                item.style.transform = "scale(1.2)";
              } else {
                item.style.transform = "scale(1)";
              }
            });
          } else if (event.code == "Enter") {
            posItemArray.forEach(function(item, index) {
              //finding the coordinates of the player
              let playerCoords = document.querySelector(".player").getBoundingClientRect();
              let playerLeft = Math.round(playerCoords.left / 100) * 100;
              let playerTop = Math.round(playerCoords.top / 100) * 100;
              //finding the coordinates of all objects
              let objectCoords = item.getBoundingClientRect();
              let objectLeft = Math.round(objectCoords.left / 100) * 100;
              let objectTop = Math.round(objectCoords.top / 100) * 100;
              if (objectLeft === playerLeft && objectTop === playerTop) {
                openPuzzle(index); // Checks if the object and player are touching and presses the button to mount the component if they are
              }
            });
          }
        });
      }

      function keyboardAnimate() {
        if (event.keyCode == "38" || event.keyCode == "87") {
          moveUp();
        } else if (event.keyCode == "39" || event.keyCode == "68") {
          moveRight();
        } else if (event.keyCode == "37" || event.keyCode == "65") {
          moveLeft();
        } else if (event.keyCode == "40" || event.keyCode == "83") {
          moveDown();
        }
        coordinates();
      }
      document.addEventListener("keydown", function() {
        addAnimation();
        keyboardAnimate();
        coordinates();
        walls();
        updateSpritePosition();
      });
      document.addEventListener("keyup", function() {
        removeAnimation();
        clearInterval();
      });
    },
    methods: {
      closeModal: function(index) {
        this.$set(this.OpenPuzzles, index, false);
      },
      openModal: function(index) {
        this.$set(this.OpenPuzzles, index, true);
      },
      finish: function() {
        this.$emit("roomFourFin");
      },
    },
  };
</script>

<style scoped>
  :root {
    --scale1: 6;
  }
  * {
    margin: 0;
    padding: 0;
  }
  html {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  body {
    overflow: hidden;
  }
  #RoomFour {
    position: absolute;
    background-image: url("~@/assets/Images/RoomFour/Room_Four_Background.jpg");
    width: 100%;
    height: 100%;
  }
  .player {
    width: 2rem;
    height: 2rem;
    position: absolute;
    overflow: hidden;
  }
  .Character_spritesheet {
    width: calc(4rem * var(--scale1));
    position: absolute;
    left: 0;
  }
  .Character_animation {
    animation: moveSpritesheet 1s steps(4) infinite;
  }
  .pixelart {
    image-rendering: pixelated;
  }
  .face-right {
    top: calc(-2rem);
  }
  .face-up {
    top: calc(-4rem);
  }
  .face-left {
    top: calc(-6rem);
  }
  @keyframes moveSpritesheet {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
  }
  .Character_shadow {
    position: absolute;
    width: calc(1rem * var(--scale1));
    height: calc(1rem * var(--scale1));
    left: 0;
  }
  .inventory{
    z-index: 3;
  }
  .modal-item {
    position: fixed; /* Stay in place */
    display: block; /* Overrides Css from Room1 */
    z-index: 1; /* Sit on top */
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 20, 2, 0.9);
  }
  .ModalOpener {
    display: none;
  }
  .modal_close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .modal_close:hover,
  .modal_close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 4rem;
    padding: 3rem;
    z-index: 3;
    border-radius: 1rem;
  }

  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  #canvas {
    position: absolute;
    top: 10%;
    height: calc(90% - 6.5rem);
    width: 100%;
    overflow: hidden;
  }
  #Briefcase {
    position: absolute;
    top: 5%;
    right: 0%;
  }
  #BriefcaseBackdrop {
    background-image: url("~@/assets/Images/RoomFour/Briefcase_Backdrop.jpg");
    height: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  #Arcade {
    position: absolute;
    top: 10px;
  }
  #ArcadeBackdrop {
    height: 70%;
    background-image: url("~@/assets/Images/RoomFour/Arcade_Backdrop.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
  #Error {
    position: absolute;
    left: 15%;
    color: white;
    height: 70%;
    width: 70%;
    background-color: black;
  }
  #NoteSeen {
    color: white;
  }
  #NoteTaker {
    background-color: black;
  }
  #FinalLock1 {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  #final-ans-modal-content {
    height: 70%;
  }
  #NoteFinal {
    position: absolute;
    top: 10%;
    left: 35%;
    height: 50%;
    width: 30%;
  }
  #Character {
    scale: 3;
  }
</style>
