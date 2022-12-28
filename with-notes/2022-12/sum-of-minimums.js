/*
* Date: 12.27.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript
* In My Own Words: 
  Given a nested array, take the minimum value from each and return the sum. 
* Test Conditions: 
  sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9)
  sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76)
* Pseudocode: 

* Notes After Attempt:

*/

function sumOfMinimums(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += Math.min(...arr[i])
  }
  return sum
}

module.exports = sumOfMinimums