/*
* Date: 6.30.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
* In My Own Words: 
    Given an array of numbers, find the unique number and return it. 
* Test Conditions: 
    findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
    findUniq([ 2, 1, 1, 1, 1, 1 ]) === 2
    findUniq([ 1, 2, 1, 1, 1, 1 ]) === 2
* Pseudocode: 
    1. Start at index 1 and check against previous index as you loop. 
    2. Return when check is not equal.
* Notes After Attempt:
    The Best Practices solution used sort and a ternary to pull from the beginning or end of the array. That's clever, but the sort guarantees a linear runtime where my solution short circuits.
*/

function findUniq(arr) {
    let answer
    let i = 1
    while (!answer) {
        if (arr[i] === arr[i -1]) {
            i++
        } else if (arr[i] !== arr[i - 1]) {
            if (arr[i] === arr[i + 1]) return arr[i -1]
            if (arr[i] !== arr[i + 1]) return arr[i]
        }           
    }
}

console.log(findUniq([ 1, 2, 1, 1, 1, 1 ]))