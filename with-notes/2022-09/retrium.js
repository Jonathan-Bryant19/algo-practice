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
const BLINKER_BOARD2 = {
    0: [],
    1: [],
    2: [1,2,3],
    3: [],
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
    3: [3],
    4: []
}

function getNextGeneration(inputBoard) {
    const outputBoard = JSON.parse(JSON.stringify(inputBoard))
    let firstRow, lastRow

    // Count Living Neighbors Helper Function
    function countNeighbors(row, col) {
        let livingCells = 0
        const neighborhood = [[row-1, col-1], [row-1, col], [row-1, col+1], [row, col-1], [row, col], [row, col+1], [row+1, col-1], [row+1, col], [row+1, col+1]]
        
        function sortedIndex(array, value) {
            let low = 0
            let high = array.length;
            while (low < high) {
                let mid = low + high >>> 1;
                if (array[mid] < value) low = mid + 1;
                else high = mid;
            }
            return low;
        }

        for (let i = 0; i < neighborhood.length; i++) {
            if (inputBoard[neighborhood[i][0]] && inputBoard[neighborhood[i][0]].includes(neighborhood[i][1])) {
                livingCells++
            }
        }
        if (livingCells === 3) {
            if (outputBoard[row].includes(col)) {
                return livingCells
            } else {
                const index = sortedIndex(outputBoard[row], col)
                outputBoard[row].splice(index, 0, col) 
            }
            return livingCells
        }
        if (livingCells < 3 || livingCells > 4) {
            if (!outputBoard[row].includes(col)) {
                return livingCells
            } else {
                const index = sortedIndex(outputBoard[row], col)
                outputBoard[row].splice(index, 1)
            }
        }
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
            // Add next key and empty array value to input and output if absent
            if (inputBoard[i+1] === undefined) {
                inputBoard[i+1] = []
                outputBoard[i+1] = []
            }
            if (inputBoard[i-1] === undefined) {
                inputBoard[i-1] = []
                outputBoard[i-1] = []
            }
            // Determine how many columns to loop through
            let columnCountStart = Math.min(inputBoard[i-1][0] || Infinity, inputBoard[i][0] || Infinity, inputBoard[i+1][0] || Infinity)
            let columnCountEnd = Math.max(inputBoard[i-1][inputBoard[i-1].length - 1] || -Infinity, inputBoard[i][inputBoard[i].length - 1] || -Infinity, inputBoard[i+1][inputBoard[i+1].length - 1] || -Infinity)
            // Loop through each item in the array (column)
            for (let j = columnCountStart - 1; j <= columnCountEnd + 1; j++) {
                countNeighbors(i,j)
            }
        } 
    }
    // Check cells above and below the input
    for (let i = inputBoard[firstRow][0] - 1; i <= inputBoard[firstRow][inputBoard[firstRow].length - 1] + 1; i++) {
        countNeighbors(firstRow - 1, i)
    }
    for (let i = inputBoard[lastRow][0] - 1; i <= inputBoard[lastRow][inputBoard[lastRow].length - 1] + 1; i++) {
        countNeighbors(lastRow + 1, i)
    }
    return outputBoard
}

console.log(getNextGeneration({
    '0': [],
    '1': [],
    '2': [],
    '3': [],
    '4': [ 4, 6 ],
    '5': [ 5, 6 ],
    '6': [ 5 ]
  }))