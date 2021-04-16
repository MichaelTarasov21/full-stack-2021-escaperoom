<template>
  <div class="roomOne">
    <h1>Room One Canvas Area</h1>
    <div class="modal_one" v-if="roomOneModal">
      <div class="modal_one-content">
        <span class="room_one_close" @click="roomOneModal = false"
          >&times;</span
        >
        <p>Type Room One Answer to Go to Next Room</p>
        <div id="answerCheck"></div>
        <input type="text" id="roomOneAns" placeholder="Your Answer" />
        <input type="submit" value="Submit" @click="verify()" />
      </div>
    </div>
    <div class="map">
      <div class="player">
        <img id="player" src="../../img/redsquare.png" alt="Red Square" />
      </div>
      <img
        id="finalLock"
        class="final-lock"
        @click="roomOneModal = true"
        src="https://img.icons8.com/bubbles/100/000000/lock-2.png"
      />
    </div>
    <div class="map-item" id="Key">
      <img class="item-img" src="${item.img}" />
      <div class="hidden">${item.img}</div>
      <div>${item.name}</div>
    </div>
    <div ref="mapItems"></div>
    <div class="inventory" ref="inventory"></div>
  </div>
</template>

<script>
export default {
  name: "RoomOne",
  emits: ["roomOneFin"],
  data() {
    return {
      roomOneModal: false,
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
  props: { keyUpStart: Boolean },

  methods: {
        //global method variable
    //how to connect methods together
    verify: function () {
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

    movement: function () {
      //do this for all the directions
      // make it effiecent by combining
      //and looping
      console.log("movement function is connected");
      var x = 0;
      var y = 0;
      document.addEventListener('keydown', function (event) {
      if (event.keyCode == '38') {
        console.log("Up key is connected");
        y -= 20;
        document.querySelector(".player").style.transform = `translate(${x}px,${y}px)`;        
      }
      else if (event.keyCode == '39') {
        console.log("Right key is connected");
        x += 20;
        document.querySelector(".player").style.transform = `translate(${x}px,${y}px)`;        
      }
      else if (event.keyCode == '37') {
        console.log("Left key is connected");
        x -= 20;
        document.querySelector(".player").style.transform = `translate(${x}px,${y}px)`;        
      }
      else if (event.keyCode == '40') {
        console.log("Down key is connected");
        y += 20;
        document.querySelector(".player").style.transform = `translate(${x}px,${y}px)`;        
      }
      });
    },

      // const player = document.querySelector(".player");
      // const lock = document.querySelector(".final-lock");
      // let playerCoords = document.getElementById('player').getBoundingClientRect();
      // console.log(playerCoords.left);
    coordinates: function(){
      console.log("coordinates function is connected");
      document.addEventListener('keydown', function (event) {
        if (event.keyCode == '37' || event.keyCode == '38' || event.keyCode == '39' || event.keyCode == '40' ){
          let lockCoords = document.querySelector("#finalLock").getBoundingClientRect();
          let lockLeft = Math.ceil(lockCoords.left / 100) * 100;
          let lockTop = Math.ceil(lockCoords.top / 100) * 100; 
          console.log("Lock left: " + lockLeft + " Lock top: " + lockTop);
          let playerCoords = document.querySelector(".player").getBoundingClientRect();
          let playerLeft = Math.ceil(playerCoords.left / 100) * 100;
          let playerTop = Math.ceil(playerCoords.top / 100) * 100; 
          console.log("player left: " + playerLeft + " player top: " + playerTop);
          //finding coordinates
          if (lockLeft === playerLeft && lockTop === playerTop){
            // roomOneModal = true; make the popup open
            console.log("Player and Lock are touching!!!")
            document.querySelector("#finalLock").style.transform = "scale(1.5)";
          }
          else{
            console.log("Still not touching")
            document.querySelector("#finalLock").style.transform = "scale(1)";
          }
        }
      })
    },

    displayMapItems: function () {
      this.$refs.mapItems.innerHTML = "";
      this.mapItemsArr.forEach(this.printMapItems);
    },

    printMapItems: function (item) {
      const mapItems = this.$refs.mapItems;
      mapItems.insertAdjacentHTML(
        "afterbegin",
        `<div class="map-item" id="${item.name}">
          <img class="item-img" src="${item.img}" >
          <div class="hidden">${item.img}</div>
          <div>${item.name}</div>
        </div>`
      );
      // item.addEventListener("click", this.addToInventory());
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
    }
}, 
  created: function(){
    this.movement();    
    this.coordinates();
    this.displayMapItems();
    this.addToInventory()
  }
}
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

.modal_one {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 20, 2, 0.9);
}

.room_one_close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.room_one_close:hover,
.room_one_close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal_one-content {
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

.inventory {
  border: 0.5rem black solid;
  width: 90%;
  height: 10rem;
}
</style>