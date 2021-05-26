<template>
  <div class="roomOne">

    <div class="canvas" id="canvas">
      <div id="character">
        <img
          class="Character_shadow pixelart"
          src="@/assets/Images/Character_Shadow.png"
          alt="Shadow"
        />

        <img
          class="Character_spritesheet pixelart face-down"
          id="spriteCharacter"
          src="@/assets/Images/Character.png"
          alt="Character"
        />
      </div>
      <div class="mapItems" id="mapItems">
        <div class="map-item" id="FinalLock">
          <!-- <img  src="https://img.icons8.com/dusk/200/000000/door-closed.png"/> -->
          <img id="hideLock" class="item-img" src="https://img.icons8.com/dusk/200/000000/portal.png"/>
          <div class="hidden">
            https://i.ibb.co/qFBnL0y/compscipuzzle.jpg
          </div>
          <div class="hidden">Exit Door</div>
          <div class="modal-item" id="final-ans-modal">
            <div class="modal-content">
              <span class="modal_close" @click="closeModal()">&times;</span>
              <p style="font-size:2rem;">Exit Portal</p>
              <br>
              <p>Is there something you're not <s>seeing?</s></p>
              <div class="flex-row">
                <img src="@/assets/Images/finalpuzzle.jpg" width="300rem" height="auto" alt="">
                <div class="flex-column">
                  <img src="@/assets/Images/finalanswer.jpg" width="250rem" height="auto" alt="">
                  <br>
                  <div id="answerCheck"></div>
                  <br>
                  <input type="text" id="roomOneAns" placeholder="Your Answer" />
                  <br>
                  <input type="submit" value="Submit" @click="verifyFinal()" />
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div class="map-item hideComputer" id="Computer">
          <img id="hideComp"
            class="item-img"
            src="https://img.icons8.com/officel/75/000000/computer.png"
          />
          <div class="hidden">
            https://i.ibb.co/qFBnL0y/compscipuzzle.jpg
          </div>
          <div class="hidden">
            Computer 
          </div>
          <div class="modal-item" id="final-ans-modal">
            <div class="modal-content">
              <span class="modal_close" @click="closeModal()">&times;</span>
              <p style="font-size:2rem;">Computer</p>
              <br>
              <p>Look Down</p>
              <div class="flex-row">
                <img src="@/assets/Images/compsci.jpg" width="300rem" height="auto" alt="">
                <div class="flex-column">
                  <img src="@/assets/Images/compscianswer.jpg" width="250rem" height="auto" alt="">
                  <br>
                  <div id="computerCheck"></div>
                  <input type="text" id="computerAnswer" placeholder="Your Answer" />
                  <br>
                  <input type="submit" value="Submit" @click="verifyComputer()" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="map-item forInventory" id="Goggles">
          <!-- <img src="https://img.icons8.com/emoji/100/000000/goggles-emoji.png"/> -->
          <img class="item-img" src="https://img.icons8.com/dusk/64/000000/3d-glasses.png"/>
          <div class="hidden">https://img.icons8.com/dusk/64/000000/3d-glasses.png</div>
          <div class="hidden">Goggles</div>
          <div class="message">Click to Collect</div>
        </div>

        <div class="modal-item" id="gogglesModalAlert">
          <div class="modal-content">
            <span class="modal_close" @click="closeModal()">&times;</span>
            <p style="font-size:2rem;">*Alert*</p>
            <br>
            <p>Click on the Goggles to Use Them</p>
          </div>
        </div>

         <div class="modal-item" id="barModal">
          <div>
            <!-- <span class="modal_close" @click="closeModal()">&times;</span> -->
            <img src="@/assets/Images/bar.jpg" alt="" height="400rem" width="auto">
          </div>
        </div>

      </div>
    </div>
    
    <div class="inventory" ref="inventory"></div>
  </div>
</template>

