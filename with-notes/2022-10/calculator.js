/*
* Date: 10.22.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript
* In My Own Words: 
    Create functions that perform basic calculator operations.
* Test Conditions: 
    add(1,2),3
    divide(2,1),2
* Pseudocode: 

* Notes After Attempt:

*/

function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}
   
function exponent(a,b){
    return Math.pow(a, b)
}
    
function subt(a,b){
    return a - b
}

module.exports = {add, divide, multiply, mod, exponent, subt}