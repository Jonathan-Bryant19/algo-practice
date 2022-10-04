/*
* Date: 10.4.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript
* In My Own Words: 
    Given an array, return only even numbers.
* Test Conditions: 
    getEvenNumbers([2,4,5,6]) // should == [2,4,6]
* Pseudocode: 

* Notes After Attempt:

*/

function getEvenNumbers(numbersArray) {
    return numbersArray.filter(num => num % 2 === 0)
}

console.log(getEvenNumbers([2,4,5,6]))