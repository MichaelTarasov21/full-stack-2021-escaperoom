<template>
	<div>
		<span class="Lock" id="Digit1">
			<button class="Up_Arrow">
				<img src="@/assets/Images/Suitcase_Arrow.png" />
			</button>
			<div class="Digit">{{ Digit1 }}</div>
			<button class="Down_Arrow Digit1">
				<img src="@/assets/Images/Suitcase_Arrow.png" />
			</button>
		</span>
		<span class="Lock" id="Digit2">
			<button class="Up_Arrow">
				<img src="@/assets/Images/Suitcase_Arrow.png" />
			</button>
			<div class="Digit">{{ Digit2 }}</div>
			<button class="Down_Arrow">
				<img src="@/assets/Images/Suitcase_Arrow.png" />
			</button>
		</span>
		<span class="Lock" id="Digit3">
			<button class="Up_Arrow">
				<img src="@/assets/Images/Suitcase_Arrow.png" />
			</button>
			<div class="Digit">{{ Digit3 }}</div>
			<button class="Down_Arrow">
				<img src="@/assets/Images/Suitcase_Arrow.png" />
			</button>
		</span>
		<button id="Unlock"><img height="60px" src="@/assets/Images/Unlock_Button.png" /></button>
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
