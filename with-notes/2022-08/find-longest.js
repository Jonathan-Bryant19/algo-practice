/*
* Date: 8.5.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript
* In My Own Words: 
    Given an array of integers, return the longest integer.
* Test Conditions: 
    findLongest([1, 10, 100]), 100
    findLongest([9000, 8, 800]), 9000
    findLongest([8, 900, 500]), 900
* Pseudocode: 
    Convert to string and check length. 
* Notes After Attempt:

*/

function findLongest(array){
    let temp = 0
    let answer = null
    for (let num of array) {
        if (num.toString().length > temp) {
            temp = num.toString().length
            answer = num
        }
    }
    return answer    
}

console.log(findLongest([9000, 8, 800]))