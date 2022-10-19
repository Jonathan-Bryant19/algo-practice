/*
* Date: 10.19.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/582e0e592029ea10530009ce/train/javascript
* In My Own Words: 
    Given an array and index, return the name associated with the index position (1-based). 
* Test Conditions: 
    duck_duck_goose([a, b, c, d], 1) should return a.name
    duck_duck_goose([a, b, c, d], 5) should return a.name
    duck_duck_goose([a, b, c, d], 4) should return d.name
* Pseudocode: 

* Notes After Attempt:

*/

function duckDuckGoose(players, goose) {
    return players[goose-1].name
}

module.exports = duckDuckGoose