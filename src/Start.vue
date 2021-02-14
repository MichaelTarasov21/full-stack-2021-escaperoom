<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Fail msg="Success"/>
    <Success msg="Fail"/>
  </div>
</template>

<script>
import Fail from './components/Fail.vue'
import Success from './components/Success.vue'

export default {
  name: 'Start',
  components: {
    Fail,
    Success,
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
