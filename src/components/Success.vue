<template>
  <div id="success">
    <section class="congrats-message">
      <h1>Congrats WOW!</h1>
      <p>Credits to Our Puzzle n' Inspirations</p>
    </section>
    <button id="Restart">Restart</button>
    <button id="Leaderboard">Leaderboard</button>
    <button id="Account">Account</button>
  </div>
</template>

<script>
export default {
  name: 'Success',
  props: {
    msg: String
  }
}
</script>

<style scoped>
#fail {
  background-color: lightgreen;
}
.congrats-message {
  color: black;
  background: #b0b6b3;
  align-items: center;
}
h1 {
  font-size: bolder;
}
p {
  font-size: bold;
}
button {
  background-color: #b0b6b3;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

</style>