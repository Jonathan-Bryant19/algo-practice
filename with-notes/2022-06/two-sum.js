/*
* Date: 6.3.22
* Rank: Leetcode - Easy
* Link: 
    https://leetcode.com/problems/two-sum/
* In My Own Words: 
    Given an array of numbers and a single integer, return the two index positions that add up to the single integer. 
* Test Conditions: 
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
* Pseudocode: 
    1. Loop through arrray
        a. For each i, loop forward through array (do not loop all the way through as some numbers will have been checked already.)
        b. Add i + j and check to see if the result equals the target.
    2. On a match, return i and j in an array
* Notes After Attempt:

*/

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
};

console.log(twoSum([3,2,4], 6))