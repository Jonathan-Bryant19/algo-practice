/*
* Date: 6.24.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript
* In My Own Words: 
    Given an age as an integer, return what a person that age drinks. Rules are: Children ("drink toddy") < 14, Teens ("drink coke") < 18, Young ("drink beer") < 21, Adults ("drink whisky") >= 21
* Test Conditions: 
    13 --> "drink toddy"
    17 --> "drink coke"
    18 --> "drink beer"
    20 --> "drink beer"
    30 --> "drink whisky"
* Pseudocode: 
    Use switch.
* Notes After Attempt:
    Switch uses the strict equality operator to check against a value. I don't think I can use an expression with a switch statement case. 
*/

function peopleWithAgeDrink(old) {
    if (old < 14) return "drink toddy"
    if (old < 18) return "drink coke"
    if (old < 21) return "drink beer"
    if (old >= 21) return "drink whisky"
};

console.log(peopleWithAgeDrink(20))