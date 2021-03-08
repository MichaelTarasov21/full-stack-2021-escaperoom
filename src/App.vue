<template>
  <div id="app">
    <Menu/>
    <Room1 msg="Room1"/>
  </div>
</template>

<script>
import Room1 from './components/Room1.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Room1,
    Menu,
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
