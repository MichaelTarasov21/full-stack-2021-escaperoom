<template>
	<div>
		<h1 class="profile">Profile</h1>
		<div class="profile-info">
			<h3>Name: {{ name }}</h3>
			<h3>Email: {{ email }}</h3>
			<h3>Run# <select v-model="run" name="Run#" v-html="dropdown"></select></h3>
			<h3>Room One Time: {{ time(data[run].RoomOne)}}</h3>
			<h3>Room Two Time: {{ time(data[run].RoomTwo)}}</h3>
			<h3>Room Three Time: {{ time(data[run].RoomThree)}}</h3>
			<h3>Room Four Time: {{ time(data[run].RoomFour)}}</h3>
		</div>
	</div>
</template>

<script>
	import firebase from "firebase/app";
	export default {
		name: "Profile",
		data() {
			return {
				name: null,
				email: null,
				run: 1,
				data: [{},{RoomOne: "You do not have any completed runs", RoomTwo: "You do not have any completed runs", RoomThree: "You do not have any completed runs", RoomFour: "You do not have any completed runs"}],
				dropdown: "",
			};
		},
		methods: {
			time: function(number) {
				if (isNaN(number)){
					return number;
				}else{
				const minutenumber = Math.floor(number/60)
				return (minutenumber < 10 ? "0" : "") + minutenumber + ":" + this.pad2seconds(number) ;
				}
			},
			pad2seconds: function(number) {
				number = Math.floor(number % 60)
				return (number < 10 ? "0" : "") + number;
			},
		},
		created: function() {
			this.name = firebase.auth().currentUser.displayName;
			this.email = firebase.auth().currentUser.email;
			const request = firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid).child("Runs");
			request.get().then((snapshot) => {
				this.data = snapshot.val();
				for (let i = 1; i < this.data.length; i++) {
					this.dropdown = this.dropdown + `<option value="${i}">${i}</option>"`;
				}
			});
		},
	};
</script>

<style>
	.profile {
		background-color: yellow;
	}

	.profile-info {
		text-align: left;
	}
</style>
