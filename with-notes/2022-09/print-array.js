/*
* Date: 9.12.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript
* In My Own Words: 
    Given an array, return a single string with each element of the array joined by a comma.
* Test Conditions: 
    ["h","o","l","a"]
    "hola"
    [1,2,3,4]
    "1,2,3,4"
* Pseudocode: 

* Notes After Attempt:

*/

function printArray(array){
    return array.join(",")
} 

console.log(printArray(["h","o","l","a"]))