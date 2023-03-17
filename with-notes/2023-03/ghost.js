/*
* Date: 3.16.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript
* In My Own Words: 
  Create a class that returns a random color.
* Test Conditions: 
 
* Pseudocode: 

* Notes After Attempt:

*/

var Ghost = function() {
  const colors = ["white", "yellow", "purple", "red"]
  const min = Math.ceil(0);
  const max = Math.floor(4);
  const random = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  this.color = colors[random]
};