/*
* Date: 1.12.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript
* In My Own Words: 
  Alternate the case of each letter of a string (i.e., upper to lower and lower to upper).
* Test Conditions: 
  alternateCase("abc"), "ABC");
  alternateCase("ABC"), "abc");
  alternateCase("Hello World"), "hELLO wORLD"); 
* Pseudocode: 

* Notes After Attempt:

*/

function alternateCase(s) {
  let caseSwitch = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (caseSwitch[i] === caseSwitch[i].toUpperCase()) {
      caseSwitch[i] = caseSwitch[i].toLowerCase()
    } else if (caseSwitch[i] === caseSwitch[i].toLowerCase()) {
      caseSwitch[i] = caseSwitch[i].toUpperCase()
    }
  }
  return caseSwitch.join('')
}

module.exports = alternateCase