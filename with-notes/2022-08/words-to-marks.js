/*
* Date: 8.21.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript
* In My Own Words: 
    Return the sum of a string if a = 1, b = 2, etc.
* Test Conditions: 
    wordsToMarks("attitude"), 100
    wordsToMarks("friends"), 75
* Pseudocode: 

* Notes After Attempt:

*/

function wordsToMarks(string){
    let sum = 0
    for (let i = 0; i < string.length; i++) {
        sum += (string.charCodeAt(i) - 96)
    }
    return sum
}

console.log(wordsToMarks("attitude"))