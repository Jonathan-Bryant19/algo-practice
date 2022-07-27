/*
* Date: 7.27.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5641a03210e973055a00000d/train/javascript
* In My Own Words: 
    Given a float, convert the float to two decimal places.
* Test Conditions: 
    twoDecimalPlaces(4.659725356), 4.66
    twoDecimalPlaces(173735326.3783732637948948), 173735326.38
* Pseudocode: 
    Use toFixed(2)
* Notes After Attempt:
    Had to remember the return value of the toFixed() method is a string so you need to parse the float.
*/

function twoDecimalPlaces(n) {
    return parseFloat(n.toFixed(2))
}

console.log(twoDecimalPlaces(4.659725356))