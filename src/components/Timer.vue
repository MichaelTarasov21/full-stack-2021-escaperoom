<template>
	<div id="TimerBlock">{{ pad2(Math.floor(remainingtime / 60)) }}:{{ pad2(remainingtime % 60) }}</div>
</template>

<script>
	import { mixin as VueTimers } from "vue-timers";
	export default {
		emits: ["Gameover"],
		props: {
			RoomFourDone: Boolean,
		},
		data() {
			return {
				remainingtime: 300,
			};
		},
		mixins: [VueTimers],
		methods: {
			tickdown: function() {
				if (this.RoomFourDone) {
					this.$timer.stop("tickdown");
					alert("This is not the full game. In order to save a score on the leaderboard please play the full game.");
				}
				this.remainingtime = this.remainingtime - 1;
				if (this.remainingtime === 0) {
					this.$timer.stop("tickdown"); //Prevents memory leak on game loss
					this.$emit("Gameover");
				}
			},
			pad2: function(number) {
				return (number < 10 ? "0" : "") + number;
			},
		},
		timers: { tickdown: { time: 1000, autostart: true, repeat: true } },
	};
</script>
<style scoped>
	#TimerBlock {
		position: fixed;
		top: 0%;
		left: 0%;
		height: 5rem;
		width: 12rem;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.5);
		color: yellow;
		font-size: 590%;
		font-family: "analog";
		z-index: 40;
	}
</style>
