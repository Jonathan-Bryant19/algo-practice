/*
* Date: 7.16.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
* In My Own Words: 
    When provided with a letter, return it's position in the alphabet.
* Test Conditions: 
    position("a"),"Position of alphabet: 1"
    position("z"),"Position of alphabet: 26"
    position("e"),"Position of alphabet: 5"
* Pseudocode: 
    1. Create a lookup array.
    2. 
* Notes After Attempt:

*/

function position(letter){
    const alphabet = " abcdefghijklmnopqrstuvwxyz"
    return `Position of alphabet: ${alphabet.indexOf(letter)}`
}

console.log(position("z"))