<template>
  <div id="App">
    <section class="header">
      <h1>Welcome/Start Screen</h1>
      <h2>Some Directions</h2>
      <p>Maybe some kind of story line</p>
    </section>
    <button id="start">Start</button>
    <div class="btn-personals">
    <button id="leaderboard">Leaderboard</button>
    <button id="account">Account</button>
    <button id="logout">Log Out</button>
    </div>
      <div class="tab-bkg">
      <tabs>
        <tab title="Fail Tab"><Fail msg="Success"/></tab>
        <tab title="Success Tab"><Success msg="Fail"/></tab>
      </tabs>
      </div>
  </div>
</template>

<script>
import Fail from './components/Fail.vue'
import Success from './components/Success.vue'
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'

export default {
  name: 'Start',
  components: {
    Fail,
    Success,
    Tab,
    Tabs
  }
}
</script>

<style>
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b0b6b3;
  margin-top: 60px;
  /* margin-bottom: 60px;
  height: 100vh; */
}
.header {
  color: black;
  background: #b0b6b3;
}
button{
  background-color: #b0b6b3;
  border: none;
  color: black;
  padding: 15px 32px;
  width: 25%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.btn-personals{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.tab-bkg {
  width: 100%;
  height: 20rem;
  background-color: #f8f8f8;
}
</style>
