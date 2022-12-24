/*
* Date: 12.24.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript
* In My Own Words: 
  Reverse an array without using the built-in method.
* Test Conditions: 
  reverse([1,2,3]), [3,2,1] )
  reverse([1,null,14,"two"]), ["two",14,null,1] )
* Pseudocode: 

* Notes After Attempt:

*/

reverse = function(array) {
  const rev = []
  while (array.length > 0) {
    rev.push(array.splice(array.length-1))
  }
  return rev.flat()
}

module.exports = reverse