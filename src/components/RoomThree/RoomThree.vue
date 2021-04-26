<template>
  <div class="roomThree">
    <h1>Room Three Canvas Area</h1>
      <div class="modal_three" id="final-ans-modal"> 
        <div class="modal_three-content">
          <span class="room_three_close" id="final-ans-close" @click="closeModal()" >&times;</span>
          <p>Type Room One Answer</p>
          <div id="answerCheck"></div>
          <input type="text" id="roomThreeAns" placeholder="Your Answer" />
          <input type="submit" value="Submit" @click="verify()"/>
        </div>
      </div>
     <div class="map">
      <div class="player">
        <img id="player" src="../../img/redsquare.png" alt="Red Square" />
      </div>
      <img
        id="finalLock"
        class="final-lock"
        @click="roomThreeModal = true"
        src="https://img.icons8.com/bubbles/100/000000/lock-2.png"
      />
    </div>
    <div class="map-item" id="Key">
      <img class="item-img" src="https://source.unsplash.com/random" />
      <div class="hidden">https://source.unsplash.com/random</div>
      <div>Key</div>
    </div>
    <!-- <div ref="mapItems"></div> -->
    <div class="inventory" ref="inventory"></div>
  </div>
</template>

<script>
export default {
  name: 'RoomThree',
  emits: ['roomThreeFin'],
  data() {
    return {
      roomThreeModal: false,
      mapItemsArr: [
        {
          name: "Key",
          img: "https://source.unsplash.com/random",
        },
        {
          name: "Chest",
          img: "https://source.unsplash.com/random",
        },
      ],
    };
  },
  mounted: function(){
    this.movement();  
    this.coordinates();
    //this.walls();
    this.addToInventory();
  },
  props: {keyUpStart:Boolean},
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
        var answer = document.getElementById("roomOneAns").value.toUpperCase();
        console.log(answer);
        if (answer == `ROOMONE`) {
          document.getElementById("answerCheck").innerHTML = "";
          document.getElementById("answerCheck").style.color = 'green';
          document
            .getElementById("answerCheck")
            .insertAdjacentHTML("beforeend", `${answer} is Correct :D!`);
          this.$emit('roomOneFin');
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
      //do this for all the directions
      // make it effiecent by combining
      //and looping
      console.log("movement function is connected");
      var x = 0;
      var y = 0;
      let mapCoords = document.querySelector(".map").getBoundingClientRect();
      let mapLeft = Math.ceil(mapCoords.left / 100) * 100;
      let mapRight = Math.ceil(mapCoords.right / 100) * 100;
      let mapTop = Math.ceil(mapCoords.top / 100) * 100;
      let mapBottom = Math.ceil(mapCoords.bottom / 100) * 100;
      let playerCoords = document.querySelector(".player").getBoundingClientRect();
      let playerLeft = Math.round(playerCoords.left / 100) * 100;
      let playerRight = Math.ceil(mapCoords.right / 100) * 100;
      let playerTop = Math.round(playerCoords.top / 100) * 100;
      let playerBottom = Math.ceil(mapCoords.bottom / 100) * 100;
    console.log("player left: " + playerLeft + " player top: " + playerTop);
    console.log("Map left: " + mapLeft + " Map top: " + mapTop + " Map right: " + mapRight + " Map bottom: " + mapBottom);
      document.addEventListener("keydown", function (event) {
        if (event.keyCode == "38") {
          console.log("Up key is connected");
          }else if (mapTop === playerTop ) {
            console.log("Touched Top Wall");
            y -= 40;
            document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
          }else{
            y += 20;
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
          }   
        });
        document.addEventListener("keydown", function (event) {
        if (event.keyCode == "39") {
          console.log("Right key is connected");
          }else if (mapRight === playerRight ) {
            console.log("Touched Right Wall");
            x += 40;
            document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
          }else{
            x -= 20;
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
          }   
        });
        document.addEventListener("keydown", function (event) {
        if (event.keyCode == "37") {
          console.log("Left key is connected");
          }else if (mapLeft === playerLeft ) {
            console.log("Touched Left Wall");
            x -= 40;
            document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
          }else{
            x += 20;
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
          }   
        });
        document.addEventListener("keydown", function (event) {
        if (event.keyCode == "40") {
          console.log("Down key is connected");
          }else if (mapBottom === playerBottom ) {
            console.log("Touched Bottom Wall");
            y += 40;
            document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
          }else{
            y -= 20;
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
          }   
        });
       /* else if (event.keyCode == "39") {
          console.log("Right key is connected");
          if (mapRight === playerRight) {
            console.log("Touched Right Wall");
            x -= 0;
            document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;}
          
          x += 20;
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        } else if (event.keyCode == "37") {
          console.log("Left key is connected");
          if (mapLeft === playerLeft) {
            console.log("Touched Left Wall");
            x+= 0;
            document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;}
          
            x -= 20;
            document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        } else if (event.keyCode == "40") {
          console.log("Down key is connected");
          if (mapBottom === playerBottom) {
            console.log("Touched Bottom Wall");
            y -= 0;
            document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;}

            y += 20;
            document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        }
      }); */
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
          posItemArray.forEach(function (item) {
            modalArray.forEach(function (modalItem) {
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
          });  
        }
      });
    },
          /* var location = movement();
          if(board.isEmpty(location)) {
          player.unshift(location);
          } */
  /* walls: function() {
    console.log("walls function is connected");
  let mapCoords = document.querySelector(".map").getBoundingClientRect();
  let mapLeft = Math.ceil(mapCoords.left / 110) * 110;
  let mapRight = Math.ceil(mapCoords.right / 110) * 110;
  let mapTop = Math.ceil(mapCoords.top / 110) * 110;
  let mapBottom = Math.ceil(mapCoords.bottom / 110) * 110;
    console.log("Map left: " + mapLeft + " Map top: " + mapTop);

  let playerCoords = document.querySelector(".player").getBoundingClientRect();
  let playerLeft = Math.round(playerCoords.left / 100) * 100;
  let playerRight = Math.ceil(mapCoords.right / 100) * 100;
  let playerTop = Math.round(playerCoords.top / 100) * 100;
  let playerBottom = Math.ceil(mapCoords.bottom / 100) * 100;
    console.log("player left: " + playerLeft + " player top: " + playerTop); 

    if (mapLeft === playerLeft) {
    document.addEventListener('keydown', function (event) {
    if (event.keyCode == "37"){  
      this.movement = ;
      console.log("Touched Left Wall");
      }})
      }else if (mapRight === playerRight) {
    document.addEventListener('keydown', function (event)
    {if (event.keyCode == "38"){  
      this.movement = false;
      console.log("Touched Right Wall");
      }})
      }else if (mapTop === playerTop) {
    document.addEventListener('keydown', function (event)
    {if (event.keyCode == "39"){  
      this.movement = false;
      console.log("Touched Top Wall");
      }})
      }else if (mapBottom === playerBottom) {
    document.addEventListener('keydown', function (event)
    {if (event.keyCode == "40"){  
      this.movement = false;
      console.log("Touched Bottom Wall");
      }})
    }else{
      console.log("Touched No Walls");
    }
  }, */
          /*  document.querySelector(
            ".player"
          ).style.transform = `translate(${x-20}px,${y-20}px)`;
            //x -= 20;
            //y -= 20;
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
          }  */
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
  /* if you want pixel size so that we don't need to do query 
   will need to change below height adn width */
}

.final-lock {
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
/* .camera {
   width: 100%; 
   height: auto;
   overflow: hidden;
   position: relative;
} */
.map {
  /* background-image: url("../../img/maze.png"); */
  background-size: cover;
  height: 70vh;
  width: 70%;
  margin: 0 auto;
  position: relative;
  border: 0.5rem solid black;
}

.modal_three { 
  display: none;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 20, 2, 0.9);
}

.room_three_close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.room_three_close:hover,
.room_three_close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal_three-content {
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

#Key {
  position: absolute !important;
  top: 20% !important;
}
</style>