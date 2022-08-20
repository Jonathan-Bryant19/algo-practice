/*
* Date: 8.19.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
* In My Own Words: 
    Given an array of numbers, return an array filled with odd numbers and an array filled with evens. 
* Test Conditions: 
 
* Pseudocode: 

* Notes After Attempt:

*/

function pickIt(arr){
    var odd=[],even=[];
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i])
    }
    return [odd,even];
}