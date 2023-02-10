/*
* Date: 2.10.23
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript
* In My Own Words: 
  Given a string, switch the second and last letters and replace the first letter with its character code. 
* Test Conditions: 
  decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do')
  decipherThis('72olle 103doo 100ya'); // 'Hello good day'
  decipherThis('82yade 115te 103o'); // 'Ready set go'
* Pseudocode: 

* Notes After Attempt:

*/

function decipherThis(str) {
  const words = str.split(" ")
  const answer = words.map(word => {
    const wordLetters = word.split("")
    let firstLetterCode = ""
    let i = 0
    while (parseInt(wordLetters[i]) || wordLetters[i] === "0") {
      firstLetterCode += wordLetters[i]
      i++
    }
    const firstLetter = String.fromCharCode(firstLetterCode)
    let temp = wordLetters[i]
    wordLetters[i] = wordLetters[wordLetters.length - 1]
    wordLetters[wordLetters.length - 1] = temp
    const wordSuffix = wordLetters.slice(i).join("")
    return word = firstLetter + wordSuffix
  })
  return answer.join(" ")
}

module.exports = decipherThis