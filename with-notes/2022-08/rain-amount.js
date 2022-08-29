/*
* Date: 8.28.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript
* In My Own Words: 
    Given two numbers, subtract and return the first number minus the second. No negative answers. 
* Test Conditions: 
    combat(100, 5), 95
    combat(92, 8), 84
    combat(20, 30), 0
* Pseudocode: 

* Notes After Attempt:

*/

function combat(health, damage) {
    return health - damage < 0 ? 0 : health - damage
}

console.log(combat(20, 30))