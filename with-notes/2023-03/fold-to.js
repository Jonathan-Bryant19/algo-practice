/*
* Date: 3.14.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/58f0ba42e89aa6158400000e/train/javascript
* In My Own Words: 
  Given a distance in meters as an integer and the width of 0.0001 meters as a starting point, calculate how many times you have to double the starting point before it equals or exceeds the given distance.
* Test Conditions: 
  foldTo(384000000),42
* Pseudocode: 

* Notes After Attempt:

*/

function foldTo(distance) {
  if (distance < 0) return null

  let count = 0
  let start = 0.0001
  
  while (start < distance) {
    start += start
    count++
  }

  return count

}

module.exports = foldTo