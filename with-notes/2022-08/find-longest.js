/*
* Date: 8.10.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript
* In My Own Words: 
    Find the number in an array with the most digits.
* Test Conditions: 
    findLongest([1, 10, 100]), 100
    findLongest([9000, 8, 800]), 9000
    findLongest([8, 900, 500]), 900
* Pseudocode: 
    Convert to string and split to get length.
* Notes After Attempt:

*/

function findLongest(array){
    let longest = 0
    array.forEach(num => {
        if (num.toString().length > longest.toString().length) longest = num
    })
    return longest
}

console.log(findLongest([1, 10, 100]))