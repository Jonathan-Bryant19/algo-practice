/*
* Date: 1.24.23
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/55e8aba23d399a59500000ce/train/javascript
* In My Own Words: 
  Create a prototype that stores Hero attributes.
* Test Conditions: 
  
* Pseudocode: 

* Notes After Attempt:

*/

function Hero (name="Hero") {
  this.name = name, 
  this.position = '00',
  this.health = 100,
  this.damage = 5,
  this.experience = 0
}