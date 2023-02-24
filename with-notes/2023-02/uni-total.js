/*
* Date: 2.23.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript
* In My Own Words: 
  Return the sum of the value of each ascii character code in an input string.
* Test Conditions: 
  uniTotal("a") == 97
  uniTotal("aaa") == 291
* Pseudocode: 

* Notes After Attempt:

*/

function uniTotal (string) {
  let total = 0
  for (let i = 0; i < string.length; i++) {
    total += string.charCodeAt(i)
  }
  return total
}

module.exports = uniTotal