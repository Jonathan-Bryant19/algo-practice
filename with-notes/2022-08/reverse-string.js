/*
* Date: 8.29.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
* In My Own Words: 
    Reverse a string given as an array in place.
* Test Conditions: 
    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]
    Input: s = ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]
* Pseudocode: 
    Us pointers at beginning and end.
* Notes After Attempt:

*/

var reverseString = function(s) {
    let start = 0
    let end = s.length -1
    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]]
        start ++
        end -= 1
    }
    return s
};

console.log(reverseString(["H","a","n","n","a","h"]))