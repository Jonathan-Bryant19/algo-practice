/*
* Date: 4.17.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript
* In My Own Words: 
  Given an array of integers, sort so that evens come first and odds come second. Even numbers should be ascending while odds should be descending.
* Test Conditions: 
  menFromBoys([7,3,14,17]), [14,17,7,3]
  menFromBoys([2,43,95,90,37]), [2,90,95,43,37]
  menFromBoys([20,33,50,34,43,46]), [20,34,46,50,43,33]
  menFromBoys([82,91,72,76,76,100,85]), [72,76,82,100,91,85]
  menFromBoys([2,15,17,15,2,10,10,17,1,1]), [2,10,17,15,1]
  menFromBoys([-32,-39,-35,-41]), [-32,-35,-39,-41]
  menFromBoys([-64,-71,-63,-66,-65]), [-66,-64,-63,-65,-71]
  menFromBoys([-94,-99,-100,-99,-96,-99]), [-100,-96,-94,-99]
* Pseudocode: 

* Notes After Attempt:

*/

function menFromBoys(arr){
  const evens = []
  const odds = []

  for (let i = 0; i < arr.length; i++) {
    if (evens.includes(arr[i]) || odds.includes(arr[i])) continue
    arr[i] % 2 === 0 ? evens.push(arr[i]) : odds.push(arr[i])
  }
  evens.sort((a, b) => a - b)
  odds.sort((a, b) => b - a)
  return evens.concat(odds)
}

module.exports = menFromBoys