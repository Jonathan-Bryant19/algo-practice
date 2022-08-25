/*
* Date: 8.24.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/
* In My Own Words: 
    Each row, column, and 3x3 space can only contain each digit once. Return boolean. 
* Test Conditions: 
    Input: board = 
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
    Output: true
* Pseudocode: 
    Write agorithm for columns, rows, and 3x3's separately and call in main function. 
* Notes After Attempt:
    Thus definitely needs to be refactored. I saw some solutions using sets so that might be worth working with a little. 
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const board = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
var isValidSudoku = function(board) {
    let container = Array(9)
    function checkRows(board) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === ".") {
                    continue
                } else if (container[board[i][j] - 1] === undefined) {
                    container[board[i][j] - 1] = board[i][j]
                } else {
                    container = Array(9)
                    return false
                }
            }
            container = Array(9)
        }
        return true
    }

    function checkColumns(board) {
        let j = 0
        while (j < 9) {
            for (let i = 0; i < 9; i++) {
                if (board[i][j] === ".") {
                    continue
                } else if (container[board[i][j] - 1] === undefined) {
                    container[board[i][j] - 1] = board[i][j]
                } else {
                    container = Array(9)
                    return false
                }
            }
            container = Array(9)
            j++
        }
        return true
    }

    function check3by3(board) {
        for (let i = 0; i < 9; i++) {
            if (i === 0 || i === 3 || i === 6) {
                container = Array(9)
            }
            for (let j = 0; j < 3; j++) {
                if(board[i][j] === ".") {
                    continue
                } else if (container[board[i][j] - 1] === undefined) {
                    container[board[i][j] -1] = board[i][j]
                } else {
                    return false
                }
            }
        }
        for (let i = 0; i < 9; i++) {
            if (i === 0 || i === 3 || i === 6) {
                container = Array(9)
            }
            for (let j = 3; j < 6; j++) {
                if(board[i][j] === ".") {
                    continue
                } else if (container[board[i][j] - 1] === undefined) {
                    container[board[i][j] -1] = board[i][j]
                } else {
                    return false
                }
            }
        }
        for (let i = 0; i < 9; i++) {
            if (i === 0 || i === 3 || i === 6) {
                container = Array(9)
            }
            for (let j = 6; j < 9; j++) {
                if(board[i][j] === ".") {
                    continue
                } else if (container[board[i][j] - 1] === undefined) {
                    container[board[i][j] -1] = board[i][j]
                } else {
                    return false
                }
            }
        }
        return true
    }
    
    return (checkRows(board) && checkColumns(board) && check3by3(board))
};


console.log(isValidSudoku(board))

/*
0,0     0,1     0,2
1,0     1,1     1,2
2,0     2,1,    2,2
Reset Array
3,0     3,1     3,2
4,0     4,1     4,2
5,0     5,1     5,2
Reset Array
6,0     6,1     6,2
7,0     7,1     7,2
8,0     8,1     8,2
Reset Array
0,3     0,4     0,5
1,3     1,4     1,5
2,3     2,4     2,5
Reset Array
3,
*/