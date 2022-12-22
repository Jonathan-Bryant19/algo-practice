/*
* Date: 12.21.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
* In My Own Words: 
  Given a string in camel case, return that string in kebab case. Only return lower case letters.
* Test Conditions: 
  kebabize('myCamelCasedString'), 'my-camel-cased-string');
  kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
* Pseudocode: 
  * Split string
  * Loop through string and look for uppercase letter. Concatenate an empty string with lowercase letters and add a hyphen before adding upper case letters (which are set to lowercase before concatenation).
* Notes After Attempt:

*/

function kebabize(str) {
  let kebab = ''
  const letterArray = str.split('')
  for (let i = 0; i < letterArray.length; i++) {
    if (parseInt(letterArray[i]) || letterArray[i] == 0) continue
    if (letterArray[i] === letterArray[i].toUpperCase() && kebab.length > 0) {
      kebab += '-' + letterArray[i].toLowerCase()
    } else {
      kebab += letterArray[i].toLowerCase()
    }
  }
  return kebab
}

module.exports = kebabize