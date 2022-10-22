/*
* Date: 10.20.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript
* In My Own Words: 
    Given markers, distances between markers, and the width of markers, return the distance between markers. 
* Test Conditions: 
    pillars(1, 10, 10) , 0
    pillars(2, 20, 25) , 2000
* Pseudocode: 
    dist * (pillars - 1)
    width * (pillars -2)
* Notes After Attempt:

*/

function pillars(numPill, dist, width) {
    if (numPill === 1) return 0
    return ((dist * 100) * (numPill - 1)) + (width * (numPill - 2))
}

module.exports = pillars