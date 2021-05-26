<template>
	<div id="fail">
		<section class="message">
			<h1>You lost. That is sad.</h1>
			<br>
			<p>Credits to Our Puzzle n' Inspirations</p>
		</section>
		<button @click="Restart" id="Restart">Restart</button>
		<button @click="OpenSettings" class="menu-tab" title="Profile">Profile</button>
	</div>
</template>

<script>
	export default {
		emits: ["OpenSettings, Restart"],
		name: "Fail",
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
	#fail {
		background-color: red;
		height: 100vh;
		width: 100%;
		padding-top: 30px;
		position: absolute;
		top: 0%;
		left: 0%;
		right: 0%;
		bottom: 0%;
		z-index: 100;
	}
	.message {
		display: block;
		width: 100%;
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
