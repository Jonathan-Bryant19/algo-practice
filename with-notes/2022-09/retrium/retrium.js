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

// Search for index at which to insert or splice a cell from the associated array.
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

// Helper function to count living cells in a neighborhood and update cell accordingly.
export function countNeighbors(row, col, inputBoard, outputBoard) {
    let livingCells = 0;
    const neighborhood = [
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
    // Count number of living cells in specific neighborhood.
    for (let i = 0; i < neighborhood.length; i++) {
        if (
            inputBoard[neighborhood[i][0]] &&
            inputBoard[neighborhood[i][0]].includes(neighborhood[i][1])
        ) {
            livingCells++;
        }
    }
    // Update status of center cell if necessary.
    if (livingCells === 3) {
        if (outputBoard[row].includes(col)) {
            return livingCells;
        } else {
            const index = findIndex(outputBoard[row], col);
            outputBoard[row].splice(index, 0, col);
        }
        return livingCells;
    }
    if (livingCells < 3 || livingCells > 4) {
        if (!outputBoard[row].includes(col)) {
            return livingCells;
        } else {
            const index = findIndex(outputBoard[row], col);
            outputBoard[row].splice(index, 1);
        }
    }
    return livingCells;
}

// Implement the Game of Life here to transform the inputBoard into the outputBoard!
export function getNextGeneration(inputBoard) {
	const outputBoard = JSON.parse(JSON.stringify(inputBoard));
	let firstRow, lastRow;

	
	

	// Grab keys to determine where to start and stop columns.
	const keysArr = Object.keys(inputBoard);
	// Loop over each row.
	for (let i = Math.min(...keysArr) - 1; i <= Math.max(...keysArr) + 1; i++) {
		if (inputBoard[i] && inputBoard[i][0] !== undefined) {
			// Define first and last rows with data so we can check cells above and below those points.
			if (inputBoard[i].length > 0) {
				if (!firstRow && firstRow !== 0) firstRow = i;
				lastRow = i;
			}
			// Add next key and empty array value to input and output if absent
			if (inputBoard[i + 1] === undefined) {
				inputBoard[i + 1] = [];
				outputBoard[i + 1] = [];
			}
			if (inputBoard[i - 1] === undefined) {
				inputBoard[i - 1] = [];
				outputBoard[i - 1] = [];
			}
			// Determine how many columns to loop through
			let columnCountStart = Math.min(
				inputBoard[i - 1][0] || Infinity,
				inputBoard[i][0] || Infinity,
				inputBoard[i + 1][0] || Infinity
			);
			let columnCountEnd = Math.max(
				inputBoard[i - 1][inputBoard[i - 1].length - 1] || -Infinity,
				inputBoard[i][inputBoard[i].length - 1] || -Infinity,
				inputBoard[i + 1][inputBoard[i + 1].length - 1] || -Infinity
			);
			// Loop through each item in the array (column)
			for (let j = columnCountStart - 1; j <= columnCountEnd + 1; j++) {
				countNeighbors(i, j, inputBoard, outputBoard);
			}
		}
	}
	// Check cells above and below the living cells to search full perimeter
	for (
		let i = inputBoard[firstRow][0] - 1;
		i <= inputBoard[firstRow][inputBoard[firstRow].length - 1] + 1;
		i++
	) {
		countNeighbors(firstRow - 1, i, inputBoard, outputBoard);
	}
	for (
		let i = inputBoard[lastRow][0] - 1;
		i <= inputBoard[lastRow][inputBoard[lastRow].length - 1] + 1;
		i++
	) {
		countNeighbors(lastRow + 1, i, inputBoard, outputBoard);
	}
	return outputBoard;
}

console.log(getNextGeneration(BLINKER_BOARD))