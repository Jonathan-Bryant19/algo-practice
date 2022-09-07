/*
* Date: 9.2.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/
* In My Own Words: 
    Determine if one string is an anagram of another. Return boolean. 
* Test Conditions: 
    Input: s = "anagram", t = "nagaram"
    Output: true
    Input: s = "rat", t = "car"
    Output: false
* Pseudocode: 
    Create object for both and compare frequencies. 
* Notes After Attempt:

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const sFreq = {}
    const tFreq = {}
    let longerObj
    s.length > t.length ? longerObj = sFreq : longerObj = tFreq
    for (let i = 0; i < s.length; i++) {
        sFreq[s[i]] = (sFreq[s[i]] || 0) + 1
    }
    for (let i = 0; i < t.length; i++) {
        tFreq[t[i]] = (tFreq[t[i]] || 0) + 1
    }
    
    for (let char in longerObj) {
        if (sFreq[char] !== tFreq[char]) return false
    }
    return true
};

console.log(isAnagram("a", "ab"))