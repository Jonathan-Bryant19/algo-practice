/*
* Date: 4.18.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/58dced7b702b805b200000be/train/javascript
* In My Own Words: 
  Given two sets of numbers as cartesean coordinates, calculate the distance between the points.
* Test Conditions: 
  distanceBetweenPoints((1, 6), (4, 2)), 5
  distanceBetweenPoints((-10.2, 12.5), (0.3, 14.7)), 10.728001
* Pseudocode: 

* Notes After Attempt:

*/

function distanceBetweenPoints(a, b) {
  const aSquared = Math.pow((Math.abs(a[0] - b[0])), 2)
  const bSquared = Math.pow((Math.abs(a[1] - b[1])), 2)
  return Number.parseFloat(Math.sqrt(aSquared + bSquared).toFixed(6))
}

module.exports = distanceBetweenPoints