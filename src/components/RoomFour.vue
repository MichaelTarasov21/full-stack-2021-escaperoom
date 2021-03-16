<template>
  <div class="roomFour">
    <h1>Room Four Canvas Area</h1>
    <div>
        <p>Type Room Four Answer to Go to Next Room</p>
        <div id="answerCheck"></div>
        <input type="password" id="roomFourAns" placeholder="Your Answer" />
        <input type="submit" value="Submit" @click="verify()"/>
    </div>
    <div class="flex-row">
      <div class="inventory-items">
        <div id="item1" class="inventory-item"><img class="item-img" src="https://img.icons8.com/dusk/100/000000/key.png"/></div>
        <div id="item2" class="inventory-item"><img class="item-img" src="https://img.icons8.com/dusk/100/000000/key.png"/></div>
        <div id="item3" class="inventory-item"><img class="item-img" src="https://img.icons8.com/dusk/100/000000/key.png"/></div>
      </div>
      <h1>Timer</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomFour',
  emits: ['roomFourFin'],
  methods:{
    verify: function (){
        console.log("connected");
        var answer = document.getElementById("roomFourAns").value.toUpperCase();
        console.log(answer);
        if (answer == `ROOMFOUR`) {
          document.getElementById("answerCheck").innerHTML = "";
          document.getElementById("answerCheck").style.color = 'green';
          document
            .getElementById("answerCheck")
            .insertAdjacentHTML("beforeend", `${answer} is Correct :D!`);
          this.$emit('roomFourFin');
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
.inventory-items{
  display: flex;
  justify-content: space-around;
}
.inventory-item{
  border: solid;
  padding: 0.5rem;
  border-color: gray;
  border-width: 0.5rem;
}
.item-img:hover{
  transform: scale(1.2); 
}
.flex-row{
  display:flex;
  justify-content: space-around;
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
