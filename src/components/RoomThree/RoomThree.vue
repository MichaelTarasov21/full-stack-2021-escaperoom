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
  created: function(){
    this.movement();  
    this.coordinates();
  },
  props: {keyUpStart:Boolean},
  methods:{
    //global method variable 
    //how to connect methods together 
    closeModal: function(){
      document.querySelector("#final-ans-modal").style.display = "none"; 
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
  methods:{
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
    /* board: [
          "###############",
          "#             #",
          "#             #",
          "#             #",
          "#    ####     #",
          "#    ####     #",
          "#             #",
          "#             #",
          "#             #",
          "###############"
    ],
    isEmpty: function(location) {
      return board[location.y][location.x] == ' ';
    }, */

    movement: function () {
      //do this for all the directions
      // make it effiecent by combining
      //and looping
      /* document.querySelector(
            ".player"
          ) */
      console.log("movement function is connected");
      var x = 0;
      var y = 0;
      var player = document.querySelector(".player");
      document.addEventListener("keydown", function (event) {
        if (event.keyCode == "38") {
          console.log("Up key is connected");
          y -= 20;
          player.style.transform = `translate(${x}px,${y}px)`;
          return {x, y};
        } else if (event.keyCode == "39") {
          console.log("Right key is connected");
          x += 20;
          player.style.transform = `translate(${x}px,${y}px)`;
          return {x, y};
        } else if (event.keyCode == "37") {
          console.log("Left key is connected");
          x -= 20;
          player.style.transform = `translate(${x}px,${y}px)`;
          return {x, y};
        } else if (event.keyCode == "40") {
          console.log("Down key is connected");
          y += 20;
          player.style.transform = `translate(${x}px,${y}px)`;
          return {x, y};
        }
      });
    }
    },
          /* var location = movement();
          if(board.isEmpty(location)) {
          player.unshift(location);
          } */

          coordinates: function () {
      console.log("coordinates function is connected");
      document.addEventListener("keydown", function (event) {
        if (
          event.keyCode == "37" ||
          event.keyCode == "38" ||
          event.keyCode == "39" ||
          event.keyCode == "40"
        ) {
          let lockCoords = document
            .querySelector("#finalLock")
            .getBoundingClientRect();
          let lockLeft = Math.ceil(lockCoords.left / 100) * 100;
          let lockTop = Math.ceil(lockCoords.top / 100) * 100;
          console.log("Lock left: " + lockLeft + " Lock top: " + lockTop);
          let playerCoords = document.querySelector(".player").getBoundingClientRect();
          let playerLeft = Math.ceil(playerCoords.left / 100) * 100;
          let playerTop = Math.ceil(playerCoords.top / 100) * 100;
          console.log(
            "player left: " + playerLeft + " player top: " + playerTop
          );
          /* let mapCoords = document
            .querySelector(".map")
            .getBoundingClientRect();
          let mapLeft = Math.ceil(mapCoords.left / 100) * 100;
          let mapTop = Math.ceil(mapCoords.top / 100) * 100;
          console.log("Map left: " + mapLeft + " Map top: " + mapTop);  */
          //finding coordinates
          if (lockLeft === playerLeft && lockTop === playerTop){
            document.addEventListener('keydown', function (event){
              if (event.keyCode == "13"){
                document.querySelector("#final-ans-modal").style.display = "block";
              }
            })
            console.log("Player and Lock are touching!!!")
            document.querySelector("#finalLock").style.transform = "scale(1.3)";
          }
          else{
            console.log("Still not touching")
            document.querySelector("#finalLock").style.transform = "scale(1)";
          }
          /* if (mapLeft === playerLeft || mapTop === playerTop) {
            document.querySelector(
            ".player"
          ).style.transform = `translate(${x-20}px,${y-20}px)`;
            //x -= 20;
            //y -= 20;
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
          }  */
        }
      });
    }
  },
  mounted: function () {
    this.movement();
    this.coordinates();
    this.addToInventory();
  },
  
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