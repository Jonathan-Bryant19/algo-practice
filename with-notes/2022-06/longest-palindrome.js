/*
* Date: 6.14.22
* Rank: Leetcode - Medium
* Link: 
    https://leetcode.com/problems/longest-palindromic-substring/
* In My Own Words: 
    Given an input of a string, return the longest substring that is a palindrome. Letters or numbers may be used as characters, but the input will be a string. Return a string holding the palindrome. 
* Test Conditions: 
    longestPalindrome("babad") // "bab"
    longestPalindrome("cbbd") // "bb"
    longestPalindrome("a") // "a"
* Pseudocode: 
    1. Set palindrome = ""
    2. Write helper function to determine if string is palindrome.
        a. Make the first variable equalt to string.split
        b. Make the second variable eqaul to string.split.reverse
        c. Return comparison of the two
    3. Nested loop through string
        a. Check palindrome length
            1. If palindrome.length + i >= s.length, return palindrome (you can't get a longer string at this point)
        a. Push to helper function to see if palindrome.
        b. If true, set palindrome to substring. 
    4. Return palindrome
* Notes After Attempt:
    Brute force nested loop timed out on very long string inputs (failed at 877).
    
    What if instead I check the value of the first character. Then I search the remainder of the string to see if that character exists again. If it does not, move to the next character. If it does, check i + 1 and the character index -1. Continue until you can confirm a palindrome exists. 
*/

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {

    if (s.length === 1) return s
    
    let palindrome = ""

    function isPalindrome(substring) {
        const original = substring.split('').join('')
        const reversed = substring.split('').reverse().join('')
        return original === reversed
    }

    for (let i = 0; i < s.length; i++) {
        if (palindrome.length + i >= s.length) return palindrome
        for (let j = 1; j < s.length; j++) {
            if (isPalindrome(s.slice(i, j + 1)) && s.slice(i, j + 1).length > palindrome.length) {
                palindrome = s.slice(i, j + 1)
            }
        }
    }

    return palindrome

};

console.log(longestPalindrome("ab"))