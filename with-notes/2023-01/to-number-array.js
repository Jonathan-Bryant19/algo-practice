/*
* Date: 1.16.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript
* In My Own Words: 
  Given an array of numbers as a string datatype, return an array of the strings converted to numbers.
* Test Conditions: 
  toNumberArray(["1","2","3"]), [1,2,3])
  toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3])
* Pseudocode: 

* Notes After Attempt:
  I could have just done `return stringarray.map(parseFloat)`. My instinct was to not modify the input. 
*/

function toNumberArray(stringarray){
  const numberarray = stringarray.map(num => {
    return parseFloat(num)
  })
  return numberarray
}

module.exports = toNumberArray
