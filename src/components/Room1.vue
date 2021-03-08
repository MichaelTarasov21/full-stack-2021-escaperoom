<template>
  <div class="room1">
    <div>
      <h1>Game Canvas Area</h1>
        <p>Type Answer to Go to Next Room</p>
        <input type="password" id="room.answer}" placeholder="Your Answer" />
        <input type="submit" id="roomSubmit" value="Submit" />
    </div>
    <div class="flex-row">
      <div class="inventory-items">
        <div id="itemOne" class="inventory-item"><img class="item-img" src="https://img.icons8.com/dusk/100/000000/key.png"/></div>
        <div id="itemTwo" class="inventory-item"><img class="item-img" src="https://img.icons8.com/dusk/100/000000/key.png"/></div>
        <div id="itemThree" class="inventory-item"><img class="item-img" src="https://img.icons8.com/dusk/100/000000/key.png"/></div>
      </div>
      <h1>Timer</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Room1',
  props: {
    msg: String
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
