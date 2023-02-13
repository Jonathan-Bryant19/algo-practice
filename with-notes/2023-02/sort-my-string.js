/*
* Date: 2.13.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript
* In My Own Words: 
  Given a string, return the string reorganized so that all even-indexed characters come first, then all odd-indexed characters. The two character sets should be separated by a space.
* Test Conditions: 
  input: 'CodeWars'
  output 'CdWr oeas'
* Pseudocode: 

* Notes After Attempt:

*/

function sortMyString(s) {
  let firstHalf = ''
  let secondHalf = ''
  for (let i = 0; i < s.length; i++) {
    i % 2 === 0 ? firstHalf += s[i] : secondHalf += s[i]
  }
  return firstHalf + " " + secondHalf
}

module.exports = sortMyString