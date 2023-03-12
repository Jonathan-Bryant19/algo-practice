/*
* Date: 3.12.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/56a25ba95df27b7743000016/train/javascript
* In My Own Words: 
  Given an integer, use regex to return a boolean based on whether or not the first character is a 1, 2 or 3.
* Test Conditions: 
  validateCode(123), true
  validateCode(248), true
  validateCode(8), false
  validateCode(321), true
  validateCode(9453), false  
* Pseudocode: 

* Notes After Attempt:

*/

function validateCode (code) {
  const regex = /[1-3]/
  return regex.test(code.toString().split("")[0]) ? true : false
}

module.exports = validateCode