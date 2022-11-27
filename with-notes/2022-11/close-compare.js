/*
* Date: 11.26.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/56453a12fcee9a6c4700009c/train/javascript
* In My Own Words: 
  Given two integers and a margin, return whether the two integers are within the margin of each other or whether the second integer is higher or lower than the first. 
* Test Conditions: 
  closeCompare(4, 5), -1
  closeCompare(5, 5), 0
  closeCompare(6, 5), 1
  closeCompare(-6, -5), -1
* Pseudocode: 

* Notes After Attempt:

*/

function closeCompare(a, b, margin=0){
  if (margin >= Math.abs(a-b)) {
    return 0
  } else {
    return a < b ? -1 : 1
  }
}