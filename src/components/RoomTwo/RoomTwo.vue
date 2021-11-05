<template>
  <div class="roomTwo">
    <div class="popUpModal" id="popUpModal">
      <div class="closeModal" id="closeModal"></div>
      <div id="modal-content"></div>
    </div>

    <div class="canvas" id="canvas">
      <div id="character">
        <img class="Character_shadow pixelart" src="@/assets/Images/Character_Shadow.png" alt="Shadow" />

        <img class="Character_spritesheet pixelart face-down" id="spriteCharacter" src="@/assets/Images/Character.png" alt="Character" />
      </div>

      <div class="mapItems" id="mapItems">
        <div class="map-item" id="Ocean-Chest">
          <img class="item-img pos-item" src="@/assets/Images/RoomTwo/Ocean-Chest.png" />
          <div class="hidden">
            @/assets/Images/RoomTwo/Ocean-Chest.png
          </div>
          <div class="hidden">Ocean-Chest</div>
          <div class="modal-item" id="final-ans-modal">
            <div class="modal-content">
              <span class="modal_close" @click="closeModal()">&times;</span>
              <h4>The Chest Catastrophe</h4>
              <br />
              <button id="Ocean-Chest-Button">
                Use Key
              </button>
              <p id="Ocean-Chest-Message"></p>
              <div id="Ocean-Chest-Riddle">
                <p>Here's a long lost letter... Find the addressed...</p>
                <img src="@/assets/Images/RoomTwo/Poem_Puzzle.jpg" alt="" />
                <div id="Ocean-Chest-answerCheck"></div>
                <input type="text" id="OceanChestAns" placeholder="Your Answer" />
                <input type="submit" value="Submit" @click="OceanChestVerify()" />
              </div>
            </div>
          </div>
        </div>

        <div class="map-item forInventory" id="Ocean-Key">
          <img class="item-img pos-item" src="@/assets/Images/RoomTwo/key.png" />
          <div class="hidden">
            https://img.icons8.com/dusk/256/000000/key.png
          </div>
          <div class="hidden">Ocean-Key</div>
          <div class="message">
            Click to Collect
          </div>
        </div>

        <div class="map-item" id="Ocean-Lobster">
          <img class="item-img pos-item" src="@/assets/Images/RoomTwo/shrimp-and-lobster.png" />
          <div class="hidden">
            @/assets/Images/RoomTwo/shrimp-and-lobster.png
          </div>
          <div class="hidden">Ocean-Lobster</div>
          <div class="modal-item" id="Ocean-Lobster-Modal">
            <div class="modal-content">
              <span class="modal_close" @click="closeModal()">&times;</span>
              <h4>Mr.Krabs' Kandy Kunundrum</h4>
              <p>
                Mr. Krab's has gotten greedy with his gummy bears and won't share with the Bikini Bottom. Find the passcode to help free them!
              </p>
              <p>Red Orange Yellow Green</p>
              <img src="@/assets/Images/RoomTwo/gummy_bears.jpg" alt="" />
              <div id="Ocean-Lobster-answerCheck"></div>
              <input type="text" id="OceanLobsterAns" placeholder="Your Answer" />
              <input type="submit" value="Submit" @click="OceanLobsterVerify()" />
            </div>
          </div>
        </div>

        <div class="map-item" id="Ocean-FinalLock">
          <img class="item-img pos-item" src="@/assets/Images/RoomTwo/final-lock.png" @click="nextRoom()" />
          <div class="hidden">
            src="@/assets/Images/RoomTwo/final-lock.png"
          </div>
          <div class="hidden">Ocean-FinalLock</div>
          <div class="modal-item" id="final-ans-modal">
            <div class="modal-content">
              <span class="modal_close" @click="closeModal()">&times;</span>
              <h4>The Final Puzzle</h4>
              <p>Mr.Krabs[0]</p>

              <p>Chest Surname</p>
              <p style="font-style: italic">*san spaces*</p>
              <br />
              <p>_ _ _ _</p>
              <br />

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
  let inventoryArray = [];

  export default {
    name: "RoomTwo",
    emits: ["roomTwoFin"],

    mounted: function() {
      this.addToInventory();

      const sprite = document.getElementById("spriteCharacter");
      const character = document.getElementById("character");
      let screenWidth;
      let screenHeight;

      let x = 0;
      let y = 0;

      //screen size
      const findScreenSize = function() {
        //divide by 6 to put in rem
        //6 bc width of sprite is 6
        screenWidth = window.innerWidth / 16 - 6;
        document.getElementById("canvas").style.width = window.innerWidth / 16 + "rem";
        //8 bc height of sprite is 8
        //plus 8 for inventory
        screenHeight = window.innerHeight / 16 - 14;
        document.getElementById("canvas").style.height = window.innerHeight / 16 + "rem";
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
        const modalArray = Array.from(document.getElementsByClassName("modal-item"));
        let playerCoords = document.getElementById("character").getBoundingClientRect();
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
          if (playerRight > objectLeft && playerLeft < objectRight && playerBottom > objectTop && playerTop < objectBottom) {
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
        const modalCloseArray = Array.from(document.getElementsByClassName("modal-item"));
        modalCloseArray.forEach(function(item) {
          item.style.display = "none";
        });
        modalCloseArray.style.display = "none";
      },
      verify: function() {
        var answer = document.getElementById("roomTwoAns").value.toUpperCase();
        if (answer == `6POE`) {
          document.getElementById("answerCheck").innerHTML = "";
          document.getElementById("answerCheck").style.color = "green";
          document.getElementById("answerCheck").insertAdjacentHTML("beforeend", `${answer} is Correct :D!`);
          this.$emit("roomTwoFin");
        } else {
          document.getElementById("answerCheck").innerHTML = "";
          document.getElementById("answerCheck").style.color = "red";
          document.getElementById("answerCheck").insertAdjacentHTML("beforeend", `${answer} is incorrect, try again :(`);
        }
      },
      OceanLobsterVerify: function() {
        var answer = document.getElementById("OceanLobsterAns").value;
        if (answer == `6245`) {
          document.getElementById("Ocean-Lobster-answerCheck").innerHTML = "";
          document.getElementById("Ocean-Lobster-answerCheck").style.color = "green";
          document.getElementById("Ocean-Lobster-answerCheck").insertAdjacentHTML("beforeend", `${answer} is Correct ..  Quick! Swim away before Mr. Krabs finds out!`);
        } else {
          document.getElementById("Ocean-Lobster-answerCheck").innerHTML = "";
          document.getElementById("Ocean-Lobster-answerCheck").style.color = "red";
          document.getElementById("Ocean-Lobster-answerCheck").insertAdjacentHTML("beforeend", `${answer} is incorrect, these candies are all mine!`);
        }
      },

      OceanChestVerify: function() {
        var answer = document.getElementById("OceanChestAns").value.toUpperCase();
        if (answer == `EDGAR ALLAN POE`) {
          document.getElementById("Ocean-Chest-answerCheck").innerHTML = "";
          document.getElementById("Ocean-Chest-answerCheck").style.color = "green";
          document.getElementById("Ocean-Chest-answerCheck").insertAdjacentHTML("beforeend", `${answer} is Correct .. edgar allan poe poe poe poe poeeee...`);
        } else {
          document.getElementById("Ocean-Chest-answerCheck").innerHTML = "";
          document.getElementById("Ocean-Chest-answerCheck").style.color = "red";
          document.getElementById("Ocean-Chest-answerCheck").insertAdjacentHTML("beforeend", `${answer} is incorrect, these candies are all mine!`);
        }
      },

      addToInventory: function() {
        //get array of items on map
        const mapItemArray = Array.from(document.getElementsByClassName("forInventory"));

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

        const useKey = function() {
          if (inventoryArray.length === 1) {
            document.getElementById("Ocean-Chest-Riddle").style.display = "block";
            document.getElementById("Ocean-Chest-Button").style.display = "none";
            inventory.innerHTML = "";
          } else {
            document.getElementById("Ocean-Chest-Button").addEventListener("click", function() {
              document.getElementById("Ocean-Chest-Message").innerHTML = "No Key in Inventory";
            });
          }
        };
        document.getElementById("Ocean-Chest-Button").addEventListener("click", useKey);
      },
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
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  body {
    overflow: hidden;
  }
  img {
    width: 100%;
  }

  .roomTwo {
    width: 100%;
    height: 100%;
  }

  .canvas {
    padding: 0;
    position: absolute;
    z-index: -1;
    background-image: url("../../assets/Images/RoomTwo/Ocean Background_New.jpg");
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
    left: 70%;
  }

  #Ocean-Chest-Riddle {
    display: none;
  }

  #Ocean-Key {
    top: 60%;
    left: 45%;
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

  #Ocean-FinalLock {
    position: absolute;
    top: 100;
    bottom: 0 !important;
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
    /* left: 25%; */
  }

  .inventory-item {
    border: none;
    cursor: pointer;
    padding: 0.5rem;
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
    z-index: 10; /* Sit on top */
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
    margin: 3rem auto;
    padding: 3rem;
    z-index: 3;
    border-radius: 1rem;
    max-width: 50rem;
  }

  .modal-content img {
    max-width: 25rem;
    max-height: 25rem;
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
