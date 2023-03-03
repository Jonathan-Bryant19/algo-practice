/*
* Date: 3.2.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5713bc89c82eff33c60009f7/train/javascript
* In My Own Words: 
  Given a string, return each work for the string with the word "sex". This was not my idea.
* Test Conditions: 
  toFreud(""), ""
  toFreud("test"), "sex"
  toFreud("This is a test"), "sex sex sex sex"
  toFreud("This is a longer test"), "sex sex sex sex sex"
  toFreud("You're becoming a true freudian expert"), "sex sex sex sex sex sex"
* Pseudocode: 

* Notes After Attempt:

*/

function toFreud(string) {
  const numberOfWords = string.split(" ").length
  let freudsResponse = ""
  if (string === "") return ""
  for (let i = 0; i < numberOfWords; i++) {
    if (i === numberOfWords - 1) {
      freudsResponse += "sex"
    } else {
      freudsResponse += "sex "
    }
  }
  return freudsResponse
}

module.exports = toFreud