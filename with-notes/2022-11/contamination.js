/*
* Date: 12.1.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/596fba44963025c878000039/train/javascript
* In My Own Words: 
  Given two strings, replace the first string's characters with the second string.
* Test Conditions: 
  contamination("abc","z"), "zzz")
  contamination("","z"), "")
  contamination("abc",""), "")
  contamination("_3ebzgh4","&"), "&&&&&&&&")
  contamination("//case"," "), "      ")
* Pseudocode: 

* Notes After Attempt:

*/

function contamination(text, char){
  if (text === "" || char === "") return ""
  let newString = ""
  for (let i = 0; i < text.length; i++) {
    newString += char
  }
  return newString
}

module.exports = contamination