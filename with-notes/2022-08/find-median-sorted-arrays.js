/*
* Date: 8.3.22
* Rank: LeetCode (Hard)
* Link: https://leetcode.com/problems/median-of-two-sorted-arrays/
* In My Own Words: 
    Given two sorted arrays, merge them and return the median value. 
* Test Conditions: 
    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
* Pseudocode: 
    Worked on this one out loud with Kevin.
* Notes After Attempt:
    We thought we had a linear runtime but the solution was accepted. This is worth reviewing to be sure you understand the runtime. 
*/

var findMedianSortedArrays = function(nums1, nums2) {
    let merged = []
    let pointer1 = 0
    let pointer2 = 0
    while (pointer1 < nums1.length && pointer2 < nums2.length) {
        if (nums1[pointer1] <= nums2[pointer2]) {
            merged.push(nums1[pointer1])
            pointer1 += 1
        } else {
            merged.push(nums2[pointer2])
            pointer2 += 1
        }
    }
    if (pointer1 !== nums1.length) {
        merged = merged.concat(nums1.slice(pointer1))
    }
    if (pointer2 !== nums2.length) {
        merged = merged.concat(nums2.slice(pointer2))
    }
    const middle1 = Math.floor((merged.length / 2))
    if (merged.length % 2 === 0) {
        const middle2 = middle1 - 1
        return (merged[middle1] + merged[middle2]) /2
    }
    return merged[middle1]
}

console.log(findMedianSortedArrays([1,2], [3,4]))