/*
* Date: 7.19.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
* In My Own Words: 
    Given an array that is not empty and is filled with duplicate numbers, return the only number that isn't a duplicate. The solution must have a linear runtime and only constant extra space. 
* Test Conditions: 
    Input: nums = [2,2,1]
    Output: 1
    Input: nums = [4,1,2,1,2]
    Output: 4
    Input: nums = [1]
    Output: 1
    Input: nums = [10,5,9,25,25,10,5,143]
    Output: 143
* Pseudocode: 
    Loop through the array
        Find the lastIndexOf the current value
            If -1 return that value

* Notes After Attempt:

*/

var singleNumber = function(nums) {
    const frequencyCounts = {}
    for (let i = 0; i < nums.length; i++) {
        if (frequencyCounts[nums[i]] === undefined) {
            frequencyCounts[nums[i]] = 1
        } else if (frequencyCounts[nums[i]] === 1) {
            frequencyCounts[nums[i]] = 2
        }
    }
    for (let key in frequencyCounts) {
        if (frequencyCounts[key] === 1) return parseInt(key)
    }
};

console.log(singleNumber([1]))