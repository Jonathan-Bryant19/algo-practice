/*
* Date: 7.12.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
* In My Own Words: 
    Given an array of strings and an integer, return the first instance of the longest consecutive concatenated string. The number of strings to concatenate is determined by the second integer argument.
* Test Conditions: 
    longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta"
    longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh"
    testing(longestConsec([], 3), ""
* Pseudocode: 
    1. Check / handle edge cases
    2. set variable to hold longest string concatenation
    3. Loop through the array
        a. Second loop that concats the next string index and decreases k (while k > 0)
        b. Check length of concatenation against current length
    4. Return longest
* Notes After Attempt:
    My solution was conceptually close but could have been optimized. The nested while loop is unnecessary and could have been avoided by creating temporary arrays based on the size of k. 
*/

function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k === 0) return 0
    let longest = ""
    let temp = ""
    for (let i = 0; i < strarr.length; i++) {
        let countdown = 0
        while (countdown < k) {
            temp = temp + strarr[i + countdown]
            countdown++
        }
        if (temp.length > longest.length) longest = temp
        temp = ""
    }
    return longest
}

console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))