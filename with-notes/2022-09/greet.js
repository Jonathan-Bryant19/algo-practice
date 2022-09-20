/*
* Date: 9.20.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript
* In My Own Words: 
    Return a greeting given a name as input. Standardize the name (capital first letter, lower for the rest)
* Test Conditions: 
    "riley" --> "Hello Riley!"
    "JACK"  --> "Hello Jack!"
* Pseudocode: 

* Notes After Attempt:

*/

var greet = function(name) {
    return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
};

console.log(greet("RILEY"))