/*
* Date: 9.10.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/
* In My Own Words: 
    Convert a string to a number of float accordingly.
* Test Conditions: 
    Input: s = "42"
    Output: 42
    Input: s = "   -42"
    Output: -42
    Input: s = "4193 with words"
    Output: 4193
* Pseudocode: 

* Notes After Attempt:

*/

var myAtoi = function(s) {
    let finalString = ""
    let sArray = s.split("")
    for (let index = 0; index < sArray.length; index++) {
        if (sArray[index] === "0" || sArray[index] === "1" || sArray[index] === "2" || sArray[index] === "3" || sArray[index] === "4" || sArray[index] === "5" || sArray[index] === "6" || sArray[index] === "7" || sArray[index] === "8" || sArray[index] === "9" || sArray[index] === "+" || sArray[index] === "-" || sArray[index] === ".") {
            finalString += sArray[index]
        }
    }
    return finalString
}

console.log(myAtoi("    -41.93 with words"))