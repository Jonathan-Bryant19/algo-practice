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
  // Get rid of any leading white space, create array for iteration, and declare variables.
  s = s.trimStart()
  const sArray = s.split("")
  let numberString = ""
  const upperLimit = Math.pow(2, 31) - 1
  const lowerLimit = Math.pow(2, 31) * (-1)
  let finalNumber = 0

  // Append the numberString with an operator if present.
  if (sArray[0] === "+" || sArray[0] === "-") {
    numberString += sArray[0] 
  }

  // As long as there is a number or decimal point at the current index, continue iterating through the array and appending the numberString with each value.
  for (let i = numberString.length; i < sArray.length; i++) {
    if (parseInt(sArray[i]) || sArray[i] === "0" || sArray[i] === ".") {
      numberString += sArray[i]
    } else {
      break
    }
  }
  
  // Evaluate the result of the numberString variable. Return 0 if it is empty or only contains an operator. Otherwise, parse the value of the number from the numberString variable. 
  if (numberString.length === 0 || numberString === "+" || numberString === "-") {
    return 0
  } else {
    numberString[0] === "+" ? finalNumber = parseFloat(numberString.slice(1)) : finalNumber = parseFloat(numberString)
  }
  
  // Check to be sure the finalNumber is within the limits of a 32-bit signed integer and return the appropriate value.
  if (finalNumber > upperLimit) {
    return upperLimit
  } else if (finalNumber < lowerLimit) {
    return lowerLimit
  } else {
    return finalNumber
  }

}

module.exports = myAtoi