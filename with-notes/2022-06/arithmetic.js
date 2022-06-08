/*
* Date: 6.8.22
* Rank: 7 Kyu
    * Kyu: 8 Kyu (easiest) ==> 1 Kyu (hardest). Dan (master level): 1 Dan (easiest) ==> 8 Dan (hardest).
* Link: 
    https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript
* In My Own Words: 
    I'm given two non-negative integers and a string that identifies an arithmetic operator. Return the result of applying the operator to the two numbers.
* Test Conditions: 
    5, 2, "add"      --> 7
    5, 2, "subtract" --> 3
    5, 2, "multiply" --> 10
    5, 2, "divide"   --> 2.5
* Pseudocode: 
    1. Use a switch statement to return the result. 
* Notes After Attempt:
    My solution matched Best Practices. 
*/

function arithmetic(a, b, operator){
    switch (operator) {
        case "add" : 
            return a + b
        case "subtract" :
            return a - b
        case "multiply" :
            return a * b
        case "divide" :
            return a / b
        default :
            console.log("Invalid operator")
    }
}

console.log(arithmetic(5, 2, "divide"))