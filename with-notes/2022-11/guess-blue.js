/*
* Date: 11.6.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5862f663b4e9d6f12b00003b/train/javascript
* In My Own Words: 
    Given the number of blue and red marbels in a bag, return the probability of getting a specific color. 
* Test Conditions: 
    guessBlue(5, 5, 2, 3), 0.6
    guessBlue(5, 7, 4, 3), 0.2
    guessBlue(12, 18, 4, 6), 0.4
* Pseudocode: 

* Notes After Attempt:

*/

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    const blue = blueStart - bluePulled
    const red = redStart - redPulled
    return blue / (blue + red)
}

module.exports = guessBlue