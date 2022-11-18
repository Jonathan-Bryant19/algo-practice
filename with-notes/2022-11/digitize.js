/*
* Date: 11.18.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
* In My Own Words: 
  Given an integer, return that integer split into an array of individual digits and reversed. 
* Test Conditions: 
  digitize(35231),[1,3,2,5,3]
  digitize(0),[0]
* Pseudocode: 

* Notes After Attempt:

*/

function digitize(n) {
  const numberStringArray = n.toString().split("")
  const answer = []
  numberStringArray.forEach(num => {
    answer.push(parseInt(num))
  })
  return answer.reverse()
}

module.exports = digitize