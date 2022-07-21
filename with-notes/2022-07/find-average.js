/*
* Date: 7.21.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/55d277882e139d0b6000005d/train/javascript
* In My Own Words: 
    Given an array of numbers, return the average of all numbers in the array.
* Test Conditions: 
    findAverage([1]), 1
    findAverage([1, 3, 5, 7]), 4
* Pseudocode: 
    Reduce the array then divide the result by the length of the array. Return answer. 
* Notes After Attempt:
    My solution matched best practices. 
*/

var findAverage = function (nums) {
    return nums.reduce((a, b) => a + b) / nums.length
}

console.log(findAverage([1, 3, 5, 7], 4))