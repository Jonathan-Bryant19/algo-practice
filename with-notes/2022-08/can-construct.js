/*
* Date: 8.26.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/problems/ransom-note/
* In My Own Words: 
    Given two strings, return true if you can create the first string using the characters in the second string (frequency matters).
* Test Conditions: 
    Input: ransomNote = "a", magazine = "b"
    Output: false
    Input: ransomNote = "aa", magazine = "ab"
    Output: false
    Input: ransomNote = "aa", magazine = "aab"
    Output: true
* Pseudocode: 
    Create two frequency objects and compare them.
* Notes After Attempt:

*/

var canConstruct = function(ransomNote, magazine) {
    ranObj = {}
    magObj = {}
    for (let i = 0; i < ransomNote.length; i++) {
        ranObj[ransomNote[i]] = (ranObj[ransomNote[i]] || 0) + 1
    }
    for (let i = 0; i < magazine.length; i++) {
        magObj[magazine[i]] = (magObj[magazine[i]] || 0) + 1
    }
    for (let char in ranObj) {
        if (magObj[char] === undefined || ranObj[char] > magObj[char]) return false
    }
    return true
};

console.log(canConstruct("aaz", "aab"))