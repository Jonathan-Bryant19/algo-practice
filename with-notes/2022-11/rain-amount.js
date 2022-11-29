/*
* Date: 11.28.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript
* In My Own Words: 
  Debug simple code.
* Test Conditions: 
  rainAmount(100), "Your plant has had more than enough water for today!"
  rainAmount(39), "You need to give your plant 1mm of water"
* Pseudocode: 

* Notes After Attempt:

*/

function rainAmount(mm) {
  if (mm >= 40) {
    return "Your plant has had more than enough water for today!"
  } else {
    return "You need to give your plant " + (40 - mm) + "mm of water"
  }
}