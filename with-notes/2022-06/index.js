/*
* Date: 6.6.22
* Rank: 8 Kyu
    * Kyu: 8 Kyu (easiest) ==> 1 Kyu (hardest). Dan (master level): 1 Dan (easiest) ==> 8 Dan (hardest).
* Link: 
    https://www.codewars.com/kata/57d814e4950d8489720008db/train/javascript
* In My Own Words: 
    Given and input of an array of integers and a single, non-negative number, return the value of the integer index raised to the power of the integer. Return -1 if the index position does not exist. 
* Test Conditions: 
    index([1, 2, 3, 4],2),9
    index([1, 3, 10, 100],3),1000000
    index([1, 2],3),-1
* Pseudocode: 
    1. Check to see if the index exists, if not return -1
    2. Return the value of that index positon raised to the integer power. 
* Notes After Attempt:
    The Best Practices don't check for undefined and check to see if the arrary length is greater than n instead. 
*/

function index(array, n){
    return array[n] === undefined ? -1 : Math.pow(array[n], n)
}

console.log(index([1, 2],3))