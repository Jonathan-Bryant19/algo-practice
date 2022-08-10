/*
* Date: 8.4.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/javascript
* In My Own Words: 
    Return an interpolated string greeting. 
* Test Conditions: 
    sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!'
* Pseudocode: 

* Notes After Attempt:

*/

function sayHello( name, city, state ) {
    return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))