/*
* Date: 8.17.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript
* In My Own Words: 
    First the largest in sequence pair in an array.
* Test Conditions: 
    [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
    [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
* Pseudocode: 
    Loop and check current and current + 1
* Notes After Attempt:

*/

function largestPairSum (numbers) {
    const sorted = numbers.sort((a, b) => b - a)
    return sorted[0] + sorted[1]
}

console.log(largestPairSum([99, 2, 2, 23, 19]))