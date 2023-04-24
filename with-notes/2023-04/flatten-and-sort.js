/*
* Date: 4.24.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript
* In My Own Words: 
  Given a two-dimensional array of integers, flatten the array and sort it's contents in ascending order.
* Test Conditions: 
  flattenAndSort([]), []
  flattenAndSort([[], []]), []
  flattenAndSort([[], [1]]), [1]
  flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]
  flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]
* Pseudocode: 

* Notes After Attempt:

*/

function flattenAndSort(array) {
  let flat = array.flat()
  return flat.sort((a, b) => a - b)
}

module.exports = flattenAndSort