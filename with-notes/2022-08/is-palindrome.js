/*
* Date: 8.1.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
* In My Own Words: 
    Check to see if a string is a palindrome. Return a boolean.
* Test Conditions: 
    isPalindrome("a"), true
    isPalindrome("Abba"), true
    isPalindrome("hello"), false
* Pseudocode: 
    If empty string or single character, return true
    Lower case and reverse string then check for equality
* Notes After Attempt:

*/

function isPalindrome(x) {
    if (x === "" || x.length === 1) return true
    x = x.toLowerCase()
    const check = x.toLowerCase().split("").reverse().join("")
    return (x === check)
}

console.log(isPalindrome("Abba"))