/*
* Date: 8.16.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/problems/first-unique-character-in-a-string/
* In My Own Words: 
    Given a string find the index position of the first character that does not repeat. If none return -1.
* Test Conditions: 
    Input: s = "leetcode"
    Output: 0
    Input: s = "loveleetcode"
    Output: 2
    Input: s = "aabb"
    Output: -1
* Pseudocode: 
    Build an object, then loop through keys to find first value equal to 1. If none return -1.
* Notes After Attempt:

*/

var firstUniqChar = function(s) {
    let hash = {}
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = (hash[s[i]] || 0) + 1
    }
    for (let key in hash) {
        if (hash[key] === 1) {
            return s.indexOf(key)
        }
    }
    return -1
}

console.log(firstUniqChar("dddccdbba"))