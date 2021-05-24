<template>
	<div>
		<span class="Lock" id="Digit1">
			<button class="Up_Arrow" @click="ChangeDigit1(1)">
				<img src="@/assets/Images/Suitcase_Arrow.png" />
			</button>
			<div class="Digit">{{ Digit1 }}</div>
			<button class="Down_Arrow" @click="ChangeDigit1(-1)">
				<img src="@/assets/Images/Suitcase_Arrow.png" />
			</button>
		</span>
		<span class="Lock" id="Digit2">
			<button class="Up_Arrow" @click="ChangeDigit2(1)">
				<img src="@/assets/Images/Suitcase_Arrow.png" />
			</button>
			<div class="Digit">{{ Digit2 }}</div>
			<button class="Down_Arrow" @click="ChangeDigit2(-1)">
				<img src="@/assets/Images/Suitcase_Arrow.png" />
			</button>
		</span>
		<span class="Lock" id="Digit3">
			<button class="Up_Arrow" @click="ChangeDigit3(1)">
				<img src="@/assets/Images/Suitcase_Arrow.png" />
			</button>
			<div class="Digit">{{ Digit3 }}</div>
			<button class="Down_Arrow" @click="ChangeDigit3(-1)">
				<img src="@/assets/Images/Suitcase_Arrow.png" />
			</button>
		</span>
		<button id="Unlock" @click="CheckCombination"><img height="60px" src="@/assets/Images/Unlock_Button.png" /></button>
		<img v-if="Correct" src="@/assets/Images/Led_Correct.jpg" id="Indicator" />
		<img v-else-if="Incorrect" src="@/assets/Images/Led_Incorrect.jpg" id="Indicator" />
		<img v-else src="@/assets/Images/Led_Indicator.jpg" id="Indicator" />
	</div>
</template>
<script>
	export default {
		name: "Briefcase",
		emits: ["BriefcaseOpened"],
		data() {
			return {
				Digit1: 0,
				Digit2: 0,
				Digit3: 0,
				Correct: false,
				Incorrect: false,
				Attempt: false, // Set to true while the led animation plays
			};
		},
		methods: {
			ChangeDigit1(Direction) {
				if (!this.Attempt) {
					if (this.Digit1 === 9 && Direction === 1) {
						this.Digit1 = 0;
					} else if (this.Digit1 === 0 && Direction === -1) {
						this.Digit1 = 9;
					} else {
						this.Digit1 = this.Digit1 + Direction;
					}
				}
			},
			ChangeDigit2(Direction) {
				if (!this.Attempt) {
					if (this.Digit2 === 9 && Direction === 1) {
						this.Digit2 = 0;
					} else if (this.Digit2 === 0 && Direction === -1) {
						this.Digit2 = 9;
					} else {
						this.Digit2 = this.Digit2 + Direction;
					}
				}
			},
			ChangeDigit3(Direction) {
				if (!this.Attempt) {
					if (this.Digit3 === 9 && Direction === 1) {
						this.Digit3 = 0;
					} else if (this.Digit3 === 0 && Direction === -1) {
						this.Digit3 = 9;
					} else {
						this.Digit3 = this.Digit3 + Direction;
					}
				}
			},
			CheckCombination() {
				if (!this.Attempt) {
					this.Attempt = true;
					if (this.Digit1 === 4 && this.Digit2 === 7 && this.Digit3 === 5) {
						this.Correct = true;
						setTimeout(this.OpenBrifcase, 2000);
					} else {
						this.Incorrect = true;
						setTimeout(this.FlashLight, 2000);
					}
				}
			},
			FlashLight() {
				this.Incorrect = false;
				this.Attempt = false;
			},
			OpenBrifcase() {
				this.$emit("BriefcaseOpened");
			},
		},
	};
</script>
<style scoped>
	button {
		background-color: Transparent;
		border: none;
		outline: none;
	}
	.Lock {
		position: absolute;
		height: 50%;
		top: 20%;
	}
	.Up_Arrow {
		top: 0%;
		transform: scaleY(-1);
	}
	.Down_Arrow {
		bottom: 0%;
	}
	.Digit {
		top: 5%;
		height: 30%;
		text-align: center;
		background-color: black;
		font-size: 800%;
		font-family: Analog;
	}
	#Digit1 {
		left: 15%;
		color: purple;
	}
	#Digit2 {
		left: 25%;
		color: green;
	}
	#Digit3 {
		left: 35%;
		color: orange;
	}
	#Unlock {
		position: absolute;
		left: 42%;
		top: 33%;
	}
	#Indicator {
		position: absolute;
		height: 30px;
		width: 30px;
		left: 47%;
		top: 36%;
		border-radius: 50%;
	}
</style>
