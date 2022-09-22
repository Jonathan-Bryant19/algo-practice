/*
* Date: 9.21.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/55ccdf1512938ce3ac000056/train/javascript
* In My Own Words: 
    Search for "tree fiddy", "3.50", or "three fifty"
* Test Conditions: 
    "Your girlscout cookies are ready to ship. Your total comes to tree fiddy" // true
* Pseudocode: 

* Notes After Attempt:

*/

function isLockNessMonster(s) {
    const split = s.split(" ")
    for (let i = 0; i < split.length; i++) {
        if (split[i] === "3.50") return true
        if (split[i] === "tree" && split[i+1] === "fiddy") return true
        if (split[i] === "three" && split[i+1] === "fifty") return true
    }    
    return false
}

console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"))