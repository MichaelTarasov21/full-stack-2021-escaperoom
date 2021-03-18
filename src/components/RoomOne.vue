<template>
  <div class="roomOne">
    <h1>Room One Canvas Area</h1>
    <div class="camera">
      <div class="map">
        <img class="player" src="../img/redsquare.png" alt="Red Square" height="50px" width="auto">
      </div>
    </div>
    <div>
        <p>Type Room One Answer to Go to Next Room</p>
        <div id="answerCheck"></div>
        <input type="password" id="roomOneAns" placeholder="Your Answer" />
        <input type="submit" value="Submit" @click="verify()"/>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.camera{
  
}
.map{
  background-color: rgb(180, 180, 180);
  height: 70vh;
  width: 80%;
  margin: 0 auto;
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
