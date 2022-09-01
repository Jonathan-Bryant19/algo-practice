/*
* Date: 8.31.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
* In My Own Words: 
    Given an integer, return a nested array that represents the multiplication table that matches the size of the given integer.
* Test Conditions: 
    multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]
    multiplicationTable(2), [[1,2], [2,4]]
* Pseudocode: 
    * Create a table variable.
    * Create an array from 1 to the given number.
    * Push array to table array.
    * For loop that goes from 2 up to given number.
        * Create empty array
        * Push i
        * j = 1
        * while j < input.length - 1
            * push i * table[0][j]
            * j++
        * push array to table
    * Return table
* Notes After Attempt:
    This can definitely be refactored to be simpler and easier to read. 
*/

multiplicationTable = function(size) {
    const table = []
    const topRow = []
    for (let i = 1; i <= size; i++) {
        topRow.push(i)
    }
    table.push(topRow)
    for (let i = 2; i <= size; i++) {
        let nextRow = []
        nextRow.push(i)
        let j = 1
        while (j < size) {
            nextRow.push(i * table[0][j])
            j++
        }
        table.push(nextRow)
    }
    return table
}

console.log(multiplicationTable(5))