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
  Input: s = "(1+(4+5+2)-3)+(6+8)"
  Output: 23
* Pseudocode: 
  1. Declare variable to track result. 
  2. Split the string into an array.
  3. Iterate over array
    a. Every time you see a "(", open a new bank with a value of 0.
    b. Manipulate that bank accordingly until you see a ")"
    c. Once a bank closes, add it to the previous bank or the result if root.
      i. Maybe I can use an array for this. I can reference the bank value based on the index position. 
    d. If you see a "-", 
* Notes After Attempt:

*/

function calculate(s) {

}

module.exports = calculate