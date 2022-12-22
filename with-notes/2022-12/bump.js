/*
* Date: 12.22.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript
* In My Own Words: 
  Given a string, return a specific string based on the number of "n" characters in the provided string.
* Test Conditions: 
  bump("n"), "Woohoo!");
  bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
  bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
  bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
  bump("______n___n_"), "Woohoo!");
* Pseudocode: 

* Notes After Attempt:

*/

function bump(x){
  const stringArray = x.split('')
  let totalBumps = 0
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === 'n') totalBumps++
  }
  if (totalBumps <= 15) {
    return "Woohoo!"
  } else {
    return "Car Dead"
  }
}

module.exports = bump