<script>
// import func from "vue-editor-bridge";
export default {
  name: "RoomOne",
  emits: ["roomOneFin"],
  mounted: function() {
    // this.coordinates();
    // this.changePuzzle();
    this.addToInventory();
    

    // // this.displayMapItems();

    const sprite = document.getElementById("spriteCharacter");
    const character = document.getElementById("character");
    // upKey = document.getElementById("upKey");
    // leftKey = document.getElementById("left");
    // downKey = document.getElementById("down");
    // rightKey = document.getElementById("right");
    let screenWidth;
    let screenHeight;

    let x = 0;
    let y = 5;

    //screen size
    const findScreenSize = function() {
      //divide by 6 to put in rem
      //6 bc width of sprite is 6
      screenWidth = window.innerWidth / 16 - 6;
      document.getElementById("canvas").style.width =
        window.innerWidth / 16 + "rem";
      //8 bc height of sprite is 8
      //plus 8 for inventory
      screenHeight = window.innerHeight / 16 - 14;
      document.getElementById("canvas").style.height =
        window.innerHeight / 16 + "rem";
      document.getElementById("mapItems").style.height = screenHeight + "rem";
    };

    findScreenSize();
    window.onresize = findScreenSize;

    //animation
    const addAnimation = function() {
      sprite.classList.add("Character_animation");
    };

    const removeAnimation = function() {
      sprite.classList.remove("Character_animation");
    };

    //movement
    const moveUp = function() {
      
      sprite.classList.add("face-up");
      sprite.classList.remove("face-down", "face-right", "face-left");
      y = y - 1;
    };

    const moveRight = function() {
      
      sprite.classList.add("face-right");
      sprite.classList.remove("face-down", "face-left", "face-up");
      x = x + 1;
    };

    const moveLeft = function() {
      
      sprite.classList.add("face-left");
      sprite.classList.remove("face-down", "face-right", "face-up");
      x = x - 1;
    };

    const moveDown = function() {

      sprite.classList.add("face-down");
      sprite.classList.remove("face-right", "face-left", "face-up");
      y = y + 1;
    };

    const updateSpritePosition = function() {
      character.style.left = x + "rem";
      character.style.top = y + "rem";
    };

    //boundaries
    const walls = function() {
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
    };

    //keyboard
    const keyboardAnimate = function() {
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
    };

    document.addEventListener("keydown", function() {
      addAnimation();
      //animate
      keyboardAnimate();
      coordinates();
      //check if overboard
      walls();
      updateSpritePosition();
    });

    //when arrow keys are released, stops animation
    document.addEventListener("keyup", function() {
      removeAnimation();
      clearInterval();
    });
  
    const coordinates = function() {
      const mapArray = Array.from(document.getElementsByClassName("map-item"));
      // console.log(mapArray);
      const modalArray = Array.from(
        document.getElementsByClassName("modal-item")
      );
      // console.log(modalArray);
      let playerCoords = document
        .getElementById("character")
        .getBoundingClientRect();
      let playerLeft = Math.round(playerCoords.left / 16);
      let playerRight = Math.round(playerCoords.right / 16);
      let playerTop = Math.round(playerCoords.top / 16 + 2);
      let playerBottom = Math.round(playerCoords.bottom / 16);
      mapArray.forEach(function(item) {
        let objectCoords = item.getBoundingClientRect();
        let objectLeft = Math.round(objectCoords.left / 16);
        let objectRight = Math.round(objectCoords.right / 16);
        let objectTop = Math.round(objectCoords.top / 16);
        let objectBottom = Math.round(objectCoords.bottom / 16);
        // console.log(objectCoords);

        if (
          playerRight > objectLeft &&
          playerLeft < objectRight &&
          playerBottom > objectTop &&
          playerTop < objectBottom
        ) {
          item.children[0].style.transform = "scale(1.2)";
          item.style.pointerEvents = "all";
          document.addEventListener("keydown", function(event) {
            if (event.keyCode == "13") {
              modalArray.forEach(function(item) {
                item.style.display = "none";
              });
              item.children[3].style.display = "block";
            }
          });
        } else {
          item.children[0].style.transform = "scale(1)";
          item.style.pointerEvents = "none";
        }
      });
    };
  },
  methods: {
    nextRoom: function() {
      document.getElementById("final-ans-modal").style.display = "block";
    },
    closeModal: function() {
      const modalCloseArray = Array.from(
        document.getElementsByClassName("modal-item")
      );
      modalCloseArray.forEach(function(item) {
        item.style.display = "none";
      });
      modalCloseArray.style.display = "none";
    },
    verifyFinal: function() {
      const answer = document.getElementById("roomOneAns").value.toUpperCase();
      if (answer == `SPACEBAR`) {
        document.getElementById("answerCheck").innerHTML = "";
        document.getElementById("answerCheck").style.color = "green";
        document
          .getElementById("answerCheck")
          .insertAdjacentHTML("beforeend", `${answer} is Correct :D!`);
        this.$emit("roomOneFin");
      } else if (answer == `COMPSCI`) {
        document.getElementById("answerCheck").innerHTML = "";
        document.getElementById("answerCheck").style.color = "green";
        document
          .getElementById("answerCheck")
          .insertAdjacentHTML("beforeend", `${answer} is Correct :D!`);
      } else {
        document.getElementById("answerCheck").innerHTML = "";
        document.getElementById("answerCheck").style.color = "red";
        document
          .getElementById("answerCheck")
          .insertAdjacentHTML(
            "beforeend",
            `${answer} is incorrect, try again :(`
          );
      }
    },
    verifyComputer: function() {
      const answer = document.getElementById("computerAnswer").value.toUpperCase();
      if (answer == `ROOMONE`) {
        document.getElementById("computerCheck").innerHTML = "";
        document.getElementById("computerCheck").style.color = "green";
        document
          .getElementById("computerCheck")
          .insertAdjacentHTML("beforeend", `${answer} is Correct :D!`);
      } else if (answer == `COMPSCI`) {
        document.getElementById("computerCheck").innerHTML = "";
        document.getElementById("computerCheck").style.color = "green";
        document
          .getElementById("computerCheck")
          .insertAdjacentHTML("beforeend", `${answer} is Correct :D!`);
      } else {
        document.getElementById("computerCheck").innerHTML = "";
        document.getElementById("computerCheck").style.color = "red";
        document
          .getElementById("computerCheck")
          .insertAdjacentHTML(
            "beforeend",
            `${answer} is incorrect, try again :(`
        );
      }
    },
    addToInventory: function() {
      //get array of items on map
      const mapItemArray = Array.from(
        document.getElementsByClassName("forInventory")
      );
      let inventoryArray = [];
      const inventory = document.querySelector(".inventory");
      mapItemArray.forEach(function(item) {
        //when img is clicked
        item.addEventListener("click", function() {
          let addedItem = {
            name: item.children[2].textContent,
            img: item.children[1].textContent,
          };
          inventoryArray.push(addedItem);
          inventory.innerHTML = "";
          display();
          item.style.display = "none";
          if (inventoryArray.length == 1){
            const gogglesModal = document.querySelector("#gogglesModalAlert");
            gogglesModal.style.display = "block";
          }
          barModal();
        });
      });
      const display = function() {
        inventoryArray.forEach(function(item) {
          inventory.insertAdjacentHTML(
            "afterbegin",
            `
            <div class="inventory-item" id="${item.name}" >
            <div id="wear">Wear</div>
            <div id="takeoff">Take Off</div>
          <img class="item-img" id="collectedGoggles" src="${item.img}" >
          <div class="hidden">${item.img}</div>
        </div>`
          );
        });
      };
      const barModal = function(){
        const wear = document.querySelector("#wear");
        const takeoff = document.querySelector("#takeoff");
        const computer = document.querySelector(".hideComputer");
        const lock = document.querySelector("#FinalLock");

        wear.addEventListener("click", function(){
          console.log("collectedgoggles are clicked");
          const bar = document.querySelector("#barModal");
          bar.style.display = "block";
          wear.style.display = "none";
          takeoff.style.display = "block";
          computer.style.display = "none";
          lock.style.display = "none";

        });
        takeoff.addEventListener("click", function(){
          console.log("collectedgoggles are clicked");
          const bar = document.querySelector("#barModal");
          bar.style.display = "none";
          takeoff.style.display = "none";
          wear.style.display = "block";
          computer.style.display = "block";
          lock.style.display = "block";
        });
      };
    }
  },
};
</script>
<style >
:root {
  --scale: 6;
}
* {
  margin: 0;
  padding: 0;
}

