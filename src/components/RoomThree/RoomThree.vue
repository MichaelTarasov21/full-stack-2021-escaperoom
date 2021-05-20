<template>
  <div class="roomThree">
    <h1>Room Three Canvas Area</h1>
      <div class="modal-item"> 
        <div class="modal-content">
          <span class="modal_close" @click="closeModal()" >&times;</span>
          <p>Hedge Maze</p>
          <img id="Hedge_Maze" src="../../img/hedgemaze.png" alt="Hedge Maze"/>
        </div>
      </div>
      <!-- <div class="modal-item"> 
        <div class="modal-content">
          <span class="modal_close" @click="closeModal()" >&times;</span>
          <p>Skull</p>
          <h3>Just a Skull</h3>
        </div>
      </div> --> 
      <div class="modal-item" id="final-ans-modal"> 
        <div class="modal-content">
          <span class="modal_close" @click="closeModal()" >&times;</span>
          <p>Room Three Final Puzzle</p>
          <div id="answerCheck"></div>
          <input type="text" id="roomThreeAns" placeholder="Your Answer" />
          <input type="submit" value="Submit" @click="verify()"/>
        </div>
      </div>
      <div class="map">
        <div class="player">
          <img id="player" src="../../img/redsquare.png" alt="Red Square">
        </div>
        <img class="pos-item" id="Hedge-Maze" src="https://img.icons8.com/officel/75/000000/computer.png"/>
        <div class="map-item" id="Torch">
          <img class="item-img pos-item" src="https://img.icons8.com/cotton/64/000000/torch.png" />
          <div class="hidden">https://img.icons8.com/cotton/64/000000/torch.png</div>
          <div>Torch</div>
        </div>
        <div class="map-item" id="Skull-1">
          <img class="item-img pos-item" src="https://img.icons8.com/material-two-tone/24/000000/skull.png" />
          <div class="hidden">https://img.icons8.com/ultraviolet/40/000000/paper.png</div>
          <div>Skull</div>
        </div> 
        <div class="map-item" id="Skull-2">
          <img class="item-img pos-item" src="https://img.icons8.com/material-two-tone/24/000000/skull.png" />
          <div class="hidden">https://img.icons8.com/ultraviolet/40/000000/paper.png</div>
          <div>"Skull"</div>
        </div> 
        <div class="map-item" id="Skull-3">
          <img class="item-img pos-item" src="https://img.icons8.com/material-two-tone/24/000000/skull.png" />
          <div class="hidden">https://img.icons8.com/ultraviolet/40/000000/paper.png</div>
          <div>A Skull</div>
        </div> 
        <img class="pos-item" id="FinalLock" src="https://img.icons8.com/bubbles/75/000000/lock-2.png"/>
      </div>
    <!-- <div ref="mapItems"></div> -->
    <div class="inventory" ref="inventory"></div>
  </div>
</template>

<script>
export default {
  name: 'RoomThree',
  emits: ['roomThreeFin'],
    mounted: function(){
    this.movement();  
    this.coordinates();
    //this.walls();
    this.addToInventory();
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
    movement: function () {
      console.log("movement function is connected");
      var x = 0;
      var y = 0;
      var leftLimit = 0;
      var rightLimit = document.querySelector(".map").offsetWidth;
      console.log("width:" + rightLimit);
      var topLimit = 0;
      var bottomLimit = document.querySelector(".map").offsetHeight;
      console.log("height:" + bottomLimit);
      document.addEventListener("keydown", function (event) {
        if (event.keyCode == "38") {
          console.log("Up key is connected");
          y -= 20;
          if (y < topLimit) { y = topLimit }
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        } else if (event.keyCode == "39") {
          console.log("Right key is connected");
          x += 20;
          if (x > rightLimit) { x = rightLimit }
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        } else if (event.keyCode == "37") {
          console.log("Left key is connected");
          x -= 20;
          if (x < leftLimit) { x = leftLimit }
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        } else if (event.keyCode == "40") {
          console.log("Down key is connected");
          y += 20;
          if (y > bottomLimit) { y = bottomLimit }
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        }
        console.log(x, y)
      });
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