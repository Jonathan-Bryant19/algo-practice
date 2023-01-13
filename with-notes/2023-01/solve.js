/*
* Date: 1.13.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript
* In My Own Words: 
  Given a list of integers, remove duplicates leaving the right-most duplicate.
* Test Conditions: 
  solve([3,4,4,3,6,3]),[4,6,3]);
  solve([1,2,1,2,1,2,3]),[1,2,3]);
  solve([1,2,3,4]),[1,2,3,4]);
  solve([1,1,4,5,1,2,1]),[4,5,2,1]);
  solve([1,2,1,2,1,1,3]),[2,1,3]);
* Pseudocode: 

* Notes After Attempt:

*/

function solve(arr) {
  const duplicates = []
  for (let i = arr.length-1; i >= 0; i--) {
    if (duplicates.includes(arr[i])) {
      arr.splice(i,1)
    } else {
      duplicates.push(arr[i])
    }
  }
  return arr
}

module.exports = solve