/*
* Date: 12.14.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/train/javascript
* In My Own Words: 
  Return a day of the week based on numerical input.
* Test Conditions: 
  whatday(1),'Sunday'
  whatday(2), 'Monday'
  whatday(3),'Tuesday'
  whatday(8),  'Wrong, please enter a number between 1 and 7'
  whatday(20),  'Wrong, please enter a number between 1 and 7'
* Pseudocode: 

* Notes After Attempt:

*/

function whatday(num) { 
  switch(num) {
    case 1:
      return "Sunday"
    case 2:
      return "Monday"
    case 3:
      return "Tuesday"
    case 4:
      return "Wednesday"
    case 5:
      return "Thursday"
    case 6:
      return "Friday"
    case 7:
      return "Saturday"
    default:
      return "Wrong, please enter a number between 1 and 7"
  }
}

module.exports = whatday