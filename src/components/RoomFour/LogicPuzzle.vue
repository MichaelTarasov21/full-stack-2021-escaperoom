<template>
	<div>
		<table id="Puzzle Grid">
			<tr>
				<td class="Blank Vertical_Item"></td>
				<!-- Used to make the items fit into the grid -->
				<td class="Vertical_Item Thicker_Left"><img src="@/assets/Images/Vertical_Word_1.jpg" /></td>
				<td class="Vertical_Item"><img src="@/assets/Images/Vertical_Word_2.jpg" /></td>
				<td class="Vertical_Item"><img src="@/assets/Images/Vertical_Word_3.jpg" /></td>
				<td class="Vertical_Item"><img src="@/assets/Images/Vertical_Word_4.jpg" /></td>
				<td class="Vertical_Item Thicker_Left"><img src="@/assets/Images/Vertical_Word_5.jpg" /></td>
				<td class="Vertical_Item"><img src="@/assets/Images/Vertical_Word_6.jpg" /></td>
				<td class="Vertical_Item"><img src="@/assets/Images/Vertical_Word_7.jpg" /></td>
				<td class="Vertical_Item Thicker_Right"><img src="@/assets/Images/Vertical_Word_8.jpg" /></td>
			</tr>
			<tr>
				<td class="Horizontal_Item Thicker_Top"><img src="@/assets/Images/Horizontal_Word_1.jpg" /></td>
				<td class="Hoverable">
					<span v-if="Grid[0] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[0] === 'X' || Grid[2] === '✔' || Grid[1] === '✔' || Grid[3] === '✔' || Grid[12] === '✔' || Grid[8] === '✔' || Grid[4] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[1] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[1] === 'X' || Grid[2] === '✔' || Grid[3] === '✔' || Grid[0] === '✔' || Grid[13] === '✔' || Grid[9] === '✔' || Grid[5] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[2] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[2] === 'X' || Grid[3] === '✔' || Grid[1] === '✔' || Grid[0] === '✔' || Grid[14] === '✔' || Grid[10] === '✔' || Grid[6] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[3] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[3] === 'X' || Grid[2] === '✔' || Grid[1] === '✔' || Grid[0] === '✔' || Grid[15] === '✔' || Grid[11] === '✔' || Grid[7] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Left Hoverable">
					<span v-if="Grid[16] === '✔'" class="Correct">✔</span>
					<span v-esle-if="Grid[16] === 'X' || Grid[18] === '✔' || Grid[17] === '✔' || Grid[19] === '✔' || Grid[28] === '✔' || Grid[24] === '✔' || Grid[20] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[17] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[17] === 'X' || Grid[18] === '✔' || Grid[19] === '✔' || Grid[16] === '✔' || Grid[29] === '✔' || Grid[25] === '✔' || Grid[21] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[18] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[18] === 'X' || Grid[19] === '✔' || Grid[17] === '✔' || Grid[16] === '✔' || Grid[30] === '✔' || Grid[26] === '✔' || Grid[22] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable">
					<span v-if="Grid[19] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[19] === 'X' || Grid[18] === '✔' || Grid[17] === '✔' || Grid[16] === '✔' || Grid[31] === '✔' || Grid[27] === '✔' || Grid[23] === '✔'" class="Incorrect">X</span>
				</td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/Horizontal_Word_2.jpg" /></td>
				<td class="Hoverable">
					<span v-if="Grid[4] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[4] === 'X' || Grid[6] === '✔' || Grid[5] === '✔' || Grid[7] === '✔' || Grid[12] === '✔' || Grid[8] === '✔' || Grid[0] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[5] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[5] === 'X' || Grid[6] === '✔' || Grid[7] === '✔' || Grid[4] === '✔' || Grid[13] === '✔' || Grid[9] === '✔' || Grid[1] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[6] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[6] === 'X' || Grid[7] === '✔' || Grid[5] === '✔' || Grid[4] === '✔' || Grid[14] === '✔' || Grid[10] === '✔' || Grid[2] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[7] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[7] === 'X' || Grid[6] === '✔' || Grid[5] === '✔' || Grid[4] === '✔' || Grid[15] === '✔' || Grid[11] === '✔' || Grid[3] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Left Hoverable">
					<span v-if="Grid[20] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[20] === 'X' || Grid[22] === '✔' || Grid[21] === '✔' || Grid[23] === '✔' || Grid[28] === '✔' || Grid[24] === '✔' || Grid[16] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[21] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[21] === 'X' || Grid[22] === '✔' || Grid[23] === '✔' || Grid[20] === '✔' || Grid[29] === '✔' || Grid[25] === '✔' || Grid[17] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[22] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[22] === 'X' || Grid[23] === '✔' || Grid[21] === '✔' || Grid[20] === '✔' || Grid[30] === '✔' || Grid[26] === '✔' || Grid[18] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable">
					<span v-if="Grid[23] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[23] === 'X' || Grid[22] === '✔' || Grid[21] === '✔' || Grid[20] === '✔' || Grid[31] === '✔' || Grid[27] === '✔' || Grid[19] === '✔'" class="Incorrect">X</span>
				</td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/Horizontal_Word_3.jpg" /></td>
				<td class="Hoverable">
					<span v-if="Grid[8] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[8] === 'X' || Grid[10] === '✔' || Grid[9] === '✔' || Grid[11] === '✔' || Grid[12] === '✔' || Grid[4] === '✔' || Grid[0] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[9] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[9] === 'X' || Grid[10] === '✔' || Grid[11] === '✔' || Grid[8] === '✔' || Grid[13] === '✔' || Grid[5] === '✔' || Grid[1] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[10] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[10] === 'X' || Grid[11] === '✔' || Grid[9] === '✔' || Grid[8] === '✔' || Grid[14] === '✔' || Grid[6] === '✔' || Grid[2] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[11] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[11] === 'X' || Grid[10] === '✔' || Grid[9] === '✔' || Grid[8] === '✔' || Grid[15] === '✔' || Grid[7] === '✔' || Grid[3] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Left Hoverable">
					<span v-if="Grid[24] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[24] === 'X' || Grid[26] === '✔' || Grid[25] === '✔' || Grid[27] === '✔' || Grid[28] === '✔' || Grid[20] === '✔' || Grid[16] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[25] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[25] === 'X' || Grid[26] === '✔' || Grid[27] === '✔' || Grid[24] === '✔' || Grid[29] === '✔' || Grid[21] === '✔' || Grid[17] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[26] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[26] === 'X' || Grid[27] === '✔' || Grid[25] === '✔' || Grid[24] === '✔' || Grid[30] === '✔' || Grid[22] === '✔' || Grid[18] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable">
					<span v-if="Grid[27] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[27] === 'X' || Grid[26] === '✔' || Grid[25] === '✔' || Grid[24] === '✔' || Grid[31] === '✔' || Grid[23] === '✔' || Grid[19] === '✔'" class="Incorrect">X</span>
				</td>
			</tr>
			<tr>
				<td class="Horizontal_Item Thicker_Bottom"><img src="@/assets/Images/Horizontal_Word_4.jpg" /></td>
				<td class="Thicker_Bottom Hoverable">
					<span v-if="Grid[12] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[12] === 'X' || Grid[14] === '✔' || Grid[13] === '✔' || Grid[15] === '✔' || Grid[8] === '✔' || Grid[4] === '✔' || Grid[0] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Hoverable">
					<span v-if="Grid[13] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[13] === 'X' || Grid[14] === '✔' || Grid[15] === '✔' || Grid[12] === '✔' || Grid[9] === '✔' || Grid[5] === '✔' || Grid[1] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Hoverable">
					<span v-if="Grid[14] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[14] === 'X' || Grid[15] === '✔' || Grid[13] === '✔' || Grid[12] === '✔' || Grid[10] === '✔' || Grid[6] === '✔' || Grid[2] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom" Hoverable>
					<span v-if="Grid[15] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[15] === 'X' || Grid[14] === '✔' || Grid[13] === '✔' || Grid[12] === '✔' || Grid[11] === '✔' || Grid[7] === '✔' || Grid[3] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Thicker_Left Hoverable">
					<span v-if="Grid[28] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[28] === 'X' || Grid[30] === '✔' || Grid[29] === '✔' || Grid[31] === '✔' || Grid[24] === '✔' || Grid[20] === '✔' || Grid[16] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Hoverable">
					<span v-if="Grid[29] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[29] === 'X' || Grid[30] === '✔' || Grid[31] === '✔' || Grid[28] === '✔' || Grid[25] === '✔' || Grid[21] === '✔' || Grid[17] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Hoverable">
					<span v-if="Grid[30] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[30] === 'X' || Grid[31] === '✔' || Grid[29] === '✔' || Grid[28] === '✔' || Grid[26] === '✔' || Grid[22] === '✔' || Grid[18] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Thicker_Right Hoverable">
					<span v-if="Grid[31] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[31] === 'X' || Grid[30] === '✔' || Grid[29] === '✔' || Grid[28] === '✔' || Grid[27] === '✔' || Grid[23] === '✔' || Grid[19] === '✔'" class="Incorrect">X</span>
				</td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/Horizontal_Word_5.jpg" /></td>
				<td class="Hoverable">
					<span v-if="Grid[32] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[32] === 'X' || Grid[34] === '✔' || Grid[33] === '✔' || Grid[35] === '✔' || Grid[44] === '✔' || Grid[40] === '✔' || Grid[36] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[33] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[33] === 'X' || Grid[34] === '✔' || Grid[35] === '✔' || Grid[32] === '✔' || Grid[45] === '✔' || Grid[41] === '✔' || Grid[37] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[34] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[34] === 'X' || Grid[35] === '✔' || Grid[33] === '✔' || Grid[32] === '✔' || Grid[46] === '✔' || Grid[42] === '✔' || Grid[38] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable">
					<span v-if="Grid[35] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[35] === 'X' || Grid[34] === '✔' || Grid[33] === '✔' || Grid[32] === '✔' || Grid[47] === '✔' || Grid[43] === '✔' || Grid[39] === '✔'" class="Incorrect">X</span>
				</td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/Horizontal_Word_6.jpg" /></td>
				<td class="Hoverable">
					<span v-if="Grid[36] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[36] === 'X' || Grid[38] === '✔' || Grid[37] === '✔' || Grid[39] === '✔' || Grid[44] === '✔' || Grid[40] === '✔' || Grid[32] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[37] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[37] === 'X' || Grid[38] === '✔' || Grid[39] === '✔' || Grid[36] === '✔' || Grid[45] === '✔' || Grid[41] === '✔' || Grid[33] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[38] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[38] === 'X' || Grid[39] === '✔' || Grid[37] === '✔' || Grid[36] === '✔' || Grid[46] === '✔' || Grid[42] === '✔' || Grid[34] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable">
					<span v-if="Grid[39] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[39] === 'X' || Grid[38] === '✔' || Grid[37] === '✔' || Grid[36] === '✔' || Grid[47] === '✔' || Grid[43] === '✔' || Grid[35] === '✔'" class="Incorrect">X</span>
				</td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/Horizontal_Word_7.jpg" /></td>
				<td class="Hoverable">
					<span v-if="Grid[40] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[40] === 'X' || Grid[42] === '✔' || Grid[41] === '✔' || Grid[43] === '✔' || Grid[44] === '✔' || Grid[36] === '✔' || Grid[32] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[41] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[41] === 'X' || Grid[42] === '✔' || Grid[43] === '✔' || Grid[40] === '✔' || Grid[45] === '✔' || Grid[37] === '✔' || Grid[33] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable">
					<span v-if="Grid[42] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[42] === 'X' || Grid[43] === '✔' || Grid[41] === '✔' || Grid[40] === '✔' || Grid[46] === '✔' || Grid[38] === '✔' || Grid[34] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable">
					<span v-if="Grid[43] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[43] === 'X' || Grid[42] === '✔' || Grid[41] === '✔' || Grid[40] === '✔' || Grid[47] === '✔' || Grid[39] === '✔' || Grid[35] === '✔'" class="Incorrect">X</span>
				</td>
			</tr>
			<tr>
				<td class="Horizontal_Item Thicker_Bottom"><img src="@/assets/Images/Horizontal_Word_8.jpg" /></td>
				<td class="Thicker_Bottom Hoverable">
					<span v-if="Grid[44] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[44] === 'X' || Grid[46] === '✔' || Grid[45] === '✔' || Grid[47] === '✔' || Grid[40] === '✔' || Grid[36] === '✔' || Grid[32] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Hoverable">
					<span v-if="Grid[45] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[45] === 'X' || Grid[46] === '✔' || Grid[47] === '✔' || Grid[44] === '✔' || Grid[41] === '✔' || Grid[37] === '✔' || Grid[33] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Hoverable">
					<span v-if="Grid[46] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[46] === 'X' || Grid[47] === '✔' || Grid[45] === '✔' || Grid[44] === '✔' || Grid[42] === '✔' || Grid[38] === '✔' || Grid[34] === '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Thicker_Right Hoverable">
					<span v-if="Grid[47] === '✔'" class="Correct">✔</span>
					<span v-else-if="Grid[47] === 'X' || Grid[46] === '✔' || Grid[45] === '✔' || Grid[44] === '✔' || Grid[43] === '✔' || Grid[39] === '✔' || Grid[35] === '✔'" class="Incorrect">X</span>
				</td>
			</tr>
		</table>
	</div>
</template>
<script>
	export default {
		name: "LogicPuzzle",
		data() {
			return {
				Grid: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			};
		},
	};
</script>
<style scoped>
	table {
		position: absolute;
		top: 20%;
	}
	td {
		width: 2rem;
		height: 2rem;
		outline-color: black;
		outline-width: 2px;
		outline-style: solid;
	}
	.Hoverable:hover {
		background-color: lightblue;
	}
	.Vertical_Item {
		width: 2rem;
		height: 6rem;
		border-top: 2px solid black;
		border-bottom: 2px solid black;
	}
	.Horizontal_Item {
		font-weight: bold;
		font-size: 13px;
		width: 6rem;
		border-left: 2px solid black;
		border-right: 2px solid black;
	}
	.Thicker_Left {
		border-left: 2px solid black;
	}
	.Thicker_Top {
		border-top: 2px solid black;
	}
	.Thicker_Right {
		border-right: 2px solid black;
	}
	.Thicker_Bottom {
		border-bottom: 2px solid black;
	}
	.Blank {
		outline: none;
		border: none;
	}
</style>
