/*
* Date: 2.27.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript
* In My Own Words: 
  Given a price per liter and number of liters, return the price of the fuel. Every 2 liters gets a discount of 5 cents per liter that increases with every 2 liters up to 25 cents.
* Test Conditions: 
  fuelPrice(5, 1.23), 5.65
  fuelPrice(8, 2.5), 18.40
  fuelPrice(5, 5.6), 27.50
* Pseudocode: 

* Notes After Attempt:

*/

function fuelPrice(liters, pricePerLiter) {
  let discountedPrice = 0
  if (liters >= 10) {
    discountedPrice = pricePerLiter - 0.25
  } else {
    discountedPrice = pricePerLiter - (Math.floor(liters / 2) * 0.05)
  }
  let cost = liters * discountedPrice
  return parseFloat(cost.toFixed(2))
}

module.exports = fuelPrice