/*
* Date: 10.2.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript
* In My Own Words: 
    Write a bunch of different array methods.
* Test Conditions: 
 
* Pseudocode: 

* Notes After Attempt:

*/

function getLength(arr){
    //return length of arr
    return arr.length
}
function getFirst(arr){
    //return the first element of arr
    return arr.slice(0,1)
}
function getLast(arr){
    //return the last element of arr
    return arr.slice(arr.length - 1, arr.length)
}
function pushElement(arr){
    var el=1;
    //push el to arr
    arr.push(el)
    return arr
}
function popElement(arr){
    //pop an element from arr
    arr.splice(arr.length - 1, arr.length)
    return arr
}