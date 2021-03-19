<template>
  <div class="roomOne">
    <h1>Room One Canvas Area</h1>
    <div>
        <p>Type Room One Answer to Go to Next Room</p>
        <div id="answerCheck"></div>
        <input type="text" id="roomOneAns" placeholder="Your Answer" />
        <input type="submit" value="Submit" @click="verify()"/>
    </div>
    <div class="camera">
      <div class="map">
        <img class="player" src="../img/redsquare.png" alt="Red Square" height="50px" width="auto" walking="true">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomOne',
  emits: ['roomOneFin'],
  mounted() {
      let gameCanvas = document.createElement('script')
      gameCanvas.setAttribute('src', '../js/game.js')
      document.head.appendChild(gameCanvas)
    },
  methods:{
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
    movement: function(){
      var Player = document.querySelector(".player");
      var map = document.querySelector(".map");
      var x = 0;
      var y = 0;
      var held_directions = []; 
      var speed = 1; 

      const placePlayer = () => {
        var pixelSize = 2;
        
        const held_direction = held_directions[0];
        if (held_direction) {
            if (held_direction === directions.right) {x += speed;}
            if (held_direction === directions.left) {x -= speed;}
            if (held_direction === directions.down) {y += speed;}
            if (held_direction === directions.up) {y -= speed;}
        }
        Player.setAttribute("walking", held_direction ? "true" : "false");
        
        var camera_left = pixelSize * 10;
        var camera_top = pixelSize * 10;
        
        map.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0 )`;
        Player.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`;  
        
        //Limits (gives the illusion of walls)
        // var leftLimit = -8;
        // var rightLimit = (16 * 11)+8;
        // var topLimit = -8 + 32;
        // var bottomLimit = (16 * 7);
        // if (x < leftLimit) { x = leftLimit; }
        // if (x > rightLimit) { x = rightLimit; }
        // if (y < topLimit) { y = topLimit; }
        // if (y > bottomLimit) { y = bottomLimit; }
        
      }

      //Set up the game loop
      const step = () => {
        placePlayer();
        window.requestAnimationFrame(() => {
            step();
        })
      }
      step(); //kick off the first step!

      /* Direction key state */
      const directions = {
        up: "up",
        down: "down",
        left: "left",
        right: "right",
      }
      const keys = {
        38: directions.up,
        37: directions.left,
        39: directions.right,
        40: directions.down,
      }
      
      document.addEventListener("keydown", (e) => {
        console.log("Key is being pushed down");
        var dir = keys[e.which];
        if (dir && held_directions.indexOf(dir) === -1) {
            held_directions.unshift(dir)
        }
      })

      document.addEventListener("keyup", (e) => {
        console.log("Key is being let go of");
        var dir = keys[e.which];
        var index = held_directions.indexOf(dir);
        if (index > -1) {
            held_directions.splice(index, 1)
        }
      });
    },
    //next method
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
   --pixel-size: 2px;

}
.camera {
   /* width: calc(var(--pixel-size) * 160);
   height: calc(var(--pixel-size) * 144); */
   overflow: hidden;
   background: #61ddf7;
   position:relative;
}
.map{
  background-image: url("../img/maze.png");
  background-size: cover;
  background-color: black;
  height: 70vh;
  width: 80%;
  margin: 0 auto;
  position: relative;
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
