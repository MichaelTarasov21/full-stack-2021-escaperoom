<template>
  <div class="roomThree">

      <div class="modal-item"> 
        <div class="modal-content">
          <span class="modal_close" @click="closeModal()" >&times;</span>
          <p>Hedge Maze</p>
          <img id="Hedge_Maze" src="../../img/hedgemaze.png" alt="Hedge Maze"/>
        </div>
      </div>

      <div class="canvas" id="canvas">
      <div id="character">
        <img
          class="Character_shadow pixelart"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png"
          alt="Shadow"
        />

        <img
          class="Character_spritesheet pixelart face-down"
          id="spriteCharacter"
          src=" https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacter.png"
          alt="Character"
        />
      </div>

      <div class="mapItems" id="mapItems">
        <div class="map-item forPuzzle" id="FinalLock">
          <img
            class="item-img forTouch"
            src="https://img.icons8.com/bubbles/75/000000/lock-2.png"
          />
          <div class="hidden">
            https://img.icons8.com/bubbles/75/000000/lock-2.png
          </div>
          <div>FinalLock</div>
        </div>
        <div class="map-item forPuzzle" id="Maze">
          <img
            class="item-img forTouch"
            src="https://img.icons8.com/officel/75/000000/computer.png"
          />
          <div class="hidden">
            ../../img/hedgemaze.png
          </div>
          <div>Hedge Maze</div>
        </div>
        <div class="map-item forInventory" id="Torch">
          <img
            class="item-img"
            src="https://img.icons8.com/cotton/64/000000/torch.png"
          />
          <div class="hidden">https://img.icons8.com/cotton/64/000000/torch.png</div>
          <div>&#8204;</div>
        </div>
        <div class="map-item forInventory" id="Skull-1">
          <img
            class="item-img"
            src="https://img.icons8.com/material-two-tone/24/000000/skull.png"
          />
          <div class="hidden">https://img.icons8.com/ultraviolet/40/000000/paper.png</div>
          <div>‌</div>
        </div>
        <div class="map-item forInventory" id="Skull-2">
          <img
            class="item-img"
            src="https://img.icons8.com/material-two-tone/24/000000/skull.png"
          />
          <div class="hidden">https://img.icons8.com/ultraviolet/40/000000/paper.png</div>
          <div>‌</div>
        </div>
        <div class="map-item forInventory" id="Skull-3">
          <img
            class="item-img"
            src="https://img.icons8.com/material-two-tone/24/000000/skull.png"
          />
          <div class="hidden">https://img.icons8.com/ultraviolet/40/000000/paper.png</div>
          <div>‌</div>
        </div>
      </div>
      
      <div class="modal-item" id="final-ans-modal"> 
        <div class="modal-content">
          <span class="modal_close" @click="closeModal()" >&times;</span>
          <p>Room Three Final Puzzle</p>
          <div id="answerCheck"></div>
          <input type="text" id="roomThreeAns" placeholder="Your Answer" />
          <input type="submit" value="Submit" @click="verify()"/>
        </div>
      </div>

      <!-- <div class="map">
        <div class="player">
          <img id="player" src="../../img/redsquare.png" alt="Red Square">
        </div>
        <img class="pos-item" id="Hedge-Maze" src="https://img.icons8.com/officel/75/000000/computer.png"/>
        <div class="map-item" id="Torch">
          <img class="item-img pos-item" src="https://img.icons8.com/cotton/64/000000/torch.png" />
          <div class="hidden">https://img.icons8.com/cotton/64/000000/torch.png</div>
          <div>&#8204;</div>
        </div>
        <div class="map-item" id="Skull-1">
          <img class="item-img pos-item" src="https://img.icons8.com/material-two-tone/24/000000/skull.png" />
          <div class="hidden">https://img.icons8.com/ultraviolet/40/000000/paper.png</div>
          <div>‌</div>
        </div> 
        <div class="map-item" id="Skull-2">
          <img class="item-img pos-item" src="https://img.icons8.com/material-two-tone/24/000000/skull.png" />
          <div class="hidden">https://img.icons8.com/ultraviolet/40/000000/paper.png</div>
          <div>‌</div>
        </div> 
        <div class="map-item" id="Skull-3">
          <img class="item-img pos-item" src="https://img.icons8.com/material-two-tone/24/000000/skull.png" />
          <div class="hidden">https://img.icons8.com/ultraviolet/40/000000/paper.png</div>
          <div>‌</div>
        </div> 
        <img class="pos-item" id="FinalLock" src="https://img.icons8.com/bubbles/75/000000/lock-2.png"/>
      </div> -->
    <!-- <div ref="mapItems"></div> -->
    <div class="inventory" ref="inventory"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'RoomThree',
  emits: ['roomThreeFin'],
    mounted: function(){ 
    this.coordinates();
    //this.walls();
    this.addToInventory();
  
  const sprite = document.getElementById("spriteCharacter");
    const character = document.getElementById("character");
    // upKey = document.getElementById("upKey");
    // leftKey = document.getElementById("left");
    // downKey = document.getElementById("down");
    // rightKey = document.getElementById("right");
    let screenWidth;
    let screenHeight;

    let x = 0;
    let y = 0;

    //screen size
    const findScreenSize = function() {
      console.log("resize");
      //divide by 6 to put in rem
      //6 bc width of sprite is 6
      screenWidth = window.innerWidth / 16 - 6;
      document.getElementById("mapItems").style.width = screenWidth + "rem";
      //8 bc height of sprite is 8
      //plus 8 for inventory
      screenHeight = window.innerHeight / 16 - 14;
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
      console.log("Up key is connected");
      sprite.classList.add("face-up");
      sprite.classList.remove("face-down", "face-right", "face-left");
      y = y - 1;
    };

    const moveRight = function() {
      console.log("Right key is connected");
      sprite.classList.add("face-right");
      sprite.classList.remove("face-down", "face-left", "face-up");
      x = x + 1;
      console.log(x);
    };

    const moveLeft = function() {
      console.log("Left key is connected");
      sprite.classList.add("face-left");
      sprite.classList.remove("face-down", "face-right", "face-up");
      x = x - 1;
    };

    const moveDown = function() {
      console.log("Down key is connected");
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
    };

    document.addEventListener("keydown", function() {
      addAnimation();
      //animate
      keyboardAnimate();
      //check if overboard
      walls();
      updateSpritePosition();
    });

    //when arrow keys are released, stops animation
    document.addEventListener("keyup", function() {
      removeAnimation();
      clearInterval();
    });
  },
  //props: {keyUpStart:Boolean},
  methods:{
    closeModal: function(){
      const modalCloseArray = Array.from(
        document.getElementsByClassName("modal-item")
      );
      modalCloseArray.forEach(function (item){
        item.style.display = "none"; 
      });
    },
    verify: function (){
        console.log("connected");
        var answer = document.getElementById("roomThreeAns").value.toUpperCase();
        console.log(answer);
        if (answer == `ROOMTHREE`) {
          document.getElementById("answerCheck").innerHTML = "";
          document.getElementById("answerCheck").style.color = 'green';
          document
            .getElementById("answerCheck")
            .insertAdjacentHTML("beforeend", `${answer} is Correct :D!`);
          this.$emit('roomThreeFin');
        } else {
          document.getElementById("answerCheck").innerHTML = "";
          document.getElementById("answerCheck").style.color =
            'red';
          document
            .getElementById("answerCheck")
            .insertAdjacentHTML("beforeend", `${answer} is incorrect, try again :(`);
        }
    },
    coordinates: function () {
      console.log("coordinates function is connected");
      document.addEventListener("keydown", function (event) {
        if (
          event.keyCode == "37" ||
          event.keyCode == "38" ||
          event.keyCode == "39" ||
          event.keyCode == "40"
        ) {
          //making the position item arry
          const posItemArray = Array.from(
            document.getElementsByClassName("pos-item")
          );
          const modalArray = Array.from(
            document.getElementsByClassName("modal-item")
          );
          //finding position for each pos-item 
          posItemArray.forEach(function (item, index) {
              //finding the coordinates of the player
              let playerCoords = document
                .querySelector(".player")
                .getBoundingClientRect();
              let playerLeft = Math.round(playerCoords.left / 100) * 100;
              let playerTop = Math.round(playerCoords.top / 100) * 100;
              console.log(
                "player left: " + playerLeft + " player top: " + playerTop
              );
              //finding the coordinates of all objects
              let objectCoords = item.getBoundingClientRect();
              let objectLeft = Math.round(objectCoords.left / 100) * 100;
              let objectTop = Math.round(objectCoords.top / 100) * 100;
              console.log("left: " + objectLeft + " top: " + objectTop);
              //if it is an inventory object - and enter is clicked = it gets added to inventory
              //if it is a modal object - and enter is clicked = a popup opens 
              if (objectLeft === playerLeft && objectTop === playerTop) {
                document.addEventListener('keydown', function (event){
                  const modalItem = modalArray[index];
                  if (event.keyCode == "13"){
                    modalItem.style.display = "block";
                  }
                })
                console.log("Player and Object are touching!!!");
                item.style.transform = "scale(1.2)";
              } else {
                console.log("Still not touching");
                item.style.transform = "scale(1)";
              }
          });  
        }
      });
    }, 
    addToInventory: function () {
      //get array of items on map
      const mapItemArray = Array.from(
        document.getElementsByClassName("map-item")
      );
      console.log(mapItemArray);
      let inventoryArray = [];
      const inventory = document.querySelector(".inventory");

      //if item on map is selected, add to inventory
      mapItemArray.forEach(function (item) {
        //when img is clicked
        item.addEventListener("click", function () {
          let addedItem = {
            name: item.children[2].textContent,
            img: item.children[1].textContent,
          };
          inventoryArray.push(addedItem);
          console.log(inventoryArray);
          inventory.innerHTML = "";
          display();

          item.style.display = "none";
        });
      });

      const display = function () {
        inventoryArray.forEach(function (item) {
          inventory.insertAdjacentHTML(
            "afterbegin",
            `<div class="inventory-item" id="${item.name}" >
          <img class="item-img" src="${item.img}" >
          <div class="hidden">${item.img}</div>
          <div>${item.name}</div>
        </div>`
          );
        });
      };
    },
    // displayMapItems: function () {
    //   this.$refs.mapItems.innerHTML = "";
    //   this.mapItemsArr.forEach(this.printMapItems);
    // },

    // printMapItems: function (item) {
    //   const mapItems = this.$refs.mapItems;
    //   mapItems.insertAdjacentHTML(
    //     "afterbegin",
    //     `<div class="map-item" id="${item.name}">
    //       <img class="item-img" src="${item.img}" >
    //       <div class="hidden">${item.img}</div>
    //       <div>${item.name}</div>
    //     </div>`
    //   );
    //   // item.addEventListener("click", this.addToInventory());
    // },
  },
};
  
