<template>
	<div>
		<div class="leaderboard-info">
			<h1>Leaderboard</h1>
		</div>
		<div id="names">
			<h3 id="name1" class="names">{{ leaderboard[1].name }}</h3>
			<h3 id="name2" class="names">{{ leaderboard[2].name }}</h3>
			<h3 id="name3" class="names">{{ leaderboard[3].name }}</h3>
			<h3 id="name4" class="names">{{ leaderboard[4].name }}</h3>
			<h3 id="name5" class="names">{{ leaderboard[5].name }}</h3>
		</div>
		<div id="times">
			<h3 id="time1" class="times">{{ leaderboard[1].time }}</h3>
			<h3 id="time2" class="times">{{ leaderboard[2].time }}</h3>
			<h3 id="time3" class="times">{{ leaderboard[3].time }}</h3>
			<h3 id="time4" class="times">{{ leaderboard[4].time }}</h3>
			<h3 id="time5" class="times">{{ leaderboard[5].time }}</h3>
		</div>
	</div>
</template>

<script>
	import firebase from "firebase/app";
	export default {
		name: "Leaderboard",
		data() {
			return {
				leaderboard: "",
			};
		},
		created: function() {
			let request = firebase.database().ref("Leaderboard");
			request.on("value", (snapshot) => {
				this.leaderboard = snapshot.val();
			});
		},
	};
</script>

<style scoped>
	.leaderboard-info {
		background-color: aquamarine;
	}
</style>
