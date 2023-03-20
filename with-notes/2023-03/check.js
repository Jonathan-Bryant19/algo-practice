/*
* Date: 3.19.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript
* In My Own Words: 
  Check if a value is in an array without using a loop.
* Test Conditions: 
  check([66, 101], 66), true);
  check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
  check(['t', 'e', 's', 't'], 'e'), true);
  check(['what', 'a', 'great', 'kata'], 'kat'), false);
* Pseudocode: 

* Notes After Attempt:

*/

function check(a,x){
  return a.includes(x)
}

module.exports = check