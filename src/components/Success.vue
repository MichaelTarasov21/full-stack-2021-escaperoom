<template>
	<div id="success">
		<section class="congrats-message">
			<h1>Congrats!</h1>
			<br>
			<p>You have finished the game. </p>
		</section>
		<button @click="Restart" id="Restart">Restart</button>
		<button @click="OpenSettings" class="menu-tab" title="Profile">Profile</button>
	</div>
</template>

<script>
	export default {
		emits: ["OpenSettings, Restart"],
		name: "Success",
		methods: {
			OpenSettings: function() {
				this.$emit("OpenSettings");
			},
			Restart: function() {
				this.$emit("Restart");
			},
		},
	};
</script>

<style scoped>
	#success {
		background-color: rgb(93, 150, 255);
		height: 100vh;
		width: 100%;
		padding-top: 30px;
		position: absolute;
		top: 0%;
		left: 0%;
		right: 0%;
		bottom: 0%;
		z-index: 1;
	}
	.congrats-message {
		color: black;
		background: #b0b6b3;
		height: 8rem;
		margin-bottom: 3rem;
	}
	h1 {
		font-size: bolder;
		padding-top: 10px;
	}
	p {
		font-size: bold;
	}
	button {
		background-color: #b0b6b3;
		border: none;
		color: black;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		cursor: pointer;
	}
</style>
