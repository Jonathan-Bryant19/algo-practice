/*
* Date: 12.18.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript
* In My Own Words: 
  Given an array of elements and an integer, return the first n elements of the array.
* Test Conditions: 
  const arr = ['a', 'b', 'c', 'd', 'e'];
  first([...arr]   ),      ['a']);
  first([...arr], 2), ['a', 'b']);
* Pseudocode: 

* Notes After Attempt:

*/

function first(arr, n = 1) {
  return arr.slice(0, n)
}

module.exports = first