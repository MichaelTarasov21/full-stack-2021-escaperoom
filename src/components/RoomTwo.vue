<template>
  <div class="roomTwo">
    <h1>Room Two Canvas Area</h1>
    <div>
        <p>Type Room Two Answer to Go to Next Room</p>
        <div id="answerCheck"></div>
        <input type="password" id="roomTwoAns" placeholder="Your Answer" />
        <input type="submit" value="Submit" @click="verify()"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomTwo',
  emits: ['roomTwoFin'],
  methods:{
    verify: function (){
        console.log("connected");
        var answer = document.getElementById("roomTwoAns").value.toUpperCase();
        console.log(answer);
        if (answer == `ROOMTWO`) {
          document.getElementById("answerCheck").innerHTML = "";
          document.getElementById("answerCheck").style.color = 'green';
          document
            .getElementById("answerCheck")
            .insertAdjacentHTML("beforeend", `${answer} is Correct :D!`);
          this.$emit('roomTwoFin');
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

<style scoped>
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
