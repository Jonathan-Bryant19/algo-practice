/*
* Date: 12.20.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/javascript
* In My Own Words: 
  Given a number, rotate the positions of the numbers to form a new number. Next, keep the first number static and rotate the rest. Increase the number of static number by 1 each time until all unique numbers have been formed. Return the largest of all combinations. 
* Test Conditions: 
  maxRot(38458215), 85821534);
  maxRot(195881031), 988103115);
  maxRot(896219342), 962193428);
  maxRot(69418307), 94183076);
* Pseudocode: 
  Push the number, convert to array by splitting, splice the count index position and push to end, push that number to then array, join/parse and push to number array. Return max value of number array.
* Notes After Attempt:

*/

function maxRot(n) {
  const numberArray = []
  numberArray.push(n)
  let count = 0
  while (count <= n.toString().length-2) {
    const stringArray = n.toString().split('')
    const temp = stringArray.splice(count, 1)
    stringArray.push(temp)
    const num = parseInt(stringArray.join(''))
    numberArray.push(num)
    n = num
    count++
  }
  return Math.max(...numberArray)
}

module.exports = maxRot
