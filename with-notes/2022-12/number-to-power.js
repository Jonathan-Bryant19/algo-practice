/*
* Date: 12.13.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript
* In My Own Words: 
  Create a function that takes a base and power and returns the base raised to that power.
* Test Conditions: 
  numberToPower(4, 2), 16);
  numberToPower(10, 4), 10000);
  numberToPower(10, 0), 1);
* Pseudocode: 

* Notes After Attempt:

*/

function numberToPower(number, power){
  if (power === 0) return 1
  if (power === 1) return number
  let counter = 2
  let answer = number
  while (counter <= power) {
    answer = number * answer
    counter++
  }
  return answer
}

module.exports = numberToPower