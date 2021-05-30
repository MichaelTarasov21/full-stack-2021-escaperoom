<template>
	<div id="settings">
		<button id="open-menu" @click="displaymenu">
			<img alt="settings" src="@/assets/Images/gear.png" />
		</button>
		<!-- The Modal -->
		<transition name="fade" appear>
			<div id="myModal" class="modal" v-if="showMenu">
				<!-- Modal content -->
				<div class="modal-content">
					<span class="close" @click="closemenu">&times;</span>
					<h1>SETTINGS</h1>
					<br>
					<div class="flex-col menu-btns">
						<Tabs>
							<br>
							<Tab class="menu-tab" title="Profile"><Profile /></Tab>
							<Tab class="menu-tab" title="Leaderboard"><Leaderboard /></Tab>
							<Tab class="menu-tab" title="Log Out"><LogOut /></Tab>
						</Tabs>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import Tab from "./Tab";
	import Tabs from "./Tabs";
	import Leaderboard from "./Leaderboard";
	import Profile from "./Profile";
	import LogOut from "./LogOut";
	export default {
		name: "Settings",
		components: {
			Tab,
			Tabs,
			Leaderboard,
			Profile,
			LogOut,
		},
		props: {
			showMenu: Boolean,
		},
		emits: ["closemenu", "openmenu"],
		methods: {
			displaymenu: function() {
				this.$emit("openmenu");
			},
			closemenu: function() {
				this.$emit("closemenu");
			},
		},
	};
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	#open-menu {
		position: fixed;
		top: 0;
		right: 0;
		border: none;
		margin: 1.3rem;
		background: initial;
	}

	#open-menu:hover {
		/* background: grey; */
		transform: scale(1.1);
		transition: 0.2s;
	}

	/* The Modal (background) */
	.modal {
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgb(0, 0, 0); /* Fallback color */
		background-color: rgba(0, 20, 2, 0.9);
		z-index: 2;
	}

	/* Modal Content */
	.modal-content {
		background-color: rgb(253, 255, 228);
		margin: 4rem;
		padding: 3rem;
		z-index: 3;
		border-radius: 1rem;
		max-width: 50rem;
	}
	@media (min-width: 800px) {
		.modal-content {
			margin: 5rem auto;
		}
	}

	/* The Close Button */
	.close {
		color: #aaaaaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
	}
	.menu-tab {
		border: none;
		color: black;
		padding: 2rem;
		padding-top: 0;
		text-align: center;
		text-decoration: none;
		font-size: 0.8rem;
		cursor: pointer;
	}

	.close:hover,
	.close:focus {
		color: #000;
		text-decoration: none;
		cursor: pointer;
	}

	.flex-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	#myModal{
		z-index: 200;
	}
</style>
