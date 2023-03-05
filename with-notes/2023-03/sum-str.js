/*
* Date: 3.3.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
* In My Own Words: 
  Given two integers as strings, return the sum as a string.
* Test Conditions: 
  sumStr("4","5"), "9"
  sumStr("34","5"), "39"
* Pseudocode: 

* Notes After Attempt:

*/

function sumStr(a,b) {
  return (parseInt(a) + parseInt(b)).toString()
}

module.exports = sumStr