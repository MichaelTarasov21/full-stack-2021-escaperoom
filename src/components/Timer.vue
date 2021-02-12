<template>
  <div id="TimerBlock">{{ pad2(Math.floor(remainingtime/60)) }}:{{ pad2(remainingtime % 60) }}</div>
</template>
<script>
import { mixin as VueTimers } from "vue-timers";
export default {
  data() {
    return { remainingtime: 1200 };
  },
  mixins: [VueTimers],
  methods: {
    tickdown: function() {
      this.remainingtime = this.remainingtime - 1;
      console.log(this.remainingtime);
    },
    pad2: function(number) {
      return (number < 10 ? "0" : "") + number;
    },
  },
  timers: { tickdown: { time: 1000, autostart: true, repeat: true } },
};
</script>
<style scoped>
@font-face {
  font-family: "analog";
  src: url("/src/assets/Fonts/Timer.ttf");
  font-weight: normal;
  font-style: normal;
}
#TimerBlock {
  position: fixed;
  top: 0%;
  left: 0%;
  height: 10%;
  width: 10%;
  text-align: left;
  background-color: black;
  color: yellow;
  font-size: 500%;
  font-family: "analog";
}
</style>
