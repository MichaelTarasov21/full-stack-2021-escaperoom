<template>
	<div>
		<table id="Puzzle Grid">
			<tr>
				<td class="Blank Vertical_Item"></td>
				<!-- Used to make the items fit into the grid -->
				<td class="Vertical_Item Thicker_Left"><img src="@/assets/Images/RoomFour/Vertical_Word_1.jpg" /></td>
				<td class="Vertical_Item"><img src="@/assets/Images/RoomFour/Vertical_Word_2.jpg" /></td>
				<td class="Vertical_Item"><img src="@/assets/Images/RoomFour/Vertical_Word_3.jpg" /></td>
				<td class="Vertical_Item Thicker_Right"><img src="@/assets/Images/RoomFour/Vertical_Word_4.jpg" /></td>
				<td class="Vertical_Item"><img src="@/assets/Images/RoomFour/Vertical_Word_5.jpg" /></td>
				<td class="Vertical_Item"><img src="@/assets/Images/RoomFour/Vertical_Word_6.jpg" /></td>
				<td class="Vertical_Item"><img src="@/assets/Images/RoomFour/Vertical_Word_7.jpg" /></td>
				<td class="Vertical_Item Thicker_Right"><img src="@/assets/Images/RoomFour/Vertical_Word_8.jpg" /></td>
			</tr>
			<tr>
				<td class="Horizontal_Item Thicker_Top"><img src="@/assets/Images/RoomFour/Horizontal_Word_1.jpg" /></td>
				<td class="Hoverable Thicker_Left Thicker_Top" @click="Toggle(0)">
					<span v-show="Grid[0] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[0] === 'X' || Grid[2] === '✔' || Grid[1] === '✔' || Grid[3] === '✔' || Grid[12] === '✔' || Grid[8] === '✔' || Grid[4] === '✔') && Grid[0] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable Thicker_Top" @click="Toggle(1)">
					<span v-show="Grid[1] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[1] === 'X' || Grid[2] === '✔' || Grid[3] === '✔' || Grid[0] === '✔' || Grid[13] === '✔' || Grid[9] === '✔' || Grid[5] === '✔') && Grid[1] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable Thicker_Top" @click="Toggle(2)">
					<span v-show="Grid[2] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[2] === 'X' || Grid[3] === '✔' || Grid[1] === '✔' || Grid[0] === '✔' || Grid[14] === '✔' || Grid[10] === '✔' || Grid[6] === '✔') && Grid[2] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable Thicker_Top" @click="Toggle(3)">
					<span v-show="Grid[3] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[3] === 'X' || Grid[2] === '✔' || Grid[1] === '✔' || Grid[0] === '✔' || Grid[15] === '✔' || Grid[11] === '✔' || Grid[7] === '✔') && Grid[3] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable Thicker_Top" @click="Toggle(16)">
					<span v-show="Grid[16] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[16] === 'X' || Grid[18] === '✔' || Grid[17] === '✔' || Grid[19] === '✔' || Grid[28] === '✔' || Grid[24] === '✔' || Grid[20] === '✔') && Grid[16] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable Thicker_Top" @click="Toggle(17)">
					<span v-show="Grid[17] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[17] === 'X' || Grid[18] === '✔' || Grid[19] === '✔' || Grid[16] === '✔' || Grid[29] === '✔' || Grid[25] === '✔' || Grid[21] === '✔') && Grid[17] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable Thicker_Top" @click="Toggle(18)">
					<span v-show="Grid[18] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[18] === 'X' || Grid[19] === '✔' || Grid[17] === '✔' || Grid[16] === '✔' || Grid[30] === '✔' || Grid[26] === '✔' || Grid[22] === '✔') && Grid[18] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable Thicker_Top" @click="Toggle(19)">
					<span v-show="Grid[19] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[19] === 'X' || Grid[18] === '✔' || Grid[17] === '✔' || Grid[16] === '✔' || Grid[31] === '✔' || Grid[27] === '✔' || Grid[23] === '✔') && Grid[19] !== '✔'" class="Incorrect">X</span>
				</td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/RoomFour/Horizontal_Word_2.jpg" /></td>
				<td class="Hoverable Thicker_Left" @click="Toggle(4)">
					<span v-show="Grid[4] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[4] === 'X' || Grid[6] === '✔' || Grid[5] === '✔' || Grid[7] === '✔' || Grid[12] === '✔' || Grid[8] === '✔' || Grid[0] === '✔') && Grid[4] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(5)">
					<span v-show="Grid[5] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[5] === 'X' || Grid[6] === '✔' || Grid[7] === '✔' || Grid[4] === '✔' || Grid[13] === '✔' || Grid[9] === '✔' || Grid[1] === '✔') && Grid[5] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(6)">
					<span v-show="Grid[6] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[6] === 'X' || Grid[7] === '✔' || Grid[5] === '✔' || Grid[4] === '✔' || Grid[14] === '✔' || Grid[10] === '✔' || Grid[2] === '✔') && Grid[6] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable" @click="Toggle(7)">
					<span v-show="Grid[7] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[7] === 'X' || Grid[6] === '✔' || Grid[5] === '✔' || Grid[4] === '✔' || Grid[15] === '✔' || Grid[11] === '✔' || Grid[3] === '✔') && Grid[7] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(20)">
					<span v-show="Grid[20] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[20] === 'X' || Grid[22] === '✔' || Grid[21] === '✔' || Grid[23] === '✔' || Grid[28] === '✔' || Grid[24] === '✔' || Grid[16] === '✔') && Grid[20] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(21)">
					<span v-show="Grid[21] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[21] === 'X' || Grid[22] === '✔' || Grid[23] === '✔' || Grid[20] === '✔' || Grid[29] === '✔' || Grid[25] === '✔' || Grid[17] === '✔') && Grid[21] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(22)">
					<span v-show="Grid[22] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[22] === 'X' || Grid[23] === '✔' || Grid[21] === '✔' || Grid[20] === '✔' || Grid[30] === '✔' || Grid[26] === '✔' || Grid[18] === '✔') && Grid[22] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable" @click="Toggle(23)">
					<span v-show="Grid[23] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[23] === 'X' || Grid[22] === '✔' || Grid[21] === '✔' || Grid[20] === '✔' || Grid[31] === '✔' || Grid[27] === '✔' || Grid[19] === '✔') && Grid[23] !== '✔'" class="Incorrect">X</span>
				</td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/RoomFour/Horizontal_Word_3.jpg" /></td>
				<td class="Hoverable Thicker_Left" @click="Toggle(8)">
					<span v-show="Grid[8] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[8] === 'X' || Grid[10] === '✔' || Grid[9] === '✔' || Grid[11] === '✔' || Grid[12] === '✔' || Grid[4] === '✔' || Grid[0] === '✔') && Grid[8] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(9)">
					<span v-show="Grid[9] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[9] === 'X' || Grid[10] === '✔' || Grid[11] === '✔' || Grid[8] === '✔' || Grid[13] === '✔' || Grid[5] === '✔' || Grid[1] === '✔') && Grid[9] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(10)">
					<span v-show="Grid[10] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[10] === 'X' || Grid[11] === '✔' || Grid[9] === '✔' || Grid[8] === '✔' || Grid[14] === '✔' || Grid[6] === '✔' || Grid[2] === '✔') && Grid[10] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable" @click="Toggle(11)">
					<span v-show="Grid[11] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[11] === 'X' || Grid[10] === '✔' || Grid[9] === '✔' || Grid[8] === '✔' || Grid[15] === '✔' || Grid[7] === '✔' || Grid[3] === '✔') && Grid[11] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(24)">
					<span v-show="Grid[24] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[24] === 'X' || Grid[26] === '✔' || Grid[25] === '✔' || Grid[27] === '✔' || Grid[28] === '✔' || Grid[20] === '✔' || Grid[16] === '✔') && Grid[24] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(25)">
					<span v-show="Grid[25] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[25] === 'X' || Grid[26] === '✔' || Grid[27] === '✔' || Grid[24] === '✔' || Grid[29] === '✔' || Grid[21] === '✔' || Grid[17] === '✔') && Grid[25] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(26)">
					<span v-show="Grid[26] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[26] === 'X' || Grid[27] === '✔' || Grid[25] === '✔' || Grid[24] === '✔' || Grid[30] === '✔' || Grid[22] === '✔' || Grid[18] === '✔') && Grid[26] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable" @click="Toggle(27)">
					<span v-show="Grid[27] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[27] === 'X' || Grid[26] === '✔' || Grid[25] === '✔' || Grid[24] === '✔' || Grid[31] === '✔' || Grid[23] === '✔' || Grid[19] === '✔') && Grid[27] !== '✔'" class="Incorrect">X</span>
				</td>
			</tr>
			<tr>
				<td class="Horizontal_Item Thicker_Bottom"><img src="@/assets/Images/RoomFour/Horizontal_Word_4.jpg" /></td>
				<td class="Thicker_Bottom Hoverable Thicker_Left" @click="Toggle(12)">
					<span v-show="Grid[12] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[12] === 'X' || Grid[14] === '✔' || Grid[13] === '✔' || Grid[15] === '✔' || Grid[8] === '✔' || Grid[4] === '✔' || Grid[0] === '✔') && Grid[12] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Hoverable" @click="Toggle(13)">
					<span v-show="Grid[13] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[13] === 'X' || Grid[14] === '✔' || Grid[15] === '✔' || Grid[12] === '✔' || Grid[9] === '✔' || Grid[5] === '✔' || Grid[1] === '✔') && Grid[13] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Hoverable" @click="Toggle(14)">
					<span v-show="Grid[14] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[14] === 'X' || Grid[15] === '✔' || Grid[13] === '✔' || Grid[12] === '✔' || Grid[10] === '✔' || Grid[6] === '✔' || Grid[2] === '✔') && Grid[14] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Thicker_Right Hoverable" @click="Toggle(15)">
					<span v-show="Grid[15] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[15] === 'X' || Grid[14] === '✔' || Grid[13] === '✔' || Grid[12] === '✔' || Grid[11] === '✔' || Grid[7] === '✔' || Grid[3] === '✔') && Grid[15] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Hoverable" @click="Toggle(28)">
					<span v-show="Grid[28] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[28] === 'X' || Grid[30] === '✔' || Grid[29] === '✔' || Grid[31] === '✔' || Grid[24] === '✔' || Grid[20] === '✔' || Grid[16] === '✔') && Grid[28] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Hoverable" @click="Toggle(29)">
					<span v-show="Grid[29] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[29] === 'X' || Grid[30] === '✔' || Grid[31] === '✔' || Grid[28] === '✔' || Grid[25] === '✔' || Grid[21] === '✔' || Grid[17] === '✔') && Grid[29] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Hoverable" @click="Toggle(30)">
					<span v-show="Grid[30] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[30] === 'X' || Grid[31] === '✔' || Grid[29] === '✔' || Grid[28] === '✔' || Grid[26] === '✔' || Grid[22] === '✔' || Grid[18] === '✔') && Grid[30] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Thicker_Right Hoverable" @click="Toggle(31)">
					<span v-show="Grid[31] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[31] === 'X' || Grid[30] === '✔' || Grid[29] === '✔' || Grid[28] === '✔' || Grid[27] === '✔' || Grid[23] === '✔' || Grid[19] === '✔') && Grid[31] !== '✔'" class="Incorrect">X</span>
				</td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/RoomFour/Horizontal_Word_5.jpg" /></td>
				<td class="Hoverable Thicker_Left" @click="Toggle(32)">
					<span v-show="Grid[32] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[32] === 'X' || Grid[34] === '✔' || Grid[33] === '✔' || Grid[35] === '✔' || Grid[44] === '✔' || Grid[40] === '✔' || Grid[36] === '✔') && Grid[32] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(33)">
					<span v-show="Grid[33] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[33] === 'X' || Grid[34] === '✔' || Grid[35] === '✔' || Grid[32] === '✔' || Grid[45] === '✔' || Grid[41] === '✔' || Grid[37] === '✔') && Grid[33] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(34)">
					<span v-show="Grid[34] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[34] === 'X' || Grid[35] === '✔' || Grid[33] === '✔' || Grid[32] === '✔' || Grid[46] === '✔' || Grid[42] === '✔' || Grid[38] === '✔') && Grid[34] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable" @click="Toggle(35)">
					<span v-show="Grid[35] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[35] === 'X' || Grid[34] === '✔' || Grid[33] === '✔' || Grid[32] === '✔' || Grid[47] === '✔' || Grid[43] === '✔' || Grid[39] === '✔') && Grid[35] !== '✔'" class="Incorrect">X</span>
				</td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/RoomFour/Horizontal_Word_6.jpg" /></td>
				<td class="Hoverable Thicker_Left" @click="Toggle(36)">
					<span v-show="Grid[36] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[36] === 'X' || Grid[38] === '✔' || Grid[37] === '✔' || Grid[39] === '✔' || Grid[44] === '✔' || Grid[40] === '✔' || Grid[32] === '✔') && Grid[36] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(37)">
					<span v-show="Grid[37] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[37] === 'X' || Grid[38] === '✔' || Grid[39] === '✔' || Grid[36] === '✔' || Grid[45] === '✔' || Grid[41] === '✔' || Grid[33] === '✔') && Grid[37] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(38)">
					<span v-show="Grid[38] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[38] === 'X' || Grid[39] === '✔' || Grid[37] === '✔' || Grid[36] === '✔' || Grid[46] === '✔' || Grid[42] === '✔' || Grid[34] === '✔') && Grid[38] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable" @click="Toggle(39)">
					<span v-show="Grid[39] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[39] === 'X' || Grid[38] === '✔' || Grid[37] === '✔' || Grid[36] === '✔' || Grid[47] === '✔' || Grid[43] === '✔' || Grid[35] === '✔') && Grid[39] !== '✔'" class="Incorrect">X</span>
				</td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/RoomFour/Horizontal_Word_7.jpg" /></td>
				<td class="Hoverable Thicker_Left" @click="Toggle(40)">
					<span v-show="Grid[40] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[40] === 'X' || Grid[42] === '✔' || Grid[41] === '✔' || Grid[43] === '✔' || Grid[44] === '✔' || Grid[36] === '✔' || Grid[32] === '✔') && Grid[40] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(41)">
					<span v-show="Grid[41] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[41] === 'X' || Grid[42] === '✔' || Grid[43] === '✔' || Grid[40] === '✔' || Grid[45] === '✔' || Grid[37] === '✔' || Grid[33] === '✔') && Grid[41] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Hoverable" @click="Toggle(42)">
					<span v-show="Grid[42] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[42] === 'X' || Grid[43] === '✔' || Grid[41] === '✔' || Grid[40] === '✔' || Grid[46] === '✔' || Grid[38] === '✔' || Grid[34] === '✔') && Grid[42] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Right Hoverable" @click="Toggle(43)">
					<span v-show="Grid[43] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[43] === 'X' || Grid[42] === '✔' || Grid[41] === '✔' || Grid[40] === '✔' || Grid[47] === '✔' || Grid[39] === '✔' || Grid[35] === '✔') && Grid[43] !== '✔'" class="Incorrect">X</span>
				</td>
			</tr>
			<tr>
				<td class="Horizontal_Item Thicker_Bottom"><img src="@/assets/Images/RoomFour/Horizontal_Word_8.jpg" /></td>
				<td class="Thicker_Bottom Hoverable Thicker_Left" @click="Toggle(44)">
					<span v-show="Grid[44] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[44] === 'X' || Grid[46] === '✔' || Grid[45] === '✔' || Grid[47] === '✔' || Grid[40] === '✔' || Grid[36] === '✔' || Grid[32] === '✔') && Grid[44] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Hoverable" @click="Toggle(45)">
					<span v-show="Grid[45] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[45] === 'X' || Grid[46] === '✔' || Grid[47] === '✔' || Grid[44] === '✔' || Grid[41] === '✔' || Grid[37] === '✔' || Grid[33] === '✔') && Grid[45] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Hoverable" @click="Toggle(46)">
					<span v-show="Grid[46] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[46] === 'X' || Grid[47] === '✔' || Grid[45] === '✔' || Grid[44] === '✔' || Grid[42] === '✔' || Grid[38] === '✔' || Grid[34] === '✔') && Grid[46] !== '✔'" class="Incorrect">X</span>
				</td>
				<td class="Thicker_Bottom Thicker_Right Hoverable" @click="Toggle(47)">
					<span v-show="Grid[47] === '✔'" class="Correct">✔</span>
					<span v-show="(Grid[47] === 'X' || Grid[46] === '✔' || Grid[45] === '✔' || Grid[44] === '✔' || Grid[43] === '✔' || Grid[39] === '✔' || Grid[35] === '✔') && Grid[47] !== '✔'" class="Incorrect">X</span>
				</td>
			</tr>
		</table>

		<button v-show="AnswersReady()" id="Submit" @click="CheckAnswers">Submit</button>
		<div id="DoorContainer">
			<h2>{{ Result }}</h2>
			<img class="Door" @click="EscapeRoom" v-if="DoorOpen" src="@/assets/Images/RoomFour/Door_Open.png" />
			<img class="Door" @click="TryDoor" v-else src="@/assets/Images/RoomFour/Door_Closed.jpg" />
		</div>
	</div>
