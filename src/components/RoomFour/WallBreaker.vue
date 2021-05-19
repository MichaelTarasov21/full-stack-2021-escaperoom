<template>
	<div class="screen">
		<div id="enemies">
			<div id="row1" v-bind:style="EnemyR1">
				<img v-if="Enemies[0]" v-bind:style="EnemyC1" class="enemy" width="50px" height="40px" src="@/assets/Images/Blue_Space_Invader.gif" />
				<img v-if="Enemies[1]" v-bind:style="EnemyC2" class="enemy" width="50px" height="40px" src="@/assets/Images/Red_Space_Invader.gif" />
				<img v-if="Enemies[2]" v-bind:style="EnemyC3" class="enemy" width="50px" height="40px" src="@/assets/Images/Green_Space_Invader.gif" />
				<img v-if="Enemies[3]" v-bind:style="EnemyC4" class="enemy" width="50px" height="40px" src="@/assets/Images/Purple_Space_Invader.gif" />
				<img v-if="Enemies[4]" v-bind:style="EnemyC5" class="enemy" width="50px" height="40px" src="@/assets/Images/Yellow_Space_Invader.gif" />
				<img v-if="Enemies[5]" v-bind:style="EnemyC6" class="enemy" width="50px" height="40px" src="@/assets/Images/White_Space_Invader.gif" />
			</div>
			<div id="row2" v-bind:style="EnemyR2">
				<img v-if="Enemies[6]" v-bind:style="EnemyC1" class="enemy" width="50px" height="40px" src="@/assets/Images/Blue_Space_Invader.gif" />
				<img v-if="Enemies[7]" v-bind:style="EnemyC2" class="enemy" width="50px" height="40px" src="@/assets/Images/Red_Space_Invader.gif" />
				<img v-if="Enemies[8]" v-bind:style="EnemyC3" class="enemy" width="50px" height="40px" src="@/assets/Images/Green_Space_Invader.gif" />
				<img v-if="Enemies[9]" v-bind:style="EnemyC4" class="enemy" width="50px" height="40px" src="@/assets/Images/Purple_Space_Invader.gif" />
				<img v-if="Enemies[10]" v-bind:style="EnemyC5" class="enemy" width="50px" height="40px" src="@/assets/Images/Yellow_Space_Invader.gif" />
				<img v-if="Enemies[11]" v-bind:style="EnemyC6" class="enemy" width="50px" height="40px" src="@/assets/Images/White_Space_Invader.gif" />
			</div>
			<div id="row3" v-bind:style="EnemyR3">
				<img v-if="Enemies[12]" v-bind:style="EnemyC1" class="enemy" width="50px" height="40px" src="@/assets/Images/Blue_Space_Invader.gif" />
				<img v-if="Enemies[13]" v-bind:style="EnemyC2" class="enemy" width="50px" height="40px" src="@/assets/Images/Red_Space_Invader.gif" />
				<img v-if="Enemies[14]" v-bind:style="EnemyC3" class="enemy" width="50px" height="40px" src="@/assets/Images/Green_Space_Invader.gif" />
				<img v-if="Enemies[15]" v-bind:style="EnemyC4" class="enemy" width="50px" height="40px" src="@/assets/Images/Purple_Space_Invader.gif" />
				<img v-if="Enemies[16]" v-bind:style="EnemyC5" class="enemy" width="50px" height="40px" src="@/assets/Images/Yellow_Space_Invader.gif" />
				<img v-if="Enemies[17]" v-bind:style="EnemyC6" class="enemy" width="50px" height="40px" src="@/assets/Images/White_Space_Invader.gif" />
			</div>
			<div id="row4" v-bind:style="EnemyR4">
				<img v-if="Enemies[18]" v-bind:style="EnemyC1" class="enemy" width="50px" height="40px" src="@/assets/Images/Blue_Space_Invader.gif" />
				<img v-if="Enemies[19]" v-bind:style="EnemyC2" class="enemy" width="50px" height="40px" src="@/assets/Images/Red_Space_Invader.gif" />
				<img v-if="Enemies[20]" v-bind:style="EnemyC3" class="enemy" width="50px" height="40px" src="@/assets/Images/Green_Space_Invader.gif" />
				<img v-if="Enemies[21]" v-bind:style="EnemyC4" class="enemy" width="50px" height="40px" src="@/assets/Images/Purple_Space_Invader.gif" />
				<img v-if="Enemies[22]" v-bind:style="EnemyC5" class="enemy" width="50px" height="40px" src="@/assets/Images/Yellow_Space_Invader.gif" />
				<img v-if="Enemies[23]" v-bind:style="EnemyC6" class="enemy" width="50px" height="40px" src="@/assets/Images/White_Space_Invader.gif" />
			</div>
			<div id="row5" v-bind:style="EnemyR5">
				<img v-if="Enemies[24]" v-bind:style="EnemyC1" class="enemy" width="50px" height="40px" src="@/assets/Images/Blue_Space_Invader.gif" />
				<img v-if="Enemies[25]" v-bind:style="EnemyC2" class="enemy" width="50px" height="40px" src="@/assets/Images/Red_Space_Invader.gif" />
				<img v-if="Enemies[26]" v-bind:style="EnemyC3" class="enemy" width="50px" height="40px" src="@/assets/Images/Green_Space_Invader.gif" />
				<img v-if="Enemies[27]" v-bind:style="EnemyC4" class="enemy" width="50px" height="40px" src="@/assets/Images/Purple_Space_Invader.gif" />
				<img v-if="Enemies[28]" v-bind:style="EnemyC5" class="enemy" width="50px" height="40px" src="@/assets/Images/Yellow_Space_Invader.gif" />
				<img v-if="Enemies[29]" v-bind:style="EnemyC6" class="enemy" width="50px" height="40px" src="@/assets/Images/White_Space_Invader.gif" />
			</div>
		</div>
		<img id="hero" v-bind:style="Playerstyle" width="71.6px" height="54px" src="@/assets/Images/Space_Ship.png" />
		<img id="leftarrow" class="button" @click="HeroMove(-5)" />
		<img id="rightarrow" class="button" @click="HeroMove(5)" />
		<img id="fire" class="button" />
	</div>
</template>
<script>
	import { mixin as VueTimers } from "vue-timers";
	export default {
		name: "WallBreaker",
		emits: ["Minigamewon"],
		mixins: [VueTimers],
		data() {
			return {
				Playerstyle: {
					position: "absolute",
					bottom: "0%",
					left: "",
				},
				EnemyC1: {
					left: "0px",
				},
				EnemyC2: {
					left: "70px",
				},
				EnemyC3: {
					left: "140px",
				},
				EnemyC4: {
					left: "210px",
				},
				EnemyC5: {
					left: "280px",
				},
				EnemyC6: {
					left: "350px",
				},
				EnemyR1: {
					top: "0px",
				},
				EnemyR2: {
					top: "40px",
				},
				EnemyR3: {
					top: "80px",
				},
				EnemyR4: {
					top: "120px",
				},
				EnemyR5: {
					top: "160px",
				},
				Enemies: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
				Minigamewon: false,
			};
		},
		mounted() {
			this.Playerstyle.left = ((((screen.width - 128) * .7) / 2) - 35) + "px";
			console.log(this.Screen);
			window.addEventListener("keydown", function(event) {
				const buttons = document.getElementsByClassName("button");
				if (event.key === "ArrowLeft") {
					buttons[0].click();
				} else if (event.key === "ArrowRight") {
					buttons[1].click();
				} else if (event.key === " ") {
					buttons[2].click();
				}
			});
		},
		destroyed() {
			window.removeEventListener("keydown", function(event) {
				const buttons = document.getElementsByClassName("button");
				if (event.key === "ArrowLeft") {
					buttons[0].click();
				} else if (event.key === "ArrowRight") {
					buttons[1].click();
				} else if (event.key === " ") {
					buttons[2].click();
				}
			});
		},
		methods: {
			HeroMove: function(velocity) {
				let move = parseInt(this.Playerstyle.left);
				move = move + velocity;
				if (move > (screen.width - 128) * .7) {
					move = (screen.width - 128) * .7;
				} else if (move < 0) {
					move = 0;
				}
				move = move + "px";
				this.Playerstyle.left = move;
			},
			DisplayClue() {
				this.$emit("Minigamewon");
			},
		},
		//		timers: { ListenToEvent: {time: 1000, autostart: true, repeat: true }},
	};
</script>
<style scoped>
	.button {
		display: none;
	}
	.screen {
		position: absolute;
		left: 15%;
		background-image: url("~@/assets/Images/Space_Invaders_Background.jpg");
		width: 70%;
		height: 70%;
	}
	.enemy {
		position: absolute;
		size: 10%;
	}
	#row1 {
		position: absolute;
	}
	#row2 {
		position: absolute;
	}
	#row3 {
		position: absolute;
	}
	#row4 {
		position: absolute;
	}
	#row5 {
		position: absolute;
	}
</style>