html {
  /* font-size: 62.5%; */
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  scroll-behavior: smooth;
}

body {
  background-color: antiquewhite;
  /* width: 100vw;
  height: 100vh; */
  overflow: hidden;
}

.roomOne {
  width: 100%;
  height: 100%;
}

.canvas {
  padding: 0;
  position: absolute;
  background-image: url("~@/assets/Images/space2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
}

#character {
  width: calc(1rem * var(--scale));
  height: calc(1rem * var(--scale));
  overflow: hidden;
  position: absolute;
  top: 5rem;
  left: 0;
  z-index: 1;
}

.Character_spritesheet {
  width: calc(4rem * var(--scale));
  position: absolute;
  left: 0;
}

.Character_animation {
  animation: moveSpritesheet 1s steps(4) infinite;
}

.Character_shadow {
  position: absolute;
  width: calc(1rem * var(--scale));
  height: calc(1rem * var(--scale));
  left: 0;
}

.pixelart {
  image-rendering: pixelated;
}

.face-right {
  top: calc(-1rem * var(--scale));
}
.face-up {
  top: calc(-2rem * var(--scale));
}
.face-left {
  top: calc(-3rem * var(--scale));
}

@keyframes moveSpritesheet {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}

.keypadBtns {
  position: absolute;
  bottom: 3rem;
  display: flex;
  flex-direction: row;
  z-index: 1;
}

