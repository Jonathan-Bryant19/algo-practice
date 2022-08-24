/*
* Date: 8.23.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/
* In My Own Words: 
    Given an array of integers, move all 0's to the end without changing the order of the other integers. 
* Test Conditions: 
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]
    Input: nums = [0]
    Output: [0]
* Pseudocode: 
    Map, splice, and push.
* Notes After Attempt:
    Whenever I splice there's a re-indexing of the rest of the array which gives it a worst case of O(n^2). 
*/

var moveZeroes = function(nums) {
    for (let i = nums.length -1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
        }
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]))