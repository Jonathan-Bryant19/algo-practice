/*
* Date: 4.29.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/javascript
* In My Own Words: 
  Given a string of letters, return the string sorted alphabetically.
* Test Conditions: 
  sortGiftCode('abcdef'), 'abcdef'
  sortGiftCode('pqksuvy'), 'kpqsuvy'
  sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz'
* Pseudocode: 

* Notes After Attempt:

*/

function sortGiftCode(code){
  return code.split("").sort().join("")
}

module.exports = sortGiftCode