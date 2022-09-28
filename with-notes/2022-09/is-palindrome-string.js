/*
* Date: 9.28.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57a5015d72292ddeb8000b31/train/javascript
* In My Own Words: 
    Check if a string is a palindrome.
* Test Conditions: 
    "anna"   ==> true
    "walter" ==> false
    12321    ==> true
    123456   ==> false
* Pseudocode: 

* Notes After Attempt:

*/

function isPalindrome(line) {
    if (line.length === 1) return true
    let start = 0
    let end = line.length - 1
    while (start < end) {
        if (line[start] !== line[end]) {
            return false
        }
        start++
        end--
    }
    return true
} 

console.log(isPalindrome("12345"))