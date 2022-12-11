/*
* Date: 12.7.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/55a14f75ceda999ced000048/train/javascript
* In My Own Words: 
  Join words using "are" in between them.
* Test Conditions: 
  TempleStrings("Animals","Good"), 'Animals are Good'
* Pseudocode: 

* Notes After Attempt:

*/

var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`
}