/*
* Date: 8.30.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/
* In My Own Words: 
    Given an integer, return the integer with numbers in reverse order. Keep sign but drop leading 0's.
* Test Conditions: 
    Input: x = 123
    Output: 321
    Input: x = -123
    Output: -321
    Input: x = 120
    Output: 21
* Pseudocode: 
    Parse string and split. Check for and delete trailing 0's. Reverse, join, parseInt and return.
* Notes After Attempt:
    I had to look up the constraints of a signed integer but they were provided. Handling the sign could have been done more efficiently and made for code that's easier to read. 
*/

var reverse = function(x) {
    if (x === 0) return 0
    const stringArr = x.toString().split("")
    while (stringArr[stringArr.length - 1] === "0") {
        stringArr.splice(stringArr.length - 1)
    }
    answer = x < 1 ? -parseInt(stringArr.reverse().join("")) : parseInt(stringArr.reverse().join(""))
    return (Math.pow(-2,31) <= answer && answer <= Math.pow(2,31) -1) ? answer : 0
};

console.log(reverse(-123))