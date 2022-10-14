/*
* Date: 10.14.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript
* In My Own Words: 
    Given a string, remove the vowels and return the highest consecutive consonant substring (if values of letters correspond to letter positions in the alphabet). 
* Test Conditions: 
    solve("zodiacs") = 26
* Pseudocode: 
    * Set values for alphabet
    * Set const varaible for vowels
    * Set let variable for highest
    * Set let variable for count
    * Loop through string
        * If character not a vowel, add character value to sum
        * If vowel, check for highest value and resest counter to 0
* Notes After Attempt:

*/

function solve(s) {
    const alpha = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    const vowels = ["a", "e", "i", "o", "u"]
    let highest = 0
    let count = 0
    const split = s.split("")
    for (let i = 0; i < split.length; i++) {
        if (vowels.includes(split[i])) {
            if (count > highest) highest = count
            count = 0
        } else {
            count += alpha[split[i]]
        }
    }
    if (count > highest) highest = count
    return highest
};

// console.log(solve("chruschtschov"))

module.exports = solve