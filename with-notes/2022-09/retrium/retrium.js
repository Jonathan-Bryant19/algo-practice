/*
* Date: 9.1.22
* Rank: 
* Link: 
* In My Own Words: 
    Return an object representing the next generation of an object going through one round of The Game of Life according to the following rules:
    1. Any live cell with 2-3 neighbors survives.
    2. Any live cell with < 2 or > 3 neighbors dies.
    3. Any dead cell with exactly 3 live neighbors becomes a live cell.
* Test Conditions: 
    BLOCK_BOARD and BEEHIVE_BOARD return the same object unchanged.
    BLINKER_BOARD and TOAD_BOARD alternate between two configurations (check gifs)
    GLIDER_BOARD continues moving.
* Pseudocode: 
    1. Outer loop over the object keys, inner loop over the array values
        *** These loops assume the keys will be ordered and the array values will be ordered. ***
        a. Outer
            1. From lowest key -1 to highest key + 1
        b. Inner
            1. From array[0] - 1 to array[array.length - 1] + 1 (refactor)
        Count number of live cells per 9 block chunk.
        * If n = 3, center cell is alive
        * If n = 4, center cell retains current state
        * Else center cell is dead 
* Notes After Attempt:
    * This solution relies on keys being ordered and the numbers inside the arrays being ordered.
    * The input must contain empty arrays at the start and end the input to signify the end of the cell group. Otherwise we can't calculate how many columns to loop over without messy code.
    * Need tests for static, oscillators, glider, ordered arrays, ordered keys, and empty arrays before and after input. 
*/

export const BLOCK_BOARD = {
	0: [],
	1: [1, 2],
	2: [1, 2],
	3: [],
};
export const BEEHIVE_BOARD = {
	0: [],
	1: [2, 3],
	2: [1, 4],
	3: [2, 3],
	4: [],
};
export const BLINKER_BOARD = {
	0: [],
	1: [2],
	2: [2],
	3: [2],
	4: [],
};
export const TOAD_BOARD = {
	0: [],
	1: [],
	2: [2, 3, 4],
	3: [1, 2, 3],
	4: [],
	5: [],
};
export const GLIDER_BOARD = {
	0: [],
	1: [3],
	2: [4],
	3: [2, 3, 4],
	4: [],
	5: [],
};

// Search for index position to insert or remove a cell.
export function findIndex(array, value) {
    let startIndex = 0;
    let endIndex = array.length;
    while (startIndex < endIndex) {
        let midIndex = (startIndex + endIndex) >>> 1;
        if (array[midIndex] < value) startIndex = midIndex + 1;
        else endIndex = midIndex;
    }
    return startIndex;
}

// Helper function to update status of a cell based on rules of the game.
export function updateCellStatus(row, col, inputBoard, outputBoard) {
    let livingCells = 0;
    const cellNeighborhood = [
        [row - 1, col - 1],
        [row - 1, col],
        [row - 1, col + 1],
        [row, col - 1],
        [row, col],
        [row, col + 1],
        [row + 1, col - 1],
        [row + 1, col],
        [row + 1, col + 1],
    ];
    // Count number of living cells in specific cellNeighborhood.
    for (let cellLocation = 0; cellLocation < cellNeighborhood.length; cellLocation++) {
        if (
            inputBoard[cellNeighborhood[cellLocation][0]] &&
            inputBoard[cellNeighborhood[cellLocation][0]].includes(cellNeighborhood[cellLocation][1])
        ) {
            livingCells++;
        }
    }
    // Update status of center cell if necessary.
    if (livingCells === 3 && !outputBoard[row].includes(col)) {
        const index = findIndex(outputBoard[row], col);
        outputBoard[row].splice(index, 0, col);
    }
    if ((livingCells < 3 || livingCells > 4) && outputBoard[row].includes(col)) {
        const index = findIndex(outputBoard[row], col);
        outputBoard[row].splice(index, 1);
    }
}

// Implement the Game of Life here to transform the inputBoard into the outputBoard!
export function getNextGeneration(inputBoard) {
	const outputBoard = JSON.parse(JSON.stringify(inputBoard));
	const rowsArray = Object.keys(inputBoard);
	const firstRow = Math.min(...rowsArray)
    const lastRow = Math.max(...rowsArray)
    let firstRowWithCells, lastRowWithCells;

	// Loop over each row.
	for (let currentRow = firstRow - 1; currentRow <= lastRow + 1; currentRow++) {
		if (inputBoard[currentRow] && inputBoard[currentRow].length > 0) {
			// Define first and last rows with data so we can check cells above and below those points.
            if (!firstRowWithCells && firstRowWithCells !== 0) firstRowWithCells = currentRow;
            lastRowWithCells = currentRow;
			// Add next key and empty array value to input and output if absent
			if (inputBoard[currentRow + 1] === undefined) {
				inputBoard[currentRow + 1] = [];
				outputBoard[currentRow + 1] = [];
			}
			if (inputBoard[currentRow - 1] === undefined) {
				inputBoard[currentRow - 1] = [];
				outputBoard[currentRow - 1] = [];
			}
			// Determine how many columns to loop through
			let columnStart = Math.min(
				inputBoard[currentRow - 1][0] || Infinity,
				inputBoard[currentRow][0] || Infinity,
				inputBoard[currentRow + 1][0] || Infinity
			);
			let columnEnd = Math.max(
				inputBoard[currentRow - 1][inputBoard[currentRow - 1].length - 1] || -Infinity,
				inputBoard[currentRow][inputBoard[currentRow].length - 1] || -Infinity,
				inputBoard[currentRow + 1][inputBoard[currentRow + 1].length - 1] || -Infinity
			);
			// Loop through each cell in the row.
			for (let currentColumn = columnStart - 1; currentColumn <= columnEnd + 1; currentColumn++) {
				updateCellStatus(currentRow, currentColumn, inputBoard, outputBoard);
			}
		}
	}
	// Check cells above and below the living cells to search full perimeter
	for (
		let currentColumn = inputBoard[firstRowWithCells][0] - 1;
		currentColumn <= inputBoard[firstRowWithCells][inputBoard[firstRowWithCells].length - 1] + 1;
		currentColumn++
	) {
		updateCellStatus(firstRowWithCells - 1, currentColumn, inputBoard, outputBoard);
	}
	for (
		let currentColumn = inputBoard[lastRowWithCells][0] - 1;
		currentColumn <= inputBoard[lastRowWithCells][inputBoard[lastRowWithCells].length - 1] + 1;
		currentColumn++
	) {
		updateCellStatus(lastRowWithCells + 1, currentColumn, inputBoard, outputBoard);
	}
	return outputBoard;
}

console.log(getNextGeneration(BLINKER_BOARD))
console.log(getNextGeneration({ '0': [ 1, 2, 3 ], '1': [], '2': [], '-1': [], '-2': [] }))