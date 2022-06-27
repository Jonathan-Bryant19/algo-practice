/*
* Date: 6.27.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/train/javascript
* In My Own Words: 
    Given a number return true unless 1
* Test Conditions: 
    plural(0), true
    plural(0.5), true
    plural(1), false
    plural(100), true
    plural(Infinity), true
* Pseudocode: 
    Ternary.
* Notes After Attempt:
    I thought mine was simple enough but could have just checked against 1 using the bang operator `return n !== 1`.
*/

function plural(n) {
    return n === 1 ? false : true
}

console.log(plural(100))