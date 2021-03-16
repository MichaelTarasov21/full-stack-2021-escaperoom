<template>
  <div id="app">
    <Fail v-if="lost" />
    <navigation />
    <start />
    <!-- <div class="tab-bkg">
      <tabs>
        <tab title="Start Tab"><Start /></tab>
        <tab title="Success Tab"><Success /></tab>
      </tabs>
    </div> -->
    <Menu />
    <Room1 msg="Room1" />
    <Timer @Gameover="Gameover" />
  </div>
</template>

<script>
import Timer from "./components/Timer.vue";
import navigation from "./components/Navigation";
import Start from "./components/Start.vue";
// import Fail from "./components/Fail.vue";
// import Success from "./components/Success.vue";
// import Tab from "./components/Tab.vue";
// import Tabs from "./components/Tabs.vue";
import Room1 from "./components/Room1.vue";
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Timer,
    navigation,
    Start,
    // Fail,
    // Success,
    // Tab,
    // Tabs,
    Room1,
    Menu,
  },
  data() {
    return { lost: false };
  },
  methods: {
    Gameover: function () {
      this.lost = true;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mystery+Quest&display=swap');

@font-face {
  font-family: "analog";
  src: url("assets/Fonts/timer.woff2") format("woff2"),
    url("assets/Fonts/timer.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
.tab-bkg {
  width: 100%;
  /* height: 20rem; */
  background-color: #f8f8f8;
}
body {
  margin: 0 !important;
  padding: 0 !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

button {
  text-align: center;
  font-size: 1.75rem;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  border: none;
  outline: 1pt solid rgb(251, 255, 233);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

button:hover {
  /* background-color: rgb(0, 0, 0); */
  background-color: rgb(251, 255, 233);
  color: black;
  transition: 0.3s;
}
</style>
