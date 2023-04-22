/*
* Date: 4.21.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
* In My Own Words: 
  Return 30 * the number of characters in a string including spaces without using "*".
* Test Conditions: 
  {
  billboard("Jeong-Ho Aristotelis"), 600
  billboard("Abishai Charalampos"), 570
  billboard("Idwal Augustin"), 420
  billboard("Hadufuns John",20), 260
  billboard("Zoroaster Donnchadh"), 570
  billboard("Claude Miljenko"), 450
  billboard("Werner Vígi",15), 165
  billboard("Anani Fridumar"), 420
  billboard("Paolo Oli"), 270
  billboard("Hjalmar Liupold",40), 600
  billboard("Simon Eadwulf"), 390
* Pseudocode: 

* Notes After Attempt:

*/

function billboard(name, price = 30){
  let characters = name.split("").length
  let cost = 0
  while (characters > 0) {
    cost += price
    characters--
  }
  return cost
} 

module.exports = billboard