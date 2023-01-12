/*
* Date: 12.25.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
* In My Own Words: 
  Given a string, filter and return only numbers in that string.
* Test Conditions: 
  filterString("123"), 123
  filterString("a1b2c3"), 123
  filterString("aa1bb2cc3dd"), 123
* Pseudocode: 

* Notes After Attempt:

*/

var filterString = function(value) {
  const numberString = value.split('').filter(char => {
    return parseInt(char)
  })
  return parseInt(numberString.join(''))
}

module.exports = filterString