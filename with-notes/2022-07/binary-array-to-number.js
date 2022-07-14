/*
* Date: 7.14.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
* In My Own Words: 
    Given an array of integers representing binary, convert to a number.
* Test Conditions: 
    binaryArrayToNumber([0,0,0,1]), 1
    binaryArrayToNumber([0,0,1,0]), 2
    binaryArrayToNumber([1,1,1,1]), 15
    binaryArrayToNumber([0,1,1,0]), 6
* Pseudocode: 
    1. Set counter variable
    2. Loop through array
        a. Multiply current counter by 2 and add current array value. 
    3. Return counter
* Notes After Attempt:
    Apparently use can use parseInt and pass in the joined array. You can pass in 2 as a second argument to parse the integer as base 2. 
*/

const binaryArrayToNumber = arr => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total = (total * 2) + arr[i]
    }
    return total
}

console.log(binaryArrayToNumber([0,1,1,0])) // 15