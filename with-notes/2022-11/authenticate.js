/*
* Date: 11.24.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/52adc142b2651f25a8000643/train/javascript
* In My Own Words: 
  Write a simple authentication function using a class based structure.
* Test Conditions: 
  
* Pseudocode: 

* Notes After Attempt:

*/

function Sleigh() {

}

Sleigh.prototype.authenticate = function(name, password) {
  if (name === "Santa Claus" && password === "Ho Ho Ho!") {
    return true
  } else {
    return false
  }
};