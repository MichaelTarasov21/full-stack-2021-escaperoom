<template>
	<div id="TimerBlock">{{ pad2(Math.floor(remainingtime / 60)) }}:{{ pad2(remainingtime % 60) }}</div>
</template>

<script>
	import { mixin as VueTimers } from "vue-timers";
	import firebase from "firebase/app";
	export default {
		emits: ["Gameover"],
		props: {
			RoomOneDone: Boolean,
			RoomTwoDone: Boolean,
			RoomThreeDone: Boolean,
			RoomFourDone: Boolean,
		},
		data() {
			return {
				remainingtime: 1200,
				RoomTimes: {
					RoomOne: null,
					RoomTwo: null,
					RoomThree: null,
					RoomFour: null,
				},
			};
		},
		mixins: [VueTimers],
		methods: {
			tickdown: function() {
				if (this.RoomOneDone && this.RoomTimes.RoomOne === null) {
					this.RoomTimes.RoomOne = this.remainingtime;
				}
				if (this.RoomTwoDone && this.RoomTimes.RoomTwo === null) {
					this.RoomTimes.RoomTwo = this.remainingtime;
				}
				if (this.RoomThreeDone && this.RoomTimes.RoomThree === null) {
					this.RoomTimes.RoomThree = this.remainingtime;
				}
				if (this.RoomFourDone) {
					this.$timer.stop("tickdown");
					this.RoomTimes.RoomFour = this.remainingtime;
					firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid).get().then((snapshot) => {
							const FalseStart = snapshot.val().FalseStart;
							this.storeroomtimes();
							if (!FalseStart) {
								this.storeleaderboardtime();
							} else {
								alert("It appers that you have played the game before. Your score will not be saved on the leaderboard");
							}
						});
				}
				this.remainingtime = this.remainingtime - 1;
				if (this.remainingtime === 0) {
					this.$timer.stop("tickdown"); //Prevents memory leak on game loss
					this.$emit("Gameover");
				}
			},
			pad2: function(number) {
				return (number < 10 ? "0" : "") + number;
			},
			storeroomtimes: async function() {
				firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid).child("Runs").get().then((snapshot) => {
						if (snapshot.exists()) {
							const runs = snapshot.val();
							firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid).child("Runs").child(runs.length + 1).set(this.RoomTimes);
						} else {
							firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid).child("Runs").child(1).set(this.RoomTimes);
						}
					});
			},
			storeleaderboardtime: async function() {
				await firebase.database().ref().child("Leaderboard").get().then((snapshot) => {
						const remoteleaderboard = snapshot.val();
						if (this.remainingtime > remoteleaderboard[5].time) {
							const user = firebase.auth().currentUser;
							const username = user.displayName;
							const yourtime = this.remainingtime;
							if (remoteleaderboard[4].time > yourtime && yourtime > remoteleaderboard[5].time) {
								let newleaderboard = remoteleaderboard;
								newleaderboard[5].name = username;
								newleaderboard[5].time = yourtime;
								this.writedata(newleaderboard, [5]);
							} else if (remoteleaderboard[3].time > yourtime && yourtime > remoteleaderboard[4].time) {
								let newleaderboard = remoteleaderboard;
								this.shiftdata(newleaderboard, 4, 5);
								newleaderboard[4].name = username;
								newleaderboard[4].time = yourtime;
								this.writedata(newleaderboard, [4, 5]);
							} else if (remoteleaderboard[2].time > yourtime && yourtime > remoteleaderboard[3].time) {
								let newleaderboard = remoteleaderboard;
								this.shiftdata(newleaderboard, 4, 5);
								this.shiftdata(newleaderboard, 3, 4);
								newleaderboard[3].name = username;
								newleaderboard[3].time = yourtime;
								this.writedata(newleaderboard, [3, 4, 5]);
							} else if (remoteleaderboard[1].time > yourtime && yourtime > remoteleaderboard[2].time) {
								let newleaderboard = remoteleaderboard;
								this.shiftdata(newleaderboard, 4, 5);
								this.shiftdata(newleaderboard, 3, 4);
								this.shiftdata(newleaderboard, 2, 3);
								newleaderboard[2].name = username;
								newleaderboard[2].time = yourtime;
								this.writedata(newleaderboard, [2, 3, 4, 5]);
							} else {
								let newleaderboard = remoteleaderboard;
								this.shiftdata(newleaderboard, 4, 5);
								this.shiftdata(newleaderboard, 3, 4);
								this.shiftdata(newleaderboard, 2, 3);
								this.shiftdata(newleaderboard, 1, 2);
								newleaderboard[1].name = username;
								newleaderboard[1].time = yourtime;
								this.writedata(newleaderboard, [1, 2, 3, 4, 5]);
							}
							console.log("You are on the leaderboard :)");
						}
					})
					.catch(function() {
						alert("Unable to fetch leaderboard. This is most likely a conectivity error");
					});
			},
			shiftdata: function(dataset, from, to) {
				dataset[to].name = dataset[from].name;
				dataset[to].time = dataset[from].time;
			},
			writedata: function(data, changes) {
				changes.forEach((element) => {
					let update = {};
					update["/Leaderboard/" + element + "/"] = data[element];
					return firebase
						.database()
						.ref()
						.update(update);
				});
			},
		},
		timers: { tickdown: { time: 1000, autostart: true, repeat: true } }, //when using disable autostart and make a button with function this.$timer.start('tickdown')
	};
</script>
<style scoped>
	button {
		position: absolute;
		left: 0%;
		bottom: 0%;
		z-index: 5;
	}
	#TimerBlock {
		position: fixed;
		top: 0%;
		left: 0%;
		height: 10%;
		width: 10%;
		text-align: left;
		background-color: black;
		color: yellow;
		font-size: 590%;
		font-family: "analog";
	}
</style>
