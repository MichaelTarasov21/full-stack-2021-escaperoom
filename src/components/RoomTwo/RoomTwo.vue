<template>
  <div class="roomTwo">
    <!-- <h1>Room One</h1> -->

    <div class="popUpModal" id="popUpModal">
      <div class="closeModal" id="closeModal"></div>
      <div id="modal-content"></div>
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
        <div class="map-item" id="Ocean-Chest">
          <img
            class="item-img pos-item"
            src="https://img.icons8.com/dusk/256/000000/treasure-chest.png"
          />
          <div class="hidden">
            https://img.icons8.com/dusk/256/000000/treasure-chest.png
          </div>
          <div class="hidden">Ocean-Chest</div>
          <div class="modal-item" id="final-ans-modal">
            <div class="modal-content">
              <span class="modal_close" @click="closeModal()">&times;</span>
              <p>The Chest Conundrum</p>
              <div id="answerCheck"></div>
              <input type="text" id="roomTwoAns" placeholder="Your Answer" />
              <input type="submit" value="Submit" @click="verify()" />
            </div>
          </div>
        </div>

        <div class="map-item forInventory" id="Ocean-Key">
          <img
            class="item-img pos-item"
            src="https://img.icons8.com/dusk/256/000000/key.png"
          />
          <div class="hidden">
            https://img.icons8.com/dusk/256/000000/key.png
          </div>
          <div class="hidden">Ocean-Key</div>
          <div class="message">
            Click to Collect
          </div>
        </div>

        <div class="map-item" id="Ocean-Lobster">
          <img
            class="item-img pos-item"
            src="https://img.icons8.com/fluent/96/000000/shrimp-and-lobster.png"
          />
          <div class="hidden">
            https://img.icons8.com/fluent/96/000000/shrimp-and-lobster.png
          </div>
          <div class="hidden">Ocean-Lobster</div>
          <div class="modal-item" id="Ocean-Lobster-Modal">
            <div class="modal-content">
              <span class="modal_close" @click="closeModal()">&times;</span>
              <p>Mr.Krabs' Dilemma</p>
              <div id="Ocean-Lobster-answerCheck"></div>
              <input type="text" placeholder="Your Answer" />
              <input type="submit" value="Submit" @click="verify()" />
            </div>
          </div>
        </div>

        <div class="map-item" id="FinalLock">
          <img
            class="item-img pos-item"
            src="https://img.icons8.com/dusk/256/000000/lock-2.png"
            @click="nextRoom()"
          />
          <div class="hidden">
            src="https://img.icons8.com/dusk/256/000000/lock-2.png"
          </div>
          <div class="hidden">FinalLock</div>
          <div class="modal-item" id="final-ans-modal">
            <div class="modal-content">
              <span class="modal_close" @click="closeModal()">&times;</span>
              <p>Room Two Final Puzzle</p>
              <div id="answerCheck"></div>
              <input type="text" id="roomTwoAns" placeholder="Your Answer" />
              <input type="submit" value="Submit" @click="verify()" />
            </div>
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
  name: "RoomTwo",
  emits: ["roomTwoFin"],
  mounted: function() {
    // this.movement();
    // this.coordinates();
    // // this.displayMapItems();
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
      // console.log("Up key is connected");
      sprite.classList.add("face-up");
      sprite.classList.remove("face-down", "face-right", "face-left");
      y = y - 1;
    };

    const moveRight = function() {
      // console.log("Right key is connected");
      sprite.classList.add("face-right");
      sprite.classList.remove("face-down", "face-left", "face-up");
      x = x + 1;
      console.log(x);
    };

    const moveLeft = function() {
      // console.log("Left key is connected");
      sprite.classList.add("face-left");
      sprite.classList.remove("face-down", "face-right", "face-up");
      x = x - 1;
    };

    const moveDown = function() {
      // console.log("Down key is connected");
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

    //keypad
    // const keypadArray = [
    //   {
    //     key: "upKey",
    //     keyfunction: function() {
    //       console.log("Up key is connected");
    //       sprite.classList.add("face-up");
    //       sprite.classList.remove("face-down", "face-right", "face-left");
    //       y = y - 1;
    //     },
    //     text: "up",
    //   },
    //   {
    //     key: "leftKey",
    //     keyfunction: function() {
    //       console.log("Left key is connected");
    //       sprite.classList.add("face-left");
    //       sprite.classList.remove("face-down", "face-right", "face-up");
    //       x = x - 1;
    //     },
    //     text: "left",
    //   },
    //   {
    //     key: "downKey",
    //     keyfunction: function() {
    //       console.log("Down key is connected");
    //       sprite.classList.add("face-down");
    //       sprite.classList.remove("face-right", "face-left", "face-up");
    //       y = y + 1;
    //     },
    //     text: "down",
    //   },
    //   {
    //     key: "rightKey",
    //     keyfunction: function() {
    //       console.log("Right key is connected");
    //       sprite.classList.add("face-right");
    //       sprite.classList.remove("face-down", "face-left", "face-up");
    //       x = x + 1;
    //     },
    //     text: "right",
    //   },
    // ];

    // const modalContent = document.getElementById("modal-content");
    // const closeModal = document.getElementById("closeModal");
    // const popUpModal = document.getElementById("popUpModal");
    // closeModal.addEventListener("click", function() {
    //   popUpModal.style.display = "none";
    // });

    // const keypadBtns = document.getElementById("keypadBtns");
    // console.log(keypadBtns);

    // keypadArray.forEach((keypad) => {
    //   document
    //     .getElementById("keypadBtns")
    //     .insertAdjacentHTML(
    //       "beforeend",
    //       `<div id="${keypad.text}" class="key"> ${keypad.text} </div>`
    //     );
    //   document
    //     .getElementById(keypad.text)
    //     .addEventListener("mousedown", function() {
    //       popUpModal.style.display = "block";
    //       modalContent.innerHTML = keypad.text;

    //       addAnimation();
    //       setInterval(function keypadIntervalFunc() {
    //         keypad.keyfunction();
    //         walls();
    //         updateSpritePosition();
    //       }, 50);
    //     });
    //   document
    //     .getElementById(keypad.text)
    //     .addEventListener("mouseup", function() {
    //       removeAnimation();
    //       // clearInterval(keypadIntervalFunc);
    //     });
    // });

    // upKey.addEventListener('mousedown', function () {
    //     addAnimation();
    //     interval = setInterval(function () {
    //         moveUp()
    //         walls();
    //         updateSpritePosition();
    //     }, 100)
    // })

    // upKey.addEventListener('mouseup', function () {
    //     removeAnimation();
    //     clearInterval(interval);
    // })

    // leftKey.addEventListener('mousedown', function () {
    //     moveLeft()
    //     walls();
    //     updateSpritePosition();
    // });

    // downKey.addEventListener('mousedown', function () {
    //     moveDown()
    //     walls();
    //     updateSpritePosition();
    // });

    // rightKey.addEventListener('mousedown', function () {
    //     moveRight()
    //     walls();
    //     updateSpritePosition();
    // });
  },
  // props: { keyUpStart: Boolean },
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
    verify: function() {
      console.log("connected");
      var answer = document.getElementById("roomTwoAns").value.toUpperCase();
      console.log(answer);
      if (answer == `ROOMTWO`) {
        document.getElementById("answerCheck").innerHTML = "";
        document.getElementById("answerCheck").style.color = "green";
        document
          .getElementById("answerCheck")
          .insertAdjacentHTML("beforeend", `${answer} is Correct :D!`);
        this.$emit("roomTwoFin");
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
    // movement: function () {
    //   console.log("movement function is connected");
    //   var x = 0;
    //   var y = 0;
    //   var leftLimit = 0;
    //   var rightLimit = document.querySelector(".map").getBoundingClientRect()
    //     .width;
    //   console.log("width:" + rightLimit);
    //   var topLimit = 0;
    //   var bottomLimit = document.querySelector(".map").offsetHeight;
    //   console.log("height:" + bottomLimit);
    //   document.addEventListener("keydown", function (event) {
    //     if (event.keyCode == "38") {
    //       console.log("Up key is connected");
    //       y -= 20;
    //       if (y < topLimit) {
    //         y = topLimit;
    //       }
    //       document.querySelector(
    //         ".player"
    //       ).style.transform = `translate(${x}px,${y}px)`;
    //     } else if (event.keyCode == "39") {
    //       console.log("Right key is connected");
    //       x += 20;
    //       if (x > rightLimit) {
    //         x = rightLimit;
    //       }
    //       document.querySelector(
    //         ".player"
    //       ).style.transform = `translate(${x}px,${y}px)`;
    //     } else if (event.keyCode == "37") {
    //       console.log("Left key is connected");
    //       x -= 20;
    //       if (x < leftLimit) {
    //         x = leftLimit;
    //       }
    //       document.querySelector(
    //         ".player"
    //       ).style.transform = `translate(${x}px,${y}px)`;
    //     } else if (event.keyCode == "40") {
    //       console.log("Down key is connected");
    //       y += 20;
    //       if (y > bottomLimit) {
    //         y = bottomLimit;
    //       }
    //       document.querySelector(
    //         ".player"
    //       ).style.transform = `translate(${x}px,${y}px)`;
    //     }
    //     console.log(x, y);
    //   });
    // },
    // coordinates: function () {
    //   console.log("coordinates function is connected");
    //   document.addEventListener("keydown", function (event) {
    //     if (
    //       event.keyCode == "37" ||
    //       event.keyCode == "38" ||
    //       event.keyCode == "39" ||
    //       event.keyCode == "40"
    //     ) {
    //       //making the position item arry
    //       const posItemArray = Array.from(
    //         document.getElementsByClassName("pos-item")
    //       );
    //       const modalArray = Array.from(
    //         document.getElementsByClassName("modal-item")
    //       );
    //       //finding position for each pos-item
    //       posItemArray.forEach(function (item, index) {
    //         //finding the coordinates of the player
    //         let playerCoords = document
    //           .querySelector(".player")
    //           .getBoundingClientRect();
    //         let playerLeft = Math.round(playerCoords.left / 100) * 100;
    //         let playerTop = Math.round(playerCoords.top / 100) * 100;
    //         console.log(
    //           "player left: " + playerLeft + " player top: " + playerTop
    //         );
    //         //finding the coordinates of all objects
    //         let objectCoords = item.getBoundingClientRect();
    //         let objectLeft = Math.round(objectCoords.left / 100) * 100;
    //         let objectTop = Math.round(objectCoords.top / 100) * 100;
    //         console.log("left: " + objectLeft + " top: " + objectTop);
    //         //if it is an inventory object - and enter is clicked = it gets added to inventory
    //         //if it is a modal object - and enter is clicked = a popup opens
    //         if (objectLeft === playerLeft && objectTop === playerTop) {
    //           document.addEventListener("keydown", function (event) {
    //             if (event.keyCode == "13") {
    //               const modalItem = modalArray[index];
    //               modalItem.style.display = "block";
    //             }
    //           });
    //           console.log("Player and Object are touching!!!");
    //           item.style.transform = "scale(1.2)";
    //         } else {
    //           console.log("Still not touching");
    //           item.style.transform = "scale(1)";
    //         }
    //       });
    //     }
    //   });
    // },
    addToInventory: function() {
      //get array of items on map
      const mapItemArray = Array.from(
        document.getElementsByClassName("forInventory")
      );
      console.log(mapItemArray);
      let inventoryArray = [];
      const inventory = document.querySelector(".inventory");
      //if item on map is selected, add to inventory
      mapItemArray.forEach(function(item) {
        //when img is clicked
        item.addEventListener("click", function() {
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
      const display = function() {
        inventoryArray.forEach(function(item) {
          inventory.insertAdjacentHTML(
            "afterbegin",
            `<div class="inventory-item" id="${item.name}" >
          <img class="item-img" src="${item.img}" >
          <div class="hidden">${item.img}</div>
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
  /* background-color: antiquewhite; */
  /* width: 100vw;
  height: 100vh; */
  overflow: hidden;
}

.roomTwo {
  width: 100%;
  height: 100%;
}

.canvas {
  /* width: 100%;
  height: 100%; */
  padding: 0;
  /* margin: 3rem; */
  position: absolute;
  z-index: -1;
  background-image: url("../../assets/Images/RoomTwo/Ocean Background.png");
  z-index: -2;
}

#character {
  width: calc(1rem * var(--scale));
  height: calc(1rem * var(--scale));
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
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
  position: absolute;
  pointer-events: none;
}

#Ocean-Chest {
  top: 10%;
  left: 50%;
}

#Ocean-Key {
  top: 50%;
  left: 30%;
}

#Ocean-Lobster {
  top: 40%;

}

.popUpModal {
  position: absolute;
  background-color: black;
  height: 5rem;
  width: 5rem;
  display: none;
  color: wheat;
  z-index: 3;
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
  border-color: rgb(99, 88, 194);
  border-width: 0.2rem;
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
/* start of old code */

.modal {
  position: absolute;
  top: 0;
  left: 0;
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

.message {
  display: none;
  width: 4rem;
  margin: auto;
}
</style>
