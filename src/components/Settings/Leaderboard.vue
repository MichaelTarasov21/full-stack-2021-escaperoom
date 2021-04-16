<template>
	<div>
		<div id="leaderboard-info">
			<h1>Leaderboard</h1>
		</div>
		<div id="leaderboard">
			<div id="names" class="list">
				<h3 id="name1" class="names">{{ leaderboard[1].name }}</h3>
				<h3 id="name2" class="names">{{ leaderboard[2].name }}</h3>
				<h3 id="name3" class="names">{{ leaderboard[3].name }}</h3>
				<h3 id="name4" class="names">{{ leaderboard[4].name }}</h3>
				<h3 id="name5" class="names">{{ leaderboard[5].name }}</h3>
			</div>
			<div id="times" class="list">
				<h3 id="time1" class="times">{{pad2(Math.floor(leaderboard[1].time / 60)) + ":" + pad2(Math.floor(leaderboard[1].time % 60)) }}</h3>
				<h3 id="time2" class="times">{{pad2(Math.floor(leaderboard[2].time / 60)) + ":" + pad2(Math.floor(leaderboard[2].time % 60)) }}</h3>
				<h3 id="time3" class="times">{{pad2(Math.floor(leaderboard[3].time / 60)) + ":" + pad2(Math.floor(leaderboard[3].time % 60)) }}</h3>
				<h3 id="time4" class="times">{{pad2(Math.floor(leaderboard[4].time / 60)) + ":" + pad2(Math.floor(leaderboard[4].time % 60)) }}</h3>
				<h3 id="time5" class="times">{{pad2(Math.floor(leaderboard[5].time / 60)) + ":" + pad2(Math.floor(leaderboard[5].time % 60)) }}</h3>
			</div>
		</div>
	</div>
</template>

<script>
	import firebase from "firebase/app";
	export default {
		name: "Leaderboard",
		data() {
			return {
				leaderboard: ""
			};
		},
		created: function() {
			const request = firebase.database().ref("Leaderboard");
			request.on("value", (snapshot) => {
				this.leaderboard = snapshot.val();
			});
		},
		methods:{
			pad2: function(number) {
				return (number < 10 ? "0" : "") + number;
			}
		}
	};
</script>

<style scoped>
	.list {
		display: flex;
		flex-direction: column;
	}
	#leaderboard {
		display: flex;
    justify-content: space-between;
	}
	#leaderboard-info {
		background-color: aquamarine;
	}
</style>
