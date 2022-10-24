/*
* Date: 10.24.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
* In My Own Words: 
    Given to integers, find the sum of all multiples of the first integer up to, but not including, the second integer. 
* Test Conditions: 
    sumMul(0,0),"INVALID"
    sumMul(2,9),20
    sumMul(4,-7),"INVALID"
* Pseudocode: 

* Notes After Attempt:

*/

function sumMul(n,m){
    if (n >= m) return "INVALID"
    let sum = 0
    const multiple = n
    while (n < m) {
        sum += n
        n += multiple
    }
    return sum
}

module.exports = sumMul