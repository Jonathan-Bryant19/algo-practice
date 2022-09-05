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
*/

const BLOCK_BOARD = {
    0: [],
    1: [1,2],
    2: [1,2],
    3: []
};
const BEEHIVE_BOARD = {
    0: [],
    1: [2,3],
    2: [1,4],
    3: [2,3],
    4: []
}
const BLINKER_BOARD = {
    0: [],
    1: [2],
    2: [2],
    3: [2],
    4: []
}
const TOAD_BOARD = {
    0: [],
    1: [],
    2: [2,3,4],
    3: [1,2,3],
    4: [],
    5: []
}
const GLIDER_BOARD = {
    0: [],
    1: [3],
    2: [4],
    3: [2,3,4],
    4: [],
    5: []
}
const TEST_BOARD = {
    0: [],
    1: [3],
    2: [2,3,4],
    3: [3]
}

function getNextGeneration(inputBoard) {
    const outputBoard = {...inputBoard}
    let firstRow, lastRow

    // Count Living Neighbors Helper Function
    function countNeighbors(row, col) {
        let livingCells = 0
        const neighborhood = [[row-1, col-1], [row-1, col], [row-1, col+1], [row, col-1], [row, col], [row, col+1], [row+1, col-1], [row+1, col], [row+1, col+1]]
        // The row gives you the key. See if it's defined. If it is, it points to an array. If the array includes the col value, then that cell is alive. Use this same logic to calculate all the relative positions.
        for (let i = 0; i < neighborhood.length; i++) {
            if (inputBoard[neighborhood[i][0]] && inputBoard[neighborhood[i][0]].includes(neighborhood[i][1])) {
                livingCells++
                if (livingCells > 4) {
                    // outputBoard[row].splice(col, 1)
                    console.log("Dead cell")
                }
            }
        }
        // console.log("row: ", row, "col: ", col)
        return livingCells
    }
    

    // Grab keys to determine where to start and stop columns
    const keysArr = Object.keys(inputBoard)
    // Loop over each row
    for (let i = keysArr[0] - 1; i <= parseInt(keysArr[keysArr.length-1]) + 1; i++) {
        if (inputBoard[i] && inputBoard[i][0] !== undefined) {
            // Define first and last rows with data so we can check cells above those points
            if (inputBoard[i].length > 0) {
                if (!firstRow) firstRow = i
                lastRow = i
            }
            // Determine how many columns to loop through
            let columnCountStart = Math.min(inputBoard[i-1][0] || Infinity, inputBoard[i][0] || Infinity, inputBoard[i+1][0] || Infinity)
            let columnCountEnd = Math.max(inputBoard[i-1][inputBoard[i-1].length - 1] || 0, inputBoard[i][inputBoard[i].length - 1] || 0, inputBoard[i+1][inputBoard[i+1].length - 1] || 0)
            // console.log("i: ", i, "columnCountStart: ", columnCountStart, "columnCountEnd: ", columnCountEnd)
            // Loop through each item in the array (column)
            for (let j = columnCountStart - 1; j <= columnCountEnd + 1; j++) {
                let neighbors = countNeighbors(i,j)
                // console.log(neighbors)
            }
        } 
    }
    // Check cells above and below the input
    for (let i = inputBoard[firstRow][0] - 1; i <= inputBoard[firstRow][inputBoard[firstRow].length - 1] + 1; i++) {
        let neighbors = countNeighbors(firstRow - 1, i)
        // console.log("start: ", neighbors)
    }
    for (let i = inputBoard[lastRow][0] - 1; i <= inputBoard[lastRow][inputBoard[lastRow].length - 1] + 1; i++) {
        let neighbors = countNeighbors(lastRow + 1, i)
        // console.log("end: ", neighbors)
    }
    // console.log("firstRow: ", firstRow, "lastRow: ", lastRow)
    console.log("Input:", inputBoard)
    return outputBoard
}

console.log(getNextGeneration(BLINKER_BOARD))