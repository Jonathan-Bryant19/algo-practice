/*
* Date: 1.15.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript
* In My Own Words: 
  Given an integer return the sum of all cubed values from 1 to n. 
* Test Conditions: 
  2 --> 9
  3 --> 36
* Pseudocode: 

* Notes After Attempt:

*/

function sumCubes(n){
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 3)
  }
  return sum
}

module.exports = sumCubes