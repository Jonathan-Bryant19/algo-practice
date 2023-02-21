/*
* Date: 2.20.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript
* In My Own Words: 
  Mangos are buy 2, get one free. Given the number of mangos and cost per mango, return the total cost. 
* Test Conditions: 
  mango(3, 3), 6
  mango(9, 5), 30
* Pseudocode: 

* Notes After Attempt:

*/

function mango(quantity, price){
  const freebees = Math.floor(quantity / 3)
  return (quantity - freebees) * price
}

module.exports = mango