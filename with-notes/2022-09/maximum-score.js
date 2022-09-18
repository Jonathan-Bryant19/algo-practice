/*
* Date: 9.16.22
* Rank: LeetCode (Medium)
* Link: https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/
* In My Own Words: 
    Given two arrays of numbers, return the maximum sum of one number multiplied by a number in the other array. REmove the number from the first array and loop through the second.
* Test Conditions: 
    Input: nums = [1,2,3], multipliers = [3,2,1]
    Output: 14
    Input: nums = [-5,-3,-3,-2,7,1], multipliers = [-10,-5,3,4,6]
    Output: 102
* Pseudocode: 
    * Loop through multipliers
        * Check if multiplier is positive, negative, or 0
    * Look at start and end of nums
        * If multiplier is 0, select smaller number
        * If multiplier is negative, select smaller number
        * If multiplier is positive, select higher number
    * Multiple integers and and produce to counter.
    * Remove element from nums and increment index for multipliers.
* Notes After Attempt:

*/

var maximumScore = function(nums, multipliers) {
    let score = 0
    for (let i = 0; i < multipliers.length; i++) {
        let start = nums[0]
        let end = nums[nums.length - 1]
        if (multipliers[i] === 0) {
            start > end ? nums.splice(nums.length - 1, 1) : nums.splice(0, 1) 
        } else if (multipliers[i] < 0) {
            if (start > end) {
                score += end * multipliers[i]
                nums.splice(nums.length - 1, 1)
            } else {
                score += start * multipliers[i]
                nums.splice(0, 1)
            }
        } else {
            if (start > end) {
                score += start * multipliers[i]
                nums.splice(0, 1)
            } else {
                score += end * multipliers[i]
                nums.splice(nums.length -1, 1)
            }
        }
    }
    return score
};

console.log(maximumScore([-5,-3,-3,-2,7,1], [-10,-5,3,4,6]))