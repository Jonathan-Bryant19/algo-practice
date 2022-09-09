/*
* Date: 9.8.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/
* In My Own Words: 
    Check if a string input is a valid palindrome after removing non-alphanumeric characters.
* Test Conditions: 
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Input: s = "race a car"
    Output: false
    Input: s = " "
    Output: true
* Pseudocode: 

* Notes After Attempt:

*/

var isPalindrome = function(s) {
    const alphaNumeric = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let startIndex = 0
    let endIndex = alphaNumeric.length - 1
    console.log(alphaNumeric)
    while (startIndex < endIndex) {
        if (alphaNumeric[startIndex] !== alphaNumeric[endIndex]) return false
        startIndex++
        endIndex--
    }
    return true
};

console.log(isPalindrome("ab_a"))