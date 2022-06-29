/*
* Date: 6.29.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
* In My Own Words: 
    Given an array of numbers, return the sum of those numbers. If array is empty, return 0.
* Test Conditions: 
    Input: [1, 5.2, 4, 0, -1]
    Output: 9.2
    Input: []
    Output: 0
    Input: [-2.398]
    Output: -2.398
* Pseudocode: 
    Just loop through and add.
* Notes After Attempt:
    Ugh I could have just used reduce here. I'm writing another function for the practice.
*/

function sum (numbers) {
    let sum = 0
    numbers.forEach(num => sum = sum + num)    
    return sum
};

function sumReduce (numbers) {
    return numbers.reduce((a, b) => a + b)
}

console.log(sumReduce([1, 5.2, 4, 0, -1]))