/*
* Date: 8.15.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
* In My Own Words: 
    Given two arrays, return an array with numbers that appear in both arrays. The number must be in the return array for each match. 
* Test Conditions: 
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2,2]
    Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    Output: [4,9]
* Pseudocode: 
    * Loop through the first array and build an object.
    * Loop through second array and check for value in object.
        * If the value is NOT undefined and is greater than 0, push that value to an answer array and decrease the object value by 1.
* Notes After Attempt:

*/

var intersect = function(nums1, nums2) {
    const answer = []
    const reference = {}
    for (let i of nums1) {
        reference[i] = (reference[i] || 0) + 1
    }
    for (let i = 0; i < nums2.length; i++) {
        if (reference[nums2[i]] !== undefined && reference[nums2[i]] > 0) {
            answer.push(nums2[i])
            reference[nums2[i]] = reference[nums2[i]] - 1
        }
    }
    return answer
};

console.log(intersect([4,9,5], [9,4,9,8,4]))