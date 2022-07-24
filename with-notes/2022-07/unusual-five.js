/*
* Date: 7.24.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript
* In My Own Words: 
    Return the number 5 without using any numbers or arithmetic characters. 
* Test Conditions: 
    unusualFive(), 5
* Pseudocode: 
    Use new Number and increment
* Notes After Attempt:
    Using the Number constructor didn't work but counting an array length was much simpler. 
*/

function unusualFive() {
    const arr = ["one", "two", "three", "four", "five"]
    return arr.length
}

console.log(unusualFive())