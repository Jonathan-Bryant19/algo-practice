/*
* Date: 9.29.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript
* In My Own Words: 
    Given an array of numbers, convert any numbers that are the equivalent to a lower case vowel in character code. 
* Test Conditions: 
    isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106])
    isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103])
* Pseudocode: 

* Notes After Attempt:

*/

function isVow(a) {
    const vowels = [97, 101, 105, 111, 117]
    for (let i = 0; i < a.length; i++) {
        if (vowels.includes(a[i])) {
            a[i] = String.fromCharCode(a[i])
        }
    }
    return a
}

console.log(isVow[118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])