<template>
  <div class="roomOne">
    <h1>Room One Canvas Area</h1>
    <input type="text" v-on:keyup.37="movement" />
    <div>
      <button @click="roomOneModal = true">
        <img src="https://img.icons8.com/bubbles/100/000000/lock-2.png" />
      </button>
      <div class="modal_one" v-if="roomOneModal">
        <div class="modal_one-content">
          <span class="roome_one_close" @click="roomOneModal = false"
            >&times;</span
          >
          <p>Type Room One Answer to Go to Next Room</p>
          <div id="answerCheck"></div>
          <input type="text" id="roomOneAns" placeholder="Your Answer" />
          <input type="submit" value="Submit" @click="verify()" />
        </div>
      </div>
      <div class="camera">
        <div class="map">
          <div class="player">
            <img src="../../img/redsquare.png" alt="Red Square" />
          </div>
        </div>
      </div>
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
    },

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
      document.addEventListener("keydown", function (event) {
        if (event.key === "w") {
          console.log("Up key is connected");
          y -= 20;
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        }
        if (event.key === "d") {
          console.log("Right key is connected");
          x += 20;
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        }
        if (event.key === "a") {
          console.log("Left key is connected");
          x -= 20;
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        }
        if (event.key === "s") {
          console.log("Down key is connected");
          y += 20;
          document.querySelector(
            ".player"
          ).style.transform = `translate(${x}px,${y}px)`;
        }
      });
    },
    // movement: function(){
    //   var player = document.querySelector(".player");
    //   var x = 0;
    //   var y = 0;
    //   var held_directions = []; //empty array
    //   var speed = 1;

    //   const placePlayer = () => {
    //     const held_direction = held_directions[0];
    //     //if there is a held direction
    //     if (held_direction) {
    //         if (held_direction === directions.right) {x += speed;}
    //         if (held_direction === directions.left) {x -= speed;}
    //         if (held_direction === directions.down) {y += speed;}
    //         if (held_direction === directions.up) {y -= speed;}
    //     }
    //     player.setAttribute("walking", held_direction ? "true" : "false");
    //     player.style.transform = `translate3d( ${x}px, ${y}px, 0)`;

    //   }

    //   //Set up the game loop
    //   const step = () => {
    //     placePlayer();
    //     window.requestAnimationFrame(() => {
    //     step();
    //     })
    //   }
    //   step(); //kick off the first step!

    //   /* Direction key state */
    //   const directions = {
    //     up: "up",
    //     down: "down",
    //     left: "left",
    //     right: "right",
    //   }
    //   const keys = {
    //     38: directions.up,
    //     37: directions.left,
    //     39: directions.right,
    //     40: directions.down,
    //   }

    //   document.addEventListener("keydown", (e) => {
    //     console.log("Key is being pushed down");
    //     var dir = keys[e.which];
    //     //if the key is not in the array
    //     // adds it to the beginning of the array to be executed
    //     if (dir && held_directions.indexOf(dir) === -1) {
    //         held_directions.unshift(dir)
    //     }
    //   })
    //   //after that direction movement has been finished
    //   //and keyup -> deletes that mveoment from the aray
    //   document.addEventListener("keyup", (e) => {
    //     console.log("Key is being let go of");
    //     var dir = keys[e.which];
    //     var index = held_directions.indexOf(dir);
    //     if (index > -1) {
    //         held_directions.splice(index, 1)
    //     }
    //   });

    // },
    //next method
  },
  mounted: function () {
    this.displayMapItems();
    this.addToInventory();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  --pixel-size: 2px;
  /* if you want pixel size so that we don't need to do query 
   will need to change below height adn width */
}
.player {
  width: 2rem;
  height: 2rem;
  /* position: absolute; */
  overflow: hidden;
  /* transform: translate(20px,20px); */
}
.camera {
  width: 16rem;
  height: 4.4rem;
  overflow: hidden;
  background: #61ddf7;
  position: relative;
}
.map {
  background-image: url("../../img/maze.png");
  background-size: cover;
  background-color: black;
  height: 70vh;
  width: 80%;
  margin: 0 auto;
  position: relative;
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
  border: .5rem black solid;
  width: 90%;
  height: 10rem;
  
}
</style>
