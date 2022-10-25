/*
* Date: 10.25.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/577b9960df78c19bca00007e/train/javascript
* In My Own Words: 
    Given two integers, return the digit that is in the position of the second integer (from right to left).
* Test Conditions: 
    5673, 4 --> 5
    129, 2 --> 2
    -2825, 3 --> 8
    -456, 4 --> 0
* Pseudocode: 

* Notes After Attempt:

*/

var findDigit = function(num, nth){
    if (nth <= 0) return -1
    num = Math.abs(num).toString().split("")
    if (nth > num.length) return 0
    return parseInt(num[num.length - nth])
}

module.exports = findDigit