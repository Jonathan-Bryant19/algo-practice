/*
* Date: 9.17.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/525c1a07bb6dda6944000031/train/javascript
* In My Own Words: 
    Add a word to a array 1000 times.
* Test Conditions: 
    
* Pseudocode: 

* Notes After Attempt:

*/

function websites() {
    var websites = []
    for (let i = 0; i < 1000; i++) {
        websites.push("codewars")
    }
    return websites
}

console.log(websites())