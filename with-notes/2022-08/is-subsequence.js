/*
* Date: 8.3.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/problems/is-subsequence/
* In My Own Words: 
    Determine if a given string has all the same letters in the same order as a second string. Order matters, but characters do not need to be adjacent. 
* Test Conditions: 
    Input: s = "abc", t = "ahbgdc"
    Output: true
    Input: s = "axc", t = "ahbgdc"
    Output: false
* Pseudocode: 
    Look for each consecutive character based on index.
* Notes After Attempt:

*/

var isSubsequence = function(s, t) {
    let idx = 0
    for (let i = 0; i < s.length; i++) {
        if (t.indexOf(s[i], idx) === -1) {
            return false
        } else {
            idx = t.indexOf(s[i], idx) + 1
        }
    }
    return true
};

console.log(isSubsequence("aaaaaa", "bbaaaa"))