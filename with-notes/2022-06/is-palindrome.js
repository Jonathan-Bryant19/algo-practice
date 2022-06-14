/*
* Date: 6.14.22
* Rank: Leetcode (Easy)
* Link: 
    https://leetcode.com/problems/palindrome-number/
* In My Own Words: 
    Given an integer as input, determine if the integer is a palindrome.
* Test Conditions: 
    isPalindrome(121) // true
    isPalindrome(-121) // false
    isPalindrome(10) // false
* Pseudocode: 
    1. Convert to string, then split by character
    2. Check to see if revese is equal to original. 
* Notes After Attempt:

*/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const array = x.toString().split('')
    const reverse = [...array].reverse().join('')
    return x.toString() === reverse
};

console.log(isPalindrome(121))