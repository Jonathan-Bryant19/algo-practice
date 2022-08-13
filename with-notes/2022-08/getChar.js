/*
* Date: 8.13.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/55ad04714f0b468e8200001c/train/javascript
* In My Own Words: 
    Return the string associated with the ASCII code input. 
* Test Conditions: 
    getChar(55),'7'
    getChar(56),'8'
    getChar(57),'9'
* Pseudocode: 
    Use fromCharCode()
* Notes After Attempt:

*/

function getChar(c){
    return String.fromCharCode(c)
}

console.log(getChar(55))