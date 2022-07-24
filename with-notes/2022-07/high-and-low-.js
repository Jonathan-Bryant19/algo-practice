/*
* Date: 7.23.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
* In My Own Words: 
    Given a string of numbers separated by spaces, return the highest and lowest number (highest number first)
* Test Conditions: 
    highAndLow("1 2 3 4 5");  // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
* Pseudocode: 
    Create variables for high and low
    Split the string, convert to integer, pull highest and lowest, convert back to string. 
* Notes After Attempt:
    
*/

function highAndLow(numbers){
    let high = -Infinity
    let low = Infinity
    const split = numbers.split(" ").map(num => parseInt(num))
    for (let i = 0; i < split.length; i++) {
        if (split[i] > high) high = split[i].toString()
        if (split[i] < low) low = split[i].toString()
    }
    return high + " " + low
}

console.log(highAndLow("1 2 -3 4 5"))