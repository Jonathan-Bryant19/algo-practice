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
    let maxTemp = 0
    let digitsRemoved = 0
    let hashValue = null
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = (hash[arr[i]] || 0) + 1
    }
    while (digitsRemoved <= minimum) {
        for (let val in hash) {
            if (hash[val] > maxTemp) {
                maxTemp = hash[val]
                hashValue = val
            }
        }
        digitsRemoved += hash[hashValue]
        if (digitsRemoved <= minimum) counter++
        hash[hashValue] = 0
        maxTemp = 0
    }
    return counter
};

console.log(minSetSize([[1,9]]))