/*
* Date: 7.18.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
* In My Own Words: 
    Given an integer and an array, rotate the array by the number of index positions equal to the integer. 
* Test Conditions: 
    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Input: nums = [-1,-100,3,99], k = 2
    Output: [3,99,-1,-100]
    Input: nums = [10,5,9,25,8,16,2,3], k = 6
    Output: nums = [9,25,8,16,2,3,10,5]
* Pseudocode: 
    Slice from -k and concat with slice(0, arr.length-k)
* Notes After Attempt:
    I misunderstood about modifying the array in place. Be sure to really understand the question.
*/

var rotate = function(nums, k) {
    if (k > nums.length) k = k % nums.length
    const reference = nums.slice(-k).concat(nums.slice(0, nums.length + 1 - k))
    for (let i = 0; i < nums.length; i++) {
        nums[i] = reference[i]
    }
    return nums
};

console.log(rotate([1,2,3,4,5,6,7], 8))

console.log(rotate([1,2,3,4,5,6,7], 3)) // [5,6,7,1,2,3,4]