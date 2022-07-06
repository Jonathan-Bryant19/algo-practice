/*
* Date: 7.4.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/problems/isomorphic-strings/
* In My Own Words: 
    Check to see if one string can map to each character in a second string without repeats and while preserving order. No two characters can be mapped mored than once. 
    You can't reassign a key, and you can't have two different keys point to the same value.
* Test Conditions: 
    Input: s = "egg", t = "add"
    Output: true

    Input: s = "foo", t = "bar"
    Output: false

    Input: s = "paper", t = "title"
    Output: true

    Input: s = "loganb", t = "hunter"
    Output: true
* Pseudocode: 
    1. Set and empty object.
    2. Loop through s
        a. Check to see if s[i] already exists as a key (Object.keys())
            1. If yes, return false
        b. Check to see if t[i] already exists as a value (Object.values())
            1. If yes, return false
        c. Make s[i] the key and t[i] the value in the answer object
    3. Return true.
* Notes After Attempt:
    The hardest part about this problem was understanding what an isomorph is. My answer is aboslutely terrible, but it works. I need to find a better way to work with my object here. 
*/

var isIsomorphic = function(s, t) {
    const ans = {}
    for (let i = 0; i < s.length; i++) {
        if (s[i] in ans === true && ans[s[i]] !== t[i]) {
            return false
        }
        if (Object.values(ans).includes(t[i]) && ans[s[i]] !== t[i]) {
            return false
        }
        ans[s[i]] = t[i]
    }
    return true
};

console.log(isIsomorphic("loganb", "hunter"))
