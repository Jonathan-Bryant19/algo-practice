/*
* Date: 5.16.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/55a75e2d0803fea18f00009d/train/javascript
* In My Own Words: 
  Given four integers in an array, use them to calculate slope and return a string. 
* Test Conditions: 
  slope([19,3,20,3]), "0"
  slope([2,7,4,-7]), "-7"
  slope([10,50,30,150]), "5"
  slope([15,45,12,60]), "-5"
  slope([10,20,20,80]), "6"
  slope([-10,6,-10,3]), "undefined"
* Pseudocode: 

* Notes After Attempt:

*/

function slope(points) {
  const answer = ((points[1] - points[3])/(points[0] - points[2])).toString()
  return ((answer === "Infinity" || answer === "-Infinity")) ? "undefined" : answer
}

module.exports = slope