/*
* Date: 10.1.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript
* In My Own Words: 
    Multiply two numbers but return 0 if either number is negative. 
* Test Conditions: 
    n= 5, m=5: 25
    n=-5, m=5:  0
* Pseudocode: 

* Notes After Attempt:

*/

function paperwork(n, m) {
    return (n < 0 || m < 0) ? 0 : n * m
}

console.log(paperwork(-5, 5))