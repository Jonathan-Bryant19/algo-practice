/*
* Date: 7.8.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
* In My Own Words: 
    Given three integers, return true if the three integers could form a triangle if they represent the length of a line. 
* Test Conditions: 
    isTriangle(1,2,2) // true
    isTriange(7,2,2) // false
* Pseudocode: 
    1. Check that the sum of all three 1:1 comparisons are greater than the third
* Notes After Attempt:
    I had to lookup the Triangle Inequality Theorem but it makes sense. Very easy after that. 
*/

function isTriangle(a,b,c) {
    return (a + b > c && a + c > b && b + c > a)
}

console.log(isTriangle(7,2,2))