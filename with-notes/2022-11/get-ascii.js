/*
* Date: 12.2.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/55acfc59c3c23d230f00006d/train/javascript
* In My Own Words: 
  Given a character, return the ASCII code.
* Test Conditions: 
  getASCII('A'),65)
  getASCII(' '),32)
  getASCII('!'),33)
* Pseudocode: 

* Notes After Attempt:

*/

function getASCII(c){
  return c.charCodeAt(0)
}

console.log(getASCII("A"))