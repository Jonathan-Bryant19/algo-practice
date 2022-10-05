/*
* Date: 10.5.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
* In My Own Words: 
    Given two numbers that define a range (inclusive), return an array of sorted numbers in that range where the individual digits add up to the original number when each digit is raised to consecutive powers. 
* Test Conditions: 
    1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
    1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
* Pseudocode: 
    * Setup empty array
    * Loop through provided range
    * Push in numbers that qualify
* Notes After Attempt:

*/

function sumDigPow(a, b) {
    const answer = []
    for (let i = a; i <= b; i++) {
        // parse
        // check if length is 1 and push
        // loop through split array
        const numberArray = i.toString().split("")
        if (numberArray.length === 1) {
            answer.push(i)
        } else {
            let total = 0
            for (let i = 0; i < numberArray.length; i++) {
                total += Math.pow(numberArray[i], i + 1)
            }
            if (total === i) answer.push(i)
        }
    }
    return answer
}

console.log(sumDigPow(1, 100))