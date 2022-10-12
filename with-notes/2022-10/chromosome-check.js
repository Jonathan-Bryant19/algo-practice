/*
* Date: 10.12.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript
* In My Own Words: 
    Given a combination of XY chromosomes as a string, return the gender.
* Test Conditions: 
    chromosomeCheck('XY'), "Congratulations! You're going to have a son."
    chromosomeCheck('XX'), "Congratulations! You're going to have a daughter."
* Pseudocode: 

* Notes After Attempt:

*/

function chromosomeCheck(sperm) {
    const split = sperm.split("")
    for (let i = 0; i < split.length; i++) {
        if (split[i] === "Y") return "Congratulations! You're going to have a son."
    }
    return "Congratulations! You're going to have a daughter."
}

module.exports = chromosomeCheck