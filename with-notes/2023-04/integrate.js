/*
* Date: 4.27.23
* Rank: 8 Kyu
* Link: codewars.com/kata/59811fd8a070625d4c000013/train/javascript
* In My Own Words: 
  Return the integral of the expression by adding one to the exponent and dividing the base by that new number. Return as a string.
* Test Conditions: 
  integrate(3,2), "1x^3");
  integrate(12,5), "2x^6");
  integrate(20,1), "10x^2")
  integrate(40,3), "10x^4")
  integrate(90,2), "30x^3")
* Pseudocode: 

* Notes After Attempt:

*/

function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`
}

module.exports = integrate