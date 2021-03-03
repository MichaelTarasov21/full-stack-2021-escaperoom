<template>
  <div id="TimerBlock">{{ pad2(Math.floor(remainingtime/60)) }}:{{ pad2(remainingtime % 60) }}</div>
</template>
<script>
import { mixin as VueTimers } from "vue-timers";
export default {
  emits: ['Gameover'],
  data() {
    return { remainingtime: 1200 };
  },
  mixins: [VueTimers],
  methods: {
    tickdown: function() {
      this.remainingtime = this.remainingtime - 1;
      if (this.remainingtime === 0){
        this.$timer.stop('tickdown')//Prevents memory leak on game loss
        this.$emit('Gameover')
      }
    },
    pad2: function(number) {
      return (number < 10 ? "0" : "") + number;
    },
  },
  timers: { tickdown: { time: 1000, autostart: true, repeat: true } },//when using disable autostart and make a button with function this.$timer.start('tickdown')
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
