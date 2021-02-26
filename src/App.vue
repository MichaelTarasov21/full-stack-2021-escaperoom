<template>

  <div id="app">
      <Timer @Gameover="Gameover"></Timer>
    <navigation />
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>



<script>
import Timer from './components/Timer.vue'
// import HelloWorld from "./components/HelloWorld.vue";
import navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Timer, navigation
  },
  methods: {
      Gameover: function(){
        alert('You are loser')//replace me with code that shows game over screen
  }
}
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

