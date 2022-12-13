/*
* Date: 12.12.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
* In My Own Words: 
  Given an array, return a string based on the position of a specific element in that array.
* Test Conditions: 
  warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]),
		"Oi! Sheep number 2! You are about to be eaten by a wolf!"
  warnTheSheep(["sheep", "sheep", "wolf"]),
		"Pls go away and stop eating my sheep"
  warnTheSheep(["wolf"]),
		"Pls go away and stop eating my sheep"  
* Pseudocode: 

* Notes After Attempt:

*/

function warnTheSheep(queue) {
  if (queue[queue.length -1] === "wolf") return "Pls go away and stop eating my sheep"
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === "wolf") return `Oi! Sheep number ${queue.length - (i+1)}! You are about to be eaten by a wolf!`
  }
}

module.exports = warnTheSheep