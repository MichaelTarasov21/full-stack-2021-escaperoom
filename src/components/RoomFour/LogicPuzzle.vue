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
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Thicker_Left Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Thicker_Right Hoverable"></td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/Horizontal_Word_2.jpg" /></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Thicker_Left Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Thicker_Right Hoverable"></td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/Horizontal_Word_3.jpg" /></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Thicker_Left Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Thicker_Right Hoverable"></td>
			</tr>
			<tr>
				<td class="Horizontal_Item Thicker_Bottom"><img src="@/assets/Images/Horizontal_Word_4.jpg" /></td>
				<td class="Thicker_Bottom Hoverable"></td>
				<td class="Thicker_Bottom Hoverable"></td>
				<td class="Thicker_Bottom Hoverable"></td>
				<td class="Thicker_Bottom" Hoverable></td>
				<td class="Thicker_Bottom Thicker_Left Hoverable"></td>
				<td class="Thicker_Bottom Hoverable"></td>
				<td class="Thicker_Bottom Hoverable"></td>
				<td class="Thicker_Bottom Thicker_Right Hoverable"></td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/Horizontal_Word_5.jpg" /></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Thicker_Right Hoverable"></td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/Horizontal_Word_6.jpg" /></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Thicker_Right Hoverable"></td>
			</tr>
			<tr>
				<td class="Horizontal_Item"><img src="@/assets/Images/Horizontal_Word_7.jpg" /></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Hoverable"></td>
				<td class="Thicker_Right Hoverable"></td>
			</tr>
			<tr>
				<td class="Horizontal_Item Thicker_Bottom"><img src="@/assets/Images/Horizontal_Word_8.jpg" /></td>
				<td class="Thicker_Bottom Hoverable"></td>
				<td class="Thicker_Bottom Hoverable"></td>
				<td class="Thicker_Bottom Hoverable"></td>
				<td class="Thicker_Bottom Thicker_Right Hoverable"></td>
			</tr>
		</table>
	</div>
</template>
<script>
	export default {
		name: "LogicPuzzle",
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
    .Hoverable:hover{
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
