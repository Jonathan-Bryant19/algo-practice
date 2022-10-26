/*
* Date: 10.26.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript
* In My Own Words: 
    Return the number of times a ball passes a window when it's bouncing based on provided physics of bounce.
* Test Conditions: 
    bouncingBall(3.0, 0.66, 1.5), 3
    bouncingBall(30.0, 0.66, 1.5), 15
    bouncingBall(3.0, 1.0, 1.5), -1
* Pseudocode: 

* Notes After Attempt:

*/

function bouncingBall(h,  bounce,  window) {
    if (bounce <= 0 || bounce >= 1 || window >= h) return -1
    let currentHeight = h
    let totalBounces = 0 
    while (currentHeight > window) {
        totalBounces++
        currentHeight = currentHeight * bounce
        if (currentHeight > window) totalBounces++
    }
    return totalBounces
}

module.exports = bouncingBall