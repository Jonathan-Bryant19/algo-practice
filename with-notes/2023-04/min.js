/*
* Date: 4.20.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
* In My Own Words: 
  Write a function that returns the smallest element of an array and an optional return of the index position of that element.
* Test Conditions: 
  min([1,2,3,4,5], 'value'), 1
  min([1,2,3,4,5], 'index'), 0
* Pseudocode: 

* Notes After Attempt:

*/

function min(arr, toReturn) {
  let value = Infinity
  let index = -1
  arr.forEach((num, i) => {
    if (num < value) {
      value = num 
      index = i
    } 
  })
  if (toReturn === "value") {
    return value
  } else if (toReturn === "index") {
    return index
  } else {
    return "Please enter valid arguments."
  }
}

module.exports = min