.mapItems {
  position: relative;
  margin: 3rem;
  /* height: 45rem !important; */
}

.map-item {
  cursor: pointer;
  position: absolute;
  pointer-events: none;
}

#Computer{
  top: 15rem;
  right: 5rem;
}

#Goggles{
  top: 5rem;
  left: 30rem;
}

#FinalLock{
  top: 15rem;
  left: 10rem;
}

#barModal{
  opacity: 0.3;
  margin-top: 4rem;
  z-index: 5;
}
.popUpModal {
  position: absolute;
  background-color: black;
  height: 5rem;
  width: 5rem;
  display: none;
  color: wheat;
  z-index: 5;
}

.closeModal {
  height: 2rem;
  width: 2rem;
  background-color: red;
}

.flex-column{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flex-row{
  display: flex;
  justify-content: space-around;
}

/* inventory styling */
.inventory {
  border: 0.25rem rgb(0, 0, 0) solid;
  width: calc(30rem);
  height: 6rem;
  margin: auto;
  position: fixed;
  display: flex;
  bottom: 0rem;
  background-color: rgba(19, 27, 99, 0.8);
  left: 30%;
  z-index: -1;
}

#wear{
  color: white;
  z-index: 6;
}

#takeoff{
  color: white;
  z-index: 6;
  display: none;
}

.inventory-item {
  border: solid;
  border-color: rgb(67, 96, 151);
  cursor: pointer;
}

.item-img {
  width: 5rem !important;
  height: 5rem !important;
}

#wear:hover {
  transform: scale(1.2);
  transition: 0.2s;
}
#takeoff:hover {
  transform: scale(1.2);
  transition: 0.2s;
}

.hidden {
  display: none;
}


.modal {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}

.modal-item {
  display: none;
  position: fixed; /* Stay in place */
  top: 0;
  left: 0;
  z-index: 3; /* Sit on top */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 20, 2, 0.6);
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
  z-index: 5;
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
.message {
  display: none;
  width: 4rem;
  margin: auto;
  color: white;
}
</style>
