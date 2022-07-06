/*
* Date: 7.2.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/problems/isomorphic-strings/
* In My Own Words: 
    Check to see if one string is an isomorph of another. Map each character from one to the next and replace the work without errors.
* Test Conditions: 
    Input: s = "egg", t = "add"
    Output: true

    Input: s = "foo", t = "bar"
    Output: false

    Input: s = "paper", t = "title"
    Output: true
* Pseudocode: 
    1. Map through first string and set value as same position in second string.
    2. If the key doesn't exist, add it
    3. If it does exist, check that the value matches the second string
        a. If it doesn't match return false. 
* Notes After Attempt:

*/

var isIsomorphic = function(s, t) {
    const obj = {}
    let index = 0
    let mapHelp = true
    s.split("").map(char => {
        if (!obj[char]) {
            obj[char] = t[index]
            index++
        } else if (obj[char]) {
            if (obj[char] === t[index]) {
                index++
            } else if (obj[char] !== t[index]) {
                mapHelp = false
            }
        }
    })
    console.log(obj)
    return mapHelp === false ? false : true
};

console.log(isIsomorphic("badc", "baba"))