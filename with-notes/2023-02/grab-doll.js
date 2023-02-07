/*
* Date: 2.7.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript
* In My Own Words: 
  Given an array of strings, look for specific strings and push them to an empty array until the loop is finished or until there are 3 elements in the array. Return the array. You must use 'for', 'break', and 'continue' in the code.
* Test Conditions: 
  grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]),["Hello Kitty"]);
  grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]),["Hello Kitty","Hello Kitty"]);
  grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]),["Hello Kitty","Hello Kitty","Barbie doll"]);
  grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]),["Barbie doll","Hello Kitty","Hello Kitty"]);
* Pseudocode: 

* Notes After Attempt:
  I should have checked the length after each push. 
*/

function grabDoll(dolls){
  let bag = []
  for (let doll of dolls) {
    if (bag.length === 3) {
      break
    }
    if (doll === "Hello Kitty" || doll === "Barbie doll") {
      bag.push(doll)
    } else {
      continue
    }
  }
  return bag;
}

module.exports = grabDoll