</template>
<script>
	export default {
		name: "LogicPuzzle",
		emits: ["Finish"],
		data() {
			return {
				Grid: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				Escape: false,
				DoorOpen: false,
				Result: "The door is locked up tight",
			};
		},
		methods: {
			Toggle(number) {
				if (this.Grid[number] === "") {
					this.$set(this.Grid, number, "X");
				} else if (this.Grid[number] === "X") {
					this.$set(this.Grid, number, "✔");
				} else {
					this.$set(this.Grid, number, "");
				}
			},
			AnswersReady() {
				function IsCheck(Box) {
					return Box === "✔";
				}
				const Box1 = this.Grid.slice(0, 16);
				const Box2 = this.Grid.slice(16, 32);
				const Box3 = this.Grid.slice(32, 48);
				const Box1Checked = Box1.filter(IsCheck);
				const Box2Checked = Box2.filter(IsCheck);
				const Box3Checked = Box3.filter(IsCheck);
				if (Box1Checked.length === 4 && (Box2Checked.length === 4 || Box3Checked.length === 4)) {
					return true;
				} else {
					return false;
				}
			},
			CheckAnswers() {
				function CheckBox(Box, Cell1, Cell2, Cell3, Cell4) {
					return Box[Cell1] === "✔" && Box[Cell2] === "✔" && Box[Cell3] === "✔" && Box[Cell4] === "✔";
				}
				const Box1 = this.Grid.slice(0, 16);
				const Box2 = this.Grid.slice(16, 32);
				const Box3 = this.Grid.slice(32, 48);
				if (CheckBox(Box1, 3, 4, 10, 13) && (CheckBox(Box2, 1, 7, 10, 12) || CheckBox(Box3, 1, 7, 10, 12))) {
					this.Escape = true;
					this.Result = "The locks click";
				} else {
					this.Result = "The locks won't turn";
					setTimeout(this.ResetResult, 2000);
				}
			},
			TryDoor() {
				if (this.Escape) {
					this.Result = "The door swings open";
					this.DoorOpen = true;
				} else {
					this.Result = "The door won't budge";
					setTimeout(this.ResetResult, 2000);
				}
			},
			ResetResult() {
				this.Result = "The door is locked up tight";
			},
			EscapeRoom(){
				this.$emit("Finish")
			}
		},
	};
</script>
<style scoped>
	div {
		text-align: left;
	}
	table {
		text-align: center;
		margin-left: 2rem;
		margin-top: 2rem;
		-webkit-user-select: none; /* Safari */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
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
	}
	.Horizontal_Item {
		font-weight: bold;
		font-size: 13px;
		width: 6rem;
		border-left: 2px solid black;
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
	.Door {
		cursor: pointer;
	}
	.Correct {
		color: lime;
	}
		.Incorrect {
		color: red;
	}
	.Blank {
		outline: none;
		border: none;
	}
	#Submit {
		margin-left: 2rem;
		margin-top: 2rem;
		width: 14rem;
		color: black;
		background-color: lightgray;
	}
	#Submit:hover {
		background-color: gray;
	}
	#DoorContainer {
		position: absolute;
		right: 10%;
		top: 10%;
	}
</style>
