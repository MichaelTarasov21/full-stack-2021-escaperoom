<template>
		<div id="screen">
			<div id="enemies">
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Blue_Space_Invader.gif" />
			</div>
		</div>
</template>
<script>
	export default {
		name: "WallBreaker",
		emits: ["Minigamewon"],
		data() {
			return {
				Enemies: [],
				Minigamewon: false,
			};
		},
		mounted: function() {
			const enemylist = document.getElementsByClassName("enemy");
			enemylist.forEach((this.Enemies = this.Enemies.push(true)));
		},
		methods: {
			DisplayClue() {
				this.$emit("Minigamewon");
			},
		},
	};
</script>
<style scoped>
	.enemy{
		size: 10%;
	}
	#screen {
		position: absolute;
		left: 15%;
		background-image: url("~@/assets/Images/Space_Invaders_Background.jpg");
		width: 70%;
		height: 70%;
	}
</style>
