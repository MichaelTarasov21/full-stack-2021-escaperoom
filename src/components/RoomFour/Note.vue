<template>
	<div id="container">
		<h1>Notes on key lock pairings</h1>
		<body>
			1. The round Lock requires a key with a number 1 lower than the number of the usefull orange key.
			<br />
			2. The round lock is unlocked by a key with the number 2.
			<br />
			3. The square lock is opened with a red key.
			<br />
			4. The round lock requires a number greater than that of the usefull green key.
			<br />
			5. The key that unlocks the triangle lock has a number one larger than the key that unlocks the round lock.

<!--             Answers
            Round: Blue 2
            Triangle: 3 Orange
            Pentagonal: Green 1
            Square: Red 4 -->
		</body>
	</div>
</template>
<script>
	export default {
		name: "Briefcase",
	};
</script>
<style scoped>
	body {
		text-align: left;
		font-size: 150%;
	}
	#container {
		position: absolute;
		left: 35%;
		height: 50%;
		width: 30%;
		background-color: white;
	}
</style>
