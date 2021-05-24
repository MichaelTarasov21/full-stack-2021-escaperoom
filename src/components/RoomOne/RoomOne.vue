<template>
  <div class="roomOne">

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
          <img class="item-img forTouch" src="https://img.icons8.com/dusk/200/000000/door-closed.png"/>
          <div class="hidden">
            https://i.ibb.co/qFBnL0y/compscipuzzle.jpg
          </div>
          <div>Portal</div>
          <div class="hidden">
            https://i.ibb.co/WDd9BMQ/compscianswer.png
          </div>
        </div>
        <div class="map-item forPuzzle" id="Computer">
          <img
            class="item-img forTouch"
            src="https://img.icons8.com/officel/75/000000/computer.png"
          />
          <div class="hidden">
            https://i.ibb.co/qFBnL0y/compscipuzzle.jpg
          </div>
          <div>Computer</div>
          <div class="hidden">
            https://i.ibb.co/WDd9BMQ/compscianswer.png
          </div>
        </div>
        <div class="map-item forInventory" id="Wire">
          <img
            class="item-img"
            src="https://img.icons8.com/dusk/75/000000/audio-cable.png"
          />
          <div class="hidden">https://img.icons8.com/dusk/75/000000/audio-cable.png</div>
          <div>Wire</div>
        </div>
        <div class="map-item forInventory" id="Key">
          <img class="item-img" src="https://img.icons8.com/emoji/100/000000/goggles-emoji.png"/>
          <div class="hidden">https://img.icons8.com/emoji/100/000000/goggles-emoji.png</div>
          <div>Goggles</div>
        </div>
      </div>


      <div class="modal-item" id="final-ans-modal">
        <div class="modal-content">
          <span class="modal_close" @click="closeModal()">&times;</span>
          <div id="changePuzzle"></div>
          <!-- <div id="answerCheck"></div>
          <input type="text" id="roomOneAns" placeholder="Your Answer" /> -->
          <input type="submit" value="Submit" @click="verify()" />
        </div>
      </div>
    </div>

    <!-- <div id="keypadBtns" class="keypadBtns"></div> -->
    <!-- <div ref="mapItems"></div> -->
    <div class="inventory" ref="inventory"></div>
  </div>
</template>

<script>
// import func from "vue-editor-bridge";
export default {
  name: "RoomOne",
  emits: ["roomOneFin"],
  mounted: function() {
    this.coordinates();
    this.addToInventory();
    this.changePuzzle();

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
    },
    verify: function() {
      console.log("connected");
      var answer = document.getElementById("roomOneAns").value.toUpperCase();
      console.log(answer);
      if (answer == `ROOMONE`) {
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
          const puzzleArray = Array.from(
            document.getElementsByClassName("forTouch")
          );
          const finalModal = document.querySelector("#final-ans-modal");
          puzzleArray.forEach(function (item) {
            //finding the coordinates of the player
            let playerCoords = document
              .querySelector("#character")
              .getBoundingClientRect();
            let playerLeft = Math.round(playerCoords.left / 100) * 100;
            let playerTop = Math.round(playerCoords.top / 100) * 100;
            //finding the coordinates of all objects
            let objectCoords = item.getBoundingClientRect();
            let objectLeft = Math.round(objectCoords.left / 100) * 100;
            let objectTop = Math.round(objectCoords.top / 100) * 100;
            // const changeModal = document.querySelector("#changePuzzle");
            // let modalArray = [];
            // changeModal.innerHTML = "";
            if (objectLeft === playerLeft && objectTop === playerTop) {
              document.addEventListener("keydown", function (event) {
                if (event.keyCode == "13") {
                  finalModal.style.display = "block";
                  this.changePuzzle();
                }
              });
              console.log("Player and Object are touching!!!");
              item.style.transform = "scale(1.2)";
              // item.addEventListener("click", function() {
              //   let addedItem = {
              //     name: item.parent.children[2].textContent,
              //     img: item.parent.children[1].textContent,
              //   };
              //   modalArray.push(addedItem);
              //   modalArray.forEach(function(modalItem) {
              //     changeModal.innerHTML = 
              //     `<h2>${modalItem.name}</h2>
              //     <p>${modalItem.name}</p>
              //     <img
              //       class=""
              //       src="${modalItem.img}"
              //     />
              //     <div id="answerCheck"></div>
              //     <input type="text" id="roomOneAns" placeholder="Your Answer" />
              //     `
              //     ;
              //   });
              // });
            } else {
              finalModal.style.display = "none";
              console.log("Still not touching");
              item.style.transform = "scale(1)";
            }
          });
        }
      });
    },
    changePuzzle: function() {
      const puzzleArray = Array.from(
        document.getElementsByClassName("forPuzzle")
      );
      let modalArray = [];
      const changeModal = document.querySelector("#changePuzzle");
      changeModal.innerHTML = "";
      puzzleArray.forEach(function(item) {
        //when img is clicked
        item.addEventListener("click", function() {
          let addedItem = {
            name: item.children[2].textContent,
            img: item.children[1].textContent,
            answerimg: item.children[3].textContent,
          };
          // modalArray.splice(0, 1, addedItem);
          modalArray.push(addedItem);
          display();
        });
      });
      const display = function() {
        modalArray.forEach(function(item) {
          changeModal.innerHTML = 
          `<h2>${item.name}</h2>
          <p>${item.name}</p>
          <div class="flex-row">
            <img src="${item.img}" width="250rem" height="auto" alt="">
            <div class="flex-column">
              <img src="${item.answerimg}" width="250rem" height="auto" alt="">
              <div id="answerCheck"></div>
              <input type="text" id="roomOneAns" placeholder="Your Answer" />
            </div>
          </div>`
          ;
        });
      };
    },
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
  /* width: 100%;
  height: 100%; */
  /* margin: 3rem; */
  padding: 0;
  position: absolute;
  background-color:black;
  background-image: url("../../img/space2.jpg");
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
  z-index: 1}

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
.flex-column{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flex-row{
  display: flex;
  justify-content: center;
}

#FinalLock {
  position: absolute;
  bottom: 5rem;
  right: 5rem;
}

#Wire {
  position: absolute;
  bottom: 5rem;
  left: 5rem;
}

#Computer{
  position: absolute;
  top: 5rem;
  left: 20rem;
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
/* start of old code */

/* :root {
  --pixel-size: 2px;
} */

/* #FinalLock {
  position: absolute;
  right: 0;
  bottom: 0;
} */
/* .player {
  width: 2rem;
  height: 2rem;
  position: absolute;
  overflow: hidden;
} */
.map {
  background-image: url("../../img/maze.png");
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
  top: 0;
  z-index: 1; /* Sit on top */
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
</style>
