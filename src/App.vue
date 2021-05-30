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
  </div>
</template>

<script>
  import Timer from "./components/Timer.vue";
  import Login from "./components/Login.vue";
  import Start from "./components/Start.vue";
  import Success from "./components/Success.vue";
  import Fail from "./components/Fail.vue";
  import RoomOne from "./components/RoomOne/RoomOne";
  import RoomTwo from "./components/RoomTwo/RoomTwo";
  import RoomThree from "./components/RoomThree/RoomThree";
  import RoomFour from "./components/RoomFour/RoomFour";
  import Settings from "./components/Settings/Settings.vue";

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
      Fail,
      RoomOne,
      RoomTwo,
      RoomThree,
      RoomFour,
      Settings,
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
        this.roomTwoLoad = true;
        this.roomOneLoad = false;
      },
      roomTwoFin: function() {
        this.roomThreeLoad = true;
        this.roomTwoLoad = false;
      },
      roomThreeFin: function() {
        this.roomFourLoad = true;
        this.roomThreeLoad = false;
      },
       roomFourFin: function() {
         this.success = true;
         this.roomFourLoad = false;
       },
      Restart: function() {
        this.lost = false;
        this.success = false;
        this.roomOneLoad = false;
        this.roomTwoLoad = false;
        this.roomThreeLoad = false;
        this.roomFourLoad = false;
        this.start = false;
      },
    },
  };
</script>

<style>
  @font-face {
    font-family: "analog";
    src: url("~@/assets/Fonts/timer.woff2") format("woff2"), url("assets/Fonts/timer.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: url("~@/assets/Fonts/Roboto_Mono_Latin-ext.woff2") format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: url("~@/assets/Fonts/Roboto_Mono_Latin.woff2") format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;  
  }
  @font-face {
  font-family: 'Mystery Quest';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("~@/assets/Fonts/Mystery_Quest_Latin-ext.woff2") format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
  font-family: 'Mystery Quest';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("~@/assets/Fonts/Mystery_Quest_Latin.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  .tab-bkg {
    width: 100%;
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
