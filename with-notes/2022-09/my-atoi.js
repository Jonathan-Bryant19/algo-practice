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
    const regex = /[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/
    return s.replace(regex, "")
    // for (let i = 0; i < sArray.length; i++) {
    //     if (sArray[i] === regex || sArray[i] === "+" || sArray[i] === "-" || sArray[i] === ".") {
    //         finalString += sArray[i]
    //     }
    // }
    // return finalString
}

console.log(myAtoi("    -41.93 with words"))