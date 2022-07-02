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
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0]
Output: 3

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
    let sumLeft = 0
    let sumRight = 0
    const sumTotal = nums.reduce((a, b) => a + b)
    for (let i = 0; i < nums.length; i++) {
        if (i = 0) {
            sumLeft = 0
            sumRight = sumTotal - nums[i]
            if (sumLeft === sumRight) return 0
        }
        if (i = nums.length - 1) {
            sumRight = 0
            sumLeft = sumTotal - nums[i]
            if (sumLeft === sumRight) return nums.length -1
        } 
        sumLeft += nums[i - 1]
        sumRight += sumTotal - sumLeft + nums[i]
        console.log(sumLeft, sumRight)
    }
};

console.log(pivotIndex([1,7,3,6,5,6]))