/*
* Date: 9.14.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
* In My Own Words: 
    Given a number and a digit, square all number between 0 and the number and could how many times the digit appears. 
* Test Conditions: 
    n = 10, d = 1 
    the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
    We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
* Pseudocode: 
    Square, toString, split, push, count
* Notes After Attempt:

*/

function nbDig (n, d) {
    let count = 0
    for (let i = 0; i <= n; i++) {
        const square = Math.pow(i, 2)
        const string = square.toString().split("")
        string.forEach(num => {
            if (num == d) count++
        })
    }
    return count
}

console.log(nbDig(25, 1))