/*
* Date: 11.1.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript
* In My Own Words: 
    Given an array of integers, return the maximum product of two adjacent integers.
* Test Conditions: 
    adjacentElementsProduct([5, 8]), 40
    adjacentElementsProduct([1, 2, 3]), 6
    adjacentElementsProduct([1, 5, 10, 9]), 90
* Pseudocode: 

* Notes After Attempt:

*/

function adjacentElementsProduct(array) {
    let maxProduct = -Infinity
    for (let i = 0; i < array.length -1; i++) {
        if (array[i] * array[i+1] > maxProduct) maxProduct = array[i] * array[i+1]
    }
    return maxProduct
}

module.exports = adjacentElementsProduct