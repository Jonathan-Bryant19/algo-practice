/*
* Date: 7.30.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript
* In My Own Words: 
    Return the values of all even values in an array.
* Test Conditions: 
    noOdds( [0,1] ), [0]
    noOdds( [0,1,2,3] ), [0,2]
* Pseudocode: 
    Use filter.
* Notes After Attempt:

*/

function noOdds( values ){
    return values.filter(num => num % 2 === 0)
}

console.log(noOdds([0,1,2,3]))