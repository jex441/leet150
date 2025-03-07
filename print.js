const grid = Array(24)
	.fill(null)
	.map(() => Array(36).fill(0));

// Define the word 'HELLO' using 1s in the grid
const letters = [
	// 'H'
	[0, 0],
	[0, 1],
	[0, 2],
	[0, 4],
	[0, 5],
	[0, 6],
	[1, 3],
	[2, 3],
	[3, 0],
	[3, 1],
	[3, 2],
	[3, 4],
	[3, 5],
	[3, 6],
	// 'E'
	[6, 0],
	[6, 1],
	[6, 2],
	[6, 3],
	[6, 4],
	[6, 5],
	[6, 6],
	[7, 0],
	[7, 3],
	[7, 6],
	[8, 0],
	[8, 6],
	// 'L'
	[10, 0],
	[10, 1],
	[10, 2],
	[10, 3],
	[10, 4],
	[10, 5],
	[10, 6],
	[11, 0],
	[12, 0],
	[12, 6],
	// 'L'
	[14, 0],
	[14, 1],
	[14, 2],
	[14, 3],
	[14, 4],
	[14, 5],
	[14, 6],
	[15, 0],
	[16, 0],
	[16, 6],
	// 'O'
	[18, 1],
	[18, 2],
	[18, 3],
	[18, 4],
	[18, 5],
	[19, 0],
	[19, 6],
	[20, 0],
	[20, 6],
	[21, 1],
	[21, 2],
	[21, 3],
	[21, 4],
	[21, 5],
];

// Fill the grid with 'HELLO'
for (const [x, y] of letters) {
	grid[y][x] = 1;
}

// Function to print the grid
function printGrid(grid) {
	for (let row of grid) {
		console.log(row.map((cell) => (cell ? "#" : " ")).join(""));
	}
}

// Call the function to display the grid
printGrid(grid);
