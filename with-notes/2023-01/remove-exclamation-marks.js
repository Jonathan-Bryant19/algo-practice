/*
* Date: 1.17.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
* In My Own Words: 
  Given a string, remove all exclamation marks and return the result. 
* Test Conditions: 
  "Hello World!", "Hello World"
  "!Hello !W!orld!", "Hello World"
* Pseudocode: 
  
* Notes After Attempt:
  Best practices may have been to use the replace method on the string input and use regex to search for the exclamation mark.
*/

function removeExclamationMarks(s) {
  let marksRemoved = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") {
      marksRemoved += s[i]
    }
  }
  return marksRemoved
}

module.exports = removeExclamationMarks