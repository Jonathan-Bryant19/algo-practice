/*
* Date: 8.27.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
* In My Own Words: 
    Check to see if a number is a perfect square.
* Test Conditions: 
    isSquare(25) // true
    isSquare(3) // false
* Pseudocode: 

* Notes After Attempt:

*/

var isSquare = function(n){
    var num = Math.sqrt(n);
    return (num % 1 === 0  && n >= 0) ? true : false
}

console.log(isSquare(144))