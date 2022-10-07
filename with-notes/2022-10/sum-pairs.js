/*
* Date: 10.7.22
* Rank: 5 Kyu
* Link: https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
* In My Own Words: 
    Given an array of numbers and an integer, return the two values that add up to the single integer. If more than one pair exists, return the pair whose second element has the lowest index (or return undefined).
* Test Conditions: 
    sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7]
    sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6]
* Pseudocode: 

* Notes After Attempt:
    My solution passes all tests but has a quadratic runtime. I could have created an object to reference numbers I've already seen.
*/

function sumPairs(arr, target){
    let answer = []
    let lastIndex = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                if (answer.length === 0) {
                    answer.push(arr[i])
                    answer.push(arr[j])
                    lastIndex = j
                } else {
                    if (j < lastIndex) {
                        answer[0] = arr[i]
                        answer[1] = arr[j]
                        lastIndex = j
                    }
                }
            }
        }
    }
    return answer.length === 0 ? undefined : answer
}

module.exports = sumPairs