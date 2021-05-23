<template>
  <div class="roomFour">
    <h1>Room Four Canvas Area</h1>
    <div class="modal-item"> 
        <div class="modal-content" id="ArcadeBackdrop">
          <span class="modal_close" @click="closeModal()" >&times;</span>
          <div id="Error" v-if="Minigamewon">
            <h2>Error</h2>
            <img src="@/assets/Images/Number_Clue.jpg">
          </div>
          <SpaceInvaders v-else @Minigamewon="Minigamewon = true"/>
        </div>
      </div>
      <div class="modal-item"> 
        <div class="modal-content" id="BriefcaseBackdrop">
          <span class="modal_close" @click="closeModal()" >&times;</span>
          <Note v-if="Notetaken" />
          <div v-else-if="BriefcaseOpened">
          <h1> You see a note inside the suitecase </h1>
          <button id="NoteTaker" @click="Notetaken = true"> Take </button>
          </div>
          <Briefcase v-else @BriefcaseOpened="BriefcaseOpened = true" />
        </div>
      </div>
      <div class="modal-item"> 
        <div class="modal-content" id="final-ans-modal-content">
          <span class="modal_close" @click="closeModal()" >&times;</span>
          <LogicPuzzle @Finish="finish" />
        </div>
      </div>
      <div class="map">
        <div class="player">
          <img id="player" src="@/img/redsquare.png" alt="Red Square">
        </div>
        <img class="pos-item" id="Arcade" width=75px height="80px" src="@/assets/Images/Arcade_Machine.jpg"/>
        <img class="pos-item" id="Briefcase" width=75px height="80px"  src="@/assets/Images/Briefcase.png" />
        <img class="pos-item" id="FinalLock" src="https://img.icons8.com/bubbles/75/000000/lock-2.png"/>
      </div>
    <!-- <div ref="mapItems"></div> -->
    <div class="inventory" ref="inventory"></div>
  </div>
</template>

<script>
import SpaceInvaders from "./SpaceInvaders.vue"
import Briefcase from "./Briefcase.vue"
import Note from "./Note.vue"
import LogicPuzzle from "./LogicPuzzle.vue"
export default {
  name: 'RoomFour',
  emits: ['roomFourFin'],
  components:{
    SpaceInvaders,
    Briefcase,
    Note,
    LogicPuzzle,
  },
  data(){
    return{
    Minigamewon: false,
    BriefcaseOpened: false,
    Notetaken: false,
    }
  },
  mounted: function () {
    this.movement();
    this.coordinates();
    // this.displayMapItems();
    this.addToInventory();
  },
  methods:{
    closeModal: function(){
      const modalCloseArray = Array.from(
        document.getElementsByClassName("modal-item")
      );
      modalCloseArray.forEach(function (item){
        item.style.display = "none"; 
      });
    },
    finish: function (){
        this.$emit('roomFourFin');
    },
    movement: function () {
      var x = 0;
      var y = 0;
      var leftLimit = 0;
      var rightLimit = document.querySelector(".map").getBoundingClientRect().width;
      var topLimit = 0;
      var bottomLimit = document.querySelector(".map").offsetHeight;
      document.addEventListener("keydown", function (event) {
        if (event.keyCode == "38") {
          y -= 20;
          if (y < topLimit) { y = topLimit }
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        } else if (event.keyCode == "39") {
          x += 20;
          if (x > rightLimit) { x = rightLimit }
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        } else if (event.keyCode == "37") {
          x -= 20;
          if (x < leftLimit) { x = leftLimit }
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        } else if (event.keyCode == "40") {
          y += 20;
          if (y > bottomLimit) { y = bottomLimit }
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        }
      });
    },
    coordinates: function () {
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
              //finding the coordinates of all objects
              let objectCoords = item.getBoundingClientRect();
              let objectLeft = Math.round(objectCoords.left / 100) * 100;
              let objectTop = Math.round(objectCoords.top / 100) * 100;
              //if it is an inventory object - and enter is clicked = it gets added to inventory
              //if it is a modal object - and enter is clicked = a popup opens 
              if (objectLeft === playerLeft && objectTop === playerTop) {
                document.addEventListener('keydown', function (event){
                  if (event.keyCode == "13"){  
                    const modalItem = modalArray[index];
                    modalItem.style.display = "block";
                  }
                })
                item.style.transform = "scale(1.2)";
              } else {
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
  }
}
</script>

<style scoped>
:root {
  --pixel-size: 2px;
}
#FinalLock {
  position: absolute;
  right: 0;
  bottom: 0;
}
.player {
  width: 2rem;
  height: 2rem;
  position: absolute;
  overflow: hidden;
}
.map {
  /* background-image: url("../../img/maze.png"); */
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
#Briefcase{
  position: absolute;
  right: 0%;
}
#BriefcaseBackdrop{
  background-image: url("~@/assets/Images/Briefcase_Backdrop.jpg");
  height: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
#ArcadeBackdrop{
  height: 70%;
  background-image: url("~@/assets/Images/Arcade_Backdrop.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
#Error{
  position: absolute;
	left: 15%;
  color: white;
  height: 70%;
  width: 70%;
  background-color: black;
}
#NoteTaker{
          background-color: black;
}
#final-ans-modal-content {
  height: 70%;
}
</style>
