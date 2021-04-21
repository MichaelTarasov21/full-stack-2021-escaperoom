<template>
  <div class="roomThree">
    <h1>Room Three Canvas Area</h1>
    <div>
        <p>Type Room Three Answer to Go to Next Room</p>
        <div id="answerCheck"></div>
        <input type="text" id="roomThreeAns" placeholder="Your Answer" />
        <input type="submit" value="Submit" @click="verify()"/>
    </div>
      <div class="map">
          <div class="player">
            <img id="player" src="../../img/redsquare.png" alt="Red Square">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RoomThree',
  emits: ['roomThreeFin'],
  created: function(){
    this.movement();  
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
      })
      
          /* var location = movement();
          if(board.isEmpty(location)) {
          player.unshift(location);
          } */
    }
  },
  mounted: function () {
    this.movement();
  },
  
}
</script>

<style scoped>
.player {
  width: 2rem;
  height: 2rem;
  position: absolute;
  overflow: none;
}

.map {
  background-size: cover;
  height: 70vh;
  width: 70%;
  margin: 0 auto;
  position: relative;
  border: 0.5rem solid black;
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