</script>

<style scoped>
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
  /* width: 100%;
  height: 100%; */
  padding: 0;
  /* margin: 3rem; */
  position: absolute;
  background-color:black;
  background-image: url("../../img/dungeon.jpg");
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
}

.map-item {
  cursor: pointer;
}

.popUpModal {
  position: absolute;
  background-color: black;
  height: 5rem;
  width: 5rem;
  display: none;
  color: wheat;
}

.closeModal {
  height: 2rem;
  width: 2rem;
  background-color: red;
}

#FinalLock {
  position: absolute;
  bottom: 0;
  right: 0;
}

/* inventory styling */

.inventory {
  border: 0.5rem black solid;
  width: calc(30rem);
  height: 6rem;
  margin: auto;
  position: fixed;
  display: flex;
  bottom: 0rem;
  background-color: rgba(23, 65, 19, 0.8);
}

.inventory-item {
  border: solid;
  /* padding: 1rem; */
  border-color: gray;
  border-width: 0.5rem;
  cursor: pointer;
}

.item-img {
  width: 5rem !important;
  height: 5rem !important;
}

.item-img:hover {
  transform: scale(1.1);
  transition: 0.2s;
}
.flex-row {
  display: flex;
  justify-content: space-around;
}

.hidden {
  display: none;
}

.map {
  background-size: cover;
  height: 70vh;
  width: 70%;
  margin: 0 auto;
  position: relative;
  border: 0.5rem solid black;
  overflow: none;
}

.modal-item {
  display: none;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 20, 2, 0.9);
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

#Skull-1 {
  position: absolute;
  top: 40%;
  left: 15%;
}
#Skull-2 {
  position: absolute;
  top: 60%;
  left: 35%;
}
#Skull-3 {
  position: absolute;
  top: 30%;
  right: 25%;
}

#Hedge_Maze{
  /* position: relative;
  height: 75%; */
  width: 75%;
}
</style>