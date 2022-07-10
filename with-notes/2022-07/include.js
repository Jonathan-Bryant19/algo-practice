/*
* Date: 7.10.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/545991b4cbae2a5fda000158/train/javascript
* In My Own Words: 
    Use includes() method
* Test Conditions: 
    include([1,2,3,4], 3), true 
    include([1,2,4,5], 3), false
* Pseudocode: 
    Use includes()
* Notes After Attempt:
    Simple one-liner.
*/

function include(arr, item){
    return arr.includes(item)
}

console.log(include([1,2,3,4], 5))