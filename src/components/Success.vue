<template>
	<div id="success">
		<section class="congrats-message">
			<h1>Congrats WOW!</h1>
			<p>Credits to Our Puzzle n' Inspirations</p>
		</section>
		<button id="Restart">Restart</button>
		<button @click="OpenSettings" class="menu-tab" title="Profile">Profile</button>
	</div>
</template>

<script>
	export default {
		emits: ["OpenSettings"],
		name: "Success",
		methods: {
			OpenSettings: function() {
				this.$emit("OpenSettings");
			},
		},
	};
</script>

<style scoped>
	#success {
		background-color: lightgreen;
		height: 20rem;
		width: 85%;
		margin: 0;
		padding-top: 30px;
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
