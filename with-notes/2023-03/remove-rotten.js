/*
* Date: 3.6.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript
* In My Own Words: 
  Given an array of strings of fruits, remove fruits with the word "rotten" prepending them and replace with fruit that is referenced. Return the modified array (or a new one).
* Test Conditions: 
  removeRotten(["apple","banana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"]
  removeRotten([]), []
* Pseudocode: 

* Notes After Attempt:

*/

function removeRotten(bagOfFruits){
  if (bagOfFruits === [] || bagOfFruits === null || bagOfFruits === undefined) return []

  for (let i = 0; i < bagOfFruits.length; i++) {
    const isRotten = bagOfFruits[i].slice(0, 6) === "rotten"
    if (isRotten) {
      bagOfFruits[i] = bagOfFruits[i].slice(6).toLowerCase() // this could be more efficient if I only target the first letter
    }
  }

  return bagOfFruits
  
}

module.exports = removeRotten