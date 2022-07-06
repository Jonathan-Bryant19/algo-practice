/*
* Date: 7.3.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/problems/is-subsequence/
* In My Own Words: 
    Given two strings, check if the first string is a subsequence of the second string. All letters of the first string must appear in the same order as the second string but may be in different index positions. 
* Test Conditions: 
    Input: s = "abc", t = "ahbgdc"
    Output: true

    Input: s = "axc", t = "ahbgdc"
    Output: false
* Pseudocode: 
    1. Loop through the first string.
        a. For each character, find the index of that character in the second string.
            1. If it's not there, return false
        b. Ensure each consecutive character is greater than the previous index position.
            1. If it's not, return false
    2. Return true
* Notes After Attempt:

*/

var isSubsequence = function(s, t) {
    let index = -1
    for (let i = 0; i < s. length; i++) {
        index = t.indexOf(s[i], index + 1)
        if (index === -1) return false
    }
    return true
};

console.log(isSubsequence("abc", "ahbgdc"))