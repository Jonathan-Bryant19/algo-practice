/*
* Date: 8.8.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/javascript
* In My Own Words: 
    Given an integer, return the sume of all multiples of 3 and 5 up to that number.
* Test Conditions: 
    findSum(5), 8
    findSum(10), 33
* Pseudocode: 
    Loop through and use modulo to find multiples of 3 and 5.
* Notes After Attempt:

*/

function findSum(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i
    }
    return sum
}

console.log(findSum(10))