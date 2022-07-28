/*
* Date: 7.28.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
* In My Own Words: 
    Return the third angel of a triangle after being given the first two angels. 
* Test Conditions: 
    otherAngle(30, 60), 90
* Pseudocode: 
    Return 180 minus the sum of the input. 
* Notes After Attempt:
    Very easy.
*/

function otherAngle(a, b) {
    return 180 - (a + b)
}

console.log(otherAngle(30, 60))