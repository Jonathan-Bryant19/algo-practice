/*
* Date: 12.5.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
* In My Own Words: 
  Sum the different between consecutive pairs of numbers
* Test Conditions: 
  sumOfDifferences([1, 2, 10]), 9);
  sumOfDifferences([-3, -2, -1]), 2);
* Pseudocode: 

* Notes After Attempt:

*/

function sumOfDifferences(arr) {
  let sum = 0
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i] - arr[i-1]
  }
  return sum
}