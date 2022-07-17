/*
* Date: 7.17.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
* In My Own Words: 
    Give an integer, return the sum of a series of number up to the nth integer. The series begins with 1, then 1/4. From there, the denominator increases by 3 at each point in the series (1/7, 1/10, 1/13, etc.). Return the final value.
* Test Conditions: 
    SeriesSum(1), "1.00"
    SeriesSum(2), "1.25"
    SeriesSum(3), "1.39"
    SeriesSum(4), "1.49"
* Pseudocode: 
    1. Handle outputs of 0 and 1
    2. Loop until number hits, adding 3 to the denominator each time. 
    3. Return result.toFixed(2)
* Notes After Attempt:
    I could have condensed this into a single loop. 
*/

function SeriesSum(n) {
    if (n === 0 || n === 1) {
        return n.toFixed(2)
    }
    let counter = 1
    let sum = 1
    let denominator = 4
    while (counter < n) {
        sum = sum + (1/denominator)
        denominator += 3
        counter++
    }
    return sum.toFixed(2)
}

console.log(SeriesSum(4))