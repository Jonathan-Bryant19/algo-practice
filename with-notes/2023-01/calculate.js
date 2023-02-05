/*
* Date: 1.30.23
* Rank: LeetCode (Hard)
* Link: https://leetcode.com/problems/basic-calculator/
* In My Own Words: 
  Given a string consisting of digits, '+', '-', '(', ')', and ' ', create a function that returns the correct answer to the string expression. Using '-' to create negative numbers is valid and built in methods for evaluating the expression cannot be used. 
* Test Conditions: 
  Input: s = "1 + 1"
  Output: 2
  Input: s = " 2-1 + 2 "
  Output: 3
  Input: s = "(1+(4+5+2)-3 )+(6+8)"
  Output: 23
* Pseudocode: 
  * Think of it like a stack. Use an array
  * Start with [0, "+"]
  * If you see a "(", push a 0 and "+"
  * If you see a number, find the whole number and use the end of the array to decide how to update the end of the array -1.
  * If you see a "-", update the end of the array
  * If you see a "+", update the end of the array
  * If you see a ")", pop the array and use (array.length-1) -1 to determine the operater you need to combine (array.length-1) with (array.length-1) -2. Update (array.length-1) -2 and pop the array again.
* Notes After Attempt:

*/

function calculate(s) {
  const result = [0, "+"]
  const input = s.split("")
  
  // callback functions
  // find entire number
  const parseFullNumber = function(index) {
    let temp = input[index]
    index++
    while (parseInt(input[index]) || input[index] === "0") {
      temp += input[index]
      index++
    }
    return [parseInt(temp), index]
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      result.push(0, "+")
    } else if (parseInt(input[i])) {
      const numberInfo = parseFullNumber(i)
      if (result[result.length - 1] === "+") {
        result[result.length - 2] += numberInfo[0]
        i = numberInfo[1] - 1
      } else if (result[result.length - 1] === "-") {
        result[result.length -2] -= numberInfo[0]
        i = numberInfo[1] - 1
      }
    } else if (input[i] === ")") {
      result.pop()
      if (result[result.length - 2] === "+") {
        result[result.length - 3] += result[result.length - 1]
        result.pop()
      } else if (result[result.length - 2] === "-") {
        result[result.length - 3] -= result[result.length - 1]
        result.pop()
      }
    } else if (input[i] === "-") {
      result[result.length - 1] = "-"
    } else if (input[i] === "+") {
      result[result.length - 1] = "+"
    }
  }
  return result[0]
}

module.exports = calculate
// console.log(calculate("  30"))