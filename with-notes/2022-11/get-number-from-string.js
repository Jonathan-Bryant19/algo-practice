/*
* Date: 11.19.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57a37f3cbb99449513000cd8/train/javascript
* In My Own Words: 
  Given a string, remove all letters and return numbers as a single number.
* Test Conditions: 
  getNumberFromString("1"), 1
  getNumberFromString("123"), 123
  getNumberFromString("this is number: 7"), 7
* Pseudocode: 

* Notes After Attempt:
  Looks like I could have just run this: return +s.replace(/\D/g, ""); I'm not sure what the + is doing here and I'm not sure how the string is being converted into an integer. I'll have to look into this. 
*/

function getNumberFromString(s) {
  const regex = new RegExp(/\d/g)
  const found = s.match(regex)
  console.log(found)
  const join = found.join("")
  return parseInt(join)
}

module.exports = getNumberFromString