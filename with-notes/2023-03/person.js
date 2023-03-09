/*
* Date: 3.8.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/55a144eff5124e546400005a/train/javascript
* In My Own Words: 
  Create a basic class constructor.
* Test Conditions: 
  
* Pseudocode: 

* Notes After Attempt:

*/

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  get info() {
    return `${this.name}s age is ${this.age}`
  }
}

module.exports = Person

