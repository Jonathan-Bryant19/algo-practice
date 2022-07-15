/*
* Date: 7.15.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
* In My Own Words: 
    Return the factorial result of an integer input.
* Test Conditions: 
    factorial(0), 1
    factorial(1), 1
    factorial(4), 24
    factorial(7), 5040
    factorial(17), 355687428096000
* Pseudocode: 
    Try to do this recursively for practice. 
* Notes After Attempt:
    Got it pretty quickly but need to remember to account for negative numbers in the base case (use <= instead of ===). 
*/

function factorial(n){
    if (n <= 1) return 1
    return n * factorial(n-1)
}

console.log(factorial(7))