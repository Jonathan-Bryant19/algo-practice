/*
* Date: 2.22.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript
* In My Own Words: 
  Reformat a date string
* Test Conditions: 
  shortenToDate("Friday May 2, 9am"), "Friday May 2");
  shortenToDate("Tuesday January 29, 10pm"), "Tuesday January 29");
  shortenToDate("Monday December 25, 10pm"), "Monday December 25");
  });
* Pseudocode: 

* Notes After Attempt:

*/

function shortenToDate(longDate) {
  let split = longDate.split("")
  split.splice(split.indexOf(","))
  return split.join("")
}

