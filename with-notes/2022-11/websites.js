/*
* Date: 11.23.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/525c1a07bb6dda6944000031/train/javascript
* In My Own Words: 

* Test Conditions: 
 
* Pseudocode: 

* Notes After Attempt:

*/

// add the value "codewars" to the websites array 1,000 times
function websites() {
  const websites = []
  for (let i = 0; i < 1000; i++) {
      websites.push("codewars")
  }
  return websites
}

console.log(websites())