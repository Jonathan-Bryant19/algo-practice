/*
* Date: 4.16.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57faece99610ced690000165/train/javascript
* In My Own Words: 
  Given a string, remove all of the exlamation points at the end of the sentence.
* Test Conditions: 
  "Hi!", "Hi"
	"Hi!!!", "Hi"
	"!Hi", "!Hi"
	"!Hi!", "!Hi"
	"Hi! Hi!", "Hi! Hi"
	"Hi", "Hi"
* Pseudocode: 

* Notes After Attempt:

*/

function remove (string) {  
  const stringArray = string.split("")
  let i = stringArray.length - 1
  
  while (stringArray[i] === "!") {
    stringArray.splice(i)
    i--
  }
  return stringArray.join("")
}

module.exports = remove