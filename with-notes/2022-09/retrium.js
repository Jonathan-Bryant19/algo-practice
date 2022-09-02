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
    1. Find the upperLeft limit (lowest x, highest y)
    2. Find the lowerRight limit (highest x, lowest y)
    3. Outer loop over the object keys, inner loop over the array values
        *** These loops assume the keys will be ordered and the array values will be ordered. ***
        a. Outer
            1. From lowest key -1 to highest key + 1
        b. Inner
            1. From array[0] - 1 to array[array.length - 1] + 1 
        Count neighbors for every 
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
    const outputBoard = inputBoard

    return outputBoard
}

console.log(getNextGeneration(BLINKER_BOARD))