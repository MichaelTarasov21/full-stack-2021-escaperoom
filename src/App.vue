<template>

  <div id="app">
      <Timer @Gameover="Gameover"></Timer>
    <navigation />
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="tab-bkg">
      <tabs>
        <tab title="Start Tab"><Start msg="Start"/></tab>
        <tab title="Fail Tab"><Fail msg="Fail"/></tab>
        <tab title="Success Tab"><Success msg="Success"/></tab>
      </tabs>
    </div>
  </div>
  
</template>



<script>
import Timer from './components/Timer.vue'
// import HelloWorld from "./components/HelloWorld.vue";
import navigation from "./components/Navigation";
import Start from './components/Start.vue'
import Fail from './components/Fail.vue'
import Success from './components/Success.vue'
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'

export default {
  name: "App",
  components: {
    Timer, 
    navigation,
    Start,
    Fail,
    Success,
    Tab,
    Tabs
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
.tab-bkg {
  width: 100%;
  height: 20rem;
  background-color: #f8f8f8;
}
</style>

