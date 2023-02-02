/*
* Date: 1.20.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript
* In My Own Words: 
  Given an array of integers, increment each number by its position in the array (1-index). Return only the last number of a number greater than one digit.
* Test Conditions: 
  incrementer([]), [])
  incrementer([1, 2, 3]), [2, 4, 6])
  incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8])
* Pseudocode: 

* Notes After Attempt:
  I could have just mapped through the array and took the remainder after dividing by 10. I didn't have input on potential input limitations though.
*/

function incrementer(nums) { 
  for (let i = 0; i < nums.length; i++) {
    nums[i] += (i + 1)
    let temp = nums[i].toString()
    if (temp.length > 1) {
      nums[i] = parseInt(temp.slice(temp.length -1))
    } else {
      nums[i] = parseInt(temp)
    }
  }
  return nums
}

module.exports = incrementer