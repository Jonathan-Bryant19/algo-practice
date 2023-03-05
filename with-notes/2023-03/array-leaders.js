/*
* Date: 3.5.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript
* In My Own Words: 
  If an array leader is any element in an array of integers that is greater than all the elements to its right, then return all the array leaders in a given array.
* Test Conditions: 
  arrayLeaders([1,2,3,4,0]), [4]
  arrayLeaders([16,17,4,3,5,2]), [17,5,2]
  arrayLeaders([-1,-29,-26,-2]), [-1]
  arrayLeaders([-36,-12,-27]),  [-36,-12]
  arrayLeaders([5,-2,2]), [5,2]
  arrayLeaders([0,-1,-29,3,2]),  [0,-1,3,2]
* Pseudocode: 

* Notes After Attempt:

*/

function arrayLeaders(numbers){
  const leaders = []
  let runningTotal = numbers[numbers.length - 1]
  if (runningTotal > 0) leaders.unshift(runningTotal)

  for (let i = numbers.length - 2; i >= 0; i--) {
    if (numbers[i] > runningTotal) {
      leaders.unshift(numbers[i])
    }
    runningTotal += numbers[i]
  }
  return leaders
}

module.exports = arrayLeaders