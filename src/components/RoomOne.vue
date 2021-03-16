<template>
  <div class="roomOne">
    <h1>Room One Canvas Area</h1>
    <div>
        <p>Type Room One Answer to Go to Next Room</p>
        <div id="answerCheck"></div>
        <input type="password" id="roomOneAns" placeholder="Your Answer" />
        <input type="submit" value="Submit" @click="verify()"/>
    </div>
    <div class="flex-row">
      <div class="inventory-items">
        <div id="itemOne" class="inventory-item"><img class="item-img" src="https://img.icons8.com/dusk/100/000000/key.png"/></div>
        <div id="itemTwo" class="inventory-item"><img class="item-img" src="https://img.icons8.com/dusk/100/000000/key.png"/></div>
        <div id="itemThree" class="inventory-item"><img class="item-img" src="https://img.icons8.com/dusk/100/000000/key.png"/></div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomOne',
  emits: ['roomOneFin'],
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
