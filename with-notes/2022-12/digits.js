/*
* Date: 12.11.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/58fa273ca6d84c158e000052/train/javascript
* In My Own Words: 
  Given a number, return the number of digits in that number.
* Test Conditions: 
  digits(5), 1, 
  digits(12345), 5, 
  digits(9876543210), 10, 
* Pseudocode: 

* Notes After Attempt:

*/

function digits(n) {
  return n.toString().length
}

module.exports = digits