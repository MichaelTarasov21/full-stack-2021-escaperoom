<template>
	<div>
		<button v-on:click="DisplayClue">Click Me</button>
	</div>
</template>
<script>
	export default {
		name: "WallBreaker",
		emits: ["Minigamewon"],
		data() {
			return {
				Minigamewon: false,
			};
		},
		methods: {
			DisplayClue() {
				this.$emit("Minigamewon");
			},
		},
	};
</script>
