/*
* Date: 10.11.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript
* In My Own Words: 
    Write a function that demonstrates an if statement.
* Test Conditions: 
    if(true, function1, function2) // function1()
* Pseudocode: 

* Notes After Attempt:

*/

function _if(bool, func1, func2) {
    return bool ? func1 : func2
}

module.exports = _if