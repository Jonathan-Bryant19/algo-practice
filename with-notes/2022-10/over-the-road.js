/*
* Date: 10.28.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/javascript
* In My Own Words: 
    Find the position of an integer in a second array based on the position of a number in the first array. The two arrays are built in opposite directions.
* Test Conditions: 
    1, 3 --> 6
    3, 3 --> 4
    2, 3 --> 5
    3, 5 --> 8
* Pseudocode: 
    * Build arrays of odd and even numbers, but count backwards on one. 
    * Find the index position of the address and compare to index position of opposite array.
* Notes After Attempt:

*/

function overTheRoad(address, n){
    const odds = []
    const evens = []
    let number = 1
    while (evens.length < n) {
        if (number % 2 === 0) {
            evens.push(number)
        } else {
            odds.push(number)
        }
        number++
    }
    const reverse = odds.reverse()
    if (address % 2 === 0) {
        const index = evens.indexOf(address)
        return reverse[index]
    } else {
        const index = reverse.indexOf(address)
        return evens[index]
    }
}
// console.log(overTheRoad(1, 3))
module.exports = overTheRoad