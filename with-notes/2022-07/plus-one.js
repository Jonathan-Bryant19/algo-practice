/*
* Date: 7.22.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
* In My Own Words: 
    Given an array of individual digits, return the joined digit plus 1 in the same split array format. 
* Test Conditions: 
    Input: digits = [1,2,3]
    Output: [1,2,4]
    Input: digits = [4,3,2,1]
    Output: [4,3,2,2]
    Input: digits = [9]
    Output: [1,0]
* Pseudocode: 
    Join, add 1, split. 
* Notes After Attempt:
    I thought this would be too many data type changes but my runtime was better than 95% of submissions.
*/

var plusOne = function(digits) {
    const num = BigInt(digits.join("")) + BigInt(1)
    return num.toString().split("").map(n => parseInt(n))
}

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))