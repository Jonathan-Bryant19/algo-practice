/*
* Date: 7.28.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
* In My Own Words: 
    Return true if the input string is all capital letters.
* Test Conditions: 
    'hello I AM DONALD'.isUpperCase(), false
    'HELLO I AM DONALD'.isUpperCase(), true
* Pseudocode: 
    Split the string into individual characters. 
    Loop through and check if char === char.toUpperCase()
* Notes After Attempt:
    Using the prototype syntax threw me at first, but I just need to remember it works like an instance of an object.
*/

String.prototype.isUpperCase = function() {
    const arr = this.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i].toUpperCase()) return false
    }
    return true    
}

console.log('HELLO I AM DONALD'.isUpperCase())