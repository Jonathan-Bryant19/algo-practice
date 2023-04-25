/*
* Date: 4.25.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript
* In My Own Words: 
  Given a string and an integer, pad a "*" on either side of the string alternating sides as you go.
* Test Conditions: 
  padIt("a",1),"*a");
  padIt("a",2),"*a*");
  padIt("a",3),"**a*");
  padIt("a",4),"**a**");
  padIt("a",5),"***a**");
* Pseudocode: 

* Notes After Attempt:
  I was supposed to use a while loop for this kata. I was thinking runtime by completing fewer actions.
*/

function padIt(str, n) {
  let currentLength = str.length
  let padStartCount = Math.ceil(n / 2)
  let padEndCount = Math.floor(n / 2)
  
  const fisrtHalf = str.padStart(currentLength + padStartCount, "*")
  currentLength = fisrtHalf.length

  const fullString = fisrtHalf.padEnd(currentLength + padEndCount, "*")
  
  return fullString
}

module.exports = padIt