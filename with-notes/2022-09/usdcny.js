/*
* Date: 9.19.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5977618080ef220766000022/train/javascript
* In My Own Words: 
    Create a one way currency converter.
* Test Conditions: 
    15  -> '101.25 Chinese Yuan'
    465 -> '3138.75 Chinese Yuan'
* Pseudocode: 

* Notes After Attempt:

*/

function usdcny(usd) {
    return `${(6.75 * usd).toFixed(2)} Chinese Yuan`
}

console.log(usdcny(684))