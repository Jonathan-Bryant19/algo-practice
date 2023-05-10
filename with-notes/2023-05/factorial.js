/*
* Date: 5.10.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5694cb0ec554589633000036/train/javascript
* In My Own Words: 
  Using recursion, return n! given n.
* Test Conditions: 
  factorial(0), 1
  factorial(1), 1
  factorial(2), 2
  factorial(3), 6
* Pseudocode: 

* Notes After Attempt:

*/

function factorial(n) {
  if (n === 1 || n === 0) return 1

  return n * factorial(n - 1)
}

module.exports = factorial