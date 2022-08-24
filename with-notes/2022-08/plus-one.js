/*
* Date: 8.23.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
* In My Own Words: 
    Given an array of numbers, join the numbers, add 1, and return in the original split format array.
* Test Conditions: 
    Input: digits = [1,2,3]
    Output: [1,2,4]
    Input: digits = [4,3,2,1]
    Input: digits = [9]
    Output: [1,0]Output: [4,3,2,2]
* Pseudocode: 
    Join, parse integer, add 1, split, and return. 
* Notes After Attempt:

*/

var plusOne = function(digits) {
    const num = BigInt(digits.join("")) + BigInt(1)
    return num.toString().split("").map(n => parseInt(n))
}