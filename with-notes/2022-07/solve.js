/*
* Date: 7.4.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
* In My Own Words: 
    Given a string, return the string as either all uppercase or all lowercase based on which move results in the fewest number of changes.
* Test Conditions: 
    solve("coDe") = "code"
    solve("CODe") = "CODE"
    solve("coDE") = "code"
* Pseudocode: 
    1. Set variable to count lowercase
* Notes After Attempt:
    Best practices either counted both upper and lower (not necessary) or used regex (I really need to learn that.)
*/

function solve(s){
    let lowerCount = 0
    const half = Math.floor(s.length / 2)
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) lowerCount++
    }
    return lowerCount >= half ? s.toLowerCase() : s.toUpperCase()
}

console.log(solve("COde"))