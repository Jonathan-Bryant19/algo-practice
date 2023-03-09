/*
* Date: 3.9.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript
* In My Own Words: 
  Given an even array of positive integers, return the minimum sum of the product of each two integers. 
* Test Conditions: 
  minSum([5,4,2,3]), 22
  minSum([12,6,10,26,3,24]), 342
  minSum([9,2,8,7,5,4,0,6]), 74
* Pseudocode: 

* Notes After Attempt:

*/

function minSum(arr) {
  const sortedArr = arr.sort((a, b) => {
    return a - b
  })
  let start = 0
  let end = sortedArr.length - 1
  let sum = 0

  while (start < end) {
    sum += (sortedArr[start] * sortedArr[end])
    start++
    end--
  }

  return sum

}

module.exports = minSum