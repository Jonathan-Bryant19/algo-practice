/*
* Date: 1.21.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript
* In My Own Words: 
  Given an array of numbers, look at each pair of numbers and add the total number of pairs that are consecutive. Only look at each number once.
* Test Conditions: 
  pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]),2
  pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]),0
  pairs([-55, -56, -7, -6, 56, 55, 63, 62]),4
  pairs([73, 72, 8, 9, 73, 72]),3
* Pseudocode: 

* Notes After Attempt:
  Math.abs() could have saved a little code. 
*/

function pairs(ar){
  let sum = 0
  for (let i = 0; i < ar.length; i += 2) {
    if (ar[i] + 1 === ar[i + 1] || ar[i] - 1 === ar[i + 1]) {
      sum++
    }
  }
  return sum
}

module.exports = pairs