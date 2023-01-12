/*
* Date: 12.26.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/567bf4f7ee34510f69000032/train/javascript
* In My Own Words: 
  Using regex, return true or false based on whether or not the string is a digit.
* Test Conditions: 
  (''.digit(), false);
  ('7'.digit(), true);
  (' '.digit(), false);
  ('a'.digit(), false);
  ('a5'.digit(), false);
  ('14'.digit(), false);
* Pseudocode: 

* Notes After Attempt:

*/

String.prototype.digit = function() {
  const regex = /\d+/g
  const arr = this.match(regex)
  console.log('arr: ', arr)
};

module.exports = digit