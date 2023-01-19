/*
* Date: 1.19.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript
* In My Own Words: 
  Given an array of integers, cube each number and return the sum of any odd numbers. Return undefined if any values aren't numbers.
* Test Conditions: 
  cubeOdd([1, 2, 3, 4]), 28);
  cubeOdd([-3,-2,2,3]), 0);
  cubeOdd(["a",12,9,"z",42]), undefined);
* Pseudocode: 

* Notes After Attempt:

*/

function cubeOdd(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (!parseInt(arr[i])) return undefined
    let temp = Math.pow(arr[i], 3)
    if (temp % 2 !== 0) {
      sum += temp
    }
  }
  return sum
}

module.exports = cubeOdd
// console.log(cubeOdd(["a", 12, 9, "z", 42]))