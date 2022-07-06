/*
* Date: 7.5.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
* In My Own Words: 
    Given an unsorted array of numbers and a target number, return the index positions of the two numbers that add up to the target 
* Test Conditions: 
    twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
    twoSum([4, 26, 19, 22, 5, 7], 26) // returns [2, 5]
* Pseudocode: 
    1. Loop through array
        a. Compare target minus numbers[i] and see if that number returns a value with numbers.indexOf(i)
            1. Continue if -1
            2. return [i, indexOf]
* Notes After Attempt:

*/

function twoSum(numbers, target) {
    let difference
    for (let i = 0; i < numbers.length; i++) {
        difference = target - numbers[i]
        if (numbers.indexOf(difference, i + 1) === -1) continue
        if (numbers.indexOf(difference, i + 1)) return [i, numbers.indexOf(difference, i + 1)]
    }
}

console.log(twoSum([4, 26, 19, 22, 5, 7], 26))