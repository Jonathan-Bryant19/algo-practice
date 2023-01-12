/*
* Date: 1.4.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
* In My Own Words: 
  Given a mixed array of string and integer numbers, add up the integers and subtract from total of string integers.
* Test Conditions: 
  divCon([9, 3, '7', '3']), 2);
  divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
  divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13); 
* Pseudocode: 

* Notes After Attempt:

*/

function divCon(x){
  let intSum = 0
  let stringSum = 0
  x.forEach(num => {
    if (typeof(num) === 'number') {
      intSum += num
    } else {
      stringSum += parseInt(num)
    }
  })
  return intSum - stringSum
}

module.exports = divCon