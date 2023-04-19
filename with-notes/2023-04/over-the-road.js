/*
* Date: 4.19.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/javascript
* In My Own Words: 
  Given arrays where odds decrease and evens increase, and given the total number of pairs and a specific number, return the number in the same position in the opposite array.
* Test Conditions: 
  overTheRoad(2,3), 5
  overTheRoad(3,5), 8
  overTheRoad(7,11), 16
  overTheRoad(23633656673,310027696726), 596421736780
* Pseudocode: 

* Notes After Attempt:
  
*/

function overTheRoad(address, n) {
  const sum = (n * 2) + 1
  return Math.abs(address - sum)
}

module.exports = overTheRoad