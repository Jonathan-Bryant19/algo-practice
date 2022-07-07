/*
* Date: 7.7.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript
* In My Own Words: 
    Given an integer, return the next multiple of 5 from that integer (rounded up). An input of 0 returns 0.
* Test Conditions: 
    0    ->   0
    2    ->   5
    3    ->   5
    12   ->   15
    30   ->   30
    -2   ->   0
    -5   ->   -5
* Pseudocode: 
    1. Divide by five, round up, multiply by 5
* Notes After Attempt:
    My solution matched best practices.
*/

function roundToNext5(n){
    return Math.ceil(n/5) * 5
}

console.log(roundToNext5(-12))