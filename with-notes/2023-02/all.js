/*
* Date: 2.18.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/54598d1fcbae2ae05200112c/train/javascript
* In My Own Words: 
  Given an array and a function, test the function against the array and return a boolean based on whether or not all elements of the array pass the function test. 
* Test Conditions: 
  all([1,2,3,4,5], function(v){return v<9}), true
  all([1,2,3,4,5], function(v){return v>9}), false
* Pseudocode: 

* Notes After Attempt:

*/

function all( arr, fun ){
  for (let i = 0; i < arr.length; i++) {
    if (!fun(arr[i])) {
      return false
    }
  }
  return true
}

// console.log(all([1, 2, 3, 4, 5]))
module.exports = all