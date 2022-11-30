/*
* Date: 11.29.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57126304cdbf63c6770012bd/train/javascript
* In My Own Words: 
  Given a string, return true if the string is a valid number. 
* Test Conditions: 
  s2324 -> false
  -234.4 -> true
* Pseudocode: 

* Notes After Attempt:

*/

function isDigit(s) {
  return !!parseInt(s) ? true : false
}

module.exports = isDigit