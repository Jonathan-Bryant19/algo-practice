/*
* Date: 10.9.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/569e09850a8e371ab200000b/train/javascript
* In My Own Words: 
    Given an integer, return an array containing all numbers from 1 to the integer (inclusive). The number will be greater than or equal to 1.
* Test Conditions: 
    preFizz(1), [1],
    preFizz(3), [1,2,3]
* Pseudocode: 

* Notes After Attempt:

*/

function preFizz(n) {
    const answer = []
    for (let i = 1; i <= n; i++) {
        answer.push(i)
    }
    return answer
}

module.exports = preFizz