/*
* Date: 11.5.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/train/javascript
* In My Own Words: 
    Create a function that replicates the purpose of XOR.
* Test Conditions: 
    xor(false, false), false
    xor(true, false), true
    xor(false, true), true
    xor(true, true), false
* Pseudocode: 
    
* Notes After Attempt:
    I could have just checked to see if the two are unequal...
*/

function xor(a, b) {
    if (a === true) {
        return b === false ? true : false
    } else {
        return b === true ? true : false
    }
}

module.exports = xor