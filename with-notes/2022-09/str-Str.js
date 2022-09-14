/*
* Date: 9.13.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/
* In My Own Words: 
    Find the index position where a substring occurs in a string.
* Test Conditions: 
    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Input: haystack = "leetcode", needle = "leeto"
    Output: -1
* Pseudocode: 

* Notes After Attempt:

*/

var strStr = function(haystack, needle) {
    return haystack.search(needle)
};

console.log(strStr("sadbutsat", "sad"))