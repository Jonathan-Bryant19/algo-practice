/*
* Date: 10.18.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript
* In My Own Words: 
    Give a "born" year and a "current" year, return text about the age.
* Test Conditions: 
    calculateAge(2012, 2016),"You are 4 years old."
    calculateAge(2000, 1990),"You will be born in 10 years."
    calculateAge(3400, 3400),"You were born this very year!"
* Pseudocode: 

* Notes After Attempt:

*/

function  calculateAge(born, current) {
    if (born === current) return `You were born this very year!`
    if (current - born === 1) return `You are 1 year old.`
    if (born - current === 1) return `You will be born in 1 year.`
    if (born < current) return `You are ${current-born} years old.`
    if (born > current) return `You will be born in ${born-current} years.`
}

module.exports = calculateAge