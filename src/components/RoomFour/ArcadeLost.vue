<template>
	<div id="screen">
		<h1>You Lost</h1>
        <br>
		<button @click="Restart">Restart</button>
        <div id="hint"> <img src="@/assets/Images/Zoom_Out.png" height="40px"> It might be helpful if you had a bigger screen</div>
	</div>
</template>
<script>
	export default {
		name: "ArcadeLost",
		emits: ["Restart"],
		methods: {
			Restart() {
				this.$emit("Restart");
			},
		},
	};
</script>
<style scoped>
	#hint {
		position: absolute;
		bottom: 0%;
        width: 100%;
        text-align: center;
	}
    button {
        background-color: black;
    }
	#screen {
		position: absolute;
		left: 15%;
		background-color: black;
		color: white;
		width: 70%;
		height: 70%;
	}
</style>
