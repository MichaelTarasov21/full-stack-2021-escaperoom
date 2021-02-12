<template>
  <div id="TimerBlock">
    {{ Math.floor(remainingtime / 60) }}:{{ remainingtime % 60 }}
  </div>
</template>
<script>
import { mixin as VueTimers } from "vue-timers";
export default {
  data() {
    return { remainingtime: 60 };
  },
  mixins: [VueTimers],
  methods: {
    tickdown: function() {
      this.remainingtime = this.remainingtime - 1;
      console.log(this.remainingtime);
    },
  },
  timers: {tickdown: {time: 1000, autostart: true, repeat: true }},
};
</script>
<style scoped>
/* @font-face {
  font-family: "analog";
  src: url("/src/assets/Fonts/Timer.eot"),
    url("/src/assets/Fonts/Timer.eot?#iefix") format("embedded-opentype"),
    url("/src/assets/Fonts/Timer.woff2") format("woff2"),
    url("/src/assets/Fonts/Timer.svg") format("svg"),
    url("/src/assets/Fonts/Timer.ttf") format("truetype"),
    url("/src/assets/Fonts/Timer.woff") format("woff");
  font-weight: normal;
  font-style: normal;
} */
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
  font-family: analog;
}
</style>
