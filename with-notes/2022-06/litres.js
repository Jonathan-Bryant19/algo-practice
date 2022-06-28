/*
* Date: 6.27.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript
* In My Own Words: 
    Take an integer and return the integer times 0.5 rounded down. 
* Test Conditions: 
    litres(2), 1
    litres(1.4), 0
    litres(12.3), 6
    litres(0.82), 0
    litres(11.8), 5
    litres(1787), 893
    litres(0), 0
* Pseudocode: 
    It already provided a template. 
* Notes After Attempt:
    My solution matched Best Practices.
*/

function litres(time) {
    return Math.floor(time * 0.5)
}
  
console.log(litres(1787))