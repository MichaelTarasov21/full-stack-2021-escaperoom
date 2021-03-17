<template>
  <div>
    <!-- To be removed -->
    <div id="TimerBlock">
      {{ pad2(Math.floor(remainingtime / 60)) }}:{{ pad2(remainingtime % 60) }}
    </div>
    <button @click="storetime(remainingtime)">Store Your Time!</button>
    <!-- To be removed. Used for testing -->
  </div>
  <!-- To be removed -->
</template>
<script>
import { mixin as VueTimers } from "vue-timers";
import firebase from "firebase/app";
export default {
  emits: ["Gameover"],
  data() {
    return { remainingtime: 1200 };
  },
  mixins: [VueTimers],
  methods: {
    tickdown: function() {
      this.remainingtime = this.remainingtime - 1;
      if (this.remainingtime === 0) {
        this.$timer.stop("tickdown"); //Prevents memory leak on game loss
        this.$emit("Gameover");
      }
    },
    pad2: function(number) {
      return (number < 10 ? "0" : "") + number;
    },
    storetime: function() {
      console.log("I am being developed");
      const user = firebase.auth().currentUser;
      const username = user.displayName
      const yourtime = this.remainingtime;
      const leaderboard = { name: username, time: yourtime };
      const toupload = JSON.stringify(leaderboard);
      const storageRef = firebase.storage().ref("Leaderboard.json");
      storageRef.putString(toupload).then((snapshot) => {
        console.log("Uploaded a raw string!" + snapshot);
      });
    },
  },
  timers: { tickdown: { time: 1000, autostart: true, repeat: true } }, //when using disable autostart and make a button with function this.$timer.start('tickdown')
};
</script>
<style scoped>
#TimerBlock {
  position: fixed;
  top: 0%;
  left: 0%;
  height: 10%;
  width: 10%;
  text-align: left;
  background-color: black;
  color: yellow;
  font-size: 590%;
  font-family: "analog";
}
</style>
