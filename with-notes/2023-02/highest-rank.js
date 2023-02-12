/*
* Date: 2.12.23
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript
* In My Own Words: 
  Given an array of numbers, return the occurs most frequently. If more than one number has the same frequency, return the largest number.
* Test Conditions: 
  [12, 10, 8, 12, 7, 6, 4, 10, 12] --> 12
  [12, 10, 8, 12, 7, 6, 4, 10, 12, 10] --> 12
  [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10] --> 3
* Pseudocode: 
  Create an empty array check the value of each index position. If empty, make it one. If not empty, increase the value by one. Return the max value of that array. 
* Notes After Attempt:

*/

function highestRank(arr){
  const frequencyArray = new Array()
  arr.forEach(num => {
    if (frequencyArray[num]) {
      frequencyArray[num]++
    } else {
      frequencyArray[num] = 1
    }
  })
  let max = [null, null]
  for (let i = 0; i < frequencyArray.length; i++) {
    if (frequencyArray[i] >= max[1]) {
      max[0] = i
      max[1] = frequencyArray[i]
    }
  }
  return max[0]
} 

module.exports = highestRank
// console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))