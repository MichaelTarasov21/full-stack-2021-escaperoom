<template>
	<ArcadeWon v-if="Won" @ShowHint="ShowHint()" />
	<ArcadeLost v-else-if="Lost" @Restart="Reset" />
	<div v-else class="screen">
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
	import ArcadeWon from "./ArcadeWon";
	import ArcadeLost from "./ArcadeLost";
	import { mixin as VueTimers } from "vue-timers";
	export default {
		name: "WallBreaker",
		emits: ["Minigamewon"],
		components: {
			ArcadeWon,
			ArcadeLost,
		},
		mixins: [VueTimers],
		data() {
			return {
				Playerstyle: {
					position: "absolute",
					bottom: "0%",
					left: "",
				},
				EnemyC1: {
					left: "1px",
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
				EnemySpeed: 1,
				EnemyVelocity: 2,
				Lost: false,
				Won: false,
			};
		},
		mounted() {
			this.Playerstyle.left = ((screen.width - 128) * 0.7) / 2 - 35 + "px";
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
			Reset: function() {
				this.Playerstyle.left = ((screen.width - 128) * 0.7) / 2 - 35 + "px";
				this.EnemyC1.left = "1px";
				this.EnemyC2.left = "70px";
				this.EnemyC3.left = "140px";
				this.EnemyC4.left = "210px";
				this.EnemyC5.left = "280px";
				this.EnemyC6.left = "350px";
				this.EnemyR1.top = "0px";
				this.EnemyR2.top = "40px";
				this.EnemyR3.top = "80px";
				this.EnemyR4.top = "120px";
				this.EnemyR5.top = "160px";
				this.Enemies = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
				this.EnemySpeed = 1;
				this.EnemyVelocity = 2;
				this.Lost = false;
				this.$timer.start("AlienMove");
			},
			HeroMove: function(velocity) {
				let move = parseInt(this.Playerstyle.left);
				move = move + velocity;
				if (move > (screen.width - 128) * 0.7) {
					move = (screen.width - 128) * 0.7;
				} else if (move < 0) {
					move = 0;
				}
				move = move + "px";
				this.Playerstyle.left = move;
			},
			AlienMove: function() {
				function move(item, amount) {
					let move = parseInt(item);
					move = move + amount;
					move = move + "px";
					return move;
				}
				const C1 = parseInt(this.EnemyC1.left);
				const C2 = parseInt(this.EnemyC2.left);
				const C3 = parseInt(this.EnemyC3.left);
				const C4 = parseInt(this.EnemyC4.left);
				const C5 = parseInt(this.EnemyC5.left);
				const C6 = parseInt(this.EnemyC6.left);
				let leftrow;
				let rightrow;
				const C1Active = this.Enemies[0] + this.Enemies[6] + this.Enemies[12] + this.Enemies[18] + this.Enemies[24];
				const C2Active = this.Enemies[1] + this.Enemies[7] + this.Enemies[13] + this.Enemies[19] + this.Enemies[25];
				const C3Active = this.Enemies[2] + this.Enemies[8] + this.Enemies[14] + this.Enemies[20] + this.Enemies[26];
				const C4Active = this.Enemies[3] + this.Enemies[9] + this.Enemies[15] + this.Enemies[21] + this.Enemies[27];
				const C5Active = this.Enemies[4] + this.Enemies[10] + this.Enemies[16] + this.Enemies[22] + this.Enemies[28];
				const C6Active = this.Enemies[5] + this.Enemies[11] + this.Enemies[17] + this.Enemies[23] + this.Enemies[29];
				if (!C1Active && !C2Active && !C3Active && !C4Active && !C5Active && !C6Active) {
					this.$timer.stop("AlienMove");
					this.Won = true;
					return;
				} //move this to the bullet section
				if (C1Active) {
					leftrow = C1;
				} else if (C2Active) {
					leftrow = C2;
				} else if (C3Active) {
					leftrow = C3;
				} else if (C4Active) {
					leftrow = C4;
				} else if (C5Active) {
					leftrow = C5;
				} else if (C6Active) {
					leftrow = C6;
				}
				if (C6Active) {
					rightrow = C6;
				} else if (C5Active) {
					rightrow = C5;
				} else if (C4Active) {
					rightrow = C4;
				} else if (C3Active) {
					rightrow = C3;
				} else if (C2Active) {
					rightrow = C2;
				} else if (C1Active) {
					rightrow = C1;
				}
				if (rightrow + this.EnemySpeed * this.EnemyVelocity >= (screen.width - 128) * 0.7 || leftrow + this.EnemySpeed * this.EnemyVelocity <= 0) {
					console.log(screen);
					this.EnemyVelocity = this.EnemyVelocity * -1;
					const R1 = this.EnemyR1.top;
					const R2 = this.EnemyR2.top;
					const R3 = this.EnemyR3.top;
					const R4 = this.EnemyR4.top;
					const R5 = this.EnemyR5.top;
					this.EnemyR1.top = move(R1, 30);
					this.EnemyR2.top = move(R2, 30);
					this.EnemyR3.top = move(R3, 30);
					this.EnemyR4.top = move(R4, 30);
					this.EnemyR5.top = move(R5, 30);
					let LowestRow;
					const R1Active = this.Enemies[0] + this.Enemies[1] + this.Enemies[2] + this.Enemies[3] + this.Enemies[4] + this.Enemies[5];
					const R2Active = this.Enemies[6] + this.Enemies[7] + this.Enemies[8] + this.Enemies[9] + this.Enemies[10] + this.Enemies[11];
					const R3Active = this.Enemies[12] + this.Enemies[13] + this.Enemies[14] + this.Enemies[15] + this.Enemies[16] + this.Enemies[17];
					const R4Active = this.Enemies[18] + this.Enemies[19] + this.Enemies[20] + this.Enemies[21] + this.Enemies[22] + this.Enemies[23];
					const R5Active = this.Enemies[24] + this.Enemies[25] + this.Enemies[26] + this.Enemies[27] + this.Enemies[28] + this.Enemies[29];
					if (R5Active) {
						LowestRow = this.EnemyR5.top;
					} else if (R4Active) {
						LowestRow = this.EnemyR4.top;
					} else if (R3Active) {
						LowestRow = this.EnemyR3.top;
					} else if (R2Active) {
						LowestRow = this.EnemyR2.top;
					} else if (R1Active) {
						LowestRow = this.EnemyR1.top;
					}
					if (parseInt(LowestRow) >= (screen.availHeight - 128) * 0.7 - 40) {
						console.log("You are loserman");
						this.$timer.stop("AlienMove");
						this.Lost = true;
					}
				}
				const speed = this.EnemySpeed * this.EnemyVelocity;
				this.EnemyC1.left = move(C1, speed);
				this.EnemyC2.left = move(C2, speed);
				this.EnemyC3.left = move(C3, speed);
				this.EnemyC4.left = move(C4, speed);
				this.EnemyC5.left = move(C5, speed);
				this.EnemyC6.left = move(C6, speed);
			},
			ShowHint: function() {
				this.$emit("Minigamewon");
			},
		},
		timers: { AlienMove: { time: 40, autostart: true, repeat: true } }, // 40 milliseconds seems to be the lowest time interval at which the movement of the aliens still appears smoothe
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
