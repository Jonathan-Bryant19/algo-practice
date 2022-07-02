/* 
/*
* Date: 7.1.22
* Rank: Easy - LeetCode
* Link: https://leetcode.com/problems/find-pivot-index/
* In My Own Words: 
    Find the index of in an array of numbers where the left and right of that array adds up to the same number. If not return -1.
* Test Conditions: 
Input: nums = [Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3

Input: nums = [1,2,3]
Output: -1

Input: nums = [2,1,-1]
Output: 0


Input: nums = [1,2,3]
Output: -1

Input: nums = [2,1,-1]
Output: 0

* Pseudocode: 
    1. Handle edge cases.
    2. Sum entire array once. 
    3. Pivot off values as you iterate and compare differences to sum.
* Notes After Attempt:

*/

var pivotIndex = function(nums) {
    const sumTotal = nums.reduce((a, b) => a + b)
    let sumLeft = 0
    let sumRight = sumTotal - nums[0]
    if (sumLeft === sumRight) return 0
    for (let i = 1; i < nums.length; i++) {
        sumLeft += nums[i - 1]
        sumRight -= nums[i]
        if (sumLeft === sumRight) return i
    }
    return -1
};

console.log(pivotIndex([1,7,4,7,5,6]))