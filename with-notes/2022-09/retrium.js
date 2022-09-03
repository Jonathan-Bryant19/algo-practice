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

*/

const BLOCK_BOARD = {
    0: [],
    1: [1,2],
    2: [1,2],
    3: [],
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

function getNextGeneration(inputBoard) {
    const outputBoard = {...inputBoard}
    

    // Count Neighbors Helper Function
    function countNeighbors(row, col) {
        return `${row}:${col}`
    }
    
    
    // Grab keys to determine where to start and stop
    const keysArr = Object.keys(inputBoard)
    // Loop over each row
    for (let i = keysArr[0] - 1; i <= parseInt(keysArr[keysArr.length-1]) + 1; i++) {
        if (inputBoard[i] && inputBoard[i][0] !== undefined) {
            for (let j = (inputBoard[i][0]) - 1; j <= inputBoard[i][inputBoard[i].length - 1] + 1; j++) {
                
            }
        } else {
            console.log("Nothing in row ", i, "!!!")
        }
    }
    return outputBoard
}

console.log(getNextGeneration(GLIDER_BOARD))