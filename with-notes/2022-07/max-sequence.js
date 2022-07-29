/*
* Date: 7.29.22
* Rank: 5 Kyu
* Link: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
* In My Own Words: 
    Return the sum of the greatest subset of integers in an array.
* Test Conditions: 
    maxSequence([]), 0
    maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6
* Pseudocode: 
    * If the array is empty return 0
    * If the array has only negative numbers return 0
    * Set sum variable equal to 0
    * Loop starting at the first positive number
        * Add i to sum
        * If sum is negative, reset sum to 0 and find next positive number.
    * Return sum
* Notes After Attempt:
    This one was more challenging but I think my runtime could be improved by avoiding findIndex(). I think I'm short circuiting by updating i as oppose to running through everything, but I'm not sure how to conceptualize a worst case scenario. If findIndex() doesn't find a positive number then it will loop through the rest of the array and return the sum. I don't think this results in a nested loop for a runtime of O(n^2).
*/

var maxSequence = function(arr){
    if (arr[0] === undefined) return 0
    if (Math.max(...arr) <= 0) return 0
    let sum = 0
    let maxSum = 0
    let firstPositive = arr.findIndex(num => num > 0)
    let tempIndex = null
    for (let i = firstPositive; i < arr.length; i++) {
        sum += arr[i]
        if (sum > maxSum) maxSum = sum
        if (sum <= 0) {
            sum = 0
            tempIndex = firstPositive
            firstPositive = arr.findIndex((num, index) => num > 0 && index > tempIndex)
            i = firstPositive -1
        }
    }
    return maxSum
}

console.log(maxSequence([15, 12]))