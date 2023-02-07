/*
* Date: 2.6.23
* Rank: LeetCode (Medium)
* Link: https://leetcode.com/problems/string-to-integer-atoi/
* In My Own Words: 
  Given a string, iterate through the string and return 0 unless the first character is a digit, "+", or "-". Leading whitespace is ignored and the whole number is to be returned without leading whitespace or invalid trailing characters. The final number must be capped to fit in a 32-bit signed integer.
* Test Conditions: 
  Input: s = "42"
  Output: 42
  Input: s = "   -42"
  Output: -42
  Input: s = "4193 with words"
  Output: 4193
  Input: s = "words and 987"
  Output: 0
* Pseudocode: 

* Notes After Attempt:

*/

function myAtoi(s) {
  s = s.trimStart()
  const sArray = s.split("")
  let numberString = ""
  const upperLimit = Math.pow(2, 31) - 1
  const lowerLimit = Math.pow(2, 31) * (-1)
  let finalNumber = 0

  if (sArray[0] === "+" || sArray[0] === "-") {
    numberString += sArray[0] 
  }

  for (let i = numberString.length; i < sArray.length; i++) {
    if (parseInt(sArray[i]) || sArray[i] === "0" || sArray[i] === ".") {
      numberString += sArray[i]
    } else {
      break
    }
  }
  
  if (numberString.length === 0 || numberString === "+" || numberString === "-") {
    return 0
  } else {    
    if (numberString[0] === "+") {
      finalNumber = parseFloat(numberString.slice(1))
    } else {
      finalNumber = parseFloat(numberString)
    }
  }
  
  if (finalNumber > upperLimit) {
    return upperLimit
  } else if (finalNumber < lowerLimit) {
    return lowerLimit
  } else {
    return finalNumber
  }

}

module.exports = myAtoi