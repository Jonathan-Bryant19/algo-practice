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
  const resultStack = [0, "+"]
  const input = s.split("")
  const currentOperatorIndex = function() { return resultStack.length - 1 }
  const currentValueIndex = function() { return resultStack.length - 2 }
  const previousOperatorIndex = function() { return resultStack.length - 3 }
  const previousValueIndex = function() { return resultStack.length - 4 }
  
  // Starting at a given index, loop through the input array and collect the full number.
  const parseFullNumber = function(index) {
    let temp = input[index]
    index++
    while (parseInt(input[index]) || input[index] === "0") {
      temp += input[index]
      index++
    }
    return [parseInt(temp), index]
  }

  // Loop through the input array and handle each individual character.
  for (let i = 0; i < input.length; i++) {
    // If there is an opening parentheses, add a zero and "+" to the stack to begin tracking the value of items within this set of parentheses.
    if (input[i] === "(") {
      resultStack.push(0, "+")
      // If the current character is a number, use the parseFullNumber callback function to determine what the full number is.
    } else if (parseInt(input[i])) {
      const numberInfo = parseFullNumber(i)
      // Check the stack to determine which operator to use to handle the number and update the stack value accordingly.
      if (resultStack[currentOperatorIndex()] === "+") {
        resultStack[currentValueIndex()] += numberInfo[0]
        i = numberInfo[1] - 1
      } else if (resultStack[currentOperatorIndex()] === "-") {
        resultStack[currentValueIndex()] -= numberInfo[0]
        i = numberInfo[1] - 1
      }
      // If there is a closing parentheses, drop the last operater from the stack and check the new value of the last operator. Use that to update the last value in the stack.
    } else if (input[i] === ")") {
      if (resultStack[previousOperatorIndex()] === "+") {
        resultStack[previousValueIndex()] += resultStack[currentValueIndex()]
        resultStack.splice(currentValueIndex(), 2)
      } else if (resultStack[previousOperatorIndex()] === "-") {
        resultStack[previousValueIndex()] -= resultStack[currentValueIndex()]
        resultStack.splice(currentValueIndex(), 2)
      }
      // If there is an operator, update the last element of the stack to match that operator. 
    } else if (input[i] === "-") {
      resultStack[currentOperatorIndex()] = "-"
    } else if (input[i] === "+") {
      resultStack[currentOperatorIndex()] = "+"
    }
  }

  // Return the first element of the result stack, which holds the final value.
  return resultStack[0]
}

// module.exports = calculate
console.log(calculate("-(3 + 2)"))