/*
* Date: 12.16.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/559f80b87fa8512e3e0000f5/train/javascript
* In My Own Words: 
  Given an array of numbers, return only odd numbers.
* Test Conditions: 
  odds([]), [], "Should handle empty array")
  (odds([2, 4, 6]), [], "Should handle array with even numbers only")
  (odds([1, 3, 5]), [1, 3, 5], "Should handle array with odd numbers only")
  (odds([1, 2, 3, 4, 5, 6]), [1, 3, 5], "Should handle mixed array")
* Pseudocode: 

* Notes After Attempt:

*/

function odds(values){
  return values.filter((num) => {
    return num % 2 !== 0
  });
}

module.exports = odds