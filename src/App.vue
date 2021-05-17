<template lang="en">
  <div id="app">
    <Fail v-if="lost" @Restart="Restart" @OpenSettings="Menuopened = true" />
    <Login />
	<Timer v-if="start" @Gameover="Gameover" v-bind:RoomOneDone="roomTwoLoad" v-bind:RoomTwoDone="roomThreeLoad" v-bind:RoomThreeDone="roomFourLoad"  v-bind:RoomFourDone="success" />
    <Start v-else @Gamestarted="StartGame" />
    <Settings v-bind:showMenu="Menuopened" @closemenu="Menuopened = false" @openmenu="Menuopened = true"/>
    <RoomOne v-if="roomOneLoad" @roomOneFin="roomOneFin"/>
    <RoomTwo v-if="roomTwoLoad" @roomTwoFin="roomTwoFin"/>
    <RoomThree v-if="roomThreeLoad" @roomThreeFin="roomThreeFin"/>
    <RoomFour v-if="roomFourLoad" @roomFourFin="roomFourFin"/>
    <Success v-if="success" @Restart="Restart" @OpenSettings="Menuopened = true"/>
    <!-- <inventory/> -->
  </div>
</template>

<script>
import Timer from "./components/Timer.vue";
import Login from "./components/Login.vue";
import Start from "./components/Start.vue";
import Success from "./components/Success.vue";
import RoomOne from "./components/RoomOne/RoomOne";
import RoomTwo from "./components/RoomTwo/RoomTwo";
import RoomThree from "./components/RoomThree/RoomThree";
import RoomFour from "./components/RoomFour/RoomFour";
import Settings from "./components/Settings/Settings.vue";
// import Inventory from "./components/Inventory";

export default {
  head() {
    return {
      htmlAttrs: { lang: "sv" },
    };
  },
  name: "App",
  components: {
    Timer,
    Login,
    Start,
    Success,
    RoomOne,
    RoomTwo,
    RoomThree,
    RoomFour,
    Settings,
    // Inventory,
  },
  data() {
    return {
      success: false,
      lost: false,
      start: false,
      Menuopened: false,
      roomOneLoad: false,
      roomTwoLoad: false,
      roomThreeLoad: false,
      roomFourLoad: false,
    };
  },
  methods: {
    Gameover: function() {
      this.lost = true;
    },
    StartGame: function() {
      this.start = true;
      this.roomOneLoad = true;
    },
    roomOneFin: function() {
      console.log("Room One is Finished");
      this.roomTwoLoad = true;
      this.roomOneLoad = false;
    },
    roomTwoFin: function() {
      console.log("Room Two is Finished");
      this.roomThreeLoad = true;
      this.roomTwoLoad = false;
    },
    roomThreeFin: function() {
      console.log("Room Three is Finished");
      this.roomFourLoad = true;
      this.roomThreeLoad = false;
    },
    roomFourFin: function() {
      console.log("Room Four is Finished");
      this.success = true;
      this.roomFourLoad = false;
    },
    Restart: function() {
      this.lost = false;
      this.success = false;
      this.start = false;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mystery+Quest&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");

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
  image-rendering: pixelated;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

button {
  text-align: center;
  font-size: 1.5rem;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  color: white;
  font-family: "Roboto Mono", monospace;
  transition: 0.3s;
}
</style>
