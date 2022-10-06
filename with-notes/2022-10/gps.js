/*
* Date: 10.6.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript
* In My Own Words: 
    Given a static time and an array of distances, return the maximum "speed" based on the array of distances and the given speed. 
* Test Conditions: 
    var x = [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61];
    var s = 20;
    var u = 41;
* Pseudocode: 
    * Handle edge case
    * Create an empty array to store speeds
    * Determine number of intervals per hour and store in variable (3600/s)
    * Loop through array and multiply interval by the element minus the previous element. Push answer to speed array.
    * Return floor of max in speed array.
* Notes After Attempt:

*/

function gps (s, x) {
    if (x.length <= 1) return 0
    const speeds = []
    const intervals = 3600/s
    for (let i = 1; i < x.length; i++) {
        speeds.push((x[i] - x[i-1]) * intervals)
    }
    const maxSpeed = Math.max(...speeds)
    return Math.floor(maxSpeed)
}

module.exports = gps

console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]))

