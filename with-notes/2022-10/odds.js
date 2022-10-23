/*
* Date: 10.23.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/559f80b87fa8512e3e0000f5/train/javascript
* In My Own Words: 
    Return odds from a list of integers.
* Test Conditions: 
    [1, 2, 3, 4, 5]  -->  [1, 3, 5]
    [2, 4, 6]        -->  []
* Pseudocode: 

* Notes After Attempt:

*/

function odds(values){
    return values.filter(num => num % 2 !== 0)
}

module.exports = odds