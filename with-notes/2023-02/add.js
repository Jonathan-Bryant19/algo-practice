/*
* Date: 2.9.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57f6ecdfcca6e045d2001207/train/javascript
* In My Own Words: 
  Given a number and a string, return a boolean based on whether the two values are loosely equal.
* Test Conditions: 
  add('1', 1), true
  add(1, '1'), true
  add(1, '0'), false
  add('11', 11), true
  add(12, 12), true
  add(120, '021'), false
* Pseudocode: 

* Notes After Attempt:

*/

function add(a, b){
	return a == b
}

module.exports = add