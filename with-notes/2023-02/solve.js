/*
* Date: 2.24.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript
* In My Own Words: 
  Given a string, return an array of integers containing counts of elements of the string (upper case, lower case, numbers, and special characters).
* Test Conditions: 
  solve(""),[0,0,0,0]
  solve("aAbBcC"),[3,3,0,0]
  solve("Codewars@codewars123.com"),[1,18,3,2]
  solve("bgA5<1d-tOwUZTS8yQ"),[7,6,3,2]
  solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),[9,9,6,9]
  solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"),[15,8,6,9]
  solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
  solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10]
* Pseudocode: 

* Notes After Attempt:

*/

function solve(s){
  let upperCase = 0
  let lowerCase = 0
  let numbers = 0
  let specialChars = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      upperCase++
    } else if (s[i] === s[i].toLowerCase()) {
      lowerCase++
    } else if (parseInt(s[i])) {
      numbers++
    } else {
      specialChars++
    }
  }
  return [upperCase, lowerCase, numbers, specialChars]
}

// module.exports = solve
console.log(solve('Codewars@codewars123.com'))