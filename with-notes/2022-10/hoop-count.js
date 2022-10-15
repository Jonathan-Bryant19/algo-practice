/*
* Date: 10.15.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript
* In My Own Words: 
    Return one of two strings based on the value of an integer input.
* Test Conditions: 
    hoopCount(3),"Keep at it until you get it" 
    hoopCount(11),"Great, now move on to tricks"
* Pseudocode: 

* Notes After Attempt:

*/

function hoopCount (n) {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}

module.exports = hoopCount