/*
* Date: 10.10.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript
* In My Own Words: 
    Given a string, return the string with the case switched for each letter. 
* Test Conditions: 
    "hello world".toAlternatingCase() === "HELLO WORLD"
    "HELLO WORLD".toAlternatingCase() === "hello world"
    "hello WORLD".toAlternatingCase() === "HELLO world"
* Pseudocode: 

* Notes After Attempt:

*/

function toAlternatingCase(str) {
    const split = str.split("")
    for (let i = 0; i < str.length; i++) {
        if (split[i].toLowerCase() === split[i]) {
            split[i] = split[i].toUpperCase()
        } else {
            split[i] = split[i].toLowerCase()
        }
    }
    return split.join("")
}

module.exports = toAlternatingCase
