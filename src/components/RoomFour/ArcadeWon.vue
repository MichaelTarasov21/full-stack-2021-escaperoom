<template>
	<div id="screen">
		<h1>You Won</h1>
        <br>
		<button @click="Continue">Join the Leaderboard</button>
	</div>
</template>
<script>
	export default {
		name: "ArcadeWon",
		emits: ["ShowHint"],
		methods: {
			Continue() {
				this.$emit("ShowHint");
			},
		},
	};
</script>
<style scoped>
    button {
        background-color: black;
    }
	#screen {
		position: absolute;
		left: 15%;
		background-color: black;
		color: white;
		width: 70%;
		height: 70%;
	}
</style>
