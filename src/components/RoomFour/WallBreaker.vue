<template>
	<div id="screen">
		<div id="enemies">
			<div id="row1">
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Blue_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Red_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Green_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Purple_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Yellow_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/White_Space_Invader.gif" />
			</div>
			<div id="row2">
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Blue_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Red_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Green_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Purple_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Yellow_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/White_Space_Invader.gif" />
			</div>
			<div id="row3">
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Blue_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Red_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Green_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Purple_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Yellow_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/White_Space_Invader.gif" />
			</div>
			<div id="row4">
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Blue_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Red_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Green_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Purple_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Yellow_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/White_Space_Invader.gif" />
			</div>
			<div id="row5">
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Blue_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Red_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Green_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Purple_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/Yellow_Space_Invader.gif" />
				<img class="enemy" width="71.6px" height="54px" src="@/assets/Images/White_Space_Invader.gif" />
			</div>
		</div>
	<img id="hero" width="71.6px" height="54px" src="@/assets/Images/Space_Ship.png" />
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
	.enemy {
		size: 10%;
		padding: 0.5%;
	}
	#hero {
		position: absolute;
		bottom: 0%;
	}
	#screen {
		position: absolute;
		left: 15%;
		background-image: url("~@/assets/Images/Space_Invaders_Background.jpg");
		width: 70%;
		height: 70%;
	}
</style>
