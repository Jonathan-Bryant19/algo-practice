/*
* Date: 12.10.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
* In My Own Words: 
  Return the number of lowercase letters in a string.
* Test Conditions: 
  lowercaseCount("abc"), 3);
  lowercaseCount("abcABC123"), 3);
  lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
  lowercaseCount(""), 0)
  lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
  lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);
* Pseudocode: 

* Notes After Attempt:

*/

function lowercaseCount(str){
  return [...str.matchAll(/[a-z]/g)].length
}

module.exports = lowercaseCount