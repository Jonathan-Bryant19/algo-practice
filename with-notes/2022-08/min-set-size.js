/*
* Date: 8.17.22
* Rank: LeetCode (Medium)
* Link: https://leetcode.com/problems/reduce-array-size-to-the-half/
* In My Own Words: 
    Given an array, return the minimum number of numbers required that, if removed, would cut the array at least in half. 
* Test Conditions: 
    Input: arr = [3,3,3,3,5,5,5,2,2,7]
    Output: 2
    Input: arr = [7,7,7,7,7,7]
    Output: 1
* Pseudocode: 

* Notes After Attempt:

*/

var minSetSize = function(arr) {
    const minimum = Math.ceil(arr.length / 2)
    let hash = {}
    let counter = 0
    let digitsRemoved = 0
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = (hash[arr[i]] || 0) + 1
    }
    const freq = Object.values(hash)
    const sorted = freq.sort((a, b) => a - b)
    while (digitsRemoved < minimum) {
        digitsRemoved += sorted.pop()
        counter++
    }
    return counter
};

console.log(minSetSize([1,9]))