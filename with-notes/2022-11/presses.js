/*
* Date: 11.27.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript
* In My Own Words: 
  Calculate the number of presses to produce a message based on the letter locations on a phone keypad.
* Test Conditions: 
  presses("LOL"), 9, "should work for simple examples"
  "HOW R U"), 13, "should work for phrases with spaces"
* Pseudocode: 

* Notes After Attempt:

*/

function presses(phrase) {
  const lowerCasePhraseArray = phrase.toLowerCase().split("")
  let count = 0
  const letterValues = {
    a: 1, b: 2, c: 3, d: 1, e: 2, f: 3, g: 1, h: 2, i: 3, j: 1, k: 2, l: 3, m: 1, n: 2, o: 3, p: 1, q: 2, r: 3, s: 4, t: 1, u: 2, v: 3, w: 1, x: 2, y: 3, z: 4, " ": 1, 1: 1, 2: 4, 3: 4, 4: 4, 5: 4, 6: 4, 7: 5, 8: 4, 9: 5, 0: 2
  }
  lowerCasePhraseArray.forEach(element => {
    count += letterValues[element]
  })
  return count
}

module.exports = presses