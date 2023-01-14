/*
* Date: 1.14.23
* Rank: 7 Kyu
* Link: codewars.com/kata/580a4734d6df748060000045/train/javascript
* In My Own Words: 
  Given an array of integers, return a string commenting on whether the array contents are ascending, descending, or mixed.
* Test Conditions: 
  isSortedAndHow([1, 2]), "yes, ascending"
  isSortedAndHow([15, 7, 3, -8]), "yes, descending"
  isSortedAndHow([4, 2, 30]), "no"
* Pseudocode: 

* Notes After Attempt:

*/

function isSortedAndHow(array) {
  let sortStatus = ''
  array[0] < array[1] ? sortStatus = 'yes, ascending' : sortStatus = 'yes, descending'
  if (array.length === 2) return sortStatus
  for (let i = 1; i < array.length; i++) {
    let temp = ''
    array[i] < array[i+1] ? temp = 'yes, ascending' : temp = 'yes, descending'
    if (temp === sortStatus) {
      continue
    } else {
      return "no"
    }
  } 
  return sortStatus
}

module.exports = isSortedAndHow