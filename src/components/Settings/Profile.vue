<template>
	<div>
		<h1 class="profile">Profile</h1>
		<div class="profile-info">
			<h3>Name: {{ name }}</h3>
			<h3>Email: {{ email }}</h3>
			<h3>Run# <select v-model="run" name="Run#" v-html="dropdown"></select></h3>
			<h3>Room One Time: {{ pad2(Math.floor(data[run].RoomOne / 60)) + ":" + pad2(Math.floor(data[run].RoomOne % 60)) }}</h3>
			<h3>Room Two Time: {{ pad2(Math.floor(data[run].RoomTwo / 60)) + ":" + pad2(Math.floor(data[run].RoomTwo % 60)) }}</h3>
			<h3>Room Three Time: {{ pad2(Math.floor(data[run].RoomThree / 60)) + ":" + pad2(Math.floor(data[run].RoomThree % 60)) }}</h3>
			<h3>Room Four Time: {{ pad2(Math.floor(data[run].RoomFour / 60)) + ":" + pad2(Math.floor(data[run].RoomFour % 60)) }}</h3>
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
				data: null,
				dropdown: "",
			};
		},
		methods: {
			pad2: function(number) {
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
				document.getElementById("RunNumber").addEventListener("change", function() {
					alert("changes");
				});
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
