/*
* Date: 10.30.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/56598d8076ee7a0759000087/train/javascript
* In My Own Words: 
    Given an amount and string rating, return the amount to tip based on a string (case insensitive) to percentage table provided, rounded up. 
* Test Conditions: 
    calculateTip(20, "Excellent"), 4
    calculateTip(26.95, "good"), 3
* Pseudocode: 

* Notes After Attempt:
    I could have used an object to store the tip values but always stumble when implementing a switch statement. 
*/

function calculateTip(amount, rating) {
    const lowercaseRating = rating.toLowerCase()
    let tip
    switch (lowercaseRating) {
        case 'terrible':
            tip = 0.00
            break
        case 'poor':
            tip = 0.05
            break
        case 'good':
            tip = 0.10
            break
        case 'great':
            tip = 0.15
            break
        case 'excellent':
            tip = 0.20
            break
        default:
            return "Rating not recognised"
    }
    return Math.ceil(amount * tip)
}

module.exports = calculateTip