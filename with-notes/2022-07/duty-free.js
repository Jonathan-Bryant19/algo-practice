/*
* Date: 7.9.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript
* In My Own Words: 
    You are given three integers. Multiply the first number by the second number (as a percentage). Return the third number divided by that result rounded down.
* Test Conditions: 
    dutyFree(12, 50, 1000), 166
    dutyFree(17, 10, 500), 294
    dutyFree(24, 35, 3000), 357
* Pseudocode: 
    return c / (a * (b/100)) rounded down
* Notes After Attempt:
    I got a little lazy by using a, b, and c. I need to remember semantics. 
*/

function dutyFree(a,b,c) {
    return Math.floor(c / (a * (b/100)))
}

console.log(dutyFree(24, 35, 3000))
