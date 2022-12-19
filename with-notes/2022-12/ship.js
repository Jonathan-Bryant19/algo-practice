/*
* Date: 12.19.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript
* In My Own Words: 
  Use OOP to determine if the weight of a ship passes a specific threshold.
* Test Conditions: 
  new Ship(0,0) // false
  new Ship(100,20) // true
* Pseudocode: 

* Notes After Attempt:

*/

function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;

  this.isWorthIt = function() {
    const weight = this.draft - (this.crew * 1.5)
    if (weight > 20) return true
    return false
  }